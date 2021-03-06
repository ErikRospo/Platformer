class component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.tag = "empty";
        this.color = color;
        this.context = ctx;
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.update = function () {
            this.context = ctx;
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
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
            var BottomCollision = (mybottom < othertop);
            var TopCollision = (mytop > otherbottom);
            var RightCollision = (myright < otherleft);
            var LeftCollision = (myleft > otherright);
            return BottomCollision, TopCollision, RightCollision, LeftCollision;
        };
    }
}
;
