var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
var level = 0;
var maxLevels = 1;
class platform extends immovableComponent {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y);
        this.tag = "platform";
    }
}
class enemy extends movableComponent {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y);
        this.tag = "enemy";
    }
}
class EndPoint extends immovableComponent {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y);
        this.tag = "endpoint";
    }
}
function start() {
    canvas.width = 480;
    canvas.height = 270;
    var statuscode = 1
    var components = createComponents();
    //while ((statuscode != 0) | (statuscode != 1)) {
    for (let i = 0; i < 100; i++) {
        statuscode = updateEvents(components);
    };
    if (statuscode == 0) {
        console.log("you won!");
        level += 1
    } else if (statuscode == 1) {
        console.log("you lost.\n:(")
    }
};
function createComponents() {
    var components = [];
    level = level % maxLevels
    const playerc = new player(5, 10, "blue", 10, 20)
    if (level == 0); {
        const platform1 = new platform(50, 10, "green", 0, 30)
        console.log(platform1);
        components += platform1
        const playerc = new player(5, 10, "blue", 10, 20)
        console.log(playerc);
        components += playerc
    }
    return components, playerc
}
function updateEvents(components, playerV) {
    var p = playerV
    for (let i = 0; i < components.length; i++) {
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
        } else if (t == "player") {
            p.update()
        }
    }
};
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
start();