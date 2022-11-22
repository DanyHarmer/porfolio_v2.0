// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');



}
// about me script

document.addEventListener("DOMContentLoaded", function () {
  var layer = document.querySelector('.main');
      layer = document.querySelector('.contacts__photo');
document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';

      });
});



// portfolio script

const link = document.querySelectorAll('.js-navigation__link');
const linkText = document.querySelectorAll('.js-navigation__text');
const linkHoverReveal = document.querySelectorAll('.js-hover-reveal');
const linkImages = document.querySelectorAll('.js-hover-reveal__img');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    link[i].style.zIndex = 2;
    linkText[i].style.zIndex = 3;
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-50%, -${e.clientY / 3}px) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    console.log(linkHoverReveal[i])
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    link[i].style.zIndex = 0;
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(0)`;
    linkImages[i].style.transform = 'scale(0.9, 0.9)';
  });
}


// _promo animation

console.clear()

const button = document.querySelector( '.relief' );

class ReliefButton {
  constructor( element, options = {} ) {
    this.outer = element
    this.inner = element.children[0];
    
    // Options
    this.options = {
      power: options.power || 30,
      index: options.index || 5,
      perspective: options.perspective || '600px'
    };
    
    // Init
    this.create();
    this.mouseUpdate();
    
    this.animate();
  }
  
  create() {
    this.delta = { x: 0, y: 0 };
    this.padding = { x: 0, y: 0 };
    
    this.outer.client = this.outer.getBoundingClientRect();
    this.inner.client = this.inner.getBoundingClientRect();
    
    this.padding.x = ( this.outer.client.width - this.inner.client.width );
    this.padding.y = ( this.outer.client.height - this.inner.client.height );
    
    gsap.set( this.outer, {
      perspective: this.options.perspective,
    } );
  }
  
  mouseUpdate() {
    this.outer.addEventListener( 'mousemove', e => {
      this.delta.x = ( ( e.clientX - this.outer.client.left ) / this.outer.client.width ) - .5
      this.delta.y = ( ( e.clientY - this.outer.client.top ) / this.outer.client.height ) - .5
    } );
    
    this.outer.addEventListener( 'mouseleave', e => {
      gsap.to( this.inner, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, '--rex': '-200%', '--rey': '-200%', delay: 0.3, duration: 1 } );
    } );
  }
  
  animate() {
    this.outer.addEventListener( 'mousemove', e => {
      gsap.to( this.inner, {
        x: this.delta.x * this.padding.x,
        y: this.delta.y * this.padding.y,
        rotateX: `${- this.delta.y * this.options.power}deg`,
        rotateY: `${this.delta.x * this.options.power}deg`,
        '--rex': `${ ( this.delta.x + .25) * 200 }%`,
        '--rey': `${ ( this.delta.y + .25) * 200 }%`,
      } );
    } );
  }
}

new ReliefButton( button );


// CONTACTS SCRIPT


(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      // console.log(x);
      elem.style.backgroundPosition = x;
  }


 
  // scroll script
})();
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

