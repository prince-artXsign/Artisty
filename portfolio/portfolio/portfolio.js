let intro = document.querySelector('.intro');
let logointro = document.querySelector('.logointro');
let logointroSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () =>{
    setTimeout(() => {
        logointroSpan.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('active');
          }, (index + 1) * 100);
        });

        setTimeout(() => {
          logointroSpan.forEach((span, index) => {
             setTimeout(() => {
                 span.classList.remove('active');
                 span.classList.add('fade');
             }, (span + 1) * 50);
         
          });
        }, 3000);

        setTimeout(() =>{
            intro.style.top = '-100vh';

        }, 3000);

    });
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
});

prev.addEventListener('click', function(){
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length-1]);
});

const scrollers = document.querySelectorAll('.scroller');
if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
  addAnimation();
}
function addAnimation(){
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

  });
}


const btns = document.querySelectorAll('.artbtn button');
const imgs= document.querySelectorAll('.artworks img');

for(let i=1; i  < btns.length; i++){
  btns[i].addEventListener('click', filterImg);
}
function setActiveBtn(e){
  btns.forEach(btn => {
    btn.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
}
function filterImg(e){
  setActiveBtn(e);
  imgs.forEach(img =>{
    img.classList.remove('img-shrink');
    img.classList.add('img-expand');
    const imgType = parseInt(img.dataset.img);
    const btnType = parseInt(e.target.dataset.btn);
    if(imgType !== btnType){
      img.classList.remove('img-expand');
      img.classList.add('img-shrink');
    }
  });
}
btns[0].addEventListener('click',(e) =>{
  setActiveBtn(e);
  imgs.forEach(img =>{
    img.classList.remove('img-shrink');
    img.classList.add('img-expanded');
  });
});

const cursor = document.querySelector('.cursor');
var timeout;
document.addEventListener("mousemove", (e) =>{

  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top =y + "px";
  cursor.style.left =x + "px";
  cursor.style.display="block";
});

document.addEventListener("mouseout", () =>{
  cursor.style.display="none";
});


