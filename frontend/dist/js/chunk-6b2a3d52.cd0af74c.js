(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2a3d52"],{"190c":function(t,o,e){},"1c59":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"post",class:{"post--highlighted":t.highlight,"post--selected":t.selected},on:{mouseenter:function(o){t.hover=!0},mouseleave:function(o){t.hover=!1},click:t.goToPost}},[e("div",{staticClass:"post__quote",class:{"post__quote--show":t.showQuote&&t.allowQuote&&t.showReply&&t.$store.state.username},style:{left:t.quoteX+"px",top:t.quoteY+"px"},on:{mousedown:t.emitReply}},[e("span",{staticClass:"post__quote__icon fa fa-quote-right"}),t._v("\n\t\tQuote post\t\n\t")]),e("span",{staticClass:"post__remove_icon fa fa-check",class:{"post__remove_icon--show":t.showSelect&&!t.post.removed},on:{click:function(o){return o.stopPropagation(),t.toggleSelected(o)}}}),e("modal-window",{on:{click:function(t){t.stopPropagation()}},model:{value:t.showShareModal,callback:function(o){t.showShareModal=o},expression:"showShareModal"}},[e("div",{attrs:{slot:"main"},slot:"main"},[e("p",[t._v("Copy this URL to share the post")]),e("fancy-input",{attrs:{placeholder:"Post URL",value:t.postURL,width:"100%"}})],1),e("button",{staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:function(o){o.stopPropagation(),t.setShareModalState(!1)}},slot:"footer"},[t._v("OK")])]),e("report-post-modal",{attrs:{"post-id":t.post.id},model:{value:t.showReportPostModal,callback:function(o){t.showReportPostModal=o},expression:"showReportPostModal"}}),e("div",{staticClass:"post__meta_data"},[e("div",{staticStyle:{display:"inline-flex"}},[e("avatar-icon",{staticClass:"post__avatar",attrs:{user:t.post.User}}),t.showThread?e("div",{staticClass:"post__thread",on:{click:function(o){return o.stopPropagation(),t.goToThread(o)}}},[t._v("\n\t\t\t\tIn thread "),e("span",{staticClass:"post__thread__name"},[t._v(t._s(t.post.Thread.name))]),t._v("\n\t\t\t\t · \n\t\t\t")]):e("div",{staticClass:"post__user"},[t._v("\n\t\t\t\t"+t._s(t.username)+"\n\n\t\t\t\t"),t.post.User&&t.post.User.admin?e("span",{staticClass:"admin_badge"},[t._v("admin")]):t._e()]),t.post.replyingToUsername?e("replying-to",{staticStyle:{"margin-right":"0.5rem"},attrs:{replyId:t.post.replyId,username:t.post.replyingToUsername},on:{click:function(o){t.$emit("goToPost",t.post.replyId,!0)}}}):t._e()],1),e("div",{staticClass:"post__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"time|date",", ")))])]),e("div",{staticClass:"post__date post__date--mobile"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"time|date",", ")))]),e("div",{staticClass:"post__content",attrs:{tabindex:"-1"},domProps:{innerHTML:t._s(t.postContentHTML)},on:{mouseup:t.setShowQuote,blur:function(o){t.showQuote=!1}}}),e("div",{staticClass:"post__footer"},[e("div",{staticClass:"post__footer_group"},[e("div",{staticClass:"post__footer_sub_group"},[t.showReply?e("heart-button",{attrs:{post:t.post}}):t._e()],1),t.post.Replies.length?e("div",{staticClass:"post__footer_sub_group"},[e("span",{staticClass:"post__footer_sub_group__text post__footer_sub_group__text--replies"},[t._v("replies")]),t._l(t.post.Replies,function(o,s){return e("post-reply",{key:o.postNumber,attrs:{post:o,hover:t.hover,first:0===s},on:{click:function(e){t.$emit("goToPost",o.postNumber)}}})})],2):t._e()]),e("div",{staticClass:"post__footer_group post__actions",class:{"post__actions--show":t.showActions}},[e("div",{staticClass:"post__action post__share",on:{click:function(o){o.stopPropagation(),t.setShareModalState(!0)}}},[t._v("share")]),t.$store.state.username&&!t.post.removed?e("div",{staticClass:"post__action",on:{click:function(o){o.stopPropagation(),t.setShowReportPostModal(!0)}}},[t._v("\n\t\t\t\treport\n\t\t\t")]):t._e(),t.$store.state.username&&t.showReply?e("div",{staticClass:"post__action post__reply",on:{click:function(o){o.stopPropagation(),t.$emit("reply",t.post.id,t.username)}}},[t._v("\n\t\t\t\treply\n\t\t\t")]):t._e()])]),e("div",{staticClass:"post__replies"})],1)},a=[],n=(e("a481"),e("6b54"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("info-tooltip",{staticClass:"post_reply",class:{"post_reply--hover":t.hover,"post_reply--first":t.first}},[e("template",{slot:"content"},[e("div",{staticStyle:{"margin-top":"-0.25rem"}},[e("div",{staticClass:"post_reply__username"},[t._v(t._s(t.user.username))]),e("div",{staticClass:"post_reply__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"date|time"," - ")))])]),e("div",{staticClass:"post_reply__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(t.post.content),100)))])]),e("div",{staticClass:"post_reply__display",attrs:{slot:"display"},on:{click:function(o){o.stopPropagation(),t.$emit("click")}},slot:"display"},[e("div",{staticClass:"post_reply__letter",style:{"background-color":t.user.color}},[t._v("\n\t\t\t"+t._s(t.user.letter)+"\n\t\t")])])],2)}),i=[],l=(e("f751"),e("cadf"),e("551c"),e("097d"),e("44ea")),r={name:"PostReply",props:["post","hover","first"],components:{InfoTooltip:l["a"]},computed:{user:function(){return this.post.User?Object.assign({letter:this.post.User.username[0]},this.post.User):{letter:" ",color:null,username:"[deleted]"}}}},c=r,p=(e("dd92"),e("2877")),u=Object(p["a"])(c,n,i,!1,null,null,null);u.options.__file="PostReply.vue";var d=u.exports,h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"heart_button"},[e("modal-window",{attrs:{"close-button":!0,"hide-footer":!0,"no-padding":!0},model:{value:t.showModal,callback:function(o){t.showModal=o},expression:"showModal"}},[e("div",{staticClass:"heart_button__modal",attrs:{slot:"main"},slot:"main"},[e("div",{staticClass:"heart_button__modal__header"},[t._v("Likes")]),t._l(t.likes,function(o){return e("div",{staticClass:"heart_button__modal__user",on:{click:function(e){t.$router.push("/user/"+o.username)}}},[e("avatar-icon",{attrs:{user:o,size:"small"}}),e("div",{staticClass:"heart_button__modal__username"},[t._v(t._s(o.username))])],1)}),t.likes.length?t._e():e("div",{staticClass:"heart_button__modal__empty"},[t._v("\n\t\t\t\tNo likes\n\t\t\t")])],2)]),e("span",{staticClass:"heart_button__heart fa",class:{"heart_button__heart--unlikeable":!t.likeable,"heart_button__heart--liked":t.liked},on:{click:t.changeLike}}),e("span",{staticClass:"heart_button__count",on:{click:function(o){t.showModal=!0}}},[t._v(t._s(t.likes.length))])],1)},_=[],m=e("6307"),f=e("9098"),v=e("c4b0"),g={name:"HeartButton",props:["post"],components:{ModalWindow:m["a"],AvatarIcon:f["a"]},data:function(){return{likes:this.post.Likes,showModal:!1}},computed:{likeable:function(){var t=this.post.User?this.post.User.username:null;return this.$store.state.username&&t!==this.$store.state.username},liked:function(){var t=this;return this.likes.some(function(o){return o.username===t.$store.state.username})}},methods:{getIndexOfUser:function(){for(var t,o=0;o<this.likes.length;o++){var e=this.likes[o];if(e.username===this.$store.state.username){t=o;break}}return t},changeLike:function(t){var o=this,e=this.post.id;this.likeable&&(this.liked?this.axios.delete("/api/v1/post/"+e+"/like").then(function(){o.likes.splice(o.getIndexOfUser(),1)}).catch(Object(v["a"])(this.$store)):this.axios.put("/api/v1/post/"+e+"/like").then(function(){return o.axios.get("/api/v1/user/"+o.$store.state.username)}).then(function(t){o.likes.push(t.data)}).catch(Object(v["a"])(this.$store)))}}},b=g,w=(e("e2b1"),Object(p["a"])(b,h,_,!1,null,"07099b20",null));w.options.__file="HeartButton.vue";var y=w.exports,C=e("80e3"),k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("info-tooltip",{staticClass:"replying_to",on:{hover:t.loadPost}},[e("template",{slot:"content"},[e("div",{staticStyle:{"margin-top":"-0.25rem"}},[t.post?e("div",{staticClass:"replying_to__username"},[t._v(t._s(t.postUsername))]):t._e(),t.post?e("div",{staticClass:"replying_to__date"},[t._v(t._s(t._f("formatDate")(t.post.createdAt,"date|time"," - ")))]):t._e()]),t.post?e("div",{staticClass:"replying_to__content"},[t._v(t._s(t._f("truncate")(t._f("stripTags")(t.post.content),100)))]):[t._v("Loading...")]],2),e("div",{staticClass:"replying_to__display",attrs:{slot:"display"},on:{click:function(o){o.stopPropagation(),t.$emit("click")}},slot:"display"},[e("span",{staticClass:"fa fa-reply replying_to__icon"}),t._v("\n\t\t"+t._s(t.username||"[deleted]")+"\n\t")])],2)},S=[],M={name:"ReplyingTo",props:["replyId","username"],components:{InfoTooltip:l["a"]},data:function(){return{post:null}},computed:{postUsername:function(){return this.post.User?this.post.User.username:"[deleted]"}},methods:{loadPost:function(){var t=this;this.post||this.axios.get("/api/v1/post/"+this.replyId).then(function(o){t.post=o.data}).catch(Object(v["a"])(this.$store))}}},R=M,P=(e("acf9"),Object(p["a"])(R,k,S,!1,null,null,null));P.options.__file="ReplyingTo.vue";var $=P.exports,T=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"report_post_modal"},[e("modal-window",{attrs:{loading:t.loading},model:{value:t.showModal,callback:function(o){t.showModal=o},expression:"showModal"}},[e("div",{staticClass:"report_post_modal__modal",attrs:{slot:"main"},slot:"main"},[e("h3",[t._v("Report this post")]),e("div",{staticClass:"report_post_modal--margin"},[t._v("Select a reason for reporting this post below:")]),e("select-button",{staticClass:"report_post_modal--margin",attrs:{options:t.reportOptions,"touch-disabled":!0},model:{value:t.selectedOption,callback:function(o){t.selectedOption=o},expression:"selectedOption"}})],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"button button--modal",on:{click:function(o){return o.stopPropagation(),t.submitReport(o)}}},[t._v("Submit")]),e("button",{staticClass:"button button--modal",on:{click:function(o){o.stopPropagation(),t.setShowModal(!1)}}},[t._v("Cancel")])])])],1)},x=[],O=e("5016"),U={name:"ReportPostModal",props:["value","post-id"],components:{ModalWindow:m["a"],SelectButton:O["a"]},data:function(){return{showModal:!1,loading:!1,selectedOption:0,reportOptions:[{name:"Reason for reporting",disabled:!0},{name:"Spam",value:"spam"},{name:"Inappropriate content",value:"inappropriate"},{name:"Harassment",value:"harassment"}]}},methods:{setShowModal:function(t){this.showModal=t},submitReport:function(){var t=this;this.selectedOption&&(this.loading=!0,this.axios.post("/api/v1/report",{postId:this.postId,reason:this.selectedOption}).then(function(o){t.setShowModal(!1),t.selectedOption=0,t.loading=!1}).catch(function(o){t.loading=!1,Object(v["a"])(t.$store)(o)}))}},watch:{value:function(t){this.showModal=t,this.$emit("input",t)},showModal:function(t){this.$emit("input",t)}}},L=U,q=(e("9dd6"),Object(p["a"])(L,T,x,!1,null,"ac281c18",null));q.options.__file="ReportPostModal.vue";var I=q.exports,E={name:"ThreadPost",props:["post","highlight","showReply","showThread","showSelect","clickForPost","allowQuote"],components:{PostReply:d,ModalWindow:m["a"],FancyInput:C["a"],ReplyingTo:$,AvatarIcon:f["a"],HeartButton:y,ReportPostModal:I},data:function(){var t=this.post;return{hover:!1,showShareModal:!1,showReportPostModal:!1,postURL:"".concat(location.origin,"/p/").concat(t.id),selected:!1,showQuote:!1,quoteX:0,quoteY:0,quoteSelection:"",postContentHTML:t.content}},computed:{username:function(){return this.post.User?this.post.User.username:"[deleted]"},showActions:function(){return this.hover||this.showShareModal||this.showReportPostModal}},methods:{emitReply:function(t){this.showQuote=!1,this.$emit("reply",this.post.id,this.username,this.quoteSelection)},setShowQuote:function(t){var o=this.$el.getBoundingClientRect(),e=window.getSelection(),s=e.getRangeAt(0).getBoundingClientRect(),a=e.toString();a.length?(this.quoteY=s.top-o.top-30,this.quoteX=s.left-o.left,this.quoteSelection="> "+a.replace(/\n/g,"\n> ")+"\n\n",this.showQuote=!0):this.showQuote=!1},setShareModalState:function(t){this.showShareModal=t},setShowReportPostModal:function(t){this.showReportPostModal=t},goToThread:function(){this.$router.push("/thread/".concat(this.post.Thread.slug,"/").concat(this.post.Thread.id))},goToPost:function(){this.clickForPost&&this.$router.push("/thread/"+this.post.Thread.slug+"/"+this.post.Thread.id+"/"+this.post.postNumber)},toggleSelected:function(){this.selected=!this.selected,this.$emit("selected",this.post.id)}},watch:{showSelect:function(){this.selected&&this.$emit("selected",this.post.id),this.selected=!1}},mounted:function(){var t=this;this.$linkExpander(this.post.content,function(o){return t.postContentHTML=o})}},j=E,H=(e("9b68"),Object(p["a"])(j,s,a,!1,null,"661597d4",null));H.options.__file="ThreadPost.vue";o["a"]=H.exports},3846:function(t,o,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"6b54":function(t,o,e){"use strict";e("3846");var s=e("cb7c"),a=e("0bfb"),n=e("9e1e"),i="toString",l=/./[i],r=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?r(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?a.call(t):void 0)}):l.name!=i&&r(function(){return l.call(this)})},"6c65":function(t,o,e){},8674:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"scroll_load"},[t._t("default")],2)},a=[],n=e("8e8d"),i=e("84a2"),l=e.n(i),r={name:"ScrollLoad",props:["loading","query-selector","padding-bottom","padding-top"],components:{LoadingButton:n["a"]},computed:{element:function(){return this.querySelector?document.querySelector(this.querySelector):null}},methods:{onScroll:l()(function(t){var o,e,s=this.paddingBottom||300,a=this.paddingTop||150;this.loading||(this.element?(o=Math.floor(this.element.scrollTop+this.element.getBoundingClientRect().height+s-this.element.scrollHeight),e=a-this.element.scrollTop):(o=window.innerHeight+window.pageYOffset+s-document.body.scrollHeight,e=a-document.body.scrollTop),o>0?this.$emit("loadNext"):e>0&&this.$emit("loadPrevious"))})},mounted:function(){(this.element||window).addEventListener("scroll",this.onScroll)},destroyed:function(){(this.element||window).removeEventListener("scroll",this.onScroll)}},c=r,p=e("2877"),u=Object(p["a"])(c,s,a,!1,null,null,null);u.options.__file="ScrollLoad.vue";o["a"]=u.exports},"9b34":function(t,o,e){},"9b68":function(t,o,e){"use strict";var s=e("9b34"),a=e.n(s);a.a},"9dd6":function(t,o,e){"use strict";var s=e("6c65"),a=e.n(s);a.a},acf9:function(t,o,e){"use strict";var s=e("190c"),a=e.n(s);a.a},ba05:function(t,o,e){},dd92:function(t,o,e){"use strict";var s=e("f44b"),a=e.n(s);a.a},e2b1:function(t,o,e){"use strict";var s=e("ba05"),a=e.n(s);a.a},f44b:function(t,o,e){}}]);
//# sourceMappingURL=chunk-6b2a3d52.cd0af74c.js.map