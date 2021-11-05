let jokeItem = document.querySelector(".jokeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchend;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let touchElement;
let parentElement;

//document.querySelector('main').addEventListener('touchStart', (e) => {
//  touchElement = e.target;
//  parrentElement
//});

document.querySelector("main").addEventListener("touchstart", (e) => {
  touchElement = e.target;
  parentElement = e.target.parentElement;
  touchCoordinatesStart = e.touches[0].clientX;
  //console.log(e.touches[[0].clientX);

  touchElement.addEventListener("touchend", (e) => {
    touchend = Math.floor(e.changedTouches[0].clientX);
    if (touchend < touchCoordinatesStart - deleteButtonWidth / 2) {
      touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
    } else {
      touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
    }
  });

  touchElement.addEventListener("touchmove", (e) => {
    touchCoordinatesMove = Math.floor(e.touches[0].clientX);
    if (
      touchCoordinatesMove < touchCoordinatesStart &&
      touchCoordinatesMove > touchCoordinatesStart - deleteButtonWidth
    ) {
      touchElement.style.transform = `translateX(${
        touchCoordinatesMove - touchCoordinatesStart
        //console.log(e.touches[0].clientX);
        //e.target.parentNode.id.style.transform = `translateX(${
        //touchCoordinatesMove - touchCoordinatesStart
      }px)`;
    }
  });
  parentElement.querySelector(".deleteItem").addEventListener("click", () => {
    let uderid = parentElement.id;
    parentElement.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      parentElement.classList.add("collapsed");
    }, 800);
    setTimeout(() => {
      parentElement.remove();
    }, 900);
  });
  
});


/*
jokeItem.addEventListener("touchmove", (e) => {
  touchCoordinatesMove = Math.floor(e.touches[0].clientX);
  if (
    touchCoordinatesMove < touchCoordinatesStart &&
    touchCoordinatesMove > touchCoordinatesStart - deleteButtonWidth
    ) {
      //console.log(e.touches[0].clientX);
      jokeItem.style.transform = `translateX(${
        touchCoordinatesMove - touchCoordinatesStart
      }px)`;
    }
  });
  
  jokeItem.addEventListener("touchend", (e) => {
    touchend = Math.floor(e.changedTouches[0].clientX);
    if (touchend < touchCoordinatesStart - deleteButtonWidth / 2) {
      //console.log('test')
      jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
    } else {
      jokeItem.style.transform = `translateX(${e.target.offsetLeft})`;
    }
  });
  */
