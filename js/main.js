var Elbutton = document.querySelector('.site-header__burger');
var Elmenyu = document.querySelector('.navbar');

Elbutton.addEventListener('click', function () {
	Elmenyu.classList.toggle('navbar--open');
});
