let swipeItem = document.querySelector(".swipeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchend;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let touchElement;
let parentElement;
let trash = [];
console.log(trash);
document.querySelector("main").addEventListener("touchend", (e) => {
  //console.log(e.target.parentElement.id);
});

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
    // let userid = parentElement.id;
    // let userName = parentElement.querySelector(".swipeItem").textContent;

    let userObject = {
      id: parentElement.id,
      name: parentElement.querySelector(".swipeItem").textContent,
    };

    if (!trash.includes(JSON.stringify(userObject))) {
      trash.push(JSON.stringify(userObject));
    }

    console.log(trash);

    //    localStorage.setItem(`${userid}`, `${userName}`);
    //    localStorage.setItem(`${userObject.id}`, JSON.stringify(userObject));
    //    localStorage.setItem(`${userObject.id}`, JSON.stringify(trash));
    localStorage.setItem("deletedItems", JSON.stringify(trash));
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
