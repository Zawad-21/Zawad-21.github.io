const GROUND = document.getElementById("ground");
const WALKER_SPEED = 1000;

let walkerBody = [{ x: 50, y: 50 }];

const walk = () => {
  walkerBody.forEach((segment) => {
    const walkerElement = document.createElement("div");
    walkerElement.style.gridRowStart = segment.y;
    walkerElement.style.gridColumnStart = segment.x;
    walkerElement.classList.add("walker");
    GROUND.appendChild(walkerElement);
  });
};

walk();

const update = () => {
  expandWalker();
  walk();
  console.log(walkerBody)
};

const expandWalker = () => {
  let newWalker = getWalkerPosition();
  walkerBody.push(newWalker);
};

const getWalkerPosition = () => {
  let newPosition;
  while (newPosition == null || collide(newPosition)) {
    newPosition = randomGridPosition(walkerBody[walkerBody.length - 1]);
  }
  return newPosition;
};

const randomGridPosition = (latestWalker) => {
  let randomNumber = Math.ceil(Math.random() * 4);
  let newWalkerPosition = { x: latestWalker.x, y: latestWalker.y };
  if ((randomNumber === 1)) {
    newWalkerPosition.x += 1;
  }
  else if ((randomNumber === 2)) {
    newWalkerPosition.x -= 1;
  }
  else if ((randomNumber === 3)) {
    newWalkerPosition.y += 1;
  }
  else if ((randomNumber === 4)) {
    newWalkerPosition.y -= 1;
  }
  return newWalkerPosition;
};

const collide = (newWalkerPosition) => {
  return walkerBody.some((segment) => {
    samePosition(segment, newWalkerPosition);
  });
};

const samePosition = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

setInterval(update, WALKER_SPEED);
