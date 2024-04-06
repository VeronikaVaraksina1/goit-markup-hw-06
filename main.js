function openMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const links = document.querySelectorAll('.mobile-menu-nav-list-link');
    const btnOpenMenu = document.querySelector('.open-mobile-menu-button');
    const btnCloseMenu = document.querySelector('.mobile-menu-close-button');
  
    btnOpenMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });
  
    btnCloseMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });
  
    links.forEach(link =>
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
      })
    );
  }
  
  openMenu();

  function openModal() {
    const modal = document.querySelector('.backdrop');
    const btnOpenModal = document.querySelector('.order-button');
    const btnCloseModal = document.querySelector('.close-button');
  
    btnOpenModal.addEventListener('click', () => {
        modal.classList.toggle('is-open');
    });
  
    btnCloseModal.addEventListener('click', () => {
        modal.classList.toggle('is-open');
    });
  }
  
  openModal();