const express = require('express');
const products = require('./data/products');
const stockPrice = require('./data/stock-price');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/public/products', express.static(path.join(__dirname, 'public/products')));


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/stock-price/:sku', (req, res) => {
  const sku = req.params.sku;
  const stockInfo = stockPrice[sku];

  if (stockInfo) {
    res.json(stockInfo);
  } else {
    res.status(404).json({ error: 'SKU not found' });
  }
});

app.get('/api/stock-price', (req, res) => {
  res.json(stockPrice);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

