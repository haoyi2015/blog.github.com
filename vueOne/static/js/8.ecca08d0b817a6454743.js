webpackJsonp([8,15],{122:function(e,t,i){t=e.exports=i(13)(),t.push([e.id,".list-block[_v-5e43b864]{margin:.5rem 0}.list[_v-5e43b864]{bottom:2.5rem;padding-bottom:1rem}",""])},140:function(e,t,i){var n=i(122);"string"==typeof n&&(n=[[e.id,n,""]]);i(14)(n,{});n.locals&&(e.exports=n.locals)},162:function(e,t){e.exports=' <div class=container _v-5e43b864=""> <nav class="bar bar-nav" _v-5e43b864=""> <h1 class=title _v-5e43b864="">滚动加载更多</h1> </nav> <div class="content list" v-infinite-scroll=loadMore _v-5e43b864=""> <div class="list-block infinite-list" _v-5e43b864=""> <ul _v-5e43b864=""> <li class=item-content v-for="item in items" track-by=$index _v-5e43b864=""> <div class=item-inner _v-5e43b864=""> <div class=item-title _v-5e43b864="">{{item.id}}</div> <div class=item-after _v-5e43b864="">{{item.name}}</div> </div> </li> </ul> </div> </div> </div> '},189:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.wxShareConfig=t.loader=t.hookTime=void 0;var o=i(39),l=n(o),s=i(108),a=n(s);t.hookTime=function(e,t){var i=new Date,n=i.getMinutes(),o=i.getSeconds(),l=i.getMilliseconds();console.log(e+" "+t+" "+n+"-"+o+"-"+l)},t.loader={show:function(){if(!(0,l.default)(".ball-beat")[0]){var e=document.body;(0,l.default)(e).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')}},hide:function(){(0,l.default)(".ball-beat").remove()}},t.wxShareConfig=function(e,t,i){var n=e.title,o=e.desc,l=e.link,s=e.imgUrl;console.log("wxShare Config"),a.default.ready(function(){a.default.onMenuShareAppMessage({title:n,desc:o,link:l,imgUrl:s,success:t,fail:i}),a.default.onMenuShareTimeline({title:n,link:l,imgUrl:s,success:t,fail:i}),a.default.onMenuShareQQ({title:n,desc:o,link:l,imgUrl:s,success:t,fail:i}),a.default.onMenuShareWeibo({title:n,desc:o,link:l,imgUrl:s,success:t,fail:i}),a.default.onMenuShareQZone({title:n,desc:o,link:l,imgUrl:s,success:t,fail:i})})}},196:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(189),l=i(39),s=n(l);t.default={route:{data:function(e){var t=(e.to,e.next);t()}},ready:function(){for(var e=0;e<15;e++)this.items.push({id:e,name:"2017"+(e+1)})},data:function(){return{items:[],loading:!1}},computed:{length:function(){return this.items.length}},methods:{loadMore:function(){var e=this;if(!this.loading){this.loading=!0;var t=(0,s.default)(".list");o.loader.show(),setTimeout(function(){for(var i=e.length,n=0;n<5;n++)e.items.push({id:i+n,name:"2017"+(i+1)});var l=t[0].scrollHeight-t.height()-20;t.scrollTop(l),e.loading=!1,o.loader.hide()},1500)}}}}},211:function(e,t,i){var n,o,l={};i(140),n=i(196),o=i(162),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(l).forEach(function(e){var t=l[e];s.computed[e]=function(){return t}})}});