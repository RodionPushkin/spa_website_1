(function(e){function t(t){for(var a,n,i=t[0],d=t[1],r=t[2],u=0,v=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&v.push(c[n][0]),c[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var d=s[i];0!==c[d]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},c={app:0},o=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var l=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4082:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c={class:"content mf m"},o={class:"main white"};function n(e,t,s,n,i,d){var r=Object(a["u"])("c_menu"),l=Object(a["u"])("c_mouse"),u=Object(a["u"])("c_pages");return Object(a["o"])(),Object(a["c"])("div",c,[Object(a["f"])(r),Object(a["f"])(l),Object(a["d"])("main",o,[Object(a["f"])(u)])])}var i=function(e){return Object(a["r"])("data-v-1007c687"),e=e(),Object(a["p"])(),e},d={class:"menu"},r=i((function(){return Object(a["d"])("div",{class:"button-wrap"},[Object(a["d"])("div",{class:"button-item"})],-1)})),l=[r],u={class:"nav"};function v(e,t,s,c,o,n){var i=this;return Object(a["o"])(),Object(a["c"])("div",d,[Object(a["d"])("div",{class:"menu-button hover",onClick:t[0]||(t[0]=function(){return n.toggleMenu&&n.toggleMenu.apply(n,arguments)})},l),Object(a["d"])("nav",u,[Object(a["d"])("div",{class:"nav-item mf hover",onClick:t[1]||(t[1]=function(e){return i.$store.dispatch("SET_SELECTED_PAGE",{payload:0})})}," главная "),Object(a["d"])("div",{class:"nav-item mf hover",onClick:t[2]||(t[2]=function(e){return i.$store.dispatch("SET_SELECTED_PAGE",{payload:1})})}," проекты "),Object(a["d"])("div",{class:"nav-item mf hover",onClick:t[3]||(t[3]=function(e){return i.$store.dispatch("SET_SELECTED_PAGE",{payload:2})})}," о нас "),Object(a["d"])("div",{class:"nav-item mf hover",onClick:t[4]||(t[4]=function(e){return i.$store.dispatch("SET_SELECTED_PAGE",{payload:3})})}," контакты ")])])}var f={name:"c_menu",methods:{toggleMenu:function(){var e=document.querySelector(".menu");e.querySelector(".menu-button").classList.contains("active")?(e.querySelector(".menu-button").classList.remove("active"),e.querySelector(".nav").classList.remove("active"),document.querySelector("body").classList.remove("active"),this.$store.dispatch("SET_MENU_OPENED",{payload:!1})):(e.querySelector(".menu-button").classList.add("active"),e.querySelector(".nav").classList.add("active"),document.querySelector("body").classList.add("active"),this.$store.dispatch("SET_MENU_OPENED",{payload:!0}))}}},p=(s("70d8"),s("6b0d")),m=s.n(p);const L=m()(f,[["render",v],["__scopeId","data-v-1007c687"]]);var b=L,h=Object(a["d"])("div",{class:"cursor"},null,-1),g=Object(a["d"])("div",{class:"cursor-aura"},null,-1),E=[h,g];function O(e,t,s,c,o,n){return Object(a["o"])(),Object(a["c"])("div",null,E)}var y=s("cffa"),w={mounted:function(){window.innerHeight<window.innerWidth&&this.cursorMovement()},methods:{cursorMovement:function(){var e,t=document.querySelector(".cursor"),s=document.querySelector(".cursor-aura"),a=0,c=0,o=0,n=0,i=function(e){a=e.pageX,c=e.pageY};document.querySelector("body").addEventListener("mousemove",(function(a){e=a,i(e),s.classList.remove("disabled"),t.classList.remove("disabled"),a.toElement.classList.contains("hover")?(t.classList.add("event-hover"),s.classList.add("event-hover")):a.toElement.classList.contains("button")?(t.classList.add("event-button"),s.classList.add("event-button")):(t.classList.remove("event-hover"),s.classList.remove("event-hover"),t.classList.remove("event-button"),s.classList.remove("event-button")),a.toElement.classList.contains("white")?(t.classList.add("event-white"),s.classList.add("event-white"),t.classList.add("event-white"),s.classList.add("event-white")):(t.classList.remove("event-white"),s.classList.remove("event-white"),t.classList.remove("event-white"),s.classList.remove("event-white"))})),window.addEventListener("scroll",(function(){i(e)})),document.querySelector("body").addEventListener("mouseout",(function(){s.classList.add("disabled"),t.classList.add("disabled")})),y["a"].to({},.01,{repeat:-1,onRepeat:function(){o+=(a-o)/5,n+=(c-n)/5,y["a"].set(t,{css:{left:a-window.pageXOffset,top:c-window.pageYOffset}}),y["a"].set(s,{css:{left:o-window.pageXOffset,top:n-window.pageYOffset}})}})}}};s("c429");const j=m()(w,[["render",O]]);var S=j,_={class:"pages"},P=Object(a["e"])('<div class="section selected" data-v-45708793><div class="page" data-v-45708793><div class="page-bg" data-v-45708793><h1 class="hover white" data-v-45708793>главная</h1></div></div></div><div class="section" data-v-45708793><div class="page" data-v-45708793><div class="page-bg" data-v-45708793><h1 class="hover white" data-v-45708793>проекты</h1></div></div></div><div class="section" data-v-45708793><div class="page" data-v-45708793><div class="page-bg" data-v-45708793><h1 class="hover white" data-v-45708793>о нас</h1></div></div></div><div class="section" data-v-45708793><div class="page" data-v-45708793><div class="page-bg" data-v-45708793><h1 class="hover white" data-v-45708793>контакты</h1></div></div></div>',4),k=[P];function T(e,t,s,c,o,n){return Object(a["o"])(),Object(a["c"])("div",_,k)}var q={name:"component",computed:{menu:function(){return this.$store.getters.MENUOPENED},selectedPage:function(){return this.$store.getters.SELECTEDPAGE}},watch:{menu:function(e,t){this.togglepages(e)},selectedPage:function(e,t){this.changePage(e)}},mounted:function(){},methods:{togglepages:function(e){var t=document.querySelector(".pages"),s=t.querySelectorAll(".section");if(1==e.payload){t.classList.add("active"),document.querySelector(".main").classList.add("active");for(var a=0;a<s.length;a++)s[a].classList.remove("o1"),s[a].classList.remove("o2"),s[a].classList.remove("o3"),s[a].classList.remove("o4");for(var c=0;c<s.length;c++)if(s[c].classList.contains("selected")){switch(c){case 0:s[0].classList.add("o1"),s[1].classList.add("o2"),s[2].classList.add("o3"),s[3].classList.add("o4"),s[0].classList.add("selected");break;case 1:s[0].classList.add("o4"),s[1].classList.add("o1"),s[2].classList.add("o2"),s[3].classList.add("o3"),s[1].classList.add("selected");break;case 2:s[0].classList.add("o3"),s[1].classList.add("o4"),s[2].classList.add("o1"),s[3].classList.add("o2"),s[2].classList.add("selected");break;case 3:s[0].classList.add("o2"),s[1].classList.add("o3"),s[2].classList.add("o4"),s[3].classList.add("o1"),s[3].classList.add("selected");break}s[c].classList.remove("selected")}}else t.classList.remove("active"),document.querySelector(".main").classList.remove("active"),void 0!=this.$store.getters.SELECTEDPAGE.payload?s[this.$store.getters.SELECTEDPAGE.payload].classList.add("selected"):s[this.$store.getters.SELECTEDPAGE].classList.add("selected"),s[0].classList.remove("o1"),s[1].classList.remove("o2"),s[2].classList.remove("o3"),s[3].classList.remove("o4")},changePage:function(e){var t=document.querySelector(".pages"),s=t.querySelectorAll(".section");console.log(e.payload);for(var a=0;a<s.length;a++)s[a].classList.remove("o1"),s[a].classList.remove("o2"),s[a].classList.remove("o3"),s[a].classList.remove("o4"),s[a].classList.remove("selected");switch(e.payload){case 0:s[0].classList.add("o1"),s[1].classList.add("o2"),s[2].classList.add("o3"),s[3].classList.add("o4"),s[0].classList.add("selected");break;case 1:s[0].classList.add("o4"),s[1].classList.add("o1"),s[2].classList.add("o2"),s[3].classList.add("o3"),s[1].classList.add("selected");break;case 2:s[0].classList.add("o3"),s[1].classList.add("o4"),s[2].classList.add("o1"),s[3].classList.add("o2"),s[2].classList.add("selected");break;case 3:s[0].classList.add("o2"),s[1].classList.add("o3"),s[2].classList.add("o4"),s[3].classList.add("o1"),s[3].classList.add("selected");break}}}};s("7dbe");const M=m()(q,[["render",T],["__scopeId","data-v-45708793"]]);var C=M,A={components:{c_menu:b,c_mouse:S,c_pages:C}};s("d0f0");const D=m()(A,[["render",n]]);var N=D,$=s("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var G=s("6c02"),x={class:"page"};function U(e,t,s,c,o,n){return Object(a["o"])(),Object(a["c"])("div",x)}var X={mounted:function(){}};const Y=m()(X,[["render",U]]);var F=Y,H=[{path:"/",name:"Home",component:F}],I=Object(G["a"])({history:Object(G["b"])("/"),routes:H}),J=I,B=s("5502"),R=Object(B["a"])({state:{pages:{selectedPage:0,isMenuOpened:!1}},getters:{SELECTEDPAGE:function(e){return e.pages.selectedPage},MENUOPENED:function(e){return e.pages.isMenuOpened}},mutations:{setMenuOpened:function(e,t){e.pages.isMenuOpened=t},setSelectedPage:function(e,t){e.pages.selectedPage=t}},actions:{SET_MENU_OPENED:function(e,t){e.commit("setMenuOpened",t)},SET_SELECTED_PAGE:function(e,t){e.commit("setSelectedPage",t)}}}),W=s("bc3a"),z=s.n(W),K=s("130e");Object(a["b"])(N).use(R).use(J).use(K["a"],z.a).mount("#app")},"70d8":function(e,t,s){"use strict";s("e492")},"7dbe":function(e,t,s){"use strict";s("a092")},a092:function(e,t,s){},c429:function(e,t,s){"use strict";s("4082")},d0f0:function(e,t,s){"use strict";s("fdb5")},e492:function(e,t,s){},fdb5:function(e,t,s){}});
//# sourceMappingURL=app.710eb967.js.map