(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eae8d84"],{"413c":function(t,e,n){"use strict";var r=n("5bc1"),o=n.n(r);o.a},"5bc1":function(t,e,n){},7183:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route_container"},[n("h1",[t._v("Results for "+t._s(t.searchType)+" containing '"+t._s(t.$route.params.q)+"'")]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.results&&t.results.length?n("div",{key:"results",staticClass:"search__results"},[n("scroll-load",{attrs:{loading:t.loading},on:{loadNext:t.loadNextPage}},["users"===t.searchType?[t._l(t.results,function(t){return n("user-display",{key:t.id,attrs:{user:t}})}),t._l(t.next,function(e){return t.loading?n("user-placeholder",{key:e}):t._e()})]:t._e(),"threads"===t.searchType?[t._l(t.results,function(t){return n("thread-display",{key:t.id,attrs:{thread:t}})}),t._l(t.next,function(e){return t.loading?n("thread-display-placeholder",{key:e}):t._e()})]:t._e()],2)],1):t._e(),t.showNoResults||t.queryTooShort?n("div",{key:"no results",staticClass:"overlay_message search__overlay_message"},[n("span",{staticClass:"fa fa-exclamation-circle"}),t._v("\n\t\t\t\t"+t._s(t.queryTooShort?"Search term is too short":"No results found")+"\n\t\t")]):n("div",{key:"loading"},["users"===t.searchType?n("user-placeholder"):t._e(),"threads"===t.searchType?n("thread-display-placeholder"):t._e()],1)])],1)},o=[],s=n("2909"),a=(n("7f7f"),n("8674")),i=n("ac51"),c=n("73b2"),l=n("ce34"),u=n("9870"),h=n("c4b0"),d=n("bd28"),f={name:"Search",components:{ScrollLoad:a["a"],UserDisplay:i["a"],UserPlaceholder:c["a"],ThreadDisplay:l["a"],ThreadDisplayPlaceholder:u["a"]},data:function(){return{results:null,next:0,offset:0,loading:!1}},computed:{searchType:function(){var t=this.$route.name;return"search/users"===t?"users":"search/threads"===t?"threads":void 0},showNoResults:function(){return!this.loading&&this.results&&!this.results.length},queryTooShort:function(){return this.$route.params.q.length<4}},methods:{getResults:function(){var t=this;this.queryTooShort||(this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.axios.get("/api/v1/search/".concat(this.searchType.slice(0,-1),"?q=").concat(this.$route.params.q)).then(function(e){t.results=e.data[t.searchType],t.next=e.data.next,t.offset=e.data.offset}).catch(Object(h["a"])(this.$store)))},loadNextPage:function(){var t=this;this.next&&(this.loading=!0,this.axios.get("/api/v1/search/".concat(this.searchType.slice(0,-1),"?q=").concat(this.$route.params.q,"&offset=").concat(this.offset)).then(function(e){var n;(n=t.results).push.apply(n,Object(s["a"])(e.data[t.searchType])),t.next=e.data.next,t.offset=e.data.offset,t.loading=!1}).catch(function(e){t.loading=!1,Object(h["a"])(t.$store)(e)}))}},watch:{"$route.params":"getResults"},mounted:function(){this.$store.dispatch("setTitle","Search | "+this.$route.params.q),this.getResults(),Object(d["a"])("search")}},p=f,m=(n("413c"),n("2877")),y=Object(m["a"])(p,r,o,!1,null,"570f6886",null);y.options.__file="SearchUsersThreads.vue";e["default"]=y.exports},"84a2":function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,d=u||h||Function("return this")(),f=Object.prototype,p=f.toString,m=Math.max,y=Math.min,v=function(){return d.Date.now()};function g(t,e,r){var o,s,a,i,c,l,u=0,h=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(n);function p(e){var n=o,r=s;return o=s=void 0,u=e,i=t.apply(r,n),i}function g(t){return u=t,c=setTimeout(x,e),h?p(t):i}function _(t){var n=t-l,r=t-u,o=e-n;return d?y(o,a-r):o}function T(t){var n=t-l,r=t-u;return void 0===l||n>=e||n<0||d&&r>=a}function x(){var t=v();if(T(t))return S(t);c=setTimeout(x,_(t))}function S(t){return c=void 0,f&&o?p(t):(o=s=void 0,i)}function $(){void 0!==c&&clearTimeout(c),u=0,o=l=s=c=void 0}function j(){return void 0===c?i:S(v())}function q(){var t=v(),n=T(t);if(o=arguments,s=this,l=t,n){if(void 0===c)return g(l);if(d)return c=setTimeout(x,e),p(l)}return void 0===c&&(c=setTimeout(x,e)),i}return e=w(e)||0,b(r)&&(h=!!r.leading,d="maxWait"in r,a=d?m(w(r.maxWait)||0,e):a,f="trailing"in r?!!r.trailing:f),q.cancel=$,q.flush=j,q}function _(t,e,r){var o=!0,s=!0;if("function"!=typeof t)throw new TypeError(n);return b(r)&&(o="leading"in r?!!r.leading:o,s="trailing"in r?!!r.trailing:s),g(t,e,{leading:o,maxWait:e,trailing:s})}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function T(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||T(t)&&p.call(t)==o}function w(t){if("number"==typeof t)return t;if(x(t))return r;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=i.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):a.test(t)?r:+t}t.exports=_}).call(this,n("c8ba"))},8674:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll_load"},[t._t("default")],2)},o=[],s=n("8e8d"),a=n("84a2"),i=n.n(a),c={name:"ScrollLoad",props:["loading","query-selector","padding-bottom","padding-top"],components:{LoadingButton:s["a"]},computed:{element:function(){return this.querySelector?document.querySelector(this.querySelector):null}},methods:{onScroll:i()(function(t){var e,n,r=this.paddingBottom||300,o=this.paddingTop||150;this.loading||(this.element?(e=Math.floor(this.element.scrollTop+this.element.getBoundingClientRect().height+r-this.element.scrollHeight),n=o-this.element.scrollTop):(e=window.innerHeight+window.pageYOffset+r-document.body.scrollHeight,n=o-document.body.scrollTop),e>0?this.$emit("loadNext"):n>0&&this.$emit("loadPrevious"))})},mounted:function(){(this.element||window).addEventListener("scroll",this.onScroll)},destroyed:function(){(this.element||window).removeEventListener("scroll",this.onScroll)}},l=c,u=n("2877"),h=Object(u["a"])(l,r,o,!1,null,null,null);h.options.__file="ScrollLoad.vue";e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-2eae8d84.ad301132.js.map