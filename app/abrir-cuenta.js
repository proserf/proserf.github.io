import { navigateTo } from './navigation.js';

const page = document.querySelector('#abrir-cuenta');

const formSteps = [...page.querySelectorAll('.form-step')];
const navSteps = [...page.querySelectorAll('.step-by-step-nav .step')];
let activeStep = 0;

function goToStep(index) {
  if (!formSteps[index]) return;
  formSteps[activeStep].classList.remove('active');
  navSteps[activeStep].classList.remove('active');
  formSteps[index].classList.add('active');
  navSteps[index].classList.add('active');
  activeStep = index;
}

function next() {
  goToStep(activeStep+1);
}

function prev() {
  goToStep(activeStep-1);
}

for (const nextButton of page.querySelectorAll('.next-step')) {
  nextButton.addEventListener('click', next);
}
for (const prevButton of page.querySelectorAll('.prev-step')) {
  prevButton.addEventListener('click', prev);
}

page.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  navigateTo('dashboard');
});

page.addEventListener('show', () => {
  goToStep(0);
});
