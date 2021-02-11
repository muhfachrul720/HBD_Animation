// Start the countdown
countDown();
generateBox();

// window.onload = animateText;

// Var 
var base = document.getElementById("timer");

const text_animate = document.querySelector('.animate-text').children, text_length = text_animate.length;
const backgroundClr = document.querySelector('#container');
let index = 0;
var count = 0;
var color = '#CC0000'; 

// console.log(text_animate[index]);

//  Function area
function animateText() {
    for(let i = 0; i < text_length; i++){
        text_animate[i].classList.remove("text-in");
    }

    text_animate[index].classList.add("text-in");
    if(index == text_length-1){
        index = 0;
    } else {
        index++;
    }

    setTimeout(animateText, 3000);
}

function countDown(){
    // var est_time = new Date('February 12, 2021 00:00:00').getTime();
    var est_time = new Date('February 11, 2021 17:40:00').getTime();

    var interval = setInterval(function(){
        var time_now = new Date().getTime();

        var distance = est_time - time_now;        

        // Constant
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        base.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;

        if (distance < 0) {
            clearInterval(interval);
            base.innerHTML = '';
            document.getElementById('big-title').innerHTML = "Happy Birthday Nada !!";
            animateText();

            backgroundClr.classList.add('change_back');
            color = '#39f077';

        }

        // console.log(hours);
    }, 1000);
    // console.log(est_time);
}

// Box
function animateBox(x) {
    x.style.bottom = '60%';
    x.style.transform = 'rotate(' + randomNumber() + 'deg)';
    x.style.opacity = '0';
}

function randomNumber() {
    return Math.ceil(Math.random() * 100);
}

function generateBox() {

    var body = document.getElementById('container');

    setTimeout(function () {
        var box = document.createElement('div');
        var size = randomNumber();

        box.style.cssText = 'position:absolute; bottom:-10%; left:' + randomNumber() + '%; width:' + size + 'px; height:' + size + 'px;background-color:' + color + '; transform:rotate(' + randomNumber() + 'deg); transition:2s ease; opacity:1; z-index:0';

        body.appendChild(box);
        setTimeout(function () {
            animateBox(box);
        }, 2);
        generateBox();

        count++;
    }, 50);
}