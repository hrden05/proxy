require('dotenv').config;

const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT, 10) || 7000,
  },
  proxies: {
    images: 'http://ec2-18-218-73-45.us-east-2.compute.amazonaws.com',
    productinfo: 'http://ec2-3-23-99-47.us-east-2.compute.amazonaws.com',
    reviews: 'http://ec2-3-21-205-61.us-east-2.compute.amazonaws.com/',
    productdescription: 'http://ec2-3-19-239-86.us-east-2.compute.amazonaws.com/',
    similar: 'http://ec2-18-222-11-65.us-east-2.compute.amazonaws.com/',
  },
};

const config = {
  dev
};

module.exports = config[env];