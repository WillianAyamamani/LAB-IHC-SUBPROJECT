function show_clock(){

    let h =  document.getElementsByClassName('hr')[0];
    let m =  document.getElementsByClassName('mn')[0];
    let s =  document.getElementsByClassName('ss')[0];
  
    let date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    h.style.transform =  `rotate(${30 *hours + minutes/ 2}deg)`;
    m.style.transform = `rotate(${ 6 *minutes}deg)`;
    s.style.transform = `rotate(${6 *seconds}deg)`;
    
  }
  
//   setInterval(show_clock,100);
function change_background() {
    let date = new Date();
    let hours = date.getHours();
    let images = [
      'IMG/1.png',
      'IMG/2.png',
      'IMG/3.png',
      'IMG/4.png',
      'IMG/5.png'
    ];
    let index = hours % images.length;
    let background = `url(${images[index]})`;
    document.body.style.backgroundImage = background;
  }

  function play_music() {
    let audio_files = [
      '1.mp3',
      '2.mp3'
    ];
    let index = 0;
    return function() {
      let audio = new Audio(audio_files[index]);
      audio.play();
      index = (index + 1) % audio_files.length;
    }
  }
  
//funtion audio
var audio_files = [
  '1.mp3',
  '2.mp3'
];

function next() {
  var ms = document.getElementById("musica");
  var index = audio_files.indexOf(ms.src);
  if (index !== -1 && index < audio_files.length - 1) {
    ms.src = audio_files[index + 1];
  } else {
    ms.src = audio_files[0];
  }
  ms.load();
  ms.play();
}
function before() {
  var ms = document.getElementById("musica");
  var index = audio_files.indexOf(ms.src);
  if (index !== -1 && index > 0) {
    ms.src = audio_files[index - 1];
  } else {
    ms.src = audio_files[audio_files.length - 1];
  }
  ms.load();
  ms.play();
}


setInterval(show_clock, 1000);
setInterval(change_background, 3600000);
setInterval(play_music(), 3600000);
