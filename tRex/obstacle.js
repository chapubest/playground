// 障碍物管理
function ObstacleManager(canvas, containerWidth) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.containerWidth = containerWidth;
    // 障碍物列表
    this.obstacles = [];
}
// 障碍物 设置
ObstacleManager.config = {
    // 障碍物最大间距系数
    MAX_GAP_COEFFICIENT: 1.5,
    // 每组障碍物最大数量
    MAX_OBSTACLE_LENGTH: 4,
    // 相邻障碍物类型最大重复数
    MAX_OBSTACLE_DUPLICATION: 2
};
ObstacleManager.prototype =  {
    addNewObstacle: function(type) {
        var obstacle = new Obstacle(this.canvas, this.containerWidth, type);
        this.obstacles.push(obstacle);
    },
    // 更新障碍物
    update: function(speed) {
        var obstaclesNum = this.obstacles.length;
        // 有障碍物
        if(obstaclesNum) {
            this.obstacles.forEach((item) => {
                item.update(speed);
            })
            let type = Obstacle.types[getRandomNum(0, Obstacle.types.length - 1)];
            var lastObstacle = this.obstacles[obstaclesNum - 1];
            if (type.minSpeed < speed &&
                this.duplicateObstacleCheck(type.type) &&
                (this.containerWidth - lastObstacle.xPos - lastObstacle.width) > lastObstacle.gap) {
                this.addNewObstacle(type);
            }
            // 过滤已经移出画布的障碍物
            this.obstacles = this.obstacles.filter((item) => {
                return !item.remove;
            });
        }else {
            let type = Obstacle.types[getRandomNum(0, Obstacle.types.length - 1)];
            if(type.minSpeed < speed) {
                this.addNewObstacle(type);
            }
        }
    },
    duplicateObstacleCheck: function(nextObstacleType) {
        var duplicateCount = 0;
        for(var i = this.obstacles.length - 1; i >= 0; i--) {
            duplicateCount = this.obstacles[i].type === nextObstacleType ? duplicateCount + 1 : 0;
        }
        return duplicateCount <= ObstacleManager.config.MAX_OBSTACLE_DUPLICATION;
    }
};

// 障碍物
// canvas 画布 containerWidth 容器宽度 type 类型
function Obstacle(canvas, containerWidth, type) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.containerWidth = containerWidth;
    this.typeConfig = type;
    this.spritePos = type.spritePos;
    this.size = 0;
    // 障碍物是否可移除
    this.remove = false;
    this.sourceXPos = [];
    this.xPos = 0;
    this.yPos = 0;
    // 改组障碍物的整体宽度
    this.width = 0;
    this.gap = 100;
    // 速度修正
    this.speedOffset = 0;
    // 障碍物的动画帧
    this.currentFrame = 0;
    // 动画帧切换计时器
    this.timer = 0;
    this.init();
}
// 障碍物 类型
Obstacle.types = [
    {
        // 小仙人掌
        type: "CACTUS_SAMLL",
        width: 17,
        height: 35,
        yPos: 105,
        multipleType: 6,
        minGap: 120,
        minSpeed: 0,
        spritePos: {x: 228, y: 2}
    },
    {
        // 大仙人掌
        type: "CACTUS_LAGRGE",
        width: 25,
        height: 50,
        yPos: 90,
        multipleType: 6,
        minGap: 120,
        minSpeed: 0,
        spritePos: {x: 332, y: 2}
    },
    {
        // 翼龙
        type: "PTERODACTYL",
        width: 46,
        height: 40,
        // 有高中低三种高度
        yPos: [100, 75, 50],
        multipleSpeed: 1,
        minGap: 150,
        minSpeed: 8.5,
        // 有两个动画帧
        numFrames: 2,
        // 动画帧切换速率 秒6帧
        frameRate: 6,
        // 速度修正
        speedOffset: 0.8,
        spritePos: {x: 134, y: 2}
    }
];
// 障碍物原型链方法
Obstacle.prototype = {
    // 初始化障碍物
    init: function() {
        this.xPos = this.containerWidth;
        this.size = getRandomNum(1, ObstacleManager.config.MAX_OBSTACLE_LENGTH);
        // 随机障碍是翼龙时 只出现一只
        if(this.size > 1 && this.typeConfig.type == "PTERODACTYL") {
            this.size = 1;
        }
        for (let i=0; i<this.size; i++) { 
            this.sourceXPos.push(this.spritePos.x + i * this.typeConfig.width);
        }
        // 障碍物总宽度
        this.width = this.typeConfig.width * this.size;
        // 如果障碍物纵坐标为数组
        if(Array.isArray(this.typeConfig.yPos)) {
            var yPosConfig = this.typeConfig.yPos;
            this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];
        }else {
            this.yPos = this.typeConfig.yPos;
        }
    },
    // 绘制障碍物
    draw: function() {
        for (let i=0; i<this.size; i++) {
            let sourceWidth = this.typeConfig.width;
            let sourceHeight = this.typeConfig.height;
            if (this.typeConfig.numFrames) {
                var sourceXPos = this.sourceXPos[i];
            } else {
                var sourceXPos = this.sourceXPos[i] + this.currentFrame * this.typeConfig.width;
            }
            this.ctx.drawImage(imgSprite,
                // 图片开始裁剪的坐标
                sourceXPos, this.spritePos.y,
                // 图片被裁剪的宽高
                sourceWidth, sourceHeight,
                // 画布开始绘制的坐标
                this.xPos + i * sourceWidth, this.yPos,
                // 画布绘制的宽高
                sourceWidth, sourceHeight);
        }
    },
    // 更新障碍物
    update: function(speed) {
        if(!this.remove) {
            this.xPos -= speed;
            if (this.typeConfig.numFrames) {
                this.timer += 1;
                if (this.timer >= this.typeConfig.frameRate) {
                    this.currentFrame = this.currentFrame == this.typeConfig.numFrames - 1 ? 0 : this.currentFrame + 1;
                    this.timer = 0;
                }
            }
            this.draw();
            if(!this.isVisible()) {
                this.remove = true;
            }
        }
    },
    // 判断障碍物是否移出画布
    isVisible: function() {
        return this.xPos + this.width > 0;
    },
}