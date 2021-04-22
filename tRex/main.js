// 雪碧图各元素位置
var spriteDefinition = {
    HORIZONLINE: {x: 2, y: 54}, // 地面
    CLOUD: {x: 86, y: 2}, // 云朵
    MOON: {x: 484, y: 2}, // 月亮
    STAR: {x: 645, y: 2} // 星星
}
var canvas = $("canvas")[0];
var imgSprite = $("#imgSprite")[0];
var game = new Game();
var title = document.title;

jQuery(document).ready(function($) {
    game.init(canvas, imgSprite, spriteDefinition);
    game.start();
    $(window).on("blur", function() {
        document.title = "暂停中...";
        game.pause();
    });
    $(window).on("focus", function() {
        document.title = title;
        game.continue();
    });
})