// Menú móvil
const burger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = '#FAF7F2';
      navLinks.style.padding = '24px';
      navLinks.style.borderBottom = '1px solid #E2D9C9';
      navLinks.style.alignItems = 'flex-start';
      navLinks.style.gap = '18px';
    }
  });
}

// Cerrar menú móvil al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
      navLinks.style.display = 'none';
    }
  });
});
