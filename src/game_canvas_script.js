var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");
var level = 0;
var maxLevels=1
class movableComponent extends component {
    constructor(width,height,color,x,y) {
        movableComponent=new component(width,height,color,x,y)
        this.speedX = 0;
        this.speedY = 0;
        this.update = function () {
            this.x+=this.speedX;
            this.y+=this.speedY;
            this.context = ctx;
            this.context.fillstyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}
class immovableComponent extends component {
    constructor(width,height,color,x,y) {
        immovableComponent=new component(width,height,color,x,y)
    }
}
class platform extends immovableComponent {
    constructor(width, height, color, x, y) {
        platform=new immovableComponent(width,height,color,x,y)
        this.tag = "platform";
    }
}
class enemy extends movableComponent {
    constructor(width, height, color, x, y) {
        enemy=new movableComponent(width,height,color,x,y)
        this.tag = "enemy";
    }
}
class EndPoint extends immovableComponent {
    constructor(width, height, color, x, y) {
        EndPoint=new immovableComponent(width,height,color,x,y)
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
        level+=1
    } else if (statuscode==1){
        console.log("you lost.\n:(")
    }
};
function createComponents() {
    var components = [];
    level=level%maxLevels
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