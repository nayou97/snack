$(document).ready(function() {
	// MAIN NAVIGATION
	$('.trident').click(function() {
		$(this).toggleClass('on');
		if($(this).hasClass('on')) {
			$('.nav_wrap').show();
		} else {
			$('.nav_wrap').hide();
		}
	});
    
    // MARQUEE
    function marquee_setting(){

        var $el = $('.jumbo_marquee');

        $el.each(function(idx){

            var $this = $(this);

            if(!$this.is(":visible")) { return true; }

            var con_width = $this.width();
            var $wrap = null;

            $this.empty();

            $this.append('<div class="jumbo_marquee_el"><span class="sample">'+$this.attr('data-label')+'</span></div');
            $wrap = $this.find('.jumbo_marquee_el');

            var char_width = $wrap.find('.sample').width();
            var count = Math.ceil(con_width/char_width) + 1;
            $wrap.empty(); // delete sample

            var html = '';
            for(i = 0; i<2; i++) {

                html += '<span>';

                for(j = 0; j<count; j++) {
                    html += '<i>' + $this.attr('data-label') + '</i>';
                }

                html += '</span>'

            }

            $wrap.append(html);

        });
    }

    // BEST SLIDE
    $('.best_list').slick({
        infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 1,
        centerMode: false,
  		dots: true,
        focusOnSelect: true,
		arrows: true,
        draggable: true,
        responsive: [
					{  //1024-1300
						breakpoint: 1300,
						settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
						} 
					},
                    {  //500-1023
                        breakpoint: 1023,
                        settings: {
                            infinite: true,                            
                            slidesToShow: 1,
                            slidesToScroll: 1, 
                            centerMode: true,
                            centerPadding: '120px',
                            arrows: true,
                            dots: true
                        } 
                    },

                    {  //0-499
                        breakpoint: 500,
                        settings: {
                            infinite: true,                            
                            slidesToShow: 1,
                            slidesToScroll: 1, 
                            centerMode: true,
                            centerPadding: '40px',
                            arrows: true,
                            dots: true
                        } 
                    }
				]
    });

    //animation
    var newSub = $('.sub_title');
    var newItem = $('.new_list>li');

    $(window).scroll(function(){
        var scrollAni=$(this).scrollTop();
               
        if(scrollAni>newSub.offset().top-$(window).height()){
            newSub.find('p, span').addClass('activeAni');
        }else{
            newSub.find('p, span').removeClass('activeAni');
        }
        if(scrollAni>newItem.eq(0).offset().top-$(window).height()){
            newItem.eq(0).addClass('activeAni');
        }else{
            newItem.eq(0).removeClass('activeAni');
        }
        if(scrollAni>newItem.eq(1).offset().top-$(window).height()){
            newItem.eq(1).addClass('activeAni');
        }else{
            newItem.eq(1).removeClass('activeAni');
        }
        if(scrollAni>newItem.eq(2).offset().top-$(window).height()){
            newItem.eq(2).addClass('activeAni');
        }else{
            newItem.eq(2).removeClass('activeAni');
        }
    });

});
