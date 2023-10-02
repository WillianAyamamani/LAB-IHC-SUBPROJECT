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
var audio_files = [
  '1.mp3',
  '2.mp3',
  '3.mp3',
  '4.mp3',
  '5.mp3'
];
  console.log("GG")
  var ms = document.getElementById("uno");
  var index = audio_files.indexOf(ms.src.substring(ms.src.length-5,ms.src.length));
  if (index !== -1 && index < audio_files.length - 1) {
    ms.src = audio_files[index + 1];
    return 0;
  } 
  else {
    ms.src = audio_files[0];
  }
}
function before() {
  var ms = document.getElementById("uno");
  var index = audio_files.indexOf(ms.src.substring(ms.src.length-5,ms.src.length));
  if (index !== -1 && index > 0) {
    ms.src = audio_files[index - 1];
  } else {
    ms.src = audio_files[audio_files.length - 1];
  }
}


setInterval(show_clock, 1000);
setInterval(change_background, 3600000);
setInterval(play_music(), 3600000);
 //new code: https://github.com/DaniCodex/digital-clock/blob/master/script.js
 const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);
//end code
function ZOOM() {
  var general = document.getElementById("zoom");
  var fondo =  document.getElementById("ivan-c");
  var uno =  document.getElementById("clock");
  var dos = document.getElementById("spotify");
  general.style.display = "flex";
  uno.style.display = "flex";
  dos.style.display = "none";
  fondo.style.display = "none";
}
function music() {
  var general = document.getElementById("zoom");
  var uno =  document.getElementById("clock");
  var dos = document.getElementById("spotify");
  general.style.display = "flex";
  uno.style.display = "none";
  dos.style.display = "flex";
}
function salida() {
  var general = document.getElementById("zoom");
  var fondo =  document.getElementById("ivan-c");
  fondo.style.display = "flex";
  general.style.display = "none";
}