class player extends component {
    constructor(width, height, color, x, y) {
        player.call(width, height, color, x, y);
        this.tag = "player";

        this.update = function () {
            this.context = ctx;
            this.context.fillRect = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}
