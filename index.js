/*navbar hamburger*/
const hamMenu = document.querySelector('.ham-menu');
const offscreenMenu = document.querySelector('.offscreen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
});
/*ende navbar hamburger */
