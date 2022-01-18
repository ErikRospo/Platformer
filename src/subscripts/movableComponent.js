class movableComponent extends component {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y);
        this.speedX = 0;
        this.speedY = 0;
        this.update = function () {
            this.x += this.speedX;
            this.y += this.speedY;
            this.context = ctx;
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}
