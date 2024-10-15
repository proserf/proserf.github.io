export function navigateTo(id) {
  const target = document.getElementById(id);
  if (!target) return;

  if (target.classList.contains('page')) {
    if (target.classList.contains('active')) return;
    const prevActive = document.querySelector('.page.active');
    if (prevActive) {
      prevActive.classList.remove('active');
      prevActive.closest('.page-container').classList.remove('active');
      prevActive.dispatchEvent(new Event('hide', { bubbles: true }));
    }
    target.classList.add('active');
    target.closest('.page-container').classList.add('active');
    target.dispatchEvent(new Event('show', { bubbles: true }));
  }

  for (const activeNavItem of document.querySelectorAll('.nav-item.active')) {
    activeNavItem.classList.remove('active');
  }
  for (const navLink of document.querySelectorAll('.nav-item a[href]')) {
    if (navLink.hash.substring(1) == id) {
      navLink.closest('.nav-item').classList.add('active');
    }
  }
}
