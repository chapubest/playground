// 车牌区域 selector 注入车牌的地方（必填） head 默认车牌头
function LicensePlateArea(selector, head) {
    // 选择器
    this.selector = selector;
    // 车牌头
    this.head = head || LicensePlateArea.option.DEFAULT_HEAD;
    // 是否可以对车牌进行编辑
    this.editAble = LicensePlateArea.option.EDIT_ABLE;
    // 车牌编辑区域
    this.editArea = null;
    // 车牌头选择区域
    this.selectArea = null;
    // 初始化
    this.load();
    
}
LicensePlateArea.option = {
    EDIT_ABLE: true,
    DEFAULT_HEAD: "皖A",
    FIRST_ALLOW: ["皖", "浙", "沪", "京", "津", "渝", "冀", "豫", "云", "辽", "黑", "湘", "鲁", "新", "苏", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "青", "藏", "川", "宁", "琼", "临", "无", "警", "学", "B", "C", "G", "H", "Y", "J", "K", "L", "N", "S", "W"],
    SECOND_ALLOW: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}
LicensePlateArea.prototype = {
    // 初始化 注入html
    load: function() {
        // 注入车牌编辑区域
        this.editArea = $(`<div class="component-license-plate-area">
            <div class="select head">
                <div></div>
            </div>
            <img class="icon" src="./lianjie@2x.png">
            <div class="input number" tabindex="0">
                <div></div>
            </div>
            <div class="input number" tabindex="0">
                <div></div>
            </div>
            <div class="input number" tabindex="0">
                <div></div>
            </div>
            <div class="input number" tabindex="0">
                <div></div>
            </div>
            <div class="input number" tabindex="0">
                <div></div>
            </div>
            <div class="input number" tabindex="0">
                <div></div>
            </div>
        </div>`);
        // 设置车牌头
        $(this.editArea).find(".head>div").text(this.head);
        $(this.selector).empty();
        $(this.selector).append(this.editArea);
        // 注入车牌头选项区域
        this.selectArea = $(`<div class="component-license-plate-head-select" style="display: none;">
            <div class="group first"></div>
            <div class="group second"></div>
        </div>`);
        LicensePlateArea.option.FIRST_ALLOW.forEach((item) => {
            this.selectArea.children(".first").append(`<span>${item}</span>`);
        });
        LicensePlateArea.option.SECOND_ALLOW.forEach((item) => {
            this.selectArea.children(".second").append(`<span>${item}</span>`);
        });
        this.selectArea.children(".second").append(`<div class="btn close">关闭</div>`);
        this.selectArea.css("width", $(this.selector).innerWidth());
        $(this.selector).next(".component-license-plate-head-select").remove();
        $(this.selector).after(this.selectArea);
        // 绑定事件和状态
        if (this.editAble) {
            this.setHeadOptionStatus();
            this.addListener();
        }
    },
    onNumberKeyDown: function(event) {
        let currentVal = $(event.target).children("div").text();
        let keyCode = event.keyCode;
        if (keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode<=90) {
            $(event.target).children("div").text(event.key);
            $(event.target).next().focus();
            // 移动到最后一个
            if ($(event.target).next().length === 0) {
                this.onNumberInputOver();
            }
        } else if (keyCode == 8) {
            if (currentVal == "") {
                $(event.target).prev().focus();
            } else {
                $(event.target).children("div").text("");
            }
        } else if (keyCode == 37) {
            // 左方向键
            $(event.target).prev().focus();
        } else  if (keyCode == 39) {
            // 右方向键
            $(event.target).next().focus();
            // 移动到最后一个
            if ($(event.target).next().length === 0) {
                this.onNumberInputOver();
            }
        }
    },
    // 当车牌输入完成时触发
    onNumberInputOver: function() {
        if (this.check()) {
            this.editArea.children(".number").last().blur();
            this.autoSetNumber();
        } else {
            this.editArea.children(".number").last().focus();
        }
    },
    // 检查输入车牌
    check: function() {
        let num = 0;
        this.editArea.find(".number>div").each((index, item) => {
            if ($(item).text() != "") {
                num++;
            }
        });
        return num == 5 || num == 6;
    },
    autoSetNumber: function() {
        let licenseStr = this.getLicense();
        this.setLicense(licenseStr);
    },
    clearNumber: function() {
        this.editArea.find(".number>div").text("");
    },
    enable: function() {
        if (!this.able) {
            this.able = true;
            this.addListener();
        }
    },
    disable: function() {
        if (this.able) {
            this.able = false;
            this.clearListener();
        }
    },
    onNumberFocus: function(event) {
        this.selectArea.slideUp();
    },
    onBtnCloseClick: function(event) {
        this.selectArea.slideUp();
    },
    onNumberBlur: function(event) {
        let currentVal = $(event.target).children("div").text();
        currentVal = currentVal.toUpperCase();
        currentVal = currentVal.replace(/\s/g,"");
        $(event.target).children("div").text(currentVal);
    },
    // 点击选择车牌头
    onHeadSelectClick: function(event) {
        this.selectArea.slideToggle();
        event.stopPropagation();
    },
    onFirstHeadClick: function(event) {
        let firstGroupSpans = this.selectArea.find(".first>span");
        let secondGroupSpans = this.selectArea.find(".second>span");
        firstGroupSpans.removeClass("active");
        secondGroupSpans.removeClass("active");
        $(event.target).addClass("active");
        if ($(event.target).text() == "临" || $(event.target).text() == "无") {
        } else {
            secondGroupSpans.first().addClass("active");
        }
        this.setHeadByActiveOption();
    },
    onSecondHeadClick: function(event) {
        if (this.canSecondGroupAble()) {
            let secondGroupSpans = this.selectArea.find(".second>span");
            secondGroupSpans.removeClass("active");
            $(event.target).addClass("active");
            this.setHeadByActiveOption();
        }
    },
    // 根据选项设置车牌头
    setHeadByActiveOption: function() {
        let firstHead = this.selectArea.find(".first>.active").text();
        let secondHead = this.selectArea.find(".second>.active").text();
        this.head = firstHead + secondHead;
        this.editArea.find(".head>div").text(this.head);
    },
    // 设置车牌头选项选择状态
    setHeadOptionStatus: function() {
        let firstGroupSpans = this.selectArea.find(".first>span");
        let secondGroupSpans = this.selectArea.find(".second>span");
        firstGroupSpans.removeClass("active");
        secondGroupSpans.removeClass("active");
        firstGroupSpans.each((index, item) => {
            if($(item).text() == this.head[0]) {
                $(item).addClass("active");
            }
        });
        if (this.canSecondGroupAble()) {
            secondGroupSpans.each((index, item) => {
                if($(item).text() == this.head[1]) {
                    $(item).addClass("active");
                }
            });
        }
    },
    canSecondGroupAble: function() {
        if (this.head[0] == "临" || this.head[0] == "无") {
            return false;
        } else {
            return true;
        }
    },
    addListener: function() {
        this.editArea.children(".number").on("keydown", this.onNumberKeyDown.bind(this));
        this.editArea.children(".number").on("focus", this.onNumberFocus.bind(this));
        this.editArea.children(".number").on("blur", this.onNumberBlur.bind(this));
        this.editArea.children(".head").on("click", this.onHeadSelectClick.bind(this));
        this.selectArea.find(".second>.btn.close").on("click", this.onBtnCloseClick.bind(this));
        this.selectArea.find(".first>span").on("click", this.onFirstHeadClick.bind(this));
        this.selectArea.find(".second>span").on("click", this.onSecondHeadClick.bind(this));
    },
    clearListener: function() {
        this.editArea.children(".number").off("keydown");
        this.editArea.children(".number").off("focus");
        this.editArea.children(".number").off("blur");
        this.editArea.children(".head").off("click");
        this.selectArea.find(".second>.btn.close").off("click");
        this.selectArea.find(".first>span").off("click");
        this.selectArea.find(".second>span").off("click");
    },
    // 获取车牌
    getLicense: function() {
        let licenseStr = this.head;
        this.editArea.find(".number>div").each((index, item) => {
            licenseStr += $(item).text();
        });
        return licenseStr.toUpperCase();
    },
    // 设置车牌
    setLicense: function(licenseStr) {
        let numberStr = "";
        if (licenseStr[0] == "临" || licenseStr[1] == "无") {
            this.head = licenseStr.substring(0,1);
            numberStr = licenseStr.substring(1);
        } else {
            this.head = licenseStr.substring(0,2);
            numberStr = licenseStr.substring(2);
        }
        this.clearNumber();
        this.editArea.find(".number>div").each((index, item) => {
            if (index < numberStr.length) {
                $(item).text(numberStr[index]);
            }
        });
    }
}
$(document).ready(function() {
    $("head").append(`<link href="./license-plate-area.css?v=0.99.0917.002" rel="stylesheet" type="text/css" />`);
});