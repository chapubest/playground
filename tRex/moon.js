// 月亮
// canvas 画布 spritePos 雪碧图中坐标 containerWidth 容器宽度
function Moon(canvas, spritePos, containerWidth) {
    this.spritePos = spritePos;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.containerWidth = containerWidth;
    // 月相
    this.currentPhase = 0;
    // 月亮在画布上的绘制位置
    this.xPos = 0;
    this.yPos = 0;
    // 初始化
    this.init();
}
// 月亮 设置
Moon.config = {
    // 半月宽度
    WIDTH: 20,
    HEIGHT: 40,
    // 月相位置
    PHASES: [140, 120, 100, 60, 40, 20, 0]
};
// 月亮原型链方法
Moon.prototype = {
    // 初始化月亮坐标
    init: function() {
        this.xPos = this.containerWidth;
        this.yPos = 30;
    },
    // 绘制月亮
    draw: function() {
        // 判断是否为满月
        var sourceWidth = this.currentPhase == 3 ? Moon.config.WIDTH * 2 : Moon.config.WIDTH,
            sourceHeight = Moon.config.HEIGHT;
        // 获取雪碧图上正确的x坐标
        var sourceXPos = this.spritePos.x + Moon.config.PHASES[this.currentPhase];
        this.ctx.drawImage(imgSprite,
            // 图片开始裁剪的坐标
            sourceXPos, this.spritePos.y,
            // 图片被裁剪的宽高
            sourceWidth, sourceHeight,
            // 画布开始绘制的坐标
            this.xPos, this.yPos,
            // 画布绘制的宽高
            sourceWidth, sourceHeight);
    },
    // 更新月相
    updatePhase: function() {
        this.currentPhase++;
        if(this.currentPhase >= Moon.config.PHASES.length) {
            this.currentPhase = 0;
        }
    },
    // 更新月亮
    update: function(speed) {
        this.xPos -= speed;
        if(!this.isVisible()) {
            this.xPos += this.containerWidth;
        }
        this.draw();
    },
    // 判断月亮是否移出画布
    isVisible: function() {
        return this.xPos + Moon.config.WIDTH * 2 > 0;
    },
}