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
