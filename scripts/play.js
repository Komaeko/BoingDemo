function init() {
  videoPlay();
}

function videoPlay() {
  var video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

window.onload = init;

/*
    __ __          __  ___                __ __          ___   ____  ___ ____ 
   / //_/____     /  |/  /____ _ ___     / //_/____     |__ \ / __ \<  /( __ )
  / ,<  / __ \   / /|_/ // __ `// _ \   / ,<  / __ \    __/ // / / // // __  |
 / /| |/ /_/ /  / /  / // /_/ //  __/  / /| |/ /_/ /   / __// /_/ // // /_/ / 
/_/ |_|\____/  /_/  /_/ \__,_/ \___/  /_/ |_|\____/   /____/\____//_/ \____/  

www.komaeko.net

*/