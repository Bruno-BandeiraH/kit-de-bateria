const teclas = document.querySelectorAll(".key");
    
function tocaSom(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const tecla = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) {
    return; // stop the function from running all together
  }
  audio.currentTime = 0;
  audio.play();
  tecla.classList.add("playing");
}

function removeTransition(e) {
  if(e.propertyName !== "transform") {
    return; // skip if its not a transform
  }
  this.classList.remove("playing");
}

window.addEventListener("keydown", tocaSom);
teclas.forEach(key => key.addEventListener("transitionend", removeTransition));