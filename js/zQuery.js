 function rgb_color() { //隨機產生RGB色函數，返回值為RGB顏色字串
     var r = parseInt(Math.random() * 255);
     var g = parseInt(Math.random() * 255);
     var b = parseInt(Math.random() * 255);
     var newcolor = "rgb(" + r + "," + g + "," + b + ")";
     return newcolor;
 }

 function rgba_color() { //隨機產生RGBA色函數，返回值為RGBA顏色字串
     var r = parseInt(Math.random() * 255);
     var g = parseInt(Math.random() * 255);
     var b = parseInt(Math.random() * 255);
     var a = Math.random();
     var newcolor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
     return newcolor;
 }

 function getbyclass(parent, classname) { //透過類名取得元素函數，參數為父元素、類名，返回值為元素數組
     var result = new Array();
     var allclass = parent.getElementsByTagName('*');
     for (var i = 0; i < allclass.length; i++) {

         if (classname == allclass[i].className)
             result.push(allclass[i]);
     }
     return result;
 }

 function getbyclassname(tagname, classname) { //透過類名取得元素函數，參數為標籤名、類名，返回值為元素數組
     var result = new Array();
     var allclass = document.getElementsByTagName(tagname);
     for (var i = 0; i < allclass.length; i++) {

         if (classname == allclass[i].className)
             result.push(allclass[i]);
     }
     return result;
 }


 function index(current, obj) { //取得元素索引值
     for (var i = 0; i < obj.length; i++) {
         if (obj[i] == current) {
             return i;
         }
     }
 }

 function win(attr) { //取得可視區尺寸，參數為height|width
     switch (attr) {
         case 'height': //取得視窗高度
             if (window.innerHeight) {
                 winHeight = window.innerHeight;
                 return winHeight;
             } else if ((document.body) && (document.body.clientHeight)) {
                 winHeight = document.body.clientHeight;
                 return winHeight;
             }
             if (document.documentElement && document.documentElement.clientHeight) {
                 winHeight = document.documentElement.clientHeight;
                 return winHeight;
             }
             break;
         case 'width': //取得視窗寬度
             if (window.innerWidth) {
                 winWidth = window.innerWidth;
                 return winWidth;
             } else if ((document.body) && (document.body.clientWidth)) {
                 winWidth = document.body.clientWidth;
                 return winWidth;
             } //深入Document內部對body進行檢測，取得視窗大小
             if (document.documentElement && document.documentElement.clientWidth) {
                 winWidth = document.documentElement.clientWidth;
                 return winWidth;
             }
             break;
         case 'scrollTop':
             var scrollTop;
             if (typeof window.pageYOffset != 'undefined') {
                 scrollTop = window.pageYOffset;
             } else
             if (typeof document.compatMode != 'undefined' &&
                 document.compatMode != 'BackCompat') {
                 scrollTop = document.documentElement.scrollTop;
             } else
             if (typeof document.body != 'undefined') {
                 scrollTop = document.body.scrollTop;
             }
             return scrollTop;
             break;
         default:
             return 0;
             break;
     }
 }
 /**************************************************移動框架*****************************************************/
 function css(obj, attr, value) {
     var re = [];
     if (arguments.length == 2) {
         switch (attr) {
             case 'opacity':
                 re.push(Math.round(100 * parseFloat(obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, false)[attr])));
                 return re;
                 break;
             case 'backgroundPosition':
                 var res = obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, false)[attr];
                 res = res.split(" ");
                 res[0] = parseInt(res[0]);
                 res[1] = parseInt(res[1]);
                 return res;
                 break;
             case 'rotate':
                 var transformstr = obj.currentStyle ? obj.currentStyle['transform'] : document.defaultView.getComputedStyle(obj, false)['webkitTransform'] || document.defaultView.getComputedStyle(obj, false)['msTransform'] || document.defaultView.getComputedStyle(obj, false)['MozTransform'] || document.defaultView.getComputedStyle(obj, false)['OTransform'] || document.defaultView.getComputedStyle(obj, false)['transform'] + "";
                 var matrixarray = transformstr.split(",");
                 re.push(Math.ceil(Math.acos(matrixarray[3]) / Math.PI * 180));
                 return re;
                 break;
             case 'translate':
                 var transformstr = obj.currentStyle ? obj.currentStyle['transform'] : document.defaultView.getComputedStyle(obj, false)['webkitTransform'] || document.defaultView.getComputedStyle(obj, false)['msTransform'] || document.defaultView.getComputedStyle(obj, false)['MozTransform'] || document.defaultView.getComputedStyle(obj, false)['OTransform'] || document.defaultView.getComputedStyle(obj, false)['transform'] + "";
                 var matrixarray = transformstr.split(",");
                 re.push(parseInt(matrixarray[4]));
                 re.push(parseInt(matrixarray[5]));
                 return re;
                 break;
             case 'translateX': //transform 2d轉換中的translateX
                 var transformstr = obj.currentStyle ? obj.currentStyle['transform'] : document.defaultView.getComputedStyle(obj, false)['webkitTransform'] || document.defaultView.getComputedStyle(obj, false)['msTransform'] || document.defaultView.getComputedStyle(obj, false)['MozTransform'] || document.defaultView.getComputedStyle(obj, false)['OTransform'] || document.defaultView.getComputedStyle(obj, false)['transform'] + "";
                 var matrixarray = transformstr.split(",");
                 re.push((parseInt(matrixarray[4])));
                 return re;
                 break;
             case 'translateY': //transform 2d轉換中的translateY
                 var transformstr = obj.currentStyle ? obj.currentStyle['transform'] : document.defaultView.getComputedStyle(obj, false)['webkitTransform'] || document.defaultView.getComputedStyle(obj, false)['msTransform'] || document.defaultView.getComputedStyle(obj, false)['MozTransform'] || document.defaultView.getComputedStyle(obj, false)['OTransform'] || document.defaultView.getComputedStyle(obj, false)['transform'] + "";
                 var matrixarray = transformstr.split(",");
                 re.push((parseInt(matrixarray[5])));
                 return re;
                 break;
             case 'transform': //transform 2d matrix方法
                 var transformstr = obj.currentStyle ? obj.currentStyle['transform'] : document.defaultView.getComputedStyle(obj, false)['webkitTransform'] || document.defaultView.getComputedStyle(obj, false)['msTransform'] || document.defaultView.getComputedStyle(obj, false)['MozTransform'] || document.defaultView.getComputedStyle(obj, false)['OTransform'] || document.defaultView.getComputedStyle(obj, false)['transform'] + "";
                 var matrixarray = transformstr.split(",");
                 re.push(parseInt(matrixarray[0].match(/-?\d+(\.\d+)?/g)[0] * 10000)); //提出數組第一個字串中的數字
                 re.push(parseInt(matrixarray[1].match(/-?\d+(\.\d+)?/g)[0] * 10000));
                 re.push(parseInt(matrixarray[2].match(/-?\d+(\.\d+)?/g)[0] * 10000));
                 re.push(parseInt(matrixarray[3].match(/-?\d+(\.\d+)?/g)[0] * 10000));
                 re.push(parseInt(matrixarray[4].match(/-?\d+(\.\d+)?/g)[0] * 10000));
                 re.push(parseInt(matrixarray[5].match(/-?\d+(\.\d+)?/g)[0] * 10000));
                 //						console.log(parseInt(matrixarray[0].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
                 //							parseInt(matrixarray[1].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
                 //			parseInt(matrixarray[2].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
                 //			parseInt(matrixarray[3].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
                 //			parseInt(matrixarray[4].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
                 //			parseInt(matrixarray[5].match(/-?\d+(\.\d+)?/g)[0]*10000));
                 return re;
                 break;
             default:
                 re.push(parseInt(obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, false)[attr]));
                 return re;
                 break;
         }
     } else if (arguments.length == 3)
         switch (attr) {
             case 'width':
             case 'height':
             case 'paddingLeft':
             case 'paddingTop':
             case 'paddingRight':
             case 'paddingBottom':
                 value[0] = Math.max(value[0], 0);
             case 'left':
             case 'top':
             case 'marginLeft':
             case 'marginTop':
             case 'marginRight':
             case 'marginBottom':
                 obj.style[attr] = value[0] + 'px';
                 break;
             case 'opacity':
                 obj.style.filter = "alpha(opacity:" + value[0] + ")";
                 obj.style.opacity = value[0] / 100;
                 break;
             case 'backgroundPosition':
                 obj.style.backgroundPosition = value[0] + 'px ' + value[1] + 'px';
                 break;
             case 'rotate':
                 obj.style.webkitTransform = "rotate(" + value[0] + "deg)";
                 obj.style.msTransform = "rotate(" + value[0] + "deg)";
                 obj.style.MozTransform = "rotate(" + value[0] + "deg)";
                 obj.style.OTransform = "rotate(" + value[0] + "deg)";
                 obj.style.transform = "rotate(" + value[0] + "deg)";
                 break;
             case 'translate':
                 obj.style.webkitTransform = "translate(" + value[0] + "px," + value[1] + "px)";
                 obj.style.msTransform = "translate(" + value[0] + "px," + value[1] + "px)";
                 obj.style.MozTransform = "translate(" + value[0] + "px," + value[1] + "px)";
                 obj.style.OTransform = "translate(" + value[0] + "px," + value[1] + "px)";
                 obj.style.transform = "translate(" + value[0] + "px," + value[1] + "px)";
                 break;
             case 'translateX':
                 obj.style.webkitTransform = "translateX(" + value[0] + "px)";
                 obj.style.msTransform = "translateX(" + value[0] + "px)";
                 obj.style.MozTransform = "translateX(" + value[0] + "px)";
                 obj.style.OTransform = "translateX(" + value[0] + "px)";
                 obj.style.transform = "translateX(" + value[0] + "px)";
                 break;
             case 'translateY':
                 obj.style.webkitTransform = "translateY(" + value[0] + "px)";
                 obj.style.msTransform = "translateY(" + value[0] + "px)";
                 obj.style.MozTransform = "translateY(" + value[0] + "px)";
                 obj.style.OTransform = "translateY(" + value[0] + "px)";
                 obj.style.transform = "translateY(" + value[0] + "px)";
                 break;
             case 'transform':
                 obj.style.webkitTransform = "matrix(" + value[0] + "," + value[1] + "," + value[2] + "," + value[3] + "," + value[4] + "," + value[5] + ")";
                 obj.style.msTransform = "matrix(" + value[0] + "," + value[1] + "," + value[2] + "," + value[3] + "," + value[4] + "," + value[5] + ")";
                 obj.style.MozTransform = "matrix(" + value[0] + "," + value[1] + "," + value[2] + "," + value[3] + "," + value[4] + "," + value[5] + ")";
                 obj.style.OTransform = "matrix(" + value[0] + "," + value[1] + "," + value[2] + "," + value[3] + "," + value[4] + "," + value[5] + ")";
                 obj.style.transform = "matrix(" + value[0] + "," + value[1] + "," + value[2] + "," + value[3] + "," + value[4] + "," + value[5] + ")";
                 break;
             default:
                 obj.style[attr] = value[0];
         }

     return function(attr_in, value_in) { css(obj, attr_in, value_in) };
 }


 function stop(obj) {
     clearInterval(obj.timer);
 }

 function move(obj, oTarget, iType, fnCallBack, fnDuring) {
     var fnMove = null;
     if (obj.timer) {
         clearInterval(obj.timer);
     }
     switch (iType) {
         case "buffer":
             fnMove = do_buffer_move;
             break;
         case "flex":
             fnMove = do_flex_move;
             break;
         default:
             fnMove = do_buffer_move;
             break;
     }

     obj.timer = setInterval(function() {
         fnMove(obj, oTarget, fnCallBack, fnDuring);
     }, 30);
 }

 /*------------------------------------移動函數中的全局變量-------------------------------------------*/
 var attr = '';
 var next = [];
 var cur;
 var stopBtn = false;

 function do_buffer_move(obj, oTarget, fnCallBack, fnDuring) {
     stopBtn = false;
     var count = 0;
     if (!obj.speed) obj.speed = {}; //該物件的速度屬性，包括多個屬性值速度，如果未定義則定義
     for (attr in oTarget) {
         if (!obj.speed[attr]) { obj.speed[attr] = []; } //該物件某一屬性的速度值，值為該屬性的速度值數組
         cur = css(obj, attr);
         if (attr == 'transform') {
             for (var j = 0; j < cur.length; j++) {
                 if (undefined == obj.speed[attr][j]) obj.speed[attr][j] = 0; //在該物件目前的屬性中，若某一速度參數未定義，則定義
                 var temp = parseInt(oTarget[attr][j] * 10000);
                 if (Math.abs(temp - cur[j]) > 1000) //由於小數的特殊性，無法保證兩數一致，相差很小時忽略差距
                 {
                     obj.speed[attr][j] = (temp - cur[j]) / 5;
                     obj.speed[attr][j] = obj.speed[attr][j] > 0 ? Math.ceil(obj.speed[attr][j]) : Math.floor(obj.speed[attr][j]);
                     next[j] = (cur[j] + obj.speed[attr][j]) / 10000;
                     //console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//移動過程中的參數值
                 } else {
                     next[j] = parseInt(oTarget[attr][j] * 10000) / 10000; //保持已經到達目標的值
                     count++; //記錄已達到目標的個數
                     //console.log(attr+"count"+count);
                 }
             }
         } else {
             for (var j = 0; j < cur.length; j++) {
                 if (undefined == obj.speed[attr][j]) obj.speed[attr][j] = 0; //在該物件目前的屬性中，若某一速度參數未定義，則定義
                 if (oTarget[attr][j] != cur[j]) {
                     oTarget[attr][j] = parseInt(oTarget[attr][j]);
                     obj.speed[attr][j] = (oTarget[attr][j] - cur[j]) / 5;
                     obj.speed[attr][j] = obj.speed[attr][j] > 0 ? Math.ceil(obj.speed[attr][j]) : Math.floor(obj.speed[attr][j]);
                     next[j] = cur[j] + obj.speed[attr][j];
                     //console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//移動過程中的參數值
                 } else {
                     next[j] = oTarget[attr][j]; //保持已經到達目標的值
                     count++; //記錄已達到目標的個數
                     //console.log(attr+"count"+count);
                 }
             }
         }
         css(obj, attr, next);
     }
     var allattr = 0; //所有屬性計數器歸零
     for (attr in oTarget) {
         for (var i = 0; i < oTarget[attr].length; i++) {
             allattr++; //計算出所有屬性個數
         }
     }
     //console.log(count+" "+allattr);//比較已達個數與總個數
     if (count == allattr) { stopBtn = true; } //當所有屬性都達到目標時，停止開關打開

     if (fnDuring) fnDuring.call(obj);
     if (stopBtn) {
         obj.speed = {};
         //console.log("本次移動完成");
         clearInterval(obj.timer);
         if (fnCallBack) fnCallBack.call(obj);
     }
 }

 function do_flex_move(obj, oTarget, fnCallBack, fnDuring) {
     stopBtn = false;
     var count = 0; //有關是否移動的變量
     if (!obj.speed) obj.speed = {}; //該物件的速度屬性，包括多個屬性值速度，如果未定義則定義
     for (attr in oTarget) {
         if (!obj.speed[attr]) { obj.speed[attr] = []; } //該物件某一屬性的速度值，值為該屬性的速度值數組
         //console.log(obj.speed[attr]);
         cur = css(obj, attr);
         if (attr == 'transform') {
             for (var j = 0; j < cur.length; j++) {
                 if (undefined == obj.speed[attr][j]) obj.speed[attr][j] = 1; //在該物件目前的屬性中，若某一速度參數未定義，則定義
                 var temp = parseInt(oTarget[attr][j] * 10000);
                 if (Math.abs(parseInt(obj.speed[attr][j])) != 0) {
                     obj.speed[attr][j] += (temp - cur[j]) / 5;
                     obj.speed[attr][j] *= 0.7;
                     obj.speed[attr][j] = parseInt(obj.speed[attr][j]);
                     next[j] = (cur[j] + obj.speed[attr][j]) / 10000;
                     //console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//移動過程中的參數值
                 } else {
                     next[j] = parseInt(oTarget[attr][j] * 10000) / 10000; //保持已經到達目標的值
                     count++; //記錄已達到目標的個數
                     //console.log(attr+"count"+count);
                 }
             }
         } else {
             for (var j = 0; j < cur.length; j++) {
                 if (undefined == obj.speed[attr][j]) obj.speed[attr][j] = 1; //在該物件目前的屬性中，若某一速度參數未定義，則定義
                 if (Math.abs(obj.speed[attr][j]) != 0) {
                     obj.speed[attr][j] += (oTarget[attr][j] - cur[j]) / 5;
                     obj.speed[attr][j] *= 0.7;
                     obj.speed[attr][j] = parseInt(obj.speed[attr][j]);
                     next[j] = cur[j] + obj.speed[attr][j];
                     //console.log(j+" attr "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//移動過程中的參數值
                 } else {
                     next[j] = oTarget[attr][j]; //保持已經到達目標的值
                     count++; //記錄已達到目標的個數
                     //console.log(attr+"count"+count);
                 }
             }
         }
         css(obj, attr, next);
     }

     var allattr = 0; //所有屬性計數器歸零
     for (attr in oTarget) {
         for (var i = 0; i < oTarget[attr].length; i++) {
             allattr++; //計算出所有屬性個數
         }
     }
     //console.log(count+" "+allattr);//比較已達個數與總個數
     if (count == allattr) { stopBtn = true; } //當所有屬性都達到目標時，停止開關打開

     if (fnDuring) fnDuring.call(obj);
     if (stopBtn) {
         obj.speed = {};
         //console.log("本次移動完成");
         clearInterval(obj.timer);
         if (fnCallBack) fnCallBack.call(obj);
     }
 }



 function drag_throw_move(obj, speedX, speedY) { //拖曳+拋出移動，使用時需先定義timer定時器，傳入物件、水平速度和垂直速度
     timer = setInterval(function() {
         speedY += 3; //與重力相似，y軸的速度會隨著物體落下而增大
         var left = obj.offsetLeft + speedX; //計算定位值
         var top = obj.offsetTop + speedY;
         if (top >= (win('height') - obj.offsetHeight)) //碰撞到底部，y軸速度反向，x軸速度減小
         {
             speedY *= -0.8;
             speedX *= 0.8;
             top = (win('height') - obj.offsetHeight);
         } else if (top <= 0) //碰撞到頂部，y軸速度反向，x軸速度減小
         {
             speedY *= -0.8;
             speedX *= 0.8;
             top = 0;
         }
         if (left >= (win('width') - obj.offsetWidth)) //碰撞到右側，X軸速度反向且減小
         {
             speedX *= -0.8;
             left = (win('width') - obj.offsetWidth);
         } else if (left <= 0) //碰撞到左側，X軸速度反向且減小
         {
             speedX *= -0.8;
             left = 0;
         }
         if (Math.abs(speedX) < 1) //速度很小時視為停止
         {
             speedX = 0;
         }
         if (Math.abs(speedY) < 1) //速度很小時視為停止
         {
             speedY = 0;
         }
         if (speedX == 0 && speedY == 0 && top == (win('height') - obj.offsetHeight)) { //移動過程停止
             clearInterval(timer);
         }
         obj.style.left = left + 'px'; //應用定位
         obj.style.top = top + 'px';
     }, 30);
 }

 function drag(obj) { //實作拖曳，參數為物件
     obj.onmousedown = function(ev) { //點擊滑鼠
         var oev = ev || event;
         var disX = oev.clientX - obj.offsetLeft;
         var disY = oev.clientY - obj.offsetTop;
         document.onmousemove = function(ev) { //拖曳滑鼠
             var oev = ev || event;
             var left = oev.clientX - disX;
             var top = oev.clientY - disY;
             obj.style.left = left + 'px'; //更新物件位置
             obj.style.top = top + 'px';
         }
         document.onmouseup = function() { //放開滑鼠
             document.onmousemove = null;
             document.onmouseup = null;
         }
     }
 }

 /**************************************************移動框架結束*****************************************************/
