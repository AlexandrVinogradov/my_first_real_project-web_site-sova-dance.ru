'use strict'
// скрипты для хедера

import $ from 'jquery';
import Swiper from 'swiper';
import slick from './slick.min.js'
 
global.jQuery = $;
global.$ = $;

if( $(window).width() >= 1200) {
		$('.js-lang').click(function(evt) {
		evt.preventDefault();
		$(this).toggleClass('active');
	
	});

}


$('.mobile-nav__button').click(function(evt) {
    evt.preventDefault();
    $('.header-wrapper__bottom-menu').toggleClass('close');
    $('.mobile-nav__button').toggleClass('open');
})

function topMain() {
	var heightHeader = $('.page-header').outerHeight() + 'px';
	$('.first-screen').css('top', heightHeader);
	$('main').css('padding-top', heightHeader);
}

topMain();

$(".cont a").click(function () {
    var elementClick = $(this).attr("href");
    var heightHeader = $('.page-header').outerHeight();
    var destination = $(elementClick).offset().top - heightHeader;
    console.log(destination);
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});

var heightHeader = $('.page-header').outerHeight() + 'px';
$('.page-header__mob-button').click(function(evt) {
	evt.preventDefault();
	$('.page-header__container').toggleClass('active');
	$('.page-header-nav').css('top', heightHeader);
	var topLang = $('.page-header').outerHeight() + $('.page-header-nav ul').outerHeight() + 40;
	$('.js-lang').css('top', topLang + 'px');
});

if($(window).width() < 1200) {
		$('.lang-link').click(function(evt) {
		evt.preventDefault();
		$('.lang-link').removeClass('active-lang');
		$(this).addClass('active-lang');
	});
}

// слайдер партнеров на мобилке на главной
$('.logo-slider').slick({
    responsive: [
    {
        breakpoint: 9500,
        settings: "unslick"
    },
    {
       breakpoint: 1200,
       settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true
    	}
	},]
          
});

// слайдер мероприятий на десктопе
$('.events-desk__slider').slick({
	dots: false,
	arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1200,
        settings: "unslick"
    }
   ]       
});

// слайдер в футере на мобилке


$('.slider-mobile-footer').slick({
	responsive: [
	{
	    breakpoint: 9500,
	    settings: "unslick"
	},
	{
	   breakpoint: 1200,
	   settings: {
	      infinite: false,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false,
	      dots: true,
		}
	},]   
});

// скрипты футер

$(".scroll-top").click(function(evt) {
    evt.preventDefault();
    $("body, html").animate({
        scrollTop:0
    }, 800);
    return false;
});

// блок экономика Индонезии на главной

function diagram() {
	var count = $('.diagram-item__wrap i');
	var maxCount = Number($(count[0]).text());
	var minCount = Number($(count[0]).text());
	var temp = '';

	for(var i = 0; i < count.length; i++) {
		temp = Number($(count[i]).text());
		if(temp > maxCount) {
			maxCount = temp;
		}
		if(temp < minCount) {
			minCount = temp;
		}
	}

	var number = 0;
	var currentWidth = 0;
	$('.diagram-lenght').each(function() {
		number = Number($(this).siblings('.diagram-count').find('i').text());
		currentWidth = 240 * number / maxCount;
		$(this).css('width', currentWidth + 'px'); 
	});

	return false;
}

diagram();

// экономика индонезии слайдер

$('.economy-slider').slick({
    responsive: [
    {
        breakpoint: 9500,
        settings: "unslick"
    },
    {
       breakpoint: 1200,
       settings: {
          dots: true,
          //centerMode:true,
          //centerPadding: '40px',
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  arrows: false,
	
    	}
	},]
          
});

//слайдер на типовой странице новости

$('.news-item-slider').on('init reInit', function(event, slick) {
  $('.counter').text(1 + ' / ' + slick.slideCount);

})
$('.news-item-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
 
})

$('.news-item-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});

// скрипт для демо!!! фильтрации на станицы Сделано в России

$('.page-company__filter-list > li').click(function(evt) {
	evt.preventDefault();
	$('.page-company__filter-list > li').removeClass('active');
	$(this).addClass('active');
	if($(this).attr('data-value') == 'all') {
		$('.page-company__content-items > a').css('display', 'flex');
		$('.pagination-list').css('visibility', 'visible');	
	} else {
		$('.page-company__content-items > a').css('display', 'none');
		$("[data-name='"+ $(this).attr('data-value') + "']").css('display', 'flex');
		$('.pagination-list').css('visibility', 'hidden');	
	}
});

// выпадашка регионы,религии
$('.top-menu__mobile span').click(function() {
	$('.top-menu__mobile > ul').toggleClass('none');
	$('.top-menu__mobile span').toggleClass('rotate');
})

$('.table-container__select > span').click(function() {
	$('.table-container__select ul').toggleClass('none');
	$('.table-container__select > span').toggleClass('rotate');
})

$('.table-container__select ul > li').click(function(evt) {
	evt.preventDefault();
	$('.table-container__select ul > li').removeClass('active');
	$(this).addClass('active');
	$('.table-container__select ul').addClass('none');
	$('.table-container .table-item').css('display', 'none');
	$("[data-name='"+ $(this).attr('data-value') + "']").css('display', 'block');
	var value = $(this).text();
	$('.table-container__select > span').html(value);
	$('.table-container__select > span').removeClass('rotate');
});


//скролл 
$(function(){
$("a[href^='#anchor']").click(function(){
	    var _href = $(this).attr("href");
	    $("html, body").animate({scrollTop: ($(_href).offset().top - $('.page-header').outerHeight() - 40) + "px"});
	    $('.page-header-nav').removeClass('page-header-nav--opened');
	    $('.page-header__container button').removeClass('open');
	    return false;
    
	});
});




//демо скрипты для страницы новостей

$('.page-news__link').click(function(e) {
	e.preventDefault();
	$('.page-news__container.page-news__container-demo').slideDown();
	$(this).css('display','none');
})

// карта мобилка

$('.page-map__mob-list > span').click(function(e) {
	e.preventDefault();
	$('.page-map__mob-list').toggleClass('check');
})

$('.page-map__mob-list > ul li').click(function(e) {
	e.preventDefault();
	$('.page-map__mob-item').css('display','none');
	$("#" + $(this).attr('data-name')).show();
	$('.page-map__mob-list').removeClass('check');
	$('.page-map__mob-list > ul li').removeClass('active');
	$(this).addClass('active');
	var value1 = $(this).text();
    $('.page-map__mob-list > span').html(value1);
})

$(".roster__all-name").click(function(e) {
    e.preventDefault();
    $(".roster__all-container").toggleClass("check");
    $(".roster__theme-container").removeClass("check");
    $(".roster__region-container").removeClass("check");

    $(document).mouseup(function (e){ 
        var div = $('.roster__all-name'); 
        var div_2 = $('.roster__all-list'); 
        if (!div.is(e.target) && div.has(e.target).length === 0 && !div_2.is(e.target) && div_2.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
            // div.hide(); // 
            $(".roster__all-container").removeClass("check");
        }
    });
});

$("input[name='all']").change(function(evt) {
    var value = $(this).val();
    $(this).parent(".roster__all-list").siblings(".roster__all-name").text(value);
    $(this).parent(".roster__all-list").parent(".roster__all-container").removeClass("check");
});


$(".roster__region-name").click(function(e) {
    e.preventDefault();

    // console.log($(".roster__region-container").hasClass("check"));

    if($(".roster__region-container").hasClass("check")) {
        var checked_inputs = $("input[name='region']:checked");
        if (checked_inputs.length > 1) {
            $("span.roster__region-name").text("Выбрано несколько");
            $(".roster__region-container").removeClass("check");
        } else if (checked_inputs.length == 1) {
            var checked_value = $("input[name='region']:checked").val();
            $("span.roster__region-name").text(checked_value);
            $(".roster__region-container").removeClass("check");
        } else {
            $("span.roster__region-name").text("Все рубрики");
            $(".roster__region-container").removeClass("check");
        }
        $(".roster__region-container").removeClass("check");
        return false;
    } 
    
    $(".roster__region-container").addClass("check");

    // if($(".roster__region-container").hasClass('check')) {
    //     $(".roster__region-container").removeClass("check");
    // } else {
    //     $(".roster__region-container").addClass("check"); 
    // };
   
    //$(".roster__region-container").toggleClass("check");
    //$(".roster__theme-container").removeClass("check");
    //$(".roster__all-container").removeClass("check");
    //var checked_inputs = $("input[name='region']:checked");
});

$(document).mouseup(function (e){ 
    var div = $('.roster__region-list'); 
    var div_2 = $('.roster__region-list > div');
    var div_3 = $(".roster__region-name");
    if (!div.is(e.target) && div.has(e.target).length === 0 && !div_2.is(e.target) && div_2.has(e.target).length === 0 && !div_3.is(e.target) && div_3.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
        // div.hide();
        $(".roster__region-container").removeClass("check");
        var checked_inputs = $("input[name='region']:checked");
        if (checked_inputs.length > 1) {
            $("span.roster__region-name").text("Выбрано несколько");
            $(".roster__region-container").removeClass("check");

        } else if (checked_inputs.length == 1) {
            var checked_value = $("input[name='region']:checked").val();
            $("span.roster__region-name").text(checked_value);
            $(".roster__region-container").removeClass("check");
        } else {
            $("span.roster__region-name").text("Все рубрики");
            $(".roster__region-container").removeClass("check");
        }
    }
});



$("input[name='theme']").change(function(evt) {
    var value = $(this).val();
    $(this).parent(".roster__theme-list").siblings(".roster__theme-name").text(value);
    $(this).parent(".roster__theme-list").parent(".roster__theme-container").removeClass("check");
});



$("div.registration-form__answers").not("#profile-actions").click(function(e) {
    e.preventDefault();

    if($(this).hasClass("registration-form__answers-town")) {
        if(!$("input[name='notary1_value']").is(':checked')) {
            return false;
        }
    }

    if($(this).hasClass("registration-form__answers-not")) {
        if(!$("input[name='notary2_value']").is(':checked')) {
            return false;
        }
    }

    if ($(this).hasClass("check")) {
        $(this).removeClass("check");
        if ($(this).find(".registration-form__value").text() == 'РќРµ РІС‹Р±СЂР°РЅРѕ') {
            $(this).find(".registration-form__value").text('');
            $(this).find(".registration-form__value").removeClass("registration-form__value--filled");
            $(this).find("span.registration-form__title-span").removeClass("registration-form__title-span--opened");
            $(this).find("input[type='checkbox']").prop('checked', false);
        }
        

    } else {
        $(this).find("span.registration-form__title-span").addClass("registration-form__title-span--opened");
        var old_input = $(this).find(".registration-form__answers-list input[type='radio']:checked").val();
        if (old_input == null) {
            $(this).find(".registration-form__value").text('РќРµ РІС‹Р±СЂР°РЅРѕ');
            $(this).find(".registration-form__value").addClass("registration-form__value--filled");
        }
        $(".registration-form__answers").removeClass("check");
        $(this).addClass("check");

        $(this).find(".registration-form__answers-list label").click(function() {
            $(this).parent("div.registration-form__answers").removeClass("check");
            var input = $(this).find("input").val();
            $(this).find("input").attr("checked", "checked");

            if (input == '') {
                $(this).closest(".registration-form__answers").find(".registration-form__value").text('РќРµ РІС‹Р±СЂР°РЅРѕ');
                $(this).closest(".registration-form__answers-list").siblings("input[type='checkbox']").prop('checked', false);
            } else {
                $(this).closest(".registration-form__answers").find(".registration-form__value").text(input);
                $(this).closest(".registration-form__answers-list").siblings("input[type='checkbox']").prop('checked', true);
                if($(this).closest(".registration-form__answers").hasClass("registration-form__answers-town")) {
                    $("#map-container").append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A22433429057c554dddfeba4a839ca70b3392951f5174a99f23ded706f977a6a1&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>');
                    $("#map-container").removeClass('none');
                }
            }
        });
    }

    $(document).mouseup(function (e){ // СЃРѕР±С‹С‚РёРµ РєР»РёРєР° РїРѕ РІРµР±-РґРѕРєСѓРјРµРЅС‚Сѓ
        var div = $("div.registration-form__answers"); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј РєР»Р°СЃСЃ СЌР»РµРјРµРЅС‚Р°
        //var div_2 = $('.roster__theme-list'); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј РєР»Р°СЃСЃ СЌР»РµРјРµРЅС‚Р°
        if (!div.is(e.target) && div.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
            $("div.registration-form__answers").removeClass("check");
        } 
    });

});



$("#profile-actions > span").click(function(e) {
    e.preventDefault();

    console.log('1');

    //Р”РѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃ, РєРѕС‚РѕСЂС‹Р№ РѕС‚РєСЂС‹РІР°РµС‚ СЃРїРёСЃРѕРє
    $("#profile-actions > span").parent("#profile-actions").addClass("check");
    //Р”РѕР±Р°РІР»СЏРµС‚ РєР»Р°СЃСЃ, РєРѕС‚РѕСЂС‹Р№ РїРѕР»РЅРёРјР°РµС‚ РЅР°РґРїРёСЃСЊ РІРІРµСЂС…
    $("#profile-actions > span").find("span.registration-form__title-span").addClass("registration-form__title-span--opened");
    //Р”РѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃ, РєРѕС‚РѕСЂС‹Р№ РјРµРЅСЏРµС‚ СЃС‚РёР»Рё РґР»СЏ РІС‹Р±СЂР°РЅРЅРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ 
    $("#profile-actions > span").find(".registration-form__value").addClass("registration-form__value--filled");
    //РњРµРЅСЏРµРј Р·РЅР°С‡РµРЅРёРµ
    $("#profile-actions > span").find(".registration-form__value").text('РќРµ РІС‹Р±СЂР°РЅРѕ');

    //РћС‚Р»Р°РІР»РёРІР°РµРј РєР»РёРєРё РїРѕ РїСѓРЅРєС‚Р°Рј СЃРїРёСЃРєР°
    $("#profile-actions > span").siblings(".registration-form__answers-list").find("input[name='notary_2']").change(function() {
        //console.log('2');
        $(this).parent('label').toggleClass("checkbox--checked");
    });

  

    // $(".registration-link__accept").click(function(evt) {
    //     evt.preventDefault();
    //     $(this).closest("#profile-actions").removeClass("check");
    //       var checked_inputs = $("input[name='notary_2']:checked");
    // if (checked_inputs.length > 1) {
    //     $(".registration-form__value").text("Р’С‹Р±СЂР°РЅРѕ РЅРµСЃРєРѕР»СЊРєРѕ");
    //     $("#profile-actions").removeClass("check");
    // } else if (checked_inputs.length == 1) {
    //     var checked_value = $("input[name='notary_2']:checked").val();
    //     $(".registration-form__value").text(checked_value);
    //     $("#profile-actions").removeClass("check");
    // } else {
    //     $(".registration-form__value").text("РќРµ РІС‹Р±СЂР°РЅРѕ");
    //    $("#profile-actions").removeClass("check");
    // }

    // $("#profile-actions > span").siblings(".registration-form__answers-list").find("input[name='notary_2']").change(function() {
    //     //console.log('2');
    //     $(this).parent('label').toggleClass("checkbox--checked");
    // });
    // });


    //if ($(this).hasClass("check")) {
        //$(this).removeClass("check");
        //if ($(this).find(".registration-form__value").text() == 'РќРµ РІС‹Р±СЂР°РЅРѕ') {
        //    $(this).find(".registration-form__value").text('');
        //    $(this).find(".registration-form__value").removeClass("registration-form__value--filled");
        //    $(this).find("span.registration-form__title-span").removeClass("registration-form__title-span--opened");
        //    $(this).find("input[type='checkbox']").prop('checked', false);
        //}
    //} else {
        //$(this).find("span.registration-form__title-span").addClass("registration-form__title-span--opened");
        //var old_input = $(this).find(".registration-form__answers-list input[type='checkbox']:checked").val();

        //console.log(old_input);
        
        //if (old_input == null) {
        //    $(this).find(".registration-form__value").text('РќРµ РІС‹Р±СЂР°РЅРѕ');
        //    $(this).find(".registration-form__value").addClass("registration-form__value--filled");
        //}
        //$(".registration-form__answers").removeClass("check");
        //$(this).addClass("check");

        //$(this).find(".registration-form__answers-list label").click(function() {
            // $(this).parent("div.registration-form__answers").removeClass("check");
            //var input = $(this).find("input").val();
            // $(this).find("input").attr("checked", "checked");

            // console.log(input);

            //if (input == '') {
            //    $(this).closest(".registration-form__answers").find(".registration-form__value").text('РќРµ РІС‹Р±СЂР°РЅРѕ');
            //     $(this).closest(".registration-form__answers-list").siblings("input[type='checkbox']").prop('checked', false);
            //} else {
            //     $(this).closest(".registration-form__answers").find(".registration-form__value").text(input);
            //     $(this).closest(".registration-form__answers-list").siblings("input[type='checkbox']").prop('checked', true);
            //     if($(this).closest(".registration-form__answers").hasClass("registration-form__answers-town")) {
            //         $("#map-container").append('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A22433429057c554dddfeba4a839ca70b3392951f5174a99f23ded706f977a6a1&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>');
            //         $("#map-container").removeClass('none');
            //     }
            //}
        //});
    //}

    $(document).mouseup(function (e){ // СЃРѕР±С‹С‚РёРµ РєР»РёРєР° РїРѕ РІРµР±-РґРѕРєСѓРјРµРЅС‚Сѓ
        var div = $("div.registration-form__answers"); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј РєР»Р°СЃСЃ СЌР»РµРјРµРЅС‚Р°
        var div_2 = $('.roster__theme-list'); // С‚СѓС‚ СѓРєР°Р·С‹РІР°РµРј РєР»Р°СЃСЃ СЌР»РµРјРµРЅС‚Р°
        if (!div.is(e.target) && div.has(e.target).length === 0) { // Рё РЅРµ РїРѕ РµРіРѕ РґРѕС‡РµСЂРЅРёРј СЌР»РµРјРµРЅС‚Р°Рј
            $("div.registration-form__answers").removeClass("check");
        } 
    });

});






// карта
/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */

var VectorCanvas = function (width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }
      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }
  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }
  if (minValue) {
    this.setMin(minValue);
  }
  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function (params) {
  params = params || {};
  var map = this;
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if( !mapData){
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;

  this.container = params.container;

  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;

  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);

  this.width = params.container.width();
  this.height = params.container.height();

  this.resize();

  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if(newWidth && newHeight){
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();

      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if(mapPins){
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });

  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);

  this.makeDraggable();

  this.rootGroup = this.canvas.createGroup(true);

  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });

    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = jQuery.Event('labelShow.jqvmap'),
      regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');

    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);
      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }
      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);

      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {

    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');

    code = code.toLowerCase();

    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if ( !params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if ( !mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if(left < 0) {
          left = e.pageX + 15;
        }
        if(top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);

  this.canvas.canvas.appendChild(this.rootGroup);

  this.applyTransform();

  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for(var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if(params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };

    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if(params.showLabels){
    this.pinHandlers = false;

    var pins = {};
    for (key in map.countries){
      if (typeof map.countries[key] !== 'function') {
        if( !params.pins || !params.pins[key] ){
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };

    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};

JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function(){

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#4A4A54',
      color: '#3D3D45',
      hoverColor: '#4A4A54',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
      typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new JQVMap(defaultParams);

      this.data('mapObject', map);

      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);

      return map;
    }
  };

})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;
  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }
  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;
  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }
  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;
  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }
  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;
  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }
  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }
  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;
  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }
  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;
  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }
  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function(){
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function(){
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function(cc){
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function(){
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && (cc in this.hoverColors)) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
    path.setPin(path.getPathId());
  }
};

JQVMap.prototype.isSelected = function(cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;

  self.isMoving = false;
  self.isMovingTimeout = false;

  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;

  this.container.mousemove(function (e) {

    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;

      self.applyTransform();

      oldPageX = e.pageX;
      oldPageY = e.pageY;

      self.isMoving = true;
      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;

  }).mousedown(function (e) {

    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;

    return false;

  }).mouseup(function () {

    mouseDown = false;

    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);

    return false;

  }).mouseout(function () {

    if(mouseDown && self.isMoving){

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);

      return false;
    }
  });

  jQuery(this.container).bind('touchmove', function (e) {

    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {

        if(touchX === touches[0].pageX && touchY === touches[0].pageY){
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;

        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;

        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;

    } else if (touches.length === 2) {

      if (lastTouchCount === 2) {
        scale = Math.sqrt(
            Math.pow(touches[0].pageX - touches[1].pageX, 2) +
            Math.pow(touches[0].pageY - touches[1].pageY, 2)
          ) / touchStartDistance;

        self.setScale(
          touchStartScale * scale,
          touchCenterX,
          touchCenterY
        );

        e.preventDefault();

      } else {

        offset = jQuery(self.container).offset();
        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;

        touchStartDistance = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        );
      }
    }

    lastTouchCount = touches.length;
  });

  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });

  jQuery(this.container).bind('touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function(pins, pinMode){
  var map = this;

  if(!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
    pinMode = 'content';
  }

  if(pinMode === 'content') {//treat pin as content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else { //treat pin as id of an html content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }
      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();
  if(!this.pinHandlers){
    this.pinHandlers = true;
    var positionFix = function(){
      map.positionPins();
    };
    this.container.bind('zoomIn', positionFix)
      .bind('zoomOut', positionFix)
      .bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);
    var bbox = countryObj[0].getBBox();

    var scale = map.scale;
    var rootCoords = map.canvas.rootGroup.getBoundingClientRect();
    var mapCoords = map.container[0].getBoundingClientRect();
    var coords = {
      left: rootCoords.left - mapCoords.left,
      top: rootCoords.top - mapCoords.top
    };

    var middleX = (bbox.x * scale) + ((bbox.width * scale) / 2);
    var middleY = (bbox.y * scale) + ((bbox.height * scale) / 2);

    pinObj.css({
      left: coords.left + middleX - (pinObj.width() / 2),
      top: coords.top + middleY - (pinObj.height() / 2)
    });
  });
};

JQVMap.prototype.removePin = function(cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function(){
  this.container.find('.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }
  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
  this.zoomCurStep = 1;
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;
  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }
  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);
    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }
  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);
  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
    path.unsetPin(path.getPathId());
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);

    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);

    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }
  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }
    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }
    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    //test
    node.setPin = function(id) {
        var pinId = '#' + id + '_pin';
        if(jQuery(pinId)) {
            jQuery(pinId).find('.map-pin').attr('style', 'background-image:url("img/pin-2.svg")');
        }
    }

    node.unsetPin = function(id) {
        var pinId = '#' + id + '_pin';
        if(jQuery(pinId)) {
            jQuery(pinId).find('.map-pin').attr('style', 'background-image:url("img/pin.svg")');
        }
    }

    node.getPathId = function () {
      return this.getAttribute('id');
    };
    //end of the test

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);

    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';

    node.appendChild(scale);

    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };
    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };
    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
    };
  }
  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0, cy = 0, ctrlx, ctrly;

  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;

  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';
    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');
      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }
      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }
  this.width = width;
  this.height = height;
};

/*
* Map of Indonesia
* Author : Anggi Prima Nadvi Lubis <https://www.github.com/aa-lubis>
*/

var currentPaths = {
    path01: {
        name: "Aceh",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m33.03 8.63c-0.38 -0.02 -0.81 0.09 -1.33 0.30 -1.39 0.57 -1.52 1.14 -0.60 2.47 0.95 1.36 2.00 1.44 3.37 0.26L35.48 10.79 34.73 9.77C34.17 9.01 33.67 8.65 33.03 8.63Zm-9.17 4.79c-0.55 0.10 -0.60 0.99 -0.06 2.01 0.59 1.10 2.50 0.79 2.50 -0.41 0.00 -0.68 -0.92 -1.35 -2.18 -1.60 -0.10 -0.02 -0.19 -0.02 -0.27 -0.01zm13.25 3.11c-0.66 -0.02 -1.45 0.31 -2.99 1.10 -1.23 0.63 -2.80 1.24 -3.50 1.36l-1.26 0.22 0.07 1.97c0.04 1.08 0.07 3.26 0.08 4.85 0.01 2.14 0.20 3.21 0.72 4.18 0.38 0.71 0.81 1.93 0.96 2.70 0.14 0.77 0.70 2.04 1.24 2.84 0.54 0.79 1.58 3.04 2.31 5.00 1.73 4.63 3.45 6.73 11.37 13.88 1.64 1.48 4.17 4.08 5.62 5.76 1.45 1.69 3.20 3.37 3.89 3.74 0.69 0.37 1.66 1.21 2.15 1.85 0.54 0.70 1.36 1.27 2.06 1.43 1.91 0.42 2.67 1.14 5.46 5.15 1.46 2.10 3.49 4.63 4.51 5.62l1.85 1.80h4.03 0.00c3.84 0.00 4.12 0.05 6.01 1.11 1.36 0.77 2.24 1.58 2.81 2.60 0.46 0.82 1.32 1.77 1.92 2.12 0.60 0.35 1.42 1.28 1.82 2.07 0.40 0.79 1.77 3.00 3.04 4.90 1.84 2.74 2.59 3.57 3.65 3.98 1.24 0.49 1.38 0.71 2.13 3.25 0.69 2.35 1.09 3.03 2.88 4.88 1.72 1.79 2.44 2.27 4.23 2.79 1.19 0.35 2.43 0.93 2.76 1.30 0.89 0.99 1.42 3.85 1.71 9.33 0.25 4.77 0.29 4.94 1.42 6.47 1.33 1.81 3.48 3.60 5.12 4.28 0.40 0.16 0.81 0.03 1.18 0.05l1.23 -0.82c0.00 0.00 1.13 -8.85 1.13 -11.57 0.00 -1.36 0.68 -3.23 1.36 -5.02 0.68 -1.79 1.36 -3.49 1.36 -4.51 0.00 -0.51 -0.20 -1.02 -0.51 -1.55 -0.32 -0.53 -0.75 -1.08 -1.22 -1.68 -0.94 -1.19 -2.01 -2.55 -2.58 -4.26 -0.57 -1.70 -0.68 -3.63 -0.71 -5.39 -0.03 -1.76 0.03 -3.35 -0.20 -4.37 -0.45 -2.04 -2.27 -6.13 -2.95 -7.49 -0.34 -0.68 -0.40 -1.82 -0.17 -2.92 0.11 -0.55 0.30 -1.10 0.55 -1.58 0.26 -0.48 0.58 -0.89 0.98 -1.17 0.79 -0.57 1.99 -1.30 2.98 -2.10 0.50 -0.40 0.94 -0.81 1.27 -1.22 0.32 -0.41 0.52 -0.82 0.52 -1.22 0.00 -0.79 0.23 -2.61 0.71 -4.40 0.24 -0.89 0.55 -1.78 0.92 -2.53 0.37 -0.75 0.81 -1.36 1.32 -1.70 1.50 -1.00 5.36 -2.96 8.00 -4.33 0.15 -0.95 0.06 -1.40 -0.87 -2.57 -1.43 -1.80 -3.78 -3.35 -6.29 -4.15l-1.85 -0.59 -0.62 -3.27c-0.92 -4.84 -1.72 -6.48 -3.92 -7.98 -3.26 -2.23 -7.15 -5.70 -8.86 -7.89 -0.92 -1.18 -2.16 -2.43 -2.78 -2.79 -1.04 -0.61 -1.20 -0.61 -2.49 -0.07 -3.25 1.38 -6.49 2.42 -7.45 2.40 -0.67 -0.02 -1.50 -0.47 -2.34 -1.27 -0.71 -0.68 -1.62 -1.40 -2.02 -1.60 -0.40 -0.20 -2.82 -0.41 -5.39 -0.46 -4.31 -0.09 -4.88 -0.02 -7.30 0.87 -2.50 0.92 -2.84 0.95 -7.01 0.73 -3.15 -0.17 -4.74 -0.42 -5.65 -0.88 -0.69 -0.36 -2.26 -0.72 -3.48 -0.82 -3.20 -0.24 -5.38 -1.57 -8.89 -5.38C51.54 21.83 49.59 20.07 48.82 19.66 46.11 18.24 43.40 17.44 41.24 17.41 40.05 17.39 38.73 17.18 38.29 16.93 37.86 16.68 37.51 16.54 37.12 16.53Zm12.09 89.26c-0.82 0.07 -1.22 0.57 -1.44 1.65 -0.15 0.74 -0.52 1.14 -1.31 1.41 -0.61 0.21 -1.20 0.64 -1.32 0.94 -0.33 0.86 2.57 5.07 3.86 5.60 0.59 0.24 1.71 0.91 2.49 1.48 1.01 0.73 1.85 1.03 2.88 1.03 1.66 0.00 3.27 0.71 4.84 2.14 0.59 0.54 2.10 1.60 3.35 2.34 1.25 0.75 2.37 1.60 2.48 1.89 0.11 0.30 0.71 0.75 1.32 1.02 1.34 0.58 2.72 0.64 3.97 0.16 0.71 -0.27 0.92 -0.60 0.92 -1.45 0.00 -1.19 -1.36 -2.87 -2.32 -2.87 -0.08 0.00 -0.17 -0.04 -0.29 -0.11 -0.33 -0.21 -0.79 -0.69 -1.16 -1.25 -0.49 -0.75 -1.43 -1.66 -2.07 -2.04 -0.65 -0.37 -1.72 -1.15 -2.37 -1.71 -0.66 -0.57 -1.67 -1.13 -2.25 -1.25 -0.87 -0.17 -1.05 -0.39 -1.05 -1.25 0.00 -0.95 -0.24 -1.15 -2.61 -2.23 -3.04 -1.39 -4.68 -2.67 -5.29 -4.14 -0.33 -0.79 -0.75 -1.11 -1.69 -1.29 -0.37 -0.07 -0.69 -0.10 -0.96 -0.07zm48.17 23.20 -2.18 0.25c-2.51 0.28 -3.30 0.72 -2.68 1.48 0.22 0.27 0.61 0.49 0.85 0.49 0.25 0.00 1.37 0.89 2.51 1.98 1.39 1.33 2.36 1.98 2.97 1.98 0.88 0.00 0.90 -0.05 0.66 -1.71 -0.14 -0.94 -0.67 -2.33 -1.19 -3.09l-0.94 -1.37zm-5.02 5.25c-0.65 -0.04 -1.38 0.53 -1.10 0.98 0.28 0.45 1.67 0.23 1.84 -0.29 0.07 -0.22 -0.14 -0.51 -0.47 -0.63 -0.09 -0.03 -0.18 -0.05 -0.27 -0.06z",
    },
    path02: {
        name: "Sumatera Utara",
        capital: "Samarinada",
        area: '127 267,52',
        population: " 575 449 человек (2017 г.)",
        raiting: " 8 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m130.36 59.29c-2.64 1.37 -6.50 3.33 -8.00 4.33 -0.51 0.34 -0.95 0.95 -1.32 1.70 -0.37 0.75 -0.68 1.64 -0.92 2.53 -0.48 1.79 -0.71 3.60 -0.71 4.40 0.00 0.40 -0.20 0.81 -0.52 1.22 -0.32 0.41 -0.77 0.82 -1.27 1.22 -0.99 0.79 -2.18 1.53 -2.98 2.10 -0.40 0.28 -0.72 0.69 -0.98 1.17 -0.26 0.48 -0.44 1.02 -0.55 1.58 -0.23 1.11 -0.17 2.24 0.17 2.92 0.68 1.36 2.50 5.45 2.95 7.49 0.23 1.02 0.17 2.61 0.20 4.37 0.03 1.76 0.14 3.69 0.71 5.39 0.57 1.70 1.64 3.07 2.58 4.26 0.47 0.60 0.90 1.15 1.22 1.68 0.32 0.53 0.51 1.04 0.51 1.55 0.00 1.02 -0.68 2.72 -1.36 4.51 -0.68 1.79 -1.36 3.66 -1.36 5.02 0.00 2.72 -1.13 11.57 -1.13 11.57l-1.23 0.82c0.41 0.03 0.78 0.20 1.30 0.06 1.20 -0.32 1.62 -0.23 3.72 0.81 2.85 1.41 5.13 2.95 6.35 4.29 1.37 1.50 3.97 3.04 5.14 3.04 2.18 0.00 3.85 1.33 9.35 7.47 1.11 1.24 1.60 1.52 2.62 1.52 2.41 0.00 2.63 3.01 0.33 4.37 -1.42 0.84 -1.53 1.29 -0.57 2.51 0.98 1.25 3.64 6.84 3.65 7.68 0.01 0.40 0.43 1.69 0.93 2.88 1.20 2.79 2.23 6.29 2.64 8.94 0.19 1.19 0.63 2.45 1.02 2.88 0.96 1.05 1.51 2.19 1.51 3.13 0.00 0.43 0.31 1.30 0.69 1.91 0.85 1.39 2.57 8.26 2.82 11.28 0.08 0.93 0.27 1.47 0.44 1.92l1.96 -2.66c0.00 0.00 0.79 -1.42 1.96 -2.95 0.58 -0.77 1.25 -1.56 1.97 -2.22 0.71 -0.66 1.47 -1.18 2.20 -1.41 0.74 -0.23 1.90 -0.06 3.24 0.27 1.34 0.33 2.86 0.81 4.30 1.21 1.45 0.40 2.82 0.71 3.88 0.70 0.53 -0.01 0.98 -0.10 1.31 -0.30 0.34 -0.20 0.57 -0.51 0.65 -0.97 0.17 -0.91 0.03 -1.76 -0.29 -2.56 -0.32 -0.80 -0.82 -1.56 -1.36 -2.29 -0.54 -0.72 -1.12 -1.41 -1.61 -2.07 -0.49 -0.66 -0.89 -1.30 -1.06 -1.92 -0.17 -0.62 -0.16 -1.25 0.01 -1.81 0.16 -0.56 0.48 -1.05 0.90 -1.40 0.43 -0.35 0.96 -0.57 1.58 -0.59 0.62 -0.02 1.31 0.17 2.05 0.62 1.47 0.91 3.86 1.82 5.87 2.50 2.01 0.68 3.66 1.14 3.66 1.14 0.00 0.00 0.91 -9.53 0.91 -11.57 0.00 -0.51 -0.33 -1.06 -0.80 -1.65 -0.47 -0.59 -1.09 -1.20 -1.67 -1.84 -0.58 -0.64 -1.13 -1.30 -1.46 -1.97 -0.33 -0.67 -0.44 -1.35 -0.16 -2.03 0.28 -0.68 0.80 -1.31 1.44 -1.88 0.65 -0.57 1.43 -1.10 2.27 -1.58 1.67 -0.96 3.55 -1.76 4.91 -2.44 1.36 -0.68 2.50 -1.31 3.06 -2.16 0.28 -0.43 0.43 -0.91 0.38 -1.48 -0.04 -0.57 -0.27 -1.24 -0.72 -2.03 -0.91 -1.59 -1.93 -2.84 -2.78 -3.97 -0.85 -1.13 -1.53 -2.16 -1.76 -3.29 -0.23 -1.13 -0.06 -1.82 0.20 -2.55 0.26 -0.74 0.60 -1.53 0.71 -2.89 0.11 -1.36 -0.28 -2.78 -0.71 -3.86 -0.43 -1.08 -0.88 -1.81 -0.88 -1.81l0.88 -14.34c-0.06 -0.04 -0.20 -0.30 -0.25 -0.32 -0.86 -0.31 -2.54 0.56 -2.97 1.53 -0.49 1.12 -0.90 1.01 -0.90 -0.25 0.00 -1.17 -0.31 -1.46 -1.95 -1.81 -0.84 -0.18 -1.08 -0.41 -1.00 -0.93 0.44 -2.70 0.22 -4.39 -0.77 -5.82 -0.56 -0.81 -1.50 -1.67 -2.08 -1.91 -0.59 -0.24 -1.24 -0.78 -1.46 -1.20 -0.21 -0.42 -1.20 -1.83 -2.18 -3.14 -1.71 -2.27 -1.90 -2.41 -4.18 -3.03 -2.12 -0.57 -2.69 -0.94 -5.09 -3.24 -1.48 -1.43 -3.26 -2.88 -3.96 -3.23 -0.69 -0.35 -2.29 -1.58 -3.56 -2.74 -2.70 -2.47 -6.97 -4.89 -11.37 -6.44 -4.99 -1.76 -6.12 -2.69 -8.09 -6.60 -0.30 -0.60 -0.99 -1.20 -1.61 -1.40 -0.59 -0.19 -1.77 -0.96 -2.61 -1.69 -1.92 -1.68 -6.18 -3.94 -7.43 -3.94 -2.05 0.00 -2.65 -2.84 -1.60 -7.64 0.07 -0.31 0.02 -0.41 0.06 -0.63zm-29.56 93.34c-0.64 -0.01 -1.36 0.48 -3.31 1.78 -1.90 1.27 -2.02 1.30 -4.38 1.08 -2.22 -0.21 -2.43 -0.17 -2.43 0.45 0.00 0.37 0.42 1.07 0.93 1.55 1.31 1.22 5.58 6.63 6.94 8.78 0.62 0.99 1.30 2.41 1.50 3.17 0.30 1.13 0.64 1.49 1.88 2.03 2.29 1.00 5.85 4.42 6.48 6.23 0.29 0.84 0.80 2.28 1.13 3.21 0.40 1.14 0.97 1.92 1.74 2.40 0.63 0.39 1.82 0.72 2.65 0.74 2.63 0.05 3.55 -1.55 3.89 -6.81 0.13 -2.07 0.49 -4.44 0.78 -5.25 0.48 -1.31 0.48 -1.62 -0.02 -2.80 -0.38 -0.91 -0.90 -1.45 -1.65 -1.71 -0.62 -0.21 -1.52 -1.02 -2.08 -1.85 -0.61 -0.90 -1.39 -1.58 -2.03 -1.75 -1.34 -0.36 -3.31 -2.24 -4.25 -4.08 -0.98 -1.90 -4.79 -5.84 -6.49 -6.71 -0.56 -0.29 -0.92 -0.47 -1.30 -0.47zm32.12 49.43c-0.66 0.00 -1.30 0.16 -1.42 0.36 -0.31 0.50 1.49 4.94 2.59 6.40 0.82 1.08 0.85 1.25 0.34 1.81 -1.68 1.85 -3.31 7.80 -2.62 9.58 0.18 0.48 0.72 0.56 3.02 0.47l2.79 -0.11 0.10 -2.97c0.08 -2.23 0.23 -2.97 0.60 -2.97 0.27 0.00 0.68 -0.56 0.91 -1.25 0.38 -1.14 0.31 -1.44 -0.86 -3.52 -0.70 -1.25 -1.51 -2.96 -1.81 -3.79 -0.89 -2.52 -2.25 -4.02 -3.64 -4.02z",
    },
    path03: {
        name: "Sumatera Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m177.95 172.83c-0.62 0.02 -1.15 0.24 -1.58 0.59 -0.43 0.35 -0.74 0.84 -0.90 1.40 -0.16 0.56 -0.18 1.18 -0.01 1.81 0.17 0.62 0.57 1.26 1.06 1.92 0.49 0.66 1.07 1.35 1.61 2.07 0.54 0.72 1.04 1.48 1.36 2.29 0.32 0.80 0.46 1.65 0.29 2.56 -0.09 0.45 -0.31 0.77 -0.65 0.97 -0.34 0.20 -0.79 0.29 -1.31 0.30 -1.06 0.01 -2.43 -0.30 -3.88 -0.70 -1.45 -0.40 -2.96 -0.88 -4.30 -1.21 -1.34 -0.33 -2.50 -0.50 -3.24 -0.27 -0.74 0.23 -1.49 0.75 -2.20 1.41 -0.71 0.66 -1.39 1.45 -1.97 2.22 -1.16 1.53 -1.96 2.95 -1.96 2.95l-1.96 2.66c0.06 0.15 0.09 0.58 0.15 0.63 0.69 0.52 3.30 1.14 4.78 1.14 1.11 0.00 1.64 0.24 2.45 1.08 0.57 0.59 1.39 1.08 1.82 1.08 2.41 0.00 6.98 2.70 9.09 5.36 1.26 1.59 1.41 1.98 1.24 3.21 -0.15 1.12 0.00 1.69 0.75 2.79 0.52 0.76 0.94 1.82 0.94 2.36 0.00 0.78 0.58 1.46 2.95 3.42 3.95 3.28 4.73 4.12 6.66 7.10 0.91 1.40 2.74 3.68 4.07 5.06 2.66 2.77 3.38 3.94 3.95 6.46 0.21 0.92 0.74 2.17 1.17 2.76 0.77 1.04 0.78 1.11 0.17 2.16 -0.81 1.41 -0.79 1.85 0.14 2.68 0.42 0.38 1.38 1.51 2.13 2.52 0.75 1.01 1.86 2.04 2.47 2.29 0.94 0.39 1.11 0.65 1.11 1.70 0.00 1.05 1.86 5.84 3.36 8.63 0.81 1.51 2.59 4.15 4.11 6.08 2.64 3.36 3.26 5.77 2.25 8.77 -0.40 1.18 -0.71 2.44 -0.69 2.79 0.06 1.26 3.14 6.08 5.91 9.83 1.07 -1.04 2.13 -2.13 3.16 -3.16 0.96 -0.96 1.92 -1.66 2.80 -2.16 0.88 -0.50 1.70 -0.81 2.39 -0.99 1.39 -0.37 2.30 -0.26 2.30 -0.26 0.00 0.00 -0.57 -0.74 -1.19 -2.01 -0.62 -1.28 -1.30 -3.09 -1.53 -5.25 -0.11 -1.08 0.07 -2.45 0.45 -4.00 0.38 -1.54 0.94 -3.25 1.59 -4.99 1.30 -3.49 2.95 -7.12 4.09 -9.84 0.57 -1.36 1.39 -2.82 2.30 -4.25 0.91 -1.43 1.92 -2.81 2.86 -4.03 1.87 -2.44 3.46 -4.20 3.46 -4.20 0.00 0.00 -2.04 -2.72 -3.86 -4.31 -0.91 -0.79 -1.93 -1.08 -3.01 -1.22 -1.08 -0.14 -2.21 -0.14 -3.35 -0.37 -0.57 -0.11 -1.25 -0.52 -1.95 -1.08 -0.70 -0.55 -1.42 -1.25 -2.08 -1.93 -1.30 -1.36 -2.33 -2.67 -2.33 -2.67 0.00 0.00 -11.80 -13.16 -14.52 -16.34 -0.68 -0.79 -0.99 -1.87 -1.08 -3.08 -0.09 -1.21 0.04 -2.54 0.23 -3.84 0.40 -2.61 1.08 -5.11 0.85 -6.24 -0.11 -0.57 -0.58 -1.28 -1.26 -2.05 -0.68 -0.78 -1.56 -1.62 -2.51 -2.46 -1.90 -1.67 -4.06 -3.32 -5.31 -4.34 -0.62 -0.51 -1.37 -0.78 -2.21 -0.92 -0.83 -0.14 -1.75 -0.15 -2.70 -0.13 -0.95 0.01 -1.94 0.05 -2.91 -0.00 -0.98 -0.05 -1.94 -0.20 -2.85 -0.54 -0.91 -0.34 -1.46 -0.97 -1.78 -1.75 -0.32 -0.78 -0.40 -1.73 -0.37 -2.70 0.06 -1.96 0.57 -4.06 0.57 -5.30 0.00 -0.05 -0.07 -0.19 -0.07 -0.25 -0.06 -0.02 -1.62 -0.45 -3.59 -1.11 -2.01 -0.68 -4.40 -1.59 -5.87 -2.50 -0.74 -0.45 -1.43 -0.64 -2.05 -0.62zm-29.13 59.60c-0.41 0.02 -0.82 0.14 -1.44 0.39 -0.88 0.35 -1.90 0.49 -2.60 0.36 -1.01 -0.19 -1.28 -0.06 -2.06 0.96 -0.49 0.65 -1.00 1.67 -1.13 2.26 -0.13 0.59 -0.56 1.91 -0.95 2.92 -0.97 2.51 -0.56 3.89 2.48 8.33 1.31 1.92 2.76 4.04 3.22 4.71 0.46 0.67 0.83 1.58 0.83 2.02 0.00 0.44 0.32 1.21 0.72 1.72 0.66 0.84 7.03 5.29 8.27 5.77 0.77 0.30 2.52 -0.04 3.49 -0.67 0.46 -0.30 1.23 -1.17 1.71 -1.94 0.49 -0.77 1.05 -1.50 1.26 -1.63 0.66 -0.41 0.41 -2.20 -0.40 -2.92 -1.65 -1.46 -2.83 -3.47 -2.83 -4.82 0.00 -0.92 -0.35 -1.81 -1.11 -2.87 -0.61 -0.85 -1.29 -2.04 -1.51 -2.66 -0.35 -1.01 -1.48 -2.95 -3.90 -6.70 -0.45 -0.69 -0.90 -1.99 -1.01 -2.88 -0.19 -1.50 -0.30 -1.65 -1.62 -2.08 -0.60 -0.20 -1.01 -0.29 -1.42 -0.27zm24.94 35.88c-0.18 -0.01 -0.36 0.02 -0.58 0.08 -1.71 0.43 -1.92 0.82 -1.92 3.61v0.00 2.60l1.71 1.60c1.51 1.41 2.62 2.05 7.10 4.05 0.75 0.33 1.22 0.37 1.54 0.11 0.62 -0.50 0.23 -1.57 -1.19 -3.32 -1.25 -1.54 -3.04 -4.70 -3.04 -5.37 0.00 -0.23 -0.71 -1.11 -1.59 -1.97 -1.03 -1.01 -1.49 -1.36 -2.02 -1.38zm12.18 15.74c-0.54 0.04 -0.87 0.56 -0.96 1.56 -0.06 0.76 0.08 1.89 0.31 2.52 0.23 0.62 0.54 2.38 0.69 3.91 0.15 1.53 0.49 3.04 0.76 3.36 1.23 1.49 5.62 -0.75 6.46 -3.29 0.51 -1.53 0.06 -2.37 -2.22 -4.17 -0.84 -0.66 -2.12 -1.82 -2.86 -2.58 -0.90 -0.92 -1.64 -1.36 -2.18 -1.32zm8.91 9.71c-0.19 0.00 -0.90 0.37 -1.57 0.81l-1.22 0.81 0.23 2.70c0.28 3.20 1.33 5.31 3.22 6.42 1.10 0.65 1.27 0.93 1.27 2.13 0.00 1.44 0.91 3.01 2.54 4.36 0.48 0.40 1.24 0.74 1.69 0.74 1.10 0.02 1.07 -1.18 -0.08 -3.05 -1.23 -1.99 -1.18 -3.00 0.16 -3.47 1.22 -0.42 1.61 -1.30 1.27 -2.83 -0.23 -1.07 -6.82 -8.63 -7.52 -8.63z",
    },
    path04: {
        name: "Riau",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m193.35 113.72 -0.88 14.34c0.00 0.00 0.45 0.74 0.88 1.81 0.43 1.08 0.82 2.50 0.71 3.86 -0.11 1.36 -0.45 2.15 -0.71 2.89 -0.26 0.74 -0.42 1.42 -0.20 2.55 0.23 1.13 0.91 2.16 1.76 3.29 0.85 1.13 1.87 2.38 2.78 3.97 0.45 0.79 0.68 1.46 0.72 2.03 0.04 0.57 -0.10 1.06 -0.38 1.48 -0.57 0.85 -1.70 1.48 -3.06 2.16 -1.36 0.68 -3.23 1.48 -4.91 2.44 -0.84 0.48 -1.62 1.01 -2.27 1.58 -0.65 0.57 -1.16 1.20 -1.44 1.88 -0.28 0.68 -0.17 1.36 0.16 2.03 0.33 0.67 0.88 1.33 1.46 1.97 0.58 0.64 1.20 1.26 1.67 1.84 0.47 0.59 0.80 1.14 0.80 1.65 0.00 2.04 -0.91 11.57 -0.91 11.57 0.00 0.00 -0.07 -0.02 -0.07 -0.02 0.00 0.05 0.07 0.20 0.07 0.25 0.00 1.25 -0.51 3.35 -0.57 5.30 -0.03 0.98 0.06 1.92 0.37 2.70 0.32 0.78 0.87 1.41 1.78 1.75 0.91 0.34 1.87 0.48 2.85 0.54 0.98 0.05 1.96 0.02 2.91 0.00 0.95 -0.01 1.86 -0.01 2.70 0.13 0.83 0.14 1.58 0.41 2.21 0.92 1.25 1.02 3.41 2.67 5.31 4.34 0.95 0.84 1.84 1.68 2.51 2.46 0.68 0.78 1.14 1.49 1.26 2.05 0.23 1.13 -0.45 3.63 -0.85 6.24 -0.20 1.30 -0.33 2.64 -0.23 3.84 0.09 1.21 0.40 2.28 1.08 3.08 2.72 3.18 14.52 16.34 14.52 16.34 0.00 0.00 1.02 1.31 2.33 2.67 0.65 0.68 1.37 1.38 2.08 1.93 0.70 0.55 1.38 0.96 1.95 1.08 1.13 0.23 2.27 0.23 3.35 0.37 1.08 0.14 2.10 0.43 3.01 1.22 1.62 1.42 3.07 3.36 3.44 3.84 0.67 -0.87 1.64 -2.33 2.04 -2.74 1.12 -1.12 2.41 -1.77 3.89 -2.29 1.48 -0.52 3.17 -0.92 5.09 -1.56 0.96 -0.32 1.95 -0.30 2.90 -0.07 0.96 0.23 1.89 0.66 2.75 1.16 1.72 1.00 3.17 2.29 3.97 2.77 0.80 0.48 2.17 1.20 3.57 1.64 0.70 0.22 1.41 0.37 2.07 0.39 0.66 0.02 1.26 -0.11 1.74 -0.43 0.48 -0.32 0.76 -0.84 0.95 -1.46 0.19 -0.62 0.28 -1.33 0.38 -2.03 0.10 -0.70 0.21 -1.39 0.44 -1.97 0.23 -0.58 0.57 -1.04 1.13 -1.28 1.12 -0.48 2.49 -1.36 4.13 -2.05 0.82 -0.34 1.72 -0.63 2.68 -0.80 0.97 -0.17 2.01 -0.20 3.14 -0.04 2.25 0.32 6.82 0.32 10.83 0.24 3.33 -0.07 5.29 -0.16 6.19 -0.20 -0.79 -0.75 -1.66 -1.56 -1.85 -1.62 -0.34 -0.11 -0.26 -0.64 0.30 -2.13 0.44 -1.15 0.68 -2.43 0.58 -3.06 -0.17 -1.07 -0.15 -1.08 1.22 -0.95 2.58 0.25 5.84 -2.40 4.20 -3.41 -0.29 -0.18 -0.08 -0.37 0.63 -0.54 2.48 -0.60 5.04 -1.67 5.13 -2.14 0.05 -0.28 -0.22 -1.02 -0.61 -1.65 -0.53 -0.86 -1.18 -1.29 -2.59 -1.71 -2.58 -0.77 -3.57 -0.70 -4.96 0.32 -1.26 0.93 -1.18 0.93 -3.20 -0.38 -0.06 -0.04 0.88 -0.75 2.10 -1.58 1.22 -0.83 2.54 -2.06 2.94 -2.73 0.46 -0.77 1.00 -1.23 1.49 -1.24 0.88 -0.02 6.22 -1.53 6.55 -1.86 0.12 -0.12 -0.21 -2.13 -0.74 -4.47 -0.27 -1.22 -0.46 -1.80 -0.67 -2.50 -0.31 -0.66 -0.60 -1.51 -0.91 -2.07 -0.05 -0.08 -0.07 -0.16 -0.11 -0.24 -0.14 -0.18 -0.22 -0.44 -0.39 -0.62 -0.87 -0.91 -1.42 -1.17 -2.47 -1.17 -1.03 0.00 -1.40 -0.17 -1.57 -0.72 -0.60 -1.90 -4.77 -5.51 -7.07 -6.13 -1.29 -0.35 -1.66 -0.29 -3.30 0.52 -1.02 0.50 -2.73 1.58 -3.80 2.40 -1.07 0.82 -2.65 1.79 -3.51 2.15 -0.86 0.37 -2.15 1.07 -2.88 1.57 -1.24 0.84 -1.92 0.92 -1.92 0.21 0.00 -0.17 0.85 -0.81 1.89 -1.42 2.40 -1.40 3.87 -2.71 3.87 -3.44 0.00 -0.99 -1.10 -2.78 -3.38 -5.49 -2.69 -3.21 -3.22 -3.39 -10.18 -3.46 -2.81 -0.03 -5.22 -0.17 -5.36 -0.31 -0.29 -0.29 0.61 -0.32 7.40 -0.27 4.22 0.04 4.95 0.13 5.57 0.72 1.48 1.39 4.24 1.91 4.64 0.87 0.40 -1.03 0.23 -2.42 -0.38 -3.09 -0.74 -0.82 -0.43 -1.21 0.50 -0.63 0.97 0.60 3.22 0.13 3.71 -0.78 0.54 -1.01 -0.52 -2.59 -3.76 -5.61 -2.94 -2.74 -7.01 -4.79 -9.52 -4.79 -1.29 0.00 -1.54 0.17 -2.74 1.80 -0.73 0.99 -1.44 1.80 -1.59 1.80 -0.15 0.00 -0.66 -0.42 -1.14 -0.93 -1.40 -1.50 -2.05 -1.72 -3.09 -1.04 -1.18 0.77 -1.38 0.52 -0.93 -1.23 0.28 -1.09 0.25 -1.66 -0.13 -2.39 -0.57 -1.10 -0.64 -1.73 -0.17 -1.43 0.18 0.11 0.58 0.10 0.90 -0.02 0.83 -0.32 0.79 -4.91 -0.06 -6.61 -0.81 -1.62 -1.81 -2.07 -6.90 -3.08 -2.30 -0.46 -4.63 -1.00 -5.19 -1.21 -1.50 -0.57 -2.93 -0.46 -3.87 0.30l-0.84 0.68 0.99 1.50c1.29 1.95 3.75 3.49 6.09 3.81l1.85 0.25 -0.94 0.68c-1.23 0.90 -1.63 3.05 -0.85 4.58 0.31 0.60 0.56 1.55 0.55 2.10 -0.02 0.94 -0.07 0.90 -0.88 -0.61 -0.48 -0.89 -0.87 -2.21 -0.88 -2.94 -0.02 -1.64 -1.11 -3.01 -3.91 -4.87 -1.14 -0.76 -3.57 -2.67 -5.40 -4.24 -4.01 -3.45 -4.99 -3.86 -8.04 -3.37 -2.19 0.35 -2.29 0.33 -4.93 -1.01 -2.64 -1.34 -2.72 -1.42 -3.51 -3.53 -0.44 -1.19 -0.82 -2.76 -0.83 -3.50 -0.04 -3.14 -1.18 -4.56 -6.75 -8.42 -1.44 -1.00 -1.93 -1.58 -2.10 -2.49 -0.12 -0.65 -0.41 -1.26 -0.65 -1.35 -0.90 -0.35 -6.33 -0.23 -7.17 0.15 -0.49 0.22 -1.16 1.00 -1.49 1.74 -0.84 1.87 -0.43 3.65 1.30 5.65 1.63 1.88 1.97 3.34 0.38 1.64 -1.49 -1.59 -5.44 -4.03 -6.52 -4.03 -1.08 0.00 -1.91 -0.51 -4.77 -2.96 -2.53 -2.16 -3.26 -3.32 -4.55 -7.21 -1.02 -3.05 -3.73 -7.61 -4.91 -8.39zm46.60 18.92c-0.24 0.00 -0.94 0.36 -1.55 0.79 -0.70 0.50 -1.55 0.76 -2.30 0.71 -0.65 -0.04 -1.83 0.25 -2.62 0.65 -1.87 0.95 -2.17 2.34 -1.29 6.05 0.72 3.04 2.23 5.10 4.23 5.74 1.13 0.36 3.23 0.25 4.11 -0.22 0.23 -0.12 1.00 -0.75 1.71 -1.40 1.01 -0.92 1.29 -1.45 1.29 -2.43 0.00 -0.69 0.32 -1.86 0.72 -2.59 0.40 -0.74 0.72 -1.67 0.72 -2.08 0.00 -1.56 -3.52 -5.20 -5.02 -5.20zm56.38 33.88c-1.30 -0.00 -2.00 1.45 -0.65 2.81 0.85 0.85 0.68 0.82 2.12 0.32 1.41 -0.49 1.40 -1.52 -0.03 -2.58 -0.51 -0.38 -1.01 -0.55 -1.45 -0.55zm0.54 7.85c-0.45 0.01 -0.84 0.14 -1.11 0.42 -1.05 1.05 0.19 4.81 1.86 5.62 1.56 0.76 2.64 0.50 3.46 -0.84l0.78 -1.26 -0.77 -1.24c-1.01 -1.63 -2.88 -2.73 -4.22 -2.70zm4.21 1.07c-0.20 0.00 -0.36 0.16 -0.36 0.36 0.00 0.20 0.16 0.36 0.36 0.36 0.20 0.00 0.36 -0.16 0.36 -0.36 0.00 -0.20 -0.16 -0.36 -0.36 -0.36zm-9.21 3.95c-0.44 -0.02 -0.93 0.14 -1.55 0.45 -1.58 0.81 -2.20 4.17 -1.04 5.57 0.90 1.08 3.97 -0.04 5.19 -1.91 0.43 -0.66 0.36 -0.93 -0.58 -2.43 -0.71 -1.13 -1.29 -1.66 -2.02 -1.69z",
    },
    path05: {
        name: "Jambi",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m250.32 295.12c0.22 -0.15 0.19 -0.13 0.42 -0.29 2.72 -1.84 5.96 -3.94 8.00 -4.96 2.04 -1.02 3.74 -1.99 5.39 -2.84 1.65 -0.85 3.23 -1.59 5.05 -2.16 1.82 -0.57 2.90 -1.02 3.52 -1.62 0.31 -0.30 0.51 -0.63 0.63 -1.03 0.12 -0.40 0.16 -0.87 0.16 -1.44 0.00 -1.13 0.17 -1.82 0.68 -2.21 0.51 -0.40 1.36 -0.51 2.72 -0.51 1.36 0.00 2.67 -0.28 3.66 -0.68 0.99 -0.40 1.67 -0.91 1.79 -1.36 0.11 -0.45 0.97 -1.25 1.82 -1.59 0.43 -0.17 0.85 -0.23 1.18 -0.07 0.33 0.16 0.57 0.53 0.63 1.21 0.11 1.36 0.34 2.84 0.74 3.94 0.20 0.55 0.44 1.01 0.73 1.32 0.29 0.31 0.63 0.46 1.03 0.41 0.79 -0.11 1.93 -0.68 2.98 -1.42 1.05 -0.74 2.01 -1.65 2.47 -2.44 0.45 -0.79 0.68 -2.04 0.91 -3.23 0.23 -1.19 0.45 -2.33 0.91 -2.89 0.45 -0.57 2.67 -2.10 4.77 -3.49 2.10 -1.39 4.08 -2.64 4.08 -2.64 0.00 0.00 0.79 -0.80 1.96 -1.65 0.58 -0.43 1.25 -0.87 1.97 -1.23 0.71 -0.36 1.47 -0.65 2.20 -0.76 1.47 -0.23 4.03 0.17 6.38 0.63 2.35 0.45 4.51 0.96 5.19 0.96 0.68 0.00 1.81 -0.23 2.86 -0.71 0.52 -0.24 1.03 -0.55 1.44 -0.92 0.41 -0.37 0.74 -0.81 0.91 -1.32 0.34 -1.02 0.74 -1.99 1.50 -2.53 0.38 -0.27 0.86 -0.43 1.46 -0.44 0.61 -0.01 1.34 0.13 2.25 0.47 0.45 0.17 0.99 0.02 1.58 -0.38 0.01 -0.01 0.02 -0.02 0.03 -0.03 -0.15 -0.40 -0.13 -0.57 -0.34 -1.07 -1.13 -2.74 -1.26 -3.37 -1.26 -6.43 0.00 -2.80 -0.13 -3.62 -0.76 -4.67 -0.53 -0.90 -0.84 -2.24 -1.02 -4.50 -0.15 -1.77 -0.47 -3.47 -0.73 -3.77 -0.55 -0.66 -2.61 -0.72 -4.78 -0.14 -1.35 0.36 -1.72 0.32 -3.05 -0.36 -0.83 -0.42 -2.05 -0.77 -2.71 -0.77 -0.66 0.00 -1.52 -0.24 -1.90 -0.53 -0.38 -0.29 -1.38 -0.53 -2.21 -0.54 -1.19 -0.01 -1.79 0.23 -2.77 1.09l-1.25 1.10 -0.62 -0.94c-0.34 -0.52 -1.44 -1.36 -2.45 -1.86 -3.22 -1.62 -6.50 -3.91 -8.51 -5.94 -0.25 -0.25 -0.32 -0.26 -0.55 -0.49 -0.91 0.04 -2.86 0.13 -6.19 0.20 -4.01 0.08 -8.58 0.08 -10.83 -0.24 -1.12 -0.16 -2.17 -0.12 -3.14 0.04 -0.97 0.17 -1.86 0.46 -2.68 0.80 -1.64 0.68 -3.01 1.57 -4.13 2.05 -0.56 0.24 -0.90 0.70 -1.13 1.28 -0.23 0.58 -0.34 1.27 -0.44 1.97 -0.10 0.70 -0.19 1.41 -0.38 2.03 -0.19 0.62 -0.47 1.14 -0.95 1.46 -0.48 0.32 -1.08 0.44 -1.74 0.43 -0.66 -0.02 -1.37 -0.17 -2.07 -0.39 -1.40 -0.44 -2.77 -1.16 -3.57 -1.64 -0.80 -0.48 -2.25 -1.76 -3.97 -2.77 -0.86 -0.50 -1.80 -0.93 -2.75 -1.16 -0.96 -0.23 -1.94 -0.25 -2.90 0.07 -1.93 0.64 -3.61 1.04 -5.09 1.56 -1.48 0.52 -2.77 1.16 -3.89 2.29 -0.41 0.41 -1.38 1.86 -2.04 2.74 0.05 0.06 0.42 0.47 0.42 0.47 0.00 0.00 -1.59 1.76 -3.46 4.20 -0.94 1.22 -1.94 2.61 -2.86 4.03 -0.91 1.43 -1.74 2.89 -2.30 4.25 -1.13 2.72 -2.78 6.35 -4.09 9.84 -0.65 1.74 -1.22 3.45 -1.59 4.99 -0.38 1.54 -0.56 2.92 -0.45 4.00 0.23 2.16 0.91 3.97 1.53 5.25 0.11 0.22 0.10 0.16 0.21 0.35 0.14 0.10 0.41 0.23 0.52 0.32 0.96 0.80 1.69 2.01 2.37 3.37 0.68 1.36 1.32 2.89 2.13 4.33 0.40 0.72 0.94 1.46 1.62 2.21 0.68 0.75 1.50 1.50 2.47 2.24 1.93 1.48 4.41 2.93 7.46 4.21 1.52 0.64 2.89 1.45 4.09 2.31 0.28 0.20 0.47 0.42 0.73 0.63z",
    },
    path06: {
        name: "Sumatera Selatan",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m306.51 361.78c0.39 0.75 0.75 1.55 1.19 2.14 0.36 0.49 0.74 0.90 1.12 1.21 0.39 0.30 0.78 0.49 1.18 0.53 1.60 0.16 3.45 0.80 5.17 1.08 0.86 0.14 1.69 0.19 2.45 0.04 0.76 -0.15 1.44 -0.49 2.00 -1.13 0.56 -0.64 1.04 -1.58 1.48 -2.70 0.44 -1.11 0.84 -2.40 1.24 -3.72 0.80 -2.65 1.60 -5.46 2.73 -7.38 0.56 -0.96 1.10 -1.72 1.69 -2.36 0.58 -0.64 1.20 -1.16 1.92 -1.65 1.44 -0.96 3.29 -1.76 6.02 -3.05 2.73 -1.28 6.26 -2.25 9.31 -3.25 1.52 -0.50 2.93 -1.01 4.05 -1.58 1.12 -0.57 1.97 -1.19 2.37 -1.91 0.40 -0.72 0.62 -1.40 0.74 -2.03 0.12 -0.63 0.14 -1.20 0.14 -1.70 0.00 -0.50 -0.02 -0.93 0.02 -1.28 0.04 -0.35 0.14 -0.61 0.38 -0.77 0.48 -0.32 1.04 -0.48 1.73 -0.60 0.68 -0.12 1.48 -0.20 2.45 -0.36 0.48 -0.08 0.88 -0.36 1.24 -0.74 0.36 -0.38 0.68 -0.85 1.00 -1.31 0.32 -0.46 0.64 -0.91 1.00 -1.25 0.36 -0.34 0.76 -0.56 1.24 -0.56 0.48 0.00 1.06 0.22 1.67 0.58 0.61 0.36 1.26 0.86 1.86 1.43 1.20 1.12 2.25 2.49 2.57 3.45 0.32 0.96 1.04 2.25 2.09 3.37 0.52 0.56 1.12 1.08 1.80 1.51 0.67 0.42 1.41 0.74 2.21 0.90 1.61 0.32 2.97 0.80 5.14 1.45 0.47 -2.50 1.58 -6.11 2.70 -8.12 0.67 -1.21 1.22 -2.47 1.22 -2.81 0.00 -1.15 -1.10 -2.74 -2.53 -3.64 -1.77 -1.12 -1.84 -2.01 -0.49 -6.76 1.13 -3.98 1.67 -4.91 4.21 -7.29 2.72 -2.55 3.24 -3.41 2.77 -4.62 -0.20 -0.53 -0.37 -1.69 -0.37 -2.56 0.00 -1.40 -0.36 -2.48 -0.89 -3.37 -0.59 -0.36 -1.18 -0.61 -1.75 -1.04 -0.34 -0.25 -0.57 -0.62 -0.89 -0.89 -0.47 -0.12 -0.92 -0.26 -1.47 -0.26 -1.14 0.00 -1.59 -0.23 -2.51 -1.27 -1.10 -1.25 -1.30 -2.05 -1.14 -4.41 0.10 -1.51 -0.26 -1.92 -3.03 -3.47 -2.60 -1.46 -2.81 -1.91 -2.73 -5.83l0.06 -2.57 -1.91 -0.18c-1.05 -0.10 -3.04 -0.43 -4.43 -0.74 -5.05 -1.11 -6.50 -1.26 -9.66 -1.00 -2.62 0.22 -3.43 0.15 -4.54 -0.34 -0.85 -0.38 -1.53 -0.49 -1.85 -0.29 -0.74 0.47 -0.97 0.40 -1.22 -0.39 -0.32 -1.01 -1.03 -0.90 -2.51 0.40 -1.84 1.62 -2.82 3.13 -3.09 4.79l-0.24 1.46 -0.05 -1.50c-0.03 -1.15 -0.26 -1.67 -0.95 -2.22l-0.91 -0.71 1.25 -0.41c1.34 -0.44 4.72 -3.85 5.27 -5.31 0.42 -1.11 0.42 -3.40 -0.01 -4.53 -0.19 -0.49 -0.91 -1.32 -1.60 -1.85 -1.14 -0.87 -1.39 -0.92 -2.49 -0.56 -1.75 0.58 -3.01 -0.07 -3.47 -1.77 -0.55 -2.04 -3.30 -3.73 -3.83 -2.35 -0.11 0.30 -0.35 0.45 -0.53 0.34 -0.18 -0.11 0.00 -0.83 0.40 -1.60 0.84 -1.66 0.71 -2.82 -0.21 -5.24 -0.01 0.01 -0.02 0.02 -0.03 0.03 -0.59 0.40 -1.12 0.55 -1.58 0.38 -0.91 -0.34 -1.65 -0.48 -2.25 -0.47 -0.61 0.01 -1.08 0.17 -1.46 0.44 -0.77 0.54 -1.16 1.51 -1.50 2.53 -0.17 0.51 -0.50 0.95 -0.91 1.32 -0.41 0.37 -0.92 0.68 -1.44 0.92 -1.05 0.48 -2.18 0.71 -2.86 0.71 -0.68 0.00 -2.84 -0.51 -5.19 -0.96 -2.35 -0.45 -4.91 -0.85 -6.38 -0.63 -0.74 0.11 -1.49 0.40 -2.20 0.76 -0.71 0.36 -1.39 0.80 -1.97 1.23 -1.16 0.85 -1.96 1.65 -1.96 1.65 0.00 0.00 -1.98 1.25 -4.08 2.64 -2.10 1.39 -4.31 2.92 -4.77 3.49 -0.45 0.57 -0.68 1.70 -0.91 2.89 -0.23 1.19 -0.45 2.44 -0.91 3.23 -0.45 0.79 -1.42 1.70 -2.47 2.44 -1.05 0.74 -2.18 1.31 -2.98 1.42 -0.40 0.06 -0.74 -0.10 -1.03 -0.41 -0.29 -0.31 -0.53 -0.77 -0.73 -1.32 -0.40 -1.11 -0.62 -2.58 -0.74 -3.94 -0.06 -0.68 -0.30 -1.05 -0.63 -1.21 -0.33 -0.16 -0.76 -0.10 -1.18 0.07 -0.85 0.34 -1.70 1.14 -1.82 1.59 -0.11 0.45 -0.79 0.96 -1.79 1.36 -0.99 0.40 -2.30 0.68 -3.66 0.68 -1.36 0.00 -2.21 0.11 -2.72 0.51 -0.51 0.40 -0.68 1.08 -0.68 2.21 0.00 0.57 -0.04 1.03 -0.16 1.44 -0.12 0.40 -0.32 0.73 -0.63 1.03 -0.62 0.60 -1.70 1.05 -3.52 1.62 -1.82 0.57 -3.40 1.31 -5.05 2.16 -1.65 0.85 -3.35 1.82 -5.39 2.84 -2.04 1.02 -5.28 3.12 -8.00 4.96 -0.23 0.16 -0.20 0.14 -0.42 0.29 0.86 0.68 1.72 1.38 2.40 2.07 1.76 1.81 2.89 3.49 3.37 4.29 0.24 0.40 0.76 0.78 1.41 1.13 0.65 0.35 1.42 0.66 2.16 0.92 1.48 0.52 2.85 0.84 2.85 0.84 0.00 0.00 0.56 1.44 1.36 3.05 0.40 0.80 0.86 1.65 1.34 2.37 0.48 0.72 0.98 1.32 1.47 1.64 0.48 0.32 1.20 0.50 2.02 0.59 0.81 0.09 1.71 0.09 2.56 0.05 1.68 -0.08 3.13 -0.32 3.13 -0.32l6.74 3.85c0.00 0.00 1.12 0.64 1.97 1.44 0.42 0.40 0.77 0.84 0.88 1.26 0.11 0.42 -0.04 0.82 -0.60 1.14 -1.12 0.64 -2.97 1.45 -4.89 2.53 -0.96 0.54 -1.95 1.15 -2.87 1.85 -0.92 0.70 -1.79 1.48 -2.51 2.36 -0.72 0.88 -1.12 1.64 -1.28 2.33 -0.16 0.68 -0.08 1.28 0.16 1.85 0.48 1.12 1.60 2.09 2.73 3.21 1.12 1.12 2.49 2.97 4.09 4.73 0.80 0.88 1.66 1.74 2.59 2.49 0.92 0.74 1.90 1.36 2.95 1.77 2.09 0.80 4.09 1.04 6.02 1.40 0.96 0.18 1.91 0.39 2.83 0.72 0.92 0.33 1.82 0.77 2.71 1.41 1.77 1.28 3.13 2.65 4.37 4.13 1.24 1.48 2.37 3.09 3.65 4.85 1.28 1.77 2.17 3.29 2.73 4.37 0.56 1.08 0.80 1.73 0.80 1.73 0.00 0.00 -0.72 0.48 -0.92 0.61z",
    },
    path07: {
        name: "Bengkulu",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m228.93 275.48c0.49 0.90 0.99 1.67 0.99 1.67 0.00 0.00 -0.91 -0.11 -2.30 0.26 -0.69 0.18 -1.51 0.49 -2.39 0.99 -0.88 0.50 -1.83 1.19 -2.80 2.16 -1.03 1.03 -2.09 2.12 -3.16 3.16 0.93 1.26 1.96 2.87 2.64 3.55 0.92 0.92 2.72 2.25 4.02 2.97 1.29 0.72 2.61 1.60 2.93 1.96 0.32 0.36 1.66 2.76 2.97 5.33 2.79 5.47 6.17 10.51 8.05 12.04 3.50 2.84 9.75 7.30 13.09 9.32 5.29 3.20 5.59 3.49 6.24 5.98 0.31 1.18 0.87 2.76 1.26 3.51 0.50 0.96 0.65 1.75 0.50 2.70 -0.19 1.23 -0.08 1.46 1.53 3.02 0.95 0.93 3.82 3.16 6.36 4.96 5.22 3.69 7.07 5.19 11.05 8.90 1.53 1.43 3.64 3.01 4.70 3.51 2.78 1.33 7.86 5.24 9.12 7.03 0.71 1.00 1.55 1.70 2.42 2.00 0.74 0.25 2.09 0.98 3.02 1.62 0.85 0.59 2.63 1.43 4.07 2.00 0.34 -0.26 0.71 -0.66 1.03 -0.89 1.81 -1.28 3.17 -2.09 3.17 -2.09 0.00 0.00 -0.24 -0.64 -0.80 -1.73 -0.56 -1.08 -1.44 -2.61 -2.73 -4.37 -1.28 -1.77 -2.41 -3.37 -3.65 -4.85 -1.24 -1.48 -2.61 -2.85 -4.37 -4.13 -0.88 -0.64 -1.78 -1.08 -2.71 -1.41 -0.92 -0.33 -1.87 -0.54 -2.83 -0.72 -1.93 -0.36 -3.93 -0.60 -6.02 -1.40 -1.04 -0.40 -2.03 -1.02 -2.95 -1.77 -0.92 -0.74 -1.78 -1.60 -2.59 -2.49 -1.60 -1.77 -2.97 -3.61 -4.09 -4.73 -1.12 -1.12 -2.25 -2.09 -2.73 -3.21 -0.24 -0.56 -0.32 -1.16 -0.16 -1.85 0.16 -0.68 0.56 -1.44 1.28 -2.33 0.72 -0.88 1.59 -1.67 2.51 -2.36 0.92 -0.70 1.91 -1.31 2.87 -1.85 1.93 -1.08 3.77 -1.89 4.89 -2.53 0.56 -0.32 0.70 -0.72 0.60 -1.14 -0.11 -0.42 -0.46 -0.86 -0.88 -1.26 -0.84 -0.80 -1.97 -1.44 -1.97 -1.44l-6.74 -3.85c0.00 0.00 -1.44 0.24 -3.13 0.32 -0.84 0.04 -1.74 0.04 -2.56 -0.05 -0.81 -0.09 -1.53 -0.27 -2.02 -0.59 -0.48 -0.32 -0.98 -0.92 -1.47 -1.64 -0.48 -0.72 -0.94 -1.56 -1.34 -2.37 -0.80 -1.60 -1.36 -3.05 -1.36 -3.05 0.00 0.00 -1.36 -0.32 -2.85 -0.84 -0.74 -0.26 -1.51 -0.57 -2.16 -0.92 -0.65 -0.35 -1.17 -0.73 -1.41 -1.13 -0.48 -0.80 -1.60 -2.49 -3.37 -4.29 -0.88 -0.90 -1.93 -1.83 -3.13 -2.70 -1.20 -0.87 -2.57 -1.67 -4.09 -2.31 -3.05 -1.28 -5.54 -2.73 -7.46 -4.21 -0.96 -0.74 -1.78 -1.50 -2.47 -2.24 -0.68 -0.75 -1.22 -1.49 -1.62 -2.21 -0.80 -1.44 -1.44 -2.97 -2.13 -4.33 -0.68 -1.36 -1.40 -2.57 -2.37 -3.37 -0.11 -0.09 -0.38 -0.22 -0.52 -0.32zm28.49 100.34c-0.53 -0.03 -0.69 0.17 -0.92 0.80 -0.65 1.71 0.59 3.31 4.30 5.57 0.69 0.42 1.78 0.76 2.43 0.76 1.11 0.00 1.17 -0.07 1.18 -1.35 0.00 -0.74 0.10 -1.71 0.22 -2.15 0.19 -0.71 -0.09 -0.94 -2.54 -2.05 -1.51 -0.69 -3.31 -1.36 -3.99 -1.49 -0.28 -0.05 -0.49 -0.09 -0.67 -0.10z",
    },
    path08: {
        name: "Lampung",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m306.51 361.78c-0.51 0.31 -0.96 0.57 -2.24 1.48 -0.32 0.23 -0.69 0.63 -1.03 0.89 0.12 0.05 0.22 0.13 0.34 0.17 2.04 0.76 3.00 1.34 3.79 2.32 0.58 0.72 1.80 1.62 2.70 2.01 2.07 0.89 3.16 1.90 3.45 3.21 0.12 0.57 0.76 1.48 1.42 2.02 0.74 0.61 1.34 1.55 1.58 2.43 0.43 1.61 3.61 4.94 7.51 7.88 1.88 1.41 2.25 1.87 2.25 2.77 0.00 0.84 0.25 1.21 1.13 1.69 2.15 1.16 6.57 5.44 7.24 7.02 0.35 0.83 0.91 1.71 1.24 1.96 1.26 0.96 3.12 0.47 3.89 -1.01 1.09 -2.10 0.48 -4.10 -2.69 -8.79 -0.80 -1.19 -1.46 -2.35 -1.46 -2.60 -0.00 -0.72 2.04 -1.58 3.14 -1.32 0.55 0.13 1.64 0.83 2.43 1.55 1.90 1.75 4.57 3.42 9.21 5.76 3.28 1.65 3.99 1.89 5.12 1.68 1.72 -0.32 2.18 -1.23 1.90 -3.77 -0.18 -1.66 -0.10 -2.21 0.50 -3.10 0.40 -0.59 0.72 -1.52 0.72 -2.07 0.00 -1.64 0.99 -1.19 3.96 1.80 5.71 5.75 10.72 10.52 11.04 10.52 0.18 0.00 0.83 -0.53 1.45 -1.17 1.69 -1.76 2.67 -5.99 2.81 -12.16 0.06 -2.68 0.30 -5.59 0.54 -6.47 0.24 -0.88 0.42 -2.72 0.40 -4.10 -0.02 -1.40 0.28 -3.88 0.69 -5.63 0.68 -2.90 0.69 -3.22 0.17 -4.47 -0.68 -1.64 -0.71 -2.89 -0.09 -4.72 0.28 -0.83 0.45 -2.85 0.43 -5.02 -0.04 -3.39 -0.13 -3.81 -1.37 -6.42 -0.79 -1.65 -1.33 -3.34 -1.33 -4.12 0.00 -0.38 0.28 -1.25 0.39 -1.84 -2.17 -0.64 -3.54 -1.13 -5.14 -1.45 -0.80 -0.16 -1.54 -0.48 -2.22 -0.90 -0.67 -0.42 -1.27 -0.94 -1.80 -1.51 -1.04 -1.12 -1.77 -2.41 -2.09 -3.37 -0.32 -0.96 -1.36 -2.33 -2.57 -3.45 -0.60 -0.56 -1.25 -1.06 -1.86 -1.43 -0.61 -0.36 -1.19 -0.58 -1.67 -0.58 -0.48 0.00 -0.88 0.22 -1.24 0.56 -0.36 0.34 -0.68 0.79 -1.00 1.25 -0.32 0.46 -0.64 0.93 -1.00 1.31 -0.36 0.38 -0.76 0.66 -1.24 0.74 -0.96 0.16 -1.76 0.24 -2.45 0.36 -0.68 0.12 -1.24 0.28 -1.73 0.60 -0.24 0.16 -0.34 0.42 -0.38 0.77 -0.04 0.35 -0.02 0.78 -0.02 1.28 0.00 0.50 -0.02 1.07 -0.14 1.70 -0.12 0.63 -0.34 1.31 -0.74 2.03 -0.40 0.72 -1.24 1.34 -2.37 1.91 -1.12 0.57 -2.53 1.08 -4.05 1.58 -3.05 1.00 -6.58 1.97 -9.31 3.25 -2.73 1.28 -4.57 2.09 -6.02 3.05 -0.72 0.48 -1.34 1.00 -1.92 1.65 -0.58 0.64 -1.12 1.40 -1.69 2.36 -1.12 1.93 -1.93 4.73 -2.73 7.38 -0.40 1.32 -0.80 2.61 -1.24 3.72 -0.44 1.11 -0.92 2.06 -1.48 2.70 -0.56 0.64 -1.24 0.98 -2.00 1.13 -0.76 0.15 -1.59 0.10 -2.45 -0.04 -1.72 -0.28 -3.57 -0.92 -5.17 -1.08 -0.40 -0.04 -0.80 -0.23 -1.18 -0.53 -0.39 -0.30 -0.76 -0.72 -1.12 -1.21 -0.44 -0.60 -0.80 -1.40 -1.19 -2.14zm36.67 29.22c-0.16 -0.02 -0.31 0.02 -0.42 0.13 -0.25 0.25 -0.18 0.55 0.22 0.96 0.72 0.72 1.26 0.76 1.26 0.09 0.00 -0.57 -0.58 -1.12 -1.06 -1.18z",
    },
    path09: {
        name: "Kep. Bangka Belitung",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m379.79 250.85 -1.68 0.60c-0.93 0.33 -2.19 0.60 -2.81 0.60 -0.70 -0.00 -1.21 0.22 -1.35 0.57 -0.38 0.99 -0.21 3.87 0.32 5.34 0.53 1.49 0.45 2.00 -0.34 2.00 -0.72 0.00 -1.64 -1.63 -2.39 -4.25 -0.37 -1.30 -0.80 -2.48 -0.95 -2.63 -0.15 -0.15 -1.53 -0.15 -3.05 -0.01 -2.31 0.22 -2.99 0.44 -4.08 1.33 -0.72 0.58 -1.65 1.66 -2.07 2.38l-0.76 1.32 0.84 1.50 0.84 1.49 -0.84 0.89c-0.46 0.49 -2.03 1.48 -3.48 2.20 -2.96 1.46 -4.03 2.67 -4.03 4.53 0.00 1.63 0.79 2.40 2.48 2.40 0.97 0.00 1.58 0.25 2.19 0.90 0.80 0.85 1.00 0.89 3.86 0.72 1.71 -0.10 3.50 -0.43 4.12 -0.75 1.00 -0.52 1.23 -0.52 2.41 -0.01 0.72 0.31 2.11 0.67 3.10 0.80 0.99 0.13 2.06 0.37 2.37 0.53 0.69 0.36 2.12 4.55 2.12 6.20 0.00 0.88 0.32 1.49 1.29 2.42 1.90 1.82 2.38 2.91 1.90 4.28 -0.22 0.62 -0.33 2.24 -0.25 3.61 0.12 2.05 0.33 2.76 1.22 4.03 1.06 1.51 1.18 1.57 6.18 3.02 3.94 1.15 5.39 1.74 6.38 2.61 0.76 0.66 1.68 1.13 2.25 1.13 0.61 0.00 1.43 0.45 2.24 1.25 0.70 0.69 1.92 1.48 2.71 1.77v0.00 0.00c1.79 0.66 5.59 0.73 6.38 0.13 0.32 -0.25 0.63 -0.85 0.70 -1.35 0.11 -0.85 0.21 -0.89 2.11 -0.78 2.18 0.13 2.73 -0.21 2.86 -1.74 0.13 -1.61 0.01 -1.83 -1.32 -2.38 -1.73 -0.72 -2.78 -0.41 -3.72 1.12 -0.43 0.69 -1.02 1.26 -1.32 1.26 -0.79 0.00 -2.64 -1.98 -2.64 -2.83 0.00 -1.52 1.91 -5.83 3.28 -7.38 0.77 -0.87 1.40 -1.75 1.40 -1.95 0.00 -0.20 -0.55 -0.84 -1.22 -1.43 -0.89 -0.78 -1.87 -1.19 -3.69 -1.52 -1.36 -0.25 -3.02 -0.67 -3.68 -0.95 -0.67 -0.27 -1.85 -0.49 -2.62 -0.49 -2.83 0.00 -4.69 -2.27 -6.60 -8.03 -0.99 -2.99 -1.34 -4.74 -1.51 -7.54 -0.19 -3.18 -0.36 -3.86 -1.24 -5.26 -0.56 -0.88 -1.02 -1.75 -1.02 -1.93 0.00 -0.18 -0.48 -1.00 -1.07 -1.82 -0.79 -1.10 -1.06 -1.86 -1.02 -2.88 0.03 -0.76 -0.10 -1.49 -0.29 -1.62 -0.19 -0.13 -1.28 -0.95 -2.42 -1.83l-2.08 -1.59zm98.51 1.92c-0.68 0.00 -2.40 0.95 -2.89 1.61 -0.35 0.46 -0.03 2.29 0.51 2.94 0.49 0.59 0.43 0.60 1.92 -0.02 1.33 -0.56 1.99 -1.49 1.99 -2.81 0.00 -1.02 -0.62 -1.71 -1.52 -1.71zm-6.45 4.86c-1.16 -0.02 -1.99 0.55 -1.58 1.22 0.13 0.22 0.96 0.39 1.84 0.39 1.32 0.00 1.60 -0.12 1.60 -0.67 0.00 -0.50 -0.35 -0.73 -1.34 -0.89 -0.18 -0.03 -0.35 -0.04 -0.52 -0.05zm-30.53 28.22c-2.62 0.00 -3.16 0.27 -4.42 2.22 -0.74 1.15 -2.03 6.68 -2.03 8.72 0.00 0.92 -0.17 2.36 -0.37 3.19 -0.29 1.19 -0.23 2.04 0.27 4.02 0.59 2.34 0.74 2.57 2.15 3.35 1.30 0.72 1.70 0.78 2.89 0.46 0.76 -0.20 1.93 -0.94 2.60 -1.64 1.54 -1.59 2.60 -1.63 3.68 -0.15 0.45 0.62 1.38 1.51 2.07 1.98 0.69 0.47 1.47 0.86 1.73 0.86 0.26 0.00 1.22 -0.57 2.13 -1.26 0.91 -0.69 1.86 -1.26 2.11 -1.26 1.02 0.00 1.59 -1.12 1.59 -3.11 0.00 -1.58 0.28 -2.56 1.41 -4.84 1.39 -2.81 1.41 -2.88 0.89 -4.38 -0.97 -2.83 -5.43 -6.44 -8.78 -7.10 -0.99 -0.19 -2.62 -0.52 -3.62 -0.71 -1.00 -0.20 -2.95 -0.36 -4.32 -0.36zm-10.30 9.03c-0.18 0.01 -0.40 0.04 -0.69 0.08 -2.15 0.35 -2.82 1.45 -1.92 3.14 0.43 0.80 1.01 0.87 2.30 0.28 1.06 -0.48 1.44 -1.42 1.12 -2.71 -0.15 -0.62 -0.28 -0.81 -0.82 -0.79zm-13.07 2.12c-0.21 0.00 -0.28 0.16 -0.16 0.36 0.12 0.20 0.29 0.36 0.38 0.36 0.09 0.00 0.16 -0.16 0.16 -0.36 0.00 -0.20 -0.17 -0.36 -0.38 -0.36zm-36.25 2.05c0.33 0.27 0.55 0.64 0.89 0.89 0.57 0.42 1.16 0.67 1.75 1.04 -0.59 -0.98 -1.47 -1.64 -2.64 -1.93z",
    },
    path10: {
        name: "Kep. Riau",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m448.00 45.97c-0.70 0.00 -1.76 1.65 -1.50 2.33 0.11 0.30 0.62 0.54 1.12 0.54 0.82 0.00 0.91 -0.14 0.91 -1.44 0.00 -1.03 -0.15 -1.44 -0.53 -1.44zm6.93 17.71c-0.34 0.05 -2.00 1.63 -3.69 3.51 -3.33 3.70 -3.55 4.28 -2.51 6.75 0.58 1.38 1.86 2.96 2.40 2.96 0.17 0.00 0.90 0.25 1.62 0.55l1.31 0.55 -1.32 1.36c-1.58 1.62 -1.65 2.21 -0.33 3.00 1.28 0.77 2.05 0.79 4.43 0.08 2.35 -0.69 2.71 -0.96 3.02 -2.22 0.13 -0.54 0.65 -1.58 1.15 -2.31 0.82 -1.20 0.90 -1.61 0.78 -4.01 -0.13 -2.59 -0.18 -2.72 -1.75 -4.43 -0.89 -0.97 -2.26 -2.68 -3.05 -3.82 -0.93 -1.33 -1.66 -2.03 -2.05 -1.97zm-63.36 28.68c-0.71 0.00 -1.37 1.95 -0.84 2.48 0.58 0.58 1.68 0.49 1.93 -0.16 0.29 -0.75 -0.45 -2.32 -1.09 -2.32zm-1.81 3.96c-0.43 0.00 -0.57 0.36 -0.57 1.41 0.00 1.12 0.20 1.56 0.99 2.15 1.75 1.32 3.00 0.55 2.47 -1.53 -0.21 -0.83 -1.92 -2.03 -2.89 -2.03zm-16.94 7.73 -0.11 2.12c-0.06 1.16 -0.02 2.34 0.08 2.61 0.24 0.62 0.55 0.62 1.26 -0.02 0.31 -0.28 1.13 -0.65 1.82 -0.83 0.99 -0.25 1.36 -0.60 1.76 -1.66 0.30 -0.80 0.38 -1.47 0.19 -1.65 -0.18 -0.17 -1.38 -0.37 -2.66 -0.43l-2.34 -0.12zm102.86 0.54c-0.63 0.00 -1.98 1.89 -1.98 2.77 0.00 0.37 0.19 0.87 0.43 1.11 0.92 0.92 3.52 0.01 3.52 -1.24 0.00 -0.78 -1.39 -2.64 -1.98 -2.64zm-85.90 6.22c-0.06 -0.01 -0.10 0.01 -0.14 0.04 -0.10 0.10 -0.08 0.59 0.05 1.10 0.24 0.96 1.29 1.29 1.29 0.40 0.00 -0.51 -0.82 -1.49 -1.21 -1.54zm91.15 7.88c-0.17 0.02 -0.33 0.09 -0.45 0.21 -0.21 0.21 -0.26 0.56 -0.12 0.79 0.32 0.51 1.34 0.34 1.54 -0.26 0.15 -0.44 -0.45 -0.79 -0.96 -0.73zm-147.66 44.56c-0.32 0.00 -0.67 0.02 -1.05 0.04 -2.21 0.14 -2.95 0.37 -4.78 1.48 -3.14 1.91 -3.26 2.11 -2.12 3.84 0.81 1.23 1.14 1.44 2.24 1.44 0.71 0.00 1.85 -0.27 2.55 -0.60 1.54 -0.73 1.90 -0.36 1.90 2.02 0.01 1.31 0.21 1.82 1.15 2.79 1.34 1.38 1.65 1.42 3.46 0.50 1.45 -0.74 2.68 -2.78 3.09 -5.12 0.20 -1.15 0.06 -1.52 -1.19 -3.10 -2.07 -2.62 -3.00 -3.29 -5.25 -3.28zm-15.34 0.33c-0.91 -0.02 -2.76 2.57 -3.03 4.22 -0.19 1.17 -0.44 1.55 -1.27 1.90 -1.37 0.57 -1.32 1.52 0.13 2.21 1.42 0.68 2.07 0.30 2.07 -1.23 0.00 -0.89 0.11 -1.03 0.63 -0.79 0.35 0.16 1.38 0.35 2.29 0.43 1.55 0.14 1.73 0.06 2.62 -1.11 1.13 -1.48 1.79 -3.49 1.31 -3.97 -0.41 -0.41 -3.94 -1.65 -4.76 -1.66zm2.86 8.12c-0.92 -0.06 -0.46 1.53 1.38 3.99 0.98 1.31 1.48 1.25 2.62 -0.30 0.93 -1.26 0.76 -2.12 -0.42 -2.12 -0.45 0.00 -1.45 -0.42 -2.21 -0.94 -0.61 -0.42 -1.07 -0.62 -1.38 -0.64zm-11.88 1.68c-0.30 -0.00 -0.53 0.09 -0.65 0.28 -0.35 0.57 0.49 2.31 1.37 2.82 0.81 0.47 2.14 0.49 2.42 0.04 0.12 -0.19 -0.03 -0.83 -0.33 -1.41 -0.49 -0.95 -1.92 -1.73 -2.80 -1.74zm17.34 3.13c-0.45 -0.08 -1.04 0.18 -1.68 0.78 -1.05 0.99 -1.06 1.67 -0.02 2.08 1.12 0.45 2.34 0.45 2.62 -0.01 0.13 -0.21 0.13 -0.94 0.01 -1.62 -0.14 -0.74 -0.47 -1.16 -0.92 -1.24zm10.61 0.00c-0.56 0.00 -0.90 0.21 -0.90 0.54 0.00 0.34 0.34 0.54 0.90 0.54 0.56 0.00 0.90 -0.20 0.90 -0.54 0.00 -0.34 -0.34 -0.54 -0.90 -0.54zm-2.56 18.00c-0.47 -0.02 -0.85 0.10 -0.85 0.37 0.00 1.35 2.39 3.88 4.91 5.20 1.29 0.67 1.56 0.67 1.56 0.00 0.00 -0.50 -3.02 -4.15 -4.25 -5.13 -0.34 -0.27 -0.90 -0.42 -1.37 -0.44zm-3.60 2.39c-0.73 0.28 -0.63 2.51 0.13 2.96 1.04 0.61 2.61 0.34 2.61 -0.44 0.00 -0.68 -2.22 -2.72 -2.74 -2.52zm5.31 4.88c-0.19 0.00 -0.39 0.03 -0.59 0.06 -0.99 0.19 -1.30 0.44 -1.46 1.21 -0.44 2.15 -1.00 3.92 -1.64 5.18 -0.82 1.61 -0.65 2.16 0.96 3.02 1.22 0.66 1.27 0.66 3.73 -0.18 3.00 -1.02 3.72 -0.92 7.03 1.02 1.38 0.81 2.64 1.46 2.80 1.46 0.16 0.00 1.10 -0.26 2.07 -0.58 2.12 -0.69 2.31 -1.48 0.61 -2.44 -0.64 -0.36 -1.74 -1.31 -2.45 -2.10l-1.28 -1.44 -1.19 0.62 -1.19 0.62 -1.31 -1.27c-0.72 -0.70 -1.74 -1.43 -2.26 -1.63 -0.65 -0.24 -1.03 -0.72 -1.20 -1.47 -0.29 -1.32 -1.32 -2.10 -2.65 -2.07zm-2.92 11.79c-0.31 0.01 -1.20 0.41 -1.99 0.90 -1.75 1.08 -2.19 1.11 -2.44 0.17 -0.26 -1.01 -0.77 -0.90 -2.05 0.45 -0.98 1.04 -1.08 1.33 -0.87 2.60 0.13 0.81 0.74 2.06 1.40 2.88 0.64 0.79 1.44 1.97 1.76 2.61 0.73 1.44 1.23 1.46 2.50 0.14 0.54 -0.57 1.58 -1.21 2.32 -1.43 1.85 -0.56 3.12 -2.47 2.83 -4.26 -0.23 -1.43 -2.49 -4.08 -3.46 -4.06z",
    },
    path11: {
        name: "DKI Jakarta",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m402.69 399.71c-0.29 1.24 -0.61 2.76 -0.75 4.62 -0.16 2.09 -0.52 3.49 -0.56 4.59 -0.02 0.55 0.04 1.03 0.25 1.48 0.21 0.45 0.56 0.87 1.12 1.31 1.12 0.88 2.20 1.88 3.21 2.63 0.50 0.37 0.98 0.68 1.44 0.87 0.46 0.19 0.89 0.27 1.29 0.19 0.80 -0.16 1.61 -0.88 2.33 -1.95 0.72 -1.06 1.36 -2.47 1.85 -3.99 0.48 -1.52 0.60 -3.65 0.60 -5.40 0.00 -1.27 -0.05 -1.78 -0.09 -2.26 -0.33 0.07 -0.39 0.13 -0.89 0.22 -3.24 0.60 -4.16 0.51 -5.30 -0.52 -1.57 -1.42 -2.91 -1.80 -4.48 -1.79z",
    },
    path12: {
        name: "Jawa Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m469.97 456.03c0.06 -1.55 0.18 -3.41 0.04 -3.92 -0.23 -0.79 -1.08 -1.70 -2.01 -2.78 -0.94 -1.08 -1.96 -2.33 -2.52 -3.80 -0.28 -0.74 -0.48 -1.40 -0.57 -2.01 -0.09 -0.61 -0.08 -1.16 0.06 -1.67 0.14 -0.51 0.41 -0.98 0.83 -1.42 0.42 -0.44 0.99 -0.85 1.72 -1.25 1.47 -0.79 2.50 -0.57 3.32 -0.88 0.41 -0.16 0.77 -0.44 1.12 -1.07 0.34 -0.62 0.67 -1.57 1.01 -3.05 0.34 -1.47 0.50 -3.19 0.54 -4.94 0.03 -1.27 -0.04 -2.49 -0.10 -3.70 -0.97 -0.09 -1.79 -0.31 -3.09 -1.02 -1.93 -1.05 -2.20 -1.34 -2.58 -2.76 -0.23 -0.87 -0.53 -2.52 -0.66 -3.66 -0.23 -2.00 -0.31 -2.13 -2.22 -3.57 -1.09 -0.82 -2.72 -2.46 -3.62 -3.63 -1.14 -1.48 -2.15 -2.36 -3.28 -2.86l-1.63 -0.72 -0.84 1.04c-0.46 0.57 -1.00 1.24 -1.20 1.48 -0.71 0.87 -2.47 0.43 -6.75 -1.71 -4.46 -2.22 -5.70 -2.50 -7.25 -1.62 -1.38 0.79 -2.95 0.65 -4.34 -0.40 -0.68 -0.51 -1.90 -1.23 -2.71 -1.58 -1.05 -0.46 -1.95 -1.32 -3.14 -2.99 -2.40 -3.36 -3.48 -3.94 -6.81 -3.64 -2.28 0.21 -2.85 0.14 -4.14 -0.52 -2.31 -1.18 -3.21 -1.03 -3.66 0.59 -0.21 0.74 -0.38 1.85 -0.38 2.46 -0.00 0.88 -0.38 1.09 -1.72 1.37 0.03 0.49 0.09 0.99 0.09 2.26 0.00 1.74 -0.12 3.87 -0.60 5.40 -0.48 1.52 -1.12 2.93 -1.85 3.99 -0.72 1.06 -1.53 1.79 -2.33 1.95 -0.40 0.08 -0.83 0.00 -1.29 -0.19 -0.46 -0.19 -0.94 -0.50 -1.44 -0.87 -0.50 -0.37 -1.06 -0.85 -1.59 -1.30 -0.04 0.03 -0.08 0.09 -0.12 0.12 -0.69 0.54 -1.34 0.88 -1.85 0.83 -1.02 -0.11 -2.55 -0.40 -4.14 -0.48 -0.79 -0.04 -1.60 -0.04 -2.37 0.07 -0.77 0.10 -1.49 0.30 -2.11 0.64 -0.62 0.34 -0.89 0.75 -0.94 1.25 -0.04 0.49 0.14 1.07 0.43 1.73 0.28 0.67 0.67 1.43 1.02 2.29 0.35 0.86 0.68 1.83 0.85 2.90 0.34 2.16 0.51 3.29 0.40 4.11 -0.11 0.82 -0.51 1.33 -1.30 2.24 -0.40 0.45 -0.65 1.01 -0.81 1.58 -0.16 0.57 -0.22 1.17 -0.24 1.71 -0.01 0.24 0.02 0.22 0.03 0.43 1.23 0.44 2.46 0.58 3.89 0.08 1.66 -0.58 2.90 0.04 2.90 1.44 0.00 0.76 -0.29 1.23 -1.03 1.71 -2.77 1.80 -4.34 4.93 -3.65 7.30 0.45 1.58 1.01 2.18 2.04 2.18 0.48 0.00 1.47 0.30 2.20 0.67 0.95 0.48 2.85 0.79 6.55 1.08 7.59 0.61 12.14 1.09 14.39 1.52 1.09 0.21 3.52 0.52 5.39 0.68 1.88 0.16 3.90 0.42 4.50 0.56 1.86 0.45 5.21 2.30 6.77 3.73 0.82 0.76 2.06 1.50 2.76 1.64 0.69 0.15 1.72 0.59 2.29 0.99 0.59 0.42 1.97 0.84 3.24 0.99 1.22 0.15 3.51 0.62 5.09 1.04 1.58 0.43 5.02 0.96 7.65 1.19l4.77 0.41 1.52 -1.47c1.98 -1.90 2.89 -2.35 4.31 -2.08 0.23 0.04 0.80 -0.10 1.20 -0.12z",
    },
    path13: {
        name: "Jawa Tengah",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m543.10 473.48c0.03 -0.29 0.01 -0.57 0.06 -0.85 0.17 -0.79 0.46 -1.51 0.94 -2.03 0.96 -1.04 3.17 -2.25 5.21 -3.43 1.02 -0.59 2.01 -1.18 2.77 -1.74 0.77 -0.56 1.32 -1.09 1.48 -1.57 0.32 -0.96 0.72 -1.48 0.90 -1.95 0.18 -0.46 0.14 -0.86 -0.42 -1.59 -0.56 -0.72 -1.36 -1.12 -1.96 -1.88 -0.30 -0.38 -0.55 -0.85 -0.70 -1.50 -0.15 -0.65 -0.19 -1.47 -0.07 -2.55 0.24 -2.17 0.28 -4.09 0.26 -5.62 -0.02 -1.52 -0.10 -2.65 -0.10 -3.21 0.00 -0.56 0.12 -0.84 0.52 -1.00 0.40 -0.16 1.08 -0.20 2.21 -0.28 1.12 -0.08 2.25 0.24 3.31 0.28 0.53 0.02 1.05 -0.03 1.54 -0.23 0.49 -0.21 0.96 -0.57 1.40 -1.17 0.88 -1.20 1.81 -1.73 2.53 -2.43 0.36 -0.35 0.67 -0.75 0.90 -1.29 0.23 -0.55 0.38 -1.25 0.42 -2.22 0.08 -1.93 0.20 -3.49 0.46 -4.97 0.26 -1.48 0.66 -2.89 1.30 -4.49 0.79 -1.96 1.39 -3.32 2.16 -5.11 -2.38 -2.33 -3.70 -2.55 -6.95 -1.16 -2.27 0.98 -2.83 1.07 -5.33 0.94 -2.60 -0.14 -2.89 -0.24 -4.06 -1.38 -0.90 -0.87 -1.48 -1.94 -2.01 -3.67 -0.81 -2.66 -1.14 -3.00 -4.18 -4.19 -0.92 -0.36 -1.42 -0.54 -1.97 -0.56 -0.56 -0.02 -1.18 0.12 -2.34 0.41 -4.48 1.09 -5.64 2.19 -6.37 6.03 -0.71 3.72 -2.90 8.30 -4.78 10.00 -1.52 1.38 -3.93 2.28 -5.09 1.91 -0.37 -0.12 -1.67 -0.86 -2.90 -1.66 -2.19 -1.42 -2.27 -1.44 -3.54 -0.94 -0.72 0.28 -2.36 0.72 -3.65 0.97 -2.56 0.50 -3.96 0.29 -10.96 -1.60 -3.81 -1.03 -7.28 -1.15 -9.69 -0.33 -2.33 0.79 -5.31 0.48 -9.69 -1.01 -3.42 -1.16 -3.46 -1.17 -4.56 -0.52 -0.97 0.57 -1.24 0.59 -2.25 0.18 -0.63 -0.26 -2.12 -0.45 -3.30 -0.43 -0.51 0.01 -0.84 -0.06 -1.22 -0.10 0.06 1.21 0.13 2.44 0.10 3.70 -0.04 1.74 -0.20 3.46 -0.54 4.94 -0.34 1.47 -0.67 2.43 -1.01 3.05 -0.34 0.62 -0.71 0.91 -1.12 1.07 -0.82 0.31 -1.85 0.09 -3.32 0.88 -0.74 0.40 -1.30 0.81 -1.72 1.25 -0.42 0.44 -0.69 0.91 -0.83 1.42 -0.14 0.51 -0.16 1.06 -0.06 1.67 0.09 0.61 0.29 1.28 0.57 2.01 0.57 1.48 1.59 2.72 2.52 3.80 0.94 1.08 1.79 1.99 2.01 2.78 0.14 0.51 0.02 2.37 -0.04 3.92 0.70 -0.04 1.36 -0.02 2.11 -0.22 2.83 -0.74 3.00 -0.72 2.81 0.31 -0.12 0.63 0.05 0.98 0.64 1.30 0.91 0.49 4.24 0.29 4.61 -0.27 0.32 -0.50 4.32 -0.96 8.07 -0.94 2.96 0.02 3.26 0.09 4.76 1.16 1.52 1.09 1.79 1.15 5.57 1.30 2.95 0.12 4.64 0.38 6.57 1.04 1.43 0.48 4.18 1.29 6.10 1.80 0.73 0.19 1.97 0.86 2.79 1.15 0.15 -0.23 0.13 -0.21 0.29 -0.44 1.74 -2.57 3.75 -5.42 4.80 -6.54 1.04 -1.12 2.04 -1.84 3.03 -2.17 0.49 -0.16 0.98 -0.22 1.46 -0.18 0.48 0.04 0.97 0.18 1.45 0.42 0.96 0.48 1.69 1.56 2.51 2.63 0.41 0.53 0.85 1.06 1.35 1.50 0.50 0.44 1.08 0.81 1.76 1.01 1.36 0.40 3.05 0.60 4.45 1.10 0.70 0.25 1.34 0.58 1.82 1.04 0.49 0.46 0.83 1.07 0.95 1.87 0.37 2.49 0.27 6.89 0.25 9.44 0.93 0.20 2.15 0.61 2.77 0.67 0.73 0.06 1.43 0.30 2.24 0.48z",
    },
    path14: {
        name: "Banten",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m393.19 432.46c-0.01 -0.21 -0.04 -0.19 -0.03 -0.43 0.01 -0.54 0.08 -1.13 0.24 -1.71 0.16 -0.57 0.42 -1.13 0.81 -1.58 0.79 -0.91 1.19 -1.42 1.30 -2.24 0.11 -0.82 -0.06 -1.96 -0.40 -4.11 -0.17 -1.08 -0.50 -2.04 -0.85 -2.90 -0.35 -0.86 -0.74 -1.62 -1.02 -2.29 -0.28 -0.67 -0.47 -1.24 -0.43 -1.73 0.04 -0.49 0.31 -0.91 0.94 -1.25 0.62 -0.34 1.35 -0.54 2.11 -0.64 0.77 -0.10 1.58 -0.11 2.37 -0.07 1.59 0.09 3.12 0.37 4.14 0.48 0.51 0.06 1.16 -0.28 1.85 -0.83 0.04 -0.03 0.08 -0.09 0.12 -0.12 -0.54 -0.46 -1.05 -0.88 -1.62 -1.32 -0.56 -0.44 -0.91 -0.86 -1.12 -1.31 -0.21 -0.45 -0.27 -0.93 -0.25 -1.48 0.04 -1.10 0.40 -2.51 0.56 -4.59 0.14 -1.86 0.46 -3.38 0.75 -4.62 -0.75 0.01 -1.41 -0.08 -2.44 0.19 -1.40 0.36 -1.77 0.29 -4.23 -0.75 -1.48 -0.63 -3.13 -1.32 -3.65 -1.54 -0.84 -0.35 -1.11 -0.26 -2.23 0.72 -1.56 1.37 -2.62 1.23 -3.04 -0.39 -0.29 -1.12 -1.76 -2.26 -2.80 -2.28 -0.15 -0.00 -0.29 0.02 -0.41 0.06 -1.03 0.37 -5.86 7.18 -6.45 9.08 -0.29 0.94 -0.65 3.27 -0.81 5.17 -0.31 3.84 -1.07 5.45 -2.78 5.87 -1.59 0.40 -3.67 2.34 -4.32 4.04 -0.33 0.87 -1.04 1.89 -1.58 2.28 -0.54 0.38 -1.18 1.19 -1.43 1.78 -0.25 0.60 -0.61 1.09 -0.80 1.09 -0.41 0.00 -2.09 -1.71 -2.67 -2.71 -0.40 -0.68 -0.48 -0.67 -2.70 0.51 -3.18 1.70 -3.37 1.91 -2.96 3.35 0.30 1.04 0.49 1.19 1.59 1.21 1.09 0.02 1.27 0.15 1.43 1.07 0.23 1.34 0.94 1.48 3.62 0.73 1.15 -0.32 2.48 -0.49 2.96 -0.37 0.48 0.12 1.88 -0.05 3.13 -0.37 1.59 -0.41 2.92 -0.52 4.47 -0.35 1.53 0.16 2.87 0.06 4.43 -0.34 2.85 -0.74 4.79 -0.35 8.04 1.61 1.30 0.78 2.51 1.42 2.70 1.42 0.19 0.00 1.07 0.49 1.96 1.08 0.50 0.33 0.99 0.41 1.48 0.59z",
    },
    path15: {
        name: "Jawa Timur",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m658.55 472.78c-0.09 -0.68 -0.36 -2.50 -0.36 -2.50 0.00 0.00 0.08 -1.77 0.40 -3.89 0.16 -1.06 0.38 -2.21 0.68 -3.28 0.30 -1.07 0.68 -2.05 1.16 -2.77 0.02 -0.03 0.06 -0.08 0.08 -0.11 -0.20 -0.92 -0.67 -1.70 -1.52 -2.26 -0.73 -0.48 -2.06 -1.04 -2.95 -1.25 -4.62 -1.08 -6.60 -1.80 -7.60 -2.76 -1.43 -1.37 -3.29 -1.38 -5.23 -0.04 -0.93 0.64 -1.88 0.98 -2.76 0.98 -0.74 0.00 -1.85 0.26 -2.45 0.57 -0.95 0.49 -1.64 0.52 -4.86 0.21l-3.75 -0.37 -3.67 1.37 -3.67 1.37 -1.62 -0.85c-0.89 -0.47 -1.96 -0.85 -2.38 -0.85 -0.42 0.00 -1.19 -0.34 -1.72 -0.75 -0.52 -0.41 -2.82 -1.46 -5.09 -2.32 -2.28 -0.86 -4.62 -1.91 -5.21 -2.33 -1.30 -0.93 -1.41 -2.33 -0.30 -3.75 0.86 -1.09 1.24 -3.46 0.88 -5.41 -0.31 -1.67 -1.99 -2.82 -3.73 -2.56 -1.02 0.15 -1.16 0.09 -0.98 -0.48 0.13 -0.42 -0.15 -1.08 -0.75 -1.80 -1.05 -1.25 -1.64 -3.23 -1.73 -5.85 -0.03 -0.93 -0.18 -1.81 -0.33 -1.96 -0.15 -0.15 -0.90 -0.22 -1.68 -0.17 -0.85 0.06 -1.74 -0.12 -2.22 -0.46 -1.01 -0.71 -3.63 -0.72 -6.76 -0.03 -1.29 0.28 -3.13 0.52 -4.11 0.53 -1.63 0.01 -1.89 -0.11 -3.24 -1.54 -1.84 -1.95 -3.48 -2.67 -4.73 -2.10 -1.25 0.57 -2.02 0.52 -4.37 -0.31 -1.35 -0.47 -2.61 -1.28 -3.72 -2.36 -0.01 -0.01 -0.01 -0.01 -0.02 -0.02 -0.77 1.79 -1.37 3.14 -2.16 5.11 -0.64 1.60 -1.04 3.01 -1.30 4.49 -0.26 1.48 -0.38 3.05 -0.46 4.97 -0.04 0.96 -0.19 1.67 -0.42 2.21 -0.23 0.55 -0.54 0.94 -0.90 1.29 -0.72 0.70 -1.65 1.22 -2.53 2.43 -0.44 0.60 -0.91 0.96 -1.40 1.17 -0.49 0.21 -1.01 0.25 -1.54 0.23 -1.06 -0.04 -2.19 -0.36 -3.31 -0.28 -1.12 0.08 -1.81 0.12 -2.21 0.28 -0.40 0.16 -0.52 0.44 -0.52 1.00 0.00 0.56 0.08 1.68 0.10 3.21 0.02 1.52 -0.02 3.45 -0.26 5.62 -0.12 1.08 -0.08 1.91 0.07 2.55 0.15 0.65 0.40 1.12 0.70 1.50 0.60 0.76 1.40 1.16 1.96 1.88 0.56 0.72 0.60 1.12 0.42 1.59 -0.18 0.46 -0.58 0.98 -0.90 1.95 -0.16 0.48 -0.71 1.01 -1.48 1.57 -0.77 0.56 -1.75 1.15 -2.77 1.74 -2.05 1.18 -4.25 2.39 -5.21 3.43 -0.48 0.52 -0.77 1.24 -0.94 2.03 -0.06 0.27 -0.03 0.56 -0.06 0.85 0.78 0.17 1.68 0.27 2.16 0.46 1.70 0.67 1.88 0.68 3.04 0.12 1.21 -0.58 1.26 -0.57 2.41 0.40 0.99 0.83 1.40 0.96 2.54 0.77 0.75 -0.12 1.99 -0.32 2.74 -0.44 1.02 -0.16 1.98 0.02 3.71 0.72 1.40 0.56 3.05 0.94 4.11 0.94 1.13 0.00 2.47 0.33 3.72 0.91 2.20 1.03 2.90 0.94 2.90 -0.34 0.00 -0.53 0.38 -1.19 0.96 -1.63 1.04 -0.82 2.63 -0.75 4.51 0.21 0.54 0.27 2.69 0.58 4.83 0.69 2.27 0.12 4.27 0.41 4.86 0.72 0.55 0.28 1.80 0.52 2.77 0.52 0.98 0.00 2.49 0.32 3.38 0.71 0.89 0.39 2.67 0.86 3.97 1.05 1.29 0.18 2.68 0.51 3.08 0.73 1.15 0.61 3.55 0.46 5.09 -0.33 1.00 -0.51 2.12 -0.72 3.88 -0.72 2.35 0.00 2.52 -0.06 3.55 -1.22 0.84 -0.95 1.56 -1.32 3.21 -1.68 3.70 -0.80 5.85 -0.65 7.89 0.56 0.99 0.59 2.41 1.35 3.17 1.70 0.76 0.35 1.81 0.94 2.34 1.31 0.53 0.37 1.53 0.79 2.22 0.93 0.69 0.14 1.91 0.70 2.70 1.25 1.37 0.95 2.15 1.27 6.63 2.71 1.07 0.35 2.58 1.04 3.34 1.55 1.17 0.77 1.85 0.93 4.34 0.99 1.62 0.04 3.38 0.19 3.91 0.33 0.61 0.17 1.34 0.06 2.03 -0.30 0.86 -0.44 1.32 -0.48 2.20 -0.17 1.09 0.38 1.32 0.81 1.55 2.83 0.09 0.76 0.34 0.93 1.72 1.14 0.89 0.13 2.02 0.41 2.52 0.61 1.61 0.66 2.77 0.48 3.59 -0.55 1.32 -1.68 0.88 -2.61 -1.92 -4.06 -2.65 -1.38 -3.44 -2.36 -3.46 -4.28 -0.01 -0.74 -0.37 -1.70 -0.91 -2.40 -1.04 -1.37 -1.10 -2.26 -0.36 -5.30 0.12 -0.50 0.33 -1.38 0.52 -2.13zm31.19 -45.94c-3.30 0.00 -4.02 0.30 -4.73 2.00 -0.61 1.46 -0.46 2.08 0.64 2.61 1.20 0.58 2.12 0.50 3.30 -0.29 0.59 -0.39 1.60 -0.72 2.24 -0.72 1.42 0.00 3.70 -1.04 3.70 -1.69 0.00 -1.08 -2.23 -1.90 -5.15 -1.90zm-47.12 0.80c-0.24 0.00 -0.48 0.02 -0.74 0.06 -3.94 0.56 -11.88 0.83 -20.78 0.71 -12.46 -0.17 -12.89 -0.10 -16.14 2.81 -2.21 1.98 -2.50 2.39 -2.50 3.52 0.00 0.70 0.13 1.48 0.29 1.73 0.58 0.91 2.74 2.25 3.64 2.25 0.51 0.00 2.54 0.40 4.52 0.89 4.36 1.08 4.87 1.10 5.11 0.19 0.18 -0.70 0.21 -0.70 1.03 -0.05 0.68 0.53 1.53 0.67 4.32 0.70 1.91 0.02 3.54 0.10 3.62 0.18 0.08 0.08 1.31 0.07 2.74 -0.03 2.61 -0.18 3.64 -0.66 4.03 -1.87 0.34 -1.07 2.53 -1.82 5.32 -1.81 2.45 0.01 2.65 -0.06 3.49 -1.08 0.63 -0.75 1.50 -1.24 2.88 -1.59 3.20 -0.83 5.40 -1.90 5.38 -2.62 -0.01 -0.67 -2.18 -2.45 -4.26 -3.51 -0.63 -0.32 -1.25 -0.47 -1.96 -0.47z",
    },
    path16: {
        name: "Yogyakarta",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m538.10 472.34c0.02 -2.56 0.12 -6.96 -0.25 -9.44 -0.12 -0.80 -0.46 -1.40 -0.95 -1.87 -0.49 -0.46 -1.12 -0.79 -1.82 -1.04 -1.40 -0.50 -3.09 -0.70 -4.45 -1.10 -0.68 -0.20 -1.25 -0.56 -1.76 -1.01 -0.50 -0.44 -0.94 -0.97 -1.35 -1.50 -0.82 -1.06 -1.54 -2.15 -2.51 -2.63 -0.48 -0.24 -0.96 -0.38 -1.45 -0.42 -0.48 -0.04 -0.97 0.02 -1.46 0.18 -0.98 0.32 -1.98 1.04 -3.03 2.17 -1.04 1.12 -3.05 3.97 -4.80 6.54 -0.16 0.23 -0.14 0.21 -0.29 0.44 1.93 0.69 3.70 1.27 6.57 2.72 8.72 4.41 8.75 4.42 13.40 5.97 1.53 0.51 2.76 0.69 4.15 1.00z",
    },
    path17: {
        name: "Bali",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m660.52 460.22c-0.02 0.03 -0.06 0.08 -0.08 0.11 -0.48 0.72 -0.86 1.71 -1.16 2.77 -0.30 1.07 -0.52 2.22 -0.68 3.28 -0.32 2.13 -0.40 3.89 -0.40 3.89 0.00 0.00 0.27 1.81 0.36 2.50 0.26 -1.07 0.51 -2.09 0.74 -3.04 0.39 -1.63 0.72 -3.55 0.72 -4.27 0.00 -0.72 0.18 -1.93 0.41 -2.67 0.29 -0.97 0.28 -1.81 0.11 -2.57zm22.73 7.24c-0.84 0.05 -1.46 0.32 -1.88 0.78 -1.69 1.88 -3.49 2.72 -6.31 2.97 -2.44 0.22 -3.03 0.14 -5.21 -0.69 -1.40 -0.53 -3.60 -1.03 -5.09 -1.14 -1.44 -0.11 -2.70 -0.34 -2.81 -0.51 -0.10 -0.17 -0.58 -0.31 -1.05 -0.31 -0.70 0.00 -0.91 0.23 -1.10 1.26 -0.37 1.98 0.09 3.48 1.77 5.78 2.25 3.07 2.67 3.36 5.29 3.62 2.93 0.29 6.81 1.66 9.22 3.26 1.99 1.32 5.36 4.75 6.17 6.30 0.44 0.84 0.40 1.06 -0.45 2.31 -1.09 1.60 -1.22 2.89 -0.31 3.13 2.31 0.60 3.51 -0.29 5.09 -3.80 1.34 -2.97 2.35 -3.97 4.91 -4.90 1.17 -0.42 2.54 -1.02 3.03 -1.32 0.49 -0.30 1.79 -1.01 2.88 -1.58 4.54 -2.37 4.71 -4.08 0.82 -8.04 -3.06 -3.12 -4.24 -3.87 -8.82 -5.65 -2.73 -1.06 -4.75 -1.54 -6.16 -1.45zm12.23 20.19c-0.42 0.05 -0.87 0.26 -1.31 0.62 -1.13 0.92 -0.71 2.74 0.85 3.69 1.44 0.88 2.27 0.88 2.74 0.00 0.57 -1.06 0.45 -2.15 -0.37 -3.30 -0.43 -0.61 -0.94 -0.94 -1.49 -1.01 -0.14 -0.02 -0.28 -0.02 -0.42 0.00z",
    },
    path18: {
        name: "Nusa Tenggara Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m774.39 467.98c-0.57 0.00 -1.25 0.13 -2.42 0.39 -3.36 0.75 -5.38 2.16 -5.73 4.02 -0.25 1.32 -0.21 1.39 2.96 4.42 3.71 3.54 6.45 5.22 7.99 4.88 0.78 -0.17 1.46 0.06 2.96 1.03 3.19 2.05 4.08 2.90 3.80 3.63 -0.21 0.54 -0.53 0.61 -2.03 0.43 -2.22 -0.26 -3.74 0.23 -5.51 1.81 -1.06 0.95 -1.59 1.18 -2.34 1.03 -0.53 -0.10 -1.57 -0.29 -2.31 -0.42 -1.54 -0.26 -2.86 -1.60 -3.50 -3.56 -0.32 -0.97 -0.68 -1.33 -1.56 -1.55 -0.81 -0.20 -1.33 -0.66 -1.79 -1.59 -0.36 -0.72 -1.25 -1.85 -1.98 -2.50l-1.33 -1.20 2.08 -3.75c1.15 -2.06 2.00 -3.96 1.90 -4.23 -0.13 -0.34 -0.94 -0.48 -2.71 -0.48h-2.52 0.00l-0.95 1.43c-1.09 1.65 -1.02 2.82 0.35 5.52l0.83 1.65 -1.00 0.22c-0.55 0.12 -1.19 0.45 -1.43 0.74 -0.65 0.78 -1.76 0.61 -3.94 -0.60 -4.42 -2.47 -6.33 -2.51 -8.59 -0.18 -0.65 0.68 -2.35 1.75 -3.77 2.40 -3.34 1.52 -4.76 2.59 -5.61 4.27 -0.65 1.28 -0.66 1.52 -0.18 3.83 0.51 2.45 0.51 2.48 -0.40 3.78 -0.86 1.24 -0.89 1.45 -0.55 3.53 0.20 1.21 0.46 2.37 0.58 2.57 0.42 0.68 2.48 1.52 5.72 2.34 1.79 0.45 3.60 0.84 4.02 0.86 1.13 0.06 3.05 -0.67 4.39 -1.66 1.14 -0.84 1.28 -0.86 3.62 -0.47 3.23 0.54 6.55 -0.19 9.98 -2.20 2.05 -1.20 2.72 -1.43 3.84 -1.28 2.17 0.29 6.12 -0.36 8.40 -1.38 1.50 -0.67 2.50 -0.89 3.44 -0.77 1.95 0.25 6.38 -2.38 7.65 -4.56 0.50 -0.86 1.22 -1.84 1.60 -2.18 0.65 -0.59 0.70 -0.58 0.92 0.13 0.15 0.48 -0.04 1.20 -0.54 2.00 -0.76 1.23 -0.77 1.27 -0.12 2.60 0.99 2.04 2.40 2.26 6.67 1.05 4.04 -1.15 4.60 -1.17 7.32 -0.23 3.68 1.27 5.51 0.02 2.91 -1.97 -0.85 -0.65 -1.65 -0.92 -2.72 -0.92 -0.92 0.00 -1.43 -0.14 -1.29 -0.36 0.35 -0.56 4.29 -0.42 6.17 0.22 2.05 0.69 5.04 0.53 6.38 -0.34 0.86 -0.56 0.93 -0.82 0.93 -3.12 0.00 -2.80 -0.37 -3.12 -2.07 -1.78 -0.81 0.64 -1.01 0.67 -1.67 0.22 -0.65 -0.43 -0.74 -0.80 -0.64 -2.62 0.10 -1.84 -0.05 -2.45 -1.20 -4.73 -1.70 -3.39 -2.37 -3.83 -5.34 -3.51 -1.98 0.21 -2.45 0.41 -3.49 1.48 -0.66 0.68 -1.32 1.24 -1.48 1.24 -0.15 0.00 -0.54 -0.50 -0.85 -1.11 -0.64 -1.24 -3.63 -2.84 -5.31 -2.84 -1.20 -0.01 -3.41 1.07 -4.36 2.11 -1.59 1.75 -4.75 0.28 -6.39 -2.98 -1.33 -2.65 -2.40 -3.81 -3.51 -3.81 -0.56 0.00 -1.72 -0.25 -2.59 -0.55 -0.71 -0.25 -1.17 -0.38 -1.74 -0.37zm37.11 2.05c-0.42 0.00 -0.88 0.25 -1.41 0.74 -0.93 0.87 -1.03 1.62 -0.41 2.98 0.52 1.13 1.59 1.19 2.71 0.13 0.97 -0.91 1.06 -1.97 0.27 -3.10 -0.35 -0.50 -0.73 -0.76 -1.15 -0.76zm-87.84 2.12c-2.43 -0.06 -4.95 1.47 -8.54 4.97 -1.83 1.79 -3.33 3.54 -3.33 3.90 -0.00 0.36 0.26 1.80 0.59 3.21 0.33 1.40 0.50 2.95 0.37 3.44 -0.31 1.23 -3.24 2.57 -5.72 2.61 -1.42 0.02 -1.91 0.17 -2.00 0.60 -0.25 1.29 0.63 2.37 3.19 3.90 2.59 1.54 2.65 1.56 3.66 0.98 1.28 -0.74 3.12 -0.76 4.80 -0.05 0.71 0.30 1.88 0.54 2.60 0.54 0.72 0.00 1.79 0.33 2.38 0.72 1.31 0.88 2.04 0.79 2.52 -0.29 0.32 -0.72 0.53 -0.79 1.88 -0.59 1.73 0.26 3.33 -0.03 3.33 -0.61 0.00 -0.21 -0.33 -0.86 -0.74 -1.43 -0.73 -1.03 -0.74 -1.06 -0.06 -2.03 1.09 -1.57 3.51 -6.44 5.10 -10.26 1.07 -2.56 1.37 -3.69 1.13 -4.13 -0.74 -1.37 -2.54 -2.63 -4.91 -3.46 -1.38 -0.48 -3.10 -1.13 -3.84 -1.44 -0.83 -0.36 -1.63 -0.55 -2.44 -0.57zm-23.87 25.27c-0.34 0.05 -0.81 0.30 -1.23 0.70 -0.53 0.49 -1.74 1.42 -2.69 2.06 -0.95 0.64 -1.67 1.35 -1.59 1.58 0.08 0.23 0.92 0.53 1.88 0.67 1.26 0.18 2.05 0.56 2.84 1.35 1.28 1.28 1.84 1.25 1.81 -0.10 -0.13 -5.69 -0.17 -6.02 -0.72 -6.23 -0.08 -0.03 -0.18 -0.04 -0.30 -0.02z",
    },
    path19: {
        name: "Nusa Tenggara Timur",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m934.92 468.06c-0.47 0.03 -0.81 0.35 -1.65 1.19 -1.40 1.40 -1.77 2.81 -1.03 3.97 0.28 0.45 0.53 0.46 1.61 0.07 0.80 -0.29 1.49 -0.34 1.85 -0.14 0.48 0.27 0.26 0.61 -1.29 1.99 -1.79 1.61 -4.41 2.76 -6.28 2.76 -0.93 0.00 -3.44 2.53 -4.46 4.50 -1.20 2.30 -1.58 2.61 -3.84 3.09 -3.03 0.64 -4.77 0.53 -5.88 -0.37 -1.85 -1.50 -4.15 -2.90 -4.76 -2.90 -0.44 0.00 -0.66 -0.34 -0.74 -1.17 -0.10 -1.01 -0.27 -1.18 -1.20 -1.27 -0.67 -0.07 -1.77 0.27 -2.88 0.87 -1.66 0.91 -2.07 0.98 -5.53 0.91 -3.37 -0.06 -3.89 0.02 -5.22 0.80 -0.81 0.48 -1.78 1.20 -2.16 1.62 -0.38 0.42 -1.10 0.75 -1.62 0.75 -1.49 -0.01 -3.81 -1.25 -4.71 -2.51 -0.95 -1.34 -2.13 -1.90 -5.69 -2.71 -1.76 -0.40 -3.02 -0.95 -4.07 -1.78 -1.44 -1.14 -1.72 -1.22 -5.33 -1.45 -2.85 -0.18 -4.25 -0.45 -5.60 -1.08 -2.95 -1.38 -5.59 -1.75 -8.85 -1.24 -1.55 0.24 -3.06 0.35 -3.36 0.23 -1.02 -0.39 -3.96 0.79 -5.23 2.09 -0.68 0.70 -1.49 1.27 -1.82 1.27 -0.32 0.00 -1.38 0.53 -2.36 1.17 -1.50 0.99 -2.09 1.17 -3.93 1.17h-2.16 0.00l-0.11 1.26c-0.06 0.70 -0.49 1.65 -0.97 2.16 -0.47 0.49 -1.01 1.33 -1.21 1.85 -0.21 0.56 -0.80 1.10 -1.44 1.32 -0.90 0.31 -1.24 0.26 -1.97 -0.32 -0.49 -0.38 -1.16 -0.69 -1.50 -0.69 -0.53 0.00 -0.58 0.20 -0.34 1.35 0.15 0.74 0.30 2.08 0.32 2.97l0.04 1.62 1.53 0.11 1.53 0.11v0.00 -1.40c0.00 -1.02 0.24 -1.62 0.90 -2.24l0.90 -0.85v0.00 1.42c0.00 1.58 0.51 2.49 2.65 4.73 1.66 1.73 2.02 1.82 3.41 0.80 1.07 -0.79 4.32 -1.77 5.88 -1.78 0.53 0.00 1.55 0.34 2.25 0.75 0.96 0.57 1.66 0.71 2.81 0.57 0.84 -0.10 3.04 -0.37 4.88 -0.59l3.36 -0.40 2.19 1.09c2.45 1.22 3.03 1.30 4.03 0.54 1.19 -0.90 2.29 -0.62 4.08 1.04 0.93 0.86 1.94 1.67 2.23 1.78 1.01 0.40 4.85 0.02 6.53 -0.65 1.51 -0.61 1.87 -0.62 3.69 -0.19 2.37 0.57 3.08 0.31 5.19 -1.87l1.31 -1.35 2.34 0.37c1.29 0.21 2.90 0.72 3.59 1.14 1.79 1.09 5.43 1.11 7.26 0.03 0.73 -0.43 2.35 -1.04 3.60 -1.36 1.25 -0.32 2.92 -1.02 3.71 -1.55 1.41 -0.95 1.56 -0.97 7.03 -0.97l5.60 -0.01 2.62 -1.37c1.44 -0.75 3.86 -1.69 5.37 -2.07 1.51 -0.39 3.29 -0.88 3.95 -1.09l1.20 -0.39 -0.25 -2.42 -0.24 -2.43 1.28 -0.75c0.73 -0.43 1.38 -1.15 1.51 -1.67 0.14 -0.56 0.48 -0.92 0.88 -0.92 0.36 0.00 0.91 -0.10 1.22 -0.22 0.44 -0.17 0.57 0.02 0.57 0.83 0.00 0.58 0.17 1.22 0.39 1.43 0.27 0.27 0.10 0.46 -0.61 0.63 -1.28 0.32 -3.73 2.26 -3.73 2.95 0.00 0.89 1.07 2.65 1.60 2.65 0.28 0.00 0.86 -0.49 1.28 -1.09 0.43 -0.60 1.37 -1.39 2.09 -1.76 0.73 -0.37 1.91 -1.34 2.64 -2.15 1.17 -1.31 1.50 -1.48 2.93 -1.48 1.41 0.00 1.76 -0.17 2.87 -1.40 1.10 -1.21 1.23 -1.56 1.02 -2.60 -0.31 -1.51 -1.40 -2.10 -3.91 -2.10 -1.92 -0.01 -3.93 0.90 -5.08 2.28 -0.74 0.89 -1.05 0.71 -1.05 -0.62 0.00 -2.32 -2.53 -5.99 -4.57 -6.61 -0.50 -0.15 -0.82 -0.24 -1.10 -0.23zm54.38 1.58c-1.49 0.00 -1.72 0.12 -2.55 1.34 -0.63 0.93 -0.91 1.82 -0.91 2.90 0.00 1.11 -0.26 1.90 -0.90 2.74 -0.99 1.30 -1.23 3.68 -0.45 4.49 0.52 0.53 2.34 0.38 6.20 -0.52 1.38 -0.32 3.57 -0.64 4.85 -0.70 1.29 -0.06 3.39 -0.37 4.68 -0.68 1.29 -0.31 3.35 -0.56 4.59 -0.56 2.14 -0.01 2.34 -0.08 3.87 -1.49 1.92 -1.77 2.07 -2.88 0.69 -5.24l-0.92 -1.58 -6.27 0.19c-3.45 0.10 -6.90 0.29 -7.68 0.42 -1.12 0.18 -1.65 0.06 -2.49 -0.53 -0.71 -0.51 -1.62 -0.76 -2.71 -0.76zm-23.36 2.14c-1.00 0.04 -2.25 0.74 -4.23 2.15 -2.84 2.03 -3.01 2.10 -3.47 1.45 -0.49 -0.70 -2.51 -1.43 -3.98 -1.43 -1.17 0.00 -1.39 0.96 -0.45 1.96l0.80 0.85 -3.27 2.43c-1.83 1.36 -3.27 2.70 -3.27 3.03 0.00 0.35 1.00 1.20 2.43 2.07 1.34 0.81 2.54 1.49 2.67 1.50 0.13 0.01 0.73 -0.39 1.33 -0.90 1.05 -0.88 1.13 -0.90 2.20 -0.35 1.38 0.71 1.68 0.52 2.58 -1.56 0.93 -2.16 1.64 -2.93 2.75 -2.93 0.64 0.00 1.46 -0.61 2.83 -2.14 1.48 -1.64 2.20 -2.16 3.09 -2.25 1.58 -0.15 1.67 -1.21 0.25 -2.72 -0.64 -0.67 -1.20 -1.07 -1.85 -1.16 -0.13 -0.02 -0.27 -0.03 -0.42 -0.02zm16.03 0.38c-1.52 0.01 -2.36 0.58 -4.09 2.78l-1.84 2.34 -0.82 -1.03 -0.82 -1.03 -1.62 0.79c-0.89 0.43 -1.73 1.12 -1.86 1.53 -0.37 1.17 0.43 3.03 1.61 3.73 0.59 0.35 1.50 1.19 2.02 1.88 0.52 0.68 1.12 1.24 1.32 1.24 0.80 0.00 2.81 -1.91 3.34 -3.17 0.30 -0.73 1.02 -1.81 1.58 -2.41 1.69 -1.78 2.56 -6.66 1.18 -6.65zm-158.30 7.62c-0.70 0.08 -1.06 0.58 -1.90 2.62 -0.88 2.13 -0.98 2.71 -0.68 3.78 0.20 0.69 0.26 1.95 0.15 2.79 -0.20 1.44 -0.16 1.53 0.67 1.53 1.38 0.00 2.15 -0.81 2.96 -3.07 0.65 -1.81 0.91 -2.14 1.90 -2.40 0.63 -0.16 1.25 -0.45 1.36 -0.64 0.67 -1.08 -2.92 -4.78 -4.46 -4.60zm185.23 16.51c-0.57 -0.01 -1.30 0.04 -2.26 0.12 -3.18 0.25 -4.66 0.72 -8.47 2.66 -1.76 0.90 -6.58 4.79 -6.58 5.31 0.00 0.25 0.18 0.85 0.40 1.33 0.34 0.76 0.18 1.25 -1.29 3.79 -1.61 2.79 -3.03 4.36 -3.94 4.36 -0.23 0.00 -1.05 -0.65 -1.82 -1.44 -0.77 -0.79 -1.63 -1.44 -1.91 -1.44 -0.28 0.00 -1.06 0.49 -1.74 1.08 -0.68 0.59 -1.46 1.08 -1.75 1.08 -0.29 0.00 -1.61 -0.67 -2.93 -1.48 -3.28 -2.01 -4.45 -1.86 -7.26 0.88 -1.11 1.09 -3.46 3.23 -5.21 4.77 -2.85 2.51 -3.16 2.90 -2.98 3.79 0.11 0.55 -0.05 1.59 -0.35 2.32 -0.36 0.87 -0.47 1.79 -0.32 2.71 0.21 1.25 0.12 1.49 -0.86 2.31 -1.18 0.99 -1.86 3.17 -1.19 3.83 0.21 0.21 1.24 0.67 2.29 1.03 1.58 0.53 1.91 0.80 1.91 1.48 0.00 0.67 -0.45 1.05 -2.22 1.91 -2.25 1.09 -3.85 2.35 -4.48 3.52 -0.60 1.12 0.30 3.05 1.79 3.84 1.07 0.56 2.08 0.70 5.32 0.71 3.71 0.02 4.09 -0.05 5.35 -0.91 0.75 -0.51 2.21 -1.24 3.24 -1.62 1.03 -0.39 2.81 -1.37 3.95 -2.18l2.07 -1.48 4.37 -0.24c2.40 -0.13 4.71 -0.43 5.13 -0.66 0.42 -0.23 1.85 -1.63 3.18 -3.12 1.33 -1.48 3.13 -3.14 4.01 -3.69 0.88 -0.55 2.62 -2.30 3.88 -3.88 1.26 -1.58 2.96 -3.36 3.79 -3.96 0.82 -0.59 1.88 -1.36 2.34 -1.71 0.61 -0.45 0.92 -1.14 1.10 -2.47 0.14 -1.01 0.52 -2.05 0.84 -2.32 0.32 -0.27 0.97 -0.79 1.44 -1.15l0.85 -0.67 -0.47 -4.40 -0.47 -4.39 2.46 -2.48 2.46 -2.48 -0.81 -1.99c-0.86 -2.11 -1.14 -2.67 -2.85 -2.69zm-169.52 12.54c-0.48 0.00 -1.90 0.51 -3.15 1.14l-2.27 1.14 -2.58 -0.64c-2.14 -0.53 -2.81 -0.57 -3.89 -0.21 -0.72 0.24 -1.47 0.33 -1.68 0.20 -0.20 -0.13 -2.92 -0.04 -6.03 0.20 -7.03 0.53 -9.54 1.35 -11.86 3.88 -0.84 0.91 -1.53 1.85 -1.53 2.08 0.00 0.87 3.03 4.90 4.32 5.76 1.78 1.18 8.13 2.38 12.22 2.32 1.68 -0.03 3.95 0.12 5.04 0.33 1.69 0.32 2.21 0.63 3.60 2.14 1.78 1.94 3.00 2.69 5.31 3.27 1.84 0.46 3.78 2.08 4.42 3.68 0.58 1.46 1.41 2.42 3.99 4.58 1.85 1.55 2.24 1.72 4.50 1.96 1.36 0.14 2.96 0.47 3.55 0.74 1.72 0.78 3.77 0.64 5.52 -0.36 0.95 -0.54 2.15 -0.90 3.06 -0.91 2.28 -0.02 3.31 -0.66 5.49 -3.39 1.70 -2.14 1.97 -2.67 1.79 -3.60 -0.22 -1.18 -2.88 -3.92 -4.76 -4.91 -0.78 -0.41 -1.44 -1.29 -2.24 -2.97 -0.86 -1.82 -1.41 -2.52 -2.33 -2.96 -0.66 -0.32 -1.47 -1.03 -1.80 -1.59 -0.77 -1.30 -1.39 -1.48 -3.81 -1.09 -1.08 0.17 -2.17 0.23 -2.42 0.14 -0.73 -0.28 -1.91 -2.44 -1.91 -3.49 0.00 -0.79 -0.28 -1.09 -1.53 -1.66 -0.84 -0.38 -1.88 -0.70 -2.32 -0.70 -0.50 -0.01 -1.73 -0.95 -3.29 -2.53 -1.73 -1.74 -2.77 -2.52 -3.38 -2.52zm115.00 28.05c-0.94 0.00 -1.52 0.37 -3.04 1.98 -1.70 1.80 -1.85 2.09 -1.63 3.15 0.14 0.64 0.32 1.28 0.41 1.43 0.22 0.38 1.33 0.33 2.45 -0.09 0.57 -0.22 1.16 -0.88 1.49 -1.68 0.31 -0.73 0.97 -1.87 1.47 -2.52 0.75 -0.98 0.83 -1.29 0.46 -1.73 -0.25 -0.30 -0.97 -0.54 -1.61 -0.54zm-50.29 9.35c-1.27 0.00 -1.75 0.20 -2.61 1.11 -0.58 0.61 -1.82 1.51 -2.76 1.99 -2.04 1.04 -2.22 1.91 -0.54 2.75 2.36 1.18 4.91 0.70 7.73 -1.45 1.35 -1.03 1.44 -1.62 0.45 -3.23 -0.63 -1.03 -0.90 -1.17 -2.27 -1.17zm47.83 0.79c-0.74 -0.15 -5.62 3.43 -6.49 4.76 -0.76 1.16 -5.29 3.54 -8.61 4.53 -3.66 1.09 -3.96 1.45 -3.44 4.16 0.22 1.17 0.67 2.33 0.98 2.59 0.78 0.62 2.38 0.24 4.34 -1.04 0.87 -0.57 1.86 -1.04 2.18 -1.04 0.33 0.00 1.31 -0.24 2.19 -0.52 0.88 -0.29 2.26 -0.69 3.08 -0.90 1.15 -0.29 1.59 -0.63 1.94 -1.48 0.52 -1.25 2.65 -2.85 3.80 -2.85 1.20 0.00 1.73 -0.86 1.15 -1.86 -0.28 -0.48 -0.48 -1.95 -0.48 -3.52 0.00 -2.31 -0.09 -2.71 -0.65 -2.82z",
    },
    path20: {
        name: "Kalimantan Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m537.25 302.84 2.53 -3.93c0.00 0.00 1.85 -0.64 3.81 -1.73 0.98 -0.54 1.99 -1.19 2.82 -1.93 0.83 -0.74 1.47 -1.56 1.71 -2.44 0.48 -1.76 1.04 -4.41 1.29 -6.82 0.12 -1.20 0.16 -2.35 0.07 -3.29 -0.09 -0.94 -0.31 -1.69 -0.71 -2.09 -0.80 -0.80 -1.60 -2.25 -2.37 -3.81 -0.76 -1.56 -1.48 -3.25 -2.13 -4.53 -0.64 -1.28 -1.20 -2.57 -1.37 -4.01 -0.08 -0.72 -0.06 -1.49 0.10 -2.31 0.16 -0.82 0.46 -1.70 0.94 -2.67 0.48 -0.96 0.76 -1.78 0.90 -2.50 0.14 -0.71 0.13 -1.31 0.03 -1.84 -0.20 -1.04 -0.76 -1.77 -1.24 -2.41 -0.24 -0.32 -0.26 -0.74 -0.13 -1.18 0.14 -0.44 0.43 -0.90 0.81 -1.30 0.38 -0.40 0.85 -0.74 1.35 -0.94 0.50 -0.20 1.02 -0.26 1.50 -0.10 0.48 0.16 1.02 0.18 1.58 0.10 0.55 -0.09 1.11 -0.28 1.63 -0.54 1.04 -0.52 1.92 -1.32 2.25 -2.13 0.32 -0.80 1.77 -2.33 3.33 -3.81 1.56 -1.48 3.25 -2.93 4.05 -3.57 0.80 -0.64 1.76 -1.60 2.57 -2.65 0.80 -1.04 1.44 -2.17 1.60 -3.13 0.08 -0.48 0.68 -1.24 1.59 -2.13 0.91 -0.88 2.14 -1.88 3.46 -2.85 1.32 -0.96 2.75 -1.89 4.06 -2.61 1.31 -0.72 2.52 -1.24 3.40 -1.40 1.77 -0.32 3.85 -0.32 6.02 -0.32 2.17 0.00 4.41 0.00 6.50 -0.32 2.09 -0.32 6.34 -1.93 10.51 -3.53 4.17 -1.60 8.26 -3.21 10.03 -3.53 1.77 -0.32 4.01 0.08 5.82 0.12 0.90 0.02 1.70 -0.05 2.26 -0.35 0.28 -0.15 0.51 -0.35 0.66 -0.63 0.16 -0.28 0.24 -0.63 0.24 -1.07 0.00 -1.77 -0.24 -3.13 -0.12 -4.25 0.06 -0.56 0.21 -1.06 0.53 -1.52 0.32 -0.46 0.80 -0.88 1.52 -1.28 0.72 -0.40 1.32 -0.80 1.84 -1.28 0.51 -0.48 0.93 -1.03 1.29 -1.73 0.72 -1.40 1.20 -3.41 1.69 -6.62 0.48 -3.21 1.12 -5.86 2.09 -8.14 0.48 -1.14 1.04 -2.20 1.70 -3.18 0.66 -0.99 1.42 -1.91 2.31 -2.79 0.88 -0.88 2.02 -1.74 3.24 -2.54 1.22 -0.80 2.51 -1.53 3.70 -2.15 2.37 -1.24 4.29 -2.05 4.29 -2.05 0.00 0.00 -1.20 -1.76 -2.17 -3.97 -0.48 -1.10 -0.90 -2.32 -1.08 -3.47 -0.18 -1.16 -0.12 -2.26 0.36 -3.14 0.48 -0.88 1.28 -1.81 2.22 -2.69 0.93 -0.89 2.00 -1.74 3.00 -2.48 2.01 -1.48 3.77 -2.53 3.77 -2.53l0.75 -8.41c-1.22 -0.53 -1.78 -0.58 -4.37 -0.23l-3.06 0.41 -2.52 2.63c-2.11 2.20 -2.85 2.74 -4.59 3.28l-2.07 0.65 -1.20 -1.16c-1.17 -1.13 -1.26 -1.16 -3.52 -0.92 -2.15 0.22 -2.40 0.17 -3.44 -0.71 -1.38 -1.16 -3.71 -2.02 -5.50 -2.02 -0.76 0.00 -1.71 -0.29 -2.20 -0.67 -0.47 -0.37 -1.39 -0.94 -2.04 -1.27 -1.08 -0.55 -1.16 -0.72 -0.95 -1.82 0.19 -0.99 0.09 -1.28 -0.52 -1.61 -1.39 -0.74 -4.29 -1.11 -5.35 -0.68 -0.60 0.24 -3.70 0.42 -7.82 0.44l-6.83 0.04 -2.52 1.19c-5.31 2.50 -5.02 2.29 -5.24 3.85 -0.11 0.79 -0.48 1.96 -0.82 2.60 -0.34 0.64 -0.83 2.10 -1.08 3.24 -0.52 2.29 -1.28 2.95 -3.40 2.96 -1.57 0.01 -3.58 1.07 -5.02 2.66 -1.42 1.56 -2.60 1.91 -4.66 1.36 -2.11 -0.57 -3.09 -0.52 -4.60 0.20 -1.12 0.54 -1.43 0.55 -2.44 0.12 -0.63 -0.27 -1.91 -0.46 -2.83 -0.42 -1.15 0.05 -2.34 -0.23 -3.77 -0.87 -2.30 -1.03 -3.51 -1.03 -7.76 -0.01 -1.24 0.30 -3.20 0.72 -4.36 0.95 -1.63 0.32 -2.46 0.73 -3.62 1.80 -0.98 0.90 -2.08 1.51 -3.14 1.75 -0.90 0.20 -2.40 0.70 -3.34 1.10 -1.41 0.61 -1.95 0.67 -3.07 0.37 -0.75 -0.20 -1.57 -0.63 -1.84 -0.94 -0.26 -0.32 -1.46 -1.23 -2.65 -2.03 -1.19 -0.80 -3.50 -2.81 -5.12 -4.47 -1.64 -1.67 -3.56 -3.27 -4.32 -3.58 -2.13 -0.89 -3.85 -2.44 -4.38 -3.95 -0.69 -1.94 -1.38 -2.61 -3.16 -3.06 -1.16 -0.29 -1.74 -0.70 -2.31 -1.62 -0.42 -0.67 -1.31 -1.64 -1.98 -2.15 -1.59 -1.22 -2.67 -2.99 -2.67 -4.42 0.00 -1.43 -1.05 -3.50 -2.45 -4.83 -1.25 -1.19 -1.20 -1.59 0.64 -5.20 1.75 -3.43 1.08 -4.28 -1.52 -1.94 -1.17 1.05 -2.13 1.52 -4.22 2.03 -4.40 1.09 -4.18 0.91 -4.43 3.57 -0.36 3.85 -1.28 5.13 -6.72 9.34l-1.98 1.53 -0.20 3.04c-0.13 1.92 -0.44 3.48 -0.85 4.23 -0.42 0.77 -0.58 1.57 -0.44 2.25 0.19 0.94 0.07 1.12 -1.24 1.79 -0.80 0.41 -1.54 0.98 -1.65 1.27 -0.11 0.29 0.14 1.48 0.56 2.63 0.42 1.15 0.76 2.68 0.76 3.40 0.00 1.16 -0.21 1.46 -1.76 2.58 -0.97 0.70 -1.85 1.48 -1.95 1.74 -0.10 0.26 0.37 2.15 1.05 4.19 1.04 3.14 1.18 3.89 0.86 4.86 -0.27 0.82 -0.26 1.43 0.04 2.18 0.23 0.57 0.39 2.05 0.36 3.29 -0.08 2.90 0.34 3.69 1.94 3.69 1.64 0.00 3.14 1.35 5.29 4.75 2.28 3.59 2.32 3.74 1.16 4.03 -0.81 0.20 -0.93 0.39 -0.78 1.21 0.10 0.53 0.35 1.86 0.55 2.95 0.20 1.09 0.47 2.24 0.60 2.56 0.20 0.51 0.00 0.56 -1.41 0.41 -2.81 -0.32 -3.25 0.82 -1.54 3.94 0.65 1.19 0.68 1.50 0.29 2.81 -0.38 1.27 -0.35 1.65 0.21 2.80 0.76 1.56 4.25 3.64 6.13 3.66 0.94 0.01 1.21 0.19 1.39 0.92 0.13 0.50 0.57 1.17 1.00 1.48 0.62 0.46 0.64 0.53 0.11 0.35 -0.36 -0.12 -1.29 -0.32 -2.06 -0.45 -1.30 -0.21 -1.43 -0.15 -1.80 0.81 -0.22 0.57 -0.33 1.83 -0.23 2.81 0.14 1.47 0.39 1.98 1.44 2.95 1.72 1.58 3.50 1.89 5.45 0.94 1.30 -0.63 1.64 -0.67 2.56 -0.28 1.31 0.56 2.47 1.81 2.15 2.33 -0.13 0.21 -1.18 0.38 -2.33 0.38 -1.25 0.00 -2.23 0.18 -2.44 0.45 -0.19 0.25 -0.63 2.11 -0.97 4.14 -0.63 3.68 -0.63 3.69 0.15 4.95 0.43 0.69 1.06 1.26 1.40 1.26 0.34 0.00 2.25 -0.80 4.25 -1.78 4.01 -1.97 5.50 -3.41 5.50 -5.35 0.00 -1.36 0.09 -1.38 1.55 -0.28 0.63 0.47 1.51 0.97 1.96 1.10 0.66 0.20 0.81 0.51 0.81 1.68 0.00 1.89 0.77 3.30 2.30 4.20 2.04 1.21 2.52 2.25 2.22 4.85 -0.14 1.23 -0.39 3.44 -0.55 4.91 -0.28 2.62 -0.32 2.70 -2.13 4.37 -2.90 2.68 -2.52 4.39 1.37 6.25 2.17 1.04 2.22 1.09 2.91 3.35 0.65 2.09 0.66 2.40 0.17 3.57 -0.77 1.83 -0.68 3.94 0.22 5.20 0.41 0.58 0.98 2.12 1.25 3.43 0.27 1.30 0.82 2.92 1.22 3.60 0.94 1.59 0.92 1.85 -0.22 3.04l-0.95 0.99 1.16 1.73c1.15 1.71 1.16 1.77 1.00 5.23 -0.13 2.99 -0.06 3.67 0.53 4.63 0.62 1.01 0.81 1.10 1.98 0.92 0.71 -0.12 2.44 -0.88 3.85 -1.70 1.40 -0.82 3.12 -1.57 3.83 -1.67 1.13 -0.16 1.39 -0.04 2.25 1.09 0.53 0.70 0.97 1.54 0.97 1.86 0.00 1.04 0.67 1.89 1.80 2.29 0.59 0.21 0.96 0.21 1.32 0.14z",
    },
    path21: {
        name: "Kalimantan Tengah",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m702.98 245.55c0.03 -1.17 0.07 -2.23 0.07 -2.67 0.00 -0.68 -0.57 -1.64 -1.33 -2.75 -0.77 -1.11 -1.73 -2.36 -2.52 -3.60 -0.40 -0.62 -1.03 -1.09 -1.79 -1.49 -0.76 -0.40 -1.64 -0.72 -2.52 -1.06 -0.88 -0.34 -1.76 -0.69 -2.52 -1.15 -0.76 -0.45 -1.40 -1.01 -1.79 -1.75 -0.79 -1.47 -1.13 -3.12 -1.28 -4.65 -0.14 -1.53 -0.08 -2.95 -0.08 -3.97 0.00 -0.51 -0.24 -1.06 -0.60 -1.65 -0.36 -0.59 -0.84 -1.20 -1.33 -1.84 -0.48 -0.64 -0.96 -1.30 -1.33 -1.97 -0.36 -0.67 -0.60 -1.35 -0.60 -2.03v0.00 -11.34c0.00 -0.85 -0.23 -1.36 -0.61 -1.60 -0.39 -0.24 -0.93 -0.21 -1.57 0.01 -1.28 0.45 -2.92 1.70 -4.39 3.18 -0.74 0.74 -1.28 1.15 -1.67 1.34 -0.39 0.19 -0.64 0.15 -0.80 -0.00 -0.31 -0.31 -0.26 -1.11 -0.26 -1.56 0.00 -0.45 0.17 -1.87 0.45 -3.49 0.28 -1.62 0.68 -3.43 1.14 -4.68 0.45 -1.25 0.85 -4.14 1.11 -7.15 0.26 -3.01 0.37 -6.13 0.26 -7.83 -0.06 -0.85 -0.30 -1.46 -0.67 -1.90 -0.38 -0.44 -0.89 -0.70 -1.48 -0.85 -1.19 -0.31 -2.72 -0.20 -4.20 -0.20 -1.47 0.00 -3.58 0.51 -5.59 1.16 -2.01 0.65 -3.94 1.45 -5.08 2.01 -0.57 0.28 -1.25 0.44 -1.98 0.50 -0.73 0.06 -1.52 0.02 -2.30 -0.07 -1.56 -0.20 -3.09 -0.65 -4.11 -1.11 -1.02 -0.45 -2.55 -0.51 -4.20 -0.45 -1.65 0.06 -3.40 0.23 -4.88 0.23 -0.50 0.00 -1.13 0.03 -1.86 0.04 -0.12 0.05 -1.86 0.78 -4.15 1.98 -1.18 0.62 -2.48 1.35 -3.70 2.15 -1.22 0.80 -2.36 1.66 -3.24 2.54 -0.88 0.88 -1.64 1.81 -2.31 2.79 -0.66 0.99 -1.22 2.04 -1.70 3.18 -0.96 2.29 -1.60 4.93 -2.09 8.14 -0.48 3.21 -0.96 5.22 -1.69 6.62 -0.36 0.70 -0.78 1.25 -1.29 1.73 -0.51 0.48 -1.11 0.88 -1.84 1.28 -0.72 0.40 -1.20 0.82 -1.52 1.28 -0.32 0.46 -0.47 0.96 -0.53 1.52 -0.12 1.12 0.12 2.49 0.12 4.25 0.00 0.44 -0.09 0.79 -0.24 1.07 -0.16 0.28 -0.38 0.48 -0.66 0.63 -0.57 0.30 -1.36 0.37 -2.26 0.35 -1.81 -0.04 -4.05 -0.44 -5.82 -0.12 -1.77 0.32 -5.86 1.93 -10.03 3.53 -4.17 1.60 -8.42 3.21 -10.51 3.53 -2.09 0.32 -4.33 0.32 -6.50 0.32 -2.17 0.00 -4.25 -0.00 -6.02 0.32 -0.88 0.16 -2.09 0.68 -3.40 1.40 -1.31 0.72 -2.74 1.65 -4.06 2.61 -1.32 0.96 -2.55 1.96 -3.46 2.85 -0.91 0.88 -1.51 1.64 -1.59 2.13 -0.16 0.96 -0.80 2.09 -1.60 3.13 -0.80 1.04 -1.76 2.00 -2.57 2.65 -0.80 0.64 -2.49 2.09 -4.05 3.57 -1.56 1.48 -3.01 3.01 -3.33 3.81 -0.32 0.80 -1.20 1.60 -2.25 2.13 -0.52 0.26 -1.08 0.45 -1.63 0.54 -0.55 0.09 -1.09 0.06 -1.58 -0.10 -0.48 -0.16 -1.00 -0.10 -1.50 0.10 -0.50 0.20 -0.97 0.54 -1.35 0.94 -0.38 0.40 -0.67 0.86 -0.81 1.30 -0.14 0.44 -0.11 0.86 0.13 1.18 0.48 0.64 1.04 1.36 1.24 2.41 0.10 0.52 0.11 1.12 -0.03 1.84 -0.14 0.71 -0.42 1.53 -0.90 2.50 -0.48 0.96 -0.78 1.84 -0.94 2.67 -0.16 0.82 -0.18 1.59 -0.10 2.31 0.16 1.44 0.72 2.73 1.37 4.01 0.64 1.28 1.36 2.97 2.13 4.53 0.76 1.56 1.56 3.01 2.37 3.81 0.40 0.40 0.62 1.14 0.71 2.09 0.09 0.94 0.05 2.09 -0.07 3.29 -0.24 2.41 -0.80 5.06 -1.29 6.82 -0.24 0.88 -0.88 1.71 -1.71 2.44 -0.83 0.74 -1.84 1.39 -2.82 1.93 -1.97 1.08 -3.81 1.73 -3.81 1.73l-2.53 3.93c0.48 -0.10 0.88 -0.41 1.33 -1.18 0.78 -1.33 1.00 -1.33 1.77 -0.02 0.34 0.57 1.36 1.48 2.28 2.02 1.66 0.97 1.67 0.97 3.87 0.43 1.21 -0.30 3.98 -1.53 6.15 -2.74 3.65 -2.03 4.11 -2.19 6.19 -2.19 1.98 0.00 2.39 0.13 3.47 1.08 1.58 1.38 3.84 1.49 5.66 0.26 1.00 -0.68 1.28 -1.16 1.60 -2.79l0.39 -1.97 1.58 3.06 1.58 3.06 0.13 4.68c0.07 2.57 0.16 6.31 0.20 8.30 0.08 4.22 0.39 4.82 2.43 4.82 1.12 0.00 1.76 -0.32 3.46 -1.76 1.15 -0.97 2.65 -2.36 3.35 -3.10 1.42 -1.52 4.35 -3.05 5.86 -3.05 1.34 -0.01 3.21 0.81 5.91 2.57 2.05 1.34 2.34 1.42 3.38 1.06 0.63 -0.22 1.50 -0.40 1.94 -0.40 0.44 0.00 1.91 -0.82 3.27 -1.83 1.36 -1.01 3.61 -2.49 4.99 -3.30 3.14 -1.83 3.39 -2.13 3.16 -3.82 -0.13 -0.94 0.04 -1.80 0.55 -2.79 1.08 -2.12 1.61 -2.45 2.44 -1.53 0.38 0.42 1.45 1.15 2.39 1.62 1.14 0.58 1.78 1.16 1.92 1.76 0.28 1.10 2.23 2.86 4.31 3.87l1.56 0.76 2.57 -1.32c3.12 -1.60 4.72 -1.73 5.32 -0.41 0.50 1.10 0.54 3.16 0.09 4.72 -0.26 0.89 -0.17 1.46 0.40 2.61 0.87 1.76 1.68 2.03 4.56 1.53 2.21 -0.39 8.27 -3.20 9.67 -4.48 0.66 -0.60 0.81 -0.64 0.81 -0.18 0.00 0.32 0.62 0.81 1.45 1.14 1.28 0.51 1.59 0.52 2.69 0.06l1.24 -0.52 0.36 0.75c0.61 -0.98 1.22 -2.00 1.67 -2.96 0.53 -1.12 0.89 -2.14 0.89 -2.88 0.00 -1.48 -0.85 -2.95 -1.05 -4.45 -0.10 -0.75 -0.04 -1.51 0.38 -2.28 0.41 -0.77 1.18 -1.55 2.48 -2.34 2.61 -1.59 4.94 -2.61 6.72 -3.37 1.79 -0.77 3.04 -1.28 3.49 -1.85 0.45 -0.57 0.62 -1.30 0.96 -2.21 0.34 -0.91 0.85 -1.99 1.99 -3.23 1.13 -1.25 1.99 -1.87 2.44 -2.50 0.23 -0.31 0.36 -0.62 0.37 -1.01 0.01 -0.39 -0.09 -0.86 -0.31 -1.48 -0.45 -1.25 -1.36 -2.61 -1.59 -3.83 -0.11 -0.61 -0.06 -1.19 0.31 -1.69 0.37 -0.51 1.05 -0.95 2.18 -1.29 2.27 -0.68 4.31 -0.51 6.18 -0.80 0.94 -0.14 1.83 -0.40 2.69 -0.93 0.86 -0.53 1.68 -1.34 2.47 -2.59 1.59 -2.50 3.69 -6.64 5.39 -10.15 1.70 -3.52 3.01 -6.41 3.01 -6.41 0.00 0.00 -0.06 -0.91 0.00 -1.93 0.06 -1.02 0.23 -2.16 0.68 -2.61 0.45 -0.45 1.47 -0.57 2.58 -0.77 0.55 -0.10 1.13 -0.22 1.66 -0.41 0.54 -0.20 1.03 -0.46 1.43 -0.86 1.41 -1.41 2.21 -2.86 2.43 -3.23z",
    },
    path22: {
        name: "Kalimantan Selatan",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m730.05 278.58 -2.95 -0.52c0.00 0.00 -7.94 -0.91 -13.84 -2.04 -1.47 -0.28 -2.44 -0.67 -3.06 -1.12 -0.62 -0.45 -0.91 -0.97 -1.02 -1.52 -0.23 -1.11 0.23 -2.35 0.00 -3.49 -0.45 -2.27 -0.23 -5.22 -0.91 -7.94 -0.17 -0.68 -0.17 -1.30 -0.06 -1.89 0.11 -0.59 0.34 -1.13 0.63 -1.66 0.57 -1.05 1.36 -2.02 1.93 -3.04 0.28 -0.51 0.38 -0.98 0.35 -1.44 -0.03 -0.46 -0.19 -0.92 -0.41 -1.40 -0.45 -0.96 -1.19 -2.04 -1.76 -3.52 -0.28 -0.74 -0.78 -1.35 -1.37 -1.85 -0.59 -0.50 -1.26 -0.89 -1.90 -1.19 -1.28 -0.60 -2.41 -0.82 -2.41 -0.82 0.00 0.00 -1.13 2.04 -2.72 3.63 -0.40 0.40 -0.89 0.67 -1.43 0.86 -0.54 0.20 -1.11 0.32 -1.66 0.41 -1.11 0.20 -2.13 0.31 -2.58 0.77 -0.45 0.45 -0.62 1.59 -0.68 2.61 -0.06 1.02 0.00 1.93 0.00 1.93 0.00 0.00 -1.30 2.89 -3.01 6.41 -1.70 3.52 -3.80 7.66 -5.39 10.15 -0.79 1.25 -1.62 2.06 -2.47 2.59 -0.86 0.53 -1.75 0.79 -2.69 0.93 -1.87 0.28 -3.91 0.12 -6.18 0.80 -1.13 0.34 -1.82 0.78 -2.18 1.29 -0.37 0.51 -0.42 1.08 -0.31 1.69 0.23 1.22 1.13 2.58 1.59 3.83 0.23 0.62 0.33 1.09 0.31 1.48 -0.01 0.39 -0.14 0.70 -0.37 1.01 -0.45 0.62 -1.31 1.25 -2.44 2.50 -1.13 1.25 -1.65 2.33 -1.99 3.23 -0.34 0.91 -0.51 1.65 -0.96 2.21 -0.45 0.57 -1.70 1.08 -3.49 1.85 -1.79 0.77 -4.11 1.79 -6.72 3.37 -1.30 0.79 -2.07 1.57 -2.48 2.34 -0.41 0.77 -0.48 1.53 -0.38 2.28 0.20 1.50 1.05 2.98 1.05 4.45 0.00 0.74 -0.36 1.76 -0.89 2.88 -0.46 0.96 -1.07 1.98 -1.67 2.96l0.25 0.53c0.41 0.87 1.02 1.44 1.90 1.78 0.71 0.27 1.92 0.84 2.70 1.26l1.42 0.77 0.78 -0.91 0.78 -0.91 0.41 1.79c0.23 0.98 0.88 2.46 1.46 3.29 1.01 1.45 1.05 1.66 1.28 7.25 0.13 3.16 0.22 6.55 0.19 7.51 -0.04 1.46 0.12 1.93 0.94 2.79 1.31 1.36 2.37 1.31 4.96 -0.26 2.99 -1.80 6.61 -3.59 9.36 -4.63 1.29 -0.49 3.05 -1.29 3.91 -1.80 0.86 -0.50 1.79 -0.92 2.07 -0.92 0.28 -0.00 1.88 -0.58 3.57 -1.29 1.68 -0.70 3.87 -1.53 4.85 -1.83 0.99 -0.30 2.89 -1.10 4.22 -1.77 1.33 -0.67 2.67 -1.22 2.98 -1.22 0.31 0.00 1.24 -0.63 2.08 -1.40 1.03 -0.95 2.21 -1.60 3.68 -2.02 2.49 -0.71 2.72 -0.88 3.32 -2.44l0.45 -1.15 -0.18 1.44c-0.10 0.79 -0.28 2.12 -0.41 2.96 -0.19 1.24 -0.04 1.89 0.77 3.49 0.91 1.79 0.97 2.18 0.75 4.47 -0.19 1.90 -0.11 2.83 0.31 3.84 0.53 1.26 0.64 1.33 1.82 1.13 0.89 -0.14 2.06 -0.92 3.97 -2.65 2.69 -2.43 2.71 -2.46 2.52 -3.95 -0.10 -0.83 -0.02 -2.00 0.19 -2.60 0.25 -0.73 0.27 -1.94 0.05 -3.63 -0.18 -1.39 -0.25 -2.61 -0.15 -2.71 0.10 -0.10 0.62 0.35 1.17 0.99 0.91 1.07 1.04 1.12 1.57 0.60 0.67 -0.65 1.84 -6.08 1.51 -6.96 -0.61 -1.60 -2.19 -0.84 -3.42 1.65l-0.70 1.41 -0.71 -2.44c-0.45 -1.56 -0.65 -3.06 -0.54 -4.16 0.17 -1.71 -0.27 -2.78 -1.13 -2.78 -0.23 0.00 -1.42 0.93 -2.65 2.07 -1.80 1.67 -2.48 2.63 -3.49 4.95 -0.96 2.19 -1.26 2.63 -1.27 1.86 -0.01 -1.28 2.20 -5.33 3.98 -7.30 2.97 -3.28 3.18 -5.13 1.04 -9.06 -0.99 -1.81 -1.34 -2.81 -1.13 -3.18 0.26 -0.46 0.44 -0.38 1.08 0.44 0.43 0.54 0.77 1.27 0.77 1.61 0.00 1.91 2.96 1.80 4.46 -0.17 1.46 -1.92 1.71 -2.95 1.77 -7.57l0.06 -4.32 -0.99 -0.11c-1.14 -0.13 -1.31 -0.95 -0.30 -1.49 0.84 -0.45 3.41 -0.57 4.94 -0.23 1.44 0.32 1.53 0.17 2.56 -4.10 0.27 -1.11 0.47 -1.95 0.72 -2.96z",
    },
    path23: {
        name: "Kalimantan Timur",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m663.98 149.72c-0.17 0.65 -0.29 1.30 -0.36 2.16 -0.19 2.43 -0.23 2.52 -1.10 2.43 -0.49 -0.05 -1.34 -0.42 -1.87 -0.81 -1.50 -1.10 -3.33 -0.82 -7.86 1.19 -1.20 0.53 -1.38 0.52 -2.88 -0.16 -0.12 -0.05 -0.18 -0.04 -0.29 -0.09l-0.75 8.41c-0.00 0.00 -1.76 1.04 -3.77 2.53 -1.00 0.74 -2.07 1.59 -3.00 2.48 -0.93 0.89 -1.74 1.81 -2.22 2.69 -0.48 0.88 -0.54 1.99 -0.36 3.14 0.18 1.16 0.60 2.37 1.09 3.47 0.96 2.21 2.17 3.97 2.17 3.97 0.00 0.00 -0.14 0.07 -0.14 0.07 0.73 -0.01 1.35 -0.04 1.86 -0.04 1.47 0.00 3.23 -0.17 4.88 -0.23 1.65 -0.06 3.18 0.00 4.20 0.45 1.02 0.45 2.55 0.91 4.11 1.10 0.78 0.10 1.57 0.14 2.30 0.07 0.73 -0.06 1.42 -0.22 1.98 -0.50 1.13 -0.57 3.06 -1.36 5.08 -2.01 2.01 -0.65 4.11 -1.16 5.59 -1.16 1.47 0.00 3.01 -0.11 4.20 0.20 0.60 0.16 1.11 0.42 1.48 0.86 0.38 0.44 0.62 1.05 0.67 1.90 0.11 1.70 -0.00 4.82 -0.26 7.83 -0.26 3.01 -0.65 5.90 -1.10 7.15 -0.45 1.25 -0.85 3.06 -1.14 4.68 -0.28 1.62 -0.45 3.03 -0.45 3.49 0.00 0.45 -0.06 1.25 0.26 1.56 0.16 0.16 0.40 0.19 0.80 0.00 0.39 -0.19 0.93 -0.60 1.67 -1.34 1.47 -1.48 3.12 -2.72 4.39 -3.18 0.64 -0.23 1.19 -0.26 1.57 -0.01 0.39 0.24 0.61 0.75 0.61 1.60v0.00 11.34c0.00 0.68 0.24 1.36 0.60 2.03 0.36 0.67 0.84 1.33 1.32 1.97 0.48 0.64 0.96 1.25 1.33 1.84 0.36 0.59 0.60 1.14 0.60 1.65 0.00 1.02 -0.06 2.44 0.08 3.97 0.14 1.53 0.48 3.18 1.28 4.65 0.40 0.74 1.03 1.29 1.79 1.75 0.76 0.45 1.64 0.81 2.52 1.15 0.88 0.34 1.76 0.67 2.52 1.06 0.76 0.40 1.40 0.86 1.79 1.49 0.79 1.25 1.76 2.50 2.52 3.60 0.77 1.11 1.33 2.07 1.33 2.75 0.00 0.43 -0.04 1.50 -0.07 2.67 0.03 -0.05 0.30 -0.40 0.30 -0.40 0.00 0.00 1.14 0.23 2.41 0.82 0.64 0.30 1.31 0.69 1.90 1.19 0.59 0.50 1.08 1.11 1.36 1.85 0.57 1.47 1.31 2.55 1.76 3.52 0.23 0.48 0.38 0.94 0.41 1.40 0.03 0.46 -0.07 0.93 -0.35 1.44 -0.57 1.02 -1.36 1.99 -1.93 3.04 -0.28 0.52 -0.51 1.07 -0.63 1.65 -0.11 0.58 -0.11 1.21 0.06 1.89 0.68 2.72 0.45 5.67 0.91 7.94 0.23 1.13 -0.23 2.38 0.00 3.49 0.11 0.55 0.40 1.07 1.02 1.52 0.62 0.45 1.59 0.83 3.06 1.12 5.90 1.13 13.84 2.04 13.84 2.04l2.95 0.52c0.17 -0.70 0.41 -1.69 0.50 -2.05 0.34 -1.40 0.31 -1.65 -0.26 -2.07 -0.36 -0.26 -1.47 -0.48 -2.47 -0.48 -1.35 -0.01 -2.27 -0.27 -3.56 -1.03l-1.74 -1.03 1.56 -1.05c1.54 -1.03 1.57 -1.08 1.78 -3.55 0.31 -3.59 -0.41 -5.35 -2.67 -6.52 -0.64 -0.33 -1.42 -0.44 -2.11 -0.29 -2.99 0.66 0.93 -2.11 4.71 -3.33 2.53 -0.82 3.40 -2.07 3.10 -4.49 -0.20 -1.65 -0.17 -1.72 1.15 -2.57 0.75 -0.48 2.12 -1.15 3.05 -1.49 0.93 -0.34 1.97 -0.93 2.32 -1.32 0.88 -0.97 0.80 -3.66 -0.17 -5.84 -0.43 -0.97 -0.72 -1.83 -0.63 -1.92 0.08 -0.08 0.46 0.55 0.84 1.40 0.91 2.05 3.17 3.67 4.63 3.33 2.00 -0.46 4.13 -1.97 4.69 -3.30 0.59 -1.40 2.59 -3.95 5.24 -6.66 0.94 -0.96 1.71 -1.89 1.71 -2.06 0.00 -0.17 0.17 -0.76 0.37 -1.29l0.37 -0.97 0.87 0.81 0.87 0.81 1.55 -0.75c0.85 -0.41 2.51 -0.99 3.67 -1.30 1.17 -0.30 2.21 -0.63 2.32 -0.74 0.11 -0.11 -0.01 -0.76 -0.26 -1.45 -0.40 -1.12 -0.37 -1.39 0.31 -2.49 0.63 -1.03 0.69 -1.35 0.32 -1.94 -0.38 -0.61 -0.29 -0.90 0.58 -2.04 0.65 -0.86 1.03 -1.80 1.06 -2.64 0.04 -1.25 -0.01 -1.31 -1.31 -1.41 -0.95 -0.08 -1.68 0.12 -2.45 0.67 -0.60 0.43 -1.19 0.69 -1.30 0.57 -0.12 -0.12 0.12 -0.98 0.53 -1.91 0.73 -1.70 0.73 -1.71 0.04 -3.08 -1.06 -2.08 -0.96 -4.16 0.36 -6.89 1.23 -2.56 1.41 -4.03 0.60 -5.10 -0.70 -0.93 -0.67 -1.73 0.18 -4.26 0.39 -1.17 0.71 -2.67 0.71 -3.34 0.00 -1.30 0.67 -2.84 2.00 -4.60 0.45 -0.59 1.47 -2.57 2.27 -4.39 0.80 -1.82 1.87 -4.12 2.37 -5.11 1.52 -3.00 4.66 -4.49 6.51 -3.10 1.18 0.89 1.95 0.66 2.54 -0.77 0.51 -1.21 0.50 -1.43 -0.11 -2.78 -0.36 -0.80 -1.19 -2.34 -1.83 -3.41 -0.65 -1.07 -1.09 -2.03 -1.00 -2.13 0.32 -0.32 1.29 0.73 2.25 2.41 0.52 0.91 1.20 1.95 1.51 2.31 0.82 0.96 2.84 1.91 4.71 2.19 0.89 0.14 2.48 0.66 3.53 1.16 1.37 0.65 2.18 0.84 2.88 0.65 0.96 -0.26 1.47 -0.28 5.64 -0.21 1.19 0.02 2.72 0.02 3.42 -0.01 0.69 -0.03 2.17 0.07 3.29 0.22l2.02 0.27 2.47 -2.07c2.31 -1.94 3.70 -3.90 3.72 -5.25 0.02 -0.90 -1.07 -1.63 -3.41 -2.29 -2.45 -0.69 -4.27 -2.20 -4.88 -4.04 -0.24 -0.74 -0.97 -1.59 -1.89 -2.23 -0.82 -0.57 -1.89 -1.46 -2.36 -1.97 -0.47 -0.51 -1.69 -1.17 -2.71 -1.46 -1.83 -0.53 -3.09 -1.56 -4.34 -3.54 -0.37 -0.58 -1.71 -1.54 -3.19 -2.28 -3.88 -1.94 -6.88 -4.23 -7.84 -5.97 -0.63 -1.14 -1.21 -1.66 -2.34 -2.08 -1.98 -0.73 -3.27 -1.99 -3.71 -3.61 -0.19 -0.72 -0.68 -1.61 -1.07 -1.97 -0.84 -0.76 -0.93 -1.26 -0.21 -1.26 0.60 0.00 1.82 -1.43 3.15 -3.69 0.69 -1.18 1.26 -1.70 2.04 -1.87 1.23 -0.27 2.93 -2.26 2.93 -3.42 0.00 -1.52 -1.61 -3.84 -4.75 -6.83 -0.28 -0.26 -0.32 -0.37 -0.57 -0.61l-3.97 2.81 -0.42 2.75 -2.11 0.21 -2.54 -1.90 -1.06 -2.11 -1.06 -1.90 -1.27 -1.06 -4.23 -0.21 -2.33 -2.54 -3.80 -0.42 -4.02 1.48 -2.54 1.06 -0.42 1.06 -2.75 1.06 -2.75 1.90 -3.80 -0.84 -4.86 -0.42 -0.84 1.69 -2.54 1.90 -2.32 1.69 -1.90 3.80 -0.42 4.86 -1.27 0.84v0.00 3.17l3.38 2.54 0.63 1.90 -2.11 2.54c0.00 0.00 -0.42 0.74 -0.95 1.59 -0.53 0.85 -1.16 1.80 -1.58 2.22 -0.21 0.21 -0.37 0.51 -0.49 0.85 -0.12 0.34 -0.20 0.71 -0.25 1.05 -0.11 0.69 -0.11 1.27 -0.11 1.27l-3.38 4.65 -4.23 5.07 -3.59 1.69h-4.65 0.00l-2.75 1.69 -6.55 1.06 -5.28 -1.69 -5.28 -0.21 -5.28 -2.75 -4.65 -3.38 -2.96 -2.75 -2.96 -0.42 -2.96 -5.07z",
    },
    path24: {
        name: "Kalimantan Utara",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m663.98 149.72 0.90 0.81 2.96 5.07 2.96 0.42 2.96 2.75 4.65 3.38 5.28 2.75 5.28 0.21 5.28 1.69 6.55 -1.06 2.75 -1.69h4.65 0.00l3.59 -1.69 4.23 -5.07 3.38 -4.65c0.00 0.00 0.00 -0.58 0.11 -1.27 0.05 -0.34 0.13 -0.71 0.25 -1.05 0.12 -0.34 0.28 -0.64 0.49 -0.85 0.42 -0.42 1.06 -1.37 1.58 -2.22 0.53 -0.85 0.95 -1.59 0.95 -1.59l2.11 -2.54 -0.63 -1.90 -3.38 -2.54v0.00 -3.17l1.27 -0.84 0.42 -4.86 1.90 -3.80 2.32 -1.69 2.54 -1.90 0.84 -1.69 4.86 0.42 3.80 0.84 2.75 -1.90 2.75 -1.06 0.42 -1.06 2.54 -1.06 4.02 -1.48 3.80 0.42 2.33 2.54 4.23 0.21 1.27 1.06 1.06 1.90 1.06 2.11 2.54 1.90 2.11 -0.21 0.42 -2.75 3.97 -2.81c-2.89 -2.82 -4.03 -4.33 -4.03 -5.63 0.00 -1.60 -2.15 -3.55 -4.82 -4.38 -0.65 -0.20 -0.65 -0.25 0.13 -1.07 0.93 -0.99 0.81 -1.37 -0.61 -1.96 -0.55 -0.23 -1.21 -0.89 -1.47 -1.48 -0.40 -0.91 -0.39 -1.18 0.10 -1.87 0.75 -1.07 0.72 -2.31 -0.06 -2.62 -0.35 -0.14 -1.48 -0.39 -2.51 -0.56 -1.28 -0.21 -2.42 -0.72 -3.57 -1.60 -0.93 -0.71 -2.06 -1.38 -2.52 -1.50 -0.46 -0.12 -0.84 -0.31 -0.84 -0.43 0.00 -0.12 0.59 -0.82 1.31 -1.56l1.31 -1.34 0.64 0.79 0.64 0.79 1.02 -0.76c1.28 -0.95 1.30 -1.72 0.07 -1.87 -0.79 -0.09 -0.98 -0.34 -1.16 -1.48 -0.26 -1.63 -0.71 -2.06 -2.59 -2.50l-1.41 -0.33 1.73 -0.03c3.15 -0.07 3.95 -1.09 1.99 -2.54 -1.26 -0.93 -5.41 -1.59 -6.51 -1.03 -0.62 0.32 -2.39 -0.59 -2.41 -1.24 -0.01 -0.25 3.24 -0.16 9.39 0.28 1.96 0.14 2.43 0.07 2.61 -0.40 0.12 -0.31 0.13 -0.72 0.02 -0.90 -0.36 -0.59 0.61 -0.34 1.54 0.39 0.71 0.56 1.46 0.72 3.38 0.72 2.33 0.00 2.55 -0.07 3.91 -1.30 0.79 -0.72 1.44 -1.45 1.44 -1.63 0.00 -0.18 -0.56 -0.66 -1.26 -1.07 -0.74 -0.43 -1.26 -1.03 -1.26 -1.43 0.00 -0.54 0.26 -0.68 1.26 -0.68 1.01 0.00 1.26 -0.14 1.26 -0.71 0.00 -0.42 -0.42 -0.93 -1.04 -1.25 -0.97 -0.50 -1.08 -0.49 -1.53 0.19 -0.48 0.71 -0.51 0.70 -1.66 -0.46 -0.64 -0.65 -2.18 -2.28 -3.40 -3.63 -1.23 -1.35 -2.84 -2.79 -3.59 -3.21 -0.75 -0.42 -1.36 -0.86 -1.36 -0.98 0.00 -0.12 0.61 -0.16 1.36 -0.08 1.07 0.10 1.57 -0.07 2.37 -0.81 0.83 -0.77 0.94 -1.04 0.58 -1.47 -0.25 -0.30 -1.05 -0.52 -1.83 -0.52 -1.06 0.00 -1.71 -0.28 -2.74 -1.18 -0.74 -0.65 -2.32 -1.81 -3.51 -2.59l-2.16 -1.41 -10.66 -0.05c-10.35 -0.05 -10.69 -0.07 -11.65 -0.83 -1.30 -1.02 -1.64 -0.99 -2.87 0.30 -1.30 1.36 -2.31 1.36 -4.17 0.02 -1.20 -0.87 -1.62 -1.00 -2.36 -0.72 -0.49 0.19 -1.74 0.34 -2.76 0.34 -1.49 0.00 -2.28 0.25 -3.95 1.26 -1.15 0.69 -2.21 1.26 -2.36 1.26 -0.15 0.00 -0.72 -0.47 -1.27 -1.04 -0.55 -0.57 -1.65 -1.33 -2.45 -1.69 -0.73 -0.33 -1.09 -0.49 -1.36 -0.47v0.00 0.00c-0.27 0.02 -0.44 0.23 -0.77 0.65 -0.37 0.46 -0.67 1.30 -0.67 1.87 0.00 0.87 -0.28 1.18 -1.71 1.93 -3.08 1.62 -3.70 2.36 -4.41 5.27 -0.36 1.46 -1.00 3.45 -1.44 4.42 -0.63 1.40 -0.75 2.15 -0.58 3.60 0.14 1.16 0.01 2.65 -0.35 4.09 -0.54 2.15 -0.53 2.82 0.07 6.80 0.18 1.22 0.01 2.04 -0.86 4.15 -0.60 1.44 -1.19 3.51 -1.31 4.59 -0.12 1.08 -0.41 3.14 -0.64 4.58 -0.41 2.57 -0.44 2.62 -1.70 2.95 -2.94 0.77 -3.19 0.78 -4.27 0.23 -1.33 -0.69 -1.89 -0.51 -2.69 0.85 -0.34 0.57 -1.16 1.38 -1.82 1.78 -0.66 0.41 -1.65 1.39 -2.20 2.17 -0.98 1.41 -0.98 1.45 -0.41 2.87 0.45 1.13 0.49 1.63 0.18 2.32 -0.58 1.28 -0.12 2.56 1.53 4.21 1.77 1.77 1.70 2.73 -0.29 3.96 -0.73 0.45 -1.83 1.26 -2.44 1.80 -0.61 0.54 -1.67 1.12 -2.36 1.30 -0.94 0.24 -1.40 0.65 -1.88 1.65 -0.44 0.92 -0.87 1.33 -1.39 1.33 -0.43 0.00 -1.48 0.72 -2.39 1.62 -1.61 1.61 -1.62 1.64 -1.42 3.58 0.40 3.87 -0.40 6.16 -5.17 14.76 -0.51 0.93 -0.82 1.70 -1.03 2.51z",
    },
    path25: {
        name: "Sulawesi Utara",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m1063.85 53.66c-0.20 -0.00 -0.43 0.02 -0.69 0.07 -1.76 0.30 -2.03 0.62 -2.34 2.77 -0.57 3.98 -0.44 5.29 0.61 6.19 0.53 0.45 1.16 0.89 1.39 0.97 0.54 0.18 -0.18 1.65 -1.79 3.67 -0.61 0.77 -1.11 1.69 -1.11 2.05 0.00 0.36 -0.32 0.83 -0.72 1.04 -1.23 0.66 -1.22 1.86 0.05 4.82 0.82 1.90 1.36 2.72 1.74 2.65 0.87 -0.16 0.88 -2.52 0.03 -4.19 -0.96 -1.88 -0.94 -1.97 0.37 -1.71 0.61 0.12 1.42 0.06 1.80 -0.15 1.01 -0.54 2.10 -2.88 1.87 -4.05 -0.14 -0.76 0.11 -1.37 1.12 -2.67 1.60 -2.05 1.90 -3.12 1.29 -4.57 -0.26 -0.61 -0.48 -1.97 -0.51 -3.02 -0.03 -1.72 -0.16 -2.02 -1.30 -2.97 -0.78 -0.66 -1.22 -0.90 -1.83 -0.91zm-0.81 22.54c-0.57 -0.04 -0.71 0.38 -0.68 1.50 0.02 0.79 0.34 1.44 0.97 1.98 1.28 1.10 2.20 1.04 2.50 -0.15 0.29 -1.17 -0.68 -2.65 -2.08 -3.15 -0.29 -0.10 -0.53 -0.17 -0.72 -0.18zm-42.19 4.11c-0.16 0.01 -0.31 0.02 -0.46 0.05 -1.00 0.20 -1.11 0.35 -1.11 1.61 0.00 1.09 0.28 1.70 1.30 2.83 1.11 1.23 1.27 1.61 1.08 2.62 -0.20 1.05 -0.05 1.35 1.31 2.65 0.84 0.80 1.93 1.73 2.42 2.05 1.34 0.90 2.11 0.73 2.74 -0.58 0.55 -1.16 0.54 -1.22 -1.46 -5.11 -1.11 -2.17 -2.30 -4.24 -2.63 -4.62 -0.89 -0.98 -2.10 -1.54 -3.19 -1.51zm-1.37 30.48c-0.33 -0.03 -0.75 0.06 -1.25 0.26 -1.35 0.56 -1.59 1.23 -0.91 2.55 0.71 1.38 1.78 1.37 2.50 -0.01 0.86 -1.65 0.66 -2.72 -0.34 -2.81zm0.07 13.30c-0.75 -0.03 -1.70 0.66 -1.70 1.34 0.00 0.37 0.28 0.75 0.63 0.85 0.35 0.09 0.66 0.18 0.69 0.21 0.03 0.02 0.32 -0.06 0.63 -0.18 0.71 -0.27 0.75 -1.89 0.06 -2.16 -0.10 -0.04 -0.20 -0.06 -0.30 -0.06zm-13.69 20.79c-0.81 0.02 -5.49 4.86 -6.65 6.88 -0.64 1.12 -1.74 2.54 -2.43 3.15 -1.10 0.97 -1.44 1.08 -2.68 0.88 -1.19 -0.19 -1.62 -0.07 -2.67 0.73 -1.18 0.90 -2.06 2.75 -1.73 3.67 0.08 0.22 0.54 0.58 1.03 0.81 0.75 0.34 0.83 0.52 0.51 1.13 -0.32 0.61 -0.75 0.72 -2.70 0.72 -2.08 0.00 -2.44 0.11 -3.60 1.13 -0.71 0.62 -1.61 1.76 -2.01 2.53 -0.86 1.69 -3.67 3.58 -7.52 5.07 -1.48 0.57 -3.21 1.43 -3.84 1.91 -0.93 0.70 -1.57 0.86 -3.42 0.86 -1.25 -0.00 -3.24 -0.18 -4.43 -0.40 -1.19 -0.22 -2.99 -0.45 -4.01 -0.51 -1.02 -0.06 -2.94 -0.45 -4.26 -0.86 -1.33 -0.41 -3.04 -0.74 -3.80 -0.74 -0.35 0.00 -0.74 -0.21 -1.17 -0.32 -0.32 1.02 -0.56 1.89 -0.78 2.56 -0.29 0.88 -0.66 1.90 -0.94 2.95 -0.28 1.04 -0.48 2.10 -0.45 3.05 0.04 0.95 0.31 1.79 0.98 2.40 0.33 0.30 0.76 0.54 1.31 0.71 0.55 0.17 1.22 0.26 2.02 0.26 1.61 0.00 3.11 0.18 4.49 0.51 1.38 0.33 2.64 0.81 3.78 1.39 1.13 0.59 2.14 1.28 3.01 2.05 0.87 0.77 1.60 1.61 2.19 2.49 0.46 0.69 1.31 1.55 2.16 2.40 2.71 -0.44 5.97 -0.91 6.81 -1.22 0.69 -0.26 2.47 -0.54 3.96 -0.63 2.05 -0.13 3.35 -0.46 5.39 -1.39 4.91 -2.22 4.97 -2.26 6.26 -5.09 0.65 -1.43 1.67 -3.16 2.27 -3.85 0.60 -0.68 1.28 -1.84 1.51 -2.58 0.53 -1.61 3.72 -4.65 6.10 -5.78 2.34 -1.12 5.67 -5.89 7.28 -10.43 0.78 -2.20 1.56 -3.71 2.33 -4.48 1.24 -1.26 1.94 -1.49 1.94 -0.63 0.00 0.74 0.45 0.68 1.61 -0.24 1.14 -0.89 2.08 -2.87 1.76 -3.69 -0.27 -0.70 -0.64 -0.71 -1.20 -0.04 -0.70 0.84 -2.90 -1.83 -2.90 -3.51 0.00 -1.38 -0.70 -2.04 -2.17 -2.04 -0.43 0.00 -1.26 -0.40 -1.85 -0.90 -0.59 -0.49 -1.26 -0.90 -1.49 -0.89z",
    },
    path26: {
        name: "Sulawesi Tengah",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m871.90 157.95c-0.94 -0.00 -1.77 0.09 -2.40 0.30 -1.42 0.47 -1.44 0.50 -1.68 2.63 -0.74 6.57 -0.20 5.47 -4.84 9.86 -0.99 0.93 -1.56 1.84 -1.73 2.71 -0.18 0.94 -0.50 1.41 -1.15 1.65 -1.22 0.46 -3.86 0.43 -4.93 -0.05 -0.89 -0.41 -2.04 -2.38 -2.04 -3.51 0.00 -0.35 -0.22 -0.94 -0.49 -1.31 -0.44 -0.60 -0.61 -0.62 -1.63 -0.20 -1.34 0.56 -2.19 1.64 -2.19 2.81 0.00 0.46 -0.31 1.44 -0.69 2.19 -0.67 1.31 -1.51 1.86 -4.45 2.92 -1.38 0.50 -2.09 2.29 -1.81 4.61 0.23 1.96 0.08 2.20 -2.75 4.35 -1.61 1.22 -2.88 3.38 -2.88 4.90 0.00 1.05 -0.20 1.40 -1.08 1.90 -1.45 0.83 -1.38 1.71 0.37 4.33l1.45 2.18 -0.47 1.91c-0.40 1.62 -0.60 1.92 -1.37 2.01 -0.63 0.07 -1.23 -0.23 -1.96 -0.99 -0.85 -0.89 -1.34 -1.10 -2.61 -1.10 -1.89 0.00 -2.25 0.60 -1.31 2.21 0.92 1.57 2.45 2.62 3.82 2.64 0.94 0.01 1.18 0.17 1.28 0.87 0.07 0.47 -0.16 1.48 -0.50 2.24 -0.45 1.00 -0.63 2.42 -0.66 5.25 -0.04 4.26 0.63 7.41 2.15 10.00 0.47 0.80 0.89 1.93 0.95 2.52 0.19 2.02 -0.62 1.33 -1.77 -1.49 -0.63 -1.56 -1.40 -2.99 -1.70 -3.18 -0.77 -0.50 -2.95 1.68 -3.25 3.24 -0.16 0.87 -0.70 1.55 -1.98 2.53 -0.53 0.40 -0.90 0.82 -1.27 1.25 0.10 1.26 0.11 1.51 0.28 3.33 0.36 3.85 0.84 8.34 1.32 10.91 0.48 2.57 1.36 5.46 2.33 8.54 0.96 3.09 2.01 6.38 2.81 9.75 0.32 1.33 0.52 2.32 0.78 3.51 0.33 -0.09 0.29 -0.09 0.63 -0.19 3.46 -0.96 7.43 -1.99 9.47 -2.21 2.04 -0.23 3.74 -1.02 5.45 -1.13 0.85 -0.06 1.70 0.06 2.59 0.50 0.89 0.44 1.83 1.21 2.85 2.45 2.04 2.50 4.42 5.56 6.98 8.11 1.28 1.28 2.60 2.43 3.94 3.31 1.34 0.89 2.70 1.51 4.06 1.74 2.72 0.45 6.69 1.25 10.44 2.38 1.87 0.57 3.69 1.22 5.26 1.96 1.57 0.74 2.91 1.56 3.81 2.47 0.91 0.91 2.13 1.70 3.40 2.43 1.28 0.73 2.61 1.40 3.74 2.05 1.13 0.65 2.07 1.29 2.55 1.96 0.24 0.34 0.37 0.68 0.35 1.04 -0.02 0.36 -0.18 0.74 -0.52 1.13 -0.68 0.79 -1.56 1.56 -2.50 2.26 -0.94 0.70 -1.93 1.34 -2.84 1.88 -1.69 1.00 -2.89 1.55 -3.07 1.64 0.07 0.01 0.68 0.12 0.68 0.12l4.99 -1.36c0.00 0.00 1.82 0.80 3.97 1.82 2.16 1.02 4.65 2.27 6.02 3.17 2.17 1.45 8.71 4.58 11.95 6.16 0.36 -0.69 1.16 -1.33 2.27 -1.66 1.27 -0.38 1.46 -0.57 1.46 -1.47 0.00 -1.68 -0.37 -2.20 -2.12 -2.95 -2.60 -1.11 -2.91 -1.53 -2.66 -3.56 0.25 -2.12 -0.44 -3.40 -2.02 -3.74 -0.69 -0.15 -1.32 -0.66 -1.79 -1.46 -0.43 -0.73 -1.28 -1.45 -2.09 -1.79 -1.82 -0.76 -2.96 -2.20 -2.97 -3.76 -0.01 -0.87 -0.64 -2.25 -2.08 -4.61 -1.14 -1.85 -2.55 -4.21 -3.15 -5.24 -1.07 -1.85 -4.30 -5.16 -5.82 -5.95 -0.43 -0.23 -1.19 -0.41 -1.68 -0.41 -1.21 0.00 -3.00 -1.58 -3.29 -2.90 -0.15 -0.70 -0.71 -1.40 -1.55 -1.96 -0.72 -0.48 -1.64 -1.36 -2.04 -1.96 -0.90 -1.36 -1.44 -1.57 -2.16 -0.85 -0.31 0.31 -0.61 0.51 -0.66 0.44 -0.79 -1.17 -1.24 -3.86 -0.73 -4.37 0.37 -0.37 2.70 1.01 4.98 2.95 2.44 2.08 3.63 2.29 6.22 1.12 1.46 -0.66 3.69 -3.41 3.69 -4.55 0.00 -1.39 6.18 -4.54 10.18 -5.19 1.63 -0.26 3.35 -0.82 4.43 -1.44 0.97 -0.56 2.51 -1.42 3.42 -1.92 1.04 -0.56 2.67 -2.09 4.32 -4.05 1.46 -1.73 3.55 -4.12 4.65 -5.32 3.21 -3.50 5.40 -6.36 6.38 -8.36 1.01 -2.06 1.10 -2.10 5.10 -2.47 1.48 -0.14 3.15 -0.48 3.70 -0.76 1.08 -0.55 1.70 -0.39 1.70 0.44 0.00 0.70 2.17 3.06 3.94 4.28 1.17 0.81 1.67 0.95 2.71 0.76 1.55 -0.29 2.21 -1.22 3.14 -4.44 0.93 -3.21 1.18 -6.18 0.66 -7.75 -0.35 -1.07 -0.86 -1.51 -3.16 -2.75 -3.55 -1.91 -6.32 -2.26 -9.16 -1.15 -1.05 0.41 -3.04 0.85 -4.43 0.97 -3.30 0.30 -4.96 0.75 -5.99 1.62 -0.80 0.67 -0.81 0.74 -0.21 1.21 0.35 0.27 1.61 0.69 2.79 0.92 1.18 0.23 2.15 0.56 2.15 0.73 0.00 0.17 -0.69 0.42 -1.53 0.55 -0.84 0.13 -2.11 0.41 -2.83 0.61 -1.03 0.29 -1.48 0.26 -2.16 -0.18 -1.22 -0.78 -15.71 -0.71 -16.66 0.08 -0.34 0.28 -1.11 1.47 -1.70 2.64 -0.88 1.74 -1.21 2.09 -1.80 1.94 -0.40 -0.10 -1.49 0.04 -2.44 0.32 -1.03 0.31 -3.13 0.49 -5.28 0.47l-3.57 -0.04 -2.01 -2.11c-1.11 -1.16 -2.22 -2.11 -2.46 -2.11 -0.40 0.00 -3.28 1.81 -4.72 2.97 -0.31 0.25 -1.07 1.20 -1.70 2.12 -0.63 0.92 -1.53 1.97 -2.00 2.34 -0.47 0.37 -1.37 1.43 -2.00 2.38 -0.63 0.94 -1.55 1.97 -2.03 2.29 -0.53 0.35 -1.08 1.25 -1.39 2.30 -0.66 2.22 -1.16 3.17 -2.30 4.39 -1.05 1.13 -1.62 1.21 -3.42 0.45 -0.73 -0.30 -1.74 -0.44 -2.34 -0.32 -0.78 0.16 -1.43 -0.04 -2.48 -0.73 -1.38 -0.91 -1.46 -0.93 -2.97 -0.40 -2.41 0.85 -3.12 0.73 -3.59 -0.61 -0.22 -0.64 -0.84 -1.62 -1.38 -2.18 -0.86 -0.90 -0.98 -1.32 -1.00 -3.46 -0.02 -1.87 -0.22 -2.75 -0.84 -3.75 -1.74 -2.82 -5.36 -4.89 -7.53 -4.32 -1.02 0.27 -1.95 -0.57 -4.73 -4.25 -2.39 -3.17 -3.00 -4.69 -3.61 -8.94 -0.24 -1.68 -0.76 -4.16 -1.16 -5.51 -0.72 -2.45 -0.73 -3.14 0.01 -7.08 0.17 -0.89 0.74 -2.25 1.26 -3.02 0.53 -0.77 0.96 -1.84 0.96 -2.38 0.00 -1.54 1.01 -4.02 2.13 -5.21 0.56 -0.59 1.44 -1.81 1.95 -2.70 1.62 -2.83 4.78 -5.59 7.57 -6.63 3.40 -1.27 5.60 -1.22 8.73 0.19 6.16 2.76 5.75 2.64 7.31 2.18 1.02 -0.31 1.65 -0.32 2.14 -0.06 1.01 0.54 2.06 0.46 4.70 -0.35 0.31 -0.10 0.99 -0.10 1.36 -0.19 -1.01 -2.06 -2.10 -4.29 -3.20 -6.12 -0.68 -1.13 -1.47 -2.13 -2.15 -3.00 -0.67 -0.87 -1.23 -1.63 -1.43 -2.28 -0.10 -0.33 -0.11 -0.63 -0.00 -0.91 0.11 -0.28 0.33 -0.54 0.70 -0.77 0.74 -0.48 2.08 -0.87 4.23 -1.21 2.16 -0.34 4.45 -0.51 6.77 -0.59 2.32 -0.08 4.66 -0.06 6.90 -0.04 4.48 0.06 8.57 0.17 11.29 -0.28 2.72 -0.45 5.44 -0.34 7.32 -0.74 0.94 -0.20 1.66 -0.52 2.06 -1.11 0.20 -0.29 0.32 -0.66 0.35 -1.10 0.03 -0.44 -0.03 -0.97 -0.20 -1.59 -0.03 -0.10 -0.05 -0.21 -0.08 -0.31 -0.22 -0.04 -0.57 -0.04 -0.75 -0.08 -2.74 -0.65 -3.91 -0.73 -5.34 -0.41 -0.95 0.22 -1.17 0.12 -1.61 -0.70 -0.50 -0.93 -0.57 -0.94 -3.04 -0.72 -1.39 0.13 -3.48 0.40 -4.65 0.60 -4.95 0.86 -7.77 -0.60 -8.56 -4.43 -0.25 -1.19 -0.67 -2.25 -0.95 -2.36 -0.27 -0.11 -1.00 0.10 -1.61 0.47 -1.79 1.06 -4.13 0.91 -6.25 -0.41 -2.08 -1.29 -5.86 -2.17 -8.67 -2.17zm23.22 48.95c-0.14 -0.03 -0.34 0.04 -0.62 0.19 -0.40 0.21 -0.72 0.64 -0.72 0.94 0.00 0.41 0.21 0.49 0.81 0.30 1.07 -0.33 1.12 -0.39 0.86 -1.06 -0.09 -0.23 -0.18 -0.35 -0.32 -0.37zm20.85 2.37c-0.38 0.01 -0.67 0.13 -0.81 0.37 -0.13 0.21 0.63 1.18 1.69 2.14 1.06 0.96 2.09 1.71 2.29 1.65 0.20 -0.06 0.36 -0.65 0.36 -1.32 0.00 -0.98 -0.24 -1.37 -1.22 -2.04 -0.81 -0.55 -1.67 -0.83 -2.29 -0.81zm-6.42 1.97 -0.63 0.84c-0.60 0.79 -0.72 0.81 -2.15 0.38 -1.31 -0.39 -1.69 -0.37 -2.81 0.16 -1.23 0.59 -1.28 0.68 -1.10 2.07 0.17 1.26 0.11 1.41 -0.41 1.18 -0.33 -0.15 -1.33 -0.33 -2.22 -0.40 -1.44 -0.12 -1.77 0.01 -2.97 1.12 -1.05 0.97 -1.35 1.53 -1.35 2.47 0.00 0.67 0.11 1.32 0.24 1.46 0.38 0.38 0.68 0.29 1.75 -0.55 0.66 -0.52 1.81 -0.89 3.33 -1.07 2.76 -0.33 3.47 -0.77 2.92 -1.81 -0.35 -0.66 -0.30 -0.70 0.70 -0.48 1.12 0.25 4.02 -0.91 4.02 -1.60 0.00 -0.18 0.57 -0.44 1.26 -0.57 1.54 -0.29 1.65 -1.10 0.34 -2.34l-0.92 -0.87zM945.61 239.96c-0.29 0.01 -0.61 0.08 -0.99 0.19 -0.61 0.17 -1.51 0.24 -1.99 0.15 -1.01 -0.19 -6.36 0.84 -6.97 1.34 -0.72 0.60 -2.28 3.75 -2.66 5.40 -0.34 1.44 -0.26 1.91 0.78 4.61l1.15 3.00 1.34 -0.18c1.71 -0.23 3.95 -2.08 5.14 -4.25 0.50 -0.91 1.17 -1.88 1.49 -2.15 0.50 -0.42 0.70 -0.35 1.44 0.51 1.15 1.33 1.08 2.48 -0.22 3.96 -0.59 0.68 -1.08 1.40 -1.08 1.62 0.00 0.58 2.99 2.22 4.06 2.22 0.99 0.00 1.19 -0.50 1.42 -3.59 0.14 -1.84 1.44 -2.21 3.29 -0.96l1.37 0.93 1.40 -0.72c1.48 -0.76 1.72 -0.61 0.85 0.54 -1.14 1.50 -0.48 4.85 1.21 6.22 0.31 0.25 0.99 0.45 1.52 0.45 1.98 0.00 2.78 -2.76 1.31 -4.52 -0.49 -0.58 -1.14 -1.67 -1.45 -2.41 -0.31 -0.74 -0.81 -1.34 -1.12 -1.34 -0.72 0.00 -0.70 -0.22 0.11 -1.38 0.37 -0.53 0.87 -1.57 1.11 -2.33 0.53 -1.62 0.15 -2.21 -2.48 -3.90 -2.24 -1.43 -2.94 -1.33 -5.14 0.79 -1.65 1.59 -1.99 1.77 -2.69 1.45 -0.80 -0.36 -0.80 -0.39 -0.20 -1.65 0.58 -1.22 0.58 -1.34 -0.05 -2.52 -0.58 -1.08 -1.09 -1.51 -1.95 -1.48zm6.14 17.49c-0.89 0.00 -1.51 0.70 -1.51 1.69 0.00 0.97 0.58 1.06 1.50 0.23 0.85 -0.77 0.86 -1.92 0.01 -1.92zm-8.69 2.52c-0.86 0.00 -1.78 2.31 -1.55 3.87 0.11 0.71 0.38 1.17 0.71 1.17 0.79 0.00 2.55 -1.36 2.81 -2.17 0.29 -0.90 -1.06 -2.87 -1.97 -2.87zm22.55 4.11c-0.10 -0.02 -0.18 -0.03 -0.23 0.01 -0.52 0.32 -0.50 2.11 0.04 2.64 0.71 0.71 2.44 0.40 2.44 -0.44 0.00 -0.58 -1.57 -2.04 -2.25 -2.22z",
    },
    path27: {
        name: "Sulawesi Selatan",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m850.05 262.62c-0.21 -0.01 -0.43 -0.01 -0.64 0.01 -1.70 0.11 -3.40 0.91 -5.45 1.13 -2.04 0.23 -6.01 1.25 -9.47 2.21 -0.34 0.09 -0.30 0.09 -0.63 0.19 0.40 1.83 0.83 3.79 1.19 5.39 0.60 2.65 1.25 5.06 2.21 7.46 0.48 1.20 0.78 2.45 0.96 3.69 0.18 1.24 0.24 2.49 0.24 3.69 0.00 2.41 -0.24 4.66 -0.24 6.42 0.00 0.88 -0.14 1.46 -0.35 1.84 -0.21 0.38 -0.49 0.55 -0.77 0.61 -0.56 0.12 -1.12 -0.20 -1.12 -0.20l-11.55 0.32v0.00 8.02c0.00 1.44 0.16 3.13 -0.08 4.77 -0.12 0.82 -0.34 1.64 -0.73 2.40 -0.39 0.77 -0.95 1.49 -1.75 2.13 -0.76 0.61 -1.91 2.22 -2.93 3.43 1.49 -0.21 3.05 0.41 5.05 2.02l0.87 0.70 -0.96 2.22c-0.53 1.22 -0.96 2.43 -0.96 2.69 0.00 0.26 1.20 2.76 2.68 5.56 2.80 5.33 2.82 5.39 2.70 10.29 -0.07 2.81 -0.06 3.61 0.04 4.50 0.05 0.49 -0.09 2.46 -0.32 4.36 -0.32 2.71 -0.71 4.08 -1.77 6.29 -1.30 2.72 -1.35 2.97 -1.26 6.18 0.08 3.12 0.01 3.50 -0.99 5.39 -0.59 1.12 -1.08 2.22 -1.08 2.44 -0.00 0.22 -0.51 1.09 -1.12 1.94 -0.88 1.22 -1.20 2.12 -1.47 4.28 -0.45 3.52 -0.24 4.97 1.07 7.50 0.58 1.13 1.17 2.51 1.30 3.05 0.20 0.84 0.42 0.99 1.47 0.99 0.96 0.00 1.40 0.24 2.01 1.10 0.43 0.61 0.97 1.03 1.19 0.95 1.73 -0.65 2.00 -0.61 3.17 0.42 0.66 0.58 1.60 1.13 2.10 1.22 0.49 0.09 1.12 0.19 1.39 0.22 0.27 0.03 1.51 -1.03 2.74 -2.35l2.24 -2.40 2.52 0.45c2.75 0.49 4.61 0.30 6.58 -0.70 0.70 -0.35 1.84 -0.74 2.52 -0.87 1.04 -0.20 1.39 -0.09 2.10 0.68 0.95 1.01 3.03 1.84 3.66 1.46 0.87 -0.54 -0.71 -5.81 -3.27 -10.94l-2.19 -4.39 0.54 -2.22c0.30 -1.22 0.65 -3.32 0.79 -4.67 0.21 -2.12 0.38 -2.53 1.19 -3.05 1.19 -0.75 1.47 -1.15 1.48 -2.06 0.00 -0.40 0.33 -1.33 0.73 -2.07 0.88 -1.65 0.88 -1.79 0.04 -4.03 -1.07 -2.83 -1.46 -5.59 -1.06 -7.48 0.23 -1.09 0.23 -2.10 -0.01 -2.95 -0.20 -0.71 -0.27 -1.84 -0.16 -2.51 0.12 -0.73 -0.05 -1.86 -0.42 -2.84 -1.03 -2.68 -0.65 -6.27 1.00 -9.59 1.51 -3.04 1.57 -3.63 0.76 -7.08 -0.43 -1.83 -0.54 -3.66 -0.42 -7.23l0.16 -4.78 -1.17 -1.02c-0.64 -0.56 -1.66 -1.32 -2.28 -1.68 -0.72 -0.43 -1.11 -0.94 -1.11 -1.47 0.00 -0.45 -0.26 -1.47 -0.58 -2.27 -1.00 -2.51 -0.50 -3.17 5.07 -6.66 1.19 -0.74 3.05 -2.08 4.14 -2.97 2.41 -1.97 5.87 -3.67 7.48 -3.67 0.65 -0.00 2.56 0.35 4.25 0.77 3.63 0.91 4.29 1.59 4.17 4.28 -0.04 0.94 0.17 2.28 0.46 2.99 0.03 0.06 0.02 0.11 0.04 0.17 0.05 0.12 0.04 0.24 0.07 0.35 2.14 0.30 3.84 0.60 4.64 0.60 0.62 0.00 1.86 0.26 3.32 0.55 1.21 0.38 2.47 0.67 3.54 0.87 1.53 0.28 2.67 0.40 2.67 0.40 0.00 0.00 1.47 -0.68 3.29 -1.76 0.91 -0.54 1.90 -1.18 2.84 -1.88 0.94 -0.70 1.82 -1.47 2.50 -2.26 0.34 -0.40 0.50 -0.77 0.52 -1.13 0.02 -0.36 -0.11 -0.71 -0.35 -1.04 -0.48 -0.67 -1.42 -1.31 -2.55 -1.96 -1.13 -0.65 -2.47 -1.32 -3.74 -2.05 -1.28 -0.73 -2.50 -1.53 -3.40 -2.43 -0.91 -0.91 -2.24 -1.73 -3.81 -2.47 -1.57 -0.74 -3.39 -1.39 -5.26 -1.96 -3.74 -1.13 -7.72 -1.93 -10.44 -2.38 -1.36 -0.23 -2.72 -0.85 -4.06 -1.74 -1.34 -0.89 -2.66 -2.04 -3.94 -3.31 -2.55 -2.55 -4.94 -5.61 -6.98 -8.11 -1.02 -1.25 -1.96 -2.01 -2.85 -2.45 -0.67 -0.33 -1.32 -0.48 -1.96 -0.51zm7.29 129.75c-1.44 -0.17 -1.67 0.87 -1.85 8.44 -0.13 5.49 -0.07 6.90 0.40 8.07 0.36 0.89 0.48 1.86 0.33 2.63 -0.13 0.69 -0.04 1.63 0.20 2.16 0.54 1.18 1.75 1.27 1.75 0.13 0.00 -0.45 0.25 -1.62 0.55 -2.61 0.51 -1.67 1.03 -5.17 1.47 -9.89 0.14 -1.53 -0.05 -2.76 -0.85 -5.39 -0.95 -3.14 -1.11 -3.42 -2.00 -3.53zm5.73 40.57c-0.62 0.00 -1.31 1.05 -1.31 1.99 0.00 0.33 0.34 1.07 0.74 1.64 0.41 0.57 0.96 1.04 1.23 1.04 0.58 0.00 1.98 -1.86 1.98 -2.64 0.00 -0.64 -1.82 -2.04 -2.65 -2.04z",
    },
    path28: {
        name: "Sulawesi Tenggara",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m876.08 297.65c0.26 0.81 0.28 1.45 -0.13 3.37 -0.30 1.44 -0.45 3.04 -0.34 3.57 0.31 1.39 -0.64 3.34 -2.72 5.62 -2.51 2.75 -3.70 5.17 -3.40 6.92 0.20 1.17 0.94 2.02 5.25 6.09 3.36 3.17 5.37 4.80 6.09 4.95 0.93 0.19 1.07 0.37 1.07 1.39 0.00 1.19 0.47 1.61 1.78 1.61 0.36 0.00 1.07 0.56 1.59 1.23 0.95 1.25 1.39 1.44 5.74 2.55 1.87 0.48 2.55 0.83 2.84 1.46 0.58 1.26 -0.25 4.00 -1.70 5.60 -1.10 1.21 -1.21 1.55 -1.19 3.43 0.01 1.20 -0.32 3.20 -0.78 4.71 -0.52 1.69 -0.72 3.04 -0.58 3.80 0.37 1.98 2.17 4.43 3.88 5.29 0.85 0.43 1.92 1.12 2.38 1.55 0.66 0.60 1.32 0.78 3.06 0.80 1.22 0.02 3.27 0.23 4.56 0.48 2.41 0.46 4.34 0.34 5.92 -0.39 1.05 -0.48 1.13 -1.13 0.37 -2.94 -0.74 -1.78 -0.68 -3.56 0.21 -5.61 0.71 -1.65 0.87 -1.78 3.32 -2.68 1.42 -0.52 2.94 -0.94 3.38 -0.94 0.44 0.00 1.46 -0.26 2.26 -0.58 0.97 -0.39 1.93 -0.51 2.89 -0.35 0.97 0.15 1.77 0.05 2.49 -0.32 1.72 -0.89 3.08 -0.70 3.97 0.53 0.42 0.59 1.10 1.08 1.50 1.08 0.99 0.00 2.82 -1.35 2.82 -2.07 0.00 -0.46 0.10 -0.49 0.43 -0.16 0.67 0.67 1.57 0.51 2.78 -0.50 1.10 -0.93 1.11 -0.95 1.11 -4.55 0.00 -3.01 -0.13 -3.88 -0.80 -5.21 -0.91 -1.83 -1.76 -2.41 -3.04 -2.10 -0.71 0.18 -0.87 0.41 -0.78 1.20 0.12 1.04 -0.25 1.12 -2.09 0.42 -0.66 -0.25 -0.85 -0.59 -0.85 -1.53 0.00 -0.82 -0.29 -1.47 -0.90 -2.05l-0.90 -0.85 0.76 -0.81c0.42 -0.44 0.67 -0.96 0.55 -1.15 -0.12 -0.19 -1.19 -0.71 -2.39 -1.16 -1.78 -0.67 -2.31 -1.06 -2.85 -2.12 -0.79 -1.54 -1.67 -2.38 -2.90 -2.73 -1.72 -0.50 -5.41 -2.75 -6.01 -3.66 -0.59 -0.90 -0.58 -0.94 0.53 -1.87 1.31 -1.09 2.01 -2.71 1.71 -3.91 -0.18 -0.73 -0.10 -0.81 0.65 -0.62 1.13 0.28 2.18 -0.70 1.70 -1.60 -0.19 -0.35 -0.59 -0.84 -0.90 -1.10 -0.63 -0.52 -0.69 -1.24 -0.34 -1.91 -3.24 -1.58 -9.78 -4.71 -11.95 -6.16 -1.36 -0.91 -3.86 -2.15 -6.02 -3.17 -2.16 -1.02 -3.97 -1.82 -3.97 -1.82l-4.99 1.36c0.00 0.00 -0.61 -0.11 -0.68 -0.12 -0.01 0.01 -0.22 0.12 -0.22 0.12 0.00 0.00 -1.14 -0.11 -2.67 -0.40 -0.64 -0.12 -1.37 -0.41 -2.09 -0.59 -2.20 -0.41 -3.94 -0.83 -4.77 -0.83 -0.81 0.00 -2.50 -0.30 -4.64 -0.60zm44.64 16.26c-0.69 0.00 -0.78 1.11 -0.14 1.81 0.77 0.85 1.25 0.91 1.25 0.14 0.00 -0.77 -0.67 -1.95 -1.10 -1.95zm23.02 5.39c-0.21 0.00 -0.28 0.16 -0.16 0.36 0.12 0.20 0.29 0.36 0.38 0.36 0.09 0.00 0.16 -0.16 0.16 -0.36 0.00 -0.20 -0.17 -0.36 -0.38 -0.36zm-2.48 13.40c-0.75 0.05 -1.47 0.43 -2.26 1.17 -1.86 1.74 -0.95 4.79 2.13 7.10 1.49 1.12 2.15 1.20 3.83 0.50 0.85 -0.36 1.48 -1.08 2.33 -2.66 1.40 -2.62 1.42 -3.09 0.22 -4.67 -0.87 -1.14 -1.04 -1.21 -2.36 -0.99 -0.85 0.14 -1.84 0.07 -2.47 -0.19 -0.49 -0.20 -0.96 -0.29 -1.41 -0.26zm-0.36 13.92c-0.82 0.05 -1.78 0.35 -2.51 0.89 -2.60 1.92 -3.98 5.05 -4.14 9.37 -0.06 1.58 -0.29 3.32 -0.50 3.87 -0.22 0.54 -0.30 1.45 -0.19 2.02 0.11 0.57 0.01 1.40 -0.23 1.85 -0.24 0.45 -0.57 1.80 -0.74 3.01 -0.45 3.19 -1.26 5.83 -2.35 7.70l-0.96 1.64 -0.49 -1.78c-0.93 -3.40 -0.95 -3.93 -0.19 -5.40 0.40 -0.77 1.15 -1.80 1.66 -2.29 0.52 -0.48 1.34 -1.56 1.84 -2.41 0.79 -1.35 0.86 -1.71 0.54 -3.08 -0.19 -0.85 -0.50 -2.60 -0.69 -3.89 -0.19 -1.29 -0.52 -2.80 -0.74 -3.37 -0.37 -0.96 -0.51 -1.02 -1.89 -0.84 -0.82 0.11 -1.91 0.54 -2.42 0.95 -1.36 1.09 -4.33 2.48 -5.83 2.71 -0.99 0.15 -1.54 0.54 -2.25 1.57 -1.13 1.63 -1.18 2.83 -0.22 5.55 0.91 2.60 0.90 3.06 -0.11 4.59 -0.46 0.69 -1.28 2.95 -1.83 5.02l-1.00 3.77 0.95 0.81c1.13 0.97 2.53 1.06 2.87 0.19 0.23 -0.59 0.27 -0.59 0.62 0.04 0.31 0.55 0.64 0.62 1.89 0.44 1.38 -0.21 1.56 -0.14 1.93 0.68 0.63 1.38 1.66 1.14 2.99 -0.70 0.64 -0.89 1.20 -1.57 1.26 -1.52 0.05 0.05 0.01 0.78 -0.11 1.62 -0.16 1.19 -0.44 1.67 -1.24 2.14 -0.57 0.33 -1.05 0.86 -1.07 1.16 -0.09 1.27 0.14 2.44 0.76 3.86 0.58 1.34 0.81 1.52 2.04 1.65 4.54 0.47 6.30 0.04 7.66 -1.88 0.79 -1.10 0.83 -2.01 0.20 -3.65 -0.34 -0.87 1.19 -1.68 3.99 -2.13 2.99 -0.48 4.86 -1.48 6.11 -3.29 0.81 -1.17 0.88 -1.46 0.47 -1.95 -1.01 -1.21 -4.96 -3.75 -5.84 -3.75 -0.51 0.00 -1.02 -0.16 -1.15 -0.36 -0.12 -0.20 -0.23 -1.70 -0.25 -3.33 -0.03 -3.22 0.71 -5.69 2.48 -8.27 1.09 -1.59 1.37 -1.64 2.48 -0.45 1.73 1.86 2.48 0.60 2.12 -3.55 -0.29 -3.41 -0.88 -4.87 -2.70 -6.66 -0.73 -0.72 -1.42 -1.58 -1.54 -1.93 -0.17 -0.49 -0.85 -0.69 -1.67 -0.64zm-34.85 22.56c-0.25 -0.01 -0.57 0.01 -0.99 0.03 -3.19 0.17 -3.19 0.17 -4.05 3.15l-0.79 2.72 1.09 2.24c1.25 2.56 1.49 2.89 3.35 4.48 1.58 1.36 1.38 1.31 2.95 0.66 1.37 -0.57 1.44 -0.82 1.79 -5.75 0.19 -2.70 0.15 -2.91 -0.79 -4.12 -0.54 -0.70 -1.17 -1.77 -1.39 -2.37 -0.28 -0.78 -0.42 -1.00 -1.17 -1.03zm52.29 5.51c-0.19 0.01 -0.39 0.03 -0.60 0.06 -0.74 0.10 -0.84 0.31 -0.82 1.63 0.02 0.83 0.24 1.76 0.49 2.07 0.57 0.69 2.17 0.73 3.07 0.06 0.61 -0.45 0.63 -0.64 0.23 -1.97 -0.41 -1.36 -1.07 -1.89 -2.38 -1.84zm5.36 7.55c-0.48 0.00 -0.88 0.09 -0.88 0.20 0.00 0.46 0.86 1.84 1.74 2.78 1.20 1.28 2.07 1.15 1.93 -0.29 -0.12 -1.28 -1.58 -2.68 -2.80 -2.68zm8.41 13.31c-0.50 0.00 -0.65 0.28 -0.65 1.19 0.00 0.65 0.20 1.38 0.43 1.62 0.62 0.62 2.43 0.54 2.68 -0.13 0.27 -0.70 -1.55 -2.68 -2.46 -2.68z",
    },
    path29: {
        name: "Gorontalo",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m968.24 192.29c-0.85 -0.85 -1.69 -1.71 -2.16 -2.40 -0.59 -0.88 -1.32 -1.72 -2.19 -2.49 -0.87 -0.77 -1.87 -1.46 -3.01 -2.05 -1.13 -0.59 -2.40 -1.06 -3.78 -1.39 -1.38 -0.33 -2.88 -0.51 -4.49 -0.51 -0.80 0.00 -1.47 -0.09 -2.02 -0.26 -0.55 -0.17 -0.98 -0.41 -1.31 -0.71 -0.67 -0.60 -0.94 -1.44 -0.98 -2.40 -0.04 -0.95 0.16 -2.01 0.45 -3.05 0.28 -1.04 0.65 -2.07 0.94 -2.95 0.22 -0.67 0.46 -1.54 0.78 -2.56 -0.50 -0.13 -1.03 -0.17 -1.37 -0.37 -1.13 -0.69 -1.16 -0.69 -2.51 0.00 -1.66 0.85 -1.91 0.85 -4.21 0.11 -2.23 -0.72 -3.38 -0.36 -5.73 1.80 -1.50 1.38 -1.58 1.40 -2.94 1.00 -0.77 -0.23 -2.26 -1.07 -3.30 -1.85 -1.05 -0.79 -2.48 -1.52 -3.17 -1.63 -0.70 -0.11 -2.51 -0.59 -4.01 -1.08 -1.95 -0.63 -3.56 -0.89 -5.57 -0.89 -1.33 -0.00 -3.04 -0.22 -4.32 -0.45 0.03 0.10 0.05 0.21 0.08 0.31 0.17 0.62 0.23 1.15 0.20 1.59 -0.03 0.44 -0.15 0.80 -0.35 1.10 -0.40 0.59 -1.13 0.91 -2.06 1.11 -1.87 0.40 -4.59 0.28 -7.32 0.74 -2.72 0.45 -6.81 0.34 -11.29 0.28 -2.24 -0.03 -4.58 -0.04 -6.90 0.04 -2.32 0.08 -4.62 0.25 -6.77 0.59 -2.16 0.34 -3.49 0.74 -4.23 1.21 -0.37 0.24 -0.60 0.49 -0.70 0.77 -0.11 0.28 -0.10 0.58 0.00 0.91 0.20 0.65 0.75 1.41 1.43 2.28 0.67 0.87 1.47 1.86 2.15 3.00 1.10 1.83 2.19 4.06 3.20 6.12 1.45 -0.32 3.03 -0.62 5.26 -0.72 3.45 -0.15 4.55 -0.33 5.63 -0.94 1.09 -0.61 1.77 -0.72 3.58 -0.59 1.99 0.14 2.35 0.29 3.18 1.31 1.53 1.86 2.92 2.04 7.74 0.96 2.27 -0.51 4.51 -0.83 4.97 -0.71 0.46 0.12 2.53 -0.04 4.58 -0.35 4.29 -0.64 6.39 -0.69 8.87 -0.23 1.04 0.20 5.01 0.21 9.67 0.04l7.91 -0.29 2.62 2.65c3.75 3.80 3.83 3.83 10.86 3.92 3.27 0.04 7.15 -0.07 8.64 -0.25 1.65 -0.20 2.40 -0.45 3.98 -0.71z",
    },
    path30: {
        name: "Sulawesi Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m818.92 316.14c1.02 -1.21 2.17 -2.82 2.93 -3.43 0.80 -0.64 1.36 -1.36 1.75 -2.13 0.39 -0.77 0.61 -1.58 0.73 -2.40 0.24 -1.64 0.08 -3.33 0.08 -4.77v0.00 -8.02l11.55 -0.32c0.00 0.00 0.56 0.32 1.12 0.20 0.28 -0.06 0.56 -0.23 0.77 -0.61 0.21 -0.38 0.35 -0.96 0.35 -1.84 0.00 -1.76 0.24 -4.01 0.24 -6.42 0.00 -1.20 -0.06 -2.45 -0.24 -3.69 -0.18 -1.24 -0.48 -2.49 -0.96 -3.69 -0.96 -2.41 -1.61 -4.81 -2.21 -7.46 -0.60 -2.65 -1.16 -5.53 -1.96 -8.90 -0.80 -3.37 -1.84 -6.66 -2.81 -9.75 -0.96 -3.09 -1.85 -5.98 -2.33 -8.54 -0.48 -2.57 -0.96 -7.06 -1.32 -10.91 -0.17 -1.81 -0.18 -2.07 -0.28 -3.33 -0.61 0.70 -1.15 1.51 -1.77 2.84 -0.71 1.52 -1.29 3.11 -1.29 3.54 0.00 0.44 -0.78 1.66 -1.78 2.76 -0.98 1.08 -2.01 2.42 -2.29 2.97 -0.60 1.18 -1.09 4.58 -1.03 7.12 0.20 9.19 0.28 10.07 1.07 11.59 1.36 2.59 1.13 3.37 -1.56 5.48 -1.29 1.02 -2.49 2.21 -2.66 2.64 -2.59 6.67 -2.96 8.38 -2.38 10.97 0.35 1.56 -0.26 3.00 -1.63 3.80 -0.59 0.35 -1.47 1.26 -1.96 2.03 -0.95 1.50 -2.11 2.25 -4.13 2.68 -4.00 0.85 -5.27 3.02 -3.63 6.22 0.38 0.73 1.11 1.73 1.62 2.21 1.26 1.17 1.18 2.12 -0.35 4.12 -1.77 2.32 -1.94 3.71 -0.70 5.82 0.68 1.16 1.04 2.36 1.15 3.88 0.16 2.02 1.52 6.33 2.30 7.27 0.18 0.21 0.93 0.59 1.69 0.84 1.25 0.41 1.52 0.37 3.12 -0.48 1.28 -0.68 2.29 -0.93 3.77 -0.93 1.38 -0.00 2.39 -0.23 3.19 -0.72 0.62 -0.38 1.22 -0.56 1.84 -0.65z",
    },
    path31: {
        name: "Maluku",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m1151.49 293.43c-1.42 -0.03 -2.12 0.39 -3.21 1.40 -1.46 1.34 -6.38 3.62 -7.83 3.62 -0.62 0.00 -1.19 -1.13 -1.59 -3.18 -0.28 -1.40 -0.66 -1.40 -4.24 -0.08 -2.04 0.75 -2.30 0.76 -8.83 0.37 -4.87 -0.29 -7.31 -0.30 -8.84 -0.01 -1.16 0.21 -3.15 0.39 -4.42 0.39 -2.04 0.00 -2.48 0.13 -3.70 1.10 -0.91 0.72 -1.54 1.61 -1.83 2.55 -0.54 1.79 -2.12 3.54 -3.20 3.54 -0.45 0.00 -1.35 0.41 -2.01 0.92 -0.66 0.50 -1.77 1.16 -2.46 1.44 -1.61 0.67 -1.60 1.32 0.04 4.08 1.17 1.96 1.27 2.34 1.06 3.89 -0.44 3.12 -0.38 4.79 0.16 5.13 0.76 0.47 0.99 0.18 1.68 -2.01 0.34 -1.09 1.19 -2.64 1.88 -3.44 0.96 -1.13 1.36 -2.03 1.72 -3.94 0.52 -2.74 1.33 -4.27 2.25 -4.27 0.84 0.00 1.47 0.71 1.47 1.65 0.00 0.91 0.53 1.40 1.85 1.72 0.67 0.16 1.28 0.80 2.04 2.15 0.60 1.06 1.87 2.78 2.83 3.82 1.64 1.79 1.84 1.90 3.54 1.92 2.28 0.03 4.54 -1.06 7.29 -3.54 2.52 -2.27 5.06 -4.12 5.66 -4.12 0.25 0.00 0.80 0.28 1.23 0.63 0.68 0.55 0.73 0.77 0.39 1.66 -0.60 1.57 0.01 2.02 2.69 2.02 1.77 0.00 2.76 0.23 4.54 1.08 1.87 0.89 2.74 1.08 4.87 1.08 1.97 0.00 2.89 0.18 3.84 0.74 0.83 0.49 1.73 0.70 2.63 0.63 1.34 -0.11 1.37 -0.15 1.48 -1.67 0.06 -0.86 -0.08 -1.79 -0.32 -2.08 -0.87 -1.05 -0.43 -1.10 6.14 -0.69 5.10 0.31 6.23 0.83 7.55 3.41 0.60 1.17 1.22 1.63 4.04 3.01 1.83 0.90 4.03 1.81 4.87 2.03 2.49 0.65 8.03 3.38 9.97 4.92 2.32 1.84 2.28 1.82 5.12 2.84v0.00 0.00c2.47 0.89 4.29 0.92 4.83 0.06 0.16 -0.24 0.29 -1.37 0.29 -2.50 0.00 -1.17 0.26 -2.60 0.61 -3.32 0.56 -1.17 0.56 -1.39 0.01 -3.16 -0.33 -1.04 -0.68 -2.34 -0.79 -2.89 -0.28 -1.39 -2.69 -2.95 -4.12 -2.67 -1.39 0.28 -2.17 -0.77 -2.17 -2.91 0.00 -2.57 -2.39 -6.29 -4.82 -7.52 -0.61 -0.31 -1.70 -1.12 -2.42 -1.81 -1.72 -1.64 -2.93 -1.86 -8.06 -1.48 -2.37 0.18 -4.78 0.25 -5.38 0.16 -0.59 -0.09 -2.41 -0.92 -4.04 -1.83 -4.11 -2.32 -7.74 -3.80 -10.71 -4.36 -1.60 -0.30 -2.71 -0.48 -3.56 -0.49zm-49.84 4.66c-0.39 0.01 -0.85 0.27 -1.36 0.81 -0.84 0.90 -1.36 2.54 -1.00 3.13 0.34 0.56 0.86 0.47 2.22 -0.37 0.82 -0.50 1.21 -1.02 1.21 -1.59 0.00 -1.30 -0.43 -1.99 -1.07 -1.98zm-41.72 4.50c-8.05 0.02 -9.93 0.26 -13.27 1.70l-3.02 1.30 -1.21 -0.93 -1.22 -0.92 -1.40 0.97c-1.61 1.12 -1.82 1.67 -1.83 4.90 -0.01 3.14 1.08 5.27 4.58 8.99 2.99 3.18 7.34 6.03 11.78 7.73 1.38 0.53 3.17 1.26 3.96 1.63 1.60 0.75 2.14 0.72 6.82 -0.39 1.98 -0.47 3.69 -1.11 4.42 -1.67 1.77 -1.35 5.65 -3.01 7.05 -3.01 0.67 0.00 1.39 -0.20 1.60 -0.45 0.49 -0.59 1.08 -3.18 1.26 -5.62 0.14 -1.81 0.07 -2.03 -1.14 -3.36 -1.16 -1.28 -1.42 -1.41 -2.63 -1.24 -1.04 0.14 -1.48 0.02 -1.99 -0.55 -0.41 -0.46 -0.50 -0.79 -0.25 -0.88 0.22 -0.08 0.68 -0.35 1.02 -0.60 0.57 -0.42 0.58 -0.57 0.10 -1.73 -0.68 -1.62 -2.05 -2.69 -4.30 -3.36 -0.98 -0.29 -2.70 -0.98 -3.82 -1.53 -1.90 -0.93 -2.33 -1.00 -6.53 -0.99zm34.37 3.08c-0.46 0.05 -0.78 0.36 -1.52 1.16 -1.29 1.40 -1.29 1.88 0.00 2.40v0.00 0.00c1.00 0.40 3.16 0.43 3.77 0.04 0.30 -0.19 0.43 -0.82 0.36 -1.70 -0.11 -1.30 -0.22 -1.43 -1.51 -1.75 -0.50 -0.12 -0.83 -0.19 -1.10 -0.16zm-5.36 3.43c-1.03 0.08 -2.40 0.77 -2.40 1.38 0.00 0.31 0.53 0.88 1.17 1.28 1.43 0.87 3.87 0.98 3.87 0.16 0.00 -0.75 -1.04 -2.28 -1.84 -2.71 -0.11 -0.06 -0.24 -0.09 -0.38 -0.11 -0.13 -0.01 -0.27 -0.01 -0.41 -0.00zm34.02 7.79c-0.12 -0.00 -0.22 0.01 -0.30 0.04 -0.63 0.24 -0.67 1.87 -0.06 2.26 0.25 0.16 1.10 0.56 1.89 0.88 2.75 1.13 3.49 0.62 1.79 -1.22 -0.99 -1.07 -2.50 -1.94 -3.32 -1.96zm-10.17 0.50c-0.41 0.03 -0.80 0.13 -1.14 0.30 -0.55 0.29 -1.48 0.78 -2.07 1.09 -0.58 0.31 -1.95 0.70 -3.04 0.88 -2.36 0.38 -3.25 0.80 -4.80 2.28 -1.33 1.26 -1.58 3.02 -0.57 4.03 0.71 0.71 2.41 0.49 4.50 -0.57 1.80 -0.92 2.16 -0.88 1.89 0.21 -0.32 1.26 0.43 1.17 3.07 -0.38 1.97 -1.16 2.18 -1.39 2.18 -2.48 0.00 -0.96 0.17 -1.24 0.84 -1.41 0.87 -0.22 1.68 -1.55 1.68 -2.75 0.00 -0.77 -1.31 -1.28 -2.53 -1.19zm6.29 0.15c-0.68 -0.02 -1.37 0.23 -1.91 0.81 -1.00 1.07 -1.44 3.40 -0.73 3.86 0.28 0.18 0.69 0.25 0.91 0.17 0.23 -0.08 1.12 -0.35 1.98 -0.60 2.14 -0.61 2.56 -0.99 2.29 -2.09 -0.31 -1.32 -1.41 -2.11 -2.55 -2.15zm-40.87 10.14c-0.34 0.01 -0.79 0.21 -1.35 0.61 -1.30 0.92 -1.38 1.55 -0.28 2.09 1.50 0.74 2.24 0.39 2.36 -1.10 0.09 -1.07 -0.16 -1.61 -0.73 -1.60zm137.02 4.73c-0.21 0.02 -0.43 0.09 -0.67 0.22 -0.92 0.49 -0.88 1.21 0.11 1.90 1.48 1.03 2.27 0.62 1.87 -0.97 -0.20 -0.80 -0.69 -1.21 -1.31 -1.14zm-3.51 3.53c-0.70 0.13 -0.90 1.24 -0.35 1.91 0.48 0.58 2.86 0.73 2.86 0.18 0.00 -0.58 -1.94 -2.19 -2.51 -2.09zm10.73 11.78c-0.82 0.00 -0.85 0.64 -0.07 1.50 0.53 0.59 1.56 0.91 1.56 0.49 0.00 -0.71 -0.96 -1.99 -1.50 -1.99zm-55.50 2.88c-0.67 0.00 -1.68 1.06 -1.42 1.48 0.22 0.36 1.53 0.10 2.08 -0.41 0.40 -0.37 -0.03 -1.07 -0.66 -1.07zm58.49 5.78c-0.37 0.01 -0.46 0.36 -0.24 1.03 0.13 0.41 0.47 0.74 0.75 0.74 0.69 0.00 0.66 -1.41 -0.04 -1.67 -0.19 -0.07 -0.35 -0.10 -0.47 -0.10zm46.44 19.79c-0.25 -0.03 -0.46 0.02 -0.66 0.14 -0.59 0.38 -3.12 6.34 -3.57 8.41 -0.15 0.66 -0.80 1.79 -1.44 2.51 -0.70 0.78 -1.40 2.11 -1.72 3.29 -0.30 1.09 -1.05 3.43 -1.67 5.19 -0.62 1.77 -1.05 3.43 -0.95 3.69 0.38 1.00 1.24 0.38 2.85 -2.04 1.07 -1.62 1.67 -2.91 1.67 -3.61 0.00 -1.50 1.14 -3.59 2.49 -4.59 1.76 -1.29 2.93 -3.41 3.90 -7.00 1.20 -4.49 1.20 -4.96 0.00 -5.64 -0.35 -0.20 -0.63 -0.31 -0.88 -0.34v0.00 0.00zm46.87 4.28c-1.39 0.00 -3.41 2.16 -5.21 5.57l-1.70 3.24 -1.55 -0.12c-1.93 -0.15 -3.26 0.17 -3.26 0.78 0.00 0.68 1.81 2.26 3.06 2.65 1.48 0.47 1.53 1.34 0.19 3.20 -0.99 1.38 -1.10 1.78 -0.91 3.11 0.14 0.95 0.03 2.07 -0.29 2.97l-0.51 1.44 -0.26 -1.14c-0.36 -1.63 -0.89 -1.94 -2.75 -1.63l-1.59 0.27 -0.11 1.97c-0.07 1.15 -0.35 2.23 -0.68 2.59 -0.52 0.57 -0.51 0.82 0.06 2.85 0.39 1.39 0.54 2.75 0.40 3.62 -0.12 0.76 -0.07 1.68 0.12 2.03 0.26 0.48 0.17 0.79 -0.35 1.24 -0.54 0.46 -0.70 1.06 -0.70 2.65 0.00 1.13 -0.34 3.25 -0.75 4.71 -0.85 3.04 -1.03 2.57 2.34 6.11 0.99 1.04 2.10 1.89 2.47 1.89 0.62 0.00 2.04 -1.36 8.30 -7.93 2.57 -2.70 2.74 -3.20 1.84 -5.47 -0.20 -0.52 -0.05 -0.63 0.86 -0.63 1.44 0.00 2.34 -1.29 2.14 -3.06 -0.14 -1.20 -0.07 -1.29 1.19 -1.63 1.87 -0.50 3.32 -2.59 4.09 -5.88 0.61 -2.57 0.60 -2.64 -0.15 -4.11 -0.42 -0.82 -1.17 -1.76 -1.66 -2.08 -0.49 -0.32 -0.89 -0.69 -0.89 -0.81 0.00 -0.13 0.57 -0.60 1.26 -1.04 1.40 -0.91 1.56 -1.69 0.68 -3.39 -0.56 -1.08 -0.55 -1.96 0.05 -4.88 0.15 -0.75 0.07 -1.37 -0.22 -1.72 -0.25 -0.30 -0.59 -1.37 -0.74 -2.37 -0.46 -2.93 -2.43 -4.98 -4.78 -4.98zm-58.52 4.67c-0.83 0.00 -1.04 0.16 -1.04 0.78 0.00 0.43 0.27 1.08 0.59 1.44 0.82 0.90 1.44 0.82 1.70 -0.21 0.33 -1.33 -0.09 -2.01 -1.26 -2.01zm-3.93 0.72c-1.69 0.00 -1.90 0.72 -0.89 3.02 0.53 1.20 0.90 2.71 0.90 3.66 0.00 1.59 0.78 3.67 1.58 4.19 1.31 0.86 3.40 -0.11 3.51 -1.64 0.11 -1.54 -0.09 -2.20 -1.54 -5.07 -1.81 -3.57 -2.32 -4.16 -3.56 -4.16zm72.40 23.07c-0.56 0.07 -1.31 0.63 -1.96 1.57 -1.15 1.66 -1.23 2.33 -0.47 3.80 0.62 1.19 1.42 1.37 1.92 0.43 0.59 -1.10 1.45 -4.81 1.24 -5.36 -0.13 -0.34 -0.40 -0.48 -0.73 -0.43zm-4.67 2.60c-0.04 0.04 -0.07 0.17 -0.07 0.37 -0.02 0.38 0.07 0.59 0.19 0.47 0.12 -0.12 0.13 -0.43 0.03 -0.69 -0.06 -0.14 -0.11 -0.19 -0.14 -0.16zm-0.97 7.21c-0.14 0.00 -0.30 0.05 -0.46 0.15 -1.08 0.70 -1.52 3.08 -0.82 4.39 0.56 1.05 1.37 0.84 2.02 -0.52 0.82 -1.72 0.27 -4.04 -0.74 -4.03zm-101.96 3.09c-0.36 0.03 -0.75 0.30 -0.87 0.78 -0.11 0.43 -0.12 0.92 -0.02 1.08 0.44 0.71 1.58 -0.16 1.58 -1.21 0.00 -0.47 -0.33 -0.68 -0.69 -0.65zm-97.28 12.64c-0.62 0.06 -1.22 0.43 -1.91 1.09 -1.49 1.45 -1.50 2.18 -0.02 3.12 1.57 1.01 2.98 0.96 4.06 -0.12 1.20 -1.20 1.14 -2.48 -0.16 -3.41 -0.73 -0.52 -1.36 -0.75 -1.97 -0.69zm107.07 1.42c-0.43 -0.01 -0.97 0.01 -1.69 0.04l-2.92 0.11 -0.11 1.17c-0.11 1.13 -0.07 1.17 1.26 1.18 0.75 0.01 1.94 0.32 2.63 0.70 1.47 0.80 1.79 0.84 3.03 0.37 1.17 -0.45 1.17 -1.10 -0.02 -2.51 -0.70 -0.83 -0.90 -1.05 -2.18 -1.06zm-7.93 0.09c-0.18 0.00 -0.38 0.03 -0.60 0.07 -1.50 0.31 -2.74 1.13 -2.74 1.82 0.00 0.31 -1.29 1.90 -2.86 3.54 -1.57 1.64 -2.96 3.39 -3.08 3.88 -0.15 0.60 -0.72 1.12 -1.73 1.57 -1.60 0.72 -3.69 3.38 -4.04 5.13 -0.40 2.02 -0.74 2.74 -1.34 2.85 -0.46 0.09 -0.62 -0.12 -0.62 -0.81 0.00 -0.67 -0.19 -0.92 -0.69 -0.92 -1.19 0.00 -1.79 0.39 -2.58 1.68 -0.99 1.61 -0.54 2.22 1.24 1.67 1.14 -0.35 1.26 -0.31 1.83 0.67 0.61 1.03 0.60 1.06 -0.49 2.30 -1.09 1.24 -1.10 1.28 -0.56 2.56 0.33 0.79 0.46 1.76 0.33 2.47 -0.17 0.90 -0.07 1.25 0.44 1.55 0.93 0.54 1.68 0.50 3.40 -0.19 1.24 -0.50 1.69 -0.52 2.70 -0.16 1.51 0.55 1.94 0.30 1.94 -1.11 0.00 -1.41 1.15 -3.27 2.57 -4.17 0.61 -0.38 1.45 -1.31 1.88 -2.05 0.51 -0.89 1.18 -1.49 1.98 -1.76 1.64 -0.54 3.13 -2.71 4.01 -5.85 0.62 -2.18 0.67 -2.97 0.39 -5.39 -0.18 -1.56 -0.44 -3.10 -0.57 -3.43 -0.18 -0.43 0.04 -0.73 0.77 -1.08 0.79 -0.38 1.04 -0.77 1.12 -1.78 0.09 -1.09 -0.08 -1.45 -1.04 -2.26 -0.69 -0.58 -1.12 -0.81 -1.66 -0.81zm-18.70 9.95c-0.74 -0.02 -1.52 0.12 -1.83 0.43 -0.47 0.47 -0.58 2.17 -0.17 2.58 0.14 0.14 0.83 0.21 1.52 0.15 0.98 -0.08 1.38 -0.33 1.75 -1.12 0.27 -0.56 0.39 -1.24 0.28 -1.53 -0.12 -0.32 -0.81 -0.50 -1.55 -0.52zm-6.21 2.88c-0.66 0.00 -1.10 0.90 -0.82 1.71 0.32 0.94 2.61 0.38 2.61 -0.63 0.00 -0.67 -0.68 -1.08 -1.78 -1.08zm-113.83 0.77c-0.31 0.04 -0.62 0.23 -0.97 0.55 -0.83 0.75 -0.82 1.11 0.06 2.55 0.84 1.37 0.91 1.38 2.43 0.45 1.42 -0.87 1.45 -1.28 0.20 -2.59 -0.69 -0.72 -1.21 -1.03 -1.72 -0.96zm-27.49 1.83c-0.26 -0.01 -0.52 0.02 -0.84 0.07 -1.54 0.25 -3.79 1.29 -5.49 2.55 -1.84 1.36 -8.65 1.78 -11.26 0.69 -2.04 -0.85 -2.48 -0.68 -3.92 1.55 -0.74 1.14 -1.93 2.80 -2.65 3.69 -1.11 1.37 -1.35 1.99 -1.57 4.05 -0.32 3.04 0.03 3.12 3.15 0.72l2.22 -1.71 2.88 0.06c5.03 0.10 11.83 0.71 12.92 1.16 1.35 0.56 1.83 0.35 2.57 -1.11 0.63 -1.25 1.64 -2.24 3.82 -3.75 1.00 -0.69 1.98 -0.98 3.95 -1.15l2.63 -0.24 0.11 -1.19c0.14 -1.44 -0.44 -2.22 -1.62 -2.22 -0.48 0.00 -2.11 -0.74 -3.61 -1.66 -1.80 -1.10 -2.53 -1.46 -3.31 -1.50zm101.56 6.89c-1.63 0.09 -2.95 0.95 -3.25 2.55 -0.26 1.40 0.07 2.08 2.45 4.95 1.29 1.56 1.55 1.71 2.99 1.71 1.75 0.00 2.76 -0.77 3.62 -2.78 0.81 -1.89 0.63 -3.07 -0.67 -4.33 -1.55 -1.50 -3.50 -2.19 -5.13 -2.10zm-81.28 7.79c-0.58 -0.07 -1.09 0.41 -1.19 1.36 -0.06 0.66 -0.03 1.43 0.08 1.71 0.21 0.55 0.67 0.61 1.92 0.28 0.97 -0.26 1.07 -1.40 0.24 -2.59 -0.33 -0.47 -0.70 -0.71 -1.05 -0.76zm20.64 2.58c-0.88 0.05 -1.39 0.45 -1.39 1.16 0.00 1.32 1.63 3.01 3.17 3.29 0.73 0.13 1.94 0.55 2.70 0.93l1.37 0.69 1.55 -0.87 1.55 -0.87 0.58 1.21c0.53 1.11 0.71 1.21 2.20 1.21 1.50 0.00 1.62 -0.07 1.62 -0.92 0.00 -1.73 -0.60 -2.31 -2.35 -2.31 -1.54 0.00 -1.61 -0.04 -1.61 -1.07 0.00 -1.22 -0.29 -1.34 -3.77 -1.57 -1.19 -0.08 -2.84 -0.35 -3.68 -0.59 -0.76 -0.23 -1.42 -0.32 -1.95 -0.29zm106.42 0.37c-0.64 0.03 -1.31 0.11 -1.98 0.26 -2.61 0.59 -3.69 1.25 -3.69 2.23 0.00 0.44 -0.67 1.39 -1.57 2.24 -1.78 1.66 -2.86 3.21 -2.51 3.57 0.59 0.59 1.76 0.12 3.13 -1.26 1.09 -1.10 1.92 -1.58 3.10 -1.80 2.22 -0.42 7.01 -3.23 7.01 -4.12 0.00 -0.77 -1.58 -1.21 -3.50 -1.13zm-177.89 1.21c-0.40 -0.06 -0.94 0.03 -1.47 0.31 -2.29 1.18 -3.62 4.00 -2.45 5.17 0.25 0.25 1.01 0.40 1.71 0.34 1.21 -0.10 1.29 -0.20 2.04 -2.44 0.43 -1.29 0.79 -2.52 0.81 -2.75 0.03 -0.35 -0.23 -0.57 -0.63 -0.63zm67.48 0.19c-0.82 0.07 -1.76 0.50 -2.24 1.23 -0.74 1.12 -0.53 1.84 0.59 2.06 0.46 0.09 1.02 0.18 1.26 0.21 0.52 0.06 1.91 -1.83 1.91 -2.59 0.00 -0.69 -0.70 -0.98 -1.52 -0.91zm39.87 0.91c-1.67 0.13 -2.87 1.07 -2.05 2.07 0.68 0.82 3.66 0.76 4.72 -0.09 0.99 -0.80 0.72 -1.36 -0.89 -1.81 -0.60 -0.17 -1.21 -0.21 -1.77 -0.17z",
    },
    path32: {
        name: "Maluku Utara",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m1121.97 115.95c-0.40 0.06 -1.03 0.40 -1.85 1.03 -0.92 0.70 -1.90 1.28 -2.17 1.28 -0.84 0.00 -3.97 3.19 -5.47 5.56 -1.74 2.75 -2.25 4.49 -1.81 6.05 0.18 0.64 0.33 1.76 0.33 2.50 0.00 0.74 0.27 2.01 0.59 2.83l0.59 1.48 1.65 -0.24c0.91 -0.13 2.46 -0.36 3.45 -0.51 2.30 -0.34 3.87 -1.18 4.98 -2.65 1.17 -1.56 2.25 -3.77 2.57 -5.25 0.14 -0.66 0.65 -2.05 1.12 -3.09 0.82 -1.80 0.84 -1.95 0.31 -3.49 -0.53 -1.55 -2.95 -4.86 -3.98 -5.45 -0.08 -0.05 -0.19 -0.06 -0.32 -0.04zm-13.90 9.14c-0.49 0.00 -0.66 0.27 -0.66 1.02 0.00 0.56 0.11 1.13 0.24 1.26 0.35 0.35 1.49 0.29 1.72 -0.09 0.35 -0.57 -0.61 -2.18 -1.30 -2.18zm-5.28 5.47c-0.27 -0.02 -0.57 0.01 -0.93 0.07 -1.01 0.19 -2.03 1.09 -5.49 4.87 -2.33 2.55 -4.78 5.52 -5.44 6.61 -1.73 2.85 -2.92 6.60 -3.26 10.22 -0.26 2.84 -0.48 3.50 -2.13 6.57l-1.84 3.41 0.10 3.24 0.11 3.24 1.21 0.40c0.91 0.30 1.29 0.68 1.51 1.53 0.16 0.62 0.92 2.13 1.69 3.34l1.40 2.21 -0.85 1.65c-1.19 2.31 -1.48 4.95 -0.76 7.11 0.31 0.95 0.66 2.33 0.77 3.06 0.17 1.12 0.55 1.58 2.36 2.88l2.15 1.55 -0.23 1.62c-0.13 0.89 -0.27 3.64 -0.31 6.11 -0.04 2.47 -0.20 5.71 -0.34 7.19 -0.24 2.47 -0.19 2.80 0.58 3.94 0.47 0.70 1.90 1.85 3.25 2.62 2.28 1.31 2.49 1.55 4.31 4.87 1.05 1.92 2.31 4.30 2.81 5.29 0.86 1.71 1.08 1.88 4.32 3.32 2.80 1.25 3.47 1.70 3.73 2.52 0.46 1.42 0.86 1.83 1.96 2.00 2.50 0.38 3.66 0.18 3.66 -0.66 0.00 -0.26 -1.11 -1.48 -2.47 -2.69 -2.74 -2.45 -3.45 -3.35 -6.39 -8.08 -1.91 -3.07 -4.22 -8.28 -5.41 -12.23 -0.30 -0.99 -0.95 -2.60 -1.45 -3.58 -0.98 -1.93 -1.16 -4.62 -0.42 -6.02 0.57 -1.06 0.46 -3.52 -0.22 -5.22 -0.65 -1.64 -0.41 -2.61 1.15 -4.66l0.97 -1.27 2.30 0.25c1.37 0.15 3.04 0.63 4.14 1.20 1.51 0.78 2.48 0.99 5.46 1.15 3.34 0.18 3.78 0.29 5.77 1.48 1.19 0.71 2.97 1.48 3.96 1.70 0.99 0.23 2.85 0.67 4.13 0.97 4.05 0.96 4.32 0.99 4.32 0.45 0.00 -1.07 -2.07 -2.77 -4.10 -3.36 -1.88 -0.55 -2.02 -0.66 -2.02 -1.69 0.00 -1.73 -0.73 -3.73 -1.86 -5.10 -0.77 -0.93 -1.57 -1.40 -3.10 -1.83 -5.51 -1.53 -10.15 -3.92 -10.15 -5.22 0.00 -0.17 -0.09 -0.55 -0.21 -0.85 -0.14 -0.38 0.13 -0.61 0.92 -0.78 0.80 -0.18 1.29 -0.60 1.70 -1.44 0.42 -0.88 0.88 -1.25 1.73 -1.41 1.26 -0.24 5.97 -2.75 8.26 -4.40 2.00 -1.45 3.06 -3.15 3.06 -4.91 0.00 -0.80 0.27 -2.41 0.60 -3.58 0.58 -2.07 0.58 -2.17 -0.16 -3.62 -0.42 -0.82 -0.84 -2.18 -0.93 -3.03 -0.35 -3.27 -1.96 -4.06 -5.21 -2.59 -0.86 0.39 -2.08 0.72 -2.70 0.72 -1.15 0.01 -2.59 0.75 -6.79 3.51 -2.40 1.57 -3.76 3.21 -4.54 5.47 -0.41 1.18 -0.37 1.31 0.52 2.09l0.96 0.83 -0.82 0.88c-0.50 0.54 -1.23 0.88 -1.86 0.88 -2.65 0.00 -5.68 3.04 -5.68 5.71 0.00 1.55 -0.86 3.50 -1.74 3.98 -1.49 0.80 -3.20 0.47 -4.73 -0.92 -0.79 -0.72 -1.54 -1.69 -1.66 -2.16 -0.32 -1.29 0.48 -2.82 1.82 -3.46 0.66 -0.31 1.74 -1.05 2.41 -1.63 0.67 -0.58 1.86 -1.39 2.65 -1.79 0.79 -0.40 1.75 -1.27 2.14 -1.94 0.39 -0.66 1.23 -1.90 1.89 -2.76 0.84 -1.10 1.19 -1.94 1.19 -2.88 0.00 -0.73 0.16 -2.31 0.36 -3.52 0.27 -1.68 0.24 -2.53 -0.13 -3.60 -0.27 -0.77 -0.41 -1.99 -0.32 -2.71 0.20 -1.64 -0.92 -3.30 -2.89 -4.31 -0.75 -0.38 -1.54 -1.08 -1.75 -1.55 -0.33 -0.72 -0.23 -1.06 0.64 -2.20 0.57 -0.74 1.35 -1.87 1.75 -2.52 0.40 -0.65 1.19 -1.75 1.75 -2.46 0.94 -1.17 0.99 -1.38 0.59 -2.36 -0.48 -1.16 -0.94 -1.66 -1.75 -1.73zm-21.47 43.44c-1.04 0.00 -1.64 2.34 -0.81 3.17 0.50 0.50 1.69 0.56 2.40 0.11 0.96 -0.61 -0.34 -3.27 -1.59 -3.27zm3.65 4.02c-0.33 -0.03 -0.75 0.10 -1.24 0.40 -1.02 0.62 -1.69 2.12 -1.34 3.02 0.16 0.43 0.50 0.51 1.35 0.34 1.60 -0.32 2.10 -0.85 2.10 -2.25 0.00 -0.93 -0.31 -1.45 -0.86 -1.50zm-1.02 12.03c-0.86 0.10 -2.50 1.19 -2.34 1.68 0.08 0.24 0.54 0.64 1.02 0.88 1.04 0.53 0.86 0.50 1.56 0.24 0.72 -0.27 0.78 -2.50 0.08 -2.77 -0.08 -0.03 -0.19 -0.04 -0.31 -0.02zm0.21 10.21c-0.59 0.00 -0.61 0.41 -0.07 1.60 0.47 1.03 1.74 1.25 1.74 0.31 0.00 -0.75 -1.02 -1.92 -1.67 -1.92zm63.51 1.82c-0.22 0.04 -0.33 0.22 -0.33 0.54 0.00 0.70 4.59 5.88 5.57 6.28 1.00 0.41 1.90 0.41 2.15 -0.01 0.39 -0.63 -0.50 -1.74 -3.47 -4.31 -1.78 -1.54 -3.00 -2.37 -3.66 -2.50 -0.10 -0.02 -0.19 -0.02 -0.26 -0.01zm-70.01 8.61c-0.75 0.00 -1.88 0.32 -2.53 0.71 -1.15 0.70 -1.17 0.75 -1.17 3.40 0.00 2.50 0.08 2.78 1.12 3.96 0.61 0.70 1.42 1.27 1.78 1.27 1.09 0.00 2.47 -0.78 2.71 -1.53 0.19 -0.59 0.39 -0.41 1.24 1.07 0.93 1.63 2.58 3.34 4.08 4.24 0.52 0.31 0.54 0.52 0.17 1.49 -0.40 1.04 -0.34 1.24 0.76 2.63 0.94 1.19 1.35 1.46 1.95 1.27 0.42 -0.13 1.50 -0.32 2.41 -0.43 1.55 -0.18 1.71 -0.12 2.47 0.96 0.45 0.63 1.16 1.30 1.58 1.48 1.03 0.44 3.30 0.17 4.36 -0.53 0.98 -0.64 1.57 -2.87 1.01 -3.78 -0.71 -1.15 -2.71 -2.19 -4.21 -2.19 -1.89 -0.01 -3.17 -0.67 -3.59 -1.85 -0.27 -0.76 -0.15 -1.17 0.62 -2.18 0.52 -0.69 0.95 -1.61 0.95 -2.06 0.00 -1.33 -1.05 -3.14 -2.73 -4.68 -1.66 -1.53 -2.97 -1.85 -3.75 -0.91 -0.26 0.31 -1.04 0.54 -1.85 0.54 -1.92 0.00 -3.81 0.86 -4.31 1.95 -0.60 1.31 -1.03 0.79 -1.03 -1.23 0.00 -2.81 -0.45 -3.60 -2.06 -3.60zm0.66 11.51c-0.97 0.00 -1.74 0.86 -2.18 2.44 -0.55 1.97 -0.46 3.23 0.26 3.64 0.83 0.48 2.24 0.48 3.63 -0.01 0.95 -0.33 1.13 -0.58 1.13 -1.55 0.00 -1.51 -1.90 -4.53 -2.84 -4.53zm10.73 18.46c-0.19 -0.00 -0.38 0.01 -0.55 0.05 -1.32 0.25 -1.94 1.06 -1.94 2.56 0.00 0.91 0.08 0.96 1.35 0.79 1.96 -0.26 4.05 -1.23 4.05 -1.86 0.00 -0.76 -1.57 -1.52 -2.90 -1.53zm3.05 5.02c-0.20 -0.01 -0.37 -0.00 -0.53 0.03 -0.56 0.11 -1.76 0.77 -2.66 1.46 -0.91 0.69 -2.20 1.36 -2.88 1.49 -0.68 0.13 -1.39 0.42 -1.57 0.64 -0.49 0.61 -1.13 3.98 -1.13 5.95 0.00 1.96 0.31 2.35 3.06 3.76 2.09 1.07 3.06 1.14 5.04 0.35 2.08 -0.83 9.65 -1.22 11.46 -0.59 2.28 0.79 3.55 0.62 5.06 -0.69 1.34 -1.16 1.35 -1.19 0.95 -2.69 -0.36 -1.33 -0.58 -1.56 -1.77 -1.88 -0.75 -0.20 -1.75 -0.79 -2.24 -1.31 -1.61 -1.73 -3.81 -3.02 -5.15 -3.02 -0.90 0.00 -1.63 -0.32 -2.51 -1.08 -1.50 -1.31 -3.74 -2.35 -5.12 -2.42zm-10.75 1.18c-0.89 0.13 -1.22 1.08 -0.69 2.47 0.32 0.84 1.07 0.69 1.92 -0.38 0.96 -1.22 0.94 -1.52 -0.15 -1.93 -0.41 -0.16 -0.77 -0.21 -1.07 -0.16zm-89.33 8.85c-2.39 -0.06 -4.70 0.21 -5.55 0.77 -1.09 0.71 -3.30 4.58 -3.62 6.35 -0.28 1.54 0.89 3.48 3.08 5.06 1.08 0.78 1.89 1.07 2.96 1.07 2.01 0.00 5.72 -1.10 8.27 -2.47 2.49 -1.33 2.59 -1.34 5.54 -0.41l2.26 0.71 2.01 -1.07c1.77 -0.94 2.37 -1.07 5.00 -1.07 2.59 0.00 3.05 -0.10 3.50 -0.73 0.45 -0.64 0.56 -0.66 0.96 -0.18 0.25 0.30 0.82 0.55 1.26 0.55 0.44 0.00 1.43 0.50 2.20 1.12 1.34 1.07 1.49 1.11 3.73 0.87 1.29 -0.14 3.64 -0.23 5.22 -0.20 1.59 0.03 3.34 -0.12 3.90 -0.33 0.72 -0.27 1.43 -0.28 2.42 -0.01 1.14 0.31 1.86 0.25 3.83 -0.33 1.43 -0.42 3.42 -0.71 4.86 -0.69 2.06 0.02 2.66 -0.13 3.89 -0.94 0.80 -0.53 1.39 -1.15 1.31 -1.39 -0.08 -0.24 -1.02 -0.54 -2.09 -0.67 -1.07 -0.13 -3.59 -0.44 -5.59 -0.68 -2.87 -0.35 -4.82 -0.35 -9.19 -0.01 -5.43 0.42 -9.94 0.29 -12.57 -0.37 -1.62 -0.41 -2.34 -0.15 -3.00 1.07 -0.49 0.89 -0.52 0.90 -0.53 0.15 -0.03 -1.42 -0.79 -2.62 -1.67 -2.62 -0.45 0.00 -0.92 0.16 -1.04 0.36 -0.36 0.58 -0.83 0.42 -1.08 -0.36 -0.24 -0.76 -1.90 -1.80 -2.88 -1.80 -0.32 0.00 -0.75 0.49 -0.95 1.08 -0.47 1.36 -1.45 1.41 -3.26 0.18 -0.76 -0.52 -2.45 -1.12 -3.95 -1.41 -1.44 -0.28 -3.75 -0.78 -5.14 -1.11 -1.19 -0.28 -2.66 -0.44 -4.09 -0.48zm44.02 11.09c-0.58 0.02 -1.20 0.44 -1.84 1.27 -0.86 1.12 -0.94 1.49 -0.77 3.22 0.11 1.07 0.77 3.21 1.46 4.76 0.69 1.54 1.38 3.45 1.52 4.24 0.17 0.95 0.67 1.83 1.49 2.61 1.40 1.33 2.42 1.49 2.97 0.47 0.64 -1.20 0.42 -2.17 -1.27 -5.74 -1.67 -3.51 -1.87 -4.48 -1.44 -7.05 0.19 -1.12 0.08 -1.70 -0.49 -2.61 -0.50 -0.80 -1.05 -1.19 -1.64 -1.18z",
    },
    path33: {
        name: "Papua",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m1346.84 223.59c-1.22 0.05 -2.07 0.40 -2.07 0.98 0.00 1.48 1.18 2.75 3.53 3.82 1.32 0.60 2.93 1.55 3.58 2.12 1.39 1.22 1.45 1.22 3.17 0.41l1.32 -0.63 0.74 0.98c1.08 1.44 2.68 6.48 2.48 7.81 -0.18 1.25 0.52 2.27 2.14 3.11 0.82 0.42 1.14 0.42 2.20 -0.02 1.12 -0.47 1.41 -0.45 3.00 0.18 2.80 1.12 7.99 0.16 10.24 -1.89l1.20 -1.09 -0.80 -0.65c-0.44 -0.36 -1.82 -0.99 -3.07 -1.40 -2.48 -0.83 -4.08 -2.12 -5.88 -4.77 -0.64 -0.93 -1.93 -2.26 -2.88 -2.95 -0.95 -0.69 -2.17 -1.82 -2.71 -2.51 -1.22 -1.55 -2.98 -2.01 -4.33 -1.13 -0.66 0.43 -0.97 0.48 -1.16 0.18 -0.45 -0.73 -3.17 -1.77 -4.66 -1.78 -0.79 -0.01 -2.39 -0.24 -3.54 -0.51 -0.88 -0.21 -1.74 -0.29 -2.48 -0.26zm-7.40 26.72c-0.45 0.01 -0.93 0.07 -1.40 0.18 -1.45 0.34 -1.92 1.20 -1.17 2.11 0.94 1.13 5.02 0.07 5.02 -1.30 0.00 -0.63 -1.10 -1.03 -2.45 -0.99zm87.57 0.15c-0.74 -0.03 -1.59 0.17 -2.90 0.50 -3.20 0.81 -5.68 1.95 -12.41 5.72 -2.45 1.37 -5.15 2.69 -5.99 2.92 -0.84 0.23 -2.12 0.92 -2.85 1.52 -1.20 0.99 -1.31 1.21 -1.10 2.39 0.14 0.82 0.64 1.66 1.35 2.27 0.94 0.81 2.06 2.95 2.08 3.96 0.01 0.48 -1.60 1.12 -3.95 1.55 -1.29 0.24 -4.12 1.25 -6.30 2.24 -4.92 2.24 -7.56 2.62 -11.55 1.68 -2.17 -0.51 -2.92 -0.55 -4.05 -0.21 -1.64 0.49 -3.28 2.60 -3.28 4.21 0.00 0.58 -0.41 1.86 -0.90 2.83 -0.49 0.97 -0.90 2.09 -0.90 2.49 0.00 1.53 -1.52 3.00 -4.74 4.58 -1.74 0.85 -3.74 2.15 -4.45 2.87 -1.13 1.16 -1.33 1.64 -1.61 3.91 -0.41 3.25 -1.14 4.31 -4.15 5.99 -1.69 0.94 -2.52 1.67 -3.01 2.64 -0.52 1.02 -1.02 1.44 -2.13 1.77 -1.37 0.41 -2.91 1.84 -2.93 2.71 0.00 0.22 -0.53 0.99 -1.17 1.71 -0.96 1.08 -1.61 1.41 -3.72 1.90 -1.90 0.44 -2.80 0.50 -3.53 0.22 -0.54 -0.20 -1.83 -0.37 -2.88 -0.37 -1.05 0.00 -2.60 -0.24 -3.44 -0.54 -0.84 -0.30 -2.00 -0.54 -2.57 -0.54 -0.82 0.00 -1.21 -0.28 -1.80 -1.27 -0.41 -0.70 -1.39 -1.60 -2.16 -1.99 -2.08 -1.06 -2.72 -2.63 -2.17 -5.30 0.54 -2.59 0.55 -4.98 0.04 -5.30 -0.22 -0.13 -0.93 0.28 -1.59 0.92 -0.93 0.90 -1.40 1.11 -2.08 0.94 -0.56 -0.14 -0.82 -0.62 -1.07 -1.56 -0.96 4.64 -1.83 9.80 -2.34 14.87 -0.13 1.29 -0.09 2.57 0.09 3.81 0.17 1.24 0.48 2.44 0.87 3.60 0.79 2.31 1.93 4.42 3.10 6.20 1.18 1.78 2.39 3.24 3.30 4.26 0.91 1.01 1.54 1.59 1.54 1.59l-7.03 -0.21 -0.76 0.87c0.24 0.77 0.14 2.92 -0.30 3.77 -0.75 1.45 -0.68 1.71 0.71 2.53 0.68 0.40 1.33 1.01 1.44 1.34 0.30 0.92 2.34 2.08 4.43 2.53 1.32 0.28 2.67 1.00 4.66 2.47 1.54 1.14 3.81 2.53 5.06 3.09 2.16 0.97 2.37 1.00 4.76 0.63 2.81 -0.44 8.45 0.03 10.95 0.90 0.88 0.31 2.91 0.51 5.15 0.51 4.06 0.01 5.33 0.36 7.30 2.05 2.10 1.81 6.69 3.76 9.32 3.97 2.50 0.20 4.04 0.84 7.19 2.97 1.09 0.74 2.38 1.46 2.88 1.61 0.49 0.15 1.71 0.72 2.70 1.26 2.98 1.64 5.40 2.36 6.41 1.90 0.70 -0.32 1.06 -0.26 1.90 0.31 0.78 0.53 1.42 0.66 2.55 0.52 1.58 -0.20 3.04 0.26 4.96 1.57 1.36 0.92 1.35 0.92 2.64 -0.17 0.99 -0.84 1.10 -0.85 1.29 -0.25 0.35 1.09 3.18 3.59 4.52 3.99 3.12 0.92 4.59 1.65 6.10 3.05 0.90 0.83 2.46 1.88 3.47 2.35 1.32 0.61 2.01 1.19 2.42 2.07 0.47 0.99 0.78 1.22 1.68 1.22 0.84 0.00 1.50 0.42 2.84 1.80 1.58 1.63 2.26 1.98 3.50 1.83 0.78 -0.09 1.17 1.89 0.63 3.18 -0.99 2.37 -0.30 5.42 1.23 5.42 0.34 -0.00 1.48 -0.33 2.54 -0.74 1.06 -0.40 2.00 -0.67 2.08 -0.59 0.08 0.08 -0.44 0.73 -1.16 1.45 -0.72 0.72 -1.23 1.51 -1.15 1.76 0.08 0.25 1.05 0.78 2.16 1.18 2.55 0.91 2.65 1.03 1.54 1.76 -0.95 0.62 -1.21 1.79 -0.50 2.23 0.72 0.44 3.07 6.00 3.72 8.78 1.01 4.32 1.86 5.62 6.43 9.75 2.27 2.05 4.14 3.86 4.15 4.00 0.02 0.15 -0.21 0.27 -0.51 0.27 -0.72 0.00 -0.68 0.89 0.09 2.07 0.61 0.93 0.61 0.95 -0.09 0.66 -1.48 -0.60 -1.80 -0.45 -1.74 0.83 0.03 0.67 0.40 1.68 0.81 2.23 0.95 1.29 0.94 1.46 -0.06 1.22 -1.04 -0.25 -3.15 1.03 -3.15 1.91 0.00 0.80 5.45 6.19 7.13 7.05 0.66 0.34 2.22 0.83 3.47 1.09 1.25 0.26 2.57 0.67 2.94 0.90 0.63 0.40 0.63 0.41 -0.05 0.16 -0.40 -0.14 -2.38 -0.34 -4.41 -0.43 -3.01 -0.13 -3.85 -0.06 -4.59 0.42 -1.15 0.75 -1.14 1.22 0.06 1.67 0.53 0.20 1.99 1.12 3.25 2.05 1.72 1.26 2.53 2.16 3.23 3.60 0.51 1.05 0.85 2.00 0.74 2.11 -0.11 0.11 -0.74 -0.53 -1.40 -1.42 -1.77 -2.38 -3.81 -3.25 -7.18 -3.02 -3.07 0.20 -10.26 1.72 -12.36 2.61 -2.18 0.92 -5.61 3.02 -6.97 4.28 -0.67 0.61 -2.07 2.41 -3.12 3.99 -1.05 1.58 -2.39 3.57 -2.98 4.41 -0.59 0.84 -1.58 2.95 -2.21 4.68 -0.62 1.73 -1.43 3.46 -1.79 3.86 -0.98 1.08 -1.79 2.84 -3.13 6.80 -1.35 4.00 -1.45 4.81 -0.66 5.12 0.30 0.11 2.02 -0.16 3.83 -0.61 3.10 -0.76 3.54 -0.79 7.64 -0.39 2.39 0.23 5.12 0.42 6.05 0.41 0.94 0.00 2.43 0.19 3.31 0.43 2.23 0.60 5.10 -0.31 7.26 -2.31 0.87 -0.80 1.64 -1.40 1.71 -1.32 0.07 0.08 0.39 0.67 0.72 1.31 0.33 0.64 0.63 1.18 0.68 1.19 1.43 0.31 6.93 1.04 7.93 1.05 1.53 0.01 2.77 -0.51 2.76 -1.17 0.00 -0.24 -0.49 -1.39 -1.08 -2.56 -0.59 -1.17 -1.07 -2.26 -1.07 -2.44 0.00 -0.18 0.60 0.09 1.34 0.59 0.74 0.50 1.53 0.91 1.77 0.91 0.23 0.00 1.09 -0.80 1.91 -1.78 0.98 -1.17 2.20 -2.11 3.54 -2.74 1.13 -0.53 2.33 -1.21 2.68 -1.51 0.35 -0.30 0.63 -0.39 0.63 -0.19 0.00 0.56 2.12 3.11 3.00 3.60 1.69 0.95 6.44 0.25 9.13 -1.33 1.07 -0.63 2.06 -0.81 5.29 -0.94 2.19 -0.09 4.58 -0.22 5.33 -0.30 1.00 -0.10 1.35 0.00 1.35 0.39 0.00 0.96 1.36 3.17 2.76 4.48 0.76 0.71 2.59 2.21 4.08 3.33 1.48 1.12 3.39 2.56 4.23 3.20 2.95 2.24 6.40 5.88 8.97 9.44 3.48 4.82 8.67 9.94 11.64 11.49 1.27 0.66 2.56 1.18 2.85 1.14 0.48 -0.05 0.54 -12.28 0.52 -107.70 -0.02 -93.68 -0.08 -107.68 -0.54 -107.97 -0.29 -0.18 -1.74 -0.23 -3.24 -0.11 -3.39 0.28 -5.02 -0.37 -5.02 -1.98 0.00 -0.56 -0.28 -1.26 -0.63 -1.57 -0.73 -0.65 -3.27 -1.55 -5.32 -1.88 -0.79 -0.13 -2.16 -0.39 -3.05 -0.59 -1.27 -0.28 -1.92 -0.23 -2.93 0.19 -1.92 0.80 -4.64 -0.06 -6.45 -2.04l-1.33 -1.46 -1.38 0.55c-0.76 0.30 -3.18 0.67 -5.38 0.81 -4.24 0.27 -5.65 -0.05 -8.33 -1.90 -0.54 -0.37 -2.11 -1.09 -3.49 -1.59 -1.38 -0.51 -3.38 -1.50 -4.43 -2.21 -1.05 -0.71 -2.69 -1.52 -3.64 -1.81 -0.95 -0.28 -2.35 -0.90 -3.12 -1.39 -2.30 -1.44 -8.12 -3.94 -9.66 -4.14 -2.03 -0.26 -4.08 -1.37 -5.76 -3.11 -1.87 -1.93 -3.15 -2.52 -8.71 -3.95 -2.52 -0.65 -5.58 -1.69 -6.80 -2.31 -1.22 -0.62 -3.36 -1.38 -4.75 -1.70 -2.13 -0.48 -2.93 -0.90 -4.96 -2.57 -2.08 -1.70 -2.97 -2.37 -4.20 -2.42zm-77.94 4.17c-2.63 0.01 -2.64 0.64 -1.61 2.15 0.78 1.15 1.08 1.31 2.95 1.51 6.49 0.70 8.26 1.14 13.63 3.39 1.41 0.59 3.75 1.36 5.21 1.70 1.46 0.35 3.06 0.85 3.56 1.11 0.55 0.29 1.32 0.39 1.98 0.25 0.59 -0.13 1.56 -0.20 2.16 -0.16 0.59 0.04 3.05 0.07 5.46 0.07 3.78 0.00 4.59 -0.10 5.91 -0.78 0.84 -0.43 2.47 -0.86 3.62 -0.97 1.85 -0.17 2.09 -0.28 2.09 -0.97 0.00 -0.43 -0.46 -1.22 -1.02 -1.76 -0.91 -0.87 -1.42 -1.01 -4.76 -1.31 -2.06 -0.19 -5.20 -0.35 -6.98 -0.36 -2.67 -0.02 -3.77 -0.21 -6.29 -1.11 -2.59 -0.93 -3.88 -1.15 -8.45 -1.44 -2.97 -0.19 -7.26 -0.53 -9.53 -0.75 -3.82 -0.38 -6.35 -0.59 -7.93 -0.59z",
    },
    path34: {
        name: "Papua Barat",
        capital: "Samarinada",
        area: '127 267,52',
        population: "3 575 449 человек (2017 г.)",
        raiting: "7 место (из 34 провинций Индонезии в 2018 году)",
        resources: "Нефть и газ",
        economics: "Нефтегазовая отрасль",
        logo: "img/logo1.png",
        path:
            "m1196.25 202.37c-0.53 0.00 -0.98 0.10 -1.64 0.28 -2.11 0.55 -8.37 1.50 -12.46 1.89 -3.26 0.31 -3.89 0.72 -3.89 2.56 0.00 0.87 -0.19 1.43 -0.54 1.56 -0.76 0.29 -0.68 0.73 0.39 2.00 0.88 1.05 1.07 1.11 3.56 1.11 2.56 0.00 2.66 0.03 3.74 1.27 0.61 0.70 1.12 1.59 1.12 1.98 0.00 1.01 1.02 0.87 1.51 -0.20 0.79 -1.73 1.88 -1.54 3.99 0.69 1.72 1.82 2.05 2.02 3.40 2.02 1.77 0.00 3.97 -1.18 4.43 -2.38 0.29 -0.75 0.42 -0.80 1.43 -0.44 0.91 0.32 1.40 0.26 2.60 -0.28 1.72 -0.77 2.93 -0.70 4.28 0.26 1.43 1.02 2.25 0.85 3.29 -0.67 0.83 -1.23 0.90 -1.58 0.72 -3.92 -0.17 -2.28 -0.29 -2.62 -1.07 -2.97 -0.48 -0.22 -1.07 -0.40 -1.30 -0.41 -0.24 -0.01 -1.07 -0.49 -1.84 -1.08 -0.78 -0.59 -1.75 -1.07 -2.16 -1.07 -0.41 -0.00 -2.68 -0.54 -5.04 -1.21 -2.55 -0.71 -3.63 -1.00 -4.50 -1.00zm54.05 11.10c-1.75 -0.05 -2.80 0.10 -4.61 0.55 -3.87 0.96 -7.33 2.75 -8.39 4.35 -0.52 0.79 -1.24 1.35 -1.91 1.50 -0.62 0.14 -2.25 1.34 -3.88 2.86 -2.79 2.61 -3.14 2.79 -6.50 3.25 -0.89 0.12 -2.46 0.47 -3.49 0.78 -1.48 0.44 -2.11 0.48 -3.04 0.15 -1.00 -0.35 -1.59 -0.27 -3.99 0.53 -1.55 0.52 -3.29 1.33 -3.87 1.82 -1.04 0.87 -1.05 0.91 -0.84 3.83 0.19 2.76 0.13 3.13 -0.96 5.73 -1.13 2.68 -1.25 2.82 -3.25 3.82l-2.08 1.04 0.18 -1.30c0.10 -0.72 0.33 -1.77 0.51 -2.35 0.85 -2.69 0.13 -7.22 -1.21 -7.58 -0.44 -0.12 -1.63 -0.48 -2.64 -0.80 -1.77 -0.56 -1.94 -0.56 -4.50 0.22 -5.04 1.54 -5.18 1.61 -5.11 2.57 0.22 3.05 0.78 5.45 1.44 6.18 0.41 0.45 1.19 1.54 1.73 2.43 1.74 2.85 2.64 3.60 4.36 3.60 0.84 0.00 1.93 -0.15 2.41 -0.34l0.89 -0.34 -0.19 2.09c-0.22 2.48 -0.03 2.67 2.78 2.77 1.11 0.04 2.72 0.40 3.67 0.83 1.57 0.71 1.79 0.73 2.97 0.23 0.70 -0.29 1.46 -0.94 1.69 -1.45 0.23 -0.50 0.63 -0.92 0.90 -0.92 0.52 0.00 1.51 0.93 2.13 2.00 0.36 0.62 0.51 0.64 1.88 0.19 1.31 -0.43 1.68 -0.42 3.21 0.15 0.95 0.35 2.49 1.12 3.43 1.71 1.19 0.75 1.97 1.01 2.57 0.86 0.60 -0.15 0.93 -0.04 1.08 0.36 0.22 0.58 0.99 0.57 3.09 -0.07 0.87 -0.26 0.88 -0.25 0.27 0.44 -0.77 0.88 -0.78 1.29 -0.06 2.69 0.51 0.99 0.69 1.07 1.78 0.87l1.22 -0.23 -0.91 2.00 -0.91 1.99 0.80 2.40c0.77 2.32 1.62 3.54 2.99 4.31 0.36 0.20 0.76 0.91 0.90 1.58 0.21 1.01 0.62 1.43 2.49 2.51 1.24 0.71 2.86 1.89 3.60 2.62 1.65 1.61 2.79 1.69 5.79 0.43 1.16 -0.49 2.74 -0.99 3.51 -1.11 1.31 -0.21 1.44 -0.14 2.28 1.15 1.19 1.82 2.93 2.29 4.86 1.30 1.27 -0.65 1.51 -0.66 4.22 -0.16 2.58 0.48 2.99 0.47 4.07 -0.04 1.67 -0.80 6.82 -2.04 8.38 -2.02 0.71 0.01 2.22 0.23 3.36 0.50 1.80 0.43 2.33 0.42 4.23 -0.09 1.72 -0.46 2.40 -0.50 3.25 -0.17 0.96 0.36 1.41 0.26 3.86 -0.87 1.53 -0.70 3.21 -1.58 3.73 -1.95 0.53 -0.37 1.20 -0.67 1.51 -0.67 1.14 0.00 0.94 0.76 -0.65 2.46 -2.03 2.17 -2.12 2.93 -0.35 2.93 0.71 0.00 1.62 -0.18 2.03 -0.40 0.69 -0.37 0.73 -0.33 0.51 0.63 -0.71 3.13 -0.70 3.28 0.11 3.54 0.62 0.20 0.70 0.35 0.36 0.76 -0.55 0.66 -1.57 0.65 -2.13 -0.03 -0.52 -0.62 -2.94 -0.72 -3.98 -0.17 -0.95 0.51 -0.87 1.38 0.24 2.54 1.36 1.42 0.95 2.50 -0.86 2.24 -0.73 -0.10 -2.01 -0.43 -2.83 -0.73 -1.38 -0.50 -1.59 -0.49 -2.65 0.12 -1.14 0.66 -1.15 0.66 -1.69 -0.14 -0.58 -0.86 -2.72 -1.16 -3.16 -0.44 -0.13 0.21 -0.58 -0.15 -1.02 -0.80 -1.30 -1.93 -3.64 -3.36 -5.45 -3.32 -3.62 0.08 -6.63 2.09 -9.77 6.51 -2.64 3.73 -5.05 5.87 -6.60 5.87 -0.57 0.00 -1.69 -0.54 -2.66 -1.29 -2.40 -1.84 -3.60 -2.11 -5.24 -1.19l-1.31 0.74 -1.66 -0.88c-0.91 -0.48 -2.58 -1.00 -3.71 -1.14 -1.92 -0.24 -2.15 -0.18 -3.61 0.86 -0.97 0.70 -2.41 1.29 -3.83 1.57 -2.07 0.42 -2.28 0.54 -2.38 1.44 -0.06 0.54 0.15 1.80 0.48 2.79 0.45 1.36 0.94 2.03 1.98 2.72 1.29 0.85 1.51 0.89 3.22 0.52 3.89 -0.83 4.92 -0.61 8.39 1.80 4.32 3.00 6.57 5.34 6.85 7.12 0.12 0.77 0.52 1.76 0.88 2.20 0.61 0.75 0.75 0.77 1.95 0.34 1.83 -0.66 2.98 0.11 3.25 2.19 0.14 1.08 0.57 1.88 1.48 2.82 1.42 1.46 1.94 3.15 1.32 4.31 -0.34 0.63 -0.74 0.76 -2.31 0.76 -1.04 0.00 -2.20 0.22 -2.58 0.50 -0.66 0.48 -0.63 0.62 0.66 4.41 0.73 2.15 1.33 4.40 1.33 5.01 0.00 0.83 0.54 1.73 2.22 3.69 2.34 2.72 2.72 2.90 4.97 2.20 0.69 -0.21 2.68 -0.43 4.43 -0.49l3.18 -0.10 2.51 -2.48c1.38 -1.36 3.02 -3.11 3.64 -3.88l1.12 -1.40 -0.74 -1.30c-1.00 -1.75 -0.68 -2.49 2.47 -5.67 2.42 -2.45 2.53 -2.64 2.31 -3.85 -0.14 -0.72 -0.63 -1.58 -1.13 -1.97 -0.49 -0.38 -0.89 -0.87 -0.89 -1.09 0.00 -0.49 0.07 -0.49 1.26 -0.04 0.83 0.32 1.07 0.23 1.90 -0.72 0.52 -0.59 1.09 -1.08 1.26 -1.08 0.33 0.00 0.07 1.65 -0.56 3.48 -0.35 1.01 -0.26 1.41 0.80 3.42 0.66 1.25 1.42 2.54 1.70 2.86 0.77 0.89 2.62 1.15 3.37 0.47 0.57 -0.52 0.69 -0.47 1.44 0.63 0.45 0.65 1.55 1.96 2.45 2.90 1.40 1.46 1.84 1.71 3.02 1.71 0.76 0.00 1.87 -0.26 2.48 -0.57 0.60 -0.31 1.18 -0.48 1.29 -0.37 0.11 0.11 0.28 1.02 0.37 2.01 0.14 1.50 0.36 1.95 1.24 2.57 0.59 0.42 1.75 0.84 2.59 0.93 1.33 0.15 1.63 0.05 2.27 -0.77 1.04 -1.32 2.00 -1.18 3.41 0.52 0.97 1.16 1.52 1.50 2.72 1.66 1.38 0.19 1.59 0.10 2.66 -1.11 0.64 -0.72 1.27 -1.30 1.40 -1.30 0.07 0.00 0.04 0.42 0.09 0.57l0.76 -0.87 7.03 0.21c0.00 0.00 -0.62 -0.57 -1.54 -1.59 -0.91 -1.01 -2.12 -2.47 -3.30 -4.26 -1.18 -1.78 -2.32 -3.89 -3.10 -6.20 -0.39 -1.15 -0.70 -2.36 -0.87 -3.60 -0.17 -1.24 -0.22 -2.51 -0.09 -3.81 0.51 -5.08 1.38 -10.23 2.34 -14.87 -0.08 -0.30 -0.16 -0.45 -0.26 -0.91 -0.25 -1.24 -0.57 -4.28 -0.72 -6.75 -0.15 -2.47 -0.39 -4.79 -0.54 -5.14 -0.33 -0.79 -2.01 -1.70 -3.14 -1.70 -0.46 0.00 -1.38 0.49 -2.04 1.10 -1.15 1.05 -1.19 1.18 -1.01 3.15 0.10 1.13 0.37 3.17 0.59 4.53 0.43 2.67 0.40 2.86 -0.39 2.55 -0.66 -0.25 -1.43 -1.75 -2.86 -5.57 -1.18 -3.14 -3.11 -6.20 -4.32 -6.85 -1.05 -0.56 -1.76 -2.27 -2.35 -5.65 -0.30 -1.71 -0.71 -3.42 -0.92 -3.81 -0.27 -0.51 -0.25 -1.24 0.07 -2.58 0.38 -1.58 0.36 -2.29 -0.12 -4.53 -0.90 -4.15 -1.10 -6.92 -0.59 -7.90 0.25 -0.47 0.97 -1.51 1.60 -2.30 1.28 -1.60 1.99 -3.35 1.99 -4.92 0.00 -0.57 0.34 -1.70 0.74 -2.50 0.41 -0.80 0.66 -1.67 0.56 -1.94 -0.10 -0.26 -1.22 -1.91 -2.48 -3.65 -1.26 -1.75 -2.92 -4.34 -3.68 -5.76 -1.23 -2.28 -1.34 -2.70 -0.97 -3.51 0.23 -0.51 0.99 -1.19 1.68 -1.52 0.70 -0.33 1.26 -0.79 1.26 -1.03 0.00 -0.23 -1.20 -1.34 -2.67 -2.47l-2.67 -2.04 -2.63 0.01c-1.45 0.01 -3.04 0.03 -3.54 0.06 -3.33 0.18 -11.90 -0.12 -12.90 -0.44 -0.67 -0.22 -2.04 -1.15 -3.06 -2.07 -2.62 -2.37 -3.70 -3.08 -6.26 -4.12 -1.24 -0.51 -2.88 -1.41 -3.65 -2.02 -1.06 -0.84 -1.75 -1.10 -2.95 -1.10 -0.91 -0.00 -2.38 -0.38 -3.52 -0.91 -2.62 -1.22 -4.53 -1.63 -9.02 -1.95 -0.80 -0.06 -1.46 -0.09 -2.04 -0.11zm-60.50 2.39c-0.11 -0.01 -0.21 0.00 -0.33 0.05 -0.34 0.13 -1.39 0.37 -2.33 0.52 -0.94 0.15 -1.81 0.38 -1.93 0.49 -0.12 0.12 -0.11 0.80 0.03 1.52 0.19 1.01 0.50 1.41 1.39 1.80 1.61 0.70 2.06 0.65 3.58 -0.38 1.55 -1.05 1.61 -1.35 0.61 -2.99 -0.40 -0.66 -0.70 -0.97 -1.02 -1.01zm7.06 11.47c-0.62 -0.01 -1.13 0.17 -1.83 0.59 -0.71 0.44 -1.83 0.76 -2.67 0.76 -0.80 0.00 -2.64 0.24 -4.09 0.53 -1.46 0.29 -3.13 0.57 -3.73 0.63 -1.22 0.12 -1.59 1.14 -0.89 2.45 0.38 0.71 0.65 0.75 3.71 0.63 4.65 -0.18 9.20 -1.46 10.70 -3.01 1.37 -1.42 1.21 -2.18 -0.53 -2.51 -0.24 -0.04 -0.46 -0.07 -0.66 -0.07zm132.36 5.67c-0.37 0.00 -1.14 0.35 -1.73 0.79 -1.61 1.19 -1.47 2.74 0.42 4.80 0.82 0.89 1.67 1.61 1.89 1.61 0.86 -0.00 2.74 -1.45 2.74 -2.11 0.00 -1.66 -2.23 -5.08 -3.32 -5.08zm-163.26 6.76c-1.04 -0.01 -2.27 0.58 -3.16 1.67 -0.47 0.57 -0.45 0.69 0.16 1.14 1.10 0.81 2.58 0.60 3.86 -0.54 0.97 -0.86 1.09 -1.13 0.71 -1.58 -0.38 -0.46 -0.94 -0.68 -1.57 -0.69zm13.80 18.11c-0.24 0.00 -0.52 0.03 -0.88 0.08 -0.85 0.12 -2.99 0.37 -4.77 0.55 -3.58 0.38 -4.44 0.63 -7.47 2.23 -1.14 0.60 -2.75 1.29 -3.58 1.52 -1.24 0.36 -1.55 0.63 -1.80 1.60 -0.18 0.69 -0.16 1.43 0.05 1.82 0.55 1.04 4.30 2.83 6.86 3.29 1.29 0.23 3.22 0.70 4.29 1.05v0.00 0.00c2.29 0.74 4.13 0.53 5.64 -0.65 0.55 -0.44 1.42 -0.77 1.92 -0.74 1.85 0.12 1.92 0.06 1.69 -1.37 -0.16 -1.01 -0.04 -1.63 0.49 -2.43 0.45 -0.68 0.71 -1.69 0.71 -2.76 0.00 -1.43 -0.19 -1.88 -1.25 -3.01 -0.87 -0.92 -1.20 -1.20 -1.91 -1.19zm128.20 1.74c-0.47 0.00 -1.19 0.40 -1.66 1.05 -0.82 1.16 -0.94 2.23 -0.36 3.32 0.21 0.39 0.55 0.66 0.75 0.59 0.36 -0.12 1.71 -3.64 1.73 -4.51 0.01 -0.32 -0.18 -0.46 -0.46 -0.46zm4.61 8.69c-0.44 0.02 -0.87 0.14 -1.07 0.31 -0.58 0.48 -1.05 2.34 -0.73 2.87 0.32 0.51 1.72 0.46 2.48 -0.10 0.37 -0.27 0.66 -0.99 0.70 -1.71 0.06 -1.11 -0.04 -1.25 -0.95 -1.36 -0.14 -0.02 -0.29 -0.02 -0.43 -0.01zm6.25 10.43c-0.42 0.03 -0.73 0.66 -0.50 1.37 0.14 0.43 0.43 0.71 0.66 0.64 0.58 -0.19 0.75 -1.33 0.27 -1.81 -0.15 -0.15 -0.30 -0.21 -0.44 -0.20zm-62.54 35.55c-0.92 0.00 -1.20 1.06 -0.49 1.85 0.64 0.71 2.29 0.92 2.29 0.30 0.00 -0.74 -1.18 -2.14 -1.80 -2.14zm22.15 22.89c-0.19 -0.00 -0.33 0.09 -0.50 0.26 -1.04 1.04 -0.24 2.28 2.37 3.62 2.40 1.23 3.46 1.48 4.55 1.06 1.07 -0.41 0.57 -1.17 -1.34 -2.04 -1.05 -0.48 -2.62 -1.39 -3.48 -2.01 -0.86 -0.62 -1.28 -0.88 -1.59 -0.88z",
    }
};

jQuery.fn.vectorMap("addMap", "indonesia_id", {
    width: 1600,
    height: 600,
    paths: currentPaths,
    
});


$('.map__modal.page-map__mob-item button').click(function() {
    $('.map__modal.page-map__mob-item').css('display', 'none');
})

// this.fitie=function(t){function e(){c.call(t,g+m,e);var a={boxSizing:"content-box",display:"inline-block",overflow:"hidden"};"backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight height left opacity margin position right top visibility width".replace(/\w+/g,function(t){a[t]=l[t]}),d.border=d.margin=d.padding=0,d.display="block",d.height=d.width="auto",d.opacity=1;var h=t.videoWidth||t.width,s=t.videoHeight||t.height,u=h/s,v=document.createElement("object-fit");v.appendChild(t.parentNode.replaceChild(v,t));for(var p in a)v.runtimeStyle[p]=a[p];var b;"fill"===i?f?(d.width=o,d.height=n):(d["-ms-transform-origin"]="0% 0%",d["-ms-transform"]="scale("+o/h+","+n/s+")"):(r>u?"contain"===i:"cover"===i)?(b=n*u,d.width=Math.round(b)+"px",d.height=n+"px",d.marginLeft=Math.round((o-b)/2)+"px"):(b=o/u,d.width=o+"px",d.height=Math.round(b)+"px",d.marginTop=Math.round((n-b)/2)+"px")}var i=t.currentStyle["object-fit"];if(i&&/^(contain|cover|fill)$/.test(i)){var o=t.clientWidth,n=t.clientHeight,r=o/n,a=t.nodeName.toLowerCase(),d=t.runtimeStyle,l=t.currentStyle,h=t.addEventListener||t.attachEvent,c=t.removeEventListener||t.detachEvent,g=t.addEventListener?"":"on",f="img"===a,m=f?"load":"loadedmetadata";h.call(t,g+m,e),t.complete&&e()}},this.fitie.init=function(){if(document.body)for(var t=document.querySelectorAll("img,video"),e=-1;t[++e];)fitie(t[e]);else setTimeout(fitie.init)},/MSIE|Trident/.test(navigator.userAgent)&&this.fitie.init();
//# sourceMappingURL=fitie.js.map




function position(e){
    var x = 0;
    var y = 0;
   
    if (!e) {
      var e = window.event;
    }
   
    if (e.pageX || e.pageY){
      x = e.pageX;
      y = e.pageY;
    } else if (e.clientX || e.clientY){
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
   
   //return {x: x}
    return {x: x, y: y}
  } 


$('.js-map-region').mousemove(function(e) {
    var regionId = $(this).attr('id');
    $("[data-name='"+regionId + "']").css('display', 'block');
    //$('.econom-popup').css('display', 'block');
    var coordsClick = position(e);
    //Координаты карты
    var coordsMap = $("#js-map").offset();
    //Учтем высоту модалки
    var modalRect = document.querySelector(".econom-popup").getBoundingClientRect();
    //Текущее разрешение экрана
    // var windowWidth = window.screen.availWidth;
    var windowWidth = $(window).width();

    var modalRectLeft = 0;
    var modalRectTop = 0;

    modalRectLeft = coordsClick.x - coordsMap.left + modalRect.width - 45;
    modalRectTop = coordsClick.y - coordsMap.top + 30;
   
    //$(".econom-popup").css('position', 'fixed');
    
    // if (coordsClick.x - coordsMap.left < modalRect.width / 2) {
    //     modalRectLeft = modalRect.width / 2;
    // } else {
    //     if (coordsClick.x - coordsMap.left + modalRect.width / 2 > windowWidth) {
    //         modalRectLeft = windowWidth - modalRect.width / 2 - 20;
    //     } else {
    //         console.log('1');
    //         modalRectLeft = coordsClick.x;
    //         console.log(modalRectLeft);
    //     }
    // }
    $(".econom-popup").css('left', modalRectLeft);
    $(".econom-popup").css('top', modalRectTop);
});

$('.js-map-region').mouseout(function(e) {
    $('.econom-popup').css('display', 'none');
});

// Закрывает cookies
$('.cookies-form').submit(function( event ) {
  event.preventDefault();
  $('.cookies').css('display', 'none');
});

function cookTop() {
    var heightHeader = $('.page-header').outerHeight() + 'px';
    $('.cookies').css('top', heightHeader);
}

cookTop();

// слайдер на главной с фото
// var swiper = new Swiper('.swiper-container', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 23,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows : true,
//   },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


if(window.innerWidth > 1199) {

$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }
  });
});
};
    

$('.news-content__link').click(function(e) {
    e.preventDefault();
    $('.news-content__first-item.news-content__first-item-more').removeClass('news-content__first-item-more');
    $('.news-content__link').css('display', 'none');
})

$('.articles-main .news-content__link').click(function(e) {
    e.preventDefault();
    $('.articles-container__small-item.articles-container__small-item-more').css('display', 'block');
    $('.articles-main .news-content__link').css('display', 'none');
})


 $('.news-container__list > li').click(function(evt) {
        evt.preventDefault();
        $('.news-container__list > li').removeClass('active');
        $(this).addClass('active');
        if($(this).attr('data-value') == 'all') {
            $('.news-content__first-item').css('display', 'flex');
            $(".news-content__first-item.js-article").css('display', 'none');
            
            $('.news-content__link').css('display', 'flex');
            $('.news-content__list').css('display', 'flex');
            
        } else {
            $('.news-content__first-item').css('display', 'none');
            $("[data-name='"+ $(this).attr('data-value') + "']").css('display', 'flex');
            
            $('.news-content__link').css('display', 'none');
            $('.news-content__list').css('display', 'none');
        }
    });


 