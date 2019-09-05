const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/home/home.js`)
  },
  {
    path: '/leoes',
    component: path.resolve(`src/pages/about/somosleoes.js`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/pages/404.js`)
  },
  {
    path: '/contato',
    component: path.resolve(`src/pages/contact/contact.js`)
  },
  {
    path: '/starbucks',
    component: path.resolve(`src/pages/starbucks/starbucks.js`)
  },
];