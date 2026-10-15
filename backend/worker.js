const INITIAL_MENU = [{"id":"sicak-icecekler","title":"Sıcak İçecekler","photo":"assets/coffee.jpg","items":[{"name":"Çay","price":25,"id":"sicak-icecekler-0"},{"name":"Fincan Çay","price":35,"id":"sicak-icecekler-1"},{"name":"Ihlamur Çayı","price":40,"id":"sicak-icecekler-2"},{"name":"Papatya Çayı","price":110,"id":"sicak-icecekler-3"},{"name":"Oralet Çeşitleri","price":40,"id":"sicak-icecekler-4"},{"name":"Türk Kahvesi","price":100,"id":"sicak-icecekler-5"},{"name":"Duble Türk Kahvesi","price":160,"id":"sicak-icecekler-6"},{"name":"Damla Sakızlı Türk Kahvesi","price":100,"id":"sicak-icecekler-7"},{"name":"Menengiç Kahvesi","price":100,"id":"sicak-icecekler-8"},{"name":"Espresso","price":100,"id":"sicak-icecekler-9"},{"name":"Americano","price":130,"id":"sicak-icecekler-10"},{"name":"Filtre Kahve","price":100,"id":"sicak-icecekler-11"},{"name":"Latte","price":150,"id":"sicak-icecekler-12"},{"name":"Karamel Latte","price":150,"id":"sicak-icecekler-13"},{"name":"Cappuccino","price":150,"id":"sicak-icecekler-14"},{"name":"Mocha","price":150,"id":"sicak-icecekler-15"},{"name":"White Mocha","price":150,"id":"sicak-icecekler-16"},{"name":"Sıcak Çikolata","price":150,"id":"sicak-icecekler-17"},{"name":"Salep","price":100,"id":"sicak-icecekler-18"}]},{"id":"soguk-kahveler","title":"Soğuk Kahveler","photo":"assets/soguk-kahveler.jpg","items":[{"name":"Buzlu Americano","price":160,"id":"soguk-kahveler-0"},{"name":"Buzlu Latte","price":160,"id":"soguk-kahveler-1"},{"name":"Buzlu Aromalı Latte","price":160,"id":"soguk-kahveler-2"},{"name":"Buzlu Cappuccino","price":160,"id":"soguk-kahveler-3"},{"name":"Buzlu Mocha","price":160,"id":"soguk-kahveler-4"},{"name":"Buzlu White Chocolate","price":160,"id":"soguk-kahveler-5"}]},{"id":"soft-icecekler","title":"Soft İçecekler","photo":"assets/softdrinks.jpg","items":[{"name":"Kola","price":90,"id":"soft-icecekler-0"},{"name":"Fanta","price":90,"id":"soft-icecekler-1"},{"name":"Ice Tea","price":90,"id":"soft-icecekler-2"},{"name":"Ayran","price":60,"id":"soft-icecekler-3"},{"name":"Limonata","price":80,"id":"soft-icecekler-4"},{"name":"Sade Soda","price":60,"id":"soft-icecekler-5"},{"name":"Meyveli Soda","price":80,"id":"soft-icecekler-6"},{"name":"Churchill","price":100,"id":"soft-icecekler-7"},{"name":"Enerji İçeceği","price":140,"id":"soft-icecekler-8"}]},{"id":"su-gazoz","title":"Su ve Gazozlar","photo":"assets/softdrinks.jpg","items":[{"name":"Su","price":30,"id":"su-gazoz-0"},{"name":"Cola Turka (Şişe)","price":60,"id":"su-gazoz-1"},{"name":"Cola Turka (Kutu)","price":80,"id":"su-gazoz-2"},{"name":"Çamlıca Gazoz","price":80,"id":"su-gazoz-3"},{"name":"Beyoğlu Gazoz Çeşitleri","price":80,"id":"su-gazoz-4"},{"name":"Meyve Suyu","price":90,"id":"su-gazoz-5"},{"name":"Maltana Enerji İçeceği","price":100,"id":"su-gazoz-6"}]},{"id":"yemekler","title":"Yemekler","photo":"assets/burger.jpg","items":[{"name":"Köri Soslu Tavuk","price":300,"id":"yemekler-0"},{"name":"Barbekü Soslu Tavuk","price":300,"id":"yemekler-1"},{"name":"Mantı","price":200,"id":"yemekler-2"}]},{"id":"makarnalar","title":"Makarnalar","photo":"assets/makarnalar.png","items":[{"name":"Bolonez Soslu Makarna","price":250,"id":"makarnalar-0"},{"name":"Köri Soslu Makarna","price":250,"id":"makarnalar-1"},{"name":"Pesto Soslu Makarna","price":250,"id":"makarnalar-2"}]},{"id":"gozleme","title":"Gözleme","photo":"assets/gozlemeler.png","items":[{"name":"Kaşarlı Gözleme","price":200,"id":"gozleme-0"},{"name":"Karışık Gözleme","price":220,"id":"gozleme-1"},{"name":"Kavurma Gözleme","price":250,"id":"gozleme-2"}]},{"id":"tost","title":"Tost","photo":"assets/tostlar.png","items":[{"name":"Kaşarlı Tost","price":170,"id":"tost-0"},{"name":"Karışık Tost","price":200,"id":"tost-1"},{"name":"Kavurma Tost","price":220,"id":"tost-2"}]},{"id":"izgara","title":"Izgara","photo":"assets/izgaralar.png","items":[{"name":"Izgara Köfte","price":480,"id":"izgara-0"},{"name":"Izgara Tavuk","price":380,"id":"izgara-1"}]},{"id":"atistirmalik","title":"Atıştırmalıklar","photo":"assets/breakfast.jpg","items":[{"name":"Patates Tabağı","price":175,"id":"atistirmalik-0"},{"name":"Kombo Tabağı","price":250,"id":"atistirmalik-1"},{"name":"Duble Kombo Tabağı","price":450,"id":"atistirmalik-2"}]},{"id":"tatlilar","title":"Tatlılar","photo":"assets/dessert1.jpg","items":[{"name":"Fıstık Tanesi","price":260,"id":"tatlilar-0"},{"name":"Kahve Çekirdeği","price":220,"id":"tatlilar-1"},{"name":"Magnolya","price":180,"id":"tatlilar-2"},{"name":"Tiramisu","price":180,"id":"tatlilar-3"},{"name":"Limonlu Cheesecake","price":180,"id":"tatlilar-4"},{"name":"Ballı Fıstık","price":200,"id":"tatlilar-5"}]},{"id":"nargileler","title":"Nargileler","photo":"assets/nargileler.png","items":[{"name":"Anason","price":350,"id":"nargileler-0"},{"name":"Üzüm","price":350,"id":"nargileler-1"},{"name":"Pişmiş Şeftali","price":350,"id":"nargileler-2"},{"name":"Lady Killer","price":350,"id":"nargileler-3"},{"name":"Love 58","price":350,"id":"nargileler-4"},{"name":"Dejavu","price":350,"id":"nargileler-5"},{"name":"Mahalle Cafe Special","price":350,"id":"nargileler-6"},{"name":"Schweppes","price":350,"id":"nargileler-7"},{"name":"Pembe Panter","price":350,"id":"nargileler-8"},{"name":"Tatlı Cadı","price":350,"id":"nargileler-9"}]}];
const ORIGINS = new Set(['https://www.mahallecafe.com', 'https://mahallecafe.com', 'https://merterman007-sudo.github.io']);
const enc = new TextEncoder();
const json = (body, status = 200) => Response.json(body, {status, headers:{'Cache-Control':'no-store'}});
const fail = (message, status = 400) => { throw Object.assign(new Error(message), {status}); };
const hex = bytes => [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,'0')).join('');
const hash = async value => hex(await crypto.subtle.digest('SHA-256',enc.encode(value)));
const keyFor = secret => crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);
const sign = async (value, secret) => hex(await crypto.subtle.sign('HMAC',await keyFor(secret),enc.encode(value)));
async function authorized(request, env) {
  const token = (request.headers.get('Authorization') || '').replace(/^Bearer /,'');
  const [expires, nonce, signature] = token.split('.');
  if (!/^\d+$/.test(expires || '') || Number(expires)<Date.now() || Number(expires)>Date.now()+13*3600000 || !/^[a-f0-9]{32}$/.test(nonce || '') || !/^[a-f0-9]{64}$/.test(signature || '')) return false;
  return crypto.subtle.verify('HMAC',await keyFor(env.SESSION_SECRET),Uint8Array.from(signature.match(/../g),x=>parseInt(x,16)),enc.encode(`${expires}.${nonce}`));
}
async function readMenu(env) {
  const object = await env.BUCKET.get('menu/current.json');
  if (!object) return {data:{categories:INITIAL_MENU,revision:0,updatedAt:null}, etag:null};
  return {data:await object.json(),etag:object.etag};
}
function validateMenu(categories, origin) {
  if (!Array.isArray(categories) || !categories.length || categories.length>80) fail('En az bir, en fazla 80 kategori olmalı.');
  const ids=new Set(); let total=0;
  const text=(v,max,required=false)=>{if(typeof v!=='string' || v.length>max || (required&&!v.trim())) fail('Ürün veya kategori bilgilerini kontrol edin.'); return v.trim();};
  const photo=v=>{if(!v)return ''; if(typeof v!=='string'||v.length>1200)fail('Görsel geçersiz.'); if(/^assets\/[a-zA-Z0-9_.-]+$/.test(v))return v; let u; try{u=new URL(v);}catch{fail('Görsel adresi geçersiz.');} if(u.origin!==origin||!/^\/images\/[a-f0-9-]+\.(jpg|png|webp)$/.test(u.pathname))fail('Görseli panelden yükleyin.'); return u.href;};
  return categories.map(c=>{
    if(!c||typeof c!=='object'||!/^[-a-z0-9]{1,90}$/.test(c.id)||ids.has(c.id))fail('Kategori kimliği geçersiz.'); ids.add(c.id);
    if(!Array.isArray(c.items)||c.items.length>500||(total+=c.items.length)>1500)fail('En fazla 1500 ürün eklenebilir.');
    return {id:c.id,title:text(c.title,100,true),photo:photo(c.photo),hidden:!!c.hidden,items:c.items.map(i=>{
      if(!i||typeof i.price!=='number'||!Number.isFinite(i.price)||i.price<0||i.price>1000000)fail('Fiyat sıfır veya daha büyük bir sayı olmalı.');
      return {id:typeof i.id==='string'?text(i.id,100):crypto.randomUUID(),name:text(i.name,160,true),price:Math.round(i.price*100)/100,note:text(i.note||'',800),photo:photo(i.photo),hidden:!!i.hidden};
    })};
  });
}
async function consumeAttempt(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || 'unknown';
  const window=Math.floor(Date.now()/900000);
  const name=`auth/${await hash(ip+env.SESSION_SECRET)}/${window}`;
  for(let retry=0;retry<5;retry++){
    const old=await env.BUCKET.get(name); const count=old?Number(await old.text()):0;
    if(count>=10)fail('Çok fazla deneme. 15 dakika sonra tekrar deneyin.',429);
    const result=await env.BUCKET.put(name,String(count+1),{onlyIf:old?{etagMatches:old.etag}:{etagDoesNotMatch:'*'}});
    if(result)return;
  }
  fail('Biraz sonra tekrar deneyin.',429);
}
async function route(request,env) {
  const url=new URL(request.url); const path=url.pathname; const method=request.method;
  if(method==='GET'&&path==='/api/menu'){
    const {data}=await readMenu(env);
    return json({...data,categories:data.categories.filter(c=>!c.hidden).map(c=>({...c,items:c.items.filter(i=>!i.hidden)}))});
  }
  if(method==='POST'&&path==='/api/login'){
    if(!env.ADMIN_PASSWORD||!env.SESSION_SECRET)fail('Giriş henüz yapılandırılmadı.',503);
    await consumeAttempt(request,env);
    const body=await request.json();
    if(typeof body.password!=='string'||body.password.length>200||await hash(body.password)!==await hash(env.ADMIN_PASSWORD))fail('Şifre yanlış. Tekrar deneyin.',401);
    const value=`${Date.now()+12*3600000}.${hex(crypto.getRandomValues(new Uint8Array(16)))}`;
    return json({token:`${value}.${await sign(value,env.SESSION_SECRET)}`});
  }
  if(method==='GET'&&/^\/images\/[a-f0-9-]+\.(jpg|png|webp)$/.test(path)){
    const image=await env.BUCKET.get(path.slice(1));
    if(!image)return new Response('Görsel bulunamadı',{status:404});
    return new Response(image.body,{headers:{'Content-Type':image.httpMetadata?.contentType||'image/jpeg','Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff'}});
  }
  if(path.startsWith('/api/admin/')){
    if(!env.SESSION_SECRET||!await authorized(request,env))fail('Oturum sona erdi. Yeniden giriş yapın.',401);
    if(path==='/api/admin/menu'&&method==='GET')return json((await readMenu(env)).data);
    if(path==='/api/admin/menu'&&method==='PUT'){
      const raw=await request.text(); if(raw.length>2000000)fail('Menü boyutu çok büyük.',413);
      const body=JSON.parse(raw); const categories=validateMenu(body.categories,url.origin);
      const current=await readMenu(env);
      if(body.revision!==current.data.revision)fail('Menü başka bir cihazda güncellendi. Sayfayı yenileyip tekrar deneyin.',409);
      const data={categories,revision:current.data.revision+1,updatedAt:new Date().toISOString()};
      const saved=await env.BUCKET.put('menu/current.json',JSON.stringify(data),{onlyIf:current.etag?{etagMatches:current.etag}:{etagDoesNotMatch:'*'},httpMetadata:{contentType:'application/json'}});
      if(!saved)fail('Menü az önce başka bir cihazda güncellendi. Sayfayı yenileyin.',409);
      if(current.etag)await env.BUCKET.put(`backups/menu-${current.data.revision}.json`,JSON.stringify(current.data)).catch(()=>{});
      return json(data);
    }
    if(path==='/api/admin/images'&&method==='POST'){
      if(Number(request.headers.get('Content-Length'))>3*1024*1024)fail('Görsel en fazla 3 MB olabilir.',413);
      const bytes=new Uint8Array(await request.arrayBuffer()); if(bytes.length>3*1024*1024||bytes.length<12)fail('Görsel geçersiz veya çok büyük.',413);
      let ext,type;
      if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255){ext='jpg';type='image/jpeg';}
      else if(hex(bytes.slice(0,8))==='89504e470d0a1a0a'){ext='png';type='image/png';}
      else if(new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP'){ext='webp';type='image/webp';}
      else fail('JPG, PNG veya WebP görsel seçin.');
      const name=`images/${crypto.randomUUID()}.${ext}`;
      await env.BUCKET.put(name,bytes,{httpMetadata:{contentType:type}});
      return json({url:`${url.origin}/${name}`},201);
    }
  }
  if(path==='/'&&method==='GET')return new Response('Mahalle Cafe Menü Servisi',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
  return json({error:'Sayfa bulunamadı.'},404);
}
export default {async fetch(request,env){
  const origin=request.headers.get('Origin'); const own=new URL(request.url).origin;
  const allowed=!origin||ORIGINS.has(origin)||origin===own||/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
  let response;
  if(!allowed)response=json({error:'Bu adresten erişime izin verilmiyor.'},403);
  else if(request.method==='OPTIONS')response=new Response(null,{status:204});
  else try{response=await route(request,env);}catch(e){response=json({error:e.status?e.message:'İşlem tamamlanamadı. Tekrar deneyin.'},e.status||500);}
  const headers=new Headers(response.headers);
  headers.set('X-Content-Type-Options','nosniff'); headers.set('Vary','Origin');
  if(origin&&allowed)headers.set('Access-Control-Allow-Origin',origin);
  headers.set('Access-Control-Allow-Methods','GET, POST, PUT, OPTIONS');
  headers.set('Access-Control-Allow-Headers','Content-Type, Authorization');
  headers.set('Access-Control-Max-Age','600');
  return new Response(response.body,{status:response.status,headers});
}};
