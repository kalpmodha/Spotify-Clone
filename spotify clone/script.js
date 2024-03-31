let songIndex = 0;
let audioElement = new Audio('1.mp3');
let = masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem')); 
let somgs = [
  {songame: "a1" , filePath: "spotify clone/1.mp3" , coverPath: "spotify clone/1.jpg" },
  {songame: "a2" , filePath: "spotify clone/2.mp3" , coverPath: "spotify clone/2.jpg" },
  {songame: "a3" , filePath: "spotify clone/3.mp3" , coverPath: "spotify clone/3.jpg" },
  {songame: "a4" , filePath: "spotify clone/4.mp3" , coverPath: "spotify clone/4.jpg" },
  {songame: "a5" , filePath: "spotify clone/5.mp3" , coverPath: "spotify clone/5.jpg" },
  {songame: "a6" , filePath: "spotify clone/1.mp3" , coverPath: "spotify clone/6.jpg" },
  {songame: "a7" , filePath: "spotify clone/1.mp3" , coverPath: "spotify clone/7.jpg" },
  {songame: "a8" , filePath: "spotify clone/1.mp3" , coverPath: "spotify clone/8.jpg" },
  {songame: "a9" , filePath: "spotify clone/1.mp3" , coverPath: "spotify clone/9.jpg" },
  {songame: "a10" , filePath: "spotify clone/1.mp3"  , coverPath: "spotify clone/9.jpg" },
]
//audioElement.play();

// songItems.forEach((element , i) => {
//   console.log(element);
//   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("songame")[0].innerText = songs[i].songame;
// })



//handal play/pause click
masterPlay.addEventListener('click' , ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pasue-circle');
    masterPlay.classList.add('fa-play-circle');
  }
})


//listen to event 
audioElement.addEventListener('timeupdate' , ()=>{
  //update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})