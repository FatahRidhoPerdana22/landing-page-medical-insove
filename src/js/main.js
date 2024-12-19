// Navbar
const mobileNav = document.querySelector('.mnav')
const closeBtn = document.querySelector('.mnav__close-btn')
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon')
const navOpen = 'left-0'
const navClose = '-left-72'
const arrowLeft = 'ri-arrow-left-s-line'
const arrowRight = 'ri-arrow-right-s-line'

closeBtn.addEventListener('click', () => {
  toggleMobileNav()
})

// Toggle Navbar
function toggleMobileNav() {
  const isNavOpen = mobileNav.classList.contains(navOpen)

  mobileNav.classList.toggle(navClose)
  mobileNav.classList.toggle(navOpen)
  closeBtnIcn.classList.toggle(arrowLeft)
  closeBtnIcn.classList.toggle(arrowRight)

  if (!isNavOpen) {
    closeAllSubmenus()
  }
}

document.addEventListener('click', (e) => {
  const isClickInsideNav =
    mobileNav.contains(e.target) || closeBtn.contains(e.target)
  if (!isClickInsideNav) {
    if (mobileNav.classList.contains(navOpen)) {
      mobileNav.classList.add(navClose)
      mobileNav.classList.remove(navOpen)
      closeBtnIcn.classList.add(arrowRight)
      closeBtnIcn.classList.remove(arrowLeft)
    }

    closeAllSubmenus()
  }
})

// Submenu Mobile
function toggleSubmenu(element) {
  const submenu = element.nextElementSibling

  if (submenu) {
    document.querySelectorAll('.submenu').forEach((item) => {
      if (item !== submenu) item.classList.add('hidden')
    })

    submenu.classList.toggle('hidden')
  }
}

/// Submenu Desktop
const menuItems = document.querySelectorAll('#desktopNav .menu-item')

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    const submenu = menuItem.nextElementSibling

    e.stopPropagation()

    const isSubmenuOpen = !submenu.classList.contains('hidden')

    closeAllSubmenus()

    if (!isSubmenuOpen) {
      submenu.classList.toggle('hidden')
    }
  })
})

// Menutup semua submenu
function closeAllSubmenus() {
  document.querySelectorAll('.submenu').forEach((item) => {
    item.classList.add('hidden') // Close all submenus
  })
}

// Swiper for testimonials
var swiperTestimonials = new Swiper('.testimonial__slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 10000,
  pagination: {
    el: '.testimonial__slider .swiper-pagination',
    clickable: true,
  },
})

// Swiper for team
var swiperTeam = new Swiper('.team__slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 10000,
  pagination: {
    el: '.team__slider .swiper-pagination',
    clickable: true,
  },
})

// faq
const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn')

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open')
    const iconClass = isOpen ? 'ri-substract-fill' : 'ri-add-fill'
    const iconElement = faqBtn.querySelector('i')
    iconElement.classList = `${iconClass} text-2xl`
  })
})

// to top
const toTopButton = document.getElementById('toTop')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTopButton.classList.remove('hidden')
    toTopButton.classList.add('flex')
  } else {
    toTopButton.classList.remove('flex')
    toTopButton.classList.add('hidden')
  }
})

// scroll reveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  // reset: true
})

// hero
sr.reveal('.hero__text', { origin: 'top'});
sr.reveal('.hero__img');

// stats
sr.reveal('.stats__title');
sr.reveal('.stats__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'top',
});

// services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// testimonial
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// faq
sr.reveal('.faq__title');
sr.reveal('.faq__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

// blog
sr.reveal('.blog__title');
sr.reveal('.blog__post',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// brands
sr.reveal('.brands__logo',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// footer
sr.reveal('.footer');
sr.reveal('.footer__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});
