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
        this.crashWithSpecific = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var BottomCollision = (mybottom < othertop)
            var TopCollision = (mytop > otherbottom)
            var RightCollision = (myright < otherleft)
            var LeftCollision = (myleft > otherright)
            return BottomCollision, TopCollision, RightCollision, LeftCollision
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
    var components = createComponents();
    while ((statuscode != 0) || (statuscode != 1)) {
        var statuscode = updateEvents(components);
    };
};
function createComponents() {
    var components = [];
    if (level == 0); {
        const platform1 = new platform(50, 10, "linear-gradient(90deg, #00f800 0%, #964b00 27%)", 0, 10)
        components += platform1
        const playerc = new player(5, 10, "blue", 10, 20)
        components += playerc
    };
    return components, playerc
}
function updateEvents(components, playerV) {
    var p = playerV
    for (let i = 0; i < components.length(); i++) {
        var c = components[i];
        var t = c.tag;
        if (t == "EndPoint") {
            if (p.crashWith(c)) {
                return 0
            }
        } else if (t == "Enemy") {
            if (p.crashWith(c)) {
                return 1
            }
        } else if (t == "Platform") {
            CollisionArray=p.crashWithSpecific(c)
            if (CollisionArray[0]) {
                p.speedY=0
            };
            if (CollisionArray[1]) {
                p.speedY=0
            };
            if (CollisionArray[2]) {
                p.speedX=0
            };
            if (CollisionArray[3]) {
                p.speedX=0
            };
        }
    }
};
function update() {

};
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
onload(start());