function magicFunction () {

  //assign each colour a random numbers up to 255
  let red= Math.floor(Math.random() * 255);
  let green= Math.floor(Math.random() * 255);
  let blue= Math.floor(Math.random() * 255);
  
  let randomColor = `rgba(${red}, ${green}, ${blue})`

  document.getElementById("one").style.backgroundColor = randomColor;
}


//function to deal with background colour of the first zero
function zeroMagicFunction () {

  //assign each colour a random numbers up to 255
  let red= Math.floor(Math.random() * 255);
  let green= Math.floor(Math.random() * 255);
  let blue= Math.floor(Math.random() * 255);
  
  let randomColor = `rgba(${red}, ${green}, ${blue})`

  document.getElementById("zero").style.backgroundColor = randomColor;
}

//function to deal with background colour of the second zero
function zeroTwoMagicFunction () {

  //assign each colour a random numbers up to 255
  let red= Math.floor(Math.random() * 255);
  let green= Math.floor(Math.random() * 255);
  let blue= Math.floor(Math.random() * 255);
  
  let randomColor = `rgba(${red}, ${green}, ${blue})`

  document.getElementById("zero2").style.backgroundColor = randomColor;
}

let con = document.getElementsByClassName('confetti');
let conArr = Array.from(con);

function confetti() {
  conArr.forEach(function(c) {
    c.style.animation = 'none';
    c.offsetHeight;
    c.style.animation = null;
    c.classList.add('confetti');
    c.style.animationPlayState = 'running';
  });
}