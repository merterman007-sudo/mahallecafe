# Mahalle Cafe menü yönetimi

Panel: https://www.mahallecafe.com/admin/

- Ürün listesindeki fiyat alanından hızlı fiyat değiştirilebilir.
- Yeni ürün ve kategori eklenebilir; ürün başka kategoriye taşınabilir.
- Telefondan fotoğraf seçilebilir; yüklemeden önce WebP olarak küçültülür.
- Ürün/kategori gizlenebilir, kategorilerin sırası değiştirilebilir.
- Değişiklikler **Değişiklikleri kaydet** ile kalıcı olarak yayınlanır.
- **Vazgeç**, son kayıttan sonraki değişiklikleri geri alır.
- Yeni açılan müşteri menüsü güncel veriyi çeker; açık menü en fazla 60 saniyede yenilenir.

## Mimari

GitHub Pages müşteri menüsünü ve `/admin/` arayüzünü sunar. `api-config.js` yönetim servisinin adresini belirtir. Sunucu kaynağı `backend/worker.js`, Site kimliği `backend/hosting.json` içinde tutulur. Yayında kullanılan yönetim servisi Sites kaynak deposundan dağıtılır; bu klasör sunucu kaynağının aynı sürümünün kopyasıdır.

Servis: https://mahallecafe-menu-service.sade-midigital.chatgpt.site

Sites projesi: `appgprj_6ad0ea9029bc819186232e267911211d`

R2 `BUCKET` kalıcı menüyü, yüklenen görselleri ve önceki kayıtların yedeklerini saklar. Menü kaydı sürüm/ETag karşılaştırmasıyla iki cihazın birbirinin değişikliklerini ezmesini engeller. Yönetim istekleri sunucuda doğrulanan, 12 saat geçerli bir oturum gerektirir. Yanlış girişler IP başına sınırlandırılır.

`ADMIN_PASSWORD` ve `SESSION_SECRET` Sites çalışma zamanı sırlarıdır. Şifre veya oturum anahtarı GitHub'a, HTML'e ya da istemci JavaScript'ine yazılmamalıdır. Şifre değiştirirken `SESSION_SECRET` de döndürülerek mevcut oturumlar geçersiz kılınabilir; ardından kayıtlı Site sürümü yeniden dağıtılmalıdır.

PDF menüler bu panel tarafından değiştirilmez; yönetilen içerik web/QR menüsüdür.
