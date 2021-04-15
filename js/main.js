$(function(){

	$('.carousel__inner').slick({
		arrows: false,
		dots: true,
		slidesToShow:3,
		responsive:[
			{
				breakpoint: 841,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});


});

const menuLinks = document.querySelectorAll('.button[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight%50;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}