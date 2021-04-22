// 天空管理
// canvas 画布 spriteDefinition 雪碧图中坐标 containerWidth 容器宽度
function SkyManager(canvas, spriteDefinition, containerWidth) {
    this.canvas = canvas;
    this.sprite = spriteDefinition;
    this.containerWidth = containerWidth;
    this.ctx = canvas.getContext("2d");
    // 是否绘制星星
    this.drawStars = true;
    // 是否昼夜交替
    this.dayNightCycle = true;
    // 星星和月亮的不透明度
    this.opacity = 0;
    // 记录时间
    this.invertTimer = 0;
    // 是否进入黑夜
    this.inverted = false;
    // 初始化
    this.init();
}
// 天空管理 设置
SkyManager.config = {
    // 夜间持续时间 帧
    NIGHT_DURATION: 500,
    // 白天持续时间 帧
    DAY_DURATION: 700,
    // 淡入淡出速度
    FADE_SPEED: 0.016,

    // 最多云朵数
    CLOUD_MAX_NUM: 6,
    // 出现频率
    CLOUD_FREQUENCY: 0.5,
    // 云朵速度
    CLOUD_SPEED: 1,

    // 星星数量
    STAR_NUM: 2,
    // 星星速度
    STAR_SPEED: 0.2,
    // 星星在画布上的最大Y坐标
    STAR_MAX_Y: 70,

    // 月亮移动速度
    MOON_SPEED: 0.1,
};
// 储存云朵
SkyManager.clouds = [];
// 储存的星星
SkyManager.stars = [];
// 月亮
SkyManager.moon = null;
// 云朵管理的原型方法
SkyManager.prototype = {
    // 初始化
    init: function() {
        // 初始化星星
        for(let i = 0; i < SkyManager.config.STAR_NUM; i++) {
            var star = new Star(this.canvas, this.sprite.STAR, this.containerWidth);
            SkyManager.stars.push(star);
        }
        // 初始化月亮
        SkyManager.moon = new Moon(this.canvas, this.sprite.MOON, this.containerWidth);
    },
    // 放置星星 生成位置
    placeStars: function() {
        // 画布分组 每组宽度
        var segmentSize = Math.round(this.containerWidth / SkyManager.config.STAR_NUM);
        for(let i = 0; i < SkyManager.config.STAR_NUM; i++) {
            var pos = {};
            pos.x = getRandomNum(segmentSize * i, segmentSize * (i + 1));
            pos.y = getRandomNum(0, SkyManager.config.STAR_MAX_Y);
            SkyManager.stars[i].init(pos);
        }
    },
    // 添加云朵到数组
    addCloud: function() {
        var cloud = new Cloud(this.canvas, this.sprite.CLOUD, this.containerWidth);
        SkyManager.clouds.push(cloud);
    },
    // 绘制
    draw: function() {
        this.ctx.save();
        // 绘制云朵
        SkyManager.clouds.forEach((item) => {
            item.draw();
        });
        if(this.opacity > 0) {
            // 画布透明度
            this.ctx.globalAlpha = this.opacity;
            // 绘制星星
            if(this.drawStars) {
                SkyManager.stars.forEach((item) => {
                    item.draw();
                });
            }
            // 绘制月亮
            SkyManager.moon.draw();
            this.ctx.globalAlpha = 1;
        }
        this.ctx.restore();
    },
    // 更新
    update: function() {
        // 更新云朵
        var cloudsNum = SkyManager.clouds.length;
        // 有云朵
        if(cloudsNum) {
            SkyManager.clouds.forEach((item) => {
                item.update(SkyManager.config.CLOUD_SPEED);
            })
            var lastCloud = SkyManager.clouds[cloudsNum - 1];
            // 判断是否生成云朵 云朵大于间距 存在的云朵小于最大云朵数
            if(cloudsNum < SkyManager.config.CLOUD_MAX_NUM &&
                (this.containerWidth - lastCloud.xPos) > lastCloud.cloudGap &&
                Math.random() < SkyManager.config.CLOUD_FREQUENCY) {
                this.addCloud();
            }
            // 过滤已经移出画布的云朵
            SkyManager.clouds = SkyManager.clouds.filter((item) => {
                return !item.remove;
            });
        }else {
            if(Math.random() < SkyManager.config.CLOUD_FREQUENCY) {
                this.addCloud();
            }
        }
        // 进入夜晚，且opacity为0
        if(this.inverted && this.opacity == 0) {
            // 更新月相
            SkyManager.moon.updatePhase();
            // 放置星星
            this.placeStars();
        }
        // 淡入
        if(this.inverted && this.opacity < 1) {
            this.opacity += SkyManager.config.FADE_SPEED;
            this.opacity = this.opacity > 1 ? 1 : this.opacity;
        // 淡出
        }else if(!this.inverted && this.opacity > 0) {
            this.opacity -= SkyManager.config.FADE_SPEED;
            this.opacity =  this.opacity < 0 ? 0 : this.opacity;
        }
        // opacity大于0时移动月亮和星星
        if(this.opacity > 0) {
            SkyManager.moon.update(SkyManager.config.MOON_SPEED);
            if(this.drawStars) {
                SkyManager.stars.forEach((item) => {
                    item.update(SkyManager.config.STAR_SPEED);
                })
            }
        }
        this.draw();
    },
    // 昼夜交替
    invert: function(speed) {
        if(this.dayNightCycle) {
            this.invertTimer += speed;
            if(this.inverted) {
                // 切换到白天
                if(this.invertTimer > SkyManager.config.NIGHT_DURATION) {
                    this.invertTimer -= SkyManager.config.NIGHT_DURATION;
                    this.inverted = false;
                    $(".game-body").removeClass("inverted");
                    
                }
            }else {
                // 切换到夜晚
                if(this.invertTimer > SkyManager.config.DAY_DURATION) {
                    this.invertTimer -= SkyManager.config.DAY_DURATION;
                    this.inverted = true;
                    $(".game-body").addClass("inverted");
                }
            }
        }
        this.update();
    },
    reset: function() {

    }
}