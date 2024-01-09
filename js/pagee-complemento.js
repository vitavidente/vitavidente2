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
















// $("html ").delegate('.tree-box', 'mouseenter', function (e){
    

//    treeviewgenerate();
// });


// function treeviewgenerate() {
//     $('.tree-box').html('');
//     var winwidth = $('.content-center').width();
//       var treewidth = $('.tree-box').width();
//     console.log(winwidth);
    
//     var scale = treewidth/winwidth;
//     console.log('s'+scale);
    
//    $( ".content-center section" ).each( function(  ) { 
       
//       var secstyle = $(this).attr('style');  
//      var sec = $(this).html();
     
       
//        var secheight = $(this).height()*scale;
       
       
//      $('.tree-box').append('<div class="tree-box-window" style="height:'+secheight+'px"> <div class="tree-box-screen"> <div class="tree-box-screen-size" style="width:'+winwidth+'px;  transform:scale('+scale+')"><section class="sec" style="'+secstyle+'">'+sec+'</section></div> </div> </div>')
         
//   }); 
     
    
    
    
    
// }
//!teste
//?teste
//*nome
//todo: fsdkjfhn

