$(".index-bar").height($(window).height() - $(".head").height())

$(".index-bar-sidebar").on("touchstart", handleSideBarTouchStart);
$(".index-bar-sidebar").on("touchmove", handleSideBarTouchMove);
$(".index-bar-sidebar").on("touchend", handleSideBarTouchEnd);
$(".index-bar-content").on("scroll", handleIndexBarContentScroll);
function handleSideBarTouchStart(event) {
    var touch = event.targetTouches[0];
    getTouchIndex(touch);
    $(".index-bar-current").stop(true, true).fadeIn();
}
function handleSideBarTouchMove(event) {
    var touch = event.targetTouches[0];
    getTouchIndex(touch);
}
function getTouchIndex(touch) {
    var index = 0;
    if (touch.clientY < $(".index-bar-sidebar").offset().top) {
        index = 0;
    } else {
        index = Math.floor((touch.clientY + $(".index-bar-sidebar").scrollTop() - $(".index-bar-sidebar").offset().top) / $(".index-bar-sidebar .index").height())
        index = Math.min(index, $(".index-bar-sidebar").children().length -1)
    }
    var target = $(".index-bar-sidebar .index").eq(index);
    $(".index-bar-index-active").removeClass("index-bar-index-active");
    target.addClass("index-bar-index-active");
    var indexText = target.text();
    $(".index-bar-current").text(indexText);
    var top = target.offset().top - $(".index-bar").offset().top - 35 + $(".index-bar-sidebar .index").height() / 2;
    $(".index-bar-current").css({
        top: $(".index-bar-content").offset().top
    })
    var currentAnchor = $(".index-anchor").parent().eq(index);
    console.log()
    $(".index-bar-content").scrollTop(currentAnchor[0].offsetTop)
}
function handleSideBarTouchEnd(event) {
    $(".index-bar-current").stop(true, true).fadeOut();
}

function handleIndexBarContentScroll(event) {
    var target = $(event.currentTarget);
    var anchor = $(".index-anchor").parent();
    var currentIndex = -1;
    anchor.each(function(index, item) {
        var offset = item.offsetTop;
        if (target.scrollTop() >= offset) {
            currentIndex = index;
        }
    })
    $(".index-anchor-fixed").removeClass("index-anchor-fixed");
    anchor.css({
        height: ""
    })
    if (currentIndex >= 1) {
        anchor.eq(currentIndex).css({
            height: "32px"
        })
        anchor.eq(currentIndex).children().addClass("index-anchor-fixed");
    }
    $(".index-bar-index-active").removeClass("index-bar-index-active");
    $(".index-bar-sidebar .index").eq(Math.max(0, currentIndex)).addClass("index-bar-index-active");
}