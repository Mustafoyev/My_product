var Elbutton = document.querySelector('.site-header__burger');
var Elmenyu = document.querySelector('.navbar');

Elbutton.addEventListener('click', function () {
	Elmenyu.classList.toggle('navbar--open');
});

var Elbtn = document.querySelector('.site-header__darkbtn');
var Eldarker = document.querySelector('.darker');

Elbtn.addEventListener('click', function () {
	Eldarker.classList.toggle('dark');
});
