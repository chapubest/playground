var w_width;
var cssType;
var isDark;
var output;
var allow = ['image/gif', 'image/png', 'image/jpeg'];

// 页面加载完毕
$(function(){
  resetCss();
  readDarkStyle();
  $(window).on('resize', function() {
    resetCss();
  });
  // 为btn添加事件处理
  // ios-btn
  $('.ios-btn').on('click', iosBtnClick);
  // day-dark-btn
  $('.day-dark-btn').on('click', dayDarkBtnClick);
  // 拖拽区域
  $('.upload-area').on('drop', event, fileDrop);
  $('.upload-area').on('dragenter', fileEnter);
  $('.upload-area').on('dragleave', fileLeave);
  $('.drag-area').hide();
  // 阻止win默认拖拽事件
  $('body').on('drop', event, clearDefaultDrop);
  $('body').on('dragover', event, clearDefaultDrop);
  $('.upload-area').children().on('dragleave', event, clearDefaultDrop);
  // upload bar
  $('.upload-bar .msg,.select-btn').on('click', function(){
    $('.upload-bar .file').click();
  });
  $('.upload-bar .file').attr('accept', allow.toString());
  $('.upload-bar .file').on('change', changeFile);
  $('.upload-bar .clear-btn').on('click', clearOutput);
  $('.upload-bar .clear-btn,.upload-btn').hide();
  $('.upload-bar .upload-btn').on('click', tryapi);
  tryapi();
});

// 重设页面样式
function resetCss() {
  w_width = $(window).width();
  var csslink = $('#type-link');
  var type = w_width > 500 ? 'pc' : 'phone';
  if(!cssType || cssType != type) {
    cssType = type;
    csslink.attr('href', './css/'+cssType+'base.css');
  }
}
// 从缓存中读取是否为夜间模式
function readDarkStyle() {
  isDark = JSON.parse(window.localStorage.getItem('isDark')) || isDark || false;
  if(isDark) {
    $('body').addClass('dark');
  }else {
    $('body').removeClass('dark');
  }
  setDayDarkImg();
}
// ios风btn点击事件
function iosBtnClick() {
  var btn = $(this);
  if(btn.hasClass('active')) {
    btn.removeClass('active');
  }else {
    btn.addClass('active');
  }
}
// 夜间模式
function dayDarkBtnClick() {
  var btn = $(this);
  isDark = !isDark;
  window.localStorage.setItem('isDark', isDark);
  readDarkStyle();
}
// 设置daydarkbtn图片
function setDayDarkImg() {
  if(isDark) {
    $('.day-dark-btn img').attr('src', './img/daytime.png');
  }else {
    $('.day-dark-btn img').attr('src', './img/nighttime.png');
  }
}
// 文件拖放
function fileDrop(event) {
  fileLeave();
  var files = event.originalEvent.dataTransfer.files;
  if(!output) {
    output = [];
  }
  var result;
  if(output.length >= 10) {
    showMsg('一次最多添加10个文件', 'info');
    return;
  }
  for(let i = 0; i < files.length; i ++) {
    let res = checkFile(files[i]);
    if (res.pass) {
      if(!hasFile(files[i])) {
        try {
          readFile(files[i]);
        }catch(e) {
          showMsg('读取文件失败', 'error');
        }
      }
    }else {
      if(!result) {
        result = res.reason;
      }
    }
  }
  if(result) {
    showMsg(result, 'error');
  }
}
// 读取图片readfile
function readFile(file) {
  var reads = new FileReader();
  reads.readAsDataURL(file);
  reads.onload = function(e) {
    let f = {};
    f.base64 = this.result;
    f.name = file.name;
    f.size = file.size;
    f.type = file.type;
    output.push(f);
    showFile(f);
    upUploadBarMsg();
  }
}
// // 获取文件临时连接
// function getUrl(file) {
//   return window.URL.createObjectURL(file);
// }
// 检测文件是否已存在
function hasFile(file) {
  var index = output.findIndex(function(value){
    return value.name == file.name;
  });
  return index > -1;
}
// 文件检测
function checkFile(file) {
  var max = 1024*1024*3;
  
  if(allow.indexOf(file.type) == -1) {
    return {pass:false, reason: '上传的文件格式不支持'};
  }
  if(file.size > max) {
    return {pass:false, reason: '上传的文件大小超出限制'};
  }
  return {pass:true};
}
// 文件进入拖放区
function fileEnter() {
  console.log('enter');
  $('.upload-area').addClass('file-enter');
}
// 文件离开拖放区
function fileLeave() {
  console.log('leave');
  $('.upload-area').removeClass('file-enter');
}
// 阻止默认事件
function clearDefaultDrop(event) {
  event.stopPropagation();
  event.preventDefault();
  return false;
}
// 显示消息
function showMsg(msg, type) {
  type = type || 'info';
  var cp = createCenterPan();
  var msgbox = $('<div></div>');
  msgbox.addClass('msg-box');
  msgbox.addClass(type);
  var p = $(`<div>${msg}</div>`);
  msgbox.append(p);
  cp.append(msgbox);
  setTimeout(clearMsg, 1000);
}
function clearMsg() {
  var cp = $('.center-pan');
  if(cp.length != 0) {
    cp.remove();
  }
}
// 创建center-pan
function createCenterPan() {
  var cp = $('.center-pan');
  if(cp.length != 0) {
    cp.empty();
  }else {
    cp = $('<div></div>');
    cp.addClass('center-pan');
    $('body').append(cp);
  }
  return cp;
}
// 创建img-box
function createImgBox(file) {
  var ib = $('<div></div>');
  ib.addClass('img-box');
  var img = $(`<div class="fill-content"><img src="${file.base64}" alt="${file.name}"></div>`);
  var np = $(`<p class="name">${file.name}</p>`);
  var sp = $(`<p class="size">( ${getSizeStr(file)} )</p>`);
  var del = $(`<div class="delete"><img src="./img/delete-dark.png" alt="del"></div>`);
  del.on('click', delFile);
  ib.append(img);
  ib.append(np);
  ib.append(sp);
  ib.append(del);
  return ib;
}
function getSizeStr(file) {
  var size = file.size;
  if(size<1024) {
    return size+' B';
  }else if(size<1024*1024){
    size = (file.size/1024).toFixed(2);
    return size+' KB';
  }else {
    size = (file.size/1024/1024).toFixed(2);
    return size+' MB';
  }
}
// 展示file
function showFile(fobj) {
  $('.upload-area .placeholder').hide();
  $('.upload-area .drag-area').show();
  var area = $('.upload-area .drag-area');
  area.append(createImgBox(fobj));
}
// 删除file
function delFile() {
  var imgbox = $(this).parent();
  var name = imgbox.children('.name').text();
  output.forEach(function(file, index){
    if(file.name == name) {
      output.splice(index, 1);
    }
  });
  imgbox.fadeOut('fast', function() {
    $(this).remove();
    if(output.length == 0) {
      $('.upload-area .placeholder').show();
      $('.upload-area .drag-area').hide();
    }
  });
  upUploadBarMsg();
}
// 更新UploadBarMsg
function upUploadBarMsg() {
  var msgstr;
  if(output.length==0) {
    msgstr = '';
  }else if(output.length==1) {
    msgstr = output[0].name;
  }else {
    msgstr = output.length + ' files selected';
  }
  $('.upload-bar .msg').val(msgstr);
  if(output.length>0) {
    $('.upload-bar .clear-btn,.upload-btn').show();
  }else {
    $('.upload-bar .clear-btn,.upload-btn').hide();
  }
}
// changeFile
function changeFile() {
  var files = this.files;
  if(!output) {
    output = [];
  }
  var result;
  if(output.length >= 10) {
    showMsg('一次最多添加10个文件', 'info');
    return;
  }
  for(let i = 0; i < files.length; i ++) {
    let res = checkFile(files[i]);
    if (res.pass) {
      if(!hasFile(files[i])) {
        try {
          readFile(files[i]);
        }catch(e) {
          showMsg('读取文件失败', 'error');
        }
      }
    }else {
      if(!result) {
        result = res.reason;
      }
    }
  }
  if(result) {
    showMsg(result, 'error');
  }
}

function clearOutput() {
  output = [];
  $('.upload-area .placeholder').show();
  $('.upload-area .drag-area').hide();
  $('.upload-area .drag-area').empty();
  upUploadBarMsg();
}