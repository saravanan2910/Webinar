﻿var MYAPP={};(function(e){"use strict";MYAPP.instaFeed={count:0,prefix:"instagramFeed_",clientId:"d6586b353e88498d9ade1f458d5bca65"};MYAPP.carouselsAuto={featuredWorkCarousel:false,latestWorkCarousel:true,decoprocesxsCarousel:false,testimonialsCarousel:true,browserSlider:true,portfolioFeaturedWorkCarousel:true};if(typeof NProgress!=="undefined"){e("body").addClass("loading");NProgress.start();setTimeout(function(){if(!MYAPP.isPageLoaded)NProgress.inc()},500);setTimeout(function(){if(!MYAPP.isPageLoaded)NProgress.inc()},1e3);setTimeout(function(){if(!MYAPP.isPageLoaded)NProgress.inc()},1500)}e(window).load(function(){MYAPP.isPageLoaded=true;if(typeof NProgress!=="undefined"){NProgress.done()}e("#loader").remove();e("body").removeClass("loading");if(e("#page").css("opacity")<1)e("#page").animate({opacity:1},500)});jQuery(document).ready(function(){if(MYAPP.isMobile){for(var t in MYAPP.carouselsAuto)MYAPP.carouselsAuto[t]=false;e(".animate").each(function(){e(this).removeClass("animate")});e(".animateFast").each(function(){e(this).removeClass("animateFast")})}else{e(".latestWorkContainer").addClass("notMobile")}e("body").append('<script src="demo/configPanel.js"></script>');e(".tooltip_top").tooltip({placement:"top"});e(".tooltip_bottom").tooltip({placement:"bottom"});e(".tooltip_left").tooltip({placement:"left"});e(".tooltip_right").tooltip({placement:"right"});e(window).on("resize",function(){if(e(window).width()<768){if(e(".ournewslider").length<1){var t=e(".decoAvatarsFixed").clone().addClass("ournewslider");e(".decoAvatarsFixed").prev(".decoAvatarsSlider").prepend(t)}var t=".ournewslider";imagesLoaded(e(t),function(n){e(t).carouFredSel({items:1,auto:MYAPP.carouselsAuto["decoprocesxsCarousel"],responsive:true,scroll:{items:1,fx:"scroll",onBefore:function(t){e(e(t.items.visible[0])).tab("show")},easing:"cubic"},pagination:{container:".sliderPagination",anchorBuilder:function(e,t){return'<a href="#"></a>'}},prev:{button:function(){return e(this).closest(".decoAvatarsSlider").find(".Prev")},key:"left"},next:{button:function(){return e(this).closest(".decoAvatarsSlider").find(".Next")},key:"right"}})})}});e("a[href^='#']").click(function(){e(e(this).attr("href")).animatescroll();return false});e(".menu_trigger").on("click",function(t){t.stopPropagation();e("body").addClass("menuOpened")});e(".menu").on("click",function(t){if(t.target.id==="menuClose")e("body").removeClass("menuOpened");else t.stopPropagation()});e(document).on("click",".menuOpened #page",function(){e("body").removeClass("menuOpened")});e(document).on("click",".menuOpened a",function(e){e.preventDefault()});e("#mainMenu li a").click(function(){e("#mainMenu li a").removeClass("active");e(this).addClass("active");var t=e(this).attr("href");e(t).animatescroll();setTimeout(function(){e("body").removeClass("menuOpened")},1200);return false});var n,r=e("#mainMenu"),i=r.find("a"),s=i.map(function(){var t=e(e(this).attr("href"));if(t.length){return t}});e(window).scroll(function(){var t=e(this).scrollTop();var o=e("#header").hasClass("menuStyle2")||e("#header").hasClass("menuStyle3")?e("#header .menu").height():0;var u=s.map(function(){if(e(this).offset().top-o<=t){return this}});u=u[u.length-1];var a=u&&u.length?u[0].id:"";if(n!==a){n=a;r.find("a").removeClass("active");i.parent().end().filter("[href=#"+a+"]").addClass("active")}});e(window).scroll(function(){if(e(this).scrollTop()>MYAPP.menuScrollSmall){e("#header").addClass("smaller")}else{e("#header").removeClass("smaller")}});e("*[data-parallax-speed]").each(function(){e(this).parallax("50%",e(this).data("parallax-speed"))});e(".contactForm").on("submit",function(t){t.preventDefault();e("#contactResponse .alert").alert("close");var n=e("input[name=name]").val();var r=e("input[name=email]").val();var i=e("textarea[name=message]").val();var s=true;if(n==""){e("input[name=name]").css("border-color","red");s=false}if(r==""){e("input[name=email]").css("border-color","red");s=false}if(i==""){e("textarea[name=message]").css("border-color","red");s=false}if(s){e(".contactForm .contactBusy").css({display:"block"});var o={name:n,email:r,message:i};e.post("contact.php",o,function(t){e(".contactForm .contactBusy").css({display:"none"});e("#contactResponse").html(t);e("#contactResponse").alert();e("#contactForm input").val("");e("#contactForm textarea").val("")}).fail(function(t){e(".contactForm .contactBusy").css({display:"none"});e("#contactResponse").html('<div class="alert alert-danger alert-dismissable fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Error! </strong>'+t.statusText+"</div>");e("#contactResponse").alert()})}});e(".sectionInfo").attr("data-appear","fade-in").attr("data-appear-direction","bottom");if(!MYAPP.isMobile){e('*[data-appear="fade-in"]').each(function(){var t=e(this).data("appear-delay")||0;var n=e(this).data("appear-direction")||"none";e(this).css({opacity:"0",visibility:"hidden"});switch(n){case"top":e(this).css({position:"relative",top:-e(this).height()/2+"px"});break;case"right":e(this).css({position:"relative",right:-e(this).width()/2+"px"});break;case"bottom":e(this).css({position:"relative",bottom:-e(this).height()/2+"px"});break;case"left":e(this).css({position:"relative",left:-e(this).width()/2+"px"});break}e(this).waypoint(function(r){e(this).css({visibility:"visible"});if(r=="down"){switch(n){case"top":e(this).delay(t).animate({opacity:1,top:0},800);break;case"right":e(this).delay(t).animate({opacity:1,right:0},800);break;case"bottom":e(this).delay(t).animate({opacity:1,bottom:0},800);break;case"left":e(this).delay(t).animate({opacity:1,left:0},800);break;default:e(this).delay(t).animate({opacity:1},800)}e(this).waypoint("destroy")}},{offset:function(){switch(n){case"top":return e.waypoints("viewportHeight")-e(this).height();break;case"bottom":return e.waypoints("viewportHeight");break;default:return e.waypoints("viewportHeight")-Math.min(e(this).height()/2,150);break}}})})}});e.easing["jswing"]=e.easing["swing"];e.extend(e.easing,{easeInOutBack:function(e,t,n,r,i,s){if(s===undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n}});e.fn.animatescroll=function(t){var n=e.extend({},e.fn.animatescroll.defaults,t);if(n.element==="html,body"){var r=this.offset().top;var i=e("#header").hasClass("menuStyle2")||e("#header").hasClass("menuStyle3")?60:0;e(n.element).stop().animate({scrollTop:r-(n.padding+i)},n.scrollSpeed,n.easing)}else{e(n.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-n.padding},n.scrollSpeed,n.easing)}};e.fn.animatescroll.defaults={easing:"swing",scrollSpeed:1200,padding:0,element:"html,body"}})(jQuery)