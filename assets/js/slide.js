var mySwiper = new Swiper('.swiper-container', {
  freeMode: true,
  // spaceBetween: 10,
  slidesPerView: 3,
  autoHeight: true,
  loop:true,
  
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});