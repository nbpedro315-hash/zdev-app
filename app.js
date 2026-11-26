// Simple Snake implementation for demonstration
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const grid = 20;
canvas.width = window.innerWidth < 600 ? window.innerWidth - 20 : 600;
canvas.height = canvas.width;

let snake = [{ x: 5, y: 5 }];
let dir = { x: 1, y: 0 };
let food = randomFood();

function randomFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / grid)),
    y: Math.floor(Math.random() * (canvas.height / grid))
  };
}

function update() {
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
  // Wall collision
  if (head.x < 0 || head.y < 0 || head.x >= canvas.width / grid || head.y >= canvas.height / grid) {
    reset();
    return;
  }
  // Self collision
  if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    reset();
    return;
  }
  snake.unshift(head);
  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = randomFood();
  } else {
    snake.pop();
  }
}

function draw() {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  snake.forEach(seg => ctx.fillRect(seg.x * grid, seg.y * grid, grid - 1, grid - 1));
  ctx.fillStyle = '#f00';
  ctx.fillRect(food.x * grid, food.y * grid, grid - 1, grid - 1);
}

function loop() {
  update();
  draw();
}
setInterval(loop, 100);

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':    if (dir.y === 0) dir = { x: 0, y: -1 }; break;
    case 'ArrowDown':  if (dir.y === 0) dir = { x: 0, y: 1 };  break;
    case 'ArrowLeft':  if (dir.x === 0) dir = { x: -1, y: 0 }; break;
    case 'ArrowRight': if (dir.x === 0) dir = { x: 1, y: 0 };  break;
  }
});

function reset() {
  snake = [{ x: 5, y: 5 }];
  dir = { x: 1, y: 0 };
}
