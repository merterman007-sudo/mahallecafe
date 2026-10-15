'use strict';
const $ = selector => document.querySelector(selector);
const API = window.MAHALLE_API;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imageUrl = value => value?.startsWith('assets/') ? '../'+value : value || '../assets/coffee.jpg';
const presets = [['coffee.jpg','Kahve'],['soguk-kahveler.jpg','Soğuk kahve'],['softdrinks.jpg','İçecek'],['burger.jpg','Yemek'],['makarnalar.png','Makarna'],['gozlemeler.png','Gözleme'],['tostlar.png','Tost'],['izgaralar.png','Izgara'],['breakfast.jpg','Atıştırmalık'],['dessert1.jpg','Tatlı'],['nargileler.png','Nargile']];
let token = sessionStorage.getItem('mahalle-session') || '';
let menu = [], savedMenu = [], revision = 0, updatedAt = null;
let filter = 'all', search = '', currentView = 'products', dirty = false, loaded = false, saving = false, uploading = false, edit = null, toastTimer;
async function api(path,options={}) {
  const headers={...options.headers};
  if(token)headers.Authorization='Bearer '+token;
  if(typeof options.body==='string')headers['Content-Type']='application/json';
  const response=await fetch(API+path,{...options,headers,signal:AbortSignal.timeout(25000),cache:'no-store'});
  const data=await response.json().catch(()=>({error:'Sunucuya ulaşılamadı.'}));
  if(!response.ok){const error=Object.assign(new Error(data.error||'İşlem tamamlanamadı.'),{status:response.status});if(response.status===401&&path!=='/api/login')showLogin('Oturum sona erdi. Tekrar giriş yapın.');throw error;}
  return data;
}
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4200);}
function showLogin(message=''){$('#dashboard').hidden=true;$('#login').hidden=false;$('#login-error').textContent=message;$('#editor').close();token='';sessionStorage.removeItem('mahalle-session');}
function logout(){if(dirty&&!confirm('Kaydedilmemiş değişiklikler var. Çıkış yapılsın mı?'))return;dirty=false;menu=[];savedMenu=[];loaded=false;showLogin();$('#password').value='';}
async function load(){
  $('#load-error').textContent='';$('#recovery').hidden=true;
  const data=await api('/api/admin/menu');
  menu=structuredClone(data.categories);menu.forEach(c=>c.items.forEach((i,n)=>{i.id ||= c.id+'-'+n;}));savedMenu=structuredClone(menu);revision=data.revision;updatedAt=data.updatedAt;loaded=true;dirty=false;
  $('#login').hidden=true;$('#dashboard').hidden=false;$('#password').value='';render();
}
function markDirty(){dirty=JSON.stringify(menu)!==JSON.stringify(savedMenu);renderStatus();}
function renderStatus(){
  const invalid=!!document.querySelector('.price-input[aria-invalid="true"]');
  $('.savebar').classList.toggle('dirty',dirty||invalid);
  $('#save-status').textContent=saving?'Menü kaydediliyor…':invalid?'Geçersiz fiyatı düzelt':dirty?'Kaydedilmemiş değişiklikler var':'Tüm değişiklikler kaydedildi';
  $('#save-detail').textContent=dirty?'Kaydettiğinde müşteri menüsüne yansır.':'Menün güncel ve yayında.';
  $('#publish').disabled=!dirty||invalid||saving||!loaded||uploading;
  $('#discard').disabled=(!dirty&&!invalid)||saving;
}
function render(){
  if(!menu.some(c=>c.id===filter))filter='all';
  $('#product-count').textContent=menu.reduce((s,c)=>s+c.items.length,0);$('#category-count').textContent=menu.length;
  $('#update-time').textContent=updatedAt?new Date(updatedAt).toLocaleString('tr-TR',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}):'İlk menü';
  $('#category-filters').innerHTML=[['all','Tümü'],...menu.map(c=>[c.id,c.title])].map(([id,title])=>`<button class="filter ${filter===id?'active':''}" data-filter="${esc(id)}" aria-pressed="${filter===id}">${esc(title)}</button>`).join('');
  const rows=[];
  for(const c of menu){if(filter!=='all'&&c.id!==filter)continue;for(const i of c.items){if(search&&!i.name.toLocaleLowerCase('tr-TR').includes(search))continue;rows.push(`<div class="product-row ${i.hidden||c.hidden?'hidden-row':''}"><img class="thumb" src="${esc(imageUrl(i.photo||c.photo))}" alt="" loading="lazy"><div class="product-info"><strong>${esc(i.name)}</strong><p>${esc(c.title)}</p>${i.hidden||c.hidden?'<p class="tag-hidden">Menüde gizli</p>':''}</div><div class="price-wrap"><input class="price-input" type="text" inputmode="decimal" value="${esc(i.price)}" data-price="${esc(i.id)}" data-category="${esc(c.id)}" aria-label="${esc(i.name)} fiyatı" aria-invalid="false"><span>₺</span></div><button class="edit-button" data-edit-product="${esc(i.id)}" data-category="${esc(c.id)}">Düzenle ↗</button></div>`);}}
  $('#product-list').innerHTML=rows.length?rows.join(''):'<div class="empty">Burada henüz ürün yok.<br>Yeni bir ürün ekleyebilir veya aramanı değiştirebilirsin.</div>';
  $('#visible-count').textContent=rows.length+' ürün';
  $('#category-list').innerHTML=menu.map((c,index)=>`<div class="category-row"><img class="thumb" src="${esc(imageUrl(c.photo))}" alt="" loading="lazy"><div class="category-info"><strong>${esc(c.title)}</strong><p>${c.items.length} ürün${c.hidden?' · Gizli':''}</p></div><div class="order-buttons"><button type="button" data-move="${esc(c.id)}" data-direction="-1" aria-label="${esc(c.title)} kategorisini yukarı taşı" ${index===0?'disabled':''}>↑</button><button type="button" data-move="${esc(c.id)}" data-direction="1" aria-label="${esc(c.title)} kategorisini aşağı taşı" ${index===menu.length-1?'disabled':''}>↓</button></div><button class="edit-button" data-edit-category="${esc(c.id)}">Düzenle</button></div>`).join('');
  renderStatus();
}
function setView(view){currentView=view;$('#products-view').hidden=view!=='products';$('#categories-view').hidden=view!=='categories';$('#add-product').hidden=view!=='products';document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));}
function photoFields(photo){return `<div class="field"><label>Görsel</label><div class="photo-picker"><img id="photo-preview" src="${esc(imageUrl(photo))}" alt="Seçilen görsel"><div><label class="upload-label" for="photo-file">↑ Telefondan seç</label><input id="photo-file" type="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" hidden><p class="field-hint" id="upload-status">Görsel otomatik küçültülür.</p><button id="remove-photo" type="button" class="photo-remove">Görseli kaldır</button></div></div><select id="photo-preset" class="photo-options" aria-label="Hazır görsel seç"><option value="">Hazır görsellerden seç…</option>${presets.map(([f,t])=>`<option value="assets/${f}">${t}</option>`).join('')}</select></div>`;}
function openEditor(type,catId=null,itemId=null){
  if(!loaded||saving)return;
  const category=menu.find(c=>c.id===catId);const item=category?.items.find(i=>i.id===itemId);
  edit={type,catId,itemId,photo:(type==='category'?category?.photo:item?.photo)||''};
  $('#editor-title').textContent=type==='category'?(category?'Kategori düzenle':'Yeni kategori'):(item?'Ürün düzenle':'Yeni ürün');
  $('#editor-error').textContent='';
  if(type==='category'){
    $('#editor-fields').innerHTML=`<div class="field"><label for="edit-name">Kategori adı</label><input id="edit-name" required maxlength="100" value="${esc(category?.title||'')}" placeholder="Örn. Kahvaltılar"></div>${photoFields(edit.photo)}<label class="checkbox-label"><input id="edit-visible" type="checkbox" ${!category?.hidden?'checked':''}> Müşteri menüsünde göster</label>${category?'<button type="button" class="danger" id="delete-entry">Kategoriyi sil</button>':''}`;
  }else{
    const selected=catId||(filter!=='all'?filter:menu[0]?.id);
    $('#editor-fields').innerHTML=`<div class="field"><label for="edit-name">Ürün adı</label><input id="edit-name" required maxlength="160" value="${esc(item?.name||'')}" placeholder="Örn. Karamel Latte"></div><div class="field-grid"><div class="field"><label for="edit-price">Fiyat (₺)</label><input id="edit-price" required type="text" inputmode="decimal" value="${esc(item?.price??'')}" placeholder="150"></div><div class="field"><label for="edit-category">Kategori</label><select id="edit-category" required>${menu.map(c=>`<option value="${esc(c.id)}" ${c.id===selected?'selected':''}>${esc(c.title)}</option>`).join('')}</select></div></div><div class="field"><label for="edit-note">Açıklama <span class="muted">(isteğe bağlı)</span></label><textarea id="edit-note" rows="2" maxlength="800" placeholder="İçerik, porsiyon veya kısa bir not…">${esc(item?.note||'')}</textarea></div>${photoFields(edit.photo)}<label class="checkbox-label"><input id="edit-visible" type="checkbox" ${!item?.hidden?'checked':''}> Müşteri menüsünde göster</label>${item?'<button type="button" class="danger" id="delete-entry">Ürünü sil</button>':''}`;
  }
  $('#editor-submit').disabled=false;$('#editor').showModal();$('#edit-name').focus();
}
function parsePrice(text){if(!/^\d+(?:[.,]\d{1,2})?$/.test(text.trim()))return NaN;const n=Number(text.replace(',','.'));return n<=1000000?n:NaN;}
async function compressPhoto(file){
  if(file.size>25*1024*1024)throw new Error('Lütfen 25 MB’tan küçük bir görsel seç.');
  const objectUrl=URL.createObjectURL(file);const image=new Image();
  try{await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('Bu fotoğraf açılamadı. JPG, PNG veya WebP olarak seç.'));image.src=objectUrl;});
    const scale=Math.min(1,1200/image.naturalWidth,1200/image.naturalHeight);const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);
    const blob=await new Promise(r=>canvas.toBlob(r,'image/webp',.82));if(!blob)throw new Error('Fotoğraf hazırlanamadı.');return blob;
  }finally{URL.revokeObjectURL(objectUrl);}
}
$('#login-form').addEventListener('submit',async e=>{e.preventDefault();$('#login-button').disabled=true;$('#login-button').textContent='Giriş yapılıyor…';$('#login-error').textContent='';try{const data=await api('/api/login',{method:'POST',body:JSON.stringify({password:$('#password').value})});token=data.token;sessionStorage.setItem('mahalle-session',token);await load();}catch(error){$('#login-error').textContent=error.status?error.message:'Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.';}finally{$('#login-button').disabled=false;$('#login-button').innerHTML='Panele giriş yap <span aria-hidden="true">→</span>';}});
$('#show-password').addEventListener('click',()=>{const show=$('#password').type==='password';$('#password').type=show?'text':'password';$('#show-password').textContent=show?'Gizle':'Göster';$('#show-password').setAttribute('aria-label',show?'Şifreyi gizle':'Şifreyi göster');});
$('#logout').addEventListener('click',logout);$('#mobile-logout').addEventListener('click',logout);
for(const button of document.querySelectorAll('[data-view]'))button.addEventListener('click',()=>setView(button.dataset.view));
$('#search').addEventListener('input',e=>{search=e.target.value.trim().toLocaleLowerCase('tr-TR');render();});
$('#category-filters').addEventListener('click',e=>{const button=e.target.closest('[data-filter]');if(button){filter=button.dataset.filter;render();}});
$('#product-list').addEventListener('input',e=>{const input=e.target.closest('[data-price]');if(!input)return;const price=parsePrice(input.value);const valid=Number.isFinite(price);input.setAttribute('aria-invalid',String(!valid));if(valid){const item=menu.find(c=>c.id===input.dataset.category)?.items.find(i=>i.id===input.dataset.price);if(item)item.price=price;markDirty();}else renderStatus();});
$('#product-list').addEventListener('click',e=>{const button=e.target.closest('[data-edit-product]');if(button)openEditor('product',button.dataset.category,button.dataset.editProduct);});
$('#category-list').addEventListener('click',e=>{const editButton=e.target.closest('[data-edit-category]');if(editButton)openEditor('category',editButton.dataset.editCategory);const move=e.target.closest('[data-move]');if(move){const index=menu.findIndex(c=>c.id===move.dataset.move),next=index+Number(move.dataset.direction);if(index>=0&&next>=0&&next<menu.length){[menu[index],menu[next]]=[menu[next],menu[index]];markDirty();render();}}});
$('#add-product').addEventListener('click',()=>openEditor('product'));$('#add-category').addEventListener('click',()=>openEditor('category'));
for(const button of document.querySelectorAll('.close-editor'))button.addEventListener('click',()=>{if(!uploading)$('#editor').close();});
$('#editor').addEventListener('cancel',e=>{if(uploading)e.preventDefault();});
$('#editor-fields').addEventListener('change',async e=>{
  if(e.target.id==='photo-preset'&&e.target.value){edit.photo=e.target.value;$('#photo-preview').src=imageUrl(edit.photo);}
  if(e.target.id==='photo-file'&&e.target.files[0]){
    const current=edit;uploading=true;$('#editor-submit').disabled=true;$('#editor-error').textContent='';$('#upload-status').textContent='Fotoğraf yükleniyor…';
    try{const blob=await compressPhoto(e.target.files[0]);const data=await api('/api/admin/images',{method:'POST',body:blob,headers:{'Content-Type':blob.type}});if(edit===current){edit.photo=data.url;$('#photo-preview').src=data.url;$('#upload-status').textContent='Fotoğraf hazır ✓';}}
    catch(error){$('#editor-error').textContent=error.status?error.message:error.message||'Fotoğraf yüklenemedi.';$('#upload-status').textContent='Tekrar bir görsel seçebilirsin.';}
    finally{uploading=false;$('#editor-submit').disabled=false;renderStatus();}
  }
});
$('#editor-fields').addEventListener('click',e=>{
  if(e.target.id==='remove-photo'){edit.photo='';$('#photo-preview').src=imageUrl('');$('#photo-preset').value='';}
  if(e.target.id==='delete-entry'){
    const c=menu.find(c=>c.id===edit.catId);if(edit.type==='category'){
      if(menu.length===1){$('#editor-error').textContent='Menüde en az bir kategori kalmalı.';return;}
      if(!confirm(`“${c.title}” kategorisi${c.items.length?' ve içindeki '+c.items.length+' ürün':''} silinsin mi? Kaydetmeden önce Vazgeç ile geri alabilirsin.`))return;
      menu=menu.filter(cat=>cat.id!==c.id);
    }else{if(!confirm('Bu ürün silinsin mi? Kaydetmeden önce Vazgeç ile geri alabilirsin.'))return;c.items=c.items.filter(i=>i.id!==edit.itemId);}
    $('#editor').close();markDirty();render();toast('Silme işlemi hazır. Yayına almak için kaydet.');
  }
});
$('#editor-form').addEventListener('submit',e=>{
  e.preventDefault();if(uploading)return;$('#editor-error').textContent='';const name=$('#edit-name').value.trim();if(!name){$('#editor-error').textContent='Lütfen bir ad yaz.';return;}
  if(edit.type==='category'){
    if(edit.catId){const c=menu.find(c=>c.id===edit.catId);Object.assign(c,{title:name,photo:edit.photo||'assets/coffee.jpg',hidden:!$('#edit-visible').checked});}
    else menu.push({id:'kategori-'+crypto.randomUUID(),title:name,photo:edit.photo||'assets/coffee.jpg',hidden:!$('#edit-visible').checked,items:[]});
  }else{
    const price=parsePrice($('#edit-price').value);if(!Number.isFinite(price)){$('#editor-error').textContent='Geçerli bir fiyat yaz. Örn. 150 veya 150,50';$('#edit-price').focus();return;}
    const next=menu.find(c=>c.id===$('#edit-category').value);if(!next){$('#editor-error').textContent='Önce bir kategori ekle.';return;}
    const item={id:edit.itemId||crypto.randomUUID(),name,price,note:$('#edit-note').value.trim(),photo:edit.photo,hidden:!$('#edit-visible').checked};
    if(edit.itemId){const old=menu.find(c=>c.id===edit.catId);const index=old.items.findIndex(i=>i.id===edit.itemId);if(old.id===next.id)old.items[index]=item;else{old.items.splice(index,1);next.items.push(item);}}
    else next.items.push(item);
  }
  $('#editor').close();markDirty();render();toast('Değişiklik hazır. Yayına almak için kaydet.');
});
$('#discard').addEventListener('click',()=>{if(!confirm('Kaydedilmemiş değişiklikler geri alınsın mı?'))return;menu=structuredClone(savedMenu);dirty=false;render();});
$('#publish').addEventListener('click',async()=>{
  if(!dirty||saving)return;saving=true;document.body.classList.add('busy');renderStatus();$('#load-error').textContent='';
  try{const data=await api('/api/admin/menu',{method:'PUT',body:JSON.stringify({categories:menu,revision})});menu=data.categories;savedMenu=structuredClone(menu);revision=data.revision;updatedAt=data.updatedAt;dirty=false;render();toast('Menün kaydedildi ve yayına alındı ✓');}
  catch(error){$('#load-error').textContent=error.status?error.message:'Kayıt sonucu doğrulanamadı. Tekrar denemeden önce menüyü yeniden yükle.';$('#recovery').hidden=false;toast('Kayıt tamamlanamadı. Açıklamayı kontrol et.');}
  finally{saving=false;document.body.classList.remove('busy');renderStatus();}
});
$('#reload').addEventListener('click',async()=>{if(dirty&&!confirm('Sunucudaki menü yüklensin mi? Kaydedilmemiş değişiklikler kaldırılacak.'))return;try{await load();}catch(error){$('#load-error').textContent=error.message;}});
window.addEventListener('beforeunload',e=>{if(dirty||uploading){e.preventDefault();e.returnValue='';}});
if(token)load().catch(error=>showLogin(error.status===401?'Oturum sona erdi. Yeniden giriş yapın.':'Menü yüklenemedi. Tekrar giriş yapın.'));
