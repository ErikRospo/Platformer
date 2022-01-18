class player extends movableComponent {
    constructor(width, height, color, x, y) {
        player.call(width, height, color, x, y);
        this.tag = "player";
        this.sensitivity = 1;
        this.update = function () {
            this.context = ctx;
            this.context.fillstyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        };
        this.onW = function () {
            this.speedY += this.sensitivity;
            this.speedY = smoothstep(-20, 20, this.speedY);
        };
        this.onS = function () {
            this.speedY -= this.sensitivity;
            this.speedY = smoothstep(-20, 20, this.speedY);
        };
        this.onA = function () {
            this.speedX += this.sensitivity;
            this.speedX = smoothstep(-20, 20, this.speedX);
        };
        this.onD = function () {
            this.speedX -= this.sensitivity;
            this.speedX = smoothstep(-20, 20, this.speedX);
        };
    }
}
