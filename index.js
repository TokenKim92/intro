import './lib/typefill.min.js';
import './lib/typeparticle.min.js';

const title = new TypeFill('title', 6000);
const implementer = new TypeParticle('implementer', 5);
title.setHandleStop(implementer.start);

const playButton = document.querySelector('#play-btn');
const backgroundAudio = new Audio('./resource/backgroundMusic.mp3');
const playIcon = playButton.querySelector('.fa-solid');
let played = false;

playButton.addEventListener('click', () =>
  played ? pauseBackgroundAudio() : playBackgroundAudio()
);

backgroundAudio.addEventListener(
  'ended',
  () => played && pauseBackgroundAudio()
);

title.start();

const playBackgroundAudio = () => {
  played = true;

  playIcon.classList.add('fa-volume-high');
  playIcon.classList.remove('fa-volume-xmark');
  backgroundAudio.play();
};

const pauseBackgroundAudio = () => {
  played = false;

  playIcon.classList.add('fa-volume-xmark');
  playIcon.classList.remove('fa-volume-high');
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
};
