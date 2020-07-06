const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const proxy = require('express-http-proxy');
const config = require('../config.js');

const PORT = config.app.port;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

// imageCarousel // !DONE
// 58008
app.use('/image-carousel', proxy(config.proxies.images));
app.use('/api/images/', proxy(config.proxies.images, {
  proxyReqPathResolver: function (req) {
    var parts = req.url.split('?');
    var queryString = parts[1];
    return `/api/images${queryString ? `?${queryString}` : ''}`;
  }
}));

// product info (topSideBar) // !DONE
// 7777
app.use('/product-info', proxy(config.proxies.productinfo));
app.use('/api/stores/', proxy(config.proxies.productinfo, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/stores${queryString ? `?${queryString}` : ''}`;
  },
}));

app.use('/api/products/', proxy(config.proxies.productinfo, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/products${queryString ? `?${queryString}` : ''}`;
  },
}));

// reviews // !DONE
// 6969
app.use('/reviews', proxy(config.proxies.reviews));
app.use('/api/review/', proxy(config.proxies.reviews, {
  return '/api/review';
});

// product description  // !DONE
// 4507
app.use('/product-description', proxy(config.proxies.productdescription));
app.use('/api/joshstore/', proxy(config.proxies.productdescription, {
  proxyReqPathResolver: (req) => {
    const parts = req.url.split('?');
    const queryString = parts[1];
    return `/api/joshstore${queryString ? `?${queryString}` : ''}`;
  },
}));

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
    return `/api/storeproducts${queryString ? `?${queryString}` : ''}`;
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
    return `/api/similar${queryString ? `?${queryString}` : ''}`;
  },
}));

// app listen
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
