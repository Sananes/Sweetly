import {load} from '@shopify/theme-sections';
import '../sections/product';
import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  // Add animation class to all sections if js is available
  console.log("Dom content loading");
  $('body').addClass('animation');
});

document.addEventListener('DOMContentLoaded', () => {
  load('*');

  console.log("Dom content loaded");
  // Add hero delay for animation
  const hero = '.hero-section';
  const header = '.site-header';

  // Init controller
  const controller = new ScrollMagic.Controller();
  const homeSections = ['.features-section', '.menu-features-section', '.testimonials-section', '.featured-recipes-section'];
  let getstarted = $('.getstarted-section');
  let featuresSection = '.features-section';



  // Hero Scene
  let heroScene = new ScrollMagic.Scene({
    triggerElement: '.hero-section',
    triggerHook: 0.85,
    offset: 100,
    reverse: false,
  })
  .setClassToggle(hero, 'animate')
  .addTo(controller);

  // Header scene
  let headerScene = new ScrollMagic.Scene({
    duration: 0,
    triggerHook: 0.5,
    reverse: false,
    offset: 0
  })

  .setClassToggle(header, 'animate')
  .addTo(controller);


  // Scene for all section array
  homeSections.forEach(function(section, index) {
    let scene = new ScrollMagic.Scene({
      triggerElement: section,
      duration: 0,
      triggerHook: 0.5,
      reverse: false,
      offset: 0
    })
    // trigger animation by adding a css class
    .setClassToggle(section, 'animate')
    .addTo(controller);
  });

  // Build features  scene
    const featuresScene = new ScrollMagic.Scene({
      triggerElement: '.features-section',
      offset: 100,
      triggerHook: 0.85,
      reverse: false
    })
    .addTo(controller)
    .setClassToggle(featuresSection, 'animate');

    // setTimeout(function() {
    //   hero.addClass('animate');
    //   header.addClass('animate');
    // }, 1000);
});
