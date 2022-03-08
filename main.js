let bars = document.querySelector('.nav-toggle')
let links = document.querySelector('.links')
let spanDate = document.querySelector('footer p span')
let scrollBtn = document.querySelector('.scroll-to-top')
bars.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

let date = new Date()
let year = date.getFullYear()
spanDate.innerHTML = year

let nav = document.querySelector('.nav-center')
window.addEventListener('scroll', function () {
  // fixed navbar
  const scrollHeight = window.pageYOffset
  if (scrollHeight > nav.offsetHeight) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }

  // show scroll to top btn
  if (window.pageYOffset >= 400) {
    scrollBtn.style.opacity = '1'
  } else {
    scrollBtn.style.opacity = '0'
  }
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

let scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    scrollLinks.forEach((item) => {
      item.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    const id = e.currentTarget.getAttribute('href')
    const element = document.querySelector(id)
    let fixedNav = nav.classList.contains('fixed-nav')
    let pos = element.offsetTop - nav.offsetHeight - 20
    if (!fixedNav) {
      pos = pos - nav.offsetHeight - 20
    }
    window.scrollTo({
      left: 0,
      top: pos,
    })

    links.classList.remove('show-links')
  })
})
