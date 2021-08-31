var iteration = 0;

var items = {
  card1: cardLeft,
  card2: cardMiddle,
  card3: cardRight
}
var cardPos = {
  card1Top: 0,
  card1Left: 300,
  card1Opacity: 0.8,

  card2Top: 0,
  card2Left: 300,
  card2Opacity: 1,

  card3Top: -470,
  card3Left: -600,
  card3Opacity: 0.8,
}

arrowRight.onclick = function() {
  onClickAnim();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function onClickAnim() {
  items.card3.style.opacity = `${cardPos.card3Opacity}`;
  items.card3.style.top = `${cardPos.card3Top}px`;
  await sleep(200);
  items.card3.style.left = `${cardPos.card3Left}px`;
  await sleep(200);
  items.card2.style.opacity = `${cardPos.card1Opacity}`;
  items.card2.style.left = `${cardPos.card2Left}px`;
  items.card1.style.opacity = `${cardPos.card2Opacity}`;
  items.card1.style.left = `${cardPos.card1Left}px`;
  await sleep(200);
  items.card3.style.top = `${cardPos.card1Top}px`;

  if(iteration == 0) {
    items = {
      card1: cardRight,
      card2: cardLeft,
      card3: cardMiddle
    }
    cardPos = {
      card1Top: 0,
      card1Left: -300,
      card1Opacity: 0.8,
    
      card2Top: 0,
      card2Left: 600,
      card2Opacity: 1,
    
      card3Top: -470,
      card3Left: -300,
      card3Opacity: 0.8,
    }
    iteration += 1;
  }else if(iteration == 1){
    items = {
      card1: cardMiddle,
      card2: cardRight,
      card3: cardLeft
    }
    cardPos = {
      card1Top: 0,
      card1Left: 0,
      card1Opacity: 0.8,
    
      card2Top: 0,
      card2Left: 0,
      card2Opacity: 1,
    
      card3Top: -470,
      card3Left: 0,
      card3Opacity: 0.8,
    }
    iteration += 1;
  }else {
    items = {
      card1: cardLeft,
      card2: cardMiddle,
      card3: cardRight
    }
    cardPos = {
      card1Top: 0,
      card1Left: 300,
      card1Opacity: 0.8,
    
      card2Top: 0,
      card2Left: 300,
      card2Opacity: 1,
    
      card3Top: -470,
      card3Left: -600,
      card3Opacity: 0.8,
    }
    iteration = 0;
  }
}

window.onload = function() {
  let imagesArray = {
    image1: "../img/Imagem_01.png",
    image2: "../img/Imagem_02.png",
    image3: "../img/Imagem_03.png",
  }

  let arrowLeft = document.getElementById('arrowLeft');
  let arrowRight = document.getElementById('arrowRight');

  setImages();

  function setImages() {
    let cardLeft = document.getElementById('cardLeft');
    let cardMiddle = document.getElementById('cardMiddle');
    let cardRight = document.getElementById('cardRight');
  
    cardLeft.style.backgroundImage = `url(${imagesArray.image1})`;
    cardMiddle.style.backgroundImage = `url(${imagesArray.image2})`;
    cardRight.style.backgroundImage = `url(${imagesArray.image3})`;
  }
}