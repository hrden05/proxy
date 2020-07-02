const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const config = require('../config.js');

const PORT = config.app.port;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// imageCarousel // !DONE
// 5808
app.use('/image-carousel', proxy(config.proxies.images));
app.use('/api/images', proxy(config.proxies.images, {
  ProxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/images${queryString ? `?${queryString}` : ''}`;
  },
}));

// product info (topSideBar) // !DONE
// 7777
app.use('/product-info', proxy(config.proxies.productinfo));

app.use('/api/stores', proxy(config.proxies.productinfo, {
  ProxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/stores${queryString ? `?${queryString}` : ''}`;
  },
}));

app.use('/api/products', proxy(config.proxies.productinfo, {
  ProxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/products${queryString ? `?${queryString}` : ''}`;
  },
}));

// reviews // !DONE
// 6969
app.use('/reviews', proxy(config.proxies.reviews));
app.use('/api/review', proxy(config.proxies.reviews));

// product description  // !DONE
// 4507
app.use('/product-description', proxy(config.proxies.productdescription));
app.use('/api/stores', proxy(config.proxies.productdescription));

// similar products (with shop, ads, you may also like) // !DONE
// 3002
app.use('/similar-products', proxy(config.proxies.similar));

app.use('/api/storeinfo/', proxy(config.proxies.similar, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/storeinfo${queryString ? `?${queryString}` : ''}`;
  },
}));

app.use('/api/storeproducts/', proxy(config.proxies.similar, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/similarproducts${queryString ? `?${queryString}` : ''}`;
  },
}));
app.use('/api/ads/', proxy(config.proxies.similar, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/ads${queryString ? `?${queryString}` : ''}`;
  },
}));
app.use('/api/similar/', proxy(config.proxies.similar, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/ads${queryString ? `?${queryString}` : ''}`;
  },
}));

// app listen
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));