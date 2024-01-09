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





setInterval(function () {
codeaearun();
 
}, 30000);











//NOTE sticky menu



 $('body .page-tools').scroll(function() {
	
     stickymenu();
		 
	
	
 
    });
function stickymenu() {
var stickystop =	$('.sticky-stop').length;
	
if(stickystop == false){
		 $('body').addClass('sticky-stop');
		   setTimeout(function () {
   $('body').removeClass('sticky-stop');

  }, 50); 
	
 if($('#edit-menu').length){
    console.log('sticky');
         var sticky =   $('#edit-menu').offset().top;  
        var sticky2 =   $('.sticky-tools').outerHeight();  
    var stickyon = sticky + sticky2;
     
      
    
       if(stickyon < -100) { 
          $(".sticky-tools").css("height", sticky2);
       $(".sticky-tools").addClass("sticky-tools-on sticky-tools-on2");
           
      
       }
     
        else if(stickyon < 0) { 
$(".sticky-tools").removeClass("sticky-tools-on2");
           
      
       }
    else{ $(".sticky-tools").removeClass("sticky-tools-on");
        
           $("   .sticky-tools").css("height", '');
        }
          
   
  } 	
	
	
	}
}



    
    $( ".modal-list-menu" ).mouseenter( function(  ) {  
     

  }); 





// MODAL

function modallistgen() {
    
    
    
     $('.modal-list-menu').html('');
    $( ".pmodal-content" ).each( function(  ) {  
        
       var modalcode = $(this).attr('data-code-id');
        if(modalcode == undefined){
            var x = Math.floor((Math.random() * 10000000000000) + 1);
            $(this).attr('data-code-id', 'modalcode'+x);
             modalcode = $(this).attr('data-code-id');
        }
        
        var modalid = $(this).attr('id');
     $('.modal-item-sel.act').removeClass('act');
       
$('.modal-list-menu').append(  ' <div class="modal-item-sel act" data-modal-act="'+modalcode+'"> <label for="" >'+modalid+'</label></div>');
        
      $('[data-code-id='+modalcode+']').trigger('click');   
        atualizartools();
  }); 
    
  
    
}




    $( "body" ).delegate('.modal-item-sel','click', function(  ) {  
        
       var tt = $(this).hasClass('act');
        $('.modal-open').removeClass('modal-open');
          $('.modal-item-sel').removeClass('act');
        
        if( tt == false){
            
              var opeenitem = $(this).attr('data-modal-act');
        
        $(this).addClass('act');
        
        $('[data-code-id='+opeenitem+']').addClass('modal-open');
             $('[data-code-id='+opeenitem+']').trigger('click');
            atualizartools();
        }
      


  }); 



//========

function select() {
    
    
    if($('.img.active').length){
        
     $('#elem-select').removeClass('on-header');
    if($('header  .active.active-select ').length){ $('#elem-select').addClass('on-header')}  
   
     
    }
    else{$('#elem-select').css('top', '-2200px');
        
      
        }
}










//======================== templates

$( "body" ).delegate('.template-content-item','mouseout', function() {
var tt = $(this).children('.template-content-item-img');
    
      tt.animate({ scrollTop: 0 }, 400);
  
    

    
   

});



 

             




loadtemplates('primeiros');
loadtemplates('segunda_teste');
function loadtemplates(folder) {

var readabletitle = folder.replace(/\_/g, ' ');
$('.templates-list').append( " <div id='"+folder+"' class='templates-list-group' data-title='"+readabletitle+"'></div> ");            
                
  $.ajax({
   
            
    url : 'templates/'+folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|webp)$/) ) { 
                var name = val.split('/')[3].split('.')[0];
              var dataUrl = val.split('.')[0]+'.html';
 var fol = '#'+folder;
 var readablename = name.replace(/\_/g, ' ');
$(fol).append( '<div class="template-content-item"> <div class="template-content-item-img"><img src="'+val+'" alt="" template=""></div> <div class="template-content-action"> <p>'+readablename+'</p> <div class="btn-template-aplicar" data-url="'+dataUrl+'">APLICAR</div> </div> </div>');   

 

            } 
        });
    }
});      
                
                
                
                
                
                
                
    
}











//======================== treeview




//<div id="vid_648a84e2780f700008d89f4c" style="position:relative;width:100%;padding: 46.15384615384615% 0 0;"><img id="thumb_648a84e2780f700008d89f4c" src="https://images.converteai.net/f7db493a-62ca-49a6-8b4d-a7e85b76077d/players/648a84e2780f700008d89f4c/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_648a84e2780f700008d89f4c" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_648a84e2780f700008d89f4c">var s=document.createElement("script");s.src="https://scripts.converteai.net/f7db493a-62ca-49a6-8b4d-a7e85b76077d/players/648a84e2780f700008d89f4c/player.js",s.async=!0,document.head.appendChild(s);</script>




   function treeview() {
        
        $(" .page-treeview-item").remove(); 

       
 
     
       
     var bodystyle =$('#body').attr('style');  
     var treewidth = $('#page-treeview-content').outerWidth();
     var winwidth =   $('.page-site-scroll ').width();
           var bodystyle ='';
 if( $('#body').attr('style')){ bodystyle =$('#body').attr('style').replace(/"/g, "");}
       
        $('#page-treeview-content').attr('style', bodystyle);
       
//       .replace(/'/g,`"`)
     
             
       $( "main section" ).each(function( ) {
   var sec1 =	$(this).clone().find('.codearea-sub ').html('').end();
            var sec = sec1.html();
		   console.log('clonesection '+sec);
		   
		     
		   
var sectionid = $(this).attr('id');
  var sectionstyle = '';
 var scale = treewidth/winwidth;
 var secheight = $(this).innerHeight()*scale;
var classes = $(this).attr('class');
   if( $(this).attr('style')){ sectionstyle =$(this).attr('style').replace(/"/g, "");}
		   
		   

      
  var sectionmin = '<div class="tree-box-window" style="height:'+secheight+'px"> <div class="tree-box-screen"> <div class="tree-box-screen-size" style="width:'+winwidth+'px;  transform:scale('+scale+')"><section class="'+classes+'" style="'+sectionstyle+'">'+sec+'</section></div> </div> </div>';        
      
 		   
           
 $("#page-treeview-content").append(' <div class="page-treeview-item treeview-item-animation vslpagee" data-section-id="'+sectionid+'"   ><div class="page-treeview-item-img" style="'+sectionstyle+'"> '+sectionmin+' </div></div>');  
    
  
		   

         
          
                setTimeout(function(){ 
                       var secheight = $('[data-section-id="'+sectionid+'] section').innerHeight()*scale;
          $('[data-section-id="'+sectionid+'] .tree-box-window').css('height',secheight);
                    console.log('pp'+secheight);
					
					
						   $( ' [data-section-id='+sectionid+']  .codearea-sub' ).each( function() {  
var code = $(this).attr('codearea-sub-code');
		
	$(this).html('');
	 $(this).html(code);
	    }); 
         
                           }, 200);
           
          $("#page-treeview-content *").removeAttr('id');
		  
		     $("#page-treeview-content .float").removeClass('float');
       
            $('.page-treeview .resize-control').remove(); 
		     
           if( $('#body.mobile').length){ $('#page-treeview-content .desk-off').remove();}
		   if( $('#body.mobile').length == false){ $('#page-treeview-content .mobile-off').remove();}
		   $('#page-treeview-content .btsb').remove();
		   
         });   
        
   
}




$( ".page-treeview" ).mouseenter(function( ) { 
    
    if( $(this).hasClass('page-treeview-act') == false){
        
        
            treeview();  

    $(this).addClass('page-treeview-act');
        
             setTimeout(function(){ 
          $('.page-treeview-act').removeClass('page-treeview-act');
                           }, 2000);
    }
  
});



$( ".page-treeview" ).mouseout(function( ) { 
    
  
        
             setTimeout(function(){ 
			var limpar = $('.page-treeview').is(':hover');	 
				if(limpar == false) {  $(".page-treeview-item").remove(); }
        
                           }, 3000);
    
  
});



$( "#page-treeview-content " ).delegate('.page-treeview-item ','mousedown',function( ) { 

$( '#page-treeview-content ' ).sortable('enable');
     

});




    $('#page-treeview-content').sortable({
  start: function(e, ui) {

   


  },
  stop: function(e, ui) {
      var sid =  ui.item.attr('data-section-id');

      var nextid =  ui.item.next().attr('data-section-id');
      var sectionmove = $('#'+sid).clone();
      
      
      
      
      $('#'+sid).remove();
      
         console.log('section'+sid);
       console.log('sectionq'+nextid);
      
      if(nextid == undefined){
          
     
         $("main").append(sectionmove);
      }
      else{   $(sectionmove).insertBefore('#'+nextid);}
      
   
      
  }
});
    

    

 

// circular input range



(function (root, factory) {
  var $ = root.jQuery;

  if (typeof define === 'function' && define.amd) {
    // AMD
    if ($) {
      define([], factory.bind(null, $));
    }
    else {
      define(['jquery'], factory);
    }
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    if ($) {
      module.exports = factory($);
    }
    else {
      module.exports = factory(require('jquery'));
    }
  } else {
    // Browser globals (root is window)
    if ($) {
      factory($); // no global needed as we store it as a jQuery plugin on jQuery.fn
    }
    else {
      throw 'Missing required jQuery dependency';
    }
  }
}(this, function ($) {
  var isDragging = false;
  var $currentHandle = null;

  function drawCircle($container, degreeStart, degreeEnd) {
    var
      $canvas = $container.find('canvas'),
      canvas = $canvas[0]
    ;

    var outerWidth = $container.outerWidth();
    var innerWidth = $container.innerWidth();
    var borderWidth = outerWidth - innerWidth;
    $canvas.css('left', borderWidth*-1);
    $canvas.css('top', borderWidth*-1);


    var radius = (outerWidth - borderWidth / 2) / 2;
    canvas.width = outerWidth + borderWidth;
    canvas.height = canvas.width;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();



    context.arc(canvas.width / 2, canvas.width / 2,radius, degreesToRadians(degreeStart)-Math.PI/2, degreesToRadians(degreeEnd)-Math.PI/2, false);
    context.lineWidth = borderWidth/2;
    context.strokeStyle = $canvas.css('color');
    context.stroke();
  }

  function degreesToRadians (degrees) {
    return degrees * (Math.PI/180);
  }

  function updateWidget($container) {
    var $handles = $container.find('.handle');
    var $handle1 = $container.find('.handle1');
    var $handle2 = $container.find('.handle2');

    var outerWidth = $container.outerWidth();
    var innerWidth = $container.innerWidth();
    var borderWidth = (outerWidth - innerWidth) / 2;
    var handleWidth = $handles.outerWidth();

    var radius = (outerWidth - borderWidth) / 2;

    var $input = $container.find('input');
    var minValue = $input.attr('data-min') || 0;
    var maxValue = $input.attr('data-max') || 360;
    var unit = $input.attr('data-unit') || '&deg;';
    var steps = maxValue - minValue
    var stepSize = 360/steps;

    $handles.each(function(idx, handle) {
      var $handle = $(handle);
      var value = $handle.attr('data-value');
      var deg = value*stepSize;

      var X = Math.round(radius + radius * Math.sin(deg*Math.PI/180));
      var Y = Math.round(radius + radius * -Math.cos(deg*Math.PI/180));
      $handle.css({ left: X, top: Y });
      $container.find($handle.attr('data-value-target')).html($handle.attr('data-value') + unit);
    });

    value1 = $handle1.attr('data-value');
    value2 = $handle2.attr('data-value');
    drawCircle($container, value1 * stepSize, value2 * stepSize);
    $input.val(value2).trigger('change');
  }
    
    

  function init($input) {

    
       var value1 = parseInt($input.attr('start-val'));
       var value2 = parseInt($input.val());

    $container = $('<div class="circle-range-select-wrapper"></div>');
    $input.wrap($container);
    $container = $input.parent();

    $container.append('<div class="handle_start handle1" data-value="' + value1 + '" data-value-target=".value1"></div>');
    $container.append('<div class="handle handle2" data-value="' + value2 + '" data-value-target=".value2"></div>');
    $container.append('<canvas class="selected-range"></canvas>');

    updateWidget($container);

    $container.on('mousedown touchstart', '.handle', function(e) {
      isDragging = true;
      e.preventDefault();
      $currentHandle = $(e.target);
      $(document).one('mouseup touchend', function() {
        isDragging = false;
        $currentHandle = null;
      });
    });

    $(window).on('resize', updateWidget.bind(null, $container));
  }

  $(document).on('mousemove touchmove', function (e) {
    if (isDragging) {
      var $container = $currentHandle.closest('.circle-range-select-wrapper');
      var radius = $container.width() / 2;

      if (!e.offsetX && e.originalEvent.touches) {
        // touch events
        var targetOffset = $(e.target).offset();
        e.offsetX = e.originalEvent.touches[0].pageX - targetOffset.left;
        e.offsetY = e.originalEvent.touches[0].pageY - targetOffset.top;
      }
      else if(typeof e.offsetX === "undefined" || typeof e.offsetY === "undefined") {
        // firefox compatibility
        var targetOffset = $(e.target).offset();
        e.offsetX = e.pageX - targetOffset.left;
        e.offsetY = e.pageY - targetOffset.top;
      }

      var mPos = {
        x: e.target.offsetLeft + e.offsetX,
        y: e.target.offsetTop + e.offsetY
      };

      var atan = Math.atan2(mPos.x - radius, mPos.y - radius);
      var deg = -atan / (Math.PI / 180) + 180; // final (0-360 positive) degrees from mouse position

      var $input = $container.find('input');
      var minValue = $input.attr('data-min') || 0;
      var maxValue = $input.attr('data-max') || 360;
      var steps = maxValue - minValue
      var stepSize = 360/steps;

      var value = Math.round(deg/stepSize);
      //if (value == maxValue) {
      //  value = minValue;
      //}
      var boundry = $input.attr("data-boundry"),
          boundryValue = boundry.split(";"),
          startBoundy = boundryValue[0],
          endBoundry = boundryValue[1];
      // if(value > 180){
      //   return;
      // }
      var currentValueOfSlider = $input.val();

 
      
        var startValue = parseInt($input.attr('start-val'));
       var endValue = parseInt($input.val());

      // var startValue = parseInt(values[0], 0);
      // var endValue = parseInt(values[1], 0);
      if($currentHandle.hasClass("handle1")){
        if( (value >= (endValue-0)) || (value <= startBoundy) ){
          return;
      } else {
        if( (value <= (startValue+0)) || (value >= endBoundry) ){
          return;
        }
       }
      }

      $currentHandle.attr('data-value', value);
 

      updateWidget($container);
    }
  });


  $.fn.lcnCircleRangeSelect = function() {
    return this.each(function() {
      init($(this));
    });

  };

}));
jQuery('#filter-gray-scale').lcnCircleRangeSelect();
jQuery('#filter-sepia').lcnCircleRangeSelect();
jQuery('#filter-blur').lcnCircleRangeSelect();
jQuery('#filter-contrast').lcnCircleRangeSelect();
jQuery('#filter-brightness').lcnCircleRangeSelect();
jQuery('#filter-invert').lcnCircleRangeSelect();
jQuery('#filter-saturate').lcnCircleRangeSelect();
jQuery('#filter-hue-rotate').lcnCircleRangeSelect();


jQuery('#bg-gradient-deg').lcnCircleRangeSelect();














  


sitewindow();
$(window).resize(function(){   sitewindow(); 
						   
				   
setTimeout(function () {
		sitewindow()
},3000);
						   });

function sitewindow(){

var browserZoomLevel = Math.round((((window.outerWidth - 8) / window.innerWidth)*100), -1);
	$('.swz').text('Browser zoom: '+browserZoomLevel+'%');
	
	var autoscale = parseInt((100 / browserZoomLevel)*100);
	if(autoscale <= 60 ){autoscale = 60}
	if(autoscale >=201 ){autoscale = 201}
	
	$('.interface-scale input').val(autoscale);
	
	$(".iscale").remove();
	$('body').prepend('<style class="iscale">:root {--interface-size: '+autoscale/100+';}</style>');
	
	

	
	
	
var sww = parseInt($('.page-site-window').width());	
	$('.sww').text('Width: '+sww+'px');
	
	var swh = parseInt($('.page-site-window').height());	
	$('.swh').text('Height: '+swh+'px');
	
		var menuscale = $('.interface-scale input').val();	
	$('.datamenuscale').text('Interface elements scale: '+menuscale+'%');
	

//	 setTimeout(function(){
//		 
//		 	var v1 = $('#ctl-bg-gradient-deg input').val('');
// 	$('#ctl-bg-gradient-deg input').trigger('change');
//		 
//		 
//		$('#ctl-bg-gradient-deg input').val(v1);
//		$('#ctl-bg-gradient-deg input').trigger('change');
//        
//                           }, 100);
	


}









//VIDEO================




 



     

