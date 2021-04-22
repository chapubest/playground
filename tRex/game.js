// 游戏
function Game() {
    // 帧率
    this.fps = 0;
    // 是否在游戏中
    this.gaming = false;
    // 游戏是否在运行
    this.active = false;
    // 游戏进行时长
    this.duration = 0;
    // 请求上一帧的时间
    this.lastTime = 0;
    // raf的id
    this.rafId = 0;
    // 速度
    this.speed = 0;
    // 地平线
    this.horizon = null;
    // 天空
    this.sky = null;
    // 障碍物管理
    this.obstacleManager = null;
}
// 游戏设置
Game.option = {
    // 最小游戏速度 按照60fps设计 单位每16.7ms 下同
    MIN_SPEED: 3,
    // 最大游戏速度
    MAX_SPEED: 10,
    // 游戏速度加快系数
    SPEED_COEFFICIENT: 0.002,
    // 游戏区域默认宽度
    DEFAULT_WIDTH: 600,
    // 游戏区域默认高度
    DEFAULT_HEIGHT: 150
}
// 游戏原型链方法
Game.prototype = {
    // 初始化
    init: function(canvas, img, spriteDefinition) {
        this.canvas = canvas;
        this.img = img;
        this.spriteDefinition = spriteDefinition;
        this.ctx = canvas.getContext("2d");
        this.horizon = new HorizonLine(canvas, spriteDefinition.HORIZONLINE);
        this.sky = new SkyManager(canvas, spriteDefinition, Game.option.DEFAULT_WIDTH);
        this.obstacleManager = new ObstacleManager(canvas, Game.option.DEFAULT_WIDTH);
    },
    // 开始
    start: function() {
        this.gaming = true;
        this.active = true;
        this.duration = 0;
        this.lastTime = 0;
        this.speed = Game.option.MIN_SPEED;
        this.scheduleNextUpdate();
    },
    // 暂停
    pause: function() {
        // 在游戏中才可以执行
        if (this.gaming) {
            this.active = false;
            this.lastTime = 0;
            window.cancelAnimationFrame(this.rafId);
        }
    },
    // 继续
    continue: function() {
        // 在游戏中才可以执行
        if (this.gaming) {
            this.active = true;
            this.scheduleNextUpdate();
        }
    },
    // 重置游戏
    reset: function() {
        this.gaming = false;
        this.active = false;
    },
    // 更新游戏帧
    update: function() {
        if(this.speed < Game.option.MAX_SPEED) {
            this.speed += Game.option.SPEED_COEFFICIENT;
            if(this.speed > Game.option.MAX_SPEED) {
                this.speed = Game.option.MAX_SPEED;
            }
        }
        this.ctx.clearRect(0, 0, Game.option.DEFAULT_WIDTH, Game.option.DEFAULT_HEIGHT);
        this.horizon.update(this.speed);
        this.sky.invert(1);
        this.obstacleManager.update(this.speed);
    },
    // 计划下次更新
    scheduleNextUpdate: function(now) {
        now = now || window.performance.now();
        if (this.lastTime == 0) {
            this.fps = 60;
        } else {
            let deltaTime = now - this.lastTime;
            // 计算实际帧率
            this.fps = Math.round(1000 / deltaTime);
            // 累计游戏时间
            this.duration += deltaTime;
        }
        this.lastTime = now;
        this.update();
        // 请求动画帧
        this.rafId = window.requestAnimationFrame(this.scheduleNextUpdate.bind(this));
    }
}