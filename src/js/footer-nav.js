const footerNav = () => {
  // sub menu show on mobile
  if (!window.matchMedia('(min-width: 768px)').matches) {
    const navItems = document.querySelectorAll('.footer__nav-item div');

    const onNavItemClick = navItem => {
      navItem.nextElementSibling.classList.toggle('show');
      navItem.lastElementChild.classList.toggle('show');
    };

    navItems.forEach(navItem =>
      navItem.addEventListener('click', () => onNavItemClick(navItem))
    );

    return;
  }

  // social list moving
  const toMove = document.querySelector('.js-social-list');
  const target = document.querySelector('.js-sub-list');

  target.appendChild(document.createElement('li')).appendChild(toMove);
  console.log('first');
};

export default footerNav;
