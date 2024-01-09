


userOs();
function userOs(){
	
	
	
	
	
	if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {

		
		$('body').addClass('useros-apple');
}
}


$(document).ready(function () {

	
	
setTimeout(() => {

let popHandler = () => {
  if (confirm('Go back?')) {
    window.history.back() 
  } else {
    window.history.forward()
    setTimeout(() => {
      window.addEventListener('popstate', popHandler, {once: true})
    }, 50) // delay needed since the above is an async operation for some reason
  }
}
window.addEventListener('popstate', popHandler, {once: true})
window.history.pushState(null,null,null)
 


window.onbeforeunload = function ()
 {
     return "";
 };

}, 1000);
	
	

	
	
	
  createsave();
});





function createsave() {

  var version = '0.1';
  var date = new Date();

  var createversioncheck = $('#body').attr('createversion');

  if (createversioncheck == undefined) {

    $('#body').attr('createversion', version);
    $('#body').attr('createdate', date);

  }

  $('#body').attr('lastsaveversion', version);
  $('#body').attr('lastsavedate', date);

}






document.body.onpaste = function (e) {



  var pastedText = undefined;
  if (window.clipboardData && window.clipboardData.getData && $('[contenteditable=true].active').length) { // IE
    pastedText = window.clipboardData.getData('Text');
    document.execCommand("insertHTML", false, pastedText);
    return false; // Prevent the default handler from running.
  }

  else if (e.clipboardData && e.clipboardData.getData && $('[contenteditable=true].active').length) {
    pastedText = e.clipboardData.getData('text/plain');

    document.execCommand("insertHTML", false, pastedText);
    return false; // Prevent the default handler from running.
  }


};





$('#shortcuts').draggable();

$('.dragme-dot').mouseenter(function () {
  $('#shortcuts').draggable('enable');

});

$('.dragme-dot').mouseout(function () {
  $('#shortcuts').draggable('disable');

});


$('.shortcuts-open').mousedown(function () {


  if ($('#shortcuts.act').length) {
    $('#shortcuts').css('left', 'auto');
    $('#shortcuts').css('right', '35px');
    $('#shortcuts').css('top', '100px');

  }
  else { $('#shortcuts').addClass('act'); }

});
$('.shortcuts-close').click(function () {
  $('#shortcuts').removeClass('act');

});





$('body ').delegate('.resizeL, .resizeR, .resizeB', 'mousemove', function () {


  $('#body .ui-sortable').sortable("disable");

});
$('body ').delegate('.resizeL, .resizeR, .resizeB', 'mouseenter', function () {


  $('#body  .ui-sortable').sortable("disable");

});



$('body ').delegate('.resizeL, .resizeR, .resizeB', 'mousedown', function (event) {
  var activeW = '';
  var activeH = '';

  if (event.which === 1 && $('.page-edite').length) {
    $('body ').addClass('mousegrab');



    if ($('.resizeL:hover').length || $('.resizeR:hover').length || $('.resizeB:hover').length) {
      activeW = $('.active').width();
      activeH = $('.active').height();
      $(this).addClass('resize-act');



    }

    // var offset = $(this).offset();
    var xd = event.pageX;
    var yd = event.pageY;
    if ($('.resize-act').length) {


      var aligni = $('.active').parent().css('text-align');
      var displayi = $('.active').css('display');



      $('html').mousemove(function (eventp) {
        var newW, newH;
borderRadius();

        elem3d();
        console.log(aligni);


        newW = (eventp.pageX - xd);
        if (displayi == 'block' || displayi == 'flex' || (displayi == 'inline-block' && aligni == 'center') || (displayi == 'inline-flex' && aligni == 'center')) { newW = (eventp.pageX - xd) * 2; }



        newH = (eventp.pageY - yd) + activeH;
        if (newH < 1) { newH = $('.active').height(); }


        if ($('.resizeL.resize-act').length) {
          var wil = newW * -1 + activeW;
          if (wil < 1) { wil = $('.active').width(); }

          $('.active').css('width', wil);
          $('#ctl-size-width:not(.off) input').val(wil);
          $('.active').attr('wd', wil);

        }

        if ($('.resizeR.resize-act').length) {
          var wir = newW + activeW;
          if (wir < 1) { wir = $('.active').width(); }
          $('.active').css('width', wir);
          $('#ctl-size-width:not(.off) input').val(wir);
          $('.active').attr('wd', wir);

        }
        if ($('.resizeB.resize-act').length) {

          $('.active').css('max-height', newH);
          $('#ctl-size-height:not(.off) input').val(newH);
          $('.active').attr('mht', newH);

        }



        if ($('.active.maintain-aspect-ratio').length) {
          var mh = parseInt($('.active').height());
          $('#ctl-size-height input').val(mh)
          $('.active').attr('mht', mh);
          $('#ctl-size-height input').trigger('keyup');
        }


      });

    }
  }

});

function resizeControl() {
  $('.resizeW-act').removeClass('.resizeW-act');
  $('.resizeH-act').removeClass('.resizeH-act');

  if ($('#ctl-size-width:not(.off)').length) { $('.resize-control').addClass('resizeW-act'); }
  if ($('#ctl-size-height:not(.off)').length) { $('.resize-control').addClass('resizeH-act'); }


}




// $('html').delegate('*','mouseup', function() {
// $('.resize-act').removeClass('resize-act');

// });

$(window).mouseup(function () {


  if ($('.resize-act, .dragme-act ').length) {
    $('html').unbind('mousemove');
    $('html').off('mousemove');

    setTimeout(function () {
      $('body ').removeClass('mousegrab');
      $('.resize-act').removeClass('resize-act');
      $('.resizeW-act').removeClass('.resizeW-act');

      $('.resizeH-act').removeClass('.resizeH-act');
    }, 10);


    $('.dragme-act').removeClass('dragme-act');

  }


});














//
// $("body").delegate('.center', 'mouseenter',function(e) {
//    
//        $(this).addClass('active-select');  
//     $(this).attr('type', 'center'); 
//  });



$(document).bind("contextmenu", function (e) {
  return false;
});


$('body').mousedown(function (event) {
  var x, y;
  if (event.which === 3) {

    var offset = $(this).offset();
    x = event.pageX - offset.left;
    y = event.pageY - offset.top;

    $('#menu-float').css('display', 'block');
    $('#menu-float').css('top', y + 'px');
    $('#menu-float').css('left', x + 'px');



  }
//  else {
//
//    setTimeout(function () {
//      $('#menu-float').css('display', 'none');
//    }, 50);
//  }
});





$(' .this-menu-close').mousedown(function (event) {
$('#menu-float').css('display', 'none');
});

$('.interface-scale input').keyup(function () {
var val = $(this).val();
	
	if(val <= 50 ){val = 50}
	if(val >= 180 ){val = 180}
	
	$(".iscale").remove();
	$('body').prepend('<style class="iscale">:root {--interface-size: '+val/100+';}</style>');

	
	
//	
//	    setTimeout(function () {
//     sitewindow();
//    }, 800);
	});




//shortcuts========================================



$('body .page-center').delegate("[href]", "mouseenter", function (e) {


  hreftotemphref();


});


$('body .page-center').delegate("a", "click", function (e) {


  if ($('.page-preview').length) {

    if ($(this).attr('temphref')) {

      var destino = $(this).attr('temphref');
      alert("o visitante foi direcionado para " + destino);


    }


  }




});




//shortcuts========================================



$('html').bind("keydown", function (e) {



  if (e.keyCode == 8 && e.altKey) { $('#ctl-delete:not(.off)').trigger('click'); }
  if (e.keyCode == 83 && e.altKey) { $('#ctl-styleToSiblings:not(.off)').trigger('click'); }
  if (e.keyCode == 68 && e.altKey) { $('#ctl-duplicate:not(.off)').trigger('click'); }
  if (e.keyCode == 82 && e.altKey) { $('#ctl-reverse-order:not(.off)').trigger('click'); }
  if (e.which == 1 && e.altKey) { $('.active-select').trigger('click'); }

  //    if(keyCode=84 && e.altKey){ $('#ctl-lorem:not(.off) input').focus()}
  // if(e.altKey && e.which == 13){
  //         if(typeElem == 'icon' || typeElem == 'img' || typeElem == 'video' || typeElem == 'button'){
  //         
  //         
  //         $('.center > .active.active-select, div[type=subbloco] > .active.active-select').before( '<div  class=" active-select divisor " type="divisor"></div>' );}    
  //     }






});














var inputmax = 10000;
var inputmin = 0;
var inputmaxlength = 4;
	var inputsteps = 1;
 var tfixed = 1;

$(".numberonly").mousedown(function (e) {

  inputmax = 10000;
  inputmin = 0;
  inputmaxlength = 4;
	inputsteps = 1;
	  tfixed = 0;

  var mmax = $(this).attr('max');
  var mmin = $(this).attr('min');
 var steps = $(this).attr('steps');


  if (mmax) { inputmax = $(this).attr('max'); }
  if (mmin) { inputmin = $(this).attr('min'); }
  if (steps) { 
	  if (steps == '0.1') {inputsteps = 0.1;   tfixed = 1;  } 
	  if (steps == '0.01') {inputsteps = 0.01; 	  tfixed = 2;  } 
	  }


  if ($(this).attr('maxlength')) { inputmaxlength = $(this).attr('maxlength'); }
});



$(".numberonly, #ctl-border-width4").bind("mousewheel", function (event, delta) {
  if ($(this).is(":focus")) {





    if ($(this).val() == '') { $(this).val('0') }


    if (delta > 0) {
      if (parseFloat(this.value) < inputmax) {

console.log(inputsteps);
        this.value =parseFloat(parseFloat(this.value) + inputsteps).toFixed(tfixed);
      }

    } else {
      if (parseFloat(this.value) > inputmin) {
        this.value = parseFloat(parseFloat(this.value) - inputsteps).toFixed(tfixed);
      }
    }

    $(this).trigger('keyup');
    return false;
  }
});




$(" #ctl-border-width4").bind("mousewheel", function (event, delta) {

  return false;
});





$(".numberonly").keydown(function (e) {

  if (e.keyCode == 38 || e.keyCode == 40) {

    if ($(this).val() == '') { $(this).val('0') }
    var val = parseInt($(this).val());
  }

  if (e.keyCode == 38) {

    $(this).val(val + 1);
  }
  if (e.keyCode == 40) {

    if (val > 0) { $(this).val(val - 1) }


  }
});






$('html').bind("keydown", function (e) {

  if (e.keyCode == 38 && e.altKey) {

    $('.active.active-select').prev().trigger('click');
    $('.active').trigger('click');
    $('.active').focus();
  }




  if (e.keyCode == 40 && e.altKey) {

    $('.active.active-select').next().trigger('click');
    $('.active').trigger('click');
    $('.active').focus();
  }

});


//shortcuts-mouse---------------------------

$("body").delegate('.active-select:not(.not-del)', 'click', function (e) {
  var notdel = $(this).hasClass('not-del');
  if (notdel == false) {
    if (e.altKey && e.shiftKey) {
      $(this).remove();
    }
  }

});













$('html').bind("mouseup", function (e) {



  setTimeout(function () {

    var headeron = $('.vslpagee header').hasClass('header');
    var footeron = $('.vslpagee footer').hasClass('footer');

    if (headeron) { $('#headerelem').addClass('off'); }
    if (headeron == false) { $('#headerelem').removeClass('off'); }

    if (footeron) { $('#footerelem').addClass('off'); }
    if (footeron == false) { $('#footerelem').removeClass('off'); }

  }, 300);




});


//disable link========================================





//halper call========================================
$("label[helper-call]").mouseenter(function (e) {
  var helpercall = $(this).attr('helper-call');
	  $('.help-item-show').removeClass('help-item-show');
	
	
	 setTimeout(function () {
	 var vari = $("[helper-call]:hover").length;
	 if(vari){
		 $('.help-item#' + helpercall + '').addClass('help-item-show');
	 }
		 
		   }, 500);
});

$("label[helper-call]").mouseleave(function (e) {

	
	 setTimeout(function () {
  var vari = $("[helper-call]:hover").length;
		 if(vari == false){
    $('.help-item-show').removeClass('help-item-show');
		 }
  }, 1000);

});



//alert call ========

$('#ctl-delete').mouseenter(function () {

if ($('.active .lock-elem').length) { $(this).attr('alert-call','alert-notdel');  
								
									
									}
	else{$(this).removeAttr('alert-call');}
});







$('.elem').mouseover(function () {

	 var call = $(this).attr('alert-call');
	
	if(call){

		  $('#'+call).addClass('alert-item-show');
}

});

$(".elem").mouseleave(function (e) {
	
var call = $(this).attr('alert-call');
	
if(call){

		  setTimeout(function () {
 
     $('.alert-item-show').removeClass('alert-item-show');
		
  }, 1000);
}

 	
});



//shortcuts==FIM======================================










$(".page-left-menu-top .btn").click(function () {
  var id = $(this).attr('id'),
    menu = $(this).attr('data-menu');


  $(this).siblings().attr('value', '0');


  $('#addons').removeClass('act');

  $(menu).siblings().removeClass('act');
  $(menu).addClass('act');
  $(this).attr('value', 0);

});

$("#addons-btn").mousedown(function () {
  var val = $(this).attr('value');
  setTimeout(function () {

    if (val == '1') { $('#elements').trigger('click'); }
  }, 200);


});


//$(".page-left-menu-bottom  *" ).click(function() {
//
//    $('#elements').trigger('click');
//
//});


$(".page-left-menu-bottom .elem.btn").click(function () {
  var id = $(this).attr('id'),
    menu = $(this).attr('data-menu');

  $(this).addClass('act');
  $(this).siblings().removeClass('act');


  $(menu).addClass('act');
  $(menu).siblings().removeClass('act');



});




$(".family").each(function () {
  var font = $(this).text();
  $(this).css("font-family", font);

});



//NOTE preview

$("#preview").mousedown(function () {
  var pedit = $('body').hasClass('page-edite');

  $('.page-drop-menu, .acordion-head').removeClass('act');




  if (pedit) {
//	 pageevideoid();
	 
$('.pagee-countdown').removeAttr('startcountdown');
	  $('.finalcountdown-act').removeClass('finalcountdown-act');
	
$('.tab-act').removeClass('tab-act');
	  $('.btn-btsa, .btsa').addClass('tab-act');
	  
	  
	  
    $('.active').addClass('preview-active');
    $('#body  .ui-sortable').sortable("disable");
    $('.sort').remove();
    $('.page-site-scroll *').removeClass('active ');
    $('.page-site-scroll *').removeAttr('contenteditable');
    $('[elem-reveal]').removeClass('elem-reveal-act');

    $('body').removeClass('page-edite');
    $('body').addClass('page-preview');
    dynamictext();
    dynamicface();
    modalload();
    $('.dynamic-face-refresh.img').addClass('dynamic-face-refresh');
    $('body:not(.page-edite) .pagee-carousel:not(:hover) .carousel-dot-right').trigger('click');

    $('body').addClass('reveal-preview');
    setTimeout(function () { $('body').removeClass('reveal-preview'); reveal(); }, 300);
	  
	  
	  pageeprogbar();

  }



  else {
    $('.preview-active').addClass('active');
    $('.preview-active').removeClass('preview-active');
    $('body').addClass('page-edite');
    $('body').removeClass('page-preview');
    $('.active').trigger('click');

    $('.active').trigger('click');
	  $('.pmodal-content.active').addClass('modal-open');

    $('[elem-reveal]').addClass('elem-reveal-act');
	  $('.elem-running').removeClass('elem-running'); 

    pausestopvideo();

    atualizartools();


    $("[type=dynamic-text]").each(function () {
      $(this).text($(this).attr('dynamic-text'));

    });
	  $(".page-site-scroll .codearea-sub iframe").each(function () {
//    $(this).clone().insertAfter(this);  
//	 $(this).remove();
		  
		   var iframeSrc = $(this).attr('src');
    $(this).attr('src', iframeSrc);
		  
    });

	  $('.modal-open:not(.active)').removeClass('modal-open');
	 
  $(".pagee-prog-bar-inside").stop();
	  $(".pagee-prog-bar-inside").css('width', '50%');
	  $(".pagee-prog-bar-number").replaceWith('<div class="pagee-prog-bar-number">50%</div>');


  }



 setTimeout(function () {
    sitewindow();
  }, 800);



});



function pausestopvideo() {


  $("iframe, video").each(function () {

    var iframeSrc = $(this).attr('src');
    $(this).attr('src', iframeSrc);


  });

  $("video").each(function () {

    $(this).pause();


  });



}




//
//function enablelinks() {
//    
//$(".vslpagee a ").each( function () {
// var actlink = $(this).attr('href-provisorio');
//$(this).attr("href", actlink );
//  
//});
//
//}
//
//function desablelinks() {
//    
//$(".vslpagee a ").each( function () {
// var desablelink = $(this).attr('href');
//$(this).attr("href-provisorio", desablelink );
//    $(this).removeAttr("href");
//  
//});
//
//}

























var cssmediaquery = '';
function readcss(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        cssmediaquerymobile = allText.split("/*get code mobile*/")[1];


      }
    }
  }
  rawFile.send(null);
}

readcss("./css/vslpagee.css");








$("#mobile").click(function () {
  var mob = $('.page-center').hasClass('mobile');


  if (mob) {

    $('.page-site-window').removeClass('mobile');
    $('.page-center').removeClass('mobile');
	   $('#body').removeClass('mobile');
    $('#cssmediaquery').remove();
  }
  else {
    $('.page-site-window').addClass('mobile');
    $('.page-center').addClass('mobile');
	   $('#body').addClass('mobile');

    $('.page-center').append('<style id="cssmediaquery">' + cssmediaquerymobile + '</style>');
  }


  setTimeout(function () {
    $(window).trigger('resize');
  }, 500);




});


$("#templates-library-btn").click(function () {
  $('body').toggleClass('templates-library-show');
});


//$( ".select-list > *" ).click(function() {
//$(this).siblings().attr('value', 0);
//});

$(".select-list").mouseleave(function () {
  $(this).scrollTop(0);
});






$(".direcional-box .btn").click(function () {
  $(this).siblings().attr('value', 0);
});




$(".btn").click(function () {
  var act = $(this).attr('value');
  var parentt = $(this).parent().hasClass('select-list');




  if (parentt) {
    $(this).attr('value', 1);
    $(this).siblings().attr('value', 0);
  }


  else {
    if (act == 1) { $(this).attr('value', 0); }
    else { $(this).attr('value', 1); }
  }



});







$('.numberonly').keypress(function (e) {

  var charCode = (e.which) ? e.which : event.keyCode

  if (String.fromCharCode(charCode).match(/^[\d|\.|\,]+/g)) {

  }
  else { return false; }
});






//===================================

//select 

//===================================

var itemSelect = $('.active').attr('type');
var subobj = '';



$("body").delegate('.active-select', 'click', function (e) {
  var pedit = $('body').hasClass('page-edite');
  var resizeac = $('.resize-act').length;
	 $('.active-select').css('z-index', '');

  if (pedit && resizeac == false) {
    var vv = $(this).parent().hasClass('active'),
      b50 = $(this).hasClass('bloco50'),
      b25 = $(this).hasClass('bloco25'),
      b33 = $(this).hasClass('bloco33');
    $(elemsortable).sortable();

    if (vv == false) {


      $('.sort').remove();
      $('.resize-control').remove();
      $('.active').removeClass('active');
      $(this).addClass('active');
     
      $('.active').append('<sel class="resize-control" contenteditable="false"> <div class="sort" contenteditable="false"><span>.</span></div><div class="resizeL" contenteditable="false"></div> <div class="resizeR" contenteditable="false"></div> <div class="resizeB" contenteditable="false"></div> </sel>');


		
		
      itemSelect = $('.active').attr('type');
     

      $('.icone *').attr('contenteditable', 'false');


      if (itemSelect == 'p' || itemSelect == 'title' || itemSelect == 'price' || itemSelect == 'sprice' || itemSelect == 'link' || itemSelect == 'subtext' || itemSelect == 'buttontext' || itemSelect == 'countdown-subtitle') { $(this).attr('contenteditable', 'true'); }


      else { $(this).attr('contenteditable', 'false'); }

      $('#body  .ui-sortable').sortable("disable");
      //        .active[type=link] .sort, 
      $('p  .active[type=link] .sort, .active[type=subtext] .sort').remove();

    }
    subobj = $('.active > .subobj').length;
    e.stopPropagation();

    pageename();
    setTimeout(function () {
      $('#edit').trigger('click');

      if (itemSelect == 'p' || itemSelect == 'title' || itemSelect == 'price' || itemSelect == 'sprice' || itemSelect == 'link' || itemSelect == 'subtext') { $('.active').attr('contenteditable', 'true'); }
    }, 50);


  }
  if ($(this).attr('href')) { return false; }

});




$("body").delegate('.active.active-select > .active-select', 'click', function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
  $(this).trigger('click');

});


$("body").delegate('.active-select', 'click', function (e) {

  itemSelect = $('.active').attr('type');
  $('#body-select').attr('value', '0');
});


$('#body-select').click(function () {
  $('.resize-control').remove();
  $('.active').removeClass('active');
  $('#body').addClass('active');
  itemSelect = 'body';
  atualizartools();
  $('#edit').trigger('click');
  $(this).attr('value', '1');
});


$("body").delegate('p.lock-elem, [type=title].lock-elem ', 'keydown', function (e) {
  $(this).attr('contenteditable', 'false');
  window.getSelection().removeAllRanges();
  $(this).blur();
});







$('body').delegate('.active[contenteditable="true"]', 'click', function (e) {

  var tt = $(this).clone().children('.resize-control').remove().end().text();
  if (tt == '') { $(this).html('&nbsp;') }
});


$('body').delegate('.active[contenteditable="true"]', 'keydown', function (e) {


  if (e.keyCode == 13) {
    $(this).children('.resize-control').remove();
    $(this).removeClass('active');
    $(this).after('<p class="active active-select ui-sortable-handle p-ativar" type="p">&nbsp;</p>');

    $('.active').trigger('click');
	


 setTimeout(function () {
		  $('.active').focus();
	
}, 100);

  }
});



$('body').delegate('.p-ativar', 'keyup', function (e) {

  setTimeout(function () {
	 
    atualizartools();
    $('.p-ativar').removeClass('p-ativar');
  }, 50);




});



$('body').delegate('.active[contenteditable="true"]', 'keyup', function (e) {
  $('.active br').remove();

});

//===============================================================
//animate
//===============================================================
$("body").delegate('.sort', 'mouseenter', function () {
  $('body').removeClass('animate-plataform');
  console.log('m');
});
$("body").delegate('.sort', 'mouseover', function () {
  $('body').removeClass('animate-plataform');
  console.log('m');
});

$("body").delegate('.page-menu, .page-tools', 'mouseenter', function () {
  $('body').addClass('animate-plataform');
  console.log('m');
});



//===============================================================
//sort drag drop
//===============================================================

var elemsortable = "footer, main,   .center ,  header [type=subbloco], .page-drop-menu nav .nav-box, .subbloco-content, .list-pagee ul, .li-content, .acordionsub, .carousel li, .availability-content > *, .carousel-card-content, .button .button-cl, .button .button-cc, .button-cr, .pmodal-content-content, .content_area";
$(elemsortable).sortable();





$("body").delegate('.sort', 'mousemove', function () {
  $(elemsortable).sortable("enable");

  console.log('m');

  var ftext = $(this).parent().hasClass('flow-text');
  if (ftext == false) {
    $('.center , .subbloco-content, .carousel-card-content, .pmodal-content-content ').sortable({
      start: function (e, ui) {
        var marginsToSet = ui.item.data().sortableItem.margins;
        ui.item.css('margin-left', marginsToSet.left);
        ui.item.css('margin-top', '0p1');
        $('body ').addClass('mousegrab');

      },
      stop: function (e, ui) {
        ui.item.css('margin-left', '');
        ui.item.css('margin-right', '');
        ui.item.css('z-index', '');
        ui.item.css('position', '');

        ui.item.css('left', '');
        ui.item.css('top', '');
        $('body ').removeClass('mousegrab');
		  
		  if('.active[css-ml]'){
			  var cssml = $('.active').attr('css-ml'); 
			  if(cssml != 'auto'){  $('.active').css('margin-left',cssml+'px')}
			 }
		  
		   if('.active[css-mr]'){
			  var cssmr = $('.active').attr('css-mr'); 
			  if(cssmr != 'auto'){  $('.active').css('margin-right',cssmr+'px')}
			 }
		  
		   if('.active[css-mt]'){
			  var cssmt = $('.active').attr('css-mt'); 
			  if(cssmt != 'smart'){  $('.active').css('margin-top',cssmt+'px')}
			 }
		  
		   if('.active[css-mb]'){
			  var cssmb = $('.active').attr('css-mb'); 
			  if(cssmb != 'smart'){  $('.active').css('margin-bottom',cssmb+'px')}
			 }

      }
    });

  }






  $('.content_area').sortable({
    connectWith: '.content_area:not(.lock-elem)',
    stack: '.content_area'
  });



});

//---------------------------










//drag item

//$('*[data-new-element]').draggable({ 
//   
//  appendTo: 'body',
//  helper: 'clone',
//connectToSortable: 'main'
//});


// $('*[ data-drop-area=main]').draggable({ 
//   
//  appendTo: 'body',
//  helper: 'clone',
//      revert: "invalid",
//connectToSortable: 'main',
//     
//       drop: function (e, ui) {
//
//             
//dropitem() ;
//  pageename();
//       modallistgen() ;  
//    removedropduplicate();  
//  
//      }
//});
//
//
//$('*[ data-drop-area=content_area]').draggable({ 
//   
//  appendTo: 'body',
//  helper: 'clone',
//      revert: "invalid",
//connectToSortable: '.content_area'
//});















//NOTE drop elements


var dropHeader1 = '<header class="active-select header" type="section"><div class="centertop  ui-droppable active-select" type="center" wd="1400"><div class="grupo-blocos bloco50 " type="grupo-blocos50"><div class=" active-select ui-droppable" type="subbloco"><p type="p" class="active-select">Lorem ipsum!</p></div><div class=" active-select ui-droppable" type="subbloco"><p type="p" class="active-select">Lorem ipsum!</p></div></div></div></header>';

var dropFooter1 = '<footer class="active-select footer" type="section" ><div class="center content_area ui-droppable active-select ui-sortable-handle ui-sortable ui-sortable-disabled" type="center" ><span class="icone active-select" type="icon" contenteditable="false"  bg-color2="rgba(0, 0, 0, 0)" wd="36" style="width: 36px;"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48" contenteditable="false"><path d="M17.85 17 23 6.5h2L30.15 17ZM23 40 5.5 19H23Zm2 0V19h17.5Zm7.4-23L27.25 6.5H37.7L42.95 17ZM5.05 17 10.3 6.5h10.45L15.6 17Z" contenteditable="false"></path></svg></span><p class="active-select ui-sortable-handle" type="p" contenteditable="true" ><a href=" #link " class="active-select" type="link" >Politicas de privacidade </a>&nbsp;|&nbsp;&nbsp;<a href=" #link " class="active-select" type="link" >Termos de uso</a>&nbsp;| <a href=" #link " class="active-select" type="link" >Sobre</a></p></div></div></footer>';

var dropSection1 = '<section class="active-select show-line " type="section" ><div class="center ui-droppable  active-select padding content_area" type="center" wd="1200"></div></div>';

var dropSection2 = '<section class="active-select section-big show-line " type="section" ><div class="center ui-droppable  active-select padding" type="center" wd="1200"></div></div>';

var dropbloco0 = '<div class="grupo-blocos bloco0 active-select drop-item" type="grupo-bloco0" ><div class=" ui-droppable " type="subbloco"><div class="subbloco-content content_area active-select" type="subbloco-content"><p type="p" class="active-select">Lorem ipsum!</p></div></div></div>';

var dropbloco50 = '<div class="grupo-blocos bloco50 active-select drop-item" type="grupo-blocos"> <div class=" active-select ui-droppable" type="subbloco"><div class="subbloco-content active-select content_area" type="subbloco-content"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div class=" active-select ui-droppable" type="subbloco"><div class="subbloco-content active-select content_area" type="subbloco-content"><p type="p" class="active-select">Lorem ipsum!</p></div></div></div>';

var dropbloco33 = '<div class="grupo-blocos bloco33 active-select drop-item" type="grupo-blocos" ><div  class=" active-select ui-droppable" type="subbloco"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div type="subbloco" class="active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div type="subbloco" class=" active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div></div>';
var dropbloco25 = '<div class="bloco25 grupo-blocos active-select drop-item" type="grupo-blocos" ><div type="subbloco" class="active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div type="subbloco" class="active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div type="subbloco" class=" active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div><div type="subbloco" class="active-select ui-droppable"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div></div>';

var dropparagraph = '<p class="drop-item  active-select ui-sortable-handle " type="p" >Paragraph</p>';

var droptitle = '<h2 class="drop-item  active-select ui-sortable-handle " type="title" >Title</h2>';

var droplist = '<div class="list-pagee drop-item active-select" type="list" > <ul> <li class="active-select " type="listli"> <div class="list-item-number active-select not-del" type="linumber" contenteditable="false"></div> <span class="icone active-select not-del" type="icon" contenteditable="false"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M17.85 17 23 6.5h2L30.15 17ZM23 40 5.5 19H23Zm2 0V19h17.5Zm7.4-23L27.25 6.5H37.7L42.95 17ZM5.05 17 10.3 6.5h10.45L15.6 17Z"/></svg></span>  <div class="li-content">  <p class="active-select" type="p">Text</p>    </div></li> <li class="active-select " type="listli"> <div class="list-item-number  active-select not-del" type="linumber" contenteditable="false"></div> <span class="icone active-select not-del" type="icon" contenteditable="false"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M17.85 17 23 6.5h2L30.15 17ZM23 40 5.5 19H23Zm2 0V19h17.5Zm7.4-23L27.25 6.5H37.7L42.95 17ZM5.05 17 10.3 6.5h10.45L15.6 17Z"/></svg></span> <div class="li-content">  <p class="active-select" type="p">Text</p>    </div></li> </ul> </div>';

var dropimage = '<a class="img drop-item active-select" type="img" ><div class="subobj"><img src="https://assets.codepen.io/22628/unicorn.png" alt=""  style="filter: grayscale(0%) sepia(0%) blur(0px) contrast(100%) brightness(1) invert(0%) saturate(100%) hue-rotate(0deg);"></div></div>';



var dropicon = '<span class="icone  drop-item active-select" type="icon" > <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M17.85 17 23 6.5h2L30.15 17ZM23 40 5.5 19H23Zm2 0V19h17.5Zm7.4-23L27.25 6.5H37.7L42.95 17ZM5.05 17 10.3 6.5h10.45L15.6 17Z"/></svg></span>';


var dropilustration = '<span class="ilustration  drop-item active-select" type="ilustration" inside-svg-color1="#351c75" inside-svg-color2="#1c1426"  inside-svg-color3="#d5a6bd"  ><div class="ilustration-content"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="855033fa-f203-4bd6-a750-76a03b91c714" data-name="Layer 1" width="931" height="758.59" viewBox="0 0 931 758.59" class=""><defs><linearGradient id="36a1da1a-b5ed-4992-81c7-0d29a6333ac7" x1="1093.68" y1="551.39" x2="1027.95" y2="426.89" gradientTransform="translate(226.08 -367.44) rotate(27.83)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"></stop><stop offset="0.54" stop-color="gray" stop-opacity="0.12"></stop><stop offset="1" stop-color="gray" stop-opacity="0.1"></stop></linearGradient><linearGradient id="d287a4da-cdc2-42a1-98a9-ed232bbab7aa" x1="1097.68" y1="790.82" x2="1031.95" y2="666.32" xlink:href="#36a1da1a-b5ed-4992-81c7-0d29a6333ac7"></linearGradient><linearGradient id="044d3984-15d8-4f7b-a10a-036e6011c716" x1="1113.9" y1="704.46" x2="1012.94" y2="513.25" gradientTransform="translate(1491.06 -395.94) rotate(90)" xlink:href="#36a1da1a-b5ed-4992-81c7-0d29a6333ac7"></linearGradient><linearGradient id="4dd7781c-4432-49c7-b285-1afbf72647b5" x1="1068.95" y1="637.04" x2="1068.95" y2="578.4" gradientTransform="translate(93.1 -453.94) rotate(27.96)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity="0.12"></stop><stop offset="0.55" stop-opacity="0.09"></stop><stop offset="1" stop-opacity="0.02"></stop></linearGradient><linearGradient id="f39856b3-7cd5-4a0c-afbe-fd75d54c2ee5" x1="300.72" y1="713.57" x2="555.76" y2="111.34" gradientTransform="translate(-7.22 0.36)" xlink:href="#36a1da1a-b5ed-4992-81c7-0d29a6333ac7"></linearGradient><linearGradient id="6d589827-8376-478c-a688-9c335b1e94db" x1="542.83" y1="594.95" x2="542.83" y2="489.85" gradientTransform="translate(-435.63 82.11) rotate(-26.56)" xlink:href="#4dd7781c-4432-49c7-b285-1afbf72647b5"></linearGradient></defs><title>sync4</title><g opacity="0.3"><path d="M794.2,124.14q2.64,1.43,5.25,2.91" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path><path d="M809.67,133C915.39,197.33,986,313.62,986,446.4a367.17,367.17,0,0,1-11.5,91.44" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="11.85 11.85"></path><path d="M973,543.57q-.79,2.89-1.63,5.77" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path></g><path d="M253,446.4C253,287.12,354.61,151.57,496.54,101" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="12" opacity="0.21"></path><path d="M794.2,768.67A364.87,364.87,0,0,1,619.5,812.9c-119.53,0-225.7-57.22-292.6-145.77" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="12" opacity="0.5"></path><g opacity="0.21"><path d="M856.7,515.52q-.84,2.88-1.75,5.74" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path><path d="M851.06,532.56c-35,93.93-125.45,160.84-231.56,160.84-136.41,0-247-110.59-247-247s110.59-247,247-247A245.92,245.92,0,0,1,769.28,250" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="11.95 11.95"></path><path d="M774,253.66q2.34,1.88,4.63,3.81" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path></g><g opacity="0.5"><path d="M598.52,308q3-.44,6-.76" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path><path d="M616,306.45q1.75,0,3.5,0A140,140,0,0,1,741.76,514.66" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="11.56 11.56"></path><path d="M738.84,519.64q-1.57,2.56-3.25,5" transform="translate(-134.5 -85.81)" fill="none" stroke="#2196f3" stroke-miterlimit="10" stroke-width="4"></path></g><path d="M965.33,630.8,864.55,577.59l52.57-86.09a3.12,3.12,0,0,1,4.12-1.13l84.14,44.43a3.12,3.12,0,0,1,1.39,4Z" transform="translate(-134.5 -85.81)" fill="url(#36a1da1a-b5ed-4992-81c7-0d29a6333ac7)"></path><path d="M963.66,626.17l-94.34-49.81,49.12-80.44a3.12,3.12,0,0,1,4.12-1.13L1001,536.21a3.12,3.12,0,0,1,1.39,4Z" transform="translate(-134.5 -85.81)" fill="#f2f2f2"></path><path d="M898.79,756.81,798,703.61l-41.44,92a3.12,3.12,0,0,0,1.39,4L842.11,844a3.12,3.12,0,0,0,4.12-1.13Z" transform="translate(-134.5 -85.81)" fill="url(#d287a4da-cdc2-42a1-98a9-ed232bbab7aa)"></path><path d="M894,758l-94.34-49.81L761,794.15a3.12,3.12,0,0,0,1.39,4l78.44,41.41a3.12,3.12,0,0,0,4.12-1.13Z" transform="translate(-134.5 -85.81)" fill="#f2f2f2"></path><rect x="801.59" y="586.87" width="161.24" height="161.24" rx="2.33" ry="2.33" transform="translate(-254.46 1050.18) rotate(-62.17)" fill="url(#044d3984-15d8-4f7b-a10a-036e6011c716)"></rect><rect x="804.01" y="589.29" width="156.39" height="156.39" rx="2.33" ry="2.33" transform="translate(279.21 -420.49) rotate(27.83)" fill="#f2f2f2"></rect><rect x="963.21" y="660.24" width="9.7" height="24.25" rx="1.5" ry="1.5" transform="translate(291.42 -460) rotate(27.83)" fill="#f2f2f2"></rect><rect x="811.29" y="596.56" width="141.84" height="141.84" rx="2.33" ry="2.33" transform="translate(279.21 -420.49) rotate(27.83)" fill="#6c63ff" svg-color="c1"></rect><polygon points="790.82 581.84 784.64 567.99 742.07 586.83 733.98 568.97 719.63 575.34 731.53 601.11 731.53 601.11 734.38 607.7 790.82 581.84" fill="url(#4dd7781c-4432-49c7-b285-1afbf72647b5)"></polygon><polygon points="790.15 581.23 784.46 568.84 741.67 588.51 733.29 570.29 720.9 575.98 732.14 600.38 732.14 600.38 735.06 606.55 790.15 581.23" fill="#fff"></polygon><rect x="259.82" y="121.83" width="322.42" height="581.96" rx="12.25" ry="12.25" transform="translate(-262.15 111.06) rotate(-22.95)" fill="url(#f39856b3-7cd5-4a0c-afbe-fd75d54c2ee5)"></rect><rect x="264.17" y="129.7" width="313.7" height="566.24" rx="13.64" ry="13.64" transform="translate(-262.15 111.06) rotate(-22.95)" fill="#fff"></rect><path d="M388.72,134.45a25.43,25.43,0,0,1-14.65,29.69L274.3,206.4a25.43,25.43,0,0,1-31.52-10.14l-52.85,22.38a11.91,11.91,0,0,0-6.33,15.62L384.06,707.57a11.91,11.91,0,0,0,15.62,6.33L652.11,607a11.91,11.91,0,0,0,6.33-15.62L458,118.05a11.91,11.91,0,0,0-15.62-6.33Z" transform="translate(-134.5 -85.81)" fill="#6c63ff" svg-color="c1"></path><rect x="285.1" y="171.08" width="69.91" height="4.37" rx="2" ry="2" transform="translate(-176.73 52.72) rotate(-22.95)" fill="#dbdbdb"></rect><circle cx="365.74" cy="153.44" r="2.62" transform="translate(-165.38 68.97) rotate(-22.95)" fill="#dbdbdb"></circle><polygon points="329.26 266.13 302.62 260.73 285.83 342.46 251.34 335.69 245.73 363.26 295.72 372.7 295.72 372.7 308.29 375.39 329.26 266.13" fill="url(#6d589827-8376-478c-a688-9c335b1e94db)"></polygon><polygon points="327.68 266.46 303.68 261.89 287.87 344.8 252.56 338.07 247.98 362.07 295.27 371.05 295.27 371.05 307.33 373.21 327.68 266.46" fill="#fff"></polygon><circle cx="917" cy="24.6" r="14" fill="#80deea" opacity="0.3"></circle><circle cx="772.5" cy="343.19" r="14" fill="#80deea" opacity="0.3"></circle><circle cx="14" cy="81.6" r="14" fill="#80deea" opacity="0.5"></circle><circle cx="28" cy="38.6" r="14" fill="#80deea" opacity="0.3"></circle><g opacity="0.2"><path d="M292.3,213.4l99.78-42.25a25.43,25.43,0,0,0,14.65-29.69l51-21.61-.76-1.79a11.91,11.91,0,0,0-15.62-6.33l-53.65,22.72a25.43,25.43,0,0,1-14.65,29.69L273.3,206.4a25.08,25.08,0,0,1-8.41,1.94A25.42,25.42,0,0,0,292.3,213.4Z" transform="translate(-134.5 -85.81)" fill="#fff"></path><path d="M201.61,241.25a11.91,11.91,0,0,1,6.33-15.62l45.55-19.29a25.32,25.32,0,0,1-11.71-10.09l-52.85,22.38a11.91,11.91,0,0,0-6.33,15.62L383.06,707.57a11.91,11.91,0,0,0,15.62,6.33l2.63-1.11Z" transform="translate(-134.5 -85.81)" fill="#fff"></path></g></svg></div></span>';

var dropvideo = '<div class="video pageeplayer ratio active-select  " type="video" contenteditable="false" ><div class=" subobj "> <div class="videosize zz"><iframe width="560" height="315" src="https://www.youtube.com/embed/w-qc1Tclu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  class=""></iframe></div></div></div>';


var dropbutton = '<a class="button drop-item active-select" type="button" hover-animation="" ><div class="buttonhover"></div><div class="button-content"><div class="button-cl"></div><div class="button-cc active-select" type="button-center"><h3 class="drop-item  active-select ui-sortable-handle " type="title" >Title</h3><p class="drop-item  active-select ui-sortable-handle " type="p" >Paragraph</p></div><div class="button-cr"></div></div></a>';

var dropcodearea = '<div class="codearea active-select drop-item" type="code" ><div class="codearea-sub subobj "></div></div>';
var dropcodeareafloat = '<div class="codearea codearea-float active-select fixed-top-left drop-item" type="codefloat" ><div class="codearea-sub subobj "></div></div>';


var dropcontactfloat = '<a class="contact-float active-select fixed-bottom-left"  type="contactfloat" ><span class="icone" type="icon" contenteditable="false"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path></g></g></svg></span></span></a>';

var dropdivisor = '<div class=" active-select divisor drop-item" type="divisor"></div>';

var dropprice = '<div class="active-select page-price drop-item" type="price" ><div class="page-price-box"><span class="page-price-x active-select" type="sprice">12x</span><span class="page-price-moeda  active-select" type="sprice">R$</span><span class="page-price-value active-select" type="sprice">232</span><span class="page-price-cents active-select" type="sprice">,00</span></div></div>';

var dropacordion = '<div class="acordion active-select drop-item " type="acordion"><div class="acordionsub" ><div  type="acordionitem" class="acordion-item active-select"><div class="acordion-head  "  type="acordionhead"><span class="icone   active-select" type="icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48"  height="48" width="48"><path d="M24.2 35q.65 0 1.125-.475t.475-1.175q0-.65-.475-1.125T24.2 31.75q-.65 0-1.125.475T22.6 33.35q0 .7.475 1.175Q23.55 35 24.2 35Zm-1.4-6.9h2.3q0-1.2.375-2.2.375-1 1.875-2.25 1.45-1.3 2.1-2.475.65-1.175.65-2.575 0-2.5-1.625-4.025Q26.85 13.05 24.3 13.05q-2.25 0-3.95 1.15-1.7 1.15-2.5 3l2.05.8q.6-1.35 1.65-2.1 1.05-.75 2.6-.75 1.8 0 2.85 1t1.05 2.5q0 1.05-.625 1.975T25.65 22.55q-1.45 1.3-2.15 2.575-.7 1.275-.7 2.975ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Z"/></svg></span><div class="acordion-head-content acordion-area "><p class="active-select" type="p">Text</p></div><span class="icone active-select acordion-icon-open" type="icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M24 30.1 12.7 18.75l1.6-1.6 9.7 9.7 9.7-9.7 1.6 1.65Z"/></svg></span></div><div class="acordion-body active-select" type="acordionbody"><div class="acordion-body-content acordion-area "> <p class="active-select" type="p">Text</p> </div></div></div><div  type="acordionitem" class="acordion-item active-select"><div class="acordion-head "  type="acordionhead"><span class="icone   active-select" type="icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48"  height="48" width="48"><path d="M24.2 35q.65 0 1.125-.475t.475-1.175q0-.65-.475-1.125T24.2 31.75q-.65 0-1.125.475T22.6 33.35q0 .7.475 1.175Q23.55 35 24.2 35Zm-1.4-6.9h2.3q0-1.2.375-2.2.375-1 1.875-2.25 1.45-1.3 2.1-2.475.65-1.175.65-2.575 0-2.5-1.625-4.025Q26.85 13.05 24.3 13.05q-2.25 0-3.95 1.15-1.7 1.15-2.5 3l2.05.8q.6-1.35 1.65-2.1 1.05-.75 2.6-.75 1.8 0 2.85 1t1.05 2.5q0 1.05-.625 1.975T25.65 22.55q-1.45 1.3-2.15 2.575-.7 1.275-.7 2.975ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Z"/></svg></span><div class="acordion-head-content acordion-area "><p class="active-select" type="p">Text</p></div><span class="icone active-select acordion-icon-open" type="icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M24 30.1 12.7 18.75l1.6-1.6 9.7 9.7 9.7-9.7 1.6 1.65Z"/></svg></span></div><div class="acordion-body active-select" type="acordionbody"><div class="acordion-body-content acordion-area"> <p class="active-select" type="p">Text</p> </div></div></div> </div></div>';


var dropslide = '<div class="carousel active-select drop-item" type="carousel" > <div class="carousel-prev"></div> <div class="carousel-next"></div> <ul class=" "> <li class="carousel-slide-active active-select" type="carouselli"> </li> <li class="active-select" type="carouselli"></li> <li class="active-select" type="carouselli"></li> <li class="active-select" type="carouselli"></li> <li class="active-select" type="carouselli"></li> <li class="active-select" type="carouselli"></li> </ul> </div>';

var dropcountdown0 = '<div class="countdown-0 pagee-countdown active-select drop-item" type="countdown" drop-item countdowntime="00:05:00"><div class="countdown-0-item active-select " type="countdown0item" ><span class="pagee-countdown-days">0</span><span class="countdown-subtitle active-select" type="countdown-subtitle" contenteditable="true" >D</span></div> <div class="countdown-0-item active-select " type="countdown0item"><span class="pagee-countdown-hours">0</span><span class="countdown-subtitle active-select" type="countdown-subtitle">H</span></div><div class="countdown-0-item active-select " type="countdown0item"><span class="pagee-countdown-minutes">0</span><span class="countdown-subtitle active-select" type="countdown-subtitle">m</span></div><div class="countdown-0-item active-select " type="countdown0item"><span class="pagee-countdown-seconds">0</span><span class="countdown-subtitle active-select" type="countdown-subtitle">S</span></div>';



//var dropavailability = "<div class=' active-select padding availability-content drop-item' type='availability'>  <div class='availability-verify active-select' type='subbloco'>   <a class='img active-select' type='img' style='position: relative; z-index: 99; margin-left: auto; left: 0px; top: 0px; margin-right: auto; width: 200px;' wd='200' target='_blank' ><img src='/pagee-img/f1055231234507.564a1d234bfb6.gif' alt='' class='subobj' style='filter: grayscale(0%) sepia(0%) blur(0px) contrast(100%) brightness(1) invert(0%) saturate(100%) hue-rotate(0deg);'></a> <p type='p' class='active-select' style='position: relative; z-index: 99; margin-left: auto; left: 0px; top: 0px; margin-right: auto;' >Verificando disponibilidade</p></div>  <div class='availability-show active-select' type='subbloco'><p type='availability-result' class='active-select availability-result' style='position: relative; z-index: 99; margin-left: auto; left: 0px; top: 0px; margin-right: auto;' element-name='p-8807' style='font-size: 30px'>∞</p><p type='p' class='active-select' style='position: relative; z-index: 99; margin-left: auto; left: 0px; top: 0px; margin-right: auto;' >Disponíveis</p></div></div>";


var dropdropmenu = "<div class='page-drop-menu  active-select drop-item' type='dropmenu' dropmenucompact='720' dropmenubar='1200'> <span class='icone active-select ui-sortable-handle not-del' style='stroke-width: 2px;' type='icon' contenteditable='false'> <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='' contenteditable='false'><line x1='3' y1='12' x2='21' y2='12' contenteditable='false'></line><line x1='3' y1='6' x2='21' y2='6' contenteditable='false'></line><line x1='3' y1='18' x2='21' y2='18' contenteditable='false'></line></svg></span> <nav> <div class='page-drop-menu-color active-select' type='menumobilebg'></div> <div class='nav-box'> <a href='' class=' active-select' type='link'>página principal</a> <a href='' class=' active-select'  type='link'>página funcionalidades</a> <a href='' class=' active-select'  type='link'>página preços</a> <a href='' class=' active-select'  type='link'>página de contato</a></div>  </nav> </div>";

var dropcarousel = '<div class="pagee-carousel active-select drop-item" type="carousel" > <div class="carousel-dot-left"></div> <div class="carousel-dot-right" ></div> <div class="carousel-content"> <div class="carousel-card active-select" type="carousel-card" ><div class="carousel-card-content active-select" type="carousel-card-content"><p class="active-select ui-sortable-handle" type="p">Paragraph</p></div>   </div> <div class="carousel-card  active-select" type="carousel-card" > <div class="carousel-card-content active-select" type="carousel-card-content"><p class="active-select ui-sortable-handle" type="p">Paragraph</p></div> </div> <div class="carousel-card active-select" type="carousel-card" >  <div class="carousel-card-content active-select" type="carousel-card-content"><p class="active-select ui-sortable-handle" type="p">Paragraph</p></div> </div> <div class="carousel-card  active-select" type="carousel-card" > <div class="carousel-card-content active-select" type="carousel-card-content"><p class="active-select ui-sortable-handle" type="p">Paragraph</p></div> </div> </div> </div>';

var dropmodal = '<modal   class="pmodal drop-item" ><div class="pmodal-content active-select direcional-c-c  modal-open pmodal-mask-show" type="modal" > <div class="pmodal-content-content">  <p class="active-select ui-sortable-handle" type="p"  contenteditable="true">Paragraph</p></div><div class="pmodal-close-icon pmodal-close"><span class="icone  drop-item active-select" type="icon" ><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></span></div> </div><div class="pmodal-mask active-select"  type="modal-mask"></div></modal>';


var dropmockup3d = '<div class="mockup-3d active-select" type="mockup3d" data-3dscale="100"><div class="mockup-3d-hidden"> <div class="mockup-3d-center"> <div class="book obj3d" style="transform:rotateY(20deg) rotateX(0deg) rotate(0deg) translateY(0%) translateX(0%)"> <div class="book-f child-bg"> <h1 contenteditable> <br><br><br><br><br>THE PAGEE BOOK</h1> <p contenteditable>Contrary to popular belief, Lorem Ipsum is not simply random text.</p></div> <div class="book-ba"></div> <div class="book-r"></div> <div class="book-l"><h1 contenteditable> THE PAGEE BOOK</h1></div> <div class="book-t"></div> <div class="book-b"></div> </div> </div> </div></div>';

var dropform = '<div class="pagee-form active-select" type="form"><div class="formcode"><form class="content_area"></form></div></div>';

var dropiframe = '<div class="pagee-iframe active-select" type="iframe"><iframe src=""  title="Iframe Example"></iframe></div>';
var dropblockfloat = '<div class="block-float active-select drop-item" type="block-float"><div class="subbloco-content content_area " ></div></div>';
var dropprogbar = '<div class="pagee-prog-bar active-select" data-pageeprogbar="60" data-pageeprogbar-start="0" data-pageeprogbar-stop="100"   type="progbar"> <div class="pagee-prog-bar-inside active-select" type="progbarinside"></div> <div class="pagee-prog-bar-number">50%</div> </div>';


var dropblocktab = '<div class="block-tab active-select" type="block-tab"> <div class="block-tab-head active-select" type="block-tab-head"> <div class="block-tab-head-btn btn-btsa active-select " type="block-tab-head-btn"> <div class="block-tab-head-btn-content"><p class="drop-item  active-select ui-sortable-handle " type="p" >Paragraph</p></div></div> <div class="block-tab-head-btn btn-btsb active-select " type="block-tab-head-btn"> <div class="block-tab-head-btn-content"><p class="drop-item  active-select ui-sortable-handle " type="p" >Paragraph</p></div></div> </div> <div class="block-tab-sub btsa"></div> <div class="block-tab-sub btsb"></div> </div>';



var typeElem = 'p';
$('.ui-draggable').mousedown(function (e) {
  typeElem = $(this).attr('data-new-element');
});






$('[data-drop-area=body]').draggable({

  appendTo: 'body',
  helper: 'clone',
  revert: "invalid",

});





$('body').delegate('.vslpagee', 'mouseover', function (e) {


  $(this).droppable({
    activeClass: 'dropact',
    hoverClass: 'drophover',
    accept: ".i-header-footer", // Reject clones generated by sortable
    drop: function (e, ui) {


      if (typeElem == 'header1') {
        var $el = $(dropHeader1);
        $(this).prepend($el);
      }
      else {
        if (typeElem == 'footer1') { var $el = $(dropFooter1); }
        $(this).append($el);

      }
      dropareaact();
    }

  });
});









$('body').delegate('*[data-new-element]', 'mouseenter', function (e) {
  //$(elemsortable).trigger("mouseover");
  $(elemsortable).sortable();
  console.log('me');
  typeElem = $(this).attr('data-new-element');
});



$('*[ data-drop-area=main],[ data-drop-area=content_area]').mouseover(function (e) {
  var aread = $(this).attr('data-drop-area');
  var sorticon = $(this).children('.material-symbols-outlined').clone();
  var sorticonsvg = $(this).children('.svg-icon').clone();

  if ($(this).children('.sort_obj').length == false) {
    var objtype = $(this).attr('data-new-element');
    $(this).prepend('<div class="sort_obj" data-new-element="' + objtype + '"></div>');
    $('.sort_obj').html('');
    $('.sort_obj').append(sorticonsvg);
    $('.sort_obj').append(sorticon);
  }

  if (aread == 'main') {
    $('main').sortable('enable');
    $('[ data-drop-area=main]').sortable({
      appendTo: 'body',
      connectWith: 'main',
      stack: 'main',

      start: function (event, ui) {

      },
      stop: function (event, ui) {

        dropitem();
      }


    });
  }




  if (aread == 'content_area') {
    if ($('.pmodal-content.modal-open').length) {

      $('.pmodal-content.modal-open .content_area').sortable();
      $('.pmodal-content.modal-open .content_area').sortable('enable');
    }
    else {
      $('.content_area').sortable();
      $('.content_area').sortable('enable');
    }

    $('[ data-drop-area=content_area]').sortable({
      appendTo: 'body',
      connectWith: '.content_area:not(.lock-elem)',
      hoverClass: 'drophover',
      stack: '.content_area',

      start: function (event, ui) {

      },
      stop: function (event, ui) {

        dropitem();
      }

    });
  }



});











function dropareaact() {
  $("   .center , header [type=subbloco] ,  .subbloco-content, .li-content,  .availability-content > *, .carousel-card-content, .button .button-cl, .button .button-cc, .button-cr, .pmodal-content-content, .acordion-area, .block-tab-sub, .block-tab-head-btn-content").addClass('content_area');
  $('.content_area').sortable();
  $('.content_area').sortable({
    connectWith: '.content_area:not(.lock-elem)',
    stack: '.content_area'
  });
}

//NOTE dropitem

function dropitem() {


	
//	
//$( ".center > [data-new-element=block-float]" ).each( function(  ) {  
//$(this).parents('section').append('<div data-new-element="block-float"</div>');
//$(this).remove();
//  }); 
	
	
	
  $('#body [data-new-element=s1]').replaceWith(dropSection1);

  $('#body [data-new-element=bloco0]').replaceWith(dropbloco0);
  $('#body [data-new-element=bloco50]').replaceWith(dropbloco50);
  $('#body [data-new-element=bloco33]').replaceWith(dropbloco33);
  $('#body [data-new-element=bloco25]').replaceWith(dropbloco25);




  $('#body [data-new-element=p]').replaceWith(dropparagraph);
  $('#body [data-new-element=t]').replaceWith(droptitle);
  $('#body [data-new-element=icon]').replaceWith(dropicon);
  $('#body [data-new-element=list]').replaceWith(droplist);
  $('#body [data-new-element=img]').replaceWith(dropimage);
  $('#body [data-new-element=ilustration]').replaceWith(dropilustration);
  $('#body [data-new-element=video]').replaceWith(dropvideo);
  $('#body [data-new-element=button]').replaceWith(dropbutton);
  $('#body [data-new-element=codearea]').replaceWith(dropcodearea);
  $('#body [data-new-element=divisor]').replaceWith(dropdivisor);
  $('#body [data-new-element=price]').replaceWith(dropprice);
  $('#body [data-new-element=acordion]').replaceWith(dropacordion);
  $('#body [data-new-element=carousel]').replaceWith(dropcarousel);
  $('#body [data-new-element=countdown0]').replaceWith(dropcountdown0);
//  $('#body [data-new-element=availability]').replaceWith(dropavailability);

  $('#body [data-new-element=modal]').replaceWith(dropmodal);
  $('#body [data-new-element=contact-float]').replaceWith(dropcontactfloat);
  $('#body [data-new-element=codeareafloat]').replaceWith(dropcodeareafloat);

  $('#body [data-new-element=dropmenu]').replaceWith(dropdropmenu);
  $('#body [data-new-element=mockup3d]').replaceWith(dropmockup3d);

  $('#body [data-new-element=form]').replaceWith(dropform);
	 $('#body [data-new-element=iframe]').replaceWith(dropiframe);
	
		 $('#body [data-new-element=block-float]').replaceWith(dropblockfloat);
	
	 $('#body [data-new-element=progbar]').replaceWith(dropprogbar);
	 $('#body [data-new-element=blocktab]').replaceWith(dropblocktab);


//
//  if ($('.pmodal.drop-item .modal-open').length) {
//    $('.pmodal:not(.drop-item) .modal-open').removeClass('modal-open');
//  }

 
  dropareaact();
	
  pageename();
	
	if ($('.pmodal.drop-item .modal-open').length) {
    $('.pmodal:not(.drop-item) .modal-open').removeClass('modal-open');
		 modallistgen();
  }



  elem3d();
  setTimeout(function () {
    $('.drop-item').removeClass('drop-item');
    $('.drophover').removeClass('drophover');
    $('.dropact').removeClass('dropact');


  }, 500);


}















$('#ctl-project-icon').change(function (e) {
  var valicon = $(this).val();
  $('project-favicon-preview').css('background-image', 'url(' + valicon + ')');
});



// NOTE pageename
function pageename() {


  var newid = $(".active-select:not([id])");
  $(newid).each(function () {
    var typee = $(this).attr('type');
    var idn = typee + '-' + Math.floor(Math.random() * 1000000);
    var idnverify = $('#' + idn).length;
    console.log(idn);

    if (idnverify == 0) {

      $(this).attr('id', idn);
      console.log(idnverify + 'l');

    }



    else { pageename() }



  });


}









//======================================================
//Menu tools
//==================================================

var projectname = $('#ctl-page-name').val();
$('#page-name').text(projectname);


$('#ctl-page-name').change(function (e) {
  projectname = $('#ctl-page-name').val();
  $('*[page-name]').attr('page-name', projectname);
  $('#page-name').text(projectname);
});


$('#ctl-project-icon').change(function (e) {
  var val = $(this).val();
  $('#project-favicon-preview').css('background-image', 'url("' + val + '")');
  $('#project-favicon-preview').css('background-size', 'cover');
});

$('#ctl-project-share-img').change(function (e) {
  var val = $(this).val();
  $('#project-share-img-preview').css('background-image', 'url("' + val + '")');
  $('#ctl-project-share-img').css('background-size', 'cover');
});





$('#ctl-body-code').change(function (e) {
  $('.body-code').html($(this).val());
});
$('#ctl-head-code').change(function (e) {
  $('.head-code').html($(this).val());
});











//======================================================
//Menu tools
//==================================================


$('#ctl-element-name input').change(function () {

  $('.active').attr('id', $(this).val());
	atualizartools();
  modallistgen();
	console.log('id');
});





$('#ctl-show-device .btn ').click(function () {

  var idd = $(this).attr('id');

  $(this).siblings().attr('value', '0');
  $('.active').removeClass('desk-off');
  $('.active').removeClass('mobile-off');

  if (idd == 'ctl-desk-off') { $('.active').addClass('desk-off'); }

  if (idd == 'ctl-mobile-off') { $('.active').addClass('mobile-off'); }


});






$('#ctl-open-delay input').change(function () {

  var val = $(this).val();
  if (val == '00:00:00') { $('.active').removeAttr('open-delay') }
  else { $('.active').attr('open-delay', val) }



});

$('#ctl-hidden-delay input').change(function () {

  var val = $(this).val();
  if (val == '00:00:00') { $('.active').removeAttr('hidden-delay') }
  else { $('.active').attr('hidden-delay', val) }



});













$('#ctl-lock-elem').click(function () {
  var lock = $('#body').attr('lock');
  var lockkeyinput = $('#ctl-lock-key').val();
  var val = $(this).attr('value');


  if (lock == lockkeyinput) {

    if (val == 1) { $('.active').addClass('lock-elem'); $('.active .content_area').addClass('lock-elem'); }
    else { $('.active').removeClass('lock-elem');  $('.active .content_area').removeClass('lock-elem');  }
  }

  else { }





  atualizartools();
});




$('#ctl-lock-key').keyup(function () {
  var lock = $('#body').attr('lock');
  var lockkeyinput = $('#ctl-lock-key').val();
  if (lock == lockkeyinput) {
    $('#lockakey, #ctl-change-key').removeClass('wrong-key');

  }
  else { $('#lockakey, #ctl-change-key').addClass('wrong-key') }
});

$('#ctl-lock-new-key').keyup(function () {
  var newkey = $('#ctl-lock-new-key').val();
  $('#body').attr('lock', newkey);
  $('#ctl-lock-key').val(newkey);

});







$('#ctl-back-url input').keyup(function () {
  $('#body').attr('back-url', $(this).val());


});





$('#ctl-change-key').click(function () {
	
	var val = $(this).attr('value');
if(val == 1){
$(this).parents('.subgroup-elem').addClass('nkeyinput');	
	
}
	else{$('.nkeyinput').removeClass('nkeyinput')}


});












$('#ctl-styleToSiblings').click(function (e) {


  //    acordionbody


  var issobgimageattr = $('.active').attr('bg-image');
  var style = $('.active').attr('style');

  var elementType = $('.active').attr('type');
  var pa = $('.active').hasClass('padding');
  var brper = $('.active').hasClass('border-radius-per');
	var brperval = $('.active').attr('data-border-radius');
	
  var acordionicon = $('.active').hasClass('acordion-icon-open');
  var inputbox = $('.active').hasClass('input-elem');

  if (itemSelect == 'linumber') {
    var ss = $('.active').parent().siblings().children('[type=' + elementType + ']');
    aplicarstyle();
  }


  else if (acordionicon) {
    var ss = $('.active').parents('.acordion-item').siblings().children().children('.acordion-icon-open');

    aplicarstyle();
  }

  else if (itemSelect == 'acordionbody') {
    var ss = $('.active').parent().siblings().children('[type=' + elementType + ']');
    aplicarstyle();
  }


  else if (itemSelect == 'modal') {
    var ss = $('.active').parent().siblings().children('[type=' + elementType + ']');

    var pmask = $('.active').siblings('.pmodal-mask').attr('style');
    $('.active').parent().siblings().children('.pmodal-mask').attr('style', pmask);

    if ($('.active.pmodal-mask-show').length) { $(ss).addClass('pmodal-mask-show'); }
    if ($('.active.pmodal-mask-show').length == false) { $(ss).removeClass('pmodal-mask-show'); }


    if ($('.active.pmodal-icon-show').length) { $(ss).addClass('pmodal-icon-show'); }
    if ($('.active.pmodal-icon-show').length == false) { $(ss).removeClass('pmodal-icon-show'); }

    aplicarstyle();
  }

  else if (itemSelect == 'subbloco-content') {
    var ss = $('.active').parent().siblings().children(' [type=subbloco-content]');
    aplicarstyle();
  }

  else if (itemSelect == 'carousel-card-content') {
    var ss = $('.active').parent().siblings().children(' [type=carousel-card-content]');
    aplicarstyle();
  }




  else if (inputbox) {
    var rad = $('.active').css('border-radius');
    $('.pagee-form:has(.active) .input-elem').css('border-radius', rad);
    var subobjstyle = $('.active .subobj').attr('style');

    $('.pagee-form:has(.active) .subobj').attr('style', subobjstyle);
  }


  else {


    var ss = $('.active').siblings().attr('type', elementType);

    aplicarstyle();
  }



  function aplicarstyle() {

    if (pa) { $(ss).addClass('padding'); }
	  if (pa == false) { $(ss).removeClass('padding'); }
	  
	    if (brper) { $(ss).addClass('border-radius-per'); 
				   $(ss).attr('data-border-radius', brperval);
				   
				   }
    
	  if (brper == false) { $(ss).removeClass('border-radius-per'); 
				   $(ss).removeAttr('data-border-radius');
				   
				   }
	  
    $(ss).attr('style', style);




    $(ss).each(function () {
      var bgimage = $(this).attr('bg-image');


      console.log(bgimage);

      if (bgimage == undefined) { bgimage = ''; }

      var bggradient = $(this).css('background-image').split('linear-gradient')[1];
      $(this).css('background-image', 'url(' + bgimage + '), linear-gradient' + bggradient);



    });



  }



});


$('#ctl-delete').click(function () {
	
	  if ($('.active .lock-elem').length) { console.log('lock child');   }
	else{  
	
	if (itemSelect == 'modal') { $('.active').parent('.pmodal').remove(); modallistgen() ; $('.modal-item-sel.act').removeClass('act')}

  else { $('.active').remove(); }



  setTimeout(function () {
    $('#body-select').trigger('click');
    $('#body-select').addClass('active');
  }, 50);
	
	
	}

});




$('#ctl-float').click(function (e) {
  var val = $(this).attr('value');
  $('.float-used').removeClass('float-used');


  if (val == '1') {
    $('.float').removeClass('float');
    //        $('.float-on').removeClass('float-on');


    $(this).addClass('float-used');
    $('.active').addClass('float');
  }




  else {
    $('.float').removeClass('float');
    //     $('.float-on').removeClass('float-on');
  }
});







$('#ctl-duplicate').click(function (e) {
  var section0 = $('.active').attr('type');
  if (itemSelect == 'modal') {
    $('.active').parents('.pmodal').clone().insertAfter('.pmodal:has(.active)');
    $('.pmodal:has(.active) + .pmodal *').addClass('tempclone');

  }
	
	  else if (itemSelect == 'code') {
		  var tcod =  $('.active').clone().find('.codearea-sub').html('').end();
    tcod.insertAfter('.active');
    $('.active + .active').addClass('tempclone');
		  console.log('clonecode'+tcod.html())
		  
		 
		  
		  setTimeout(function () {
 $( '.tempclone .codearea-sub' ).each( function(  ) {  
var code = $(this).attr('codearea-sub-code');
		
	$(this).html('');
	 $(this).html(code);
	    }); 
 
}, 10);

  }
	
  else {
    $('.active').clone().insertAfter('.active');
    $('.active + .active').addClass('tempclone');
	  console.log('clode2');
  }


  $('.tempclone .resize-control').remove();
  $('.tempclone').removeAttr('data-code-id');
  $('.tempclone').removeAttr('id');
  $('.tempclone *').removeAttr('id');
	 $('.tempclone *').removeClass('pagee-countdown-master');	



  pageename();
  modallistgen();

	 $('.tempclone').removeClass('float active modal-open pagee-countdown-master');
	
	  setTimeout(function () {

   $('.tempclone').removeClass('tempclone');
	$('active').trigger('click');
}, 15);





});





$('#ctl-add-child').click(function (e) {

  if (itemSelect == 'grupo-blocos') { $('.active').append('<div  class=" active-select ui-droppable" type="subbloco"><div type="subbloco-content" class="subbloco-content active-select content_area"><p type="p" class="active-select">Lorem ipsum!</p></div></div>'); }

  if (itemSelect == 'list') { $('.active ul').append('<li class="active-select " type="listli"> <div class="list-item-number active-select not-del" type="linumber" contenteditable="false"></div> <span class="icone active-select not-del" type="icon" contenteditable="false"><span class="material-symbols-outlined">south</span></span>  <div class="li-content">  <p class="active-select" type="p">Text</p>    </div></li>'); }

  if (itemSelect == 'dropmenu') { $('.active nav .nav-box').append(" <a href='' class=' active-select'  type='link'>New Link</a> "); }

  if (itemSelect == 'carousel') { $('.active .carousel-content').append('<div class="carousel-card  active-select" type="carousel-card" > <div class="carousel-card-content active-select" type="carousel-card-content"><p class="active-select ui-sortable-handle" type="p">Paragraph</p></div> </div> '); }
	
	  if (itemSelect == 'form') { $('.active .formcode form').append('<div class="input-elem active-select" type="input"><input type="text" class="subobj"></div>'); }
	
	

});






//NOTE magic-style

$('#ctl-magic-style').click(function () {

  $('body').addClass('magic-style-show');



});


$('#magic-style-close').click(function () {

  $('body').removeClass('magic-style-show');



});







$('#ctl-reverse-order').click(function (e) {
  var reverse = $(this).attr('value');
  if (reverse == '1') { $('.active').addClass('blocos-reverse'); }
  else { $('.active').removeClass('blocos-reverse'); }
});



$('#ctl-vertical-align').click(function (e) {
  var vertical = $(this).attr('value');
  if (vertical == '1') { $('.active').addClass('vertical-align'); }
  else { $('.active').removeClass('vertical-align'); }
});
$('#ctl-horizontal-align').click(function (e) {
  var hor = $(this).attr('value');
  if (hor == '1') { $('.active').addClass('horizontal-align'); }
  else { $('.active').removeClass('horizontal-align'); }
});

//NOTE progbar



$('#ctl-progbar-time input').keyup(function () {
  var val = $(this).val();
 
 $('.active').attr('data-pageeprogbar', val); 
});

$('#ctl-progbar-start input').keyup(function () {
  var val = $(this).val();
 
 $('.active').attr('data-pageeprogbar-start', val); 
});

$('#ctl-progbar-stop input').keyup(function () {
  var val = $(this).val();
 
 $('.active').attr('data-pageeprogbar-stop', val); 
});


//NOTE 3D

$('#color-picker-3d').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",


  move: function (color) {
    var ncolor = $('#color-picker-3d').val();


    $('.active .obj3d').css('background-color', ncolor); 

   

   

  },
  change: function (color) {
    $('#color-picker-3d').val(color);


  }, hide: function (color) {
    $('#color-picker-3d').val(color);
  }

});


var mockupbook3d = ' <div class="book obj3d" > <div class="book-f child-bg"> <h1 contenteditable> <br><br><br><br><br>THE PAGEE BOOK</h1> <p contenteditable>Contrary to popular belief, Lorem Ipsum is not simply random text.</p></div> <div class="book-ba"></div> <div class="book-r"></div> <div class="book-l"><h1 contenteditable> THE PAGEE BOOK</h1></div> <div class="book-t"></div> <div class="book-b"></div> </div> ';

var mockupphone3d = '<div class="mockup-phone-3d obj3d" > <div class="mockup-phone-3d-l-btn"></div> <div class="mockup-phone-3d-r-btn"></div> <div class="mockup-phone-3d-screen child-bg"></div> <div class="mockup-phone-3d-bottom"></div> <div class="mockup-phone-3d-volume"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume2"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume3"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume4"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume5"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume6"></div> <div class="mockup-phone-3d-volume mockup-phone-3d-volume7"></div> <div class="mockup-phone-3d-volume  mockup-phone-3d-volume8"></div> <div class="mockup-phone-3d-volume  mockup-phone-3d-volume9"></div> <div class="mockup-phone-3d-volume  mockup-phone-3d-volume10"></div> <div class="mockup-phone-3d-volume"></div> <div class="mockup-phone-3d-volume"></div> <div class="mockup-phone-3d-l"></div> <div class="mockup-phone-3d-r"></div>';

var mockupmacbook3d  = '<div class="mockup-macbook-3d obj3d" > <div class="mockup-macbook-3d-tela"> <div class="mockup-3d-volume mocku-3d-volume1"></div> <div class="mockup-3d-volume mocku-3d-volume2"></div> <div class="mockup-3d-volume mockup-3d-volume3"></div> <div class="mockup-3d-volume mockup-3d-volume4"></div> <div class="mockup-macbook-3d-screen child-bg"></div> </div> <div class="mockup-3d-volume"></div> <div class="mockup-3d-volume"></div> <div class="mockup-macbookkeyboard-3d"> <div class="mockup-3d-volume mocku-3d-volume1"></div> <div class="mockup-3d-volume mocku-3d-volume2"></div> <div class="mockup-3d-volume mockup-3d-volume3"></div> <div class="mockup-3d-volume mockup-3d-volume4"></div> <div class="mockup-c-3d-l"></div> <div class="mockup-c-3d-r"></div> <div class="mockup-c-3d-r"></div> <div class="mockup-macbook-3d-bottom"></div> </div> </div>'

var mockupbox3d ='<div class="mockup-box-3d-content obj3d" > <div class="mockup-box-3d-front child-bg" ></div> <div class="mockup-box-3d-back "></div> <div class="mockup-box-3d-top "></div> <div class="mockup-box-3d-bottom "></div> <div class="mockup-box-3d-left "></div> <div class="mockup-box-3d-right"></div> </div> ';


//NOTE 3d3d

$('.list-3d-item').click(function () {
  var tipo = $(this).attr('data-3d');
  if (tipo == 'mockupbook3d') { tipo = mockupbook3d }
  if (tipo == 'mockupphone3d') { tipo = mockupphone3d }
	  if (tipo == 'mockupmacbook3d') { tipo = mockupmacbook3d }
	  if (tipo == 'mockupbox3d') { tipo = mockupbox3d }

  $('.active .obj3d').remove();
  $('.active').attr('data-3dscale', '100');
  $('.active .mockup-3d-center').html(tipo);
  $('.active .obj3d').css('transform', 'rotateY(20deg) rotateX(0deg) rotate(0deg) translateY(0%) translateX(0%)');
 
 setTimeout(function(){ 
		 elem3d() ;
		 atualizartools();
        
                           }, 10);



});


$('#ctl-3d-scale input').keyup(function () {



  var val = $(this).val();
  $('.active').attr('data-3dscale', val);

  elem3d();

});


$('#ctl-3d-perspective input, #ctl-3d-x input, #ctl-3d-y input, #ctl-3d-rotate input, #ctl-3d-translatey input, #ctl-3d-translatex input').keyup(function () {




  rotate3d();

});

function rotate3d() {
	var pers = $('#ctl-3d-perspective input').val();
  var x = $('#ctl-3d-x input').val();
  var y = $('#ctl-3d-y input').val();
  var rotate = $('#ctl-3d-rotate input').val();
  var translatey = $('#ctl-3d-translatey input').val();
  var translatex = $('#ctl-3d-translatex input').val();

  $('.active .obj3d').css('transform', 'rotateY(' + y + 'deg) rotateX(' + x + 'deg) rotate(' + rotate + 'deg) translateY(' + translatey + '%) translateX(' + translatex + '%)');
	
	$('.active .mockup-3d-center').css('perspective', pers+'px')

}

//imagem------------------------------



$('#ctl-image-folder').click(function () {


  $('body').removeClass('project-images-bg');

  $('body').addClass('project-images');
  $('body').addClass('project-images-src');


});


$('#ctl-bg-image-folder').click(function () {
  $('body').removeClass('project-images-src');
  $('body').addClass('project-images');
  $('body').addClass('project-images-bg');



});

$('#ctl-3d-image-folder').click(function () {
  $('body').removeClass('project-images-src');
	 $('body').removeClass('project-images-bg');
	
  $('body').addClass('project-images');
  $('body').addClass('project-images-bg-child');



});




$("#image-folder-btn").click(function () {

  var act = $('body').hasClass('project-images');


  if (act) {
    $('body').removeClass('project-images');
    $('body').removeClass('project-images-folder-open');
    $('#edit').trigger('click');
  }


  else {
    $('body').addClass('project-images');
    $('body').addClass('project-images-folder-open');
  }

});











$('#pagee-images-remove-bg').click(function () {



  $('.active').attr('bg-image', ' ');
  $('.active > .subobj').attr('bg-image', ' ');



  $('#color-picker-bg').trigger('change');

  setTimeout(function () {
    $('body').removeClass('project-images');



    $('.ctl-image-folder').attr('value', '0');
  }, 200);
});







$("#pagee-folder-images-close").click(function () {

  $('body').removeClass('project-images');
  $('body').removeClass('project-images-src');
  $('body').removeClass('project-images-bg');
  $('body').removeClass('project-images-folder-open');
$('body').removeClass('project-images-bg-child');
  $('#image-folder-btn').attr('value', '0');

  $('#edit').trigger('click');



});






$("#ctl-img-zoom").click(function () {
var val = $(this).attr('value');

if(val == 1){ $('.active').addClass('img-zoom')}
	else{$('.active').removeClass('img-zoom')}


});






$("#templates-library-close").click(function () {
  $('body').removeClass('templates-library-show');




});









$("#project-pages-btn").click(function () {

  var act = $('body').hasClass('project-pages-open');

  if (act) { $('body').removeClass('project-pages-open'); }


  else { $('body').addClass('project-pages-open'); }





});

$("#project-pages-close").click(function () {

  $('body').removeClass('project-pages-open');




});








$('#ctl-reveal .btn').click(function (e) {
  var val = $(this).attr('property-val');
  $('.active').removeAttr('elem-reveal');
  $('.active').removeClass('elem-reveal-act');

  if (val != '') {

    $('.active').addClass('elem-reveal-act');
    $('.active').attr('elem-reveal', val);



  }
  else { $('.active').removeAttr('elem-reveal'); }

});




$('#ctl-content-position .btn').click(function () {

  var val = $(this).attr('property-val');
  $('.active').removeClass('content-v-top content-v-center content-v-bottom');

  $('.active').addClass(val);

});



//===================================================================




$('#ctl-modal-mask').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') { $('.active').addClass('pmodal-mask-show'); }
  else { $('.active').removeClass('pmodal-mask-show'); }
});


$('#ctl-modal-show-load').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') { $('.active').addClass('modal-show-load'); }
  else { $('.active').removeClass('modal-show-load'); }
});


$('#ctl-modal-tofront').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') { $('.active').addClass('modal-tofront'); }
  else { $('.active').removeClass('modal-tofront'); }
});


$('#ctl-modal-icon-show').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') { $('.active').addClass('pmodal-icon-show'); }
  else { $('.active').removeClass('pmodal-icon-show'); }
});



//ctl-maintain-aspect-ratio


$('#ctl-maintain-aspect-ratio').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') {
    $('.active').addClass('maintain-aspect-ratio');




    var w = parseInt($('.active').css('width'));
    var h = parseInt($('.active').attr('mht'));
    if (w > h) {
      var a = w / h;
      $('.active').css('aspect-ratio', a + '/1')

    }
    if (w < h) {
      var a = h / w;
      $('.active').css('aspect-ratio', '1/' + a);
    }


  }
  else {
    $('.active').removeClass('maintain-aspect-ratio');

    $('.active').css('aspect-ratio', '');
  }


  console.log(a);

});

//dynamic-face



$('#ctl-dynamic-face').click(function (e) {
  var val = $(this).attr('value');
  if (val == '1') { $('.active').addClass('dynamic-face'); }
  else { $('.active').removeClass('dynamic-face'); }
});








/* background-image*/

$('body').delegate('.images-folder img', 'click', function () {
  var imagesrc = $(this).attr('src');

  var bgimg = $('body').hasClass('project-images-bg');
	 var bgimgchild = $('body').hasClass('project-images-bg-child');
  var srcimg = $('body').hasClass('project-images-src');





//xxx


  if (bgimg) {
    //    var bgcolor= $('.active').css('background-color');
    var bgcolor2 = $('.active').attr('bg-color2');
    var deg = $('#bg-gradient-deg').val();
    if (bgcolor2 == ' ' || bgcolor2 == '') { bgcolor2 = 'rgba(0, 0, 0, 0)' }

    if (subobj) {

      $('.active > .subobj ').css('background-image', 'url(' + imagesrc + '), linear-gradient(' + deg + 'deg, transparent 0%, ' + bgcolor2 + ' 100%) ');
      $('.active ').attr('bg-image', imagesrc);
    }
	  
	  
	  
	  
    else {
      $('.active ').css('background-image', 'url(' + imagesrc + '), linear-gradient(' + deg + 'deg, transparent 0%, ' + bgcolor2 + ' 100%) ');
      $('.active ').attr('bg-image', imagesrc);
    }
  }


if(bgimgchild){ 

      $('.active .child-bg').css('background-image', 'url(' + imagesrc + ')');
  }

  else if (srcimg) { $('.active img').attr('src', imagesrc); }








  setTimeout(function () {

    $('body').removeClass('project-images');
    $('body').removeClass('project-images-src');
    $('body').removeClass('project-images-bg');
    $('.ctl-image-folder').attr('value', '0');
  }, 300);

});

$('#ctl-img-ratio .btn').click(function () {


  $('.active.img').removeClass('elem-ratio crop-h1 crop-h2 crop-square crop-v1 crop-v2');




  var ratiop = $(this).attr('property-val');

  if (ratiop == 'crop-free') {

    $('.active.img').removeClass('elem-ratio ');

  }

  else {
    $('.active.img').addClass(ratiop);
    $('.active.img').addClass('elem-ratio');


    var widthi = $('#ctl-size-width input').val();
    if (widthi == 'NaN') {

      $('#ctl-size-width input').val('600');
      $('.active').css('width', '600px');
      $('.active').attr('wd', '600');

    }
  }




});










$('#ctl-img-obj-position input').keyup(function () {

  var objposition = $(this).val();

  $('.active img').css('object-position', 'center ' + objposition + '%');




});




$(function () {
  $(".elem-position-drag-square").draggable({
    containment: ".elem-position-drag",
    cursor: "crosshair",
    drag: function (e, ui) {

      $(this).attr('posX');
      var wparent = $(this).parent().width() - $(this).width();
      var wleft = ((ui.position.left) / wparent) * 100;



      var hparent = $(this).parent().height() - $(this).height();;
      var wtop = ((ui.position.top) / hparent) * 100;


      if (wtop > 45 && wtop < 55) { wtop = 50 }
      if (wtop > 95) { wtop = 100 }
      if (wtop < 5) { wtop = 0 }

      if (wleft > 45 && wleft < 55) { wleft = 50 }
      if (wleft > 95) { wleft = 100 }
      if (wleft < 5) { wleft = 0 }

      $('.active img').css('object-position', ' ' + wleft + '% ' + wtop + '%');




    }

  });
});







$('#filters-tools input').change(function () {

  if ($('#filters-tools:hover').length || $('#filters-tools input:focus').length) {

    var fgrayscale = $('#filter-gray-scale').val(),
      fsepia = $('#filter-sepia').val(),
      fblur = $('#filter-blur').val(),
      fcontrast = $('#filter-contrast').val(),
      fbrightness = $('#filter-brightness').val() / 100,
      finvert = $('#filter-invert').val(),
      fsaturate = $('#filter-saturate').val(),
      fhuerotate = $('#filter-hue-rotate').val();


    $('.active img').css('filter', ' grayscale(' + fgrayscale + '%) sepia(' + fsepia + '%) blur(' + fblur + 'px) contrast(' + fcontrast + '%) brightness(' + fbrightness + ') invert(' + finvert + '%) saturate(' + fsaturate + '%) hue-rotate(' + fhuerotate + 'deg) drop-shadow(0 0 0 #000)');
  }
});

$('.filters input , .input-rotate input').keyup(function () {


  var val = $(this).val();
  $(this).siblings('.handle').attr('data-value', val);
  window.dispatchEvent(new Event('resize'));
  $('#filters-tools:not(.off) input').trigger('change');




});



$('.filters-reset').click(function () {


  $('#filter-gray-scale').siblings('.handle').attr('data-value', 0),
    $('#filter-sepia').siblings('.handle').attr('data-value', 0),
    $('#filter-blur').siblings('.handle').attr('data-value', 0),
    $('#filter-contrast').siblings('.handle').attr('data-value', 100),
    $('#filter-brightness').siblings('.handle').attr('data-value', 100),
    $('#filter-invert').siblings('.handle').attr('data-value', 0),
    $('#filter-saturate').siblings('.handle').attr('data-value', 100),
    $('#filter-hue-rotate').siblings('.handle').attr('data-value', 0),

    window.dispatchEvent(new Event('resize'));
  $('#filters-tools input').trigger('change');
});









$("#ctl-img-blend .btn").click(function () {
  var imgblend = $(this).attr('property-val');
  $('.active img').css('mix-blend-mode', imgblend);
});










//   
//      $('#filter-gray-scale').val(gs);
//     $('#filter-gray-scale').siblings('.handle').attr('data-value', gs);   
//           
//     $('#filter-sepia').val(sepia); 
//     $('#filter-sepia').siblings('.handle').attr('data-value', sepia);
//           
//     $('#filter-blur').val(blur); 
//     $('#filter-blur').siblings('.handle').attr('data-value', blur);
//                
//      $('#filter-contrast').val(contrast);
//    $('#filter-contrast').siblings('.handle').attr('data-value', contrast);
//           
//     $('#filter-brightness').val(brightness); 
//      $('#filter-brightness').siblings('.handle').attr('data-value', brightness);
//           
//     $('#filter-invert').val(invert);
//     $('#filter-invert').siblings('.handle').attr('data-value', invert);
//           
//   $('#filter-saturate').val(saturate); 
//    $('#filter-saturate').siblings('.handle').attr('data-value', saturate);
//           
//     $('#filter-hue-rotate').val(huerotate);
//     $('#filter-hue-rotate').siblings('.handle').attr('data-value', huerotate);



$('#ctl-bg-gradient-deg input ').change(function () {

  if ($('#ctl-bg-gradient-deg:hover ').length || $('#ctl-bg-gradient-deg input:focus ').length) {
    $('#color-picker-bg2:not(.off)').trigger('change');

  }

  //    var c1 = $('#color-picker-bg').val();
  //     var c2 = $('#color-picker-bg2').val();
  //    var d = $(this).
  //    
  //    


});







//$('.elem-position-drag').mousemove( function(e) {
//    
//    var posX = $('.elem-position-drag-square').attr('posX');
//        var posY =$('.elem-position-drag-square').attr('posY');
//    console.log(posX);
//  
//     $('.active img').css('object-position',' '+posX+'% '+posY+'%');
//    
//
//
//    
//});


//
//$('.images-folder-list').click(function() {
// setTimeout(function() { 
//     var im = $('body').hasClass('project-images');
//    if(im){ $('body').removeClass('project-images');}
//   
//    }, 300);
//
//});



$('#ctl-size-width input').keyup(function () {

  var widthi = $(this).val();
  var widthmax = $('.active').css('max-width');
  $('.active').css('width', widthi + 'px');
  $('.active').attr('wd', widthi);

  if ($('.active.maintain-aspect-ratio').length) {
    var mh = parseInt($('.active').height());
    $('#ctl-size-height input').val(mh)
    $('.active').attr('mht', mh);
    $('#ctl-size-height input').trigger('keyup');
  }


});



$('#ctl-size-max-width input').keyup(function () {

  var mw = $(this).val();
$('.active').css( 'max-width', mw+'% important');

	
	$(".active").each(function () {
                   this.style.setProperty('max-width', mw+'%', 'important');
               });

});





$('#ctl-size-height input').keyup(function () {

  var heighti = $(this).val();
  var widthmax = $('.active').css('max-height');
  $('.active').css('max-height', heighti+'px');
  $('.active').attr('mht', heighti);

});





$('#ctl-expand-section').click(function () {
  var expand = $(this).attr('value');

  if (expand == '1') { $('.active').addClass('expand-section'); }
  else { $('.active').removeClass('expand-section'); }
});







$('#ctl-block-flow-text').click(function () {
  var vv1 = $(this).attr('value');

  if (vv1 == '1') { $('.active').addClass('flow-text'); }
  else { $('.active').removeClass('flow-text'); 
	   $('.active').css('margin-left','');
	   $('.active').css('margin-right','');
		
	

	   }
	setTimeout(function () {
atualizartools();
 
}, 10);

});

$('#ctl-bloco-content-hidden').click(function () {
  var vv1 = $(this).attr('value');

  if (vv1 == '1') { $('.active').addClass('bloco-content-hidden'); }
  else { $('.active').removeClass('bloco-content-hidden'); }


});



$('#ctl-float-position .btn').click(function () {
  $('.active').removeClass('fixed-top-right fixed-top-left fixed-bottom-right fixed-bottom-left');
  var fposition = $(this).attr('property-val');
  $('.active').addClass(fposition);
  $(this).siblings().attr('value', '0');

});




$('#ctl-block-child .btn').click(function () {

  $('.active').removeClass(' bloco50 bloco33 bloco25  bloco15');

  var vv1 = $(this).attr('value');

  var val = $(this).attr('property-val');
  //   $('.active').removeClass('bloco25 bloco33'); 
  $('.active').addClass(val);

  //    atualizartools();

  if (val == 'bloco50') { $('#ctl-block2-child-size').removeClass('off'); }
  else { $('#ctl-block2-child-size').addClass('off'); }

});






$('#ctl-block2-child-size .btn').click(function () {

  $('.active').removeClass(' bloco50-1-1 bloco50-2-1 bloco50-1-2');

  $(this).siblings('.btn').attr('value', '0');

  var val = $(this).attr('property-val');

  $('.active').addClass(val);

});







$('#ctl-bloco-mobile .btn').click(function () {

  var val = $(this).attr('property-val');
  $('.active').removeClass('bloco-mobile-double bloco-mobile-solo bloco-mobile-mantain');

  $(this).siblings('.btn').attr('value', '0');
  $('.active').addClass(val);




});






//carousel------------------------------






$('#ctl-dropmenucompact input').keyup(function () {

  var val = $(this).val();
  console.log(val);

  $('.active').attr('dropmenucompact', val);

  dropmenu();

});


$('#ctl-dropmenubar input').keyup(function () {

  var val = $(this).val();
  console.log(val);

  $('.active').attr('dropmenubar', val);

  dropmenu();

});


//carousel------------------------------



$('#ctl-carousel-card-full').click(function () {



  $('.active').toggleClass('carousel-full');

});












$('#ctl-carousel-auto').click(function () {

  var val = $(this).attr('value');

  if (val == '1') { $('.active').addClass('carousel-auto'); }
  else { $('.active').removeClass('carousel-auto'); }



});




$('#ctl-elem-ratio .btn').click(function () {
  $('.active').removeClass('elem-free elem-h1 elem-h2 elem-square elem-v1 elem-v2');
  var r = $(this).attr('property-val');

  $('.active').addClass(r);

});



//background------------------------------------------------


$('#ctl-opacity-gradient input').keyup(function () {
  var val = 100 - $(this).val();
  $('.active > .subobj ').css('mask-image', 'linear-gradient(black ' + val + '%, transparent 100%)');
  $('.active > .subobj').css('-webkit-mask-image', 'linear-gradient(black ' + val + '%, transparent 100%)');
  console.log(val);
  if (val == 100) {

    $('.active > .subobj').css('mask-image', 'none');
    $('.active > .subobj').css('-webkit-mask-image', 'none');

  }

  //	alert(bgImage)
});


$('#ctl-opacity input').keyup(function () {
  var val = $(this).val() / 100;

  $('.active > .subobj').css('opacity', val);

  //	alert(bgImage)
});



//background------------------------------------------------




//
//
//$('#ctl-bg-image input').change(function() {
//var bgImage = $(this).val();
//    
//   
//    
//$('.active').css('background-image', 'url('+bgImage+')');
//    if(bgImage == ''){$('.active').css('background-image', 'none');}
//    
////	alert(bgImage)
//});


$('#ctl-bg-blur input').keyup(function () {
  var val = $(this).val();
  $('.active').css('backdrop-filter', 'blur(' + val + 'px)');
  $('.active').css('-webkit-backdrop-filter', 'blur(' + val + 'px)');
  //	alert(bgImage)
});



$('#ctl-bg-repeat .btn').click(function () {
  var repeatt = $(this).attr('property-val');
  $('.active').css('background-repeat', repeatt);
});






//$('#ctl-bg-cover').click(function() {
//var cover = $(this).attr('value');
//if(cover == 1){$('.active').css('background-size', 'cover');}
//else{$('.active').css('background-size', 'auto');}
//});


$('#ctl-bg-fixed').click(function () {
  var fixed = $(this).attr('value');
  if (fixed == 1) {

    $('.active').css('background-attachment', 'fixed, local');
    if (subobj) { $('.active > .subobj').css('background-attachment', 'fixed, local'); }
  }


  else {
    $('.active').css('background-attachment', 'local, local');

    if (subobj) { $('.active > .subobj').css('background-attachment', 'local, local') };
  }
});


$("#ctl-bg-size .btn").click(function () {
  var size = $(this).attr('property-val');

  $('.active').removeAttr('bgsize');

  if (subobj) { $('.active > .subobj').css('background-size', size + ', cover'); }
  else {
    $('.active').css('background-size', size + ', cover');



  }
});


$("#bgposition .btn").click(function () {
  var position = $(this).attr('property-val');
  $('.active').css('background-position', position);
});

$("#ctl-bg-blend .btn").click(function () {
  var bgblend = $(this).attr('property-val');

  if ($('.img.active').length) { $('.active > .subobj').css('background-blend-mode', bgblend + ',normal'); }
  else { $('.active').css('background-blend-mode', bgblend + ',normal'); }
});



$(function () {
  $(".elem-position-drag-square-bg").draggable({
    containment: ".elem-position-drag-bg",
    cursor: "crosshair",
    drag: function (e, ui) {

      $(this).attr('posX');
      var wparent = $(this).parent().width() - $(this).width();
      var wleft = ((ui.position.left) / wparent) * 100;



      var hparent = $(this).parent().height() - $(this).height();;
      var wtop = ((ui.position.top) / hparent) * 100;


      if (wtop > 45 && wtop < 55) { wtop = 50 }
      if (wtop > 95) { wtop = 100 }
      if (wtop < 5) { wtop = 0 }

      if (wleft > 45 && wleft < 55) { wleft = 50 }
      if (wleft > 95) { wleft = 100 }
      if (wleft < 5) { wleft = 0 }

      $('.active').css('background-position', ' ' + wleft + '% ' + wtop + '%');

    }

  });
});



$('#color-picker-bg').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",


  move: function (color) {
    var ncolor = $('#color-picker-bg').val();


    if (subobj) { $('.active > .subobj').css('background-color', ncolor); }

    else { $('.active').css('background-color', ncolor); }

    $('#color-picker-bg2:not(.off)').trigger('change');

  },
  change: function (color) {
    $('#color-picker-bg').val(color);


  }, hide: function (color) {
    $('#color-picker-bg').val(color);
  }

});






$('#color-picker-bg2').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,

  move: function (color) {
    //       var ncolor = $('#color-picker-bg').val();
    var ncolor2 = $('#color-picker-bg2').val();
    var deg = $('#bg-gradient-deg').val();
    var image = $('.active').attr('bg-image');

    if (subobj) { $('.active > .subobj').css('background-image', 'url(' + image + '), linear-gradient(' + deg + 'deg, transparent 0%, ' + ncolor2 + ' 100%)'); }



    else { $('.active ').css('background-image', 'url(' + image + '), linear-gradient(' + deg + 'deg, transparent 0%, ' + ncolor2 + ' 100%)'); }

    //     $('.active ').attr('bg-color2', ncolor2);
    setTimeout(function () {
      $('.active ').attr('bg-color2', ncolor2);

    }, 100);


  },
  change: function (color) {
    $('#color-picker-bg2').val(color);


  }, hide: function (color) {
    $('#color-picker-bg2').val(color);
  }

});













//trab

$('#color-picker-bg-mask').spectrum({
  type: "color",
  preferredFormat: "rgb",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var shadowatual = '';
    var ncolor = $('#color-picker-bg-mask').val();
    if (subobj) { $('.active > .subobj').css('box-shadow', 'inset 0 0 0 5000px ' + ncolor + ''); }
    else { $('.active').css('box-shadow', 'inset 0 0 0 5000px ' + ncolor + ''); }


  },
  change: function (color) {
    $('#color-picker-bg-mask').val(color);


  }, hide: function (color) {
    $('#color-picker-bg-mask').val(color);
  }

});




//tipografia------------------------------------------------


$('#color-picker-font').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#color-picker-font').val();




    $('.active').css('color', ncolor);


  },
  change: function (color) {
    $('#color-picker-font').val(color);


  }, hide: function (color) {
    $('#color-picker-font').val(color);
  }

});


$('#color-picker-font-stroke').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",


  move: function (color) {
    var ncolor = $('#color-picker-font-stroke').val();
var wistroke = $('#ctl-stroke-width input').val()/1000;

    $(' .active').css('text-stroke', wistroke+'em ' + ncolor);






  },
  change: function (color) {
    $('#color-picker-font-stroke').val(color);


  }, hide: function (color) {
    $('#color-picker-font-stroke').val(color);
  }

});












var textArray = [
  " adipiscing", " elit", " assumenda", " magnam", " neccitatisbus", " quia", " vel", " voluptatem", " tempore", " ullam", " autem", " laudantium", " omnis", " placeat", " raesentium", " veritatis", " voluptas", " animi", " quo", " quo", " quibusdam", " est", " impedit", " at", " hic", " error", " provident", " odio", " nobis", " sit", " aperiam", " vel", " accusamus", " obcaecati", " repellendus", " labore", " vitae", " explicabo", " doloribus", " fugit", " iure", " autem", " necessitabus", " laboriosam", " expedita", " maxime", " adipisci", ".", ",", "!", "?",
];

$("#ctl-lorem:not(.off) input").keyup(function () {




});



$("#ctl-lorem:not(.off) input").bind("mousewheel", function (event, delta) {
  if ($(this).is(":focus")) {




    if (delta > 0) {

      var newtext = textArray[Math.floor(Math.random() * textArray.length)];
      var t1 = $('.active').text();
      $('.active').text(t1 + newtext);



    } else {

      var t1 = $('.active').text().split(" ").slice(0, -1).join(" ");
      $('.active').text(t1);


    }

    //     $(this).trigger('keyup');
    return false;
  }
});














$("#ctl-font-weight .btn").click(function () {


  var weight = $(this).attr('property-val');
  $('.active').removeClass('font-thin');
  $('.active').removeClass('font-normal');
  $('.active').removeClass('font-hard');

  $('.active').addClass(weight);


});



$("#ctl-stroke-width input").keyup(function () {
  var val = $(this).val() / 100;

  $('.active').css('text-stroke-width', val + 'em');
});



$("#ctl-font-size .btn").click(function () {
	
	
	  var fontsize = $(this).attr('property-val');
  $('.active').removeClass('font-medium');
  $('.active').removeClass('font-big');
  $('.active').removeClass('font-small');

  $('.active').addClass(fontsize);

	
	
	

});




$("#ctl-line-height .btn").click(function () {
	
	
	  var val = $(this).attr('property-val');

$('.active').removeClass('lh1 lh1p2 lh1p4 lh1p6 lh1p8 lh2 lhinherit');
  $('.active').addClass(val);
	

	
	
	

});



$("#ctl-font-size-mobile .btn").click(function () {
	
	
	  var fontsize = $(this).attr('property-val');
  $('.active').removeClass('font-medium-mobile');
  $('.active').removeClass('font-big-mobile');
  $('.active').removeClass('font-small-mobile');

  $('.active').addClass(fontsize);

	
	
	

});

//$("#ctl-font-size-mobile").click(function () {
//  $('.active').toggleClass('font-small-mobile');
//});
//







$("#ctl-font-bg-clip").click(function () {
  $('.active').toggleClass('background-clip-text');
});



$("#ctl-font-family .btn").click(function () {
  var fontFamily = (this.childNodes[0].nodeValue);


  $('.active').css('font-family', fontFamily);


});



$("#ctl-font-align .btn").click(function () {
  var fontalign = $(this).attr('property-val');


  $('.active').css('text-align', fontalign);

  if ($('.button.active').length) {

    if (fontalign == 'center') { $('.active').addClass('horizontal-align') }
    else { $('.active').removeClass('horizontal-align') }


    atualizartools();
  }


});


$("#ctl-font-align-mobile .btn").click(function () {
  var fontalign = $(this).attr('property-val');
  $('.active').removeClass('mobile-text-left mobile-text-right mobile-text-center mobile-text-align-none');

  $('.active').addClass(fontalign);


});




$("#ctl-font-title .btn").click(function () {

  var hh = $('.active').prop('nodeName').toLowerCase();
  var ftitle = $(this).attr('property-val');
  var ft = $('.active').prop('outerHTML').replace(hh, ftitle).replace(hh, ftitle);
  $('.active').replaceWith(ft);


});

//---------------------------------






$("#ctl-font-removeFormat").mousedown(function () {
  document.execCommand("removeFormat");
  document.execCommand("unlink");
});

$("#ctl-font-bold").mousedown(function () {
  document.execCommand("bold");

});

$("#ctl-font-underline").mousedown(function () {
  document.execCommand("underline");

});

$("#ctl-font-italic").mousedown(function () {
  document.execCommand("italic");

});

$("#ctl-font-strike").mousedown(function () {
  document.execCommand("strikeThrough");

});




$("#ctl-font-subtext").mousedown(function () {





  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.rangeCount > 0) {
      var range = sel.getRangeAt(0);
      var startNode = range.startContainer, startOffset = range.startOffset;

      var startTextNode = document.createTextNode('');
      var endTextNode = document.createTextNode('\u200C');

      var boundaryRange = range.cloneRange();
      boundaryRange.collapse(false);
      boundaryRange.insertNode(endTextNode);
      boundaryRange.setStart(startNode, startOffset);
      boundaryRange.collapse(true);
      boundaryRange.insertNode(startTextNode);

      // Reselect the original text
      range.setStartAfter(startTextNode);
      range.setEndBefore(endTextNode);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }


  document.execCommand("insertHTML", false, "<span style='' class='active-select active-temp' type='subtext'>" + document.getSelection() + "</span>");

  $('.active-temp').trigger('click');
  atualizartools();
  $('.active-temp').removeClass('active-temp');



});





$("#ctl-dynamic-text .btn").mousedown(function () {
  var tipo = $(this).attr('property-val');
  document.execCommand("insertHTML", false, "&nbsp;<span style='' class='active-select ' contenteditable='false' type='dynamic-text' dynamic-text='" + tipo + "'>" + tipo + "</span>&nbsp; ");


});





$("#ctl-font-nobreak").click(function () {
  var vcrop = $(this).attr('value');

  if (vcrop == '1') { $('.active').addClass('nobreak'); }
  else { $('.active').removeClass('nobreak'); }


});






$('body').delegate('[contenteditable="true"] > span', 'keyup', function (e) {

  $(this).css('background', 'red');

  //     var cls = window.getSelection().focusNode.parentNode;  
  //    $(cls).after('&nbsp;');
  //     if (e.keyCode === 16 && e.keyCode === 32) {
  //       $(this).css('background', 'red');  
  //    }


});









function textformat() {


  var cls = window.getSelection().focusNode.parentNode;
  $(cls).addClass('active-select');
  $(cls).attr('type', 'subtext');
  $(cls).after('&nbsp;');
}


//  function surroundSelection() {
//       
//    var span = document.createElement("span");
//   span.classList.add('active-select');
//    span.setAttribute("type", "subtext");
//    if (window.getSelection) {
//        var sel = window.getSelection();
//        if (sel.rangeCount) {
//            var range = sel.getRangeAt(0).cloneRange();
//          if(sel != ''){ 
////              $('.active').removeClass('active');
//            range.surroundContents(span);
//            sel.removeAllRanges();
//            sel.addRange(range);} 
//            
//            
////             $('.active').after('<span  contenteditable="false">&nbsp;</span>');
////      $('.active').after('<span  contenteditable="false">&nbsp;</span>');
//            
//        }
//    }
//}

//material-symbols-outlined


$("#ctl-font-icon").mousedown(function () {
  var ttyoe = $('.active[type=button]').length;
  var chil = $('.active .icone').length;
  if (ttyoe && chil) {


  }
  else {
    var newicon = '<i class="icone  drop-item active-select nico" type="icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" height="48" width="48"><path d="M17.85 17 23 6.5h2L30.15 17ZM23 40 5.5 19H23Zm2 0V19h17.5Zm7.4-23L27.25 6.5H37.7L42.95 17ZM5.05 17 10.3 6.5h10.45L15.6 17Z"/></svg></i><span>&nbsp;</span>';

    document.execCommand('insertHtml', null, newicon);
  }
  //      var nico = '<span class=" material-symbols-outlined" contenteditable="false">diamond</span>';
  //  $('.nico').html(nico);
  //     $('.nico').removeClass('nico');
});






$("#ctl-font-link").mousedown(function () {

  document.execCommand('createLink', true, ' #link ')


  var cls = window.getSelection().focusNode.parentNode;
  $(cls).addClass('active-select');
  $(cls).attr('type', 'link');

  //      setTimeout(function() { 
  //       atualizartools();
  //    }, 50);

});


//  function surroundSelectionlink() {
//    var span = document.createElement("a");
//   span.classList.add('active','active-select');
//    span.setAttribute("type", "link");
//    if (window.getSelection) {
//        var sel = window.getSelection();
//        if (sel.rangeCount) {
//            var range = sel.getRangeAt(0).cloneRange();
//          if(sel != ''){ 
//            $('.active').removeClass('active');
//            range.surroundContents(span);
//            sel.removeAllRanges();
//            sel.addRange(range);} 
//            
//                 $('.active').after('<span  contenteditable="false">&nbsp;</span>');
//      $('.active').before('<span  contenteditable="false">&nbsp;</span>');
//        }
//    }
//}




//link---------------------


$("#ctl-link-tab.btn").click(function () {

  var valt = $(this).attr('value');



  if (valt == '1') {
    $('.active').attr('target', '_blank');

  }
  else { $('.active').removeAttr('target'); }
});




$("#ctl-show-modal ").delegate('.btn', 'click', function () {


  var showmodal = $(this).attr('property-val');
  $(this).attr('value', '1');
  $(this).siblings().attr('value', '0');
  if (showmodal != 'none') {

    $('#ctl-link input').val('');
    $('.active').removeAttr('temphref');
    $('.active').removeAttr('data-btn-modal-show');
    $('.active').attr('data-btn-modal-show', showmodal);
  }
  else { $('.active').removeAttr('data-btn-modal-show'); }





});






$("#ctl-link input").keyup(function () {

  var link = $(this).val();

  $('.active').attr('temphref', link);



  if (link.length >= '5') { $('.active.img').addClass('cursor-pointer'); }
  else { $('.active.img').removeClass('cursor-pointer'); }
});





//link---------------------
$("#ctl-contact-float-number input").keyup(function () {


  contactFloat();



});

$("#ctl-contact-float-text").keyup(function () {

  contactFloat();

});

function contactFloat() {

  var link = $('#ctl-contact-float-number input').val();
  var text = $('#ctl-contact-float-text').val().replace(/ /g, "+");
  $('.active').attr('alt', link);
  $('.active').attr('href', 'https://wa.me/' + link + '?text=' + text);


}

//animations--------------------------------------------------


$("#ctl-button-animation .btn").click(function () {
  var animation = $(this).attr('property-val');


  $('.active').attr('hover-animation', animation);


});



$("#ctl-non-hover-animation .btn").click(function () {
  var animation = $(this).attr('property-val');


  $('.active').attr('non-hover-animation', animation);


});

$("#ctl-all-hover-animation .btn").click(function () {
  var animation = $(this).attr('property-val');


  $('.active').attr('all-hover-animation', animation);


});


$("#ctl-father-hover-animation .btn").click(function () {
  var animation = $(this).attr('property-val');


  $('.active').attr('father-hover-animation', animation);


});


//modal-----------------------------------------------

$("#ctl-position-9 .btn").click(function () {
  var po = $(this).attr('property-val');
  $(this).siblings().attr('value', '0')
  $('.active').removeClass('direcional-t-l  direcional-t-c  direcional-t-r direcional-c-l direcional-c-c direcional-c-r direcional-b-l direcional-b-c direcional-b-r');
  $('.active').addClass(po);
	
	$('#ctl-rotate:not(.off) input').trigger('keyup');


});


$("#ctl-position-centered").click(function () {

  var valt = $(this).attr('value');



  if (valt == '1') {
    $('.active').addClass('position-centered');
	  

  }
  else { $('.active').removeClass('position-centered'); }
$('#ctl-rotate:not(.off) input').trigger('keyup');
});
//code-----------------------------------------------



$("#ctl-codearea textarea").change(function () {
  var codea = $(this).val();


  $('.active .codearea-sub').html(codea);
  $('.active .formcode').html(codea);
	
	
	$('.active .codearea-sub').attr('codearea-sub-code', codea);


});



//video-----------------------------------------------

$("#ctl-video").change(function () {
	
  var codea = $(this).val();
	
	
	{
	var apid = 'api=1';
		if(codea.indexOf(apid) == -1){
			
			var code0 = codea.split('src="')[1].split('"')[0];
	var code1 = code0.split('/')[4];
	var code2 = code1.split('?')[0];
	
	
	codea = codea.replace(code2,  code2+"?html5=1&enablejsapi=1");
$(this).val(codea);
			
		}
		
		console.log(codea.indexOf(apid));
		
	}
	
	
	
	
	



  $('.active > .subobj > .videosize').html(codea);
  $(window).trigger('resize');

  var vsltube = "vsltube";
  if (codea.includes(vsltube)) {
    $('.active').addClass('vsltubeinside');

  }
  else { $('.active').removeClass('vsltubeinside'); }
});


$("#ctl-youtube-hidden ").click(function () {
  var ytpage = $(this).attr('value');

  if (ytpage == '1') { $('.video.active').addClass('youtube-hidden'); }
  else { $('.video.active').removeClass('youtube-hidden'); }


});




$('#ctl-video-ratio .btn').click(function () {


  $('.active.video').removeClass('elem-ratio ratio-video-h ratio-video-square ratio-video-v ');




  var ratiop = $(this).attr('property-val');
  $('.active.video').addClass(ratiop);




});


$('#ctl-playerbtn-hidden').click(function () {

  var vcrop = $(this).attr('value');

  if (vcrop == '1') { $('.active.video').addClass('playerbtn-hidden'); }
  else { $('.active.video').removeClass('playerbtn-hidden'); }





});



$('#ctl-video-float ').click(function () {

  var vcrop = $(this).attr('value');
  $(this).attr('value');
	$('.video-float-label').remove();

  if (vcrop == '1') {
    $('.video').removeClass('video-float');
    $('.active.video').addClass('video-float');
	   $('.active.video').append('<div class="video-float-label"><div class="video-float-label-btn"></div></div>');
    $(this).addClass('float-used');
  }
  else { $('.video').removeClass('video-float'); $(this).removeClass('float-used'); }


});


//NOTE iframe-----------------------------------------------



$('#ctl-iframe-url input ').change(function () {

  var link = $(this).val();
	
	$('.active iframe').attr('src', link);



});

//border-----------------------------------------------


//
//$('#ctl-border-color input').change(function() {
//    
//  
//var bordercolor = $(this).val();
//    
//    if(itemSelect == 'img'){$('.active img').css('border-color', bordercolor); }
//    else{$('.active').css('border-color', bordercolor);}
//    
//
//
//});


$('#color-picker-border').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#color-picker-border').val();
    if (subobj) { $('.active > .subobj').css('border-color', ncolor); }
    else { $('.active').css('border-color', ncolor); }
  },
  change: function (color) {
    $('#color-picker-border').val(color);


  }, hide: function (color) {
    $('#color-picker-border').val(color);
  }

});





//$('#ctl-border-width input').keyup(function() {
//var borderwidth = $(this).val();
//  
//    
//    if(subobj){
//        
//        $('.active .subobj').css('border-width', borderwidth+'px');
//$('.active .subobj').css('border-style','solid'); }
//
//    else{$('.active').css('border-width', borderwidth+'px');
//$('.active').css('border-style','solid'); }
//
//}); e.altKey
	
$('#ctl-border-width4 input').change(function (e) {

	  bordestyle();

});


$('#ctl-border-width4 input').keyup(function (e) {

  if (e.keyCode == 67) {
    var val = $(this).val();
    $(this).closest('#ctl-border-width4').find('input').val(val);

  }
	 bordestyle();


});




$('#ctl-border-style .btn').click(function () {
 bordestyle();
	


});




function bordestyle(){
 var borderwidtht =  $('#ctl-border-width4 #border-width-top').val();
	 var borderwidthb =  $('#ctl-border-width4 #border-width-bottom').val();
	 var borderwidthl =  $('#ctl-border-width4 #border-width-left').val();
	 var borderwidthr =  $('#ctl-border-width4 #border-width-right').val();
	
var borderstyle = 'solid';

	if( $('#ctl-border-style .btn[value=1]').length){
		borderstyle = $('#ctl-border-style .btn[value=1]').attr('property-val');

	}
	
	{
		 if (subobj) {

              $('.active > .subobj').css('border-top-width', borderwidtht + 'px');
			  $('.active > .subobj').css('border-bottom-width', borderwidthb + 'px');
			  $('.active > .subobj').css('border-left-width', borderwidthl + 'px');
			  $('.active > .subobj').css('border-right-width', borderwidthr + 'px');
			  $('.active > .subobj').css('border-style', borderstyle);
  }

  else {

	    $('.active').css('border-top-width', borderwidtht + 'px');
			  $('.active').css('border-bottom-width', borderwidthb + 'px');
			  $('.active').css('border-left-width', borderwidthl + 'px');
			  $('.active').css('border-right-width', borderwidthr + 'px');
	     $('.active').css('border-style', borderstyle);
  }
		
	}
		
	
}
//NOTE Border radius



$('#ctl-border-radius input').keyup(function () {
  var borderradius = $(this).val();

	  $('.active').removeClass('border-radius-per');
		$('.active').removeAttr('data-border-radius');
	
	if(borderradius == 0){
		              
						 $('.active').css('border-radius', 0);
						  $('.active > .subobj').css('border-radius', 0)
						 }
	else{$('.active').css('border-radius', borderradius+'px' );
	$('.active > .subobj').css('border-radius', borderradius+'px');
		 
	
	
		}

});




$('#ctl-border-radius-per input').keyup(function () {
  var borderradius = $(this).val();

	
	
	if(borderradius == 0){$('.active').removeAttr('data-border-radius');
						 $('.active').css('border-radius', 0);
						  $('.active > .subobj').css('border-radius', 0)
						 }
	else{$('.active').attr('data-border-radius', borderradius);
	borderRadius()
		 
	
	
		}

});





$('#ctl-border-radius-converttoper ').click(function () {
  var pp = $(this).attr('value');
  if (pp == '1') {
	      
	  
	   $('#ctl-border-radius').addClass('off');
	   $('#ctl-border-radius-per').removeClass('off');
	    $('.active').addClass('border-radius-per'); 
	  var borderpx = parseInt( $('.active').css('border-radius') );
	   var ww = $('.active').width();
	   var borderper =  parseFloat( (borderpx) / (ww/100)).toFixed(1);
	  console.log(borderper);
	  $('.active').attr('data-border-radius', borderper);
	  $('#ctl-border-radius-per input').val(borderper);
	  
	  
	  
  	borderRadius();
  }

	
  else { 
	  
	 
	
	
	    $('#ctl-border-radius').removeClass('off');
	   $('#ctl-border-radius-per').addClass('off');
	  $('.active').removeClass('border-radius-per');

	
	 
	 atualizartools();


	    setTimeout(function() { 
			
		 var borderradius = parseInt($('#ctl-border-radius input').val() );
		$('#ctl-border-radius input').val(borderradius) ;
	$('#ctl-border-radius input').trigger('keyup');

			
          }, 20); 
	     

        
  
  }
	

});


















$('#ctl-padding ').click(function () {
  var pp = $(this).attr('value');
  if (pp == '1') { $('.active').addClass('padding'); }
  else { $('.active').removeClass('padding'); }

});



$('#ctl-space-between').click(function () {
  var pp = $(this).attr('value');
  if (pp == '1') { $('.active').addClass('space-between'); }
  else { $('.active').removeClass('space-between'); }

});




//NOTE margin-----------------------------------------------





$('#ctl-margin-top-free').keyup(function () {
  var val = $(this).val();


 if ( val == '') { 
	
	$('.active').css('margin-top', ''); 
	$('.active').addClass('margin-top'); 
	 $('.active').attr('css-mt','smart');
$('#ctl-margin-top-free').val('');
}
	
  else {  $('.active').css('margin-top', val+'px'); 
	  $('.active').removeClass('margin-top');
	    $('.active').attr('css-mt',val);}

});





$('#ctl-margin-bottom-free').keyup(function () {
  var val = $(this).val();
	
if (val == '') { 
	
	$('.active').css('margin-bottom', ''); 
	$('.active').addClass('margin-bottom'); 
$('#ctl-margin-bottom-free').val('');
	 $('.active').attr('css-mb','smart');
}
	
  else {  $('.active').css('margin-bottom', val+'px'); 
	  $('.active').removeClass('margin-bottom');
	   $('.active').attr('css-mb',val);}
 

});





$('#ctl-margin-left-free').keyup(function () {
  var val = $(this).val();
 if ( val == '') { 
	 
	
	$('.active').css('margin-left', ''); 
	$('.active').addClass('margin-left-auto'); 
$('#ctl-margin-left-free').val('');
	 	 $('.active').attr('css-ml','auto');
}
	
  else {  $('.active').css('margin-left', val+'px'); 
	  $('.active').removeClass('margin-left-auto');
	   $('.active').attr('css-ml',val);}


	
	
});


$('#ctl-margin-right-free').keyup(function () {
  var val = $(this).val();
 if ( val == '') { 
	
	$('.active').css('margin-right', ''); 
	$('.active').addClass('margin-right-auto'); 
$('#ctl-margin-right-free').val('');
	 	 $('.active').attr('css-mr','auto');
}
	
  else {  $('.active').css('margin-right', val+'px'); 
	  $('.active').removeClass('margin-right-auto');
	   $('.active').attr('css-mr',val);}

});











//
//$('#ctl-margin-top ').click(function () {
//  var pp = $(this).attr('value');
//  if (pp == '1') { $('.active').addClass('margin-top'); }
//  else { $('.active').removeClass('margin-top'); }
//
//});
//
//$('#ctl-margin-bottom ').click(function () {
//  var pp = $(this).attr('value');
//  if (pp == '1') { $('.active').addClass('margin-bottom'); }
//  else { $('.active').removeClass('margin-bottom'); }
//
//});
//
//
//$('#ctl-margin-left ').click(function () {
//  var pp = $(this).attr('value');
//  if (pp == '1') { $('.active').addClass('margin-left'); }
//  else { $('.active').removeClass('margin-left'); }
//
//});
//
//$('#ctl-margin-right ').click(function () {
//  var pp = $(this).attr('value');
//  if (pp == '1') { $('.active').addClass('margin-right'); }
//  else { $('.active').removeClass('margin-right'); }
//
//});



//dynamic text-----------------------------------------------






$('#ctl-dynamic-name-sex .btn').click(function () {
  var pp = $(this).attr('value');
  $('.active').removeClass('anyname malename femalename');

  if (pp == '1') {

    $('.active').addClass($(this).attr('property-val'));
  }


});





$('#ctl-last-name').click(function () {

  var pp = $(this).attr('value');
  if (pp == '1') { $('.active').addClass('rlastname'); }
  else { $('.active').removeClass('rlastname'); }


});


$('#ctl-dynamic-text-refresh').click(function () {

  var pp = $(this).attr('value');
  if (pp == '1') { $('.active').addClass('dynamic-text-refresh'); }
  else { $('.active').removeClass('dynamic-text-refresh'); }


});







$('#ctl-dynamic-hours input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('hours-plus', val);


});


$('#ctl-dynamic-minutes input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('minutes-plus', val);


});




$('#ctl-dynamic-number-start input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('dynamic-number-start', val);
  if (val == '') { $('.active').removeAttr('dynamic-number-start'); }


});


$('#ctl-dynamic-number-min input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('dynamic-number-min', val);
  if (val == '') { $('.active').removeAttr('dynamic-number-min'); }


});


$('#ctl-dynamic-number-max input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('dynamic-number-max', val);
  if (val == '') { $('.active').removeAttr('dynamic-number-max'); }


});


$('#ctl-dynamic-number-refresh-max input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('dynamic-number-refresh-max', val);
  if (val == '') { $('.active').removeAttr('dynamic-number-refresh-max'); }


});








$('#ctl-dynamic-number-d .btn').click(function () {
  var pp = $(this).attr('value');
  $('.active').removeClass('dynamic-number-down dynamic-number-up dynamic-number-up-down');

  if (pp == '1') {

    $('.active').addClass($(this).attr('property-val'));
  }


});



$('#ctl-dynamic-words input').keyup(function () {

  var val = $(this).val();
  $('.active').attr('dynamic-words', val);
  if (val == '') { $('.active').removeAttr('dynamic-words'); }


});


$('#ctl-dynamic-words-random ').click(function () {
  var pp = $(this).attr('value');


  if (pp == '1') {

    $('.active').addClass('dynamic-words-random');
  }
  else { $('.active').removeClass('dynamic-words-random'); }


});

//ctl-dynamic-words






//NOTE shadow

function elemshadow() {
  var
    shadowcolor = $('#ctl-shadow-color input').val(),
    shadowx = $('#ctl-shadow-x input').val(),
    shadowy = $('#ctl-shadow-y input').val(),
    shadowblur = $('#ctl-shadow-blur input').val();


  if (itemSelect != 'img') {

    if (subobj) { $('.active > .subobj').css('box-shadow', shadowx + 'px ' + shadowy + 'px ' + shadowblur + 'px ' + '0px ' + shadowcolor) }
    else { $('.active').css('box-shadow', shadowx + 'px ' + shadowy + 'px ' + shadowblur + 'px ' + '0px ' + shadowcolor) }
  }

  else {

    var nshadow = 'drop-shadow(' + shadowx + 'px ' + shadowy + 'px ' + shadowblur + 'px ' + shadowcolor + ')';



    var xfilter = $('.active > .subobj').css('filter').split('drop-shadow')[0];
    if (xfilter == 'none') { xfilter = ''; }


    $('.active > .subobj').css('filter', xfilter + ' ' + nshadow);
    console.log('ns' + xfilter + ' ' + nshadow);




  }

}


$('#color-picker-shadow').spectrum({
  type: "color",
  preferredFormat: "rgb",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    elemshadow();
  },
  change: function (color) {
    $('#color-picker-shadow').val(color);
    $('#color-picker-shadow').trigger('change');

  }, hide: function (color) {
    $('#color-picker-shadow').val(color);
  }

});



$('#shadow-tools *').keyup(function () {
  elemshadow();

});


// NOTE ilustration

$('body ').delegate('.ilustration-item', 'click', function (e) {
  var ilustration = $(this).html();
  $('.active.ilustration svg').replaceWith(ilustration);
  atualizartools();

  var color1 = $('.ilustration.active').attr('inside-svg-color1');
  var color2 = $('.ilustration.active').attr('inside-svg-color2');
  var color3 = $('.ilustration.active').attr('inside-svg-color3');
  $('.ilustration.active [svg-color=c1]').attr('fill', color1);
  $('.ilustration.active [svg-color=c2]').attr('fill', color2);
  $('.ilustration.active [svg-color=c3]').attr('fill', color3);


});




$('#ilustration-color1').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#ilustration-color1').val();

    $('.ilustration.active [svg-color=c1]').attr('fill', ncolor);


  },
  change: function (color) {
    $('#ilustration-color1').val(color);


  }, hide: function (color) {
    $('#ilustration-color1').val(color);
    $('.ilustration.active').attr('inside-svg-color1', color);
  }

});





$('#ilustration-color2').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#ilustration-color2').val();

    $('.ilustration.active [svg-color=c2]').attr('fill', ncolor);


  },
  change: function (color) {
    $('#ilustration-color2').val(color);


  }, hide: function (color) {
    $('#ilustration-color2').val(color);
    $('.ilustration.active').attr('inside-svg-color2', color);
  }

});

$('#ilustration-color3').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#ilustration-color3').val();

    $('.ilustration.active [svg-color=c3]').attr('fill', ncolor);


  },
  change: function (color) {
    $('#ilustration-color3').val(color);


  }, hide: function (color) {
    $('#ilustration-color3').val(color);
    $('.ilustration.active').attr('inside-svg-color3', color);
  }

});






// NOTE list



$("#ctl-list-type").click(function () {
  var vval = $(this).attr('value');
  if (vval == '1') { $('.active').addClass('list-number'); }
  else { $('.active').removeClass('list-number'); }
});


$("#ctl-list-icon-position").click(function () {
  var vval = $(this).attr('value');
  if (vval == '1') { $('.active').addClass('list-style-center'); }
  else { $('.active').removeClass('list-style-center'); }
});

$("#ctl-list-icon-size").click(function () {
  var vval = $(this).attr('value');
  if (vval == '1') { $('.active').addClass('list-style-big'); }
  else { $('.active').removeClass('list-style-big'); }
});

$("#ctl-list-columns").click(function () {
  var vval = $(this).attr('value');
  if (vval == '1') { $('.active').addClass('list-columns'); }
  else { $('.active').removeClass('list-columns'); }
});







//icon------------------------------------------------
//
//    $.fn.icon = function(){
// 
//        jQuery('.icone .convertimg').each(function(){
//            var $img = jQuery(this);
//            var imgID = $img.attr('id');
//            var imgClass = $img.attr('class');
//            var imgURL = $img.attr('src');
//
//            jQuery.get(imgURL, function(data) {
//                
//                var $svg = jQuery(data).find('svg');
//
//                // Add o ID do seu img no svg inline
//                if(typeof imgID !== 'undefined') {
//                    $svg = $svg.attr('id', imgID);
//                }
//                // Add a classe do seu img no svg inline
//                if(typeof imgClass !== 'undefined') {
//                    $svg = $svg.attr('class', imgClass+' ');
//                }
//
//             
//                $svg = $svg.removeAttr('xmlns:a');
//
//                // Replace img pelo SVG inline
//                $img.replaceWith($svg);
//    $('.icone .convertimg').removeClass('convertimg'); 
//                $('.icone.active').trigger('click'); 
//                atualizartools();
//            }, 'xml');
// });
//    
//};

//viewBox="0 0 64 64"

$('#ctl-icon-list ').delegate('.icon-item', 'click', function (e) {
  var ico = $(this).html();
  $('.active.icone svg').replaceWith(ico);
      $('#ctl-rotate-icon input').trigger('keyup');

});

$('#color-picker-icon').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#color-picker-icon').val();
    $('.active.icone').css('fill', ncolor);

    var acordionicon = $('.active').hasClass('acordion-icon-open');


  },
  change: function (color) {
    $('#color-picker-icon').val(color);


  }, hide: function (color) {
    $('#color-picker-icon').val(color);
  }

});




$('#color-picker-icon-stroke').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#color-picker-icon-stroke').val();
    $('.active.icone').css('stroke', ncolor);




  },
  change: function (color) {
    $('#color-picker-icon-stroke').val(color);


  }, hide: function (color) {
    $('#color-picker-icon-stroke').val(color);
  }

});




$("#ctl-icon-stroke input").keyup(function () {
  var stroke = $(this).val() / 10;
  $('.active.icone').css('stroke-width', stroke + 'px');
});

















$('#browser-color').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#browser-color').val();





  },
  change: function (color) {
    $('#browser-colore').val(color);


  }, hide: function (color) {
    $('#browser-color').val(color);
  }

});





$("#ctl-converttopagee").click(function () {
  if (typeElem == 'form') {


    formtopagee();

  }
});


function formtopagee() {
  $('body').append('<div class="tempformtopagee"></div>')
  var form1 = $('.active .formcode').html();

  $('.tempformtopagee').html(form1);
  $('.tempformtopagee form').addClass('pagee-form-convertido');
  $('.tempformtopagee form').html('<div class="inputshidden"></div>');
  $('.tempformtopagee form').addClass('content_area');


  $(".active form input").each(function () {

    var namee = $(this).attr('name');
    var typee = $(this).attr('type');
    var inhidden = $(this).parent().attr('aria-hidden');



    if (typee == 'hidden' || inhidden == 'true') {
      $('.tempformtopagee form .inputshidden').append('<br class="ni"> ');
      $(this).clone().replaceAll('.ni');
    }

    else if (typee == 'submit') {
      $('.tempformtopagee form').append('<div class="input-box active-select" type="inputbox"><div class="input-elem active-select" type="' + typee + '"><br class="ni"> </div></div>');
      $(this).clone().addClass('subobj').replaceAll('.ni');
    }

    else {

      $('.tempformtopagee form').append('<p class="active-select" type="p">' + namee + '</p><div class="input-elem active-select" type="' + typee + '"><br class="ni"> </div>');
      $(this).clone().addClass('subobj').replaceAll('.ni');


    }

    setTimeout(function () {
      var newpageeform = $('.tempformtopagee').html();
      $('.active .formcode').html(newpageeform);
      $('.tempformtopagee').remove();
      atualizartools();
    }, 200);



  });

}


// input -----------------------------------------------

$('#ctl-input-type .btn').click(function () {

  var val = $(this).attr('property-val');
  $('.active input').attr('type', val);

  $(this).siblings('.btn').attr('value', '0');
  $('.active').addClass(val);
 $('.active label').remove();
	 $('.active').removeClass('input-elem-cb');
	 $('.active').removeClass('input-elem-rd');
	 $('.active input').addClass('subobj');
		$('.active input').removeAttr('name');

if(val == 'checkbox' ){
	  $('.active input').removeClass('subobj');
	 $('.active').addClass('input-elem-cb');
 $('.active ').append('<label class="input-elem-style subobj"><div class="input-elem-check"></div></label>');	
}
	
	if( val == 'radio'){
	 $('.active input').removeClass('subobj');
		$('.active input').attr('name','group1');
	 $('.active').addClass('input-elem-rd');
 $('.active ').append('<label class="input-elem-style subobj"><div class="input-elem-check"></div></label>');	
}
	
	
	
atualizartools();
});





$('#ctl-input-name input').change(function () {
var val = $(this).val();
 $('.active input').attr('name', val);
});




$('#input-checkdcolor').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  showButtons: false,
  allowEmpty: true,
  localStorageKey: "spectrum.homepage",

  move: function (color) {
    var ncolor = $('#input-checkdcolor').val();
    $('.active .input-elem-check').css('background', ncolor);




  },
  change: function (color) {
    $('#input-checkdcolor').val(color);


  }, hide: function (color) {
    $('#input-checkdcolor').val(color);
  }

});




//NOTE ab -----------------------------------------------




$("#ctl-test-ab .btn").click(function () {
  var val = $(this).attr('property-val');
	 $('.active').removeClass('test-ab-a'); 
	 $('.active').removeClass('test-ab-b'); 
  $('.active').addClass(val); 
 
});

$("#ctl-ab-active").click(function () {
	
  if( $('html.test-ab-a-show ').length){
	  $(this).removeClass('test-ab-a-show');
	 $('html').removeClass('test-ab-a-show'); 
	  
	   $(this).addClass('test-ab-b-show');
	   $('html').addClass('test-ab-b-show'); 
	  
  }
  else if( $('html.test-ab-b-show ').length){
	  
	    $(this).removeClass('test-ab-b-show');
	 $('html').removeClass('test-ab-b-show'); 
	
  }
	else{
		
		  $(this).addClass('test-ab-a-show');
	   $('html').addClass('test-ab-a-show'); 
	}
 
});






$("#ctl-zindex .btn").click(function () {
var val = $(this).attr('property-val');
	
	$('.active').removeClass('zindexback zindexback2 zindexfront zindexfront2');
	$('.active').addClass(val);
	
 
});




$("#ctl-flipv").click(function () {
  var val = $(this).attr('value');

  if (val == '1') {

    $('.active').addClass('flip-vertical');
	
  }
	else{ $('.active').removeClass('flip-vertical');}
	
  $("#ctl-rotate input").trigger('keyup');
 
});


$("#ctl-fliph").click(function () {
  var val = $(this).attr('value');

  if (val == '1') {

    $('.active').addClass('flip-horizontal');
	   
  }
	else{ $('.active').removeClass('flip-horizontal');}
	 $("#ctl-rotate input").trigger('keyup');

 
});















$("#ctl-countdown-date input").change(function () {
  var val = $(this).val();

$('.active').attr('todate', val);
	$('.active').removeAttr('countdowntime');
	$('.active').removeAttr('startcountdown');

 
});

$("#ctl-countdown-time input").change(function () {
  var val = $(this).val();

	

$('.active').attr('countdowntime', val);
	$('.active').removeAttr('todate');
	$('.active').removeAttr('startcountdown');
	
	

 
});

$("#ctl-finalcountdown .btn").click(function () {
  var val = $(this).attr('property-val');
$('.active').removeClass('finalcountdown-show finalcountdown-hidden');
$('.active').addClass(val);

 
});

$("#ctl-countdown-master").click(function () {
  var val = $(this).attr('value');
$('.pagee-countdown-master').removeClass('pagee-countdown-master');	

	if(val == 1){
	
		$('.active').addClass('pagee-countdown-master');		
		
	}
	else{$('.active').removeClass('pagee-countdown-master');	}

 
});

$("#ctl-countdown-redirect input").keyup(function () {
  var val = $(this).val();
console.log(val);

	if(val != ''){
	
		$('.active').attr('countdown-redirect', val);		
		
	}
	else{$('.active').removeAttr('countdown-redirect');	}

 
});



$("#ctl-rotate input").keyup(function () {
  var val = $(this).val();
var fv = 1;
	var fh = 1;
	if( $('.active.flip-vertical').length){ fv = '-1';}
	if( $('.active.flip-horizontal').length){fh = '-1';}

	if(val != '' || val != 0  ){
		
			var translate1 = '';
			if(  $('.active:not(.position-centered)').length){ translate1 = ''}
	if(  $('.active.position-centered.direcional-t-r').length){ translate1 = 'translateX(50%) translateY(-50%)'}
		if(  $('.active.position-centered.direcional-b-r').length){ translate1 = 'translateX(50%) translateY(50%)'}
		if(  $('.active.position-centered.direcional-c-r').length){ translate1 = 'translateX(50%) translateY(-50%)'}
		
		if(  $('.active.position-centered.direcional-t-l').length){ translate1 = 'translateX(-50%) translateY(-50%)'}
		if(  $('.active.position-centered.direcional-b-l').length){ translate1 = 'translateX(-50%) translateY(50%)'}
		if(  $('.active.position-centered.direcional-c-l').length){ translate1 = 'translateX(-50%) translateY(-50%)'}
		
		if(  $('.active.position-centered.direcional-t-c').length){ translate1 = 'translateY(-50%)'}
		if(  $('.active.position-centered.direcional-b-c').length){ translate1 = 'translateY(50%)'}
	
		$('.active').css('transform', ' '+translate1+' rotate('+val+'deg) scaleY('+fv+') scaleX('+fh+')');	
		$('.active').attr('css-rtt',val);
		
		
		

		
//		var rtt2 = val * -1;
//		
//		if( $('.active.flip-vertical').length || $('.active.flip-horizontal').length){ 
//		rtt2 = val ;
//		}
//		if( $('.active.flip-vertical.flip-horizontal').length ){ 
//		rtt2 = rtt2 = val * -1;
//		}
//		$('.resize-control').css('transform', 'rotate(0deg) scaleY('+fv+') scaleX('+fh+')');
	
	}

if(val == '' || val == 0  ){
	$('.active').css('transform', '');
	$('.active').removeAttr('css-rtt');}

 
});



$("#ctl-rotate-icon input").keyup(function () {
  var val = $(this).val();


	if(val != '' || val != 0  ){
	
		$('.active > svg').css('transform', 'rotate('+val+'deg)');	
		$('.active').attr('css-rtt-icon',val);


		
	}

else{
	$('.active > svg').css('transform', '');
	$('.active').removeAttr('css-rtt-icon');}

 
});

//NOTE CTL -----------------------------------------------



//======================================================
//atualizar tools
//==================================================

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}



















//======================================================
//NOTE atualizar tools
//==================================================




$("body").delegate('.active-select', 'mouseup', function (e) {

 setTimeout(function () {
    atualizartools();

  }, 50);


});






$('#edit-menu .btn').attr('value', '0');

function atualizartools() {




  
	var noatloop =  $('body:not(.no-at-loop)').length;

  var edite = $('.page-edite').length;
  if (edite && noatloop) {
	  
	$('body').addClass('no-at-loop');
	   setTimeout(function () {
   $('body').removeClass('no-at-loop');

  }, 200);  

//    $('.sticky-tools-on  ').removeClass('sticky-tools-on  ');





//    $('.availability-show-act').removeClass('availability-show-act');


    $('.force-off').removeClass('force-off');
    $(' .ctl-no-change').removeClass('ctl-no-change');
    $('#edit-menu .elem, #edit-menu .group-elem, .filters, .animation-only-blocks').addClass('off');
    $('#edit-menu  .btn').attr('value', '0');


    $('#page-name').text(projectname);
    $('*[page-name]').attr('page-name', projectname);
    $('#element-id,#element-id .elem ').removeClass('off');



    //button-tools,	img-tools, icon-tools

    if ($('.active').hasClass('header')) { $('#ctl-float').removeClass('off'); }



    if (itemSelect == 'body') {
      $('#background-tools, #background-tools .elem, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align,  #ctl-font-align-mobile').removeClass('off');

      $('#ctl-element-name').addClass('ctl-no-change');
      $('#element-id .elem:not(#ctl-element-name)').addClass('force-off');
      $('#body-select').attr('value', '1');

    }

    //      .ctl-no-change


    if (itemSelect == 'section') { $('#element-tools, #ctl-duplicate, #ctl-delete,#size-tools,#ctl-expand-section,#background-tools, #background-tools .elem, #ctl-font-family, #ctl-font-color, #ctl-font-align,#ctl-font-align-mobile, #ctl-margin-free, #ctl-padding, #ctl-float, #border-tools, #ctl-border-color, #ctl-border-width4, #ctl-magic-style, #ctl-font-size, #ctl-line-height').removeClass('off'); }

	 
	  
	  
    if ($('footer.active, header.active').length) { $('#size-tools,#ctl-expand-section, #ctl-magic-style').addClass('off'); $('#element-id .elem:not(#ctl-element-name)').addClass('force-off'); }


    if (itemSelect == 'center') { $('#background-tools,#size-tools,#ctl-size-width, #background-tools .elem, #margin-tools, #ctl-padding,#ctl-margin-free, #ctl-size-max-width').removeClass('off'); }


    if (itemSelect == 'grupo-blocos' || itemSelect == 'grupo-blocos50' || itemSelect == 'grupo-bloco0') { $('#element-tools, #ctl-duplicate , #ctl-vertical-align, #ctl-delete,#size-tools,#ctl-size-width, #background-tools, #ctl-bg-color,#ctl-bg-blur, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align,#ctl-font-align-mobile, #border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #margin-tools,#margin-tools > .elem, #ctl-block-flow-text, #ctl-bloco-mobile-double, #ctl-bloco-mobile, #ctl-font-size, #background-tools .elem, #ctl-border-radius, #ctl-content-position, #ctl-line-height').removeClass('off'); }

    if (itemSelect == 'grupo-blocos') { $('#ctl-horizontal-align, #ctl-reverse-order, #ctl-add-child, #ctl-block-child, #ctl-space-between, #ctl-block2-child-size, #ctl-bloco-content-hidden,   #ctl-elem-ratio').removeClass('off'); }

    if (itemSelect == 'grupo-bloco0') { $('#size-tools,#ctl-size-width, #ctl-bloco-content-hidden, #ctl-content-bottom, #ctl-elem-ratio').removeClass('off'); }
    if ($('.active.bloco50').length) { $('#ctl-block2-child-size').removeClass('off'); }
    if ($('.active.bloco50').length == false) { $('#ctl-block2-child-size').addClass('off'); }

    if ($('.active.bloco0').length) { $('#ctl-bloco-mobile').addClass('off'); }


    //if(itemSelect == 'grupo-blocos50'){$('#ctl-reverse-order').removeClass('off'); }        

    if (itemSelect == 'subbloco' || itemSelect == 'carouselli') { $('#element-tools, #ctl-styleToSiblings,  #background-tools,#background-tools .elem, #ctl-bg-color, #ctl-bg-blur,   #border-tools .elem,   #shadow-tools > .elem,  #ctl-border-radius, #ctl-margin-free').removeClass('off'); }

    if (itemSelect == 'subbloco-content') { $('#element-tools, #ctl-styleToSiblings,  #background-tools, #ctl-bg-color,#ctl-bg-color2, #ctl-bg-blur, #margin-tools, #ctl-padding, #ctl-font-family, #ctl-font-color,#ctl-font-align, #ctl-font-align-mobile, #ctl-line-height, #ctl-margin-free').removeClass('off'); }

  if (itemSelect == 'block-float') { $('#element-tools, #ctl-delete,#ctl-duplicate, #ctl-position-9, #ctl-position-centered, #ctl-size-width, #ctl-font-align, #ctl-font-align-mobile, #background-tools .elem, #ctl-zindex, #ctl-margin-free, #ctl-expand-section,  #ctl-border-radius, #ctl-rotate').removeClass('off'); }


    //    list-ctl

    var parentblock = $('.active').parent().hasClass('bloco33') || $('.active').parent().hasClass('bloco25') || $('.active').parent().hasClass('bloco15') || $('.active').parent().hasClass('bloco50');
    if (parentblock) { $('#ctl-duplicate, #ctl-delete').removeClass('off'); }



    if (itemSelect == 'p') {
      $('#element-tools,#ctl-duplicate, #ctl-delete, #background-tools, #ctl-bg-color,#ctl-bg-color2, #type-tools, #ctl-font-family, #ctl-font-size, #ctl-font-weight, #ctl-font-color, #ctl-font-align, #ctl-font-align-mobile,#ctl-font-bold, #ctl-font-italic, #ctl-font-underline,#ctl-lorem, #ctl-font-link,#ctl-font-strike,#ctl-font-removeFormat, #ctl-dynamic-text, #ctl-font-icon, #border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #margin-tools,#size-tools,#ctl-size-width ,  #ctl-border-radius, #ctl-line-height, #ctl-block-flow-text, #ctl-margin-free, #ctl-padding').removeClass('off');


      if ($('.active').parents('.button-cc').length) { $('#ctl-size-width').addClass('off') }
    }

    if (itemSelect == 'p' || itemSelect == 'title') { $('#ctl-font-subtext').removeClass('off'); }



    if (itemSelect == 'subtext') { $('#element-tools,#ctl-duplicate, #ctl-delete, #background-tools, #ctl-bg-color, #ctl-bg-color2, #type-tools, #ctl-font-family, #ctl-font-weight, #ctl-font-color, #ctl-font-bold, #ctl-font-italic, #ctl-font-underline, #ctl-font-strike,#ctl-font-removeFormat,  #border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #ctl-border-radius,  #size-tools, #margin-tools, #ctl-padding,#ctl-font-nobreak,#ctl-stroke-width,#ctl-font-bg-clip, #ctl-font-color-stroke ').removeClass('off'); }


    if (itemSelect == 'dropmenu') { $('#dropmenu-tools,#ctl-add-child, #dropmenu-tools .elem, #type-tools, #ctl-font-color,#element-tools, #ctl-delete, #ctl-font-family ').removeClass('off'); }

    if (itemSelect == 'menumobilebg') { $('#background-tools, #ctl-bg-color, #ctl-bg-blur, #border-tools, #border-tools .elem , #ctl-border-radius').removeClass('off'); }



    if (itemSelect == 'link') {
      $('#link-tools, #link-tools .elem,#element-tools, #ctl-delete, #background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align,#ctl-font-align-mobile,#ctl-font-bold, #ctl-font-italic, #ctl-font-underline,  #border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #ctl-border-radius').removeClass('off');

      if ($('.active').parents('[type=p]').length || $('.active').parents('[type=title]').length) {
        $('#ctl-font-nobreak ').removeClass('off');
      }
    }




    if (itemSelect == 'title') {
      $('#element-tools,#ctl-duplicate, #ctl-delete, #background-tools, #background-tools .elem, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color,#ctl-font-size, #ctl-font-color-stroke, #ctl-font-align,#ctl-font-align-mobile, #ctl-font-weight, #ctl-font-title,#ctl-font-bg-clip, #ctl-font-icon, #border-tools, #border-tools .elem, #shadow-tools , #shadow-tools > .elem,  #margin-tools, #ctl-margin-free, #size-tools,#ctl-size-width,#ctl-dynamic-text, #ctl-stroke-width, #ctl-border-radius , #ctl-line-height, #ctl-block-flow-text').removeClass('off');
      if ($('.active').parents('.button-cc').length) { $('#ctl-size-width').addClass('off') }
    }
    if (itemSelect == 'title') { $('#ctl-bg-mask').addClass('off'); }


    if (itemSelect == 'list' || itemSelect == 'listli') { $('#element-tools,#ctl-duplicate,#ctl-vertical-align, #ctl-delete,#background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align, #ctl-font-align-mobile,#border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #ctl-border-radius,#ctl-font-size ').removeClass('off'); }

    if (itemSelect == 'list') { $(' #list-tools, #ctl-add-child, #list-tools .elem, #margin-tools, #margin-tools .elem, #size-tools,#ctl-size-width,#ctl-block-flow-text, #ctl-space-between, #ctl-border-radius').removeClass('off'); }

    if (itemSelect == 'listli') { $('#ctl-styleToSiblings, #margin-tools, #ctl-padding, #size-tools, #ctl-border-radius, #ctl-margin-free').removeClass('off'); }

    if (itemSelect == 'linumber') { $('#element-tools,#ctl-styleToSiblings, #background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align, #border-tools, #border-tools .elem, #shadow-tools,  #shadow-tools > .elem, #size-tools, #ctl-border-radius').removeClass('off'); }




    if (itemSelect == 'img') {
      $('#element-tools,#opacity-tools, #filters-tools, #filters-tools * ,#ctl-opacity-gradient , #ctl-duplicate, #ctl-delete,#background-tools ,#background-tools .elem, #size-tools,#ctl-size-width,#ctl-block-flow-text, #img-tools, #img-tools .elem, #border-tools, #border-tools .elem,#margin-tools, #margin-tools #ctl-margin-free,  #shadow-tools,  #shadow-tools > .elem , #ctl-img-width, #link-tools, #link-tools .elem, #ctl-dynamic-face, #ctl-img-blend , #ctl-bg-blend, #ctl-opacity,#ctl-border-radius ,#animation-tools, #ctl-non-hover-animation, #ctl-all-hover-animation, #ctl-border-radiusjs, #ctl-fliph, #ctl-flipv, #ctl-img-zoom').removeClass('off');
      if (itemSelect == 'img') { $('#ctl-bg-mask').addClass('off') }
      var tqqd = $('.active').parents().is('header');
      if (tqqd) { $('#size-tools').addClass('off') }
    }

    if (itemSelect == 'modal-mask') { $('#background-tools, #ctl-bg-color,#ctl-bg-color2,#ctl-bg-blur').removeClass('off'); }
    if (itemSelect == 'modal') { $('#element-tools, #ctl-styleToSiblings, #ctl-duplicate, #ctl-delete, #background-tools,#background-tools .elem, #ctl-bg-color, #ctl-bg-blur, #type-tools, #ctl-font-family, #ctl-font-color,#ctl-font-align, #ctl-font-align-mobile,#border-tools, #border-tools .elem, #ctl-padding, #size-tools,#ctl-border-radius,#size-tools,#ctl-size-width, #ctl-modal-position, #modal-tools, #modal-tools .elem, #ctl-position-9, #ctl-size-max-width, #ctl-font-size').removeClass('off'); }






    if (itemSelect == 'video') { $('#size-tools,#ctl-size-width,#ctl-block-flow-text,  #element-tools,#ctl-duplicate, #ctl-delete,#video-tools,#video-tools *,  #border-tools, #ctl-border-color,#margin-tools, #margin-tools #ctl-margin-free, #ctl-border-width4, #ctl-border-radius, #shadow-tools,  #shadow-tools > .elem').removeClass('off'); }


    if (itemSelect == 'code') {
      $('#element-tools,#ctl-duplicate, #size-tools,#ctl-size-width, #ctl-delete, #border-tools, #border-tools .elem,#ctl-border-radius,#margin-tools, #margin-tools #ctl-margin-free, #shadow-tools,  #shadow-tools > .elem, #code-tools, #code-tools *, #ctl-block-flow-text').removeClass('off');
    }

    if (itemSelect == 'codefloat') { $('#element-tools, #ctl-delete, #ctl-float-position, #size-tools,#ctl-size-width, #code-tools, #code-tools *').removeClass('off'); }


   
	     if (itemSelect != 'icon') { $('.list-menu-icon').html('');}
    if (itemSelect == 'icon') {
      $('#element-tools, #ctl-duplicate, #ctl-delete,#background-tools, #ctl-bg-color, #ctl-bg-color2, #icon-tools,#size-tools,#ctl-size-width,#ctl-block-flow-text, #icon-tools .elem, #ctl-icon-list, #border-tools, #border-tools .elem, #margin-tools, #ctl-margin-free, #ctl-padding, #ctl-border-radius,#animation-tools, #ctl-non-hover-animation, #ctl-all-hover-animation, #ctl-fliph, #ctl-flipv, #ctl-rotate, #ctl-rotate-icon').removeClass('off');
		
		if(  $('.list-menu-icon').html() == ''){ $('.list-menu-icon').load('iconlist.html');}
     
    }

    if ($('.icone.active').parents('.page-drop-menu ').length) { $('#ctl-size-width').addClass('off'); }

    

	   if (itemSelect != 'ilustration') {$('.list-ilustration').html('');}
    if (itemSelect == 'ilustration') {
      $('#element-tools, #ctl-duplicate, #ctl-delete,#background-tools, #ctl-bg-color, #ctl-bg-color2, #size-tools,#ctl-size-width,#ctl-block-flow-text,  #border-tools, #border-tools .elem, #margin-tools, #ctl-margin-free, #ctl-padding, #ctl-border-radius,#animation-tools, #ctl-non-hover-animation, #ctl-all-hover-animation, #ilustration-tools, #ilustratio-tools .elem, #ctl-flipv, #ctl-fliph').removeClass('off');

	if(  $('.list-ilustration').html() == ''){ $('.list-ilustration').load('ilustration.html');}
      
    }

    if ($('.ilustration.active [svg-color=c1]').length) { $('#ctl-ilustration-color1').removeClass('off'); }
    if ($('.ilustration.active [svg-color=c2]').length) { $('#ctl-ilustration-color2').removeClass('off'); }
    if ($('.ilustration.active [svg-color=c3]').length) { $('#ctl-ilustration-color3').removeClass('off'); }





    if (itemSelect == 'button') { $('#element-tools, #ctl-duplicate,#ctl-horizontal-align, #ctl-delete,#background-tools, #ctl-bg-color,#ctl-bg-color2, #type-tools, #ctl-font-family, #ctl-font-color,#ctl-font-weight, #ctl-font-align,#ctl-font-align-mobile,#border-tools, #border-tools .elem, #link-tools, #link-tools .elem, #animation-tools,  #ctl-button-animation,#ctl-non-hover-animation, #shadow-tools, #shadow-tools .elem, #margin-tools, #ctl-margin-free, #ctl-padding, #ctl-font-icon, #size-tools,#ctl-size-width,#ctl-block-flow-text, #ctl-font-size, #ctl-border-radius').removeClass('off'); }

    if (itemSelect == 'button-center') { $('#element-tools,  #size-tools,#ctl-size-width').removeClass('off'); }


    if (itemSelect == 'divisor') { $('#element-tools, #ctl-duplicate, #ctl-delete, #size-tools,#ctl-size-width, #ctl-size-height,#background-tools > .elem, #ctl-bg-color,  #ctl-margin-free, #ctl-block-flow-text, #ctl-maintain-aspect-ratio, #ctl-border-radius').removeClass('off'); }



    if (itemSelect == 'sprice' || itemSelect == 'price') { $('#type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-strike, #ctl-font-underline').removeClass('off'); }

    if (itemSelect == 'price') { $('#element-tools, #ctl-duplicate, #ctl-delete,#background-tools, #ctl-bg-color,  #ctl-margin-free').removeClass('off'); }


    if (itemSelect == 'contactfloat') { $('#element-tools, #ctl-delete,#ctl-float-position,#background-tools,  #ctl-bg-color ,#ctl-bg-color2,#ctl-bg-mask, #background-tools #ctl-bg-image-folder, #contact-float-tools, #contact-float-tools > *, #border-tools, #border-tools .elem').removeClass('off'); }

    if (itemSelect == 'acordion') { $('#element-tools, #ctl-delete,#background-tools,#ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #border-tools, #margin-tools, #margin-tools #ctl-margin-free, #border-tools .elem, #size-tools,#ctl-size-width, #ctl-border-radius, #ctl-space-between, #ctl-block-flow-text').removeClass('off'); }

    if (itemSelect == 'acordionbody') { $('#element-tools, #ctl-styleToSiblings, #background-tools, #ctl-bg-color,  #border-tools,  #border-tools .elem, #type-tools, #ctl-font-family, #ctl-font-color, #ctl-font-align').removeClass('off'); }

    if (itemSelect == 'acordionitem') { $('#element-tools, #ctl-styleToSiblings, #ctl-duplicate, #ctl-delete, #background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #border-tools, #border-tools .elem').removeClass('off'); }


    if (itemSelect == 'carousel') { $('#carousel-tools,#carousel-tools .elem,#element-tools, #ctl-styleToSiblings, #ctl-duplicate, #ctl-delete, #background-tools,#background-tools .elem, #type-tools, #ctl-font-family, #ctl-font-color, #border-tools, #border-tools .elem, #margin-tools,  #ctl-margin-free, #ctl-space-between, #size-tools, #ctl-size-width, #ctl-elem-ratio, #ctl-border-radius,  #ctl-font-align,#ctl-font-align-mobile, #ctl-font-size, #ctl-add-child,#ctl-content-position').removeClass('off'); }


    if (itemSelect == 'carousel-card') { $('#element-tools, #ctl-styleToSiblings, #ctl-duplicate, #ctl-delete, #background-tools,#background-tools .elem, #type-tools, #ctl-font-family, #ctl-font-color, #border-tools, #border-tools .elem, #size-tools, #ctl-border-radius,  #animation-tools, #ctl-non-hover-animation, #ctl-all-hover-animation, .animation-only-blocks ').removeClass('off'); }


    if (itemSelect == 'carousel-card-content') { $(' #element-tools, #ctl-styleToSiblings, #background-tools,#background-tools #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg  ,#animation-tools,#ctl-father-hover-animation,  #ctl-padding').removeClass('off'); }

	   if (itemSelect == 'progbar') { $(' #element-tools,#ctl-delete, #progbar-tools > .elem, #background-tools #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg , #ctl-margin-free, #ctl-padding, #ctl-size-width, #border-tools .elem, #ctl-border-radius, #ctl-font-family,#ctl-font-weight, #ctl-font-size, #ctl-font-color, #ctl-block-flow-text').removeClass('off'); }
	  
	   if (itemSelect == 'progbarinside') { $(' #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg ').removeClass('off'); }


    if (itemSelect == 'dynamic-text') {
      $('#element-tools,#ctl-delete, #background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-family #ctl-dynamictext, #ctl-font-color, #border-tools, #border-tools .elem, #ctl-font-weight, #ctl-padding, #dynamic-text-tools,#ctl-border-radius,#size-tools ').removeClass('off');

      if ($('.active[dynamic-text=randomName]').length) { $('#ctl-dynamic-name-sex, #ctl-last-name,#ctl-dynamic-text-refresh').removeClass('off'); }

      if ($('.active[dynamic-text=dynamicLocation]').length) { $('#ctl-dynamic-text-refresh').removeClass('off'); }

      if ($('.active[dynamic-text=dynamicDate]').length) { $('#ctl-dynamic-text-refresh').removeClass('off'); }


      if ($('.active[dynamic-text=dynamicHour]').length) { $('#ctl-dynamic-hours, #ctl-dynamic-minutes').removeClass('off'); }

      if ($('.active[dynamic-text=dynamicNumber]').length) { $('#ctl-dynamic-number-start, #ctl-dynamic-number-min, #ctl-dynamic-number-max, #ctl-dynamic-number-refresh-max, #ctl-dynamic-number-d, #ctl-dynamic-text-refresh, #ctl-dynamic-text-cookie').removeClass('off'); }


      if ($('.active[dynamic-text=dynamicWords]').length) { $('#ctl-dynamic-words,#ctl-dynamic-words-random,  #ctl-dynamic-text-refresh').removeClass('off'); }

    }




    if (itemSelect == 'mockup3d') { $('#element-tools,#ctl-delete, #ctl-elem-ratio, #ctl-bg-color, #ctl-bg-color2, #ctl-size-width,  #mockup3d-tools .elem, #border-tools, #ctl-border-color, #ctl-border-width4, #shadow-tools, #shadow-tools .elem, #ctl-border-radius, #ctl-duplicate, #ctl-block-flow-text, #ctl-margin-free').removeClass('off');
	$('.active h1, .active p').attr('contenteditable', 'true');					  
								  
								  }




    if (itemSelect == 'countdown') { $('#element-tools,#ctl-delete,#ctl-duplicate,  #ctl-countdown-time, #ctl-countdown-date, #ctl-countdown-dateortime, #ctl-bg-color, #border-tools .elem, #ctl-font-family, #ctl-font-color, #ctl-font-size, #ctl-size-width, #ctl-block-flow-text, #ctl-margin-free, #countdown-tools .elem, #ctl-border-radius, #ctl-font-weight, #ctl-stroke-width, #ctl-font-color-stroke ').removeClass('off'); }

    if (itemSelect == 'countdown0item') { $('#element-tools,#ctl-delete, #ctl-styleToSiblings, #background-tools, #ctl-bg-color, #type-tools, #ctl-font-family, #ctl-font-color, #border-tools, #border-tools .elem,  #ctl-border-radius,  #ctl-font-weight, #ctl-stroke-width, #ctl-font-color-stroke').removeClass('off'); }

    var acordionicon = $('.active').hasClass('acordion-icon-open');
    if (acordionicon) {
      $('#element-tools, #ctl-styleToSiblings').removeClass('off');
      $('#icon-tools #ctl-icon-list, #ctl-duplicate, #ctl-delete, #border-tools, #margin-tools').addClass('off');

    }
	  if (itemSelect == 'countdown-subtitle') { $('#ctl-font-family, #ctl-font-weight, #ctl-font-color').removeClass('off'); }
	  
	  


    if ($('#ctl-bg-color2:not(.off)').length) { $('#ctl-bg-gradient-deg').removeClass('off'); }

    if ($('#ctl-font-size:not(.off)').length) { $('#ctl-font-size-mobile').removeClass('off'); }

    if ($('#ctl-bg-image-folder:not(.off)').length) { $('#filters-tools, #ctl-bg-blend').removeClass('off'); }


    if ($('#shadow-tools:not(.off)').length) { $('#ctl-bg-mask').addClass('off') }







    if (itemSelect == 'input') { $(' #element-tools, #ctl-delete,#ctl-duplicate, #ctl-styleToSiblings, #background-tools,#background-tools #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg  ,#animation-tools,#ctl-father-hover-animation,  #ctl-border-radius, #border-tools, #border-tools .elem, #ctl-padding, #ctl-font-color, #ctl-block-flow-text, #ctl-font-size,#ctl-font-size-mobile, #ctl-input-type, #ctl-input-name, #ctl-margin-free, #ctl-line-height').removeClass('off'); 
			
		 if ($('.active .input-elem-style').length == false) { $(' #size-tools, #ctl-size-width').removeClass('off'); }						
		 if ($('.active .input-elem-style').length) { $('#ctl-input-checkedcolor').removeClass('off'); }					   
							   
							   }

    if (itemSelect == 'form') { $('#ctl-converttopagee, #ctl-duplicate, #ctl-delete,  #ctl-font-align, #ctl-font-align-mobile,  #background-tools #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg  , #size-tools, #ctl-size-width, #ctl-border-radius, #border-tools, #border-tools .elem, #ctl-codearea, #ctl-add-child, #ctl-block-flow-text, #ctl-margin-free').removeClass('off'); }

//    if (itemSelect == 'inputbox') { $(' #background-tools #ctl-bg-color, #background-tools #ctl-bg-color2,#ctl-bg-gradient-deg  , #size-tools, #ctl-size-width, #ctl-border-radius, #border-tools, #border-tools .elem, #ctl-block-flow-text').removeClass('off'); }


 if (itemSelect == 'iframe') {
      $('#element-tools,#ctl-duplicate, #ctl-delete,#ctl-size-width,#ctl-size-height, #ctl-maintain-aspect-ratio, #ctl-block-flow-text, #border-tools, #border-tools .elem,  #ctl-padding, #iframe-tools .elem, #ctl-border-radius, #ctl-block-flow-text, #ctl-margin-free').removeClass('off');


    }
	  
	  if (itemSelect == 'block-tab') { $('#ctl-size-width, #ctl-margin-free').removeClass('off'); }	
 if (itemSelect == 'block-tab-head') { $('#ctl-size-width,#ctl-bg-color,#ctl-bg-color2,#ctl-bg-gradient-deg,#ctl-border-radius,  #ctl-margin-free,  #ctl-block-flow-text,#border-tools .elem,  #ctl-font-family, #ctl-font-color, #ctl-font-size, #ctl-font-size-mobile,  #ctl-line-height').removeClass('off'); }	
	   if (itemSelect == 'block-tab-head-btn') { $('#ctl-bg-color,#ctl-bg-color2,#ctl-bg-gradient-deg').removeClass('off'); }	
	  
	  
	  
	  
	  
	  
	  

 if ($('#ctl-size-width:not(.off)').length) { $('#ctl-size-max-width').removeClass('off') }

    //    ===== show group-elem tools =====  


    $(".page-tools .group-elem:has(.elem:not(.off))").each(function () {
      $(this).removeClass('off')
    });
//    $("  #ctl-margin-4:has(.btn:not(.off))").each(function () {
//      $(this).removeClass('off')
//    });




    //NOTE M 3d
	  
	  

    if (itemSelect == 'mockup3d') {
		
		var obj3dcolor = $('.active .obj3d').css('background-color'); 
$("#ctl-3d-color input").spectrum("set", obj3dcolor);
		
		
		
		
		
      var scale3d = $('.active').attr('data-3dscale');
		 var persp3d = $('.active .mockup-3d-center').css('perspective');
		
      $('#ctl-3d-scale input').val(scale3d);
   $('#ctl-3d-perspective input').val(parseInt(persp3d));

      var transformobj = $('.active .obj3d').attr('style');

      console.log(transformobj);

      var ry = transformobj.split('rotateY(')[1].split('deg)')[0];
      var rx = transformobj.split('rotateX(')[1].split('deg)')[0];
      var ro = transformobj.split('rotate(')[1].split('deg)')[0];
      var ty = transformobj.split('translateY(')[1].split('%)')[0];
      var tx = transformobj.split('translateX(')[1].split('%)')[0];

      $('#ctl-3d-rotate input').val(ro);
      $('#ctl-3d-x input').val(rx);
      $('#ctl-3d-y input').val(ry);
      $('#ctl-3d-translatex input').val(tx);
      $('#ctl-3d-translatey input').val(ty);


      console.log(rx);
		
		
		
		


    }


    if ((itemSelect == 'button' || itemSelect == 'link') && $(".pmodal-content").length) {

      $('#ctl-show-modal').removeClass('off');
      $('#ctl-show-modal .select-list .btn').remove();
      $('#ctl-show-modal .select-list').append('<span class=" btn" property-val="none">none</span>');

      $(".pmodal-content").each(function () {

        var idmodal = $(this).attr('id');
        var datacodeid = $(this).attr('data-code-id');

        $('#ctl-show-modal .select-list').append('<span class=" btn" property-val="' + datacodeid + '">' + idmodal + '</span>');
      });



      setTimeout(function () {
        var thimodalshow = $('.active').attr('data-btn-modal-show');
        console.log(thimodalshow);
        if (thimodalshow != undefined) { $('#ctl-show-modal  [property-val=' + thimodalshow + ']').attr('value', '1') }
      }, 1000);



    }





    //    ===== father hover =====  

    if ($(':is([type=subbloco], [type=carousel-card]) .active').length) { $('#animation-tools, #ctl-father-hover-animation').removeClass('off') }








    var notdelx = $('.active').hasClass('not-del');
    if (notdelx) { $('#ctl-delete').addClass('off'); }
    //element--------------------------------- 

    var elementname = $('.active').attr('id');

    $('#ctl-element-name input').val(elementname);

    var mobileoff = $('.active').hasClass('mobile-off');
    if (mobileoff) { $('#ctl-mobile-off').attr('value', '1') }

    var deskoff = $('.active').hasClass('desk-off');
    if (deskoff) { $('#ctl-desk-off').attr('value', '1') }



    //element--------------------------------- 




    $('#ctl-contact-float-number').val($('.active').attr('alt'));
    var textf = $('.active').attr('href');

    if (itemSelect == 'contactfloat') {

      if (textf == '') {

        var splitTextfloat = 'text=';
        var resulttextfloat = textf.split(splitTextfloat)[1].replace(/\+/g, "-- ");
        $('#ctl-contact-float-text').val(resulttextfloat);
      }

    }











    //element--------------------------------- 
    var reverse = $('.active').hasClass('blocos-reverse');
    if (reverse) { $('#ctl-reverse-order').attr('value', '1') }

    var verticalAlign = $('.active').hasClass('vertical-align');
    if (verticalAlign) { $('#ctl-vertical-align').attr('value', '1') }

    var horizontalAlign = $('.active').hasClass('horizontal-align');
    if (horizontalAlign) { $('#ctl-horizontal-align').attr('value', '1') }


    var float = $('.active').hasClass('float');
    if (float) { $('#ctl-float').attr('value', '1') }


    //element--------------------------------- 
    var opelem = $('.active[open-delay]').length;
    if (opelem) { $('#ctl-open-delay input').val($('.active').attr('open-delay')) }
    if (opelem == false) { $('#ctl-open-delay input').val('00:00:00') }

    var hiddendelay = $('.active[hidden-delay]').length;
    if (hiddendelay) { $('#ctl-hidden-delay input').val($('.active').attr('hidden-delay')) }
    if (hiddendelay == false) { $('#ctl-hidden-delay input').val('00:00:00') }







    var lockelm = $('.active').hasClass('lock-elem');


    if (lockelm) {

      $('#ctl-lock-elem').attr('value', '1');
      $('#edit-menu .group-elem').addClass('off');

      $('p.active, [type=title]').blur();
      $('p.active, [type=title]').attr('contenteditable', 'false');
      window.getSelection().removeAllRanges();

    }





//NOTE iframe autalizar
	  
	  
	    if ($('#ctl-iframe-url.off').length == false) {
			var ilink = $('.active iframe').attr('src');
   $('#ctl-iframe-url input').val(ilink);
    }
    //element--------------------------------- 

    if ($('.active.bloco50').length) { $('#ctl-block-child .btn[property-val=bloco50]').attr('value', 1) }
    if ($('.active.bloco33').length) { $('#ctl-block-child .btn[property-val=bloco33]').attr('value', 1) }
    if ($('.active.bloco25').length) { $('#ctl-block-child .btn[property-val=bloco25]').attr('value', 1) }
    if ($('.active.bloco15').length) { $('#ctl-block-child .btn[property-val=bloco15]').attr('value', 1) }
    if ($('.active.bloco50-2-1').length) { $('#ctl-block2-child-size .btn[property-val=bloco50-2-1]').attr('value', 1) }
    if ($('.active.bloco50-1-2').length) { $('#ctl-block2-child-size .btn[property-val=bloco50-1-2]').attr('value', 1) }

    if ($('.active.mobile-text-left').length) { $('#ctl-font-align-mobile .btn[property-val=mobile-text-left').attr('value', 1) }
    if ($('.active.mobile-text-right').length) { $('#ctl-font-align-mobile .btn[property-val=mobile-text-right').attr('value', 1) }
    if ($('.active.mobile-text-center').length) { $('#ctl-font-align-mobile .btn[property-val=mobile-text-center').attr('value', 1) }


    if ($('#ctl-bloco-mobile.off').length == false) {
      if ($('.active.bloco-mobile-solo').length) { $('#ctl-bloco-mobile .btn[property-val=bloco-mobile-solo]').attr('value', '1') }
      if ($('.active.bloco-mobile-double').length) { $('#ctl-bloco-mobile .btn[property-val=bloco-mobile-double]').attr('value', '1') }
      if ($('.active.bloco-mobile-mantain').length) { $('#ctl-bloco-mobile .btn[property-val=bloco-mobile-mantain]').attr('value', '1') }
    }

    if ($('.active.bloco-content-hidden').length) { $('#ctl-bloco-content-hidden ').attr('value', 1) }


    //size---------------------------------

	  
	 
	  
	
	  
    if ( $('#ctl-expand-section:not(off)').length) {


      if ($('.active').hasClass('expand-section')) { $('#ctl-expand-section').attr('value', 1) }

    }





    if ($('#ctl-content-position:not(.off)').length) {

      if ($('.active.content-v-bottom').length) {
        $('[property-val=content-v-bottom]').attr('value', '1');
      }

      if ($('.active.content-v-center').length) {
        $('[property-val=content-v-center]').attr('value', '1');
      }

    }


    var imgwdtest = $('[wd]').hasClass('active');
    var mht = $('[mht]').hasClass('active');


    if (imgwdtest) {
      var imgww = parseInt($('.active').attr('wd'));
      $('#ctl-size-width input').val(imgww);
    }
    if (imgwdtest == false) {
      var wii = $('.active').css('width');
      console.log('test' + wii);
      $('#ctl-size-width input').val('600');


    }
	  
	  if($('#ctl-size-max-width:not(.off)').length){
		  var mw1 = $('.active').css('max-width').split('%')[0];
		   $('#ctl-size-max-width input').val(mw1);
	  }


    if (mht) {
      var imghh = parseInt($('.active').attr('mht'));
      $('#ctl-size-height input').val(imghh);
    }
    if (mht == false) {

      $('#ctl-size-height input').val('');
    }

    var flowtext = $('.active').hasClass('flow-text');

    if (flowtext) { $('#ctl-block-flow-text').attr('value', '1') }
    if (flowtext == false) { $('#ctl-block-flow-text').attr('value', '0') }



    var ftopleft = $('.active').hasClass('fixed-top-left');
    var ftopright = $('.active').hasClass('fixed-top-right');
    var fbottomright = $('.active').hasClass('fixed-bottom-right');
    var fbottomleft = $('.active').hasClass('fixed-bottom-left');

    if (ftopleft) { $('#ctl-float-position .btn[property-val=fixed-top-left]').attr('value', '1') }
    if (ftopright) { $('#ctl-float-position .btn[property-val=fixed-top-right]').attr('value', '1') }
    if (fbottomright) { $('#ctl-float-position .btn[property-val=fixed-bottom-right]').attr('value', '1') }
    if (fbottomleft) { $('#ctl-float-position .btn[property-val=fixed-bottom-left]').attr('value', '1') }



	
      if ($('.active.position-centered').length) { $('#ctl-position-centered').attr('value', '1') }

   
	  
    if ($('#ctl-position-9').length) {


      if ($('.active.direcional-t-l').length) { $('#ctl-position-9 .btn[property-val=direcional-t-l]').attr('value', '1') }
      if ($('.active.direcional-t-c').length) { $('#ctl-position-9 .btn[property-val=direcional-t-c]').attr('value', '1') }
      if ($('.active.direcional-t-r').length) { $('#ctl-position-9 .btn[property-val=direcional-t-r]').attr('value', '1') }

      if ($('.active.direcional-c-l').length) { $('#ctl-position-9 .btn[property-val=direcional-c-l]').attr('value', '1') }
      if ($('.active.direcional-c-c').length) { $('#ctl-position-9 .btn[property-val=direcional-c-c]').attr('value', '1') }
      if ($('.active.direcional-c-r').length) { $('#ctl-position-9 .btn[property-val=direcional-c-r]').attr('value', '1') }

      if ($('.active.direcional-b-l').length) { $('#ctl-position-9 .btn[property-val=direcional-b-l]').attr('value', '1') }
      if ($('.active.direcional-b-c').length) { $('#ctl-position-9 .btn[property-val=direcional-b-c]').attr('value', '1') }
      if ($('.active.direcional-b-r').length) { $('#ctl-position-9 .btn[property-val=direcional-b-r]').attr('value', '1') }


    }


    if ($('#ctl-maintain-aspect-ratio:not(.off)').length) {
      if ($('.active.maintain-aspect-ratio').length) { $('#ctl-maintain-aspect-ratio').attr('value', '1') }

    }





    if ($('#ctl-elem-ratio:not(.off)').length) {
      if ($('.active.elem-h1').length) { $('#ctl-elem-ratio .btn[property-val=elem-h1').attr('value', '1') }
      if ($('.active.elem-h2').length) { $('#ctl-elem-ratio .btn[property-val=elem-h2]').attr('value', '1') }
      if ($('.active.elem-square').length) { $('#ctl-elem-ratio .btn[property-val=elem-square]').attr('value', '1') }
      if ($('.active.elem-v1').length) { $('#ctl-elem-ratio .btn[property-val=elem-v1]').attr('value', '1') }
      if ($('.active.elem-v2').length) { $('#ctl-elem-ratio .btn[property-val=elem-v2]').attr('value', '1') }

    }



    //      ctl-maintain-aspect-ratio

    //imagem---------------------------------
    if (itemSelect == 'img') {

      $('#ctl-img-ratio .btn').attr('value', '0');

      if ($('.img.active').hasClass('crop-h1')) { $('#ctl-img-ratio .btn[property-val=crop-h1]').attr('value', '1'); }
      if ($('.img.active').hasClass('crop-h2')) { $('#ctl-img-ratio .btn[property-val=crop-h2]').attr('value', '1'); }
      if ($('.img.active').hasClass('crop-square')) { $('#ctl-img-ratio .btn[property-val=crop-square]').attr('value', '1'); }
      if ($('.img.active').hasClass('crop-v1')) { $(' #ctl-img-ratio .btn[property-val=crop-v1]').attr('value', '1'); }
      if ($('.img.active').hasClass('crop-v2')) { $('#ctl-img-ratio .btn[property-val=crop-v2]').attr('value', '1'); }

       if ($('.active.img-zoom').length) { $('#ctl-img-zoom').attr('value', '1'); }



      var objPos = $('.active img').css('objectPosition').split(" ");
      //now contains an array like ["0%", "50px"]


      var wdimg = (($('.elem-position-drag').width()) * (parseInt(objPos[0]) / 100)) - (($('.elem-position-drag-square').width()) * (parseInt(objPos[0]) / 100));
      var hdimg = (($('.elem-position-drag').height()) * (parseInt(objPos[1]) / 100)) - (($('.elem-position-drag-square').height()) * (parseInt(objPos[1]) / 100));

      $('.elem-position-drag-square').css('left', wdimg + 'px');
      $('.elem-position-drag-square').css('top', hdimg + 'px');





      var gradente1 = $('.active > .subobj').css('-webkit-mask-image').substring(
        $('.active > .subobj').css('-webkit-mask-image').indexOf(")") + 1,
        $('.active > .subobj').css('-webkit-mask-image').lastIndexOf("%,")
      );
      $('#ctl-opacity-gradient input').val(100 - gradente1);
      if (gradente1 == 0) { $('#ctl-opacity-gradient input').val(0); }





      if ($('.active.dynamic-face').length) { $('#ctl-dynamic-face').attr('value', '1'); }
    }


    //opacity-----

    if ($('#ctl-opacity:not(.off)').length) {

      var op = $('.active > .subobj').css('opacity');
      $('#ctl-opacity input').val(op * 100);
    }


    //filter---------------------------------  

    if (itemSelect == 'img') {

      var filters = $('.active img').css('filter');
      var arr = filters.split(" ");



      var gs = arr[0].substring(arr[0].indexOf('(') + 1, arr[0].indexOf(")")) * 100;
      var sepia = arr[1].substring(arr[1].indexOf('(') + 1, arr[1].indexOf(")")) * 100;
      var blur = arr[2].substring(arr[2].indexOf('(') + 1, arr[2].indexOf("px)"));
      var contrast = arr[3].substring(arr[3].indexOf('(') + 1, arr[3].indexOf(")")) * 100;
      var brightness = arr[4].substring(arr[4].indexOf('(') + 1, arr[4].indexOf(")")) * 100;
      var invert = arr[5].substring(arr[5].indexOf('(') + 1, arr[5].indexOf(")")) * 100;
      var saturate = arr[6].substring(arr[6].indexOf('(') + 1, arr[6].indexOf(")")) * 100;
      var huerotate = arr[7].substring(arr[7].indexOf('(') + 1, arr[7].indexOf("deg)"));



      $('#filter-gray-scale').val(gs);
      $('#filter-gray-scale').siblings('.handle').attr('data-value', gs);

      $('#filter-sepia').val(sepia);
      $('#filter-sepia').siblings('.handle').attr('data-value', sepia);

      $('#filter-blur').val(blur);
      $('#filter-blur').siblings('.handle').attr('data-value', blur);

      $('#filter-contrast').val(contrast);
      $('#filter-contrast').siblings('.handle').attr('data-value', contrast);

      $('#filter-brightness').val(brightness);
      $('#filter-brightness').siblings('.handle').attr('data-value', brightness);

      $('#filter-invert').val(invert);
      $('#filter-invert').siblings('.handle').attr('data-value', invert);

      $('#filter-saturate').val(saturate);
      $('#filter-saturate').siblings('.handle').attr('data-value', saturate);

      $('#filter-hue-rotate').val(huerotate);
      $('#filter-hue-rotate').siblings('.handle').attr('data-value', huerotate);


      $('.filters input ').trigger('keyup');
      //     window.dispatchEvent(new Event('resize'));    

    }




    //background-tools-------------------	


    if ($('#ctl-bg-position.off').length == false) {
      var backgroundPos = $('.active').css('backgroundPosition').split(" ");
      //now contains an array like ["0%", "50px"]


      var wd = (($('.elem-position-drag-bg').width()) * (parseInt(backgroundPos[0]) / 100)) - (($('.elem-position-drag-square-bg').width()) * (parseInt(backgroundPos[0]) / 100));
      var hd = (($('.elem-position-drag-bg').height()) * (parseInt(backgroundPos[1]) / 100)) - (($('.elem-position-drag-square-bg').height()) * (parseInt(backgroundPos[1]) / 100));

      $('.elem-position-drag-square-bg').css('left', wd + 'px');
      $('.elem-position-drag-square-bg').css('top', hd + 'px');
    }


    $('.btn[property-val = "' + $('.active').css('background-position') + '"]').attr('value', '1');
    var bgf = $('.active').css('background-attachment');
    console.log(bgf);
    if ($('.active').css('background-attachment') == 'fixed, local' || $('.active').css('background-attachment') == 'fixed') { $('#ctl-bg-fixed').attr('value', '1') }


    if ($('.active').css('background-size') == 'cover') { $('#ctl-bg-cover').attr('value', '1') }


    if ($('#ctl-bg-repeat.off').length == false) {
      $('#ctl-bg-repeat .btn').attr('value', '0');
      var bgrepeat = $('.active').css('background-repeat').split(',')[0];
      $('#ctl-bg-repeat .btn[property-val=' + bgrepeat + ']').attr('value', '1');

    }
    if ($('#ctl-bg-size.off').length == false) {
      var bgsize = $('.active').css('background-size').split(',')[0];
      $('#ctl-bg-size .btn[property-val="' + bgsize + '"]').attr('value', 1);
      console.log(bgsize);

    }



    try {
      $('#ctl-bg-blur input').val(0);
      var bgblur = $('.active').css('backdrop-filter').match(/\d+/)[0];
      $('#ctl-bg-blur input').val(bgblur);
    } catch (err) { }




    //    var bgimage = $('#ctl-bg-image-folder').hasClass('off');
    //    var bgimage2 = $('.active').css('background-image');


    if ($('#ctl-bg-gradient-deg.off').length == false) {



      try {
        var val = '180';

        var hasdeg = 'deg';
        if ($('.active > .subobj').length) {

          if ($('.active > .subobj').css('background-image').includes(hasdeg)) {
            val = $('.active > .subobj').css('background-image').split('linear-gradient(')[1].split('deg')[0];
          }
        }
        else { if ($('.active').css('background-image').includes(hasdeg)) { val = $('.active').css('background-image').split('linear-gradient(')[1].split('deg')[0]; } }


        console.log('deg' + val);
        $('#ctl-bg-gradient-deg input').val(val);

      } catch (err) { $('#ctl-bg-gradient-deg input').val('0'); }

      $(' .input-rotate input').trigger('keyup');

    }


    if ($('.active[bg-color2]').length == false && $('#ctl-bg-color2.off').length == false) { $('.active').attr('bg-color2', 'rgba(0, 0, 0, 0)') }
    var bgcolor = $('.active').css('background-color');
    var bgcolor2 = $('.active').attr('bg-color2');


    if (subobj) { bgcolor = $('.active > .subobj').css('background-color'); }





    $("#ctl-bg-color input").spectrum("set", bgcolor);
    $("#ctl-bg-color2 input").spectrum("set", bgcolor2);



    //atualizando os todos os  inputs giro / filter -----













    if ($('#ctl-bg-mask.off').length == false) {
      try {
        var emaskcolor = '';
        if (subobj) { emaskcolor = $('.active > .subobj').css('box-shadow').match(/^.*(rgba?\([^)]+\)).*$/); }
        else { emaskcolor = $('.active').css('box-shadow').match(/^.*(rgba?\([^)]+\)).*$/); }

        var emaskcolor2 = emaskcolor[1];
        $('#color-picker-bg-mask').spectrum("set", emaskcolor2);
      } catch (err) { $('#color-picker-bg-mask').spectrum("set", 'rgba(0,0,0,.001)'); }
    }


    var clipText = $('.active').hasClass('background-clip-text');
    if (clipText) { $('#ctl-font-bg-clip.btn').attr('value', '1'); }



    //tipografia ----------------------- 


    if ($(' #ctl-stroke-width:not(.off)').length) {
      var ts = parseFloat($('.active').css('font-size')) * 10;
      var vall = parseFloat($('.active').css('text-stroke-width')) * 1000;

      var rrr = parseInt(vall / ts);
      $(' #ctl-stroke-width input').val(rrr);


    }


         if ($('.active.font-medium').length) { $('.btn[property-val=font-medium]').attr('value', 1); }
	   if ($('.active.font-big').length) { $('.btn[property-val=font-big]').attr('value', 1); }
	   if ($('.active.font-small').length) { $('.btn[property-val=font-small]').attr('value', 1); }
	  
	  
	    if ($('.active.font-medium-mobile').length) { $('.btn[property-val=font-medium-mobile]').attr('value', 1); }
    if ($('.active.font-big-mobile').length) { $('.btn[property-val=font-big-mobile]').attr('value', 1); }
       if ($('.active.font-small-mobile').length) { $('.btn[property-val=font-small-mobile]').attr('value', 1); }
	  
	  
	  //Note lh
	
	   if ($('#ctl-line-height').length) { 
	
		     if ($('.active.lh1').length) { $('.btn[property-val=lh1]').attr('value', 1); }
		     if ($('.active.lh1p2').length) { $('.btn[property-val=lh1p2]').attr('value', 1); }
		     if ($('.active.lh1p4').length) { $('.btn[property-val=lh1p4]').attr('value', 1); }
		     if ($('.active.lh1p6').length) { $('.btn[property-val=lh1p6]').attr('value', 1); }
		     if ($('.active.lh1p8').length) { $('.btn[property-val=lh1p8]').attr('value', 1); }
		     if ($('.active.lh2').length) { $('.btn[property-val=lh2]').attr('value', 1); }

		   
	   
	   
	   }
	
	  
	  
	  
    if ($('.active.font-thin').length) { $('.btn[property-val=font-thin]').attr('value', 1) }
    if ($('.active.nobreak').length) { $('#ctl-font-nobreak').attr('value', 1); }



    var fontNormal = $('.active').hasClass('font-normal');
    if (fontNormal) { $('.btn[property-val=font-normal]').attr('value', 1) }
    var fontHard = $('.active').hasClass('font-hard');
    if (fontHard) { $('.btn[property-val=font-hard]').attr('value', 1) }

    if ($('.active').length) {
      var font = $('.active').css('font-family'),
        font2 = font.replace(/[^a-zA-Z0-9 ]/g, ''),

        fontParent = $('.active').parent().css('font-family'),
        fontcolor = $('.active').css('color');
      $("#ctl-font-color input").spectrum("set", fontcolor);

      if (font == fontParent) { $("#ctl-font-family .btn:contains('inherit')").attr('value', 1) }
      if (font != fontParent) { $("#ctl-font-family .btn:contains('" + font2 + "')").attr('value', 1) }
    }

    if (itemSelect == 'title') {
      var titleh = $('.active').prop('nodeName').toLowerCase();
      $('#ctl-font-title *[property-val=' + titleh + ']').attr('value', '1');
    }

    var textalignparent = $('.active').parent().css('text-align');
    var textalign = $('.active').css('text-align');
    if (textalignparent == textalign) { textalign = 'inherit' }

    $('.btn[property-val = "' + textalign + '"]').attr('value', '1');






    if ($('#ctl-bg-blend.off').length == false) {

      var bgblendmode = $('.active').css('background-blend-mode').split(',')[0];
      if (subobj) { bgblendmode = $('.active > .subobj').css('background-blend-mode').split(',')[0]; }
      $('#ctl-bg-blend .btn[property-val="' + bgblendmode + '"]').attr('value', '1');

    }



    if ($('#ctl-img-blend.off').length == false) {
      var imgblendmode = $('.active img').css('mix-blend-mode').split(',')[0];
      $('#ctl-img-blend .btn[property-val="' + imgblendmode + '"]').attr('value', '1');
    }


    $("#ctl-lorem:not(.off) input").val('');
    lorem = '';

    //stroke-----------------

    if ($('#ctl-font-color-stroke').hasClass('off') == false) {
      var stroke = $('.active').css('text-stroke-color');
      $('#ctl-font-color-stroke input').spectrum("set", stroke);

    }


    //link---------------------

    if ($("#ctl-link:not(.off)").length) { $("#ctl-link input").val($('.active').attr('temphref')); }


    if ($('.active[target]').length) { $("#ctl-link-tab").attr('value', 1); }


    //code-----------------  
	  if(itemSelect == 'code'){    $('#ctl-codearea textarea').val($('.active > .subobj').attr('codearea-sub-code'));}
	   if(itemSelect == 'codefloat'){    $('#ctl-codearea textarea').val($('.active > .subobj').html());}
    if(itemSelect == 'form'){   $('#ctl-codearea textarea').val($('.active > .formcode').html());}
   



    //video-----------------  

    if (itemSelect == 'video') {


      $('#ctl-video').val($('.active > .subobj  .videosize').html());



      if ($('.active.video.youtube-hidden').length) { $('#ctl-youtube-hidden').attr('value', 1) }
      if ($('.active.video.video-crop').length) { $('#ctl-video-crop').attr('value', 1) }
      if ($('.active.video.ratio-video-square').length) { $('#ctl-video-ratio .btn[property-val=ratio-video-square]').attr('value', 1) }
      if ($('.active.video.ratio-video-v').length) { $('#ctl-video-ratio .btn[property-val=ratio-video-v]').attr('value', 1) }
      if ($('.active.video.video-float').length) { $('#ctl-video-float').attr('value', 1); $('#ctl-video-float').addClass('float-used'); }

if( $('.video-float').length){  $('#ctl-video-float').addClass('float-used')}
if( $('.video-float').length == 0){$('#ctl-video-float').removeClass('float-used');}
	
    }


    //modal-----------------  


    if (itemSelect == 'modal') {


      if ($('.active.pmodal-mask-show').length) { $('#ctl-modal-mask').attr('value', 1) }
      if ($('.active.modal-show-load').length) { $('#ctl-modal-show-load').attr('value', 1) }
      if ($('.active.modal-tofront').length) { $('#ctl-modal-tofront').attr('value', 1) }
      if ($('.active.pmodal-icon-show').length) { $('#ctl-modal-icon-show').attr('value', 1) }

    }






    //NOTE atualizar border-----------------
	  
	

	  
	  
	  if($('#ctl-border-radius:not(.off)').length){$('#ctl-border-radius-converttoper').removeClass('off')}
	  
	    if ($('.active.border-radius-per' ).length) { 
	  $('#ctl-border-radius-converttoper').attr('value', 1);
			 $('#ctl-border-radius').addClass('off');
	   $('#ctl-border-radius-per').removeClass('off');
	  }
	  
      if ($('#ctl-border-radius-per:not(.off)' ).length) { 
	  
	  if($('.active.border-radius-per[data-border-radius]').length){ $('#ctl-border-radius-per input').val($('.active').attr('data-border-radius'));}
		  else{$('#ctl-border-radius-per input').val(0)}
	  
	  }
	  
	  if ($('#ctl-border-radius:not(.off)' ).length) { 
	  
	  if($('.active').length){ 
		  var vborder = parseFloat( $('.active').css('border-radius')) ;
		  $('#ctl-border-radius input').val( vborder );}
//		  else{$('#ctl-border-radius-per input').val(0)}
	  
	  }
   
	  
	  
	  
	  

    var borderwidthtop = '',
      borderwidthright = '',
      borderwidthleft = '',
      borderwidthbottom = '',
      bordercolor = '',
		borderstyle='solid';





    if (subobj) {


      borderwidthtop = parseInt($('.active > .subobj').css('border-top-width'));
      borderwidthright = parseInt($('.active > .subobj').css('border-right-width'));
      borderwidthbottom = parseInt($('.active > .subobj').css('border-bottom-width'));
      borderwidthleft = parseInt($('.active > .subobj').css('border-left-width'));
      bordercolor = $('.active > .subobj').css('border-color');
			 borderstyle = $('.active > .subobj').css('border-style');

      $("#border-width-top").val(borderwidthtop);
      $("#border-width-right").val(borderwidthright);
      $("#border-width-bottom").val(borderwidthbottom);
      $("#border-width-left").val(borderwidthleft);
    }


    if (subobj == false) {

      borderwidthtop = parseInt($('.active ').css('border-top-width'));
      borderwidthright = parseInt($('.active ').css('border-right-width'));
      borderwidthbottom = parseInt($('.active').css('border-bottom-width'));
      borderwidthleft = parseInt($('.active').css('border-left-width'));
      bordercolor = $('.active').css('border-color');
		 borderstyle = $('.active').css('border-style');

      $("#border-width-top").val(borderwidthtop);
      $("#border-width-right").val(borderwidthright);
      $("#border-width-bottom").val(borderwidthbottom);
      $("#border-width-left").val(borderwidthleft);
    }




$('#ctl-border-style .btn[property-val='+borderstyle+']').attr("value", '1');

    $('#ctl-border-color input').spectrum("set", bordercolor);



    //    $('#ctl-border-color input').val(bordercolor); 


    //                bordercolor =  $('.active').css('border-color');

    //$('#ctl-border-width input').val(borderwidth); 


    //margin-----------------
    if ($('.active').hasClass('padding')) { $('#ctl-padding').attr('value', '1'); }
//    if ($('.active').hasClass('margin-top')) { $('#ctl-margin-top').attr('value', '1'); }
//    if ($('.active').hasClass('margin-bottom')) { $('#ctl-margin-bottom').attr('value', '1'); }
//    if ($('.active').hasClass('margin-left')) { $('#ctl-margin-left').attr('value', '1'); }
//    if ($('.active').hasClass('margin-right')) { $('#ctl-margin-right').attr('value', '1'); }


    //dynamic text-----------------  
    if ($('.active').hasClass('dynamic-text-refresh')) { $('#ctl-dynamic-text-refresh').attr('value', '1'); }

    if ($('[dynamic-text=randomName].active').length) {
      if ($('.active').hasClass('malename')) { $('#ctl-dynamic-name-sex .btn[property-val=malename]').attr('value', '1'); }
      if ($('.active').hasClass('femalename')) { $('#ctl-dynamic-name-sex .btn[property-val=femalename]').attr('value', '1'); }
      if ($('.active').hasClass('rlastname')) { $('#ctl-last-name').attr('value', '1'); }




    }

    if ($('[dynamic-text=dynamicNumber].active').length) {
      $('#ctl-dynamic-number-start input').val('');
      $('#ctl-dynamic-number-min input').val('');
      $('#ctl-dynamic-number-max input').val('');
      $('#ctl-dynamic-number-refresh-max input').val('');

      if ($('.active').hasClass('dynamic-number-up')) { $('#ctl-dynamic-number-d .btn[property-val=dynamic-number-up]').attr('value', '1'); }
      if ($('.active').hasClass('dynamic-number-down')) { $('#ctl-dynamic-number-d .btn[property-val=dynamic-number-down]').attr('value', '1'); }



      if ($('[dynamic-number-start].active').length) { $('#ctl-dynamic-number-start input').val($('.active').attr('dynamic-number-start')) }
      if ($('[dynamic-number-min].active').length) { $('#ctl-dynamic-number-min input').val($('.active').attr('dynamic-number-min')) }
      if ($('[dynamic-number-max].active').length) { $('#ctl-dynamic-number-max input').val($('.active').attr('dynamic-number-max')) }
      if ($('[dynamic-number-refresh-max].active').length) { $('#ctl-dynamic-number-refresh-max input').val($('.active').attr('dynamic-number-refresh-max')) }

    }




    //box shadow--------------------------------- 

    var sshadow = $('#shadow-tools:not(.off)').length;
    var testshadow = $('.active').css('box-shadow');
    if (sshadow && itemSelect != 'img') {

      if (subobj) { var testshadow = $('.active > .subobj').css('box-shadow'); }

      if (testshadow == 'none') {
        $('#ctl-shadow-color input').spectrum("set", 'rgba(0, 0, 0, 1)');
        $('#ctl-shadow-x input').val(0);
        $('#ctl-shadow-y input').val(0);
        $('#ctl-shadow-blur input').val(0);
      }




      if (testshadow != 'none') {



        var shadowcolorr = $('.active').css('box-shadow').substring(
          $('.active ').css('box-shadow').indexOf("rg") - 1,
          $('.active ').css('box-shadow').lastIndexOf(") ")
        );

        if (subobj) {
          shadowcolorr = $('.active  > .subobj').css('box-shadow').substring(
            $('.active > .subobj').css('box-shadow').indexOf("rg") - 1,
            $('.active > .subobj').css('box-shadow').lastIndexOf(") ")
          );
        }

        if (shadowcolorr == '') { shadowcolorr = 'rgb(0, 0, 0' }

        $('#ctl-shadow-color input').spectrum("set", shadowcolorr + ')');











        var BSx = 0, BSy = 0, BSblur = 0;

        var shadowval = $('.active').css('box-shadow').replace(shadowcolorr + ')', '');
        if (subobj) { shadowval = $('.active .subobj').css('box-shadow').replace(shadowcolorr + ')', '') }

        var resultshadow = shadowval.match(/(-?\d+px)/g);

        BSx = parseInt(resultshadow[0]),
          BSy = parseInt(resultshadow[1]),
          BSblur = parseInt(resultshadow[2]);



        $('#ctl-shadow-x input').val(BSx);
        $('#ctl-shadow-y input').val(BSy);
        $('#ctl-shadow-blur input').val(BSblur);



      }

    }




    if (sshadow && itemSelect == 'img') {




      var vthis = $('.active > .subobj');

      var dshadow = '';
      dshadow = vthis.css('filter').split('drop-shadow(')[1];



      var shadowcolorr = 'rgba(0, 0, 0, 1)',
        shX = '0',
        shY = '0',
        shB = '0';

      if (dshadow != undefined) {

        var dshadowcolor = dshadow.split('rgb')[1];
        shadowcolorr = 'rgb' + dshadowcolor.split(')')[0] + ')';


        var vals = dshadow.split(')')[1].split('px');
        shX = parseInt(vals[0]),
          shY = parseInt(vals[1]),
          shB = parseInt(vals[2]);




      }
      //        console.log('shadd'+shX+'-'+shY+'-'+shB);

      $('#ctl-shadow-x input').val(shX);
      $('#ctl-shadow-y input').val(shY);
      $('#ctl-shadow-blur input').val(shB);

      $('#ctl-shadow-color input').spectrum("set", shadowcolorr + ')');




    }





    //icon---------------------------------
    var iconfillcolor = $('.active').css('fill');
    $("#ctl-icon-color input").spectrum("set", iconfillcolor);

    var iconstrokecolor = $('.active').css('stroke');
    $("#ctl-icon-color-stroke input").spectrum("set", iconstrokecolor);

    var iconstrokewidth = parseFloat($('.active').css('stroke-width')) * 10;
    $("#ctl-icon-stroke input").val(iconstrokewidth);




    //List style---------------------------------  

    if ($('.active').hasClass('list-number')) { $('#ctl-list-type').attr('value', '1'); }
    if ($('.active').hasClass('list-style-center')) { $('#ctl-list-icon-position').attr('value', '1'); }
    if ($('.active').hasClass('list-style-big')) { $('#ctl-list-icon-size').attr('value', '1'); }
    if ($('.active').hasClass('list-columns')) { $('#ctl-list-columns').attr('value', '1'); }
    if ($('.active').hasClass('space-between')) { $('#ctl-space-between').attr('value', '1'); }




    //imagem---------------------------------
    var btnanimation = $('.active').attr('hover-animation');
    if (btnanimation) { $('#ctl-button-animation .btn[property-val=' + btnanimation + ']').attr('value', '1'); }


    var allhoveranimation = $('.active').attr('all-hover-animation');
    if (allhoveranimation) { $('#ctl-all-hover-animation .btn[property-val=' + allhoveranimation + ']').attr('value', '1'); }

    var nonhoveranimation = $('.active').attr('non-hover-animation');
    if (nonhoveranimation) { $('#ctl-non-hover-animation .btn[property-val=' + nonhoveranimation + ']').attr('value', '1'); }




    //dropmenucompact---------------------------------


    if ($('#ctl-dropmenucompact.off').length == false) { $('#ctl-dropmenucompact input').val($('.active').attr('dropmenucompact')) }
    if ($('#ctl-dropmenubar.off').length == false) { $('#ctl-dropmenubar input').val($('.active').attr('dropmenubar')) }

    //reveal---------------------------------

    if ($('.active[elem-reveal]').length) {

      var val = $('.active').attr('elem-reveal');


      $('#ctl-reveal .btn[property-val=' + val + ']').attr('value', '1')
    }


    //carousel--------------------------------- 


    if ($('#ctl-carousel-card-full:not(.off)').length) {

      if ($('.active.carousel-full').length) {
        $('#ctl-carousel-card-full').attr('value', '1');
      }



    }



    if ($('.active.carousel-auto').length) {
      $('#ctl-carousel-auto').attr('value', '1');
    }

    //ilustratior---------------------------------

    if ($('#ctl-ilustration-color1:not(.off)').length) {
      var ilcolor1 = $('.active').attr('inside-svg-color1');
      $('#ctl-ilustration-color1 input').spectrum("set", ilcolor1);

    }

    if ($('#ctl-ilustration-color2:not(.off)').length) {
      var ilcolor2 = $('.active').attr('inside-svg-color2');
      $('#ctl-ilustration-color2 input').spectrum("set", ilcolor2);

    }

    if ($('#ctl-ilustration-color3:not(.off)').length) {
      var ilcolor3 = $('.active').attr('inside-svg-color3');
      $('#ctl-ilustration-color3 input').spectrum("set", ilcolor3);

    }

	  
	  
	  
	  
	  
	  //NOTE input at -----------------------------------------------

	   if ($('#ctl-input-type:not(.off)').length) {
      var inputtype = $('.active input').attr('type');
      $('#ctl-input-type .btn[property-val='+inputtype+']').attr("value", 1);

		   
		   
		   
		   
		   
		       $( ".input-elem" ).each( function(  ) {  
				   var tid = $(this).attr('id');
				   
				   $(this).children('input').attr('id' , 'pagee-'+tid);
				    $(this).children('label').attr('for' , 'pagee-'+tid);

  }); 
		   
		   
    }
	  
	   if ($('#ctl-input-name:not(.off)').length) {
		   var nameinput = $('.active input').attr('name');
		   $('#ctl-input-name input').val(nameinput);
	   }
	  if ($('#ctl-input-checkedcolor:not(.off)').length) {
		        var checkdcolor = $('.active .input-elem-check').css('background-color');
		   $('#ctl-input-checkedcolor input').spectrum("set", checkdcolor);
	   }
	 
	 
	  
	  
	  
	  
	  
	  
	    //NOTE ab atualizar---------------------------------
	  
	   if ($('.active.test-ab-a').length) {
		 $('[property-val=test-ab-a]').attr('value', '1');
		 
	   }
	   if ($('.active.test-ab-b').length) {
		 $('[property-val=test-ab-b]').attr('value', '1');
		 
	   }
	  
	  
	  
	  
	  
	  
	  if( $('#progbar-tools').length){
		 
		$('#ctl-progbar-start input').val( $('.active').attr('data-pageeprogbar-start')); 
		  $('#ctl-progbar-time input').val( $('.active').attr('data-pageeprogbar')); 
		  $('#ctl-progbar-stop input').val( $('.active').attr('data-pageeprogbar-stop')); 
		 }
	  
	  
	   if( $('.active.flip-horizontal').length){
		 $('#ctl-fliph').attr('value', '1')
		
		 }
	  if( $('.active.flip-vertical').length){
		 $('#ctl-flipv').attr('value', '1')
		
		 }
	  
	  
	  if( $('#ctl-zindex:not(.off)').length){
		if( $('.active.zindexback2').length){  $('[property-val=zindexback2]').attr('value','1')}
		  	if( $('.active.zindexback').length){  $('[property-val=zindexback]').attr('value','1')}
		  	if( $('.active.zindexfront').length){  $('[property-val=zindexfront]').attr('value','1')}
		  	if( $('.active.zindexbfront2').length){  $('[property-val=zindexfront2]').attr('value','1')}
		
		 }
	  
    
	  
	  
	  
	  
	  
	  if($('#ctl-margin-free:not(.off)').length){ 
		  
		  
		  
		  	  (function ($) {
    $.fn.inlineStyle = function (prop) {
         var styles = this.attr("style"),
             value;
         styles && styles.split(";").forEach(function (e) {
             var style = e.split(":");
             if ($.trim(style[0]) === prop) {
                 value = style[1];           
             }                    
         });   
         return value;
    };
}(jQuery));
		  
		  
		  

		{ 
	      var martop 	= parseFloat($('.active').css('margin-top'));
		  $('#ctl-margin-top-free').val(martop);
		  if( $('.active.margin-top').length){ $('#ctl-margin-top-free').val('');}
		    if($('.active[css-mt]').length){
			var cssmt =  $('.active').attr('css-mt');
			  if(cssmt != 'smart' ){ $('#ctl-margin-top-free').val(cssmt);}
			}
		   }
		  
		  
		  
		  { 
		  var marbottom = parseFloat($('.active').css('margin-bottom'));
		  $('#ctl-margin-bottom-free').val(marbottom);
		   if( $('.active.margin-bottom').length ){ $('#ctl-margin-bottom-free').val('');}
		  
		  
		  if($('.active[css-mb]').length){
			var cssmb =  $('.active').attr('css-mb');
			  if(cssmb != 'smart' ){ $('#ctl-margin-bottom-free').val(cssmb);}
			  }
		  }
		  
		  
		  {
		  var marl 	= parseFloat($('.active').css('margin-left'));
		    var marleft = $(".active").inlineStyle("margin-left");
		   $('#ctl-margin-left-free').val(marl);
		   if( $('.active.margin-left-auto').length || marleft == undefined){ $('#ctl-margin-left-free').val('');}
		  
			  	  if($('.active[css-ml]').length){
			var cssml =  $('.active').attr('css-ml');
			  if(cssml != 'auto' ){ $('#ctl-margin-left-free').val(cssml);}
			  }
		  }
		  
		  
		  
		  {
		  var marr 	= parseFloat($('.active').css('margin-right'));
		   var marright = $(".active").inlineStyle("margin-right");
		  $('#ctl-margin-right-free').val(marr);
		   if( $('.active.margin-right-auto').length || marright == undefined ){ $('#ctl-margin-right-free').val('');}
	
			    if($('.active[css-mr]').length){
			var cssmr =  $('.active').attr('css-mr');
			  if(cssmr != 'auto' ){ $('#ctl-margin-right-free').val(cssmr);}
			  }
		  }
	}
	  
	  
	  
	  if(itemSelect == 'countdown'){
		  
		  if( $('.active[todate]').length){
			$('#ctl-countdown-dateortime').attr('value', 1);
			  var todate = $('.active').attr('todate');
			  
			  $('#ctl-countdown-date input').val(todate);
		} 
		  
		  if( $('.active[countdowntime]').length){
			 
			 
			 	  var ctime = $('.active').attr('countdowntime');
			  
			  $('#ctl-countdown-time input').val(ctime);
			
			 }
		  
		if( $('.active.pagee-countdown-master').length){
			$('#ctl-countdown-master').attr('value', 1);
		}  
		  
		  
		if( $('.active[countdown-redirect]').length){
			
			$('#ctl-countdown-redirect input').val( $('.active').attr('countdown-redirect') );
		}    
		  
		  
		  
	  }
	  
	  if( $('#ctl-finalcountdown:not(off)').length){
	
		  if( $('.active.finalcountdown-show').length){ $('#ctl-finalcountdown [property-val=finalcountdown-show]').attr('value', 1)}
		    if( $('.active.finalcountdown-hidden').length){ $('#ctl-finalcountdown [property-val=finalcountdown-hidden]').attr('value', 1)}
		  
	  }
	 
	  
	  
	   if( $('#ctl-rotate:not(off)').length){
	
		  if( $('.active[css-rtt]').length){
			  var rttval = $('.active').attr('css-rtt');
			  $('#ctl-rotate input').val(rttval);
//			  var rtt2 = rttval * -1;
//		$('.resize-control').css('transform', 'rotate('+rtt2+'deg)');
		  }
		   else{$('#ctl-rotate input').val('0');}
		  
	  }
	  
	  
	  
	  if( $('#ctl-rotate-icon:not(off)').length){
	
		  if( $('.active[css-rtt-icon]').length){
			  var rtticonval = $('.active').attr('css-rtt-icon');
			  $('#ctl-rotate input').val(rtticonval);
	
		  }
		   else{$('#ctl-rotate-icon input').val('0');}
		  
	  }
	  
	  
	  //NOTE fim atualizar---------------------------------
   
	  
	       setTimeout(function() { 
			   stickymenu();
 resizeControl();
          }, 300);  
	  
  } //fim do if edite---------------------------------
}








//paste---------------------------------



//$('[contenteditable]').on('paste', function(e) {
//
//    e.preventDefault();
//
//    var text = '';
//
//    if (e.clipboardData || e.originalEvent.clipboardData) {
//        text = (e.originalEvent || e).clipboardData.getData('text/plain');
//    } else if (window.clipboardData) {
//        text = window.clipboardData.getData('Text');
//    }
//    text = text.replace(/<[^>]*>?/gm, '');
//
//    if (document.queryCommandSupported('insertText')) {
//        document.execCommand('insertText', false, text);
//    } else {
//        document.execCommand('paste', false, text);
//    }
//    $(this).html($(this).html().replace(/<div>/gi,'<br>').replace(/<\/div>/gi,''));
//});











$('[contenteditable]').keydown(function (e) {
  if (e.keyCode === 13) {
    document.execCommand('insertHTML', false, '<br><br>');
    return false;
  }
});

//$( "[contenteditable]" ).dblclick(function() {
// $(this).text('o');
//});


//--upload page------------------------------------------------------------
$("body #loadpage").click(function (e) {
  $("#upfile").trigger('click');
});







$("body").delegate('#upfile', 'change', function (e) {
  readURL(this);
  //        setTimeout(function() {
  //    desablelinks();  
  //  
  //     
  //                       
  //  }, 200);

});






function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {

      $(".new-page").load(e.target.result);
      $('.page-center .page-site-scroll *').remove;
      setTimeout(function () {
        var newpage = $('.new-page .vslpagee').clone();

        $('.page-center .page-site-scroll').html(newpage);

        loadpagex();

        //$('.new-page *').remove();

      }, 100);
    }
    reader.readAsDataURL(input.files[0]);
  }



}






function loadpagex() {
  projectname = $('.new-page *[page-name]').attr('page-name');
  $('#ctl-page-name').val(projectname);
  var pagehead = $('.new-page').html().split('<!--headcode-->')[1];

  var bcode = $('.new-page  .body-code').html();
  var pagetitle = $('.new-page .head-title').text();
  var pagedescription = $('.new-page [name="description"]').attr('content');
  var themecolor1 = $('.new-page [name="theme-color"]').attr('content');
  var nfavicon = $('.new-page [rel=icon]').attr('href');
  var backurl = $('.new-page  #body').attr('back-url');
  $('#ctl-page-head').text(pagehead);
  $('#ctl-project-icon').val(nfavicon);
  $('#ctl-project-icon').trigger('change');
  $('#ctl-body-code').text(bcode);
  $('#ctl-page-title').val(pagetitle);
  $('#ctl-page-description').text(pagedescription); $('#ctl-back-url input')
  $('#ctl-back-url input').val(backurl);

  $('#ctl-browser-color input').spectrum("set", themecolor1);




  $('.new-page').remove();
  $('body').append(' <div class="new-page"></div>');


  hreftotemphref();
  atualizartools();
}





















// ---templates--------------------------------------------------------------




$("body").delegate('.btn-template-aplicar', 'click', function (e) {
  var file = $(this).attr('data-url');

  $(".new-page").load(file);
  $('body').removeClass('templates-library-show');


  setTimeout(function () {
    var newpage = $('.new-page .vslpagee').clone();
    $('.page-center .page-site-scroll').html(newpage);
    loadpagex();
    desablelinks();
    $('.new-page *').remove();
    $('.pagee-js').remove();
    sortelem();
  }, 200);

  setTimeout(function () {
    $('.new-page *').remove();
  }, 400);

});



$("body").delegate('.template-content-item', 'click', function (e) {

  $(this).removeClass('template-content-item-left');
  $(this).removeClass('template-content-item-right');
  var l = $(this).offset().left;
  var r = $(window).width() - 300;
  console.log(r + ' +' + l);

  if (l < 200) { $(this).addClass('template-content-item-left'); }
  if (l > r) { $(this).addClass('template-content-item-right'); }


});


//$( "body" ).delegate('.template-content-item.act .template-content-item-img','mousedown', function(e) {
//  
//      setTimeout(function() { 
// $(this).parents('.template-content-item').removeClass('act');
// }, 500);    
//        
//});

$("body").delegate('.template-content-item', 'click', function (e) {
  $(this).siblings('.template-content-item').removeClass('act');

  if ($('.template-content-action:hover,  .template-content-action div:hover').length == false) { $(this).toggleClass('act'); }

});

$("body").delegate('.template-content-item', 'mouseout', function (e) {

  setTimeout(function () {
    $('.template-content-item.act:not(:hover)').removeClass('act');
  }, 1000);


});





// ---download--------------------------------------------------------------

function styleInPage(css, verbose) {
  if (typeof getComputedStyle == "undefined")
    getComputedStyle = function (elem) {
      return elem.currentStyle;
    }
  var who, hoo, values = [], val,
    nodes = nodes = $('.page-site-scroll  *'),
    L = nodes.length;
  for (var i = 0; i < L; i++) {
    who = nodes[i];
    if (who.style) {
      hoo = '#' + (who.id || who.nodeName + '(' + i + ')');
      val = who.style.fontFamily || getComputedStyle(who, '')[css];
      if (val) {
        if (verbose) values.push([hoo, val]);
        else if (values.indexOf(val) == -1) values.push(val);

      }
    }
  }
  return values;
}


function importfonts() {
  $('body').append('<input id="importfont" type="text">');
  $('#importfont').val(styleInPage('fontFamily'));

  var impotfont = $('#importfont').val().replaceAll(/\s*,\s*/g, '|').replaceAll(" ", "+").replaceAll('"', '').replaceAll('"', '');

  $('#importfont').remove();

  return impotfont;
}




// ---carregar--------------------------------------------------------------
function hreftotemphref() {

  $(".page-site-scroll [href]").each(function () {
    var href = $(this).attr("href");
    $(this).attr("temphref", href);
    $(this).removeAttr("href");
  });
}



// ---download--------------------------------------------------------------

var fullpage = 'p';


function preperapage() {
  createsave();
	 var ccodecenter0 =	$('.page-site-scroll').clone().find('.codearea-sub').html('').end();
  var ccodecenter = ccodecenter0.html();
  $('body').append(' <div class="temp-save-page">' + ccodecenter + '</div>');

  $(".temp-save-page [temphref]").each(function () {
    var temphref = $(this).attr("temphref");
    $(this).attr("href", temphref);
    $(this).removeAttr("temphref");
  });
	
	var mockup3dcss = '';
	if( $('.mockup-3d').length){ var mockup3dcss = '<link rel="stylesheet" href="css/ilustration3d.css">';}

$('.temp-save-page .tab-act').removeClass('tab-act');
	  $('.temp-save-page .btn-btsa, .temp-save-page .btsa').addClass('tab-act');
 $('.temp-save-page .mobile').removeClass('mobile');
  $('.temp-save-page .resize-control').remove();
  $('.temp-save-page .active').removeClass('active');
  $('.temp-save-page *').removeClass('ui-droppable ui-sortable ui-sortable-disabled ui-sortable-handle active  finalcountdown-act');
  $('.temp-save-page *').removeAttr('contenteditable');
  var page = $('.temp-save-page').html();
  $('.temp-save-page').remove();

$('.pagee-countdown').removeAttr('startcountdown');
	 



  var favicon = $('#ctl-project-icon').val();
  var imgshare = $('#ctl-project-img').val();

  var pagetitle = $('#ctl-page-title').val();
  var pagedescription = $('#ctl-page-description').val();
  var pagehead = $('#ctl-page-head').val();
  var importfonts2 = importfonts();
  var themecolor = $('#browser-color ').val();





  fullpage = '<html class="no-js" lang=""> <head><link rel="icon" type="image/x-icon" href="' + favicon + '"> <meta charset="utf-8"> <title class="head-title">' + pagetitle + '</title> <meta name="description" content="' + pagedescription + '"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta property="og:title" content="" /> <meta property="og:type" content="" /> <meta property="og:url" content="" /> <meta property="og:image" content="' + imgshare + '" /> <link rel="apple-touch-icon" href="' + imgshare + '"><link rel="icon" type="image/x-icon" href="' + favicon + '"> <!-- Place favicon.ico in the root directory --> <link rel="stylesheet" href="css/normalize.css"> <link rel="stylesheet" href="css/vslpagee.css">'+mockup3dcss+'<link rel="stylesheet" href="css/animations.css"> <meta name="theme-color" content="' + themecolor + '"><link href="https://fonts.googleapis.com/css?family=' + importfonts2 + '" rel="stylesheet"><!--headcode-->' + pagehead + '<!--headcode--></head> <body> ' + page + '<div class="body-code"></div><script class="pagee-js" >function loadScript(src) { return new Promise(function (resolve, reject) { var s; s = document.createElement("script"); s.src = src; s.onload = resolve; s.onerror = reject; document.head.appendChild(s); }); } async function load(){ if (!window.jQuery){ await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js`);  await loadScript(`js/vslpagee.js`);} console.log(jQuery); } load();</script></body> </html>';
}



$("body #savepage").click(function (e) {
  preperapage();



  var text = fullpage;
  var filename = projectname + ".html";

  downloadasTextFile(filename, text);

  $('.page-drop-menu').removeClass('act');
});





function downloadasTextFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}




















$(".scrollcenter textarea").click(function () {

  var top0 = $(this).parents("#config-menu").offset().top;
  var top1 = $(this).parents(".scrollcenter").offset().top;

  if (top1 >= 100) {
    $('.page-tools').animate({ scrollTop: $(this).parents(".scrollcenter").offset().top - 60 }, 500);
  }

  if (top1 <= 30) { $('.page-tools').animate({ scrollTop: Math.abs(top0) }, 500); }
});







// $(".acordion").delegate('.acordion-head', 'click', function (){
//   
//$(this).toggleClass('act');
//$(this).parent().siblings().children('.acordion-head').removeClass('act');
//  
//});

//var folder = "/taboola";
//
//$("#image-folder").keyup(function (){
//folder = $("#image-folder").val();  
//    loadimages() 
//            });
//$("#pagee-images-folder-open").click(function (){
//$("#image-folder").trigger('keyup');
//            });


loadimages();
function loadimages() {
  //$(".images-folder-list *").remove();
  $(" #images-folder-pagee").removeClass('act');
  $.ajax({
    url: "pagee-img",
    success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif|webp)$/)) {
          $(" .images-folder-list").append("<div class='images-folder'><div class='remove-img'><span class='material-symbols-outlined'>delete</span></div><img src='" + val + "'></div>");
        }
      });
    }
  });

}




// list pagee images

// $("#pagee-images-folder-open").click(function (){
//     
//$(".images-folder-list *").remove();
//     $(" #images-folder-pagee").addClass('act');
//    
//$.ajax({
//    url : "pagee-img",
//    success: function (data) {
//        $(data).find("a").attr("href", function (i, val) {
//            if( val.match(/\.(jpe?g|png|gif|webp)$/) ) { 
//                $("#images-folder-list-pagee").append( "<div class='images-folder'><img src='" + val +"'></div>" );
//            } 
//        });
//    }
//});
//
//            });

//
//
// $("#select-image-folder .btn").click(function (){
//$(this).siblings().attr('value', '0');
//var ativar = $(this).attr('property-val');
//    $('.img-lists').removeClass('act') ;
//   $(ativar).addClass('act')  
//     
//     
//     
//            });



// ---addons--------------------------------------------------------------

$("#savecloud").click(function () {
  var savecloud = $('#ctl-page-name').val();
  if (savecloud == 'Nova_pagina') {

    $('#ctl-page-name').parent('.elem').addClass('elem-error');

    $('#code').trigger('click');
  }

  else { }



});

$('body').delegate('.elem-error', 'click', function () {

  $(this).removeClass('elem-error');

});





// ---addons--------------------------------------------------------------

$("#addons-list li").click(function () {
  var addondescription = $(this).attr('value');

  $('.addondescription').removeClass('act');
  $('#' + addondescription).addClass('act');


});



// ---addons--------------------------------------------------------------

$(".pageemodal .btn-cancel").click(function () {
  $(this).parents('.pageemodal').removeClass('act');


});
































