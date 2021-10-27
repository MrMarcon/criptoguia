$( document ).ready(function() {
    
    // Abre menú
    $( ".menu-mobile" ).click(function() {
        $( ".menu-mobile-options" ).show();
    });
    
    //Cierra menú
    $( ".close-menu" ).click(function() {
        $( ".menu-mobile-options" ).hide();
    });

    // Carrousel de noticias
    $('.owl-carousel').owlCarousel({
        items:2.5,
        autoplay: true,
        mouseDrag: true,
        loop:true,
        margin:16,
        responsiveClass:true
    })

    // Acortar títulos en noticias
    $(function(){
        $(".noticia-individual .text-details h3").each(function(i){
          len=$(this).text().length;
          if(len>30)
          {
            $(this).text($(this).text().substr(0,30)+'...');
          }
        });       
      });



});
