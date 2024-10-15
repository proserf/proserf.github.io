import { navigateTo } from './navigation.js';

const page = document.querySelector('#ingresar');

page.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  navigateTo('dashboard');
});
