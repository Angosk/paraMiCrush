const dynamicBtn = document.getElementById('dynamic');
const staticBtn = document.getElementById('static');
const secIntro = document.getElementById('question');
const secAnswer = document.getElementById('answer');
const intSong = document.getElementById('introSong');
const suVid = document.getElementById('suVid');
let xw = staticBtn.offsetWidth;
let xh = staticBtn.offsetHeight;
let fs = 0;

dynamicBtn.addEventListener('mouseover', () => {
    let x = Math.random() * (window.innerWidth - dynamicBtn.offsetWidth);
    let y = Math.random() * (window.innerHeight - dynamicBtn.offsetHeight);

    dynamicBtn.style.position = 'absolute'
    dynamicBtn.style.left = `${x}px`;
    dynamicBtn.style.top = `${y}px`;

    xw += 30;
    staticBtn.style.width = `${xw}px`;
    xh += 20;
    staticBtn.style.height = `${xh}px`;
    fs += 16;
    staticBtn.style.fontSize = `${fs}px`; 
});

function success() {
    console.log('click')
    secIntro.style.display = "none";
    secAnswer.style.display = 'flex';
    intSong.pause();
    suVid.play();
}