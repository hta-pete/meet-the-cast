$(function(){

    var $window = $(window);   
        

    $window.on('resize', function(){ 


                        
    });

 
    $('.hero-nav').on('mousemove', moveCards);
    $('.hero-nav').on('mouseleave', resetCard);

    $('.hero-nav').width( $('.hero-nav .col-1-5').width() * $('.hero-nav .col-1-5').length );

    function moveCards(e){

      var mouseX = e.pageX;
      var offset;

      if( mouseX > $window.width()/5 ){

        offset = mouseX / $window.width() * $(this).outerWidth() - mouseX;

      } else{ 

        offset = 0;

      }

      TweenMax.to( $(this), 1.5,{ x: -offset, ease:Power3.easeOut });

    }

    function resetCard(){

      TweenMax.to( $(this), 1.5,{ x: 0, ease:Power3.easeOut });

    }

     


    // Meet the Cast image array

    var images =[];

    $('.hero-nav .col-1-5').each(function(){

      var image = $(this).data('image');
      images.push(image);

    });

    $('.hero-nav .col-1-5').on('mouseenter', function(){

      var index = $(this).index();

      //TweenMax.to( $(this), 1.2,{ y:-40, ease:Power3.easeOut });


      if( !$(this).hasClass('active') ){

        $(this).addClass('active').siblings().removeClass('active');

        TweenMax.to( $('.hero-images'), 0.6,{ scale:1.05, opacity:0, ease:Power3.easeOut });

        setTimeout(function(){

          $('.hero-images').css({ backgroundImage: 'url('+ images[index] +')' });
          TweenMax.to( $('.hero-images'), 1.2,{ scale:1.1, opacity:1, ease:Power3.easeOut });

        },400);

      } 

    });





    



   

});


