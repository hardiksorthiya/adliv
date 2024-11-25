const interleaveOffset = 0.75;

var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  speed: 2000,
  loop: true,
//   mousewheelControl: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
//   mousewheel: {
//     releaseOnEdges: true,
//   },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type: 'bullets',
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
    // }
  },
  on: {
    progress: function() {
      console.log('test')
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    setTransition: function(slider, speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});


