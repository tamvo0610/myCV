/* ========== NAVBAR ON SCROLL ========== */
document.onscroll = function(){
    const scrollNavBar = document.querySelector("#navbar")
    const scrollWidth = window.scrollY
    if(scrollWidth > 0){
        scrollNavBar.style.backgroundColor = "#fff"
        scrollNavBar.style.color = "#000000"
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