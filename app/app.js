import '../assets/js/core/jquery-3.7.1.min.js';
import '../assets/js/core/popper.min.js';
import '../assets/js/core/bootstrap.min.js';
import '../assets/js/plugin/datatables/datatables.min.js';

import { fetchHTML, addScript } from './utils.js';
import { navigateTo } from './navigation.js';

// Build app HTML

const app = await fetchHTML(import.meta.resolve('./app.html'));
const container = app.querySelector('.container');
container.append(await fetchHTML(import.meta.resolve('./dashboard.html')));
container.append(await fetchHTML(import.meta.resolve('./movimientos.html')));
container.append(await fetchHTML(import.meta.resolve('./transferencias.html')));
container.append(await fetchHTML(import.meta.resolve('./cuentas.html')));
document.body.append(app);
document.body.append(await fetchHTML(import.meta.resolve('./ingresar.html')));


// Import inner page scripts

await import('./dashboard.js');
await import('./movimientos.js');
await import('./transferencias.js');
await import('./ingresar.js');


// These scripts cannot be handled through import

addScript(import.meta.resolve('../assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js'));
addScript(import.meta.resolve('../assets/js/kaiadmin.js'));


// Handle navigation

document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;
  const id = link.hash.substring(1);
  if (!id) return;
  event.preventDefault();
  navigateTo(id);
});

navigateTo('ingresar');
