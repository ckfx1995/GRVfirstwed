$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.hideme').each( function(i){
                                                     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                     var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                     /* If the object is completely visible in the window, fade it it */
                                                     if( bottom_of_window > bottom_of_object ){
                                                     
                                                     $(this).animate({'opacity':'1'},1000);
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
                                                     
                                                     $(this).delay( 1000 );
                                                      $(this).animate({'opacity':'1',width: '50%',left:'0%'},1000);
                                                     }
                                                     
                                                     });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });

$(document).ready(function() {
                  /* Every time the window is scrolled ... */
                  $(window).scroll( function(){
                                   /* Check the location of each desired element */
                                   $('.hideme3').each( function(i){
                                                      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                                                      var bottom_of_window = $(window).scrollTop() + $(window).height();
                                                      /* If the object is completely visible in the window, fade it it */
                                                      if( bottom_of_window > bottom_of_object ){
                                                      
                                                      $(this).delay( 700 );
                                                      $(this).animate({'opacity':'1',width: '50%'},1000);
                                                      }
                                                      
                                                      });
                                   
                                   
                                   });
                  
                  
                  
                  
                  });
