
    returnInitial();

    $( document ).ready(function() {
      $( "#triangle" ).css( "margin-left", "23px" );
      $("#triangle").animate({"margin-left":"55px"}, 750);
      $('.show-aboutme').css( "color", "#5993FF" );
      $( ".photoFeedContent" ).css( "display", "inline-block" );
      $( ".search" ).css( "display", "none" );
      $( ".portfolio" ).css( "display", "none" );

          $('.show-aboutme').bind('click', function () {
      
      if (!($( '.show-aboutme' ).hasClass( 'active' ))) {
          returnDefault();
        };
        $("#triangle").animate({"margin-left":"55px"}, 500);
        $(".photoFeedContent").fadeIn();
        $('.show-aboutme').css( "color", "#5993FF" );
        $('.show-aboutme').addClass('active');
        $( ".search" ).css( "display", "none" );
        $( ".portfolio" ).css( "display", "none" );
        $( ".photoFeed" ).css( "display", "inline-block" );
        // $( ".content" ).height( $( ".photoFeed" ).height() + 80);
    });


     $('.show-search').bind('click', function () {
        if (!($('.show-search').hasClass( 'active' ))) {
          returnDefault();
        };

        $("#triangle").animate({"margin-left":"133px"}, 500);
        $(".searchContent").fadeIn();
        $('.show-search').css( "color", "#5993FF" );
        $('.show-search').addClass('active');
        $( ".photoFeed" ).css( "display", "none" );
        $( ".portfolio" ).css( "display", "none" );
        $( ".search" ).css( "display", "inline-block" );
        // $( ".content" ).height( $( ".search" ).height() + 80);
    });

          $( "#submit" ).click(function() {
        if($( "#tags" ).val()){
          
          $('.flickrFrame').empty();
              page = 1;
          counter = 0;
          counter2 = 0;
          tag = $( "#tags" ).val();
          callAPIPrivate(page,tag);
          $( ".photoFeed" ).css( "height", "950px" );
            $( ".photoFeed" ).css( "width", "1240px" );
          if (!($( '.show-aboutme' ).hasClass( 'active' ))) {
                  returnDefault();
                };
                $("#triangle").animate({"margin-left":"55px"}, 500);
                $(".photoFeedContent").fadeIn();
                $('.show-aboutme').css( "color", "#5993FF" );
                $('.show-aboutme').addClass('active');
                $( ".search" ).css( "display", "none" );
                $( ".portfolio" ).css( "display", "none" );
                $( ".photoFeed" ).css( "display", "inline-block" );
            }
              setTimeout(function(){
                    $( ".photoFeed" ).css( "height", "auto" );
              $( ".photoFeed" ).css( "width", "auto" );
                }, 1000);
    });
                    
    });

     function returnDefault(){
        $(".photoFeedContent").fadeOut();
        $(".searchContent").fadeOut();
        $(".portfolio-content").fadeOut();
        $( ".default-status" ).css( "color", "#ffffff" );
        $( ".default-status" ).removeClass( "active" );
     }
     function returnInitial(){
        $(".searchContent").fadeOut();
        $(".portfolio-content").fadeOut();
        $( ".default-status" ).css( "color", "#ffffff" );
        // $( ".content" ).height( $( ".photoFeed" ).height() + 120);
     }

    	$( document ).ready(function() {
   			$( window ).resize(function() {
    			$( "textarea#query" ).width( $( window ).width() - ($( window ).width())/2.5);

    		});
    	});

 $( document ).ready(function() {
 	$("#submit").click(function () {
     	
	});

  callAPIPrivate(page,tag);
  setTimeout(function(){
              	$( ".photoFeed" ).css( "height", "auto" );
  				$( ".photoFeed" ).css( "width", "auto" );
  				$( "section.search" ).css( "width", "89%" );
            }, 1000);

   $(window).scroll(function () {
      if ($(document).height() <= $(window).scrollTop() + $(window).height() +500) {

        page++;
        callAPIPrivate(page,tag);
      }
   });
 });