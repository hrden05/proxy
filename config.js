require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT, 10) || 7000,
  },
  proxies: {
    images: 'http://ec2-18-218-73-45.us-east-2.compute.amazonaws.com/',
    productinfo: 'http://ec2-3-15-227-194.us-east-2.compute.amazonaws.com/',
    reviews: 'http://ec2-18-218-223-162.us-east-2.compute.amazonaws.com/',
    // productdescription: 'http://localhost:4507',
    productdescription: 'http://ec2-18-219-110-43.us-east-2.compute.amazonaws.com',
    similar: 'http://ec2-18-221-89-163.us-east-2.compute.amazonaws.com/',
    // similar: 'http://localhost:3002',
  },
};

const config = {
  dev,
};

module.exports = config[env];
