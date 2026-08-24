import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Minval Swatch & Group</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; background: #f6f6f7; color: #202223; }
          .card { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
          h1 { font-size: 20px; color: #008060; margin-top: 0; }
          p { line-height: 1.5; font-size: 14px; }
          .badge { background: #e4f5ec; color: #007a5a; padding: 4px 8px; border-radius: 4px; font-weight: 600; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">Sistem Aktif</span>
          <h1>Minval Swatch & Products Group Paneli</h1>
          <p>Uygulamanız Shopify Admin paneline başarıyla bağlandı!</p>
          <p><b>Products Group Kullanımı:</b> Ürün ayarlarından <code>custom.product_group</code> alanına aynı grup kodunu girerek renkleri bağlayabilirsiniz.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});