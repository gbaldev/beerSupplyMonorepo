const express = require('express');
const products = require('./data/products');
const stockPrice = require('./data/stock-price');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/public/products', express.static(path.join(__dirname, 'public/products')));

const DELAY_MS = 2000;

app.get('/api/products', (req, res) => {
  setTimeout(() => {
    res.json(products);
  }, DELAY_MS);
});

app.get('/api/stock-price/:sku', (req, res) => {
  const sku = req.params.sku;
  const stockInfo = stockPrice[sku];

  setTimeout(() => {
    if (stockInfo) {
      res.json(stockInfo);
    } else {
      res.status(404).json({ error: 'SKU not found' });
    }
  }, DELAY_MS);
});

app.get('/api/stock-price', (req, res) => {
  setTimeout(() => {
    res.json(stockPrice);
  }, DELAY_MS);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});