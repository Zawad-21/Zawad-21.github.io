export function checkSelfCollision(snakeBody) {
  for (let i = 1; i < snakeBody.length; i++) {
    if (
      snakeBody[0].x === snakeBody[i].x &&
      snakeBody[0].y === snakeBody[i].y
    ) {
      alert("over");
    }
  }
}

export function checkBorderCollision(snakeHead) {
    if(snakeHead.x > 21 || snakeHead.y > 21 || snakeHead.x < 0 || snakeHead.y < 0) {
        alert('over')
    }
}