// burger-menu
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');


menuToggle.onclick = function() {
    menuToggle.classList.toggle('menu-icone-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
};



// slider header


const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
       
      slidesPerView: 'auto',
      });

// slider 2
     const slider1 = document.querySelector('.swiper-container1');
        let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 1,
	spaceBetween: 5,
	loop: true,
	pagination: {
		el: '.pag-2',
		clickable: true,
	},
	 autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
    });


    // scroll
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }