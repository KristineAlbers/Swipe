/*
let swipeItem = document.querySelector(".swipeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchend;
let deleteButtonWidth = (window.screen.width * 40) / 100;

document.querySelector(".deleteItem").addEventListener("click", () => {
  document.querySelector("main").remove();
});

swipeItem.addEventListener("touchstart", (e) => {
  touchCoordinatesStart = e.touches[0].clientX;
  //console.log(e.touches[0].clientX);
});

swipeItem.addEventListener("touchmove", (e) => {
  touchCoordinatesMove = Math.floor(e.touches[0].clientX);
  if (
    touchCoordinatesMove < touchCoordinatesStart &&
    touchCoordinatesMove > touchCoordinatesStart - deleteButtonWidth
  ) {
    //console.log(e.touches[0].clientX);
    swipeItem.style.transform = `translateX(${
      touchCoordinatesMove - touchCoordinatesStart
    }px)`;
  }
});

swipeItem.addEventListener("touchend", (e) => {
  touchend = Math.floor(e.changedTouches[0].clientX);
  if (touchend < touchCoordinatesStart - deleteButtonWidth / 2) {
    //console.log('test')
    swipeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
  } else {
      swipeItem.style.transform = `translateX(${e.target.offsetLeft})`;
    }
});

*/
let swipeItem = document.querySelector(".swipeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchend;
let deleteButtonWidth = (window.screen.width * 40) / 100;

//Slette knappen med fadeOut og heigt 0
document.querySelector(".deleteItem").addEventListener("click", () => {
  document.querySelector(".container").classList.add("animate__fadeOutLeft");
  setTimeout(() => {
    document.querySelector(".container").classList.add("collapsed");
  }, 800);
  setTimeout(() => {
    document.querySelector(".container").remove();
  }, 1500);
});

//Startkoordinat
swipeItem.addEventListener("touchstart", (e) => {
  touchCoordinatesStart = e.touches[0].clientX;
  //console.log(e.touches[0].clientX);
});

//Flytte på knappen
swipeItem.addEventListener("touchmove", (e) => {
  touchCoordinatesMove = Math.floor(e.touches[0].clientX);
  if (
    touchCoordinatesMove < touchCoordinatesStart &&
    touchCoordinatesMove > touchCoordinatesStart - deleteButtonWidth
  ) {
    //console.log(e.touches[0].clientX);
    swipeItem.style.transform = `translateX(${
      touchCoordinatesMove - touchCoordinatesStart
    }px)`;
  }
});

//Rykke knappen frem eller tilbage ved slip før/efter midten
swipeItem.addEventListener("touchend", (e) => {
  touchend = Math.floor(e.changedTouches[0].clientX);
  if (touchend < touchCoordinatesStart - deleteButtonWidth / 2) {
    //console.log('test')
    swipeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
  } else {
    swipeItem.style.transform = `translateX(${e.target.offsetLeft})`;
  }
});
