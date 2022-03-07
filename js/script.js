const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')
function toggleMeny() {
    nav. classList.toggle('navActive')
    burger.classList.toggle('.burger')
    
}

burger.addEventListener ('click', toggleMeny)
nav.addEventListener ('click, toggleMeny') 