webpackJsonp(["app/js/testpaper-manage/index"],{0:function(e,t){e.exports=jQuery},c7d82e98e535fb590f55:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n("b334fd7e4c5a19234db2"),o=a(c),u=n("de585ca0d3c2d0205c51"),s=a(u),l=n("f637e828bcb096623369"),f=a(l),d=function(){function e(t){r(this,e),this.$container=t,this._initEvent(),this._init()}return i(e,[{key:"_initEvent",value:function(){var e=this;this.$container.on("click",".open-testpaper,.close-testpaper",function(t){return e.testpaperAction(t)})}},{key:"_init",value:function(){}},{key:"testpaperAction",value:function(e){var t=$(e.currentTarget),n=t.closest("tr");confirm(t.attr("title"))&&$.post(t.data("url"),function(e){(0,o.default)("success",Translator.trans("testpaper_manage.save_success_hint")),n.replaceWith(e)}).error(function(){(0,o.default)("danger",Translator.trans("testpaper_manage.save_error_hint"))})}}]),e}(),h=$("#quiz-table-container");new d(h),new s.default(h),new f.default(h)},f637e828bcb096623369:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("b334fd7e4c5a19234db2"),c=function(e){return e&&e.__esModule?e:{default:e}}(i),o=function(){function e(t,n){a(this,e),this.$element=t,this.onSuccess=n,this.initEvent()}return r(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="item-delete"]',function(t){return e._itemDelete(t)}),this.$element.on("click",'[data-role="batch-delete"]',function(t){return e._batchDelete(t)})}},{key:"_itemDelete",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=t.data("message"),r=this;a||(a=Translator.trans("site.data.delete_name_hint",{name:n})),confirm(a)&&$.post(t.data("url"),function(){$.isFunction(r.onSuccess)?r.onSuccess.call(r.$element):(t.closest("[data-role=item]").remove(),(0,c.default)("success","删除成功"),window.location.reload())})}},{key:"_batchDelete",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=[];if(this.$element.find('[data-role="batch-item"]:checked').each(function(){a.push(this.value)}),0==a.length)return void(0,c.default)("danger",Translator.trans("site.data.uncheck_name_hint",{name:n}));confirm(Translator.trans("site.data.delete_check_name_hint",{name:n}))&&((0,c.default)("info",Translator.trans("site.data.delete_submiting_hint")),$.post(t.data("url"),{ids:a},function(){window.location.reload()}))}}]),e}();t.default=o}},["c7d82e98e535fb590f55"]);