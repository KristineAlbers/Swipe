let jokeItem = document.querySelector('.jokeItem');
let touchCoordinatesStart;
let touchCoordinatesMove;

jokeItem.addEventListener('touchstart', (e) => {
    touchCoordinatesStart = e.touches[0].clientX;
    //console.log(e.touches[0].clientX);
});

jokeItem.addEventListener('touchmove', (e) => {
    touchCoordinatesMove = Math.floor(e.touches[0].clientX);
    if (touchCoordinatesMove < touchCoordinatesStart) {
        //console.log(e.touches[0].clientX);
        jokeItem.style.transform = `translateX(${
            touchCoordinatesMove -touchCoordinatesStart
        }px)`;}
});
