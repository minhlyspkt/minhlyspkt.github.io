(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first{\r\n  /* border: solid 5px yellow; */\r\n  /* box-shadow: 15px 15px silver; */\r\n  position: absolute;\r\n  transition: 2s;\r\n \r\n}\r\n.second{\r\n\r\n  /* border: solid 5px yellow; */\r\n  /* box-shadow: 15px 15px rgb(32, 214, 15); */\r\n  position: absolute;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  opacity: 0;\r\n  transition: 2s;\r\n}\r\n.firstContent{\r\n   /* border: solid 5px rgb(248, 248, 242);  */\r\n  box-shadow: 5px 5px silver;\r\n  position: absolute;\r\n  transition: 2s;\r\n \r\n}\r\n.secondContent{\r\n   /* border: solid 5px rgb(248, 248, 242); */\r\n  box-shadow: 5px 5px rgb(32, 214, 15);\r\n  position: absolute;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  opacity: 0;\r\n  transition: 2s;\r\n}\r\n.sidebar{\r\n  position: fixed;\r\n  width: 30%;\r\n  height: 200px;\r\n  background-color: rgb(230, 214, 214);\r\n  right:-30%;\r\n  transition: all 2s;\r\n  z-index: 1000;\r\n}\r\n.sidebar ul li{\r\n  color:rgb(102, 97, 97);\r\n  list-style: none;\r\n  padding: 5px 15px;\r\n  border-top: 2px  solid;\r\n  text-align: center;\r\n}\r\n.sidebar .toggle-btn{\r\nposition: absolute;\r\nright: 130px;\r\ntop: 20px;\r\n}\r\n.sidebar  .toggle-btn span{\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  background: black;\r\n  margin: 3px 0px;\r\n}\r\n.div{\r\n  background: yellow;\r\n  width: 50px;\r\n  height: 20px;\r\n  transition: all 3s;\r\n}\r\n.sidebaropen{\r\n  right: 0px;\r\n  transition: all 2s;\r\n}\r\n.opacity{\r\n  opacity: 0.5;\r\n}\r\n#SDT{\r\n  left: 5px;\r\n  height: 80px;\r\n  width: 350px;\r\n  background-color:chocolate;\r\n  position:fixed;\r\n  z-index: 100;\r\n  border: 2px solid red;\r\n  border-radius: 12px;\r\n  text-align:center;\r\n  bottom: 5px;\r\n padding: 20px;\r\n}\r\n#hotline{\r\n  margin: 10px;\r\n  color: white;\r\n  font-size: 25px;\r\n}\r\n#phone{\r\n  color: red;\r\n  font-size: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixjQUFjOztBQUVoQjtBQUNBOztFQUVFLDhCQUE4QjtFQUM5Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTtHQUNHLDJDQUEyQztFQUM1QywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCO0FBQ0E7R0FDRywwQ0FBMEM7RUFDM0Msb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osU0FBUztBQUNUO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWixhQUFhO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdHtcclxuICAvKiBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7ICovXHJcbiAgLyogYm94LXNoYWRvdzogMTVweCAxNXB4IHNpbHZlcjsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogMnM7XHJcbiBcclxufVxyXG4uc2Vjb25ke1xyXG5cclxuICAvKiBib3JkZXI6IHNvbGlkIDVweCB5ZWxsb3c7ICovXHJcbiAgLyogYm94LXNoYWRvdzogMTVweCAxNXB4IHJnYigzMiwgMjE0LCAxNSk7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDJzO1xyXG59XHJcbi5maXJzdENvbnRlbnR7XHJcbiAgIC8qIGJvcmRlcjogc29saWQgNXB4IHJnYigyNDgsIDI0OCwgMjQyKTsgICovXHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCBzaWx2ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IDJzO1xyXG4gXHJcbn1cclxuLnNlY29uZENvbnRlbnR7XHJcbiAgIC8qIGJvcmRlcjogc29saWQgNXB4IHJnYigyNDgsIDI0OCwgMjQyKTsgKi9cclxuICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigzMiwgMjE0LCAxNSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDJzO1xyXG59XHJcbi5zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjE0LCAyMTQpO1xyXG4gIHJpZ2h0Oi0zMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLnNpZGViYXIgdWwgbGl7XHJcbiAgY29sb3I6cmdiKDEwMiwgOTcsIDk3KTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDJweCAgc29saWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWRlYmFyIC50b2dnbGUtYnRue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAxMzBweDtcclxudG9wOiAyMHB4O1xyXG59XHJcbi5zaWRlYmFyICAudG9nZ2xlLWJ0biBzcGFue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG1hcmdpbjogM3B4IDBweDtcclxufVxyXG4uZGl2e1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDNzO1xyXG59XHJcbi5zaWRlYmFyb3BlbntcclxuICByaWdodDogMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAycztcclxufVxyXG4ub3BhY2l0eXtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuI1NEVHtcclxuICBsZWZ0OiA1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmNob2NvbGF0ZTtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiNob3RsaW5le1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiNwaG9uZXtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"super_container\">\n\t<div class=\"super_overlay\"></div>\n\n\t<!-- Header -->\n\n\t<header class=\"header\">\n\n\t\t<!-- Header Bar -->\n\t\t<div class=\"header_bar d-flex flex-row align-items-center justify-content-start\">\n\t\t\t<div class=\"header_list\">\n\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t<!-- Phone -->\n\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t<div><img src=\"../assets/images/phone-call.svg\" alt=\"\"></div>\n\t\t\t\t\t\t<span>0356950649</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- Address -->\n\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t<div><img src=\"../assets/images/placeholder.svg\" alt=\"\"></div>\n\t\t\t\t\t\t<span>20 đường trần hưng đạo,tp.quảng ngãi</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- Email -->\n\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t<div><img src=\"../assets/images/envelope.svg\" alt=\"\"></div>\n\t\t\t\t\t\t<span>hosting@contact.com</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"ml-auto d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t<div class=\"social\">\n\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-behance\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"log_reg d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t<li><a href=\"#\">Login</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Register</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Header Content -->\n\t\t<div class=\"header_content d-flex flex-row align-items-center justify-content-start\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<img src=\"../assets/images/Logo.jpg\">\n\t\t\t</div>\n\t\t\t<nav class=\"main_nav\">\n\t\t\t\t<ul class=\"d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t<li class=\"active\"><a href=\"index.html\">TRANG CHỦ</a></li>\n\t\t\t\t\t<li><a href=\"about.html\">GIỚI THIỆU</a></li>\n\t\t\t\t\t<li><a href=\"listings.html\">DỰ ÁN</a></li>\n\t\t\t\t\t<!-- <li><a href=\"blog.html\"></a></li> -->\n\t\t\t\t\t<li><a href=\"contact.html\">LIÊN HỆ</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t\t<!-- <div class=\"hamburger ml-auto\">\n\t\t\t\t<i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"check($event)\"></i>\n\t\t\t</div> -->\n\t\t</div>\n\n\t</header>\n\n\t<!-- Menu -->\n\t<div class=\"sidebar\" [ngClass]=\"{'sidebaropen':boolean,'hidden':true}\">\n\t\t<div class=\"toggle-btn\" (click)=\"check($event)\">\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t</div>\n\t\t<ul>\n\t\t\t<li>TRANG CHỦ</li>\n\t\t\t<li>GIỚI THIỆU</li>\n\t\t\t<li>DỰ ÁN</li>\n\t\t\t<li>LIÊN HỆ</li>\n\t\t</ul>\n\t</div>\n\t<div>\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t</div>\n\t<!-- Home -->\n\t<div class=\"home\" [ngClass]=\"{'opacity':boolean}\">\n\t\t<div *ngFor=\"let item of list\">\n\t\t\t<img [class]=\"item.display\" id=\"imageHome\" [src]=\"item.url\">\n\t\t\t<a [class]=\"item.displayContent\" id=\"textHome\">{{item.content}}</a>\n\t\t</div>\n\t</div>\n\n\t<!-- Search -->\n\n\n\n\t<!-- Featured -->\n\n\t<div class=\"featured\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title_container text-center\">\n\t\t\t\t\t\t<div class=\"section_subtitle\">Những Dự Án Nỗi Bật</div>\n\t\t\t\t\t\t<div class=\"section_title\">\n\t\t\t\t\t\t\t<h1>THÔNG TIN DỰ ÁN</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row featured_row\">\n\t\t\t\t<!-- Load Facebook SDK for JavaScript -->\n\t\t\t\t<div id=\"fb-root\"></div>\n\t\t\t\t<!-- Your customer chat code -->\n\t\t\t\t<div class=\"fb-customerchat\" attribution=setup_tool page_id=\"1256006321230361\">\n\t\t\t\t</div>\n\t\t\t\t<!-- Featured Item -->\n\t\t\t\t<div id=\"SDT\">\n\t\t\t\t\t<span id=\"hotline\">Hotline:</span>\n\t\t\t\t\t<span id=\"phone\">0356950649</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"listing\">\n\t\t\t\t\t\t<div class=\"listing_image\">\n\t\t\t\t\t\t\t<div class=\"listing_image_container\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/img/1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tag_price listing_price\">Giá Bán</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"listing_content\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass=\"prop_location listing_location d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<a href=\"single.html\">Địa Chỉ Dự Án</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"listing_info\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start flex-wrap\">\n\t\t\t\t\t\t\t\t\t<!-- <li class=\"property_area d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>2500 sq ft</span>\n\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Tắm</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Ngủ</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_5.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số garages</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"listing\">\n\t\t\t\t\t\t<div class=\"listing_image\">\n\t\t\t\t\t\t\t<div class=\"listing_image_container\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/2.png\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tag_price listing_price\">GIÁ BÁN</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"listing_content\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass=\"prop_location listing_location d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<a href=\"single.html\">Địa Chỉ Dự Án</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"listing_info\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start flex-wrap\">\n\t\t\t\t\t\t\t\t\t<!-- <li class=\"property_area d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>2500 sq ft</span>\n\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Tắm</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Ngủ</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_5.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số garages</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"listing\">\n\t\t\t\t\t\t<div class=\"listing_image\">\n\t\t\t\t\t\t\t<div class=\"listing_image_container\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/img/PM2.png\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tag_price listing_price\">Giá Bán</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"listing_content\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tclass=\"prop_location listing_location d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<a href=\"single.html\">Địa Chỉ Dự Án</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"listing_info\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start flex-wrap\">\n\t\t\t\t\t\t\t\t\t<!-- <li class=\"property_area d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>2500 sq ft</span>\n\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Tắm</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số Phòng Ngủ</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_5.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span>Số garages</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Map Section -->\n\n\t<div class=\"map_section container_reset\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-xl-eq-height\">\n\n\t\t\t\t<!-- Map -->\n\t\t\t\t<div class=\"col-xl-7 order-xl-1 order-2\">\n\t\t\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"onclick($event)\">\n\t\t\t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n\t\t\t\t\t</agm-map>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Content -->\n\t\t\t\t<div class=\"col-xl-5 order-xl-2 order-1\">\n\t\t\t\t\t<div class=\"map_section_content\">\n\t\t\t\t\t\t<div class=\"map_overlay\">\n\t\t\t\t\t\t\t<svg fill=\"#55407d\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"\n\t\t\t\t\t\t\t\tpreserveAspectRatio=\"none\">\n\t\t\t\t\t\t\t\t<path d=\"M100,0 a-200,150 0 0 0 -100,100 h100 v-100 z\" />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"section_title_container\">\n\t\t\t\t\t\t\t<div class=\"section_subtitle\">Địa Điểm Dự Án</div>\n\t\t\t\t\t\t\t<div class=\"section_title\">\n\t\t\t\t\t\t\t\t<h1>Choose a location</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"locations_list d-flex flex-column align-items-start justify-content-start\">\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"25.794923\" data-lng=\"-80.133661\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 1\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"41.872883\" data-lng=\"-87.660943\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 2\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"40.779528\" data-lng=\"-73.960561\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\" checked>\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 3\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"34.082539\" data-lng=\"-118.380126\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 4\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"38.910263\" data-lng=\"-77.020496\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 5\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"39.296713\" data-lng=\"-76.634918\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 6\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"37.806964\" data-lng=\"-122.411291\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 7\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"location_contaner\" data-lat=\"33.627738\" data-lng=\"-117.909449\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"location_radio\">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\tĐỊA ĐIỂM 8\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Hot -->\n\n\t<div class=\"hot\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title_container text-center\">\n\t\t\t\t\t\t<!-- <div class=\"section_subtitle\">Dự Án Hot</div> -->\n\t\t\t\t\t\t<div class=\"section_title\">\n\t\t\t\t\t\t\t<h1>DỰ ÁN HOT SALE</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row hot_row row-eq-height\">\n\n\t\t\t\t<!-- Hot Deal Image -->\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"hot_image\">\n\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(../assets/img/PM1.png)\"></div>\n\t\t\t\t\t\t<!-- <div class=\"tags d-flex flex-row align-items-start justify-content-start flex-wrap\">\n\t\t\t\t\t\t\t<div class=\"tag tag_house\"><a href=\"listings.html\">house</a></div>\n\t\t\t\t\t\t\t<div class=\"tag tag_sale\"><a href=\"listings.html\">for sale</a></div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Hot Deal Content -->\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<div class=\"hot_content\">\n\t\t\t\t\t\t<div class=\"hot_deal\">\n\t\t\t\t\t\t\t<div class=\"tag_price\">GIÁ BÁN</div>\n\t\t\t\t\t\t\t<div class=\"hot_title\"><a href=\"#\">TÊN DỰ ÁN</a></div>\n\t\t\t\t\t\t\t<div class=\"prop_location d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t<span>ĐỊA CHỈ</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"prop_text\">\n\t\t\t\t\t\t\t\t<p>giới thiệu sơ về dự án .</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"prop_agent d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t<div class=\"prop_agent_image\"><img src=\"../assets/images/agent_1.jpg\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t<div class=\"prop_agent_name\"><a href=\"#\">Tên Người Phụ Trách</a> 0272356365</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prop_info\">\n\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start flex-wrap\">\n\t\t\t\t\t\t\t\t<!-- <li class=\"d-flex flex-row align-items-center justify-content-start\"> -->\n\t\t\t\t\t\t\t\t\t<!-- <img src=\"../assets/images/icon_2_large.png\" alt=\"\"> -->\n\t\t\t\t\t\t\t\t\t<!-- <div>\n\t\t\t\t\t\t\t\t\t\t<div>1234</div>\n\t\t\t\t\t\t\t\t\t\t<div>sq ft</div>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<!-- </li> -->\n\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_3_large.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>2</div>\n\t\t\t\t\t\t\t\t\t\t<div>Phòng Tắm</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_4_large.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>5</div>\n\t\t\t\t\t\t\t\t\t\t<div>Phòng Ngủ</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t<img src=\"../assets/images/icon_5_large.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>2</div>\n\t\t\t\t\t\t\t\t\t\t<div>garages</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Testimonials -->\n\n\t<div class=\"testimonials container_reset\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-eq-height\">\n\n\t\t\t\t<!-- Testimonials Image -->\n\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t<div class=\"testimonials_image\">\n\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(../assets/images/testimonials.jpg)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"testimonials_image_overlay\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Testimonials Content -->\n\t\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t\t<div class=\"testimonials_content\">\n\t\t\t\t\t\t<div class=\"section_title_container\">\n\t\t\t\t\t\t\t<!-- <div class=\"section_subtitle\">the best deals</div> -->\n\t\t\t\t\t\t\t<div class=\"section_title\">\n\t\t\t\t\t\t\t\t<h1>CHỨNG NHẬN KHÁCH HÀNG</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Testimonials Slider -->\n\t\t\t\t\t\t<div class=\"testimonials_slider_container\">\n\t\t\t\t\t\t\t<!-- <div class=\"owl-carousel owl-theme test_slider\"> -->\n\n\t\t\t\t\t\t\t\t<!-- Slide -->\n\t\t\t\t\t\t\t\t<!-- <div class=\"test_slide\"> -->\n\t\t\t\t\t\t\t\t\t<div class=\"test_quote\">\"They helped us find our home\"</div>\n\t\t\t\t\t\t\t\t\t<div class=\"test_text\">\n\t\t\t\t\t\t\t\t\t\t<p>Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent\n\t\t\t\t\t\t\t\t\t\t\tvulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla\n\t\t\t\t\t\t\t\t\t\t\tlobortis justo, ut tempor leo cursus in. Nulla aliquet bibendum sem, non\n\t\t\t\t\t\t\t\t\t\t\tplacerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at\n\t\t\t\t\t\t\t\t\t\t\tvehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus\n\t\t\t\t\t\t\t\t\t\t\tin.</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"test_author\"><a href=\"#\">Cristinne Smith</a>, Client</div> -->\n\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<footer class=\"footer\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<!-- Footer Column -->\n\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 footer_col\">\n\t\t\t\t\t\t<div class=\"footer_column\">\n\t\t\t\t\t\t\t<div class=\"footer_title\">Information</div>\n\t\t\t\t\t\t\t<div class=\"footer_info\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<!-- Phone -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<div><img src=\"../assets/images/phone-call.svg\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t\t<span>0356950649</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<!-- Address -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<div><img src=\"../assets/images/placeholder.svg\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t\t<span>20 trần hưng đạo tp quãng ngãi</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<!-- Email -->\n\t\t\t\t\t\t\t\t\t<li class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t\t<div><img src=\"../assets/images/envelope.svg\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t\t<span>hosting@contact.com</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"footer_bar\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"footer_bar_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start\">\n\t\t\t\t\t\t\t<div class=\"copyright order-md-1 order-2\">\n\t\t\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n\t\t\t\t\t\t\t\tCopyright &copy;\n\t\t\t\t\t\t\t\t<script>document.write(new Date().getFullYear());</script> Mỹ lệ bất động sản <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a\n\t\t\t\t\t\t\t\t\thref=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n\t\t\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<nav class=\"footer_nav order-md-2 order-1 ml-md-auto\">\n\t\t\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\t\t\tclass=\"d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"index.html\">TRANG CHỦ</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"about.html\">GIỚI THIỆU</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"listings.html\">DỰ ÁN</a></li>\n\t\t\t\t\t\t\t\t\t<!-- <li><a href=\"blog.html\">News</a></li> -->\n\t\t\t\t\t\t\t\t\t<li><a href=\"contact.html\">LIÊN HỆ</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n</div>\n\n\n\n<script src=\"../assets/js/jquery-3.3.1.min.js\"></script>\n<script src=\"../assets/styles/bootstrap-4.1.2/popper.js\"></script>\n<script src=\"../assets/styles/bootstrap-4.1.2/bootstrap.min.js\"></script>\n<script src=\"../assets/plugins/greensock/TweenMax.min.js\"></script>\n<script src=\"../assets/plugins/greensock/TimelineMax.min.js\"></script>\n<script src=\"../assets/plugins/scrollmagic/ScrollMagic.min.js\"></script>\n<script src=\"../assets/plugins/greensock/animation.gsap.min.js\"></script>\n<script src=\"../assets/plugins/greensock/ScrollToPlugin.min.js\"></script>\n<script src=\"../assets/plugins/OwlCarousel2-2.3.4/owl.carousel.js\"></script>\n<script src=\"../assets/plugins/easing/easing.js\"></script>\n<script src=\"../assets/plugins/progressbar/progressbar.min.js\"></script>\n<script src=\"../assets/plugins/parallax-js-master/parallax.min.js\"></script>\n<script src=\"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA\"></script>\n<script src=\"../assets/js/custom.js\"></script>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.list = [
            { id: 1, url: "../assets/img/1.jpg", content: "noi dung thu nhat noi dung thu 1 ", display: "first", displayContent: "firstContent" },
            { id: 2, url: "../assets/img/PM2.png", content: "noi dung thu nhat  noi dung thu 2 ", display: "first", displayContent: "firstContent" },
            { id: 3, url: "../assets/img/3.png", content: "noi dung thu nhat  noi dung thu 3 ", display: "first", displayContent: "firstContent" }
        ];
        this.index = this.list.length;
        this.secondsCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000).subscribe(function (n) {
            if (_this.index === 0) {
                _this.index = _this.list.length;
                _this.list.forEach(function (index) {
                    index.display = "first";
                    index.displayContent = "firstContent";
                });
            }
            else {
                _this.list[_this.index - 1].display = "second";
                _this.list[_this.index - 1].displayContent = "secondContent";
                _this.index -= 1;
            }
        });
        this.boolean = false;
        this.lat = 10.824365;
        this.lng = 106.761878;
    }
    AppComponent.prototype.check = function ($event) {
        this.boolean = !this.boolean;
    };
    AppComponent.prototype.onclick = function (event) {
        console.log(event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyALHBPIUxEetCPYOFtnMIfqaYxldLU4_PE'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\myle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map