$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.hideme').each( function(i){
                                                     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                     var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                     /* If the object is completely visible in the window, fade it it */
                                                     if( bottom_of_window > bottom_of_object ){
                                                     helper=1;
                                                     $(this).animate({'opacity':'1'},750);
                                                     }
                                                     
                                                     });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });


$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.hideme2').each( function(i){
                                                     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                     var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                     /* If the object is completely visible in the window, fade it it */
                                                     if( bottom_of_window > bottom_of_object ){
                                                     helper=1;
                                                     $(this).delay( 100 );
                                                      $(this).animate({'opacity':'1',width: '40%',left:'0%'},1000);
                                                     }
                                                     
                                                     });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });

$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.hideme3').each( function(i){
                                                      var helper=0;
                                                      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                      var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                      /* If the object is completely visible in the window, fade it it */
                                                      if( bottom_of_window > bottom_of_object  ){
                                                      helper=1;
                                                      $(this).delay( 100 );
                                                      $(this).animate({'opacity':'1',width: '40%'},1000);
                                                      }
                                                      
                                                      });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });

$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.RWDr').each( function(i){
                                                      var helper=0;
                                                      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                      var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                      /* If the object is completely visible in the window, fade it it */
                                                      if( bottom_of_window > bottom_of_object  ){
                                                      helper=1;
                                                      $(this).delay( 100 );
                                                      $(this).animate({'opacity':'1',width: '85%'},1000);
                                                      }
                                                      
                                                      });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });



