/* ========== NAVBAR ON SCROLL ========== */
document.onscroll = function(){
    const scrollNavBar = document.querySelector("#header")
    const scrollWidth = window.scrollY
    if(scrollWidth > 0){
        scrollNavBar.style.backgroundColor = "hsla(219, 32%, 16%, .9)"
        scrollNavBar.style.color = "hsl(219, 8%, 75%)"
        scrollNavBar.style.lineHeight = "2rem"
        scrollNavBar.style.animation = "slideDown ease 0.3s"
        scrollNavBar.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    } else {
        scrollNavBar.style.backgroundColor = null
        scrollNavBar.style.color = null
        scrollNavBar.style.lineHeight = null
        scrollNavBar.style.animation = null
        scrollNavBar.style.boxShadow = null
    }
}

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
