// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here. icofont-instagram


//$('#icons-ui-brand').append('<h3>Brand</h3><span class="material-symbols-outlined icon"><i class="icofont-brand-whatsapp"></i></span><span class="material-symbols-outlined icon"><i class="icofont-brand-amazon"></i></span><span class="material-symbols-outlined icon"><i class="icofont-brand-apple"></i></span><span class="material-symbols-outlined icon"><i class="icofont-brand-android-robot"></i></span><span class="material-symbols-outlined icon"><i class="icofont-facebook-messenger"></i></span><span class="material-symbols-outlined icon"><i class="icofont-instagram"></i></span>');






 
      

 $("#convertion").click( function(e){
   

converts();
     
});
//  setTimeout(function()  {
//
// }, 5000);

 $("#codegenicon").click( function(e){
   

loadicons() ;
     
});
 $("#codegenilustration").click( function(e){
   

loadilustrations() ;
     
});
             


function loadicons() {
//$("#images-folder-list *").remove();
    $('.tempcodegen').html('');
 var url = "img/icons/";
$.ajax({
   

    url : url,
    
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            var regex = new RegExp( url, 'g' );
            if( val.match(regex) ) { 
var title = val.split('/')[3];
                if(title != ''){ 
                   var readabletitle = title.replace(/\_/g, ' ');
          
$('.tempcodegen').append( "<div id='"+title+"' class='icons-group' data-title='"+readabletitle+"' quantidade='0'></div> "); 
    }        
                
                
           $.ajax({
 

    url : val,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(svg)$/) ) { 
 var fol = '#'+title;
                
                

                
                
                
                
$(fol).append( "<div class='icon-item'><img class='convertimg' src='" + val +"'></div>" );   
     var qq = parseInt( $(fol).attr('quantidade'))+1;
                 $(fol).attr('quantidade',  qq);
                

 
              
                
                
                
            } 
        });
    }
               

});         
                

   
            } 
        });
    }
});
    

       
 
    
}








function loadilustrations() {
           
                
           $.ajax({
 

    url : 'img/ilustrations/',
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(svg)$/) ) { 
// var fol = '#'+title;
//                
                

                
                
                
                
$('.tempcodegen').append( "<div class='ilustration-item'><img class='convertimg' src='" + val +"'></div>" );   

          
                
            } 
        });
    }
               

});             
                
                
                
                
                
    
}























  function converts(){
                      
   
 
        jQuery(' .convertimg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                
                var $svg = jQuery(data).find('svg');

                // Add o ID do seu img no svg inline
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add a classe do seu img no svg inline
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' ');
                }

             
                $svg = $svg.removeAttr('xmlns:a');

                // Replace img pelo SVG inline
                $img.replaceWith($svg);
                

                      $('svg.convertimg [fill="#6c63ff"],[fill="#f58a97"],[fill="#0066ff"] ').attr('svg-color','c1');
                $('svg.convertimg [fill="#2f2e41"],svg [fill="#3f3d56"],  svg [fill="#a1890d"],  svg [fill="#002233"] ').attr('svg-color','c2');
                 $('svg.convertimg [fill="#575a89"],svg [fill="#303d5c"] ').attr('svg-color','c3');
                
//                    $('svg.convertimg [fill="#575a89"],svg [fill="#373e46"] ').attr('svg-color','c4');

                
             
                

                
    $(' svg.convertimg').removeClass('convertimg'); 

                
                
          $('#codegen').val('convertendo');
             
               
                  
            if( $(' .convertimg').length == false){
              var code =   $('.tempcodegen').html();
       $('#codegen').val(code.replaceAll('\n',''));}
                
            }, 'xml');
          
 });
      
      
  
  
};




















//========================

//loadtemplates();
function loadtemplates() {

 var url = "templates/";

    
    $.ajax({
    

                

    url : url,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            var regex = new RegExp( url, 'g' );
            if( val.match(regex) ) { 
var title = val.split('/')[2];
                if(title != ''){   
                    var readabletitle = title.replace(/\_/g, ' ');
$('.templates-list').append( " <div id='"+title+"' class='templates-list-group' data-title='"+readabletitle+"'></div> "); 
                  
    }        
             
                
                
                
                
                
                
                
                
                
                
                
           $.ajax({
   
            
    url : val,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|webp)$/) ) { 
                var name = val.split('/')[3].split('.')[0];
              var dataUrl = val.split('.')[0]+'.html';
 var fol = '#'+title;
$(fol).append( '<div class="template-content-item"> <div class="template-content-item-img"><img src="'+val+'" alt="" name="tema-01" template=""></div> <div class="template-content-action"> <p>'+name+'</p> <div class="btn-template-aplicar" data-url="'+dataUrl+'">APLICAR</div> </div> </div>');   

      console.log(val);
                      console.log(fol);
                   console.log(dataUrl);

            } 
        });
    }
});      
                
                
                
                
                
                
                
 
   
            } 
        });
    }
});
    
    
}












