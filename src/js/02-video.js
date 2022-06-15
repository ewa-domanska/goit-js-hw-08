import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = Number(localStorage.getItem("videoplayer-current-time"))
player.setCurrentTime(currentTime)

const saveTime = function (currentTime) {
  localStorage.setItem("videoplayer-current-time", currentTime.seconds)
};

player.on('timeupdate', throttle(saveTime, 1000));
