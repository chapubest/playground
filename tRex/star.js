// 星星
// canvas 画布 spritePos 雪碧图中坐标 containerWidth 容器宽度
function Star(canvas, spritePos, containerWidth) {
    this.spritePos = spritePos;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.containerWidth = containerWidth;
    // 雪碧图中选择的星星的y坐标
    this.sourceYPos = 0;
    // 星星在画布上的绘制位置
    this.xPos = 0;
    this.yPos = 0;
}
// 星星 设置
Star.config = {
    // 大小
    SIZE: 9,
    // 样式种类
    TYPE: 3
};
// 星星原型链方法
Star.prototype = {
    // 初始化星星 pos 画布中的坐标
    init: function(pos) {
        this.xPos = pos.x;
        this.yPos = pos.y;
        // 随机一个星星样式
        this.sourceYPos = this.spritePos.y + Math.floor(Math.random() * Star.config.TYPE) * Star.config.SIZE;
    },
    // 绘制星星
    draw: function() {
        var sourceWidth = Star.config.SIZE,
            sourceHeight = Star.config.SIZE;
        this.ctx.drawImage(imgSprite,
            // 图片开始裁剪的坐标
            this.spritePos.x, this.sourceYPos,
            // 图片被裁剪的宽高
            sourceWidth, sourceHeight,
            // 画布开始绘制的坐标
            this.xPos, this.yPos,
            // 画布绘制的宽高
            sourceWidth, sourceHeight);
    },
    // 更新星星
    update: function(speed) {
        this.xPos -= speed;
        if(!this.isVisible()) {
            this.xPos += this.containerWidth;
        }
        this.draw();
    },
    // 判断星星是否移出画布
    isVisible: function() {
        return this.xPos + Star.config.SIZE > 0;
    },
}