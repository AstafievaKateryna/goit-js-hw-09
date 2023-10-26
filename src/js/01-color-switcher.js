function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
  
  const startBtn = document.querySelector('button[data-start]');
  const finBtn = document.querySelector('button[data-stop]');
  let timerId = null;
  finBtn.disabled = true;

  function changeColor(){
    document.body.style.backgroundColor = getRandomHexColor();
  };

  startBtn.addEventListener('click', ()=>{
    startBtn.disabled = true;
    finBtn.disabled = false;
    timerId = setInterval(changeColor, 500);
  });

  finBtn.addEventListener('click', ()=>{
    startBtn.disabled = false;
    clearInterval(timerId);
    return finBtn.disabled = true;
  })
 
