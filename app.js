const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const planeImage = new Image();
planeImage.src = "/image/spaceship-pic.png";

const bulletImage = new Image();
bulletImage.src = "/image/pngwing.com.png";

const enemyImage = new Image();
enemyImage.src = "/image/enemigo1.png";

const plane = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 100,
  width: 50,
  height: 50,
  speed: 10
};

const bullet = {
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  speed: 20
};

const maxBullets = 3;

let bullets = [];
let enemies = [];
let score = 0;

function drawPlane() {
  ctx.drawImage(planeImage, plane.x, plane.y, plane.width, plane.height);
}

function movePlane(direction) {
  if (direction === "left") {
    if (plane.x > 0) {
      plane.x -= plane.speed * 1.5;
    }
  } else if (direction === "right") {
    if (plane.x < canvas.width - plane.width) {
      plane.x += plane.speed * 1.5;
    }
  }
}

function drawBullet(bullet) {
  ctx.drawImage(bulletImage, bullet.x, bullet.y, bullet.width, bullet.height);
}

function moveBullet(bullet) {
  bullet.y -= bullet.speed;
}

function drawEnemy(enemy) {
  ctx.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
}

function moveEnemy(enemy) {
  enemy.y += enemy.speed;
}

function shoot() {
  if (bullets.length < maxBullets) {
    const newBullet = {
      x: plane.x + plane.width / 2 - bullet.width / 2,
      y: plane.y,
      width: bullet.width,
      height: bullet.height,
      speed: bullet.speed
    };
    bullets.push(newBullet);
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    movePlane("left");
  } else if (event.key === "ArrowRight") {
    movePlane("right");
  } else if (event.key === " ") {
    shoot();
  }
});

function gameOver() {
  const restart = confirm("¡Game Over! ¿Quieres jugar nuevamente?");
  if (restart) {
    bullets = [];
    enemies = [];
    score=0;
    window.requestAnimationFrame(gameLoop);
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlane();
  drawScore();

  for (let i = 0; i < bullets.length; i++) {
    const bullet = bullets[i];
    drawBullet(bullet);
    moveBullet(bullet);
    if (bullet.y < 0) {
      bullets.splice(i, 1);
      i--;
      continue;
    }
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (
        bullet.x < enemy.x + enemy.width &&
        bullet.x + bullet.width > enemy.x &&
        bullet.y < enemy.y + enemy.height &&
        bullet.y + bullet.height > enemy.y
      ) {
        bullets.splice(i, 1);
        i--;
        enemies.splice(j, 1);
        j--;
        score ++;
        break;
      }
    }
  }

  function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "right";
    ctx.fillText("Enemigos eliminados: " + score, canvas.width - 20, 30);
  }

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    drawEnemy(enemy);
    moveEnemy(enemy);
    if (enemy.y > canvas.height) {
    enemies.splice(i, 1);
    i--;
    }
    }
    if (Math.random() < 0.01) {
      const newEnemy = {
        x: Math.random() * (canvas.width - 50),
        y: -200,
        width: 50,
        height: 50,
        speed: Math.random() * 3 + 1
      };
      enemies.push(newEnemy);
    }

    for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    if ( plane.x < enemy.x + enemy.width && plane.x + plane.width > enemy.x && plane.y < enemy.y + enemy.height && plane.y + plane.height > enemy.y ){
    gameOver();
    return;
      }
    }
    window.requestAnimationFrame(gameLoop);
    }
    
    window.requestAnimationFrame(gameLoop);