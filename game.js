var health = 100;
var name = "Jedi";
var hits = 0;
function slap() {
   health = health - 1;
   health = Math.max(health,0);
   hits++;
   update();
}

function punch() {
   health = health - 5;
   health = Math.max(health,0);
   hits++;
   update();
}

function kick() {
   health = health - 10;
   health = Math.max(health,0);
   hits++;
   update();
}

function update() {
   document.getElementById('health').innerText=health;
   document.getElementById('hits').innerText=hits;
}

