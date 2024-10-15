const page = document.querySelector('#movimientos');

jQuery(page.querySelector('table')).DataTable({
  ordering: false,
  searching: false,
  lengthChange: false,
  info: false,
  language: {
    paginate: {
      previous: '«',
      next: '»',
    },
  },
});

page.addEventListener('show', () => {
  // executed when page is shown
});

page.addEventListener('hide', () => {
  // executed when page is hidden
});
