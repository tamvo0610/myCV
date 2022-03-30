const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document)
/* ========== Header ON SCROLL ========== */
document.onscroll = function(){
    const scrollHeader = document.querySelector("#header")
    const scrollWidth = window.scrollY
    if(scrollWidth > 0 && window.innerWidth > 768){
        scrollHeader.style.backgroundColor = "hsla(219, 32%, 16%, .9)"
        scrollHeader.style.color = "hsl(219, 8%, 75%)"
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
	strings: ["Frontend Developer..."],
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
        element.style.animation = "slide-hide-to-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    }
    hide.onclick = function (){
        element.style.animation = "slide-right-to-hide 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
        setTimeout(function(){
                element.classList.remove("active") 
        }, 500)
    }
})

var waypoint = new Waypoint({
    element: document.getElementById('exp-section'),
    handler: function() {
        $('#exp-section .container .main .title span').style.animation = "bounce-in-top 1.1s both"
    },
    offset: "95%"
})
var waypoint = new Waypoint({
    element: document.getElementById('about-section'),
    handler: function() {
        $('#about-section .container .main .title span').style.animation = "bounce-in-top 1.1s both"
    },
    offset: "95%"
})
var waypoint = new Waypoint({
    element: document.getElementById('project-section'),
    handler: function() {
        $('#project-section .container .main .title span').style.animation = "bounce-in-top 1.1s both"
    },
    offset: "95%"
})
var waypoint = new Waypoint({
    element: document.getElementById('contact-section'),
    handler: function() {
        $('#contact-section .container .main .title span').style.animation = "bounce-in-top 1.1s both"
    },
    offset: "95%"
})