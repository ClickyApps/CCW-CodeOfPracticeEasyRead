$(function() {

	var owl = $('#slider');

	owl.owlCarousel({
		autoPlay: false,
		slideSpeed: 400,
		singleItem: true,
		navigation : false,
		pagination: false,
		afterMove: moved,
	});

	$('.next').click(function(e) {
		e.preventDefault();
		owl.trigger('owl.next');
	});
	$('.prev').click(function(e) {
		e.preventDefault();
		owl.trigger('owl.prev');
	});

	function moved() {
		var owlData = owl.data('owlCarousel');
		if (owlData.currentItem + 1 === owlData.itemsAmount) {
			$('.next').hide();
			$('.back_home').show();
		} else {
			$('.next').show();
			$('.back_home').hide();
		}
		if (owlData.currentItem === 0) {
			$('.prev').hide();
		} else {
			$('.prev').show();
		}
	}

	$('.section_select').click(function(e) {
		e.preventDefault();
		$('.overlay').show();
		$('#section_chooser')
			.show()
			.attr('aria-hidden', 'false')
			.find('a')
				.eq(0)
				.focus();
	});

	$('#section_chooser .close, .overlay').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#section_chooser')
			.hide()
			.attr('aria-hidden', 'true');
			// Focus??
	});

	$('#section_chooser a.section_link').click(function(e) {
		e.preventDefault();
		$('.overlay').hide();
		$('#section_chooser').hide().attr('aria-hidden', 'true');
		var theSection = $(this).attr('href');
		switch(theSection) {
			case 'section_one':
				owl.trigger('owl.goTo', 0);
				break;
			case 'section_two':
				owl.trigger('owl.goTo', 11);
				break;
			case 'section_three':
				owl.trigger('owl.goTo', 20);
				break;
			case 'section_four':
				owl.trigger('owl.goTo', 32);
				break;
			case 'section_five':
				owl.trigger('owl.goTo', 38);
				break;
			case 'section_six':
				owl.trigger('owl.goTo', 46);
				break;
			case 'section_seven':
				owl.trigger('owl.goTo', 54);
				break;
			
		}
	});

});