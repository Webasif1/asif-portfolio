'use strict';

const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSigh = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3]

videoList.forEach( (video) =>{
  video.addEventListener('mouseover', () =>{
    video.play();
    hoverSigh.classList.add('active');
  })
  video.addEventListener('mouseout', () =>{
    video.pause();
    hoverSigh.classList.remove('active');
  })
})


// sidebar menu //
const sideBar = document.querySelector('.sidebar ');
const menu = document.querySelector('.menu-icon ');
const close = document.querySelector('.close-icon ');

menu.addEventListener('click', () => {
  sideBar.classList.remove('close-sidebar');
  sideBar.classList.add('open-sidebar')
})

close.addEventListener('click', () => {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
})


// ***Scroll

const section1 = document.querySelector('.info-section');
const btnScrollTo = document.querySelector('.scroll-down');


btnScrollTo.addEventListener('click', (e)=> {

  // const s1coord = section1.getBoundingClientRect();
  // console.log(s1coord);
  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //**oneLine*/
  section1.scrollIntoView({behavior: "smooth"});
});

//*** Sticky Navigation */
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const headerHeight = header.getBoundingClientRect().height;

const stickyNav =function(entries) {
  const [entry] = entries;


  if(entry.intersectionRatio === 0)
    header.classList.add("sticky__nav");
  else
  header.classList.remove("sticky__nav");
}

const headerObserver = new IntersectionObserver(
  stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`
  });
  headerObserver.observe(hero);
