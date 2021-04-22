// 地平线
// canvas 画布 spritePos 雪碧图中坐标
function HorizonLine(canvas, spritePos) {
	this.spritePos = spritePos;
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.dimensions = HorizonLine.dimensions;
	// 地平线对应雪碧图x坐标
	this.sourceXPos = [];
	// 地平线在画布上的绘制位置
	this.xPos = [];
	this.yPos = 0;
	// 随机地形阈值
	this.bumpThreshold = 0.5
	// 初始化
	this.init();
}
// 地平线尺寸
HorizonLine.dimensions = {
    WIDTH: 600,
    HEIGHT: 12,
    // canvas中的位置
    YPOS: 127
};
// 地平线原型链方法
HorizonLine.prototype = {
	// 初始化地平线
	init: function() {
		// 一个默认 一个随机地形
		this.sourceXPos = [this.spritePos.x, this.getRandomType()];
		this.xPos = [0, this.dimensions.WIDTH];
		this.yPos = this.dimensions.YPOS;
		this.draw();
	},
	// 随机地形
	getRandomType: function() {
		// 返回雪碧图两种地形的x坐标 2, 602 / 静谧平原 激情山地
		return Math.random() >= this.bumpThreshold ? this.spritePos.x : this.spritePos.x + this.dimensions.WIDTH;
	},
	// 绘制地平线
	draw: function() {
		this.ctx.drawImage(imgSprite,
			// 图片开始裁剪的坐标
			this.sourceXPos[0], this.spritePos.y,
			// 图片被裁剪的宽高
			this.dimensions.WIDTH, this.dimensions.HEIGHT,
			// 画布开始绘制的坐标
			this.xPos[0], this.yPos,
			// 画布绘制的宽高
			this.dimensions.WIDTH, this.dimensions.HEIGHT);

		this.ctx.drawImage(imgSprite,
			this.sourceXPos[1], this.spritePos.y,
			this.dimensions.WIDTH, this.dimensions.HEIGHT,
			this.xPos[1], this.yPos,
			this.dimensions.WIDTH, this.dimensions.HEIGHT);
	},
	// --私有-- 更新坐标
	updateXPos: function(pos, increment) {
		var line1 = pos, // 左边的地平线
			line2 = pos === 0 ? 1 : 0; // 右边的地平线
		this.xPos[line1] -= increment;
		this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;
		// 处理左边的地平线完全移出canvas外
		if(this.xPos[line1] <= -this.dimensions.WIDTH) {
			this.xPos[line1] += this.dimensions.WIDTH * 2;
			this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;

			this.sourceXPos[line1] = this.getRandomType();
		}
	},
	// 更新地平线 speed 向左移动的距离
	update: function(speed) {
		if(this.xPos[0] <= 0) {
			// xPos[0]在左边
			this.updateXPos(0, speed);
		}else {
			// xPos[1]在左边
			this.updateXPos(1, speed);
		}
		this.draw();
	},
	// 重置地平线位置
	reset: function() {
		this.xPos[0] = 0;
		this.xPos[1] = this.dimensions.WIDTH;
	}
}