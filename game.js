var health = 100;
function slap() {
   health = health - 11;
   health = Math.max(health,0);
   update();
}

function update() {
   document.getElementById('health').innerText=health;
}

