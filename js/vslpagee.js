 var pageeapp = $('.pagee-plataforma').length;
var timerpage = 0;

 $('#body, .page-center *').on("scroll",function() {
     
     
     
// sectionfloat();
videofloat();
     reveal();
    });





setInterval(function () {

   countdown(); 

},400);

setInterval(function () {
  if(  $('.page-edite').length ){timerpage = 0;}
    else{  timerpage = timerpage +1;}
    
    
  
 delayelement();
//availability();
//	videocrrect();
	
	

}, 1000);


setInterval(function () {
    if(  $('.page-edite').length == false ){
    
    dynamictextrefresh();
    }
    
    

 
}, 10000);







$( window ).resize(function() {
	if($('body:not(.no-at-loop)').length){
dropmenu(); 
    elem3d() ;
	borderRadius();
		
	}
});



//function videocrrect() {
//$( ".video iframe" ).each( function(  ) {  
//
////     $(this).toggleClass('videocorrect');
//
//   
//  });
//}


function borderRadius(atack) {
	console.log(atack);
	if(atack == undefined){atack =  $(".border-radius-per[data-border-radius]") }
	
	
	
	
	   $( atack ).each( function(  ) {  
var val = $(this).attr('data-border-radius');
var wid  = $(this).width();
		  var childwid =  $(this).children('.subobj').width();
		   
		   var radius = (wid/100)*val;
		   var childradius = (childwid/100)*val;
		   
		     $(this).css('border-radius', radius+'px');
  $(this).children('.subobj').css('border-radius', childradius+'px');
     
    console.log('rr')   ;  
		   
	    }); 
	
	
}


//NOTE codeaera
codeaearun();
function codeaearun() {

$( 'body:not(.page-preview) .codearea:not(.active) .codearea-sub' ).each( function(  ) {  
var code = $(this).attr('codearea-sub-code');
		
	$(this).html('');
	 $(this).html(code);
	    }); 	

	
}












setInterval(function () {
codeaearuntest();
 
}, 1000);
function codeaearuntest() {

	
	
	 $( '.codetest' ).each( function(  ) {  

		 
		 $(this).append(' test codearea ')
	    }); 
	
	
	
	//<div class='codetest'><div>
	
}














//video float===================================================================




function videofloat() {
    
    if($('.video-float').length){
    
         var videofloat1 =   $('.video-float').offset().top;  
        var videoh =   $('.video-float').outerHeight()+100;  
    var fl = videofloat1 + videoh;
    
       if(fl < 0) { 
		  
       $(".video-float").addClass("video-float-on");
		     $(".video-float").closest('section').addClass('videofloatonsection');
		  
		 if( $(".video-float-on:not(.video-br)").length){ borderRadius(".border-radius-per[data-border-radius].video-float");
				  $(".video-float").addClass("video-br");										 
														 }
	   }
    else{ $(".video-float").removeClass("video-float-on");
		 $('.video-ocultar').removeClass('video-ocultar');
			 if( $(".video-float.video-br").length){ borderRadius(".border-radius-per[data-border-radius].video-float"); }
		 $(".video-float").removeClass("video-br");}
//        $('.videofloatonsection').removeClass('videofloatonsection');
   
  }  
    
}

//accordion===================================================================

pageeprogbar();
//NOTE BAR



function pageeprogbar(e) {
var elemparent = e+' .pagee-prog-bar';
if(e == undefined){elemparent = $('main .pagee-prog-bar')}


$( '.pagee-prog-bar:not(.elem-running)' ).each( function(  ) {  

		var rundelay = 'go';
	var runmodal = 'go';
	
if($(this).parents('[open-delay]').length ){ rundelay = '';  if( $(this).parents('[open-delay].open-delay').length  ){ rundelay = 'go';} }
if($(this).parents('.pmodal-content').length ){ runmodal = '';  if( $(this).parents('.modal-open').length  ){ runmodal = 'go';} }
	
	
if( rundelay == 'go' && runmodal == 'go' ){

$(this).addClass('elem-running');
	
var pstart = parseInt($(this).attr('data-pageeprogbar-start'));
	var pstop = parseInt($(this).attr('data-pageeprogbar-stop'));
  var ttime = parseInt($(this).attr('data-pageeprogbar'))*1000;
  var thisnumber = $(this).children('.pagee-prog-bar-number');
  $(this).children('.pagee-prog-bar-inside').css('width', pstart+'%');
  
	
	
    $(this).children('.pagee-prog-bar-inside').animate({

    width: pstop+"%"
  }, ttime, "linear",  function() {});
  
  
 
  jQuery({ Counter: 0 }).animate({ Counter: pstop }, {
    duration: ttime,
    easing: 'linear',
  
    step: function () {
      $(thisnumber).text(Math.ceil(this.Counter)+'%');
    }
  });
	
	
	
}
	
	
	
  
  }); 
}



//accordion===================================================================


 $("body").delegate('.acordion-head', 'click', function (){
   
$(this).toggleClass('act');
$(this).parent().siblings().children('.acordion-head').removeClass('act');
  
});



 $("body").delegate('.page-drop-menu', 'mouseenter', function (){
   
dropmenu();
});



function dropmenu() {

    var mob = $('.page-center.mobile').length;
    var contentbody = $('#body').width();
    var menuposition = '';
     var bodypoasition = $('#body').offset().left;

//console.log(contentbody);
$( ".page-drop-menu" ).each( function(  ) {  

  menuposition = $(this).offset().left - bodypoasition;

    
    console.log(menuposition+'+'+bodypoasition);
    
 var  compact = $(this).attr('dropmenucompact');  
  var bar =   $(this).attr('dropmenubar'); 
    
          if( contentbody < compact){ $(this).addClass('dropmenucompact'); }
      if(contentbody > compact){ $(this).removeClass('dropmenucompact'); }
    
 
    
       if(contentbody < bar){ $(this).addClass('dropmenubar'); }
     if(contentbody > bar){ $(this).removeClass('dropmenubar'); }
    
    if( menuposition >  (contentbody/2)){ $(this).addClass('dropmenuright')}
    if( menuposition <  (contentbody/2)){ $(this).removeClass('dropmenuright')}

  }); 
    
    
    
    
}
//reveal===================================================================

reveal();
function reveal() {
    
    
    
    
   $( "[elem-reveal]" ).each( function(  ) {  
       var top =   $(this).offset().top,
            he = parseInt($( window ).height()/3); 
    
console.log(he);

    

       
     if(top <he*2){ 
           
       if($(this).parents('[open-delay]:not(.open-delay)').length || ($(this).attr('open-delay') && $(this).hasClass('open-delay') == false) ){ console.log('op')}    
         
        else{  $(this).addClass('elem-reveal-act'); } } 
     
         
  }); 
     
    
    
    
    
}




//modal===================================================================





 $("body ").delegate('.pmodal-close', 'click', function (e){
$(this).parents('.modal-open').removeClass('modal-open');
  
});



$("html ").delegate('body:not(.page-edite) .pmodal-content-content a', 'mouseup', function (e){
    
if( $('.pagee-plataforma').length){
        var shref = $(this).attr('temphref');
                                      
         if( shref == '' ||  shref == undefined ){
      
        $(this).parents('.modal-open').removeClass('modal-open');
                   
                   }    }
    
 else{  var bhref = $(this).attr('href');
          if( bhref == '' ||  bhref == undefined ){
      
        $(this).parents('.modal-open').removeClass('modal-open');
                   
                   }      }
  
});


//accordion===================================================================


 $("body").mousedown( function(e){
   
 if( $(e.target).parents('.page-drop-menu').length == false && $(e.target).parents('#body').length == true) {
    $(".page-drop-menu" ).removeClass('act');
  }    

});

 $("body ").delegate('.page-drop-menu  .icone', 'mouseup', function (e){
   if( $(this).parent().hasClass('act')){$(this).parent().removeClass('act');}
     
     
     else{$(this).parent().addClass('act');}

     
     


  
});








//element delay===================================================================




function delayelement() {
    
    
     
    
      $( "body:not(.page-edite) [open-delay]" ).each( function(  ) {  
   var delayelem = $(this).attr("open-delay");
          
 var a = delayelem.split(':');
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
    if(timerpage >= seconds){ 
  $(this).addClass(' open-delay');
	pageeprogbar('.open-delay');
		
           setTimeout(function() { 
 reveal();
          }, 100);   
       
        }
          

 
  
  }); 
    
    
    
    
         $( "body:not(.page-edite) [hidden-delay]" ).each( function(  ) {  
   var delayelem = $(this).attr("hidden-delay");
          
 var a = delayelem.split(':');
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
    if(timerpage >= seconds){ 
  $(this).addClass('hidden-delay');
           setTimeout(function() { 
 reveal();
          }, 100);   
       
        }
          

 
  
  }); 
    
    
    
 
    
    
$( "#preview" ).mousedown( function() {   timerpage = 0;  $('.open-delay').removeClass('open-delay');  $('.hidden-delay').removeClass('hidden-delay'); }); 
    
}


//element delay===================================================================



//
//function availability() {
//    
//    if(timerpage > 5 && timerpage < 8){ $(' .availability-content').addClass('availability-show-act')}
//
//    
//}

//element delay===================================================================

var maleName = ["Miguel","Davi","Gabriel","Arthur","Lucas","Matheus","Pedro","Guilherme","Gustavo","Rafael","Felipe","Bernardo","Enzo","Nicolas","João","Pedro","Pedro","Henrique","Cauã","Vitor","Eduardo","Daniel","Henrique","Murilo","Vinicius","Samuel","Pietro","João","Vitor","Leonardo","Caio","Heitor","Lorenzo","Isaac","Lucca","Thiago","João","Gabriel","João","Theo","Bruno","Bryan","Carlos","Eduardo","Luiz","Felipe","Breno","Emanuel","Ryan","Vitor","Hugo","Yuri","Benjamin","Erick","Enzo","Gabriel","Fernando","Joaquim","André","Tomás","Francisco","Rodrigo","Igor","Antonio","Ian","Luiz","Otávio","Juan","João","Guilherme","Diogo","Otávio","Nathan","Calebe","Danilo","Luan","Luiz","Henrique","Kaique","Alexandre","João","Miguel","Iago","Ricardo","Raul","Marcelo","Julio","César","Cauê","Benício","Vitor","Gabriel","Augusto","Pedro","Lucas","Luiz","Gustavo","Giovanni","Renato","Diego","João","Paulo","Renan","Luiz","Fernando","Anthony","Lucas","Gabriel","Thales","Luiz","Miguel","Henry","Marcos","Vinicius","Kevin","Levi","Enrico","João","Lucas","Hugo","Luiz","Guilherme","Matheus","Henrique"];

var femaleName = ["Julia","Sophia","Isabella","Maria","Eduarda","Manuela","Giovanna","Alice","Laura","Luiza","Beatriz","Mariana","Yasmin","Gabriela","Rafaela","Maria","Clara","Maria","Luiza","Ana","Clara","Isabelle","Lara","Ana","Luiza","Letícia","Ana","Julia","Valentina","Nicole","Sarah","Vitória","Isadora","Lívia","Helena","Ana","Beatriz","Lorena","Clara","Larissa","Emanuelly","Heloisa","Marina","Melissa","Gabrielly","Eduarda","Maria","Fernanda","Rebeca","Amanda","Alícia","Bianca","Lavínia","Fernanda","Ester","Carolina","Emily","Cecília","Maria","Júlia","Pietra","Ana","Carolina","Milena","Marcela","Laís","Natália","Maria","Bruna","Camila","Luana","Ana","Laura","Catarina","Maria","Vitória","Maria","Alice","Olivia","Agatha","Mirella","Sophie","Stella","Stefany","Isabel","Kamilly","Elisa","Luna","Eloá","Joana","Mariane","Bárbara","Juliana","Rayssa","Alana","Ana","Sophia","Ana","Lívia","Caroline","Brenda","Evelyn","Débora","Raquel","Maitê","Ana","Nina","Maria","Sophia","Maria","Cecília","Luiz","Antonella","Jennifer","Betina","Mariah","Sabrina"];

var allName = maleName.concat(femaleName);


var rlastname = ["da Silva","dos Santos","Pereira","Alves","Ferreira","de Oliveira","Silva","Rodrigues","de Souza","Gomes","Santos","Oliveira","Ribeiro","Martins","Gonçalves","Soares","Barbosa","Lopes","Vieira","Souza","Fernandes","Lima","Costa","Batista","Dias","Moreira","de Lima","de Sousa","Nunes","da Costa","de Almeida","Mendes","Carvalho","Araujo","Cardoso","Teixeira","Marques","do Nascimento","Almeida","Ramos","Machado","Rocha","Nascimento","de Araujo","da Conceiçao","Bezerra","Sousa","Borges","Santana","de Carvalho","Aparecido","Pinto","Pinheiro","Monteiro","Andrade","Leite","Correa","Nogueira","Garcia","de Freitas","Henrique","Tavares","Coelho","Pires","de Paula","Correia","Miranda","de Jesus","Duarte","Freitas","Barros","de Andrade","Campos","Sántos","de Melo","da Cruz","Reis","Guimaraes","Moraes","do Carmo","dos Reis","Viana","de Castro","Silveira","Moura","Brito","Neves","Carneiro","Melo","Medeiros","Cordeiro","Conceição","Farias","Dantas","Cavalcante","da Rocha","de Assis","Braga","Cruz","Siqueira"];

















dynamictext();

function dynamictext() {
    var tedite = $('.page-edite').length;
 if(tedite == false){
     
     
     
        $( "[type=dynamic-text]" ).each( function(  ) {  

               $(this).parent().siblings('.dynamic-face.img').addClass('dynamic-face-start');  
    var dynamictextg = $(this).attr('dynamic-text');
     
            

            
          if(dynamictextg == 'randomName'){ 
                 var rfirstname = maleName;
              var sexo =   Math.floor(Math.random() * 2) + 1;
              
        if(sexo == 2){ rfirstname = femaleName;}
               
                 if($(this).hasClass('malename') || rfirstname == maleName){rfirstname = maleName;   $(this).parent().siblings('.dynamic-face.img').addClass('male-face');
               $(this).parent().siblings('.dynamic-face.img').removeClass('female-face');  }  
                if($(this).hasClass('femalename') || rfirstname == femaleName){rfirstname = femaleName;
           $(this).parent().siblings('.dynamic-face.img').removeClass('male-face');  
           $(this).parent().siblings('.dynamic-face.img').addClass('female-face');   } 
              
             
               $(this).parent().siblings('.dynamic-face.img').removeClass('dynamic-face-refresh'); 
              
               $(this).parent().siblings('.dynamic-face.img').removeClass('dynamic-face-start');  
              
      
          setTimeout(function() {      dynamicface();  }, 500);   
        
          
              
          var newtext = rfirstname[Math.floor(Math.random() * rfirstname.length)] ;
      

           
          $(this).text(newtext);
              
           if($(this).hasClass('rlastname')){
         var newtext2 = rlastname[Math.floor(Math.random() * rlastname.length)] ;                            
           $(this).text(newtext+" "+newtext2)                           
                                             
                                             }   
          
          
          }
            
            
             if(dynamictextg == 'dynamicDate'){
             
             
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
 var data =(day<10 ? '0' : '') + day  + '/' +  (month<10 ? '0' : '') + month + '/' + d.getFullYear()  ;
  $(this).text(data);   
             
 }
            
            
            
            
            
               if(dynamictextg == 'dynamicHour'){ 
   var hplus = 0,    mplus = 0;               
  var hplustest = $(this).attr('hours-plus'); 
                   if(hplustest){  hplus = parseInt($(this).attr('hours-plus')); }
                

 var mplustest = $(this).attr('minutes-plus'); 
                   if(mplustest){  mplus = parseInt($(this).attr('minutes-plus')); }
        
            
            var dt = new Date();
//                   var hour0 = (dt.getHours())+hplustest;
//                 var minutes0 = dt.getMinutes()+mplustest;
//                      dt.setHours(hour0);
//            dt.setMinutes(minutes0);
                   
                   
var hour = dt.getHours();
var minutes = dt.getMinutes();
var seconds = '00';
                   
               
// var t1 = dt.setTime(this.getTime() + (2*60*60*1000));
                
// if(mplustest || hplustest){ seconds = 00;}    

        

  var time = hour + ":" + minutes + ":" + seconds;
 $(this).text(time);           
            
            
            }
            
            
            
               if(dynamictextg == 'dynamicNumber'){
                   
                   
                   var min = 0,  max = 1000;
              if($(this).attr('dynamic-number-min')){  min = parseInt($(this).attr('dynamic-number-min')); }
           if($(this).attr('dynamic-number-max')){  max = parseInt($(this).attr('dynamic-number-max')); }
           var number = Math.floor(Math.random() * (max - min + 1) ) + min;
                          if($(this).attr('dynamic-number-start') >= 0){var number = $(this).attr('dynamic-number-start') }
     
                   
               $(this).text(number);      
                   
 }
            
            
            
            
            if(dynamictextg == 'dynamicWords'){
                

                var wrandom = $(this).hasClass('dynamic-words-random');
                 var alldwords = $(this).attr('dynamic-words').split(',');
       
                if(wrandom){
                     
                 var word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ;
                    
                    $(this).text(word1); 
                  
                }
                else{   
                     $(this).text(alldwords[0]); 
                  
                
                    }
         
            }
            
            
  //--
       
        
  });   
    
        

 }
    
}



function dynamictextrefresh() {
    var tedite = $('.page-edite').length;
 if(tedite == false){
     
      $("[type=dynamic-text].dynamic-text-refresh").addClass('dynamic-text-refresh-animation');
     
     
     
              setTimeout(function() { 
      //--------------
     
        $( "[type=dynamic-text].dynamic-text-refresh" ).each( function(  ) {  
 
           
    var dynamictextg = $(this).attr('dynamic-text');
    
            

   
if(dynamictextg == 'randomName'){ 
                var rfirstname = maleName;
              var sexo =   Math.floor(Math.random() * 2) + 1;
              
        if(sexo == 2){ rfirstname = femaleName;}
           
                if($(this).hasClass('malename') || rfirstname == maleName){rfirstname = maleName;   $(this).parent().siblings('.dynamic-face.img').addClass('male-face');
               $(this).parent().siblings('.dynamic-face.img').removeClass('female-face');  }  
                if($(this).hasClass('femalename') || rfirstname == femaleName){rfirstname = femaleName;
           $(this).parent().siblings('.dynamic-face.img').removeClass('male-face');  
           $(this).parent().siblings('.dynamic-face.img').addClass('female-face');   } 
              
              
             $(this).parent().siblings('.dynamic-face.img').addClass('dynamic-face-refresh'); 
            dynamicfacerefresh();   
              
          var newtext = rfirstname[Math.floor(Math.random() * rfirstname.length)] ;
      
          
           
          $(this).text(newtext);
              
           if($(this).hasClass('rlastname')){
         var newtext2 = rlastname[Math.floor(Math.random() * rlastname.length)] ;                            
           $(this).text(newtext+" "+newtext2)                           
                                             
                                             }   
          
          
          }
            
            
 if(dynamictextg == 'dynamicNumber'){ 
    var val =parseInt($(this).text());
       
              var min = 0,  max = 1000, rmax = 5;
       if($(this).attr('dynamic-number-refresh-max')){  rmax = parseInt($(this).attr('dynamic-number-refresh-max')); }           
       if($(this).attr('dynamic-number-min')){  min = parseInt($(this).attr('dynamic-number-min')); }
       if($(this).attr('dynamic-number-max')){  max = parseInt($(this).attr('dynamic-number-max')); }         
                
          var plus  = Math.floor(Math.random() * (rmax - -rmax + 1) ) + -rmax;    
                
         if($(this).hasClass('dynamic-number-up')){ plus  = Math.floor(Math.random() * (rmax - 0 + 1) ) + 0; }
         if($(this).hasClass('dynamic-number-down')){ plus  = Math.floor(Math.random() * (0 - -rmax + 1) ) + -rmax; }        
               
                
                
         
                

                
                if(val+plus < min  && $(this).hasClass('dynamic-number-down') == false){plus = rmax}
               if(val+plus > max && $(this).hasClass('dynamic-number-up') ==  false){plus = rmax * -1}
          
                
      
                
                 console.log('l'+plus);
          if(val+plus < 1){val =min; plus =0;}
                 if(val+plus < min){val =min; plus =0;}
                if(val+plus > max){val =max; plus =0;}
            
                $(this).text(val+plus);
            }
            
  if(dynamictextg == 'dynamicWords'){
                
                var thistext = $(this).text();
                var wrandom = $(this).hasClass('dynamic-words-random');
                 var alldwords = $(this).attr('dynamic-words').split(',');
       
                if(wrandom){
                  var   word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ;
                     
                     if(word1 == thistext){  word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ; }
                    
                     $(this).text(word1);
                 
                    
           
                  
                }
                else{   
                   
                   try {
    alldwords = $(this).attr('dynamic-words').split(thistext+',')[1].split(',');
                  }
       catch (e) {
   alldwords = $(this).attr('dynamic-words').split(',');
                      }
                
                    
                    
                    console.log(alldwords[0]);
                      $(this).text(alldwords[0]); 
                
                    }
         
            }
       
        
            

            
          //-------  
            
              $(this).removeClass('dynamic-text-refresh-animation');
            
      
  });   
    
    }, 300);         

 }
    
}









     //---------------------------------------------------- 

function dynamicface() {
 
 var tedite = $('.page-edite').length;
 if(tedite == false){
     
     setTimeout(function() { 
        $( ".dynamic-face.img:not(.dynamic-face-start) img").each( function(  ) { 
            
            
       if($(this).parent().hasClass('female-face')){
              
                  var imageN =   Math.floor(Math.random() * 10) + 1;   
 $(this).attr('src','/dynamic-faces/f'+imageN+'.jpg') ; 
              
          }
            
            
            
        if($(this).parent().hasClass('male-face')){
    var imageN =   Math.floor(Math.random() * 5) + 1;   
 $(this).attr('src','/dynamic-faces/f'+imageN+'.jpg') ; }
                     
            
     
        else{ 
         var sexo =   Math.floor(Math.random() * 2) + 1;    
        if(sexo == 1){    var imageN =   Math.floor(Math.random() * 5) + 1;   
 $(this).attr('src','/dynamic-faces/m'+imageN+'.jpg') ; }
            
            
        else{  var imageN =   Math.floor(Math.random() * 10) + 1;   
 $(this).attr('src','/dynamic-faces/f'+imageN+'.jpg') ; }  
            
            
        }  
          


    }); 
         
          }, 200);   
 }
        
            
       
}


function dynamicfacerefresh() {
 
 var tedite = $('.page-edite').length;
 if(tedite == false){
     
     setTimeout(function() { 
        $( ".dynamic-face.dynamic-face-refresh.img img").each( function(  ) { 
       if($(this).parent().hasClass('female-face')){
              
                  var imageN =   Math.floor(Math.random() * 10) + 1;   
 $(this).attr('src','/dynamic-faces/f'+imageN+'.jpg') ; 
              
          }
     
        else{ var imageN =   Math.floor(Math.random() * 5) + 1;   
 $(this).attr('src','/dynamic-faces/m'+imageN+'.jpg') ; }

    }); 
         
          }, 100);   
 }
        
            
       
}




// carousel===================================================================



  $('body').delegate('.carousel-dot-right:not(.stoped)','click',function () {
      var stoped = $(this).hasClass('stoped') ;
    var idparent = $(this).parents('.pagee-carousel').attr('id');
      
       var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
      
    var  tw1 = $(this).siblings('.carousel-content').outerWidth();
      var  tw2 = $(this).siblings('.carousel-content').children('.carousel-card').length;
      var  tw3 = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth();
      
      var tw4 = (((tw2*tw3)-tw1)/2)+((cardgap/2)*(tw2-1));
    if(tw1 < 500){     tw4 =tw4-((tw3/2)+(cardgap/2));}

  
      console.log(tw4);



      
        if($(this).parent('.pagee-carousel.carousel-full').length){ 
          $(this).siblings('.carousel-content').scrollLeft(0); 
                                                                }
  if($(this).parent('.pagee-carousel.carousel-full').length == false){ 
      
      if(tw2 % 2 == 1){
          
          tw4 = tw4- ((tw3+cardgap)/2);
           console.log(tw4);
      }
 
      $(this).siblings('.carousel-content').animate({scrollLeft: tw4});  
      

  
  }
   
   

      
      
      var  cardWidth = tw3+cardgap;
          $(this).addClass('stoped');
        setTimeout(function(){  $("#"+idparent+" .carousel-dot-right").removeClass('stoped');     }, 400); 
     

        var firstChildAppend = $("#"+idparent+" .carousel-card:first-of-type()").clone();
      
        $("#"+idparent+" .carousel-card").css('margin-left', '0');
 
      $("#"+idparent+" .carousel-card:first-of-type()").css('margin-left', '-'+cardWidth+'px');

    
       
      $("#"+idparent+" .carousel-content").append(firstChildAppend);
       
          setTimeout(function(){ 
        $("#"+idparent+" .carousel-card:first-of-type()").remove();   
                           }, 400); 
    
    });
  
  
  
  
  
  
  
  
  
    // previous-arrow
    $('body' ).delegate('.carousel-dot-left:not(.stoped)','click',function () {
        var idparent = $(this).parents('.pagee-carousel').attr('id');
      // $(this).parents('.pagee-carousel').addClass('act');
      
        var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
     var  cardWidth = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth()+cardgap;
     
           var lastChildAppend = $("#"+idparent+"  .carousel-card:last-child()").clone();
      $("#"+idparent+" .carousel-content").prepend(lastChildAppend);
     
           $("#"+idparent+"  .carousel-card:first-child()").css('margin-left', '-'+cardWidth+'px');
   
        setTimeout(function(){     $("#"+idparent+"  .carousel-card").css('margin-left', '0');}, 10);
       $( "#"+idparent+"  .carousel-card:last-child()").remove(); 
      
    $(this).addClass('stoped');
    setTimeout(function(){  $("#"+idparent+" .carousel-dot-left").removeClass('stoped');     }, 400); 
  
    
    });



  $('body:not(.page-edite) .pagee-carousel:not(:hover) .carousel-dot-right').trigger('click');

setInterval(function () {
    $('body:not(.page-edite) .pagee-carousel.carousel-auto:not(:hover) .carousel-dot-right').trigger('click');
}, 2000);





//fim carousel===================================================================








elem3d() ;


function elem3d() {
$( ".mockup-3d" ).each( function(  ) {  
  var wi = $(this).outerWidth();
    var scale = $(this).attr('data-3dscale');
   
  $(this).children().children('.mockup-3d-center').css('transform', 'scale('+((wi/1000)/100)*(scale)+')');
   
  }); 
}









 $( "html" ).delegate('body:not(.page-edite) [data-btn-modal-show]','click', function(  ) {  
        
      var modalshoww = $(this).attr('data-btn-modal-show');
      
     
     $('.pmodal-content').removeClass('modal-open');

$('[data-code-id='+modalshoww+']').addClass('modal-open');
	 
	 setTimeout(function () {
pageeprogbar('.modal-open');}, 20);

  }); 


 modalload(); 

function modalload() {
$('.modal-show-load').addClass('modal-open');
}






//NOTE countdown

function countdown() {
   var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  
$( '.pagee-countdown' ).each( function(  ) {  
var tthis = $(this);
  var EVENTDATE = new Date();
 var now = new Date().getTime();
 
  
  
if($(this).attr('todate')){  EVENTDATE = $(this).attr('todate');
         var countDown = new Date(EVENTDATE).getTime();  }
  
if($(tthis).attr('countdowntime')){ 
 var  t1 = $(this).attr('countdowntime').split(':');
	var th = parseInt(t1[0] * 60 * 60);
	var tm = parseInt(t1[1] * 60);
	var ts =parseInt(t1[2]);
	
var  dtime = (th+tm+ts) * 1000;
	console.log(dtime);
 if($(tthis).attr('startcountdown') == undefined){ 
 var scountDown = new Date().getTime() + dtime;
 $(tthis).attr('startcountdown', scountDown); 
}
    
var countDown = $(tthis).attr('startcountdown');
  }
      
  
  
     if( (countDown - now) <= 0 ){ countDown = now;
     if($(tthis).hasClass('pagee-countdown-master')) {  $('.finalcountdown-show').addClass('finalcountdown-act');
		$('.finalcountdown-hidden').addClass('finalcountdown-act');
										  
	 }   
								  
		 var countredirect =	$(tthis).attr('countdown-redirect');
								  if(countredirect){
									  if( $('body.pagee-plataforma').length){ 
										   if( $('body.pagee-plataforma.page-preview:not(.coundownredirectgo)').length){
											   $('body.page-preview').addClass('coundownredirectgo');
											   alert('O visitante foi redirecionado para '+countredirect); }
										 }
									  else{  window.location = "http://www.google.com";}
									
								  }
	}
	
	
  var distance = countDown - now;  
	
	var days = Math.floor(distance / day) ;
	if(days < 10){days = '0'+days}
        $(this).find(".pagee-countdown-days").text( days);
	
		var hours = Math.floor((distance % day) / (hour));
	if(hours < 10){hours = '0'+hours}
     $(this).find(".pagee-countdown-hours").text(hours);
	
	var min = Math.floor((distance % hour) / (minute));
	if(min < 10){min = '0'+min}
        $(this).find(".pagee-countdown-minutes").text(min);
	
	var seg = Math.floor((distance % minute) / second);
	if(seg < 10){seg = '0'+seg}
       $(this).find(".pagee-countdown-seconds").text(seg);
 
  
	    }); 	  
  
  
  
}



//imgzoom








$("html").delegate('body:not(.page-edite) .img-zoom','click', function () {
var imgsrc = $(this).find('img').attr('src');
var ffilter = $(this).find('img').css('filter');	
	

	

	
	
	
$(this).parents('#body').append('<div class="img-zoom-content"><div class="imgzoomeffects"><div class="imgonzoom" style="filter:'+ffilter+'; background-image: url('+imgsrc+')"></div> <svg class="zoomicon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" contenteditable="false"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" contenteditable="false"></path></svg></div></div>'); 
	
if($(this).hasClass('flip-vertical')){ $('.imgonzoom').addClass('flip-vertical')}
if($(this).hasClass('flip-horizontal')){ $('.imgonzoom').addClass('flip-horizontal')}	
	
	setTimeout(function () {
		 $(".img-zoom-content").addClass('act');
}, 50);
});

$("body").delegate('.img-zoom-content','click',function () {

 $(".img-zoom-content").removeClass('act');
 setTimeout(function () {
		 $(".img-zoom-content").remove();
}, 500);
});









$('body ').delegate('.block-tab-head-btn','click', function() {
	
  $(this).addClass('tab-act');
	 $(this).siblings().removeClass('tab-act');
	$(this).parents('.block-tab-head').siblings().removeClass('tab-act');
	
	if( $(this).hasClass('btn-btsa')){ $(this).parents('.block-tab-head').siblings('.btsa').addClass('tab-act');}
	else{$(this).parents('.block-tab-head').siblings('.btsb').addClass('tab-act');}
 
    });








$('body ').delegate('.video-float-label-btn','click', function() {
	
	var val =  $(this).closest('.video').hasClass('video-ocultar');
	
	if(val){ $('.video-ocultar').removeClass('video-ocultar');}
	else{ $(this).closest('.video').addClass('video-ocultar');}
 

 
    });















