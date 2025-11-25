// remove event listener
// async functions, timeout, interval
function syncFn(){
  console.log("syncFn start");
  for (let i = 0; i < 10; i++){
    console.log("for");
  }
  console.log("function end");
}
// syncFn();

function asyncFunction(){
  console.log("syncFn start");
  setTimeout(()=>{
    for (let i = 0; i < 10; i++){
      console.log("for");
    }
  }, 5000)
  console.log("function end");
}

// asyncFunction();

const startTimeout = document.getElementById('start-timeout'),
  stopTimout = document.getElementById('clear-timeout'),
  startInterval = document.getElementById('start-interval'),
  stopInterval = document.getElementById('clear-interval');

let timeoutId = null, intervalId = null;

startTimeout.addEventListener('click', ()=>{
  console.log("startTimeout");
  
  timeoutId = setTimeout(()=>{
    console.log("startTimeout");
  }, 5000)
})


stopTimout.addEventListener('click',()=>{
  console.log("stopTimout");
  if(timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  };
})


startInterval.addEventListener('click',()=>{
  console.log('startInterval')
  
  intervalId = setInterval(()=> {
    console.log('startInterval')
  },
    5000);
})


function clearIntervalFn(){
  console.log("stopInterval");
  if(intervalId){
    clearInterval(intervalId);
    intervalId = null;
  }
}


stopInterval.addEventListener('click', clearIntervalFn);
// stopInterval.removeEventListener('click', clearIntervalFn);





// IIFE -> Immediately Invoked Function Expression
(function initSliderFn(){
  const slides = document.querySelectorAll('.slide'),
    prevBtn = document.querySelector('.slider-nav .prev'),
    nextBtn = document.querySelector('.slider-nav .next');
  
  let activeIndex = 0, slideIntervalId = null;
  
  function renderClasses(){
    slides.forEach((slide, index) =>{
      if(index === activeIndex){
        slide.classList.add('active');
      }else{
        slide.classList.remove('active');
      }
    });
  }
  renderClasses();
  
  function goToNextSlide(){
    if(activeIndex === slides.length - 1){
      activeIndex = 0;
    }else{
      activeIndex++;
    }
    renderClasses();
  }
 
  function goToPrevSlide(){
    if(activeIndex === 0){
      activeIndex = slides.length - 1;
    }else{
      activeIndex--;
    }
    renderClasses();
  }
  
  
  nextBtn.addEventListener('click', goToNextSlide);
  
  
  prevBtn.addEventListener('click', goToPrevSlide)
  
  
  // slideIntervalId = setInterval(goToNextSlide, 3000)
  
  
  // if(slideIntervalId){
  //   clearInterval(slideIntervalId);
  // }
  
  
  document.addEventListener('keyup', (e)=>{
    console.log('keyup event', e);
    if(e.code === "ArrowRight"){
      goToNextSlide();
    }
    
    if(e.code === "ArrowLeft"){
      goToPrevSlide();
    }
  });
  
  // document.addEventListener('keydown', (e)=>{
  //   console.log('keydown event', e);
  // });
  
})();
















