alert ("TequioNetz Alert 1")
const zuhause = document.querySelector('.header .nav-bar .nav-list .zuhause');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

zuhause.addEventListener('click', () => {
	menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});

// Form

function validateForm(){
    var names = document.getElementById("form-names");
    var email = document.getElementById("form-email");
    var message = document.getElementById("form-message");
}