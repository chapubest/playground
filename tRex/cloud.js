// 云朵
// canvas 画布 spritePos 雪碧图中坐标 containerWidth 容器宽度
function Cloud(canvas, spritePos, containerWidth) {
    this.spritePos = spritePos;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.containerWidth = containerWidth;
    // 云朵在画布上的绘制位置
    this.xPos = 0;
    this.yPos = 0;
    // 是否移除
    this.remove = false;
    // 云朵间隙
    this.cloudGap = 0;
    // 初始化
    this.init();
}
// 云朵 设置
Cloud.config = {
    WIDTH: 46,
    HEIGHT: 14,
    // 云朵之间的间隙
    MAX_GAP: 400,
    MIN_GAP: 100,
    // 云朵高度
    MAX_SKY_LEVEL: 30,
    MIN_SKY_LEVEL: 71,
};
// 云朵原型链方法
Cloud.prototype = {
    // 初始化云朵
    init: function() {
        this.xPos = this.containerWidth;
        // 随机云朵高度
        this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL, Cloud.config.MIN_SKY_LEVEL);
        // 随机云朵间隙
        this.cloudGap = getRandomNum(Cloud.config.MIN_GAP, Cloud.config.MAX_GAP);
    },
    // 绘制云朵
    draw: function() {
        var sourceWidth = Cloud.config.WIDTH,
            sourceHeight = Cloud.config.HEIGHT;
        this.ctx.drawImage(imgSprite,
            // 图片开始裁剪的坐标
            this.spritePos.x, this.spritePos.y,
            // 图片被裁剪的宽高
            sourceWidth, sourceHeight,
            // 画布开始绘制的坐标
            this.xPos, this.yPos,
            // 画布绘制的宽高
            sourceWidth, sourceHeight);
    },
    // 更新云朵
    update: function(speed) {
        if(!this.remove) {
            this.xPos -= speed;
            this.draw();
            if(!this.isVisible()) {
                this.remove = true;
            }
        }
    },
    // 判断云朵是否移出画布
    isVisible: function() {
        return this.xPos + Cloud.config.WIDTH > 0;
    },
}