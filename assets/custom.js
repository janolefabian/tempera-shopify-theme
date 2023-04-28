jQuery(document).ready(function($){

    $('.intro').delay(3000).queue(function(next){
        $(this).addClass("show");
        next();
    });
    

    // Create HTML Struktur
    letters=['T','E','M','P','E','R','A'];
    show=["4","3","2","1","2","3","4"];
    for (var i = 0; i < letters.length; i++) {
       $( ".tempera" ).append( '<span class="show'+ show[i]+'">'+letters[i]+'</span>');
    }
    $('.tempera .inner').remove();

    //Animate Letters
    $(function() {

        var counter = 0;
        $('body').cursometer({
            onUpdateSpeed: function(speed) {
                counter = counter + speed;
                if (counter > 50) {
                    classes=['show1','show2','show3','show4'];
                    $( '.tempera span' ).each(function(){
                        $(this).removeClass('show1 show2 show3 show4').addClass(classes[Math.floor(Math.random()*classes.length)]);
                    });
                    counter= 0;
                }
            },
            updateSpeedRate: 20
        });
        
    });



    $(window).scroll(function() {
        var yPos = ( $(window).scrollTop() );

        // Show/hide Scroll hint
        if(yPos > 0) {
            $('.intro').removeClass("show");
        }
        else {
            $('.intro').addClass("show");
            // $('header').css({'top': '0'},500);
            $('header').removeClass('scrolled');
        }

        // Bei Home später erst einblenden
        if(yPos > 180) { 
            $('.home header').fadeIn();

        } 

        if(yPos > 380) { // show sticky menu after screen has scrolled down from the top
            // $('header').css({'top': '-55px'},1000);
            $('header').addClass('scrolled');
        } 
        else {
           // $('body:not(.home) header').css({'top': '0'},1000);
           $('header').removeClass('scrolled');
        }

    });


  $( ".order .stringcolumn" ).hover(
      function() {
        $( '.stringcolumn' ).removeClass('hove');
        $( this ).addClass('hove');
      }
    );

  $( "#basso" ).click(
      function() {
        // event.preventDefault();
        $( '.basso' ).toggleClass('show');
      }
    );
  $( "#solo" ).click(
      function() {
        // event.preventDefault();
        $( '.solo' ).toggleClass('show');
      }
    );
  $( ".info" ).click(
      function() {
        event.preventDefault();
      }
    );

    $( ".sandwich" ).click(function() {
        event.preventDefault();
        $( ".navigation-mobile" ).fadeToggle();
        $( ".navigation-mobile" ).css({'display': 'flex'});
        $( ".sandwich" ).toggleClass('open');
    });

    // $('a.gallery').featherlightGallery({
    //     previousIcon: '«',
    //     nextIcon: '»',
    //     galleryFadeIn: 100,          
    //     galleryFadeOut: 300          
    //   });
    
   
    


});

