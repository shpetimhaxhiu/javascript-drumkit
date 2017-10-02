
  // listen to window


  function playSound(e){

    // if there is any audio tag
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //stop the function
    audio.currentTime = 0; // rewind to start

    // play the audio
    audio.play();

    // add the class to div element
    key.classList.add('playing');
  }

  // remove trans
  function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if its not a transorm
    this.classList.remove('playing');
  }


  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  // Listen for the keys
  window.addEventListener('keydown', playSound);
