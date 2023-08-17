let shouldPlay = true;
let activeBtn;

Array.from(document.getElementsByClassName("zeldaMusicBtn")).forEach((btn) => {
  btn.addEventListener("click", function () {
    if (shouldPlay) {
      if(activeBtn){
        activeBtn.nextElementSibling.pause();
      }
      btn.nextElementSibling.play();
      activeBtn = btn;
    } else if (btn === activeBtn) {
      btn.nextElementSibling.pause();
    } else {
      activeBtn.nextElementSibling.pause();
      btn.nextElementSibling.play();
      activeBtn = btn;
      shouldPlay = !shouldPlay;
    }
    shouldPlay = !shouldPlay;
  });
});


