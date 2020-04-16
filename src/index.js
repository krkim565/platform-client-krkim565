/* eslint-disable linebreak-style */
// change require to es6 import style

// import $ from 'jquery';
import './style.scss';

// eslint-disable-next-line linebreak-style
// const $ = require('jquery');


// $('#main').html('Here we go!');
let num = 0;
window.setInterval(() => {
  num += 1;
  document.getElementById('main').innerHTML = `You've been on this page for ${num} seconds...`;
}, 1000);
