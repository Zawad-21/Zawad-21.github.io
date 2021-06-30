import { randomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

let food = randomFoodStartingPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function randomFoodStartingPosition() {
  let startingFoodPosition;
  while (startingFoodPosition == null || onSnake(startingFoodPosition)) {
    startingFoodPosition = randomGridPosition()
  } 
  return startingFoodPosition;
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}