
document.addEventListener(
    'DOMContentLoaded',
    (() => {

// $(document).ready(function(){



	$(".nav a").smoothScroll({
		offset: -$("nav").outerHeight()
	});

	// popUp	
	$('a.btn-way11111111').click(function (){
		$('#exampleModal').arcticmodal();
	});
	// directoin-tabs
	$('a.btn-Weekdays').click(function (){
		$('#exampleModal-weekdays').arcticmodal();
	});
	// $('a.btn-weekends').click(function (){
	// 	$('#exampleModal-weekends').arcticmodal();
	// });
	// way
	$('a.btn-way').click(function (){
		$('#exampleModal-way').arcticmodal();
	});

	//prise-and-servise
	$('a.btn-group').click(function (){
		$('#exampleModal-group').arcticmodal();
	});
	$('a.btn-solo').click(function (){
		$('#exampleModal-solo').arcticmodal();
	});
	// $('a.btn-wedding').click(function (){
	// 	$('#exampleModal-wedding').arcticmodal();
	// });
	// $('a.btn-corp').click(function (){
	// 	$('#exampleModal-corp').arcticmodal();
	// });
	// $('a.btn-zal').click(function (){
	// 	$('#exampleModal-zal').arcticmodal();
	// });

	// dynamic_shadow
	$('#slow_nav  ul li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		}, 
		function () {
			$('ul', this).stop().slideUp(400);            
		}
	);
	$('.trainer-card1-hover').hover(function(){
		$('.trainer-card__shadow1').toggleClass('slide-up');
		$('.trainer-card__shadow1 p').toggleClass('card-text__visible');
	});
	$('.trainer-card2-hover').hover(function(){
		$('.trainer-card__shadow2').toggleClass('slide-up');
		$('.trainer-card__shadow2 p').toggleClass('card-text__visible');
	});
	$('.trainer-card3-hover').hover(function(){
		$('.trainer-card__shadow3').toggleClass('slide-up');
		$('.trainer-card__shadow3 p').toggleClass('card-text__visible');
	});
	// $('.trainer-card4-hover').hover(function(){
	// 	$('.trainer-card__shadow4').toggleClass('slide-up');
	// 	$('.trainer-card__shadow4 p').toggleClass('card-text__visible');
	// });
	// $('.trainer-card5-hover').hover(function(){
	// 	$('.trainer-card__shadow5').toggleClass('slide-up');
	// 	$('.trainer-card__shadow5 p').toggleClass('card-text__visible');
	// });
	$('.trainer-card6-hover').hover(function(){
		$('.trainer-card__shadow6').toggleClass('slide-up');
		$('.trainer-card__shadow6 p').toggleClass('card-text__visible');
	});
	// $('.trainer-card7-hover').hover(function(){
	// 	$('.trainer-card__shadow7').toggleClass('slide-up');
	// 	$('.trainer-card__shadow7 p').toggleClass('card-text__visible');
	// });



	// map
	ymaps.ready(init);
	var map,
		myPlacemark1,
		myPlacemark2;
		
	function init(){ 
		// Создание карты.    
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.84648356, 37.44183196],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 16
		});

		// Элементы управления 
		myMap.controls
			.remove('rulerControl')
			.remove('typeSelector')
			.remove('trafficControl')
			.remove('geolocationControl');

		// Поведение 
		myMap.behaviors.disable([
			// 'drag',
			'scrollZoom'
		]);


		// Pointer 

		// Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		),
		
		myPlacemark1 = new ymaps.Placemark([55.84410083, 37.44244562], {
			balloonContentHeader: '<img src="assets/img/footer/iconSova.png" alt="Sticky Nav Bar Logo" class="mapLogo"><span class="mapTitle">&nbspSova-dance</span>',
			balloonContentBody: 'Ждем вас!)',
			balloonContentFooter: '#',
			hintContent: 'Мы находимся здесь'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'assets/img/footer/yellowPointer.png',
			iconImageSize: [50, 55],
			iconImageOffset: [-20, -60],
			iconContentLayout: MyIconContentLayout

		}),
		myPlacemark2 = new ymaps.Placemark([55.84646213, 37.43952472], {
			balloonContentHeader: '<img src="assets/img/footer/iconBus.png" alt="Sticky Nav Bar Logo" class="mapLogo"><span class="mapTitle">Трамвай №6</span>',
			balloonContentBody: '"Нелидовская улица"',
			balloonContentFooter: 'Трамвайная остановка',
			hintContent: 'Трамвай №6'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'assets/img/footer/redPointer.png',
			iconImageSize: [50, 55],
			iconImageOffset: [-20, -55],
			iconContentLayout: MyIconContentLayout
		});

		myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
	}



// });
})()
);