webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_oimg_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_oimg_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_oimg_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_css_style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_css_style_css__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _this = this;

let loadImage = url => {
    console.log(url);
    return new Promise((resolve, reject) => {
        let oImg = new Image();
        oImg.onload = () => {
            resolve(oImg);
        };
        oImg.onerror = () => {
            reject(new Error("can't find url:" + url));
        };
        oImg.src = url;
    });
};
let mybox = () => {
    _this.banner = document.getElementById('banner');
    _this.box = document.createElement('div');
    _this.box.className = 'box';
    _this.banner.append(_this.box);
};
let ajax = url => {
    return new Promise((resolve, reject) => {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        };
    });
};
ajax('http://localhost:8080/mock').then(data => {
    let dat = JSON.parse(data);

    mybox();
    dat.map((item, index) => {
        loadImage(item).then(oimg => {
            oimg.className = "imgs";

            _this.box.appendChild(oimg);
        }).then(() => {
            if (index == 3) {
                new proto();
            }
        });
    });
});
class proto {
    constructor() {
        this.banner = document.getElementById('banner');
        this.box = document.getElementsByClassName('box')[0];

        this.img = document.getElementsByTagName('img');
        this.myapp();
        //    this.left=document.getElementById('left')
        //    this.right=document.getElementById('right')


        this.imgw = this.img[0].width;
        this.box.append(this.img[0].cloneNode());
        this.imgl = this.img.length;

        this.box.style.width = this.imgw * this.imgl + 'px';
        this.box.style.left = '0px';
        this.banner.style.width = this.imgw + 'px';

        this.init();
    }
    init() {
        this.count = 0;
        this.myleft();
        this.myright();
    }
    myapp() {
        this.left = document.createElement('div');
        this.left.className = 'left';
        this.left.innerText = '<';
        this.banner.appendChild(this.left);
        this.right = document.createElement('div');
        this.right.className = 'right';
        this.right.innerText = '>';
        this.banner.appendChild(this.right);
    }

    myleft() {
        let that = this;
        this.left.onclick = function () {

            that.count--;
            console.log(that.count);
            that.myindex();
        };
    }
    myright() {
        let that = this;
        this.right.onclick = function () {
            that.count++;

            if (that.count > that.img.length - 1) {

                that.box.style.left = 0 + 'px';
                that.count = 1;

                that.myindex();
            } else {
                that.myindex();
            }
        };
    }
    myindex() {
        this.box.style.left = -this.count * this.imgw + 'px';
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);