/*Função botão*/

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.classList.toggle("responsive");
    }else{
        menuBtn.className = "nav-menu"
    }
}

/* Sombra na barra de navegação*/ 

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)"
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"

    }else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }
}

/* Swiper */
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    fade:'true',
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0: {slidesPerView: 1,},
        520: {slidesPerView: 2,},
        850: {slidesPerView: 3,}
      }
  });



  /*--------------Efeito escrevendo------------------*/ 

  var typingEffect = new Typed(".typedText",{
        strings : ["Desenvolvedor Web.", "Dev Frontend."],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 2000
  })
 
 
  /*--------------Efeito Scroll------------------*/ 

  const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration: 1000,
    reset: true

  })

  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 500})
  sr.reveal('.featured-text-info',{delay: 500})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social-icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.slide-container',{interval: 500})
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
  })
  
  srLeft.reveal('.sobre-info',{delay: 500})
  srLeft.reveal('.contact-info',{delay: 500})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1000,
    reset: true
  })
  
  srRight.reveal('.skill-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})