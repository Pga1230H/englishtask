const button = document.querySelector('.blue-button');
const flowers = document.querySelectorAll('.flower');
const text = document.querySelector('.hidden-text');
const bgImage = document.querySelector('.background-image');



let current = 0;
let clicked = false;

button.addEventListener('click', () => {
  // 1) Fade flower
  flowers[current].classList.remove('active');
  current = (current + 1) % flowers.length;
  flowers[current].classList.add('active');

  // 2) Only trigger button move + text on first click
  if (!clicked) {
    clicked = true;

    // Move button down
    button.classList.add('moved');

    // Show text
    text.style.display = 'block';  // Make it block first
    setTimeout(() => {
      text.classList.add('show');
    }, 10);  // Tiny delay to trigger transition

    // Change button to link after short delay
    setTimeout(() => {
      button.textContent = 'Acept my invitation';
      button.onclick = () => window.location.href = 'https://your-event-link.com';
    }, 1000);
    bgImage.classList.add('show');
  }
});




document.querySelector('.blue-button').addEventListener('click', function() {

    document.querySelector('nav').style.backgroundColor = '#840013';

  
    document.querySelector('nav h1').style.color = 'white';
  });