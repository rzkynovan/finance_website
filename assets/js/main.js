// Change Scroll Header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Feature
const FeatureContent = document.getElementsByClassName('feature__content'),
FeatureHeader = document.querySelectorAll('.feature__header')
function toggleFeature(){
    let itemClass = this.parentNode.className 
    for (i=0; i < FeatureContent.length; i++){
        FeatureContent[i].className = 'feature__content feature__close'
    }
    if(itemClass === 'feature__content feature__close'){
        this.parentNode.className = 'feature__content feature__open'
    }
}
FeatureHeader.forEach((el)=>{
    el.addEventListener('click', toggleFeature)
})

// About Slider
var swiper = new Swiper(".about__slider", {
    loop : true,
    grabCursor: true,
    spacebetween:48,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        568:{
            slidesPerView: 2.5,
        }
    },
  });