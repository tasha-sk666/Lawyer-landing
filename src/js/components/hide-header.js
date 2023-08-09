document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => {
    const header = document.querySelector('.header__bottom');
    let prevScroll = window.pageYOffset;
    let currentScroll;

    window.addEventListener('scroll', () => {

      currentScroll = window.pageYOffset;

      const headerHidden = () => header.classList.contains('header__bottom--hidden');

      if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add('header__bottom--hidden');
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove('header__bottom--hidden');
      }

      prevScroll = currentScroll;
    });

  }

  onScrollHeader();
});
