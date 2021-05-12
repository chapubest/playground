var width;
var cssType;
var qrcodeMaker;
var qrType;

$(function(){
  width = $(window).width();
  var csslink = $('<link rel="stylesheet">');
  if(width > 500){
    cssType = 'pc';
  }else {
    cssType = 'phone';
    $('.more').on('click', function(){
      showMenu();
    });
  }
  csslink.attr('href', cssType+'Main.css');
  $('head').append(csslink);
  qrcodeMaker = new QRCode('output');
  $('#create-qrcode').on('click', function(){
    createQrcode();
  });
  $('.main-nav').on('click', 'span', function() {
    handleNav(this);
  });
});
function showMsg(msg) {
  var centerpan = $('<div></div>');
  centerpan.addClass('center-pan');
  var msgBox = $('<div></div>');
  msgBox.addClass('msg-box back');
  msgBox.text(msg);
  centerpan.append(msgBox);
  $('body').append(centerpan);
  setTimeout(hideMsg, 1000);
}
function hideMsg() {
  $('.center-pan').remove();
}
function showMenu() {
  var centerpan = $('<div></div>');
  centerpan.addClass('center-pan back');
  centerpan.on('click', function(){
    hideMenu();
  });
  $('body').append(centerpan);
  $('.main-nav').addClass('show');
}
function hideMenu() {
  $('.main-nav').removeClass('show');
  $('.center-pan').remove();
}
function createQrcode() {
  var intext = $('#input-area').val().trim();
  if(intext!='') {
    qrcodeMaker.makeCode(intext);
  }else {
    showMsg('请输入内容，再点击生成');
  }
}
function handleNav(span) {
  var text = $(span).text()
  switch(text) {
    case '文本':
      if(qrType != text) {
        qrType = text;
        $('#input-area').attr('placeholder', '请输入文字内容');
        $('.active').removeClass('active');
        $(span).addClass('active');
        hideMenu();
      }
      break;
    case '网址':
      if(qrType != text) {
        qrType = text;
        $('#input-area').attr('placeholder', 'http://');
        $('.active').removeClass('active');
        $(span).addClass('active');
        hideMenu();
      }
      break;
    case '图片':
      hideMenu();
      showMsg('暂时不支持图片');
      break;
    case '微信':
      hideMenu();
      showMsg('暂时不支持微信');
      // 微信二维码请求url
      // url = 'https://open.weixin.qq.com/qr/code?username=chapubest&style=1'
      break;
  }
  
}