var player = {
    health: 100,
    name: "Jedi",
    hits: 0,
    damage: function (x) {
        this.health -= x;
        this.health = Math.max(this.health, 0);
        this.hits++;
        update();
    },
    slap: function () {
       
        this.damage(1);
    },
    punch: function () {
        this.damage(5);
    },
    kick: function () {
        this.damage(10);
    }
}

function update() {
    document.getElementById('health').innerText = player.health.toString();
    document.getElementById('hits').innerText = player.hits.toString();
    document.getElementById('name').innerText = player.name.toString();
}

function reset() {
    player.hits = 0;
    player.health = 100;
    player.update();
}
