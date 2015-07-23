$(function() {
	
	/* Powers main scrolling pages */
	$('#slider > ul') 
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'slow', 
		timeout: 0, 
		next:   '#next, .nextButton',
		prev:   '#prev',
		nowrap: true
	});
	
	$("#slider > ul").touchwipe({
		 wipeLeft: function() {
				$('#slider > ul').cycle('next');
			},
		 wipeRight: function() {
				$('#slider > ul').cycle('prev');
			},
		 min_move_x: 20,
		 min_move_y: 20,
		 preventDefaultEvents: false
	});
	
	$('ul#wordListSlider')
	.cycle({ 
		fx:     'scrollHorz', 
		speed:  'fast', 
		timeout: 0, 
		next:   '#next',
		prev:   '#prev',
		nowrap: true
	});
			
	$('.codePickTrigger').click(function() { 
		$('#overlay').fadeToggle();
		$('#codePick').fadeToggle();
		// var remember = $('.theCode h1.purple').html();
		// $('.theCode h1.purple').text("Y Côd Ymarfer");
		return false;
	});
	
	// Changes code names in the header bar
	$('.welshVersion #codePick a#codeOne').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>1</span>");
		$('.welshVersion #slider > ul').cycle(0);
		return false;
	});
	
	$('.welshVersion #codePick a#codeTwo').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>2</span>");
		$('.welshVersion #slider > ul').cycle(11);
		return false;
	});
	
	$('.welshVersion #codePick a#codeThree').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>3</span>");
		$('.welshVersion #slider > ul').cycle(20);
		return false;
	});

	$('.welshVersion #codePick a#codeFour').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>4</span>");
		$('.welshVersion #slider > ul').cycle(32);
		return false;
	});

	$('.welshVersion #codePick a#codeFive').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>5</span>");
		$('.welshVersion #slider > ul').cycle(38);
		return false;
	});

	$('.welshVersion #codePick a#codeSix').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>6</span>");
		$('.welshVersion #slider > ul').cycle(46);
		return false;
	});

	$('.welshVersion #codePick a#codeSeven').click(function() { 
		$('.welshVersion #codePick').fadeOut(); 
		$('.welshVersion #overlay').fadeOut(); 
		$('.welshVersion .theCode h1.purple').html("<strong>Adran: </strong>Côd Rhif <span>7</span>");
		$('.welshVersion #slider > ul').cycle(54);
		return false;
	});
	
	/* English */
	$('.englishVersion #codePick a#codeOne').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>1</span>");
		$('.englishVersion #slider > ul').cycle(0);
		return false;
	});
	
	$('.englishVersion #codePick a#codeTwo').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>2</span>");
		$('.englishVersion #slider > ul').cycle(11);
		return false;
	});
	
	$('.englishVersion #codePick a#codeThree').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>3</span>");
		$('.englishVersion #slider > ul').cycle(20);
		return false;
	});

	$('.englishVersion #codePick a#codeFour').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>4</span>");
		$('.englishVersion #slider > ul').cycle(32);
		return false;
	});

	$('.englishVersion #codePick a#codeFive').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>5</span>");
		$('.englishVersion #slider > ul').cycle(38);
		return false;
	});

	$('.englishVersion #codePick a#codeSix').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>6</span>");
		$('.englishVersion #slider > ul').cycle(46);
		return false;
	});

	$('.englishVersion #codePick a#codeSeven').click(function() { 
		$('.englishVersion #codePick').fadeOut(); 
		$('.englishVersion #overlay').fadeOut(); 
		$('.englishVersion .theCode h1.purple').html("<strong>Section: </strong>Code Number <span>7</span>");
		$('.englishVersion #slider > ul').cycle(54);
		return false;
	});

	/* Tooltips on click */
	$('.tooltip-code_of_practice').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-code_of_practice').fadeToggle();
	});
	
	$('a.tooltip-social_care_worker').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-social_care_worker').fadeToggle();
	});
	
	$('a.tooltip-employer').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-employer').fadeToggle();
	});
	
	$('.tooltip-service_user').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-service_user').fadeToggle();
	});
	
	$('a.tooltip-care_councils').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-care_councils').fadeToggle();
	});
	
	$('a.tooltip-standard').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-standard').fadeToggle();
	});
	
	$('.tooltip-policies').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-policies').fadeToggle();
	});
	
	$('a.tooltip-risk_assessment').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-risk_assessment').fadeToggle();
	});
	
	$('a.tooltip-dignity').click(function() {
		$('#overlay').fadeToggle();
		$('#tooltip-dignity').fadeToggle();
	});

	/* Overlay */
	$('#overlay, .close').click(function() {
		$('#overlay').fadeOut();
		$('.tooltip').fadeOut();
		$('#codePick').fadeOut();
		$('.theCode h1.purple').html(remember);
	});
	
	/* Hides and shows arrows for scrolling pages */
	setInterval(function(){
		if ($('.what-is #slider ul li.first').css('z-index') === '14') {
			$('.slideNavigation.intro #prev').fadeOut();
			$('.slideNavigation.intro #backHome').hide();
		}
		else if ($('.what-is #slider ul li.last').css('z-index') === '14') {
			$('.slideNavigation.intro #next').hide();
			$('.slideNavigation.intro #backHome').fadeIn();
		}
		else if ($('.introduction #slider ul li.first').css('z-index') === '16') {
			$('.slideNavigation.intro #next').hide();
			$('.slideNavigation.intro #backHome').fadeIn();
		}
		else if ($('.introduction #slider ul li.last').css('z-index') === '15') {
			$('.slideNavigation.intro #next').hide();
			$('.slideNavigation.intro #backHome').fadeIn();
		}
		else if ($('#slider.questions ul li.first').css('z-index') === '5') {
			$('.slideNavigation.intro #prev').hide();
			$('.slideNavigation.intro #backHome').fadeIn().css({
				'float': 'left',
				'margin-left': '20px'
			});
		}
		else if ($('#slider.questions ul li.last').css('z-index') === '5') {
			$('.slideNavigation.intro #next').hide();
			$('.slideNavigation.intro #backHome').fadeIn().css({
				'float': 'right',
				'margin-left': '0'
			});
		}
		else {
			$('.slideNavigation.intro #next, .slideNavigation.intro #prev').show();
			$('.slideNavigation.intro #backHome').hide();
		}
	},100);

	setInterval(function(){
		if ($('#wordListSlider li.first').css('z-index') === '4') {
			$('.slideNavigation.wordList #prev').fadeOut();
		}
		else if ($('#wordListSlider li.last').css('z-index') === '4') {
			$('.slideNavigation.wordList #next').fadeOut();
		}
		else {
			$('.slideNavigation.wordList #next, .slideNavigation.wordList #prev').show();
		}
	},100);
	
	$('#next').click(function(){
		if ($('.what-is #slider ul li.who-section').css('z-index') === '14') {
			$('.welshVersion.what-is h1.page-title').text('Pwy sydd angen gwybod am y Côd Ymarfer?');
			$('.englishVersion.what-is h1.page-title').text('Who needs to know about the Code of Practice?');
		}
	});
	
	$('#prev').click(function(){
		if ($('.what-is #slider ul li.who-section').prev('li').css('z-index') === '14') {
			$('.welshVersion.what-is h1.page-title').text('Beth yw’r Côd Ymarfer Proffesiynol?');
			$('.englishVersion.what-is h1.page-title').text('What is the Code of Professional Practice?');
		}
	});
		
});