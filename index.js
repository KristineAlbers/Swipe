let jokeItem = document.querySelector('.jokeItem');
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchend
let deleteButtonWidth = (window.screen.width * 40) / 100;


jokeItem.addEventListener('touchstart', (e) => {
    touchCoordinatesStart = e.touches[0].clientX;
    //console.log(e.touches[0].clientX);
});

jokeItem.addEventListener('touchmove', (e) => {
    touchCoordinatesMove = Math.floor(e.touches[0].clientX);
    if (
        touchCoordinatesMove < touchCoordinatesStart &&
        touchCoordinatesMove > touchCoordinatesStart - deleteButtonWidth
        ) {
        //console.log(e.touches[0].clientX);
        jokeItem.style.transform = `translateX(${
            touchCoordinatesMove -touchCoordinatesStart
        }px)`;}
});

jokeItem.addEventListener('touchend', (e) => {
    touchend = Math.floor(e.changedTouches[0].clientX);
    if (touchend < touchCoordinatesStart - deleteButtonWidth / 2) {
        //console.log('test')
        jokeItem.style.transform = `translateX(-${deleteButtonWidth}px)`;
    } else {
        jokeItem.style.transform = `translateX(${e.target.offsetLeft})`;
    }
});