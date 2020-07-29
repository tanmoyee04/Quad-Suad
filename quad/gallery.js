var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      calculateHeight: true,
    },
    loop:true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
    
});