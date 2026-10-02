(function ($) {
	"use strict";

	// Open each project's Markdown summary in a modal when its card is selected.
	var projectModal = document.getElementById('project-modal');
	var projectModalTitle = document.getElementById('project-modal-title');
	var projectModalCategory = document.getElementById('project-modal-category');
	var projectModalMarkdown = document.getElementById('project-modal-markdown');
	var lastProjectCard = null;

	function closeProjectModal() {
		projectModal.classList.remove('is-open');
		projectModal.setAttribute('aria-hidden', 'true');
		if (lastProjectCard) lastProjectCard.focus();
	}

	document.querySelectorAll('.portfolio-mf .work-box').forEach(function (card) {
		var title = card.querySelector('.w-title');
		var category = card.querySelector('.w-ctegory');
		var details = Array.from(card.querySelectorAll('.work-content > .row p'));
		var iconColumn = card.querySelector('.w-like');
		var cardLink = card.querySelector('.work-box > a');
		if (!title) return;
		if (iconColumn && iconColumn.parentElement) iconColumn.parentElement.remove();
		if (cardLink) {
			cardLink.removeAttribute('href');
			cardLink.removeAttribute('data-lightbox');
			cardLink.setAttribute('tabindex', '-1');
		}

		var descriptionColumn = card.querySelector('.work-content .col-sm-8');
		if (descriptionColumn) {
			descriptionColumn.classList.remove('col-sm-8');
			descriptionColumn.classList.add('col-sm-12');
		}

		card.setAttribute('role', 'button');
		card.setAttribute('tabindex', '0');
		card.setAttribute('aria-label', title.textContent.trim() + ' 프로젝트 상세 보기');

		function openProject(event) {
			event.preventDefault();
			event.stopPropagation();
			if (event.stopImmediatePropagation) event.stopImmediatePropagation();
			lastProjectCard = card;
			projectModalTitle.textContent = title.textContent.trim();
			projectModalCategory.textContent = category ? category.textContent.trim() : '';
			projectModalMarkdown.textContent = '# ' + title.textContent.trim() + '\n\n' +
				(category ? category.textContent.trim() + '\n\n' : '') +
				details.map(function (paragraph) {
					return '- ' + paragraph.textContent.trim();
				}).join('\n\n');
			projectModal.classList.add('is-open');
			projectModal.setAttribute('aria-hidden', 'false');
			projectModal.querySelector('.project-modal-close').focus();
		}

		card.addEventListener('click', openProject, true);
		card.addEventListener('keydown', function (event) {
			if (event.key === 'Enter' || event.key === ' ') openProject(event);
		});
	});

	projectModal.querySelectorAll('[data-close-project]').forEach(function (element) {
		element.addEventListener('click', closeProjectModal);
	});
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && projectModal.classList.contains('is-open')) closeProjectModal();
	});

	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
