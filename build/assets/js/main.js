const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document)
/* ========== Header ON SCROLL ========== */
document.onscroll = function(){
    const scrollHeader = document.querySelector("#header")
    const scrollWidth = window.scrollY
    if(scrollWidth > 0){
        scrollHeader.style.backgroundColor = "hsla(219, 32%, 16%, .9)"
        scrollHeader.style.color = "hsl(219, 8%, 75%)"
        scrollHeader.style.lineHeight = "2rem"
        scrollHeader.style.animation = "slideDown ease 0.3s"
        scrollHeader.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    } else {
        scrollHeader.style = null
    }
}

/* ========== Navbar on Mobile ========== */
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* ========== Typed Text ========== */
var typed = new Typed('.text-slider-items', {
	strings: ["Frontend Developer ."],
	typeSpeed: 80,
	loop: true,
	backDelay: 1100,
	backSpeed: 30
});  
/* ========== SHOW/HIDE Project Detail ========== */
const elementProject = $$("#project-section .container .main .content .card-item")
elementProject.forEach(function(value,index){
    const show = value.querySelector(".js-project-show")
    const hide = value.querySelector(".js-project-hide")
    const element = value.querySelector(".project-item")
    console.log(hide)
    show.onclick = function (){
        element.classList.add("active")
        element.style.animation = "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    }
    hide.onclick = function (){
        element.style.animation = "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
    }
})

const test = $('#about-section .container .content .card-item.front')
console.log(test)