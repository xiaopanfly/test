$(function(){
	 //首页轮播
        	var swiper = new Swiper('.index-banner', {
	pagination: '.swiper-pagination',
          autoplay: 3000,
          paginationClickable: true,
          loop : true,
          autoplayDisableOnInteraction: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
          });
	//东视荣誉
          var figure = new Swiper('.ry_small_box', {
		         autoplay: 3000,
		         height:300,
		        spaceBetween:50,
		        centeredSlides: true,
		        autoplayDisableOnInteraction: false,
		        loop : true,
		        slidesPerView : 5,//slide可见数量
		        nextButton: '.ry-next',
		        prevButton: '.ry-prev'
		        });
})