console.log("Welcome to console");
const music_album = [
  {
    name: "Tu aake dekh le ",
    singer: "king",
    cover: "aksh2-picking.jpg",
    music: "aksh2-audioking.mp3",
  },
  {
  
    name: "Raatan Lambiyan",
    singer: "Jubin nautiyal",
    cover: "aksh3-picrl.jpg",
    music: "aksh3-audiorl.mp3",

  },
  {
    name: " Bachpan ka pyaar",
    singer: "BaadShah ",
    cover: "aksh1-picbkp.jpg",
    music: "aksh1-audiobkp.mp3",
  },
];

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const singer_name = document.getElementById("singer_name");
const song_name = document.getElementById("song_name");
const music = document.getElementById("music_player");
const play = document.getElementById("play");
const image = document.getElementById("image");

playmusic = true;

function mainBtn(){
    if(play.title.match("play"))
    {
    music.play();
    play.className = "fas fa-pause main_button";
    play.title = "pause";
  image.classList.add("anime");
    }
else{
    music.pause();
    play.className = "fas fa-play main_button";
    play.title = "play";
    image.classList.remove("anime");
}
}
play.addEventListener("click",mainBtn)


let songindex=0;
function nextBtn(){
    mainBtn();
     songindex = (songindex + 1) % music_album.length;
    const arr_music = music_album[songindex]
    // const arr_music = music_album[2]
    singer_name.innerHTML= arr_music.singer;
    song_name.innerHTML = arr_music.name;
    image.src = arr_music.cover;
    music.src = arr_music.music;
    mainBtn();
};

next.addEventListener('click',nextBtn)

function prevBtn(){
    mainBtn();

     songindex = (songindex -1 + music_album.length) % music_album.length

    const arr_music = music_album[songindex]
    singer_name.innerHTML= arr_music.singer;
    song_name.innerHTML = arr_music.name;
    image.src = arr_music.cover;
    music.src = arr_music.music;
    mainBtn();
}
prev.addEventListener('click',prevBtn)

let current_time = document.getElementById('current_time');
let duration_time = document.getElementById('duration_time');
let progress = document.getElementById('progress');
let progress_div = document.getElementById('progress_div');
music.addEventListener("timeupdate",(e)=>{
 let  {currentTime , duration}  = e.srcElement;
progress_time = Math.floor(currentTime/duration *100);
progress.style.width = `${progress_time}%`;

let min_duration = Math.floor(duration/60);
let sec_duration = Math.floor(duration%60);
if(sec_duration<10)
{
  sec_duration=`0${Math.floor(duration%60)}`;
}
if(duration)
{
   total_duration = `${min_duration}:${sec_duration}`;
   duration_time.innerHTML = total_duration;
}
let min_currentTime = Math.floor(currentTime/60);
let sec_currentTime = Math.floor(currentTime%60);
if(sec_currentTime<10)
{
  sec_currentTime=`0${Math.floor(currentTime%60)}`;
}

   total_currentTime = `${min_currentTime}:${sec_currentTime}`;
   current_time.innerHTML = total_currentTime;

})
music.addEventListener('ended',nextBtn);
progress_div.addEventListener('click',(e)=>{
  let {duration} = music;
  let progress_click = e.offsetX / e.srcElement.clientWidth *duration;
music.currentTime = progress_click;
})






