var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
var level = 0;
class component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.color = color;
        this.context = ctx;
        this.context.fillstyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.update = function () {
            this.context = ctx;
            this.context.fillstyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        };
        this.Start = function () {
            this.x = this.startingX;
            this.y = this.startingY;
        };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;
            if ((mybottom < othertop) ||
                (mytop > otherbottom) ||
                (myright < otherleft) ||
                (myleft > otherright)) {
                crash = false;
            }
            return crash;
        };
    }
};
class player extends component {
    constructor(width, height, color, x, y) {
        player.call(width, height, color, x, y);
        this.tag = "Player";

        this.update = function () {
            this.context = ctx;
            this.context.fillRect = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
class platform extends component {
    constructor(width, height, color, x, y) {
        platform.call(width, height, color, x, y);
        this.tag = "Platform";
    }
}
class enemy extends component {
    constructor(width, height, color, x, y) {
        enemy.call(width, height, color, x, y);
        this.tag = "Enemy";
    }
}
class EndPoint extends component {
    constructor(width, height, color, x, y) {
        EndPoint.call(width, height, color, x, y);
        this.tag = "EndPoint";
    }
}
function start() {
    canvas.width = 480;
    canvas.height = 270;
    createComponents();
};
function createComponents() {
    var components = [];
    if (level == 0); {
        const platform1 = new platform(50, 10, "green", 0, 10)
        components += platform1
        const playerc = new player(5, 10, "blue", 10, 20)
        components += playerc
    };
}
function updateEvents() {

};
function update() {

};
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
onload(start());