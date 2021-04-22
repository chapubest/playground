"use strict";
// local test
var contentHeight = $(window).height() - 30 - 10;
$(function() {
    registerPopup("#inputBrand");
})
var fake = `{"RECORD":[{"CarBrandFirstWord":"A","CarBrand":"奥迪","BrandImage":"CarBrand/AoDi.jpg"},{"CarBrandFirstWord":"A","CarBrand":"阿尔法罗密欧","BrandImage":"CarBrand/AErFaLuoMiOu.jpg"},{"CarBrandFirstWord":"A","CarBrand":"阿斯顿・马丁","BrandImage":"CarBrand/ASiDunMaDing.jpg"},{"CarBrandFirstWord":"A","CarBrand":"安凯客车","BrandImage":"CarBrand/AnKaiKeChe.jpg"},{"CarBrandFirstWord":"B","CarBrand":"保时捷","BrandImage":"CarBrand/BaoShiJie.jpg"},{"CarBrandFirstWord":"B","CarBrand":"宝马","BrandImage":"CarBrand/BaoMa.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北汽幻速","BrandImage":"CarBrand/BeiQiHuanSu.jpg"},{"CarBrandFirstWord":"B","CarBrand":"奔腾","BrandImage":"CarBrand/BenTeng.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北汽制造","BrandImage":"CarBrand/BeiQiZhiZao.jpg"},{"CarBrandFirstWord":"B","CarBrand":"巴博斯","BrandImage":"CarBrand/BaBoSi.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北京","BrandImage":"CarBrand/BeiJing.jpg"},{"CarBrandFirstWord":"B","CarBrand":"宝骏","BrandImage":"CarBrand/BaoJun.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北汽新能源","BrandImage":"CarBrand/BeiQiXinNengYuan.jpg"},{"CarBrandFirstWord":"B","CarBrand":"奔驰","BrandImage":"CarBrand/BenChi.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北汽威旺","BrandImage":"CarBrand/BeiQiWeiWang.jpg"},{"CarBrandFirstWord":"B","CarBrand":"布加迪","BrandImage":"CarBrand/BuJiaDi.jpg"},{"CarBrandFirstWord":"B","CarBrand":"标致","BrandImage":"CarBrand/BiaoZhi.jpg"},{"CarBrandFirstWord":"B","CarBrand":"别克","BrandImage":"CarBrand/BieKe.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北京汽车", "IsHot":true,"BrandImage":"CarBrand/BeiJingQiChe.jpg"},{"CarBrandFirstWord":"B","CarBrand":"宾利","BrandImage":"CarBrand/BinLi.jpg"},{"CarBrandFirstWord":"B","CarBrand":"北汽绅宝","BrandImage":"CarBrand/BeiQiShenBao.jpg"},{"CarBrandFirstWord":"B","CarBrand":"本田","BrandImage":"CarBrand/BenTian.jpg"},{"CarBrandFirstWord":"B","CarBrand":"比亚迪","BrandImage":"CarBrand/BiYaDi.jpg", "IsHot":true},{"CarBrandFirstWord":"C","CarBrand":"成功汽车","BrandImage":"CarBrand/ChengGongQiChe.jpg"},{"CarBrandFirstWord":"C","CarBrand":"长安","BrandImage":"CarBrand/ChangAn.jpg"},{"CarBrandFirstWord":"C","CarBrand":"昌河","BrandImage":"CarBrand/ChangHe.jpg"},{"CarBrandFirstWord":"C","CarBrand":"长安商用", "IsHot":true,"BrandImage":"CarBrand/ChangAnShangYong.jpg"},{"CarBrandFirstWord":"C","CarBrand":"长城","BrandImage":"CarBrand/ChangCheng.jpg"},{"CarBrandFirstWord":"D","CarBrand":"Dacia","BrandImage":"CarBrand/Dacia.jpg"},{"CarBrandFirstWord":"D","CarBrand":"东南","BrandImage":"CarBrand/DongNan.jpg"},{"CarBrandFirstWord":"D","CarBrand":"东风风行","BrandImage":"CarBrand/DongFengFengXing.jpg"},{"CarBrandFirstWord":"D", "IsHot":true,"CarBrand":"东风风度","BrandImage":"CarBrand/DongFengFengDu.jpg"},{"CarBrandFirstWord":"D","CarBrand":"大发","BrandImage":"CarBrand/DaFa.jpg"},{"CarBrandFirstWord":"D","CarBrand":"DS","BrandImage":"CarBrand/DS.jpg", "IsHot":true},{"CarBrandFirstWord":"D","CarBrand":"道奇","BrandImage":"CarBrand/DaoQi.jpg"},{"CarBrandFirstWord":"D", "IsHot":true,"CarBrand":"东风","BrandImage":"CarBrand/DongFeng.jpg"},{"CarBrandFirstWord":"D","CarBrand":"东风风神","BrandImage":"CarBrand/DongFengFengShen.jpg"},{"CarBrandFirstWord":"D","CarBrand":"东风小康","BrandImage":"CarBrand/DongFengXiaoKang.jpg"},{"CarBrandFirstWord":"D","CarBrand":"大众","BrandImage":"CarBrand/DaZhong.jpg"},{"CarBrandFirstWord":"F","CarBrand":"福田","BrandImage":"CarBrand/FuTian.jpg"},{"CarBrandFirstWord":"F","CarBrand":"福汽启腾","BrandImage":"CarBrand/FuQiQiTeng.jpg"},{"CarBrandFirstWord":"F","CarBrand":"丰田","BrandImage":"CarBrand/FengTian.jpg"},{"CarBrandFirstWord":"F","CarBrand":"福迪","BrandImage":"CarBrand/FuDi.jpg"},{"CarBrandFirstWord":"F","CarBrand":"菲亚特","BrandImage":"CarBrand/FeiYaTe.jpg"},{"CarBrandFirstWord":"F","CarBrand":"福特","BrandImage":"CarBrand/FuTe.jpg"},{"CarBrandFirstWord":"F","CarBrand":"法拉利","BrandImage":"CarBrand/FaLaLi.jpg"},{"CarBrandFirstWord":"F","CarBrand":"Fisker", "IsHot":true,"BrandImage":"CarBrand/Fisker.jpg"},{"CarBrandFirstWord":"G","CarBrand":"GMC","BrandImage":"CarBrand/GMC.jpg"},{"CarBrandFirstWord":"G","CarBrand":"广汽传祺","BrandImage":"CarBrand/GuangQiChuanZuo.jpg"},{"CarBrandFirstWord":"G","CarBrand":"光冈","BrandImage":"CarBrand/GuangGang.jpg"},{"CarBrandFirstWord":"G","CarBrand":"Gumpert","BrandImage":"CarBrand/Gumpert.jpg"},{"CarBrandFirstWord":"G","CarBrand":"观致","BrandImage":"CarBrand/GuanZhi.jpg"},{"CarBrandFirstWord":"G","CarBrand":"广汽吉奥","BrandImage":"CarBrand/GuangQiJiAo.jpg"},{"CarBrandFirstWord":"H","CarBrand":"海马","BrandImage":"CarBrand/HaiMa.jpg"},{"CarBrandFirstWord":"H","CarBrand":"Hennessey","BrandImage":"CarBrand/Hennessey.jpg"},{"CarBrandFirstWord":"H","CarBrand":"华颂","BrandImage":"CarBrand/HuaSong.jpg"},{"CarBrandFirstWord":"H","CarBrand":"哈弗","BrandImage":"CarBrand/HaFu.jpg"},{"CarBrandFirstWord":"H","CarBrand":"红旗","BrandImage":"CarBrand/HongQi.jpg"},{"CarBrandFirstWord":"H","CarBrand":"华普","BrandImage":"CarBrand/HuaPu.jpg"},{"CarBrandFirstWord":"H","CarBrand":"恒天","BrandImage":"CarBrand/HengTian.jpg"},{"CarBrandFirstWord":"H","CarBrand":"华骐","BrandImage":"CarBrand/HuaZuo.jpg"},{"CarBrandFirstWord":"H","CarBrand":"哈飞","BrandImage":"CarBrand/HaFei.jpg"},{"CarBrandFirstWord":"H","CarBrand":"海格","BrandImage":"CarBrand/HaiGe.jpg"},{"CarBrandFirstWord":"H","CarBrand":"黄海","BrandImage":"CarBrand/HuangHai.jpg"},{"CarBrandFirstWord":"H","CarBrand":"华泰","BrandImage":"CarBrand/HuaTai.jpg"},{"CarBrandFirstWord":"H","CarBrand":"悍马","BrandImage":"CarBrand/HanMa.jpg"},{"CarBrandFirstWord":"J","CarBrand":"金龙","BrandImage":"CarBrand/JinLong.jpg"},{"CarBrandFirstWord":"J","CarBrand":"江铃","BrandImage":"CarBrand/JiangLing.jpg"},{"CarBrandFirstWord":"J","CarBrand":"九龙","BrandImage":"CarBrand/JiuLong.jpg"},{"CarBrandFirstWord":"J","CarBrand":"金旅","BrandImage":"CarBrand/JinLv.jpg"},{"CarBrandFirstWord":"J","CarBrand":"吉利汽车","BrandImage":"CarBrand/JiLiQiChe.jpg"},{"CarBrandFirstWord":"J","CarBrand":"Jeep","BrandImage":"CarBrand/Jeep.jpg"},{"CarBrandFirstWord":"J","CarBrand":"江铃集团轻汽","BrandImage":"CarBrand/JiangLingJiTuanQingQi.jpg"},{"CarBrandFirstWord":"J","CarBrand":"捷豹","BrandImage":"CarBrand/JieBao.jpg"},{"CarBrandFirstWord":"J","CarBrand":"金杯","BrandImage":"CarBrand/JinBei.jpg"},{"CarBrandFirstWord":"J","CarBrand":"江淮","BrandImage":"CarBrand/JiangHuai.jpg"},{"CarBrandFirstWord":"K","CarBrand":"凯翼","BrandImage":"CarBrand/KaiYi.jpg"},{"CarBrandFirstWord":"K","CarBrand":"卡尔森","BrandImage":"CarBrand/KaErSen.jpg"},{"CarBrandFirstWord":"K","CarBrand":"康迪","BrandImage":"CarBrand/KangDi.jpg"},{"CarBrandFirstWord":"K","CarBrand":"卡升","BrandImage":"CarBrand/KaSheng.jpg"},{"CarBrandFirstWord":"K","CarBrand":"凯迪拉克","BrandImage":"CarBrand/KaiDiLaKe.jpg"},{"CarBrandFirstWord":"K","CarBrand":"开瑞","BrandImage":"CarBrand/KaiRui.jpg"},{"CarBrandFirstWord":"K","CarBrand":"凯佰赫","BrandImage":"CarBrand/KaiBaiHe.jpg"},{"CarBrandFirstWord":"K","CarBrand":"卡威","BrandImage":"CarBrand/KaWei.jpg"},{"CarBrandFirstWord":"K","CarBrand":"科尼赛克","BrandImage":"CarBrand/KeNiSaiKe.jpg"},{"CarBrandFirstWord":"K","CarBrand":"克莱斯勒","BrandImage":"CarBrand/KeLaiSiLe.jpg"},{"CarBrandFirstWord":"K","CarBrand":"KTM","BrandImage":"CarBrand/KTM.jpg"},{"CarBrandFirstWord":"L","CarBrand":"陆地方舟","BrandImage":"CarBrand/LuDiFangZhou.jpg"},{"CarBrandFirstWord":"L","CarBrand":"劳斯莱斯","BrandImage":"CarBrand/LaoSiLaiSi.jpg"},{"CarBrandFirstWord":"L","CarBrand":"雷丁","BrandImage":"CarBrand/LeiDing.jpg"},{"CarBrandFirstWord":"L","CarBrand":"理念","BrandImage":"CarBrand/LiNian.jpg"},{"CarBrandFirstWord":"L","CarBrand":"莲花汽车","BrandImage":"CarBrand/LianHuaQiChe.jpg"},{"CarBrandFirstWord":"L","CarBrand":"力帆","BrandImage":"CarBrand/LiFan.jpg"},{"CarBrandFirstWord":"L","CarBrand":"兰博基尼","BrandImage":"CarBrand/LanBoJiNi.jpg"},{"CarBrandFirstWord":"L","CarBrand":"LOCAL MOTORS","BrandImage":"CarBrand/LOCAL_MOTORS.jpg"},{"CarBrandFirstWord":"L","CarBrand":"路虎","BrandImage":"CarBrand/LuHu.jpg"},{"CarBrandFirstWord":"L","CarBrand":"林肯","BrandImage":"CarBrand/LinKen.jpg"},{"CarBrandFirstWord":"L","CarBrand":"陆风","BrandImage":"CarBrand/LuFeng.jpg"},{"CarBrandFirstWord":"L","CarBrand":"雷克萨斯","BrandImage":"CarBrand/LeiKeSaSi.jpg"},{"CarBrandFirstWord":"L","CarBrand":"铃木","BrandImage":"CarBrand/LingMu.jpg"},{"CarBrandFirstWord":"L","CarBrand":"劳伦士","BrandImage":"CarBrand/LaoLunShi.jpg"},{"CarBrandFirstWord":"L","CarBrand":"猎豹汽车","BrandImage":"CarBrand/LieBaoQiChe.jpg"},{"CarBrandFirstWord":"L","CarBrand":"雷诺","BrandImage":"CarBrand/LeiNuo.jpg"},{"CarBrandFirstWord":"L","CarBrand":"路特斯","BrandImage":"CarBrand/LuTeSi.jpg"},{"CarBrandFirstWord":"M","CarBrand":"摩根","BrandImage":"CarBrand/MoGen.jpg"},{"CarBrandFirstWord":"M","CarBrand":"MINI","BrandImage":"CarBrand/MINI.jpg"},{"CarBrandFirstWord":"M","CarBrand":"迈巴赫","BrandImage":"CarBrand/MaiBaHe.jpg"},{"CarBrandFirstWord":"M","CarBrand":"玛莎拉蒂","BrandImage":"CarBrand/MaShaLaDi.jpg"},{"CarBrandFirstWord":"M","CarBrand":"马自达","BrandImage":"CarBrand/MaZiDa.jpg"},{"CarBrandFirstWord":"M","CarBrand":"MG","BrandImage":"CarBrand/MG.jpg"},{"CarBrandFirstWord":"M","CarBrand":"迈凯伦","BrandImage":"CarBrand/MaiKaiLun.jpg"},{"CarBrandFirstWord":"N","CarBrand":"Noble","BrandImage":"CarBrand/Noble.jpg"},{"CarBrandFirstWord":"N","CarBrand":"纳智捷","BrandImage":"CarBrand/NaZhiJie.jpg"},{"CarBrandFirstWord":"N","CarBrand":"南京金龙","BrandImage":"CarBrand/NanJingJinLong.jpg"},{"CarBrandFirstWord":"O","CarBrand":"欧宝","BrandImage":"CarBrand/OuBao.jpg"},{"CarBrandFirstWord":"O","CarBrand":"欧朗","BrandImage":"CarBrand/OuLang.jpg"},{"CarBrandFirstWord":"P","CarBrand":"帕加尼","BrandImage":"CarBrand/PaJiaNi.jpg"},{"CarBrandFirstWord":"P","CarBrand":"佩奇奥","BrandImage":"CarBrand/PeiQiAo.jpg"},{"CarBrandFirstWord":"Q","CarBrand":"起亚","BrandImage":"CarBrand/QiYa.jpg"},{"CarBrandFirstWord":"Q","CarBrand":"启辰","BrandImage":"CarBrand/QiChen.jpg"},{"CarBrandFirstWord":"Q","CarBrand":"奇瑞","BrandImage":"CarBrand/QiRui.jpg"},{"CarBrandFirstWord":"R","CarBrand":"日产","BrandImage":"CarBrand/RiChan.jpg"},{"CarBrandFirstWord":"R","CarBrand":"如虎","BrandImage":"CarBrand/RuHu.jpg"},{"CarBrandFirstWord":"R","CarBrand":"瑞麒","BrandImage":"CarBrand/RuiZuo.jpg"},{"CarBrandFirstWord":"R","CarBrand":"荣威","BrandImage":"CarBrand/RongWei.jpg"},{"CarBrandFirstWord":"S","CarBrand":"绅宝","BrandImage":"CarBrand/ShenBao.jpg"},{"CarBrandFirstWord":"S","CarBrand":"思铭","BrandImage":"CarBrand/SiMing.jpg"},{"CarBrandFirstWord":"S","CarBrand":"SSC","BrandImage":"CarBrand/SSC.jpg"},{"CarBrandFirstWord":"S","CarBrand":"斯达泰克","BrandImage":"CarBrand/SiDaTaiKe.jpg"},{"CarBrandFirstWord":"S","CarBrand":"smart","BrandImage":"CarBrand/smart.jpg"},{"CarBrandFirstWord":"S","CarBrand":"上汽大通","BrandImage":"CarBrand/ShangQiDaTong.jpg"},{"CarBrandFirstWord":"S","CarBrand":"斯巴鲁","BrandImage":"CarBrand/SiBaLu.jpg"},{"CarBrandFirstWord":"S","CarBrand":"双环","BrandImage":"CarBrand/ShuangHuan.jpg"},{"CarBrandFirstWord":"S","CarBrand":"SPIRRA","BrandImage":"CarBrand/SPIRRA.jpg"},{"CarBrandFirstWord":"S","CarBrand":"世爵","BrandImage":"CarBrand/ShiJue.jpg"},{"CarBrandFirstWord":"S","CarBrand":"陕汽通家","BrandImage":"CarBrand/ShanQiTongJia.jpg"},{"CarBrandFirstWord":"S","CarBrand":"萨博","BrandImage":"CarBrand/SaBo.jpg"},{"CarBrandFirstWord":"S","CarBrand":"斯柯达","BrandImage":"CarBrand/SiKeDa.jpg"},{"CarBrandFirstWord":"S","CarBrand":"Scion","BrandImage":"CarBrand/Scion.jpg"},{"CarBrandFirstWord":"S","CarBrand":"三菱","BrandImage":"CarBrand/SanLing.jpg"},{"CarBrandFirstWord":"S","CarBrand":"双龙","BrandImage":"CarBrand/ShuangLong.jpg"},{"CarBrandFirstWord":"T","CarBrand":"泰卡特","BrandImage":"CarBrand/TaiKaTe.jpg"},{"CarBrandFirstWord":"T","CarBrand":"特斯拉","BrandImage":"CarBrand/TeSiLa.jpg"},{"CarBrandFirstWord":"T","CarBrand":"腾势","BrandImage":"CarBrand/TengShi.jpg"},{"CarBrandFirstWord":"W","CarBrand":"五菱汽车","BrandImage":"CarBrand/WuLingQiChe.jpg"},{"CarBrandFirstWord":"W","CarBrand":"威麟","BrandImage":"CarBrand/WeiZuo.jpg"},{"CarBrandFirstWord":"W","CarBrand":"沃尔沃","BrandImage":"CarBrand/WoErWo.jpg"},{"CarBrandFirstWord":"W","CarBrand":"五十铃","BrandImage":"CarBrand/WuShiLing.jpg"},{"CarBrandFirstWord":"W","CarBrand":"威兹曼","BrandImage":"CarBrand/WeiZiMan.jpg"},{"CarBrandFirstWord":"W","CarBrand":"沃克斯豪尔","BrandImage":"CarBrand/WoKeSiHaoEr.jpg"},{"CarBrandFirstWord":"X","CarBrand":"雪佛兰","BrandImage":"CarBrand/XueFoLan.jpg"},{"CarBrandFirstWord":"X","CarBrand":"西雅特","BrandImage":"CarBrand/XiYaTe.jpg"},{"CarBrandFirstWord":"X","CarBrand":"雪铁龙","BrandImage":"CarBrand/XueTieLong.jpg"},{"CarBrandFirstWord":"X","CarBrand":"现代","BrandImage":"CarBrand/XianDai.jpg"},{"CarBrandFirstWord":"X","CarBrand":"新凯","BrandImage":"CarBrand/XinKai.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"英菲尼迪","BrandImage":"CarBrand/YingFeiNiDi.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"永源","BrandImage":"CarBrand/YongYuan.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"亚琛施纳泽","BrandImage":"CarBrand/YaZuoShiNaZe.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"一汽","BrandImage":"CarBrand/YiQi.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"依维柯","BrandImage":"CarBrand/YiWeiKe.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"英致","BrandImage":"CarBrand/YingZhi.jpg"},{"CarBrandFirstWord":"Y","CarBrand":"野马汽车","BrandImage":"CarBrand/YeMaQiChe.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"讴歌","BrandImage":"CarBrand/ZuoGe.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"中兴","BrandImage":"CarBrand/ZhongXing.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"之诺","BrandImage":"CarBrand/ZhiNuo.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"众泰","BrandImage":"CarBrand/ZhongTai.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"知豆","BrandImage":"CarBrand/ZhiDou.jpg"},{"CarBrandFirstWord":"Z","CarBrand":"中华","BrandImage":"CarBrand/ZhongHua.jpg"}]}`;

// 车型弹出层变量
var popupData = {
    // 弹出层高度
    height: 0,
    // 输入区域是否为input
    isInput: true,
    // 输入区域选择器
    inputAreaSelector: "",
    // 当前选择tab
    currentTabText: "",
    // 当前选择tags
    selectedTags: [],
    tags: ["标签1","标签2","标签3","标签4","标签5","标签6"],
    tabs: ["汽车","摩托车","卡车","自定义"],
    // 当前选择品牌
    currentBrand: "",
    // 当前选择车型
    currentModel: ""
}

function registerPopup(selector) {
    popupData.inputAreaSelector = selector;
    popupData.isInput = $(selector).is("input");
    
    popupData.currentTabText = "汽车";
    popupData.height = contentHeight;

    $(popupData.inputAreaSelector).on("click", handelShowPopup);
}
function appendPopup() {
    $("#choose-car-brand").remove();
    var popupHtml = $(`
        <div class="popupbox" id="choose-car-brand" style="display: none;">
            <!-- 遮罩 -->
            <div class="popup-overlay"></div>
            <!-- 内容层 -->
            <div class="popup-content content-choose">
                <!-- 弹出层标题 -->
                <header class="popup-title">
                    <div class="left btn-back">
                        <img class="icon" src="./fanhui@2x.png" alt="返回" style="display: none;">
                        <span></span>
                    </div>
                    <div class="title">
                        <span>品牌</span>
                    </div>
                    <div class="right btn-close">
                        <img class="icon" src="./delete.png" alt="关闭">
                    </div>
                </header>
                <!-- 品牌页面 -->
                <section class="popup-page page-brand page-current">
                    <!-- tab栏 -->
                    <div class="tabs-wrapper">
                        <div class="tab-list">
                            <div class="tab active">
                                <span class="text">汽车</span>
                            </div>
                            <div class="tab">
                                <span class="text">摩托车</span>
                            </div>
                            <div class="tab">
                                <span class="text">卡车</span>
                            </div>
                            <div class="tab">
                                <span class="text">自定义</span>
                            </div>
                            <div class="tabs-line"></div>
                        </div>
                    </div>
                    <!-- tag栏 -->
                    <div class="tags-wrapper" style="display: none;">
                        <div class="tag-list">
                            <div class="tag active">
                                <span class="text">标签1</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签2</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签3</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签4</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签5</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签6</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签7</span>
                            </div>
                            <div class="tag">
                                <span class="text">标签8</span>
                            </div>
                        </div>
                    </div>
                    <!-- index bar -->
                    <div class="index-bar">
                        <!-- 索引 -->
                        <div class="index-bar-sidebar">
                        </div>
                        <div class="index-bar-content">
                        </div>
                    </div>
                </section>
                <!-- 车型页面 -->
                <section class="popup-page page-model">

                </section>
                <!-- 添加按钮 -->
                <button class="btn-add-model primary">添加车型</button>
            </div>
            <!-- 子内容层 -->
            <div class="popup-content content-edit" style="display: none;">
                <!-- 弹出层标题 -->
                <header class="popup-title">
                    <div class="left btn-back">
                        <img class="icon" src="./fanhui@2x.png" alt="返回" style="display: none;">
                        <span></span>
                    </div>
                    <div class="title">
                        <span>添加自定义车型</span>
                    </div>
                    <div class="right btn-close">
                        <img class="icon" src="./delete.png" alt="关闭">
                    </div>
                </header>
                <!-- 添加车型页面 -->
                <section class="popup-page page-add page-current">
                    <form class="popup-form" onsubmit="return false">
                        <div class="field">
                            <label for="popup-input-brand"><strong>*</strong>品牌</label>
                            <input id="popup-input-brand" type="text" placeholder="请填写品牌" maxlength="20">
                        </div>
                        <div class="field">
                            <label for="popup-input-mdoel"><strong>*</strong>车型</label>
                            <input id="popup-input-mdoel" type="text" placeholder="请填写车型" maxlength="25">
                        </div>
                        <div class="field">
                            <label for="popup-input-tag">标签</label>
                            <input id="popup-input-tag" type="text" placeholder="请填写标签" maxlength="15">
                        </div>
                        <div class="btn">
                            <button class="btn-cancel-add-model">取消</button>
                            <button class="btn-submit-add-model primary" type="submit">提交</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>`);
    $("body").append(popupHtml);
    var sectionHeight = popupData.height - $(".popup-title").outerHeight()
    $(".popup-page").css({
        height: sectionHeight
    })
    resizeIndexBar();
    $(".content-choose .btn-close").on("click", handelHidePopup);
    $(".tab-list > .tab").on("click", handleChooseTab);
    $(".index-bar-content").on("scroll", handleScrollIndexBar);
    $(".index-bar-sidebar").on("click", ".index", handleClickSidebar);
    $(".btn-add-model").on("click", handleShowContentEdit);
    $(".content-edit .btn-close").on("click", handleHideContentEdit);
    $(".content-edit .btn-cancel-add-model").on("click", handleHideContentEdit);
    $(".popup-page.page-brand .tag-list").on("click", ".tag", handleChooseTag);
    $(".index-bar-sidebar").on("touchstart", handleSideBarTouchStart);
    $(".index-bar-sidebar").on("touchmove", handleSideBarTouchMove);
    $(".index-bar-sidebar").on("touchend", handleSideBarTouchEnd);
}
function handleSideBarTouchStart(event) {
    console.log(event);
}
function handleSideBarTouchMove(event) {
    var touch = event.originalEvent.targetTouches[0];
    var dom = document.elementFromPoint(370, touch.clientY);
    console.log(dom);
}
function handleSideBarTouchEnd(event) {
    console.log(event);
}
// 显示弹出层
function handelShowPopup() {
    appendPopup();
    $(".popupbox").show();
    $(".popupbox > .content-choose").animate({
        height: popupData.height+"px"
    });
    if ($(".popup-page.page-model").hasClass("page-current")) {
        $(".content-choose .popup-title .left .icon").hide();
        $(".content-choose .popup-title .left span").text("");
        $(".content-choose .popup-title .title span").text("品牌");
        $(".content-choose .popup-title .btn-back").off("click");
        $(".popup-page.page-model").removeClass("page-current");
        $(".popup-page.page-brand").addClass("page-current");
    }
    activeTabTransform();
}
// 隐藏弹出层
function handelHidePopup() {
    $(".popupbox > .content-choose").animate({
        height: "0px"
    }, function() {
        $(".popupbox").hide();
        $("#choose-car-brand").remove();
    })
}
// 显示车型页面
function handelShowModelPage() {
    $(".popup-page.page-brand").removeClass("page-current").addClass("page-leave");
    $(".popup-page.page-model").addClass("page-current page-inter");
    setTimeout(function() {
        $(".popup-page.page-brand").removeClass("page-leave");
        $(".popup-page.page-model").removeClass("page-inter");
        $(".content-choose .popup-title .left span").text("品牌");
        $(".content-choose .popup-title .title span").text("车型");
        $(".content-choose .popup-title .btn-back").on("click", handelHideModelPage);
    }, 800);
    $(".content-choose .popup-title .left .icon").show();
}
// 隐藏车型页面
function handelHideModelPage() {
    $(".popup-page.page-brand").addClass("page-current page-leave-back");
    $(".popup-page.page-model").removeClass("page-current").addClass("page-inter-back");
    setTimeout(function() {
        $(".popup-page.page-brand").removeClass("page-leave-back");
        $(".popup-page.page-model").removeClass("page-inter-back");
        $(".content-choose .popup-title .title span").text("品牌");
        $(".content-choose .popup-title .btn-back").off("click");
        activeTabTransform();
    }, 800);
    $(".content-choose .popup-title .left .icon").hide();
    $(".content-choose .popup-title .left span").text("");
}
// 显示子内容层
function handleShowContentEdit() {
    $(".content-choose").addClass("hide");
    $(".content-edit").show();
    $(".content-edit").animate({
        height: popupData.height+"px"
    });
}
// 隐藏子内容层
function handleHideContentEdit() {
    $(".content-choose").removeClass("hide");
    $(".content-edit").animate({
        height: "0px"
    }, function() {
        $(".content-edit").hide();
    })
}
function handleChooseTab(event) {
    var target = $(event.currentTarget);
    popupData.currentTabText = target.children(".text").text();
    $(".tab-list .active").removeClass("active");
    target.addClass("active");
    if (popupData.currentTabText == "自定义") {
        $(".tags-wrapper").show();
    } else {
        $(".tags-wrapper").hide();
    }
    activeTabTransform();
}
// 选择标签
function handleChooseTag(event) {
    let target = $(event.currentTarget);
    popupData.selectedTags = [target.children(".text").text()];
    $(".tag-list .active").removeClass("active");
    target.addClass("active");
    let list = $(".tag-list")[0];
    let needSrcoll = list.scrollWidth > list.clientWidth;
    if (needSrcoll) {
        let scrollLeft = target[0].offsetLeft - list.clientWidth / 2;
        $(".tag-list").scrollLeft(scrollLeft);
    }
}
function handleScrollIndexBar(event) {
    var target = $(event.currentTarget);
    var anchor = $(".index-anchor");
    var currentIndex = 0;
    anchor.each(function(index, item) {
        var offset = item.offsetTop;
        if (target.scrollTop() > offset) {
            currentIndex = index;
        }
    })
    if (target.scrollTop() >= ( target[0].scrollHeight - target[0].offsetHeight - 1)) {
        currentIndex = anchor.length - 1;
    }
    $(".index-bar-sidebar .index-bar-index-active").removeClass("index-bar-index-active");
    $(".index-bar-sidebar .index").eq(currentIndex).addClass("index-bar-index-active");
    if (target.scrollTop() > 10) {
        $(".tabs-wrapper").addClass("not-top");
        $(".tags-wrapper").addClass("not-top");
    } else {
        $(".popupbox .not-top").removeClass("not-top");
    }
}
// 点击滚动条索引
function handleClickSidebar(event) {
    var target = $(event.currentTarget);
    var index = $(".index-bar-sidebar .index").index(target);
    var currentAnchor = $(".index-anchor").eq(index);
    $(".index-bar-content").animate({
        scrollTop: currentAnchor[0].offsetTop+1
    })
}
// 重设index-bar高度
function resizeIndexBar() {
    let indexBarHeight = popupData.height - $(".popup-title").outerHeight() - $(".tabs-wrapper").outerHeight();
    if (!$(".tags-wrapper").is(":hidden")) {
        indexBarHeight -= $(".tags-wrapper").outerHeight();
    }
    $(".index-bar").css({
        height: indexBarHeight
    });
}
// 切换选项卡动画
function activeTabTransform() {
    let activeTab = $(".tab-list").children(".active");
    let left = activeTab[0].offsetLeft + activeTab[0].offsetWidth / 2;
    let line = $(".tab-list>.tabs-line");
    line.animate({
        left: `${left}px`
    }, getBrandInfo);
}
// 获取品牌数据
function getBrandInfo() {
    var brandInfo = [];
    var res = JSON.parse(fake);
    res = res.RECORD;
    res.forEach((brand) => {
        var index = brandInfo.findIndex((group) => {
            return group.index == brand.CarBrandFirstWord
        })
        if (index == -1) {
            var ngroup = {
                index: brand.CarBrandFirstWord,
                children: []
            }
            ngroup.children.push(brand);
            brandInfo.push(ngroup);
        } else {
            brandInfo[index].children.push(brand);
        }
        if (brand.IsHot) {
            var index = brandInfo.findIndex((group) => {
                return group.index == "hot"
            })
            if (index == -1) {
                var ngroup = {
                    index: "hot",
                    children: []
                }
                ngroup.children.push(brand);
                brandInfo.push(ngroup);
            } else {
                brandInfo[index].children.push(brand);
            }
        }
    })
    brandInfo.sort(function(g1, g2) {
        if (g1.index == "hot") {
            return -1;
        } else if (g2.index == "hot") {
            return 1;
        } else {
            return g1.index.charCodeAt() - g2.index.charCodeAt()
        }
    })
    fitBrandData(brandInfo);
}
// 根据品牌获取车型数据
function getModelInfo() {
    var modelInfo = [];
    var res = JSON.parse(fake);
    res = res.RECORD;
    res.forEach((brand) => {
        var index = modelInfo.findIndex((group) => {
            return group.index == brand.CarBrandFirstWord
        })
        if (index == -1) {
            var ngroup = {
                index: brand.CarBrandFirstWord,
                children: []
            }
            ngroup.children.push(brand);
            modelInfo.push(ngroup);
        } else {
            modelInfo[index].children.push(brand);
        }
        if (brand.IsHot) {
            var index = modelInfo.findIndex((group) => {
                return group.index == "hot"
            })
            if (index == -1) {
                var ngroup = {
                    index: "hot",
                    children: []
                }
                ngroup.children.push(brand);
                modelInfo.push(ngroup);
            } else {
                modelInfo[index].children.push(brand);
            }
        }
    })
    modelInfo.sort(function(g1, g2) {
        if (g1.index == "hot") {
            return -1;
        } else if (g2.index == "hot") {
            return 1;
        } else {
            return g1.index.charCodeAt() - g2.index.charCodeAt()
        }
    })
    fitModelData(modelInfo);
}
// 选择品牌事件
function handelChooseBrand(event) {
    popupData.currentBrand = event.data.brand;
    handelShowModelPage();
    getModelInfo();
}
// 选择车型事件
function handelChooseModel(event) {
    popupData.currentModel = event.data.model;
    var value = `${popupData.currentBrand}-${popupData.currentModel}`;
    if (popupData.isInput) {
        $(popupData.inputAreaSelector).val(value);
    } else {
        $(popupData.inputAreaSelector).text(value);
    }
    handelHidePopup();
}
function fitBrandData(brandInfo) {
    $(".index-bar-sidebar").empty();
    $(".index-bar-content").empty();

    switch(popupData.currentTabText) {
        case "汽车":
            brandInfo.forEach(group => {
                var indexHtml = `<span class="index">${group.index}</span>`
                $(".index-bar-sidebar").append(indexHtml);
                if (group.index == "hot") {
                    var contentHtml = $(`<div class="index-bar-group">
                        <div class="index-anchor" style="display: none;">热门品牌</div>
                        <div class="grid">
                            
                        </div>
                    </div>`);
                    contentHtml.find(".grid").empty();
                    group.children.forEach(brand => {
                        var brandHtml = $(`<div class="item">
                            <img class="icon" src="http://file.cheoo.net/${brand.BrandImage}" alt="${brand.CarBrand}" loading="lazy">
                            <span class="text">${brand.CarBrand}</span>
                        </div>`);
                        brandHtml.on("click", {brand: brand.CarBrand}, handelChooseBrand);
                        contentHtml.find(".grid").append(brandHtml);
                    })
                    $(".index-bar-content").append(contentHtml);
                } else {
                    var contentHtml = $(`<div class="index-bar-group">
                        <div class="index-anchor">${group.index}</div>
                    </div>`);
                    group.children.forEach(brand => {
                        var brandHtml = $(`<div class="cell">
                            <img class="icon image" src="http://file.cheoo.net/${brand.BrandImage}" alt="${brand.CarBrand}" loading="lazy">
                            <div class="cell-title">${brand.CarBrand}</div>
                        </div>`);
                        brandHtml.on("click", {brand: brand.CarBrand}, handelChooseBrand);
                        contentHtml.append(brandHtml);
                    })
                    $(".index-bar-content").append(contentHtml);
                }
            })
            break;
        case "摩托车": 
        case "卡车":
            brandInfo.forEach(group => {
                var indexHtml = `<span class="index">${group.index}</span>`
                $(".index-bar-sidebar").append(indexHtml);
                var contentHtml = $(`<div class="index-bar-group">
                    <div class="index-anchor">${group.index}</div>
                </div>`);
                group.children.forEach(brand => {
                    var brandHtml = $(`<div class="cell">
                        <div class="cell-title">${brand.CarBrand}</div>
                    </div>`);
                    brandHtml.on("click", {brand: brand.CarBrand}, handelChooseBrand);
                    contentHtml.append(brandHtml);
                })
                $(".index-bar-content").append(contentHtml);
            })
            break;
        case "自定义":
            brandInfo.forEach(group => {
                var indexHtml = `<span class="index">${group.index}</span>`
                $(".index-bar-sidebar").append(indexHtml);
                var contentHtml = $(`<div class="index-bar-group">
                    <div class="index-anchor">${group.index}</div>
                </div>`);
                group.children.forEach(brand => {
                    var brandHtml = $(`<div class="cell">
                        <img class="icon left-icon" src="./round@2x.png" alt="自定义品牌">
                        <div class="cell-title">${brand.CarBrand}</div>
                    </div>`);
                    brandHtml.on("click", {brand: brand.CarBrand}, handelChooseBrand);
                    contentHtml.append(brandHtml);
                })
                $(".index-bar-content").append(contentHtml);
            })
            break;
    }
    $(".index-bar-content").animate({
        scrollTop: 0
    })
    $(".index-bar-sidebar .index-bar-index-active").removeClass("index-bar-index-active");
    $(".index-bar-sidebar .index").eq(0).addClass("index-bar-index-active");
    resizeIndexBar();
}
function fitModelData(modelInfo) {
    $(".page-model .model").remove();
    switch(popupData.currentTabText) {
        case "汽车":
            var contentHtml = $(`<div class="model grid">
            </div>`);
            modelInfo.forEach(group => {
                group.children.forEach(model => {
                    var modelHtml = $(`<div class="item">
                        <img class="icon" src="http://file.cheoo.net/${model.BrandImage}" alt="${model.CarBrand}" loading="lazy">
                        <span class="text">${model.CarBrand}</span>
                    </div>`);
                    modelHtml.on("click", {model: model.CarBrand}, handelChooseModel);
                    contentHtml.append(modelHtml);
                })
            })
            $(".page-model").append(contentHtml);
            break;
        case "摩托车": 
        case "卡车":
            var contentHtml = $(`<div class="model list">
            </div>`);
            modelInfo.forEach(group => {
                group.children.forEach(model => {
                    var modelHtml = $(`<div class="cell">
                        <div class="cell-title">${model.CarBrand}</div>
                    </div>`);
                    modelHtml.on("click", {model: model.CarBrand}, handelChooseModel);
                    contentHtml.append(modelHtml);
                })
            })
            $(".page-model").append(contentHtml);
            break;
        case "自定义":
            var contentHtml = $(`<div class="model list">
            </div>`);
            modelInfo.forEach(group => {
                group.children.forEach(model => {
                    var modelHtml = $(`<div class="cell">
                        <div class="cell-title">${model.CarBrand}</div>
                        <div class="cell-right">
                            <img class="icon" src="./shanchucheckvehicle@2x.png" alt="删除">
                        </div>
                    </div>`);
                    modelHtml.on("click", {model: model.CarBrand}, handelChooseModel);
                    contentHtml.append(modelHtml);
                })
            })
            $(".page-model").append(contentHtml);
            break;
    }
    resizeModel();
}
// 重置车型列表高度
function resizeModel() {
    let modelHeight = popupData.height - $(".popup-title").outerHeight();
    $(".content-model .model").css({
        height: modelHeight
    });
}