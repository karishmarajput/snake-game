import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from './grid.js';

function changeWidth(x) {
    if (x.matches) {
      document.getElementById('controls').style.display="block";
    } else {
        document.getElementById('controls').style.display="none";
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)")
  changeWidth(x);
  x.addListener(changeWidth);

const gameBoard = document.getElementById('board-game')

let lastRenderTime = 0
let gameOver = false;

function main(currentTime){
    if(gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location='/'
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLateRender = (currentTime - lastRenderTime)/ 1000;
    if(secondsSinceLateRender < 1/SNAKE_SPEED)
        return;
    lastRenderTime = currentTime;
    update()
    draw()

}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) ||snakeIntersection();
}