window.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('select');

  $(document).ready(function(){

    $('#burger__bottom').click(function(){
      $(this).toggleClass('open');
      $('#header').toggleClass('header__open');
      $('#burger__menu').toggleClass('burger__open');
    });

    $('.team__slick').slick({
      lazyload: true,
      centerMode: true,
      variableWidth: true,
      infinite: true,
      slidesToScroll: 1,
    });

    $('.gallery__slick').slick({
      lazyload: true,
      slidesToScroll: 1,
    });

    $('.mclass__slick').slick({
      lazyload: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.gallery__item').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 150 // don't foget to change the duration also in CSS
      }
    });

    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

    $('.vrevie__slick').slick({
      lazyload: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },
      ]
    });

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $('.course').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });

  });
});