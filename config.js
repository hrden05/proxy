require('dotenv').config;

const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT, 10) || 7000,
  },
  proxies: {
    images: 'http://localhost:58008',
    productinfo: 'http://localhost:7777',
    reviews: 'http://localhost:6969',
    productdescription: 'http://localhost:4507',
    similar: 'http://localhost:3002',
  },
};

const config = {
  dev
};

module.exports = config[env];