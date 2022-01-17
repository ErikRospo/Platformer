var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
var level = 0;
class platform extends component {
    constructor(width, height, color, x, y) {
        platform=new component(width,height,color,x,y)
        this.tag = "platform";
    }
}
class enemy extends component {
    constructor(width, height, color, x, y) {
        enemy.call(width, height, color, x, y);
        this.tag = "enemy";
    }
}
class EndPoint extends component {
    constructor(width, height, color, x, y) {
        EndPoint.call(width, height, color, x, y);
        this.tag = "endpoint";
    }
}
function start() {
    canvas.width = 480;
    canvas.height = 270;
    var statuscode=56
    var components = createComponents();
    while ((statuscode != 0) || (statuscode != 1)) {
        statuscode = updateEvents(components);
    };
    if (statuscode==0) {
        console.log("you won!");
    } else if (statuscode==1){
        console.log("you lost.\n:(")
    }
};
function createComponents() {
    var components = [];
    if (level == 0); {
        const platform1 = new platform(50, 10, "linear-gradient(90deg, #00f800 0%, #964b00 27%)", 0, 10)
        components += platform1
        const playerc = new player(5, 10, "blue", 10, 20)
        components += playerc
    }
    return components, playerc
}
function updateEvents(components, playerV) {
    var p = playerV
    for (let i = 0; i < components.length(); i++) {
        var c = components[i];
        var t = c.tag;
        if (t == "endpoint") {
            if (p.crashWith(c)) {
                return 0
            }
        } else if (t == "enemy") {
            if (p.crashWith(c)) {
                return 1
            }
        } else if (t == "platform") {
            CollisionArray = p.crashWithSpecific(c)
            if (CollisionArray[0]) {
                p.speedY = 0
            };
            if (CollisionArray[1]) {
                p.speedY = 0
            };
            if (CollisionArray[2]) {
                p.speedX = 0
            };
            if (CollisionArray[3]) {
                p.speedX = 0
            };
        }
    }
};
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
onload(start());