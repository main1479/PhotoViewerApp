const navTrigger = document.querySelectorAll('.menu__trigger');
const menu = document.querySelector('.nav__right');

navTrigger.forEach((btn) => {
	btn.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});

// video

const videos = document.querySelectorAll('.video');

videos.forEach((video) => {
	video.addEventListener('click', (e) => {
		video.play();
		setTimeout(() => (video.controls = 'true'), 1000);
	});
});

// slideshow

const slideshow = document.querySelectorAll('.btn__slideshow');

slideshow.forEach((btn) => {
	btn.addEventListener('click', function () {
		document.body.classList.toggle('slideshow__full');
      swiper2.update()
	});
});
