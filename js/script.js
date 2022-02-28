const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classlist.toggle('navActive')
    burger.classlist.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)