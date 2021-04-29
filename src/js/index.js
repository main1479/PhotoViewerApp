const navTrigger = document.querySelectorAll('.menu__trigger');
const menu = document.querySelector('.nav__right')

navTrigger.forEach(btn => {
   btn.addEventListener('click', ()=> {
      menu.classList.toggle('active')
   })
})


// video 

const videos = document.querySelectorAll('.video');

videos.forEach(video => {
   video.addEventListener('click', (e) => {
      video.play();
      setTimeout(()=> video.controls = 'true', 1000)
   })
})