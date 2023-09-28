console.log("Welcome to spotify");
//initialized the variables
let songIndex=0;
let audioElement=new Audio('assest/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"warriyo-Motals", filePath:"assest/songs/1.mp3", coverPath:"assest/covers/1.jpg"},
    {songName:"Cielo-Huma-huma", filePath:"assest/songs/2.mp3", coverPath:"assest/covers/2.jpg"},
    {songName:"Deaf kav", filePath:"assest/songs/3.mp3", coverPath:"assest/covers/3.jpg"},
    {songName:"Different Heaven", filePath:"assest/songs/4.mp3", coverPath:"assest/covers/4.jpg"},
    {songName:"Jangi heroes", filePath:"assest/songs/5.mp3", coverPath:"assest/covers/5.jpg"},
    {songName:"Rabba- salamaIshq", filePath:"assest/songs/6.mp3", coverPath:"assest/covers/6.jpg"},
    {songName:"Sakhyaan", filePath:"assest/songs/7.mp3", coverPath:"assest/covers/7.jpg"},
    {songName:"Buhla dana muja", filePath:"assest/songs/8.mp3", coverPath:"assest/covers/8.jpg"},
    {songName:"tumhari kasam", filePath:"assest/songs/9.mp3", coverPath:"assest/covers/9.jpg"},
    {songName:"salam e ishq", filePath:"assest/songs/10.mp3", coverPath:"assest/covers/10.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 

})

//audioElement.play()

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`assest/songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=9){
    songIndex=0;
   }
   else{
    songIndex+=1;
   }
   audioElement.src=`assest/songs/${songIndex+1}.mp3`;
   masterSongName.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
     songIndex=0;
    }
    else{
     songIndex-=1;
    }
    audioElement.src=`assest/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 })
