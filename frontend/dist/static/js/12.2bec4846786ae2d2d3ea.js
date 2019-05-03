webpackJsonp([12],{"3SgP":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"route_container"},[e("confirm-modal",{attrs:{color:"red",text:"Yes, delete it"},on:{confirm:t.deleteAccount},model:{value:t.showConfirmModal,callback:function(o){t.showConfirmModal=o},expression:"showConfirmModal"}},[t._v("\n\t\tAre you sure you want to delete your account?\n\t")]),t._v(" "),e("div",{staticClass:"h1"},[t._v("Account settings")]),t._v(" "),e("p"),e("div",{staticClass:"h3"},[t._v("Change your password")]),t._v(" "),e("p",{staticClass:"p--condensed"},[t._v("\n\t\t\tFor security, enter your current password\n\t\t")]),t._v(" "),e("div",[e("fancy-input",{attrs:{placeholder:"Current password",error:t.password.errors["current password"],type:"password"},model:{value:t.password.current,callback:function(o){t.password.current=o},expression:"password.current"}})],1),t._v(" "),e("div",[e("fancy-input",{attrs:{placeholder:"New password",error:t.password.errors["new password"],type:"password"},model:{value:t.password.new,callback:function(o){t.password.new=o},expression:"password.new"}})],1),t._v(" "),e("loading-button",{staticClass:"button button--green",attrs:{loading:t.password.loading},on:{click:t.savePassword}},[t._v("Change password")]),t._v(" "),e("p"),t._v(" "),e("p"),e("div",{staticClass:"h3 h3--margin_top"},[t._v("Delete your account")]),t._v(" "),t._m(0),t._v(" "),e("loading-button",{staticClass:"button button--red",attrs:{loading:t.deleteAccountLoading},on:{click:function(o){t.showConfirmModal=!0}}},[t._v("Delete my account")]),t._v(" "),e("p")],1)},a=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",{staticClass:"p--condensed"},[t._v("\n\t\t\tOnce this is done, your account "),e("strong",[t._v("cannot")]),t._v(" be restored "),e("br"),t._v("\n\t\t\tYour current posts however will be retained\n\t\t")])}],r={render:n,staticRenderFns:a};o.a=r},"42sQ":function(t,o,e){"use strict";var n=e("mtWM"),a=e.n(n);o.a=function(t,o){"userPosts"===t||"userThreads"===t?a.a.get("/api/v1/user/"+o).then(function(o){return a.a.post("/api/v1/log",{route:t,resourceId:o.data.id})}).catch(console.log):a.a.post("/api/v1/log",{route:t,resourceId:o}).catch(console.log)}},RxWX:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[e("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),t._v(" "),e("button",{staticClass:"button button--modal",on:{click:function(o){t.setShowModal(!1)}}},[t._v("Cancel")])])])},a=[],r={render:n,staticRenderFns:a};o.a=r},U7ln:function(t,o,e){"use strict";var n=e("zW/1"),a=e("RxWX"),r=e("VU/8"),s=r(n.a,a.a,null,null,null);o.a=s.exports},"UtM+":function(t,o,e){o=t.exports=e("FZ+f")(!0),o.push([t.i,'@-webkit-keyframes flash-data-v-4be0d924{0%{background-color:#e0e0e0}50%{background-color:#e0e0e0}75%{background-color:#eee}to{background-color:#e0e0e0}}@keyframes flash-data-v-4be0d924{0%{background-color:#e0e0e0}50%{background-color:#e0e0e0}75%{background-color:#eee}to{background-color:#e0e0e0}}.shadow_border[data-v-4be0d924]{-webkit-box-shadow:0 0 .3rem hsla(0,0%,69%,.25);box-shadow:0 0 .3rem hsla(0,0%,69%,.25)}.shadow_border--hover[data-v-4be0d924]{-webkit-box-shadow:0 0 .3rem hsla(0,0%,69%,.25),0 .2rem .35rem hsla(0,0%,69%,.25);box-shadow:0 0 .3rem hsla(0,0%,69%,.25),0 .2rem .35rem hsla(0,0%,69%,.25)}.tab_button[data-v-4be0d924]{padding:.5rem .75rem;border-radius:3rem;cursor:pointer;-webkit-transition:all .2s;transition:all .2s;margin-right:.5rem;display:inline-block;position:relative;top:-.1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.tab_button[data-v-4be0d924]:hover{background-color:#eee}.tab_button[data-v-4be0d924]:active{background-color:#dcdcdc}.tab_button[data-v-4be0d924]:after{content:"";position:absolute;background-color:#42a7ff;width:calc(100% - 1rem);left:.5rem;bottom:-.3rem;height:.2rem;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.tab_button--selected[data-v-4be0d924]{cursor:default;font-weight:700}.tab_button--selected[data-v-4be0d924]:active,.tab_button--selected[data-v-4be0d924]:hover{background-color:transparent}.tab_button--selected[data-v-4be0d924]:after{opacity:1}@media (max-width:870px){.h1[data-v-4be0d924]{display:none}}',"",{version:3,sources:["E:/ForumProject/forum/frontend/src/components/routes/SettingsAccount.vue"],names:[],mappings:"AACA,yCACA,GACI,wBAA0B,CAC7B,AACD,IACI,wBAA0B,CAC7B,AACD,IACI,qBAA0B,CAC7B,AACD,GACI,wBAA0B,CAC7B,CACA,AACD,iCACA,GACI,wBAA0B,CAC7B,AACD,IACI,wBAA0B,CAC7B,AACD,IACI,qBAA0B,CAC7B,AACD,GACI,wBAA0B,CAC7B,CACA,AACD,gCACE,gDAAyD,AACjD,uCAAiD,CAC1D,AACD,uCACE,kFAAqG,AAC7F,yEAA6F,CACtG,AACD,6BACE,qBAAwB,AACxB,mBAAoB,AACpB,eAAgB,AAChB,2BAA6B,AAC7B,mBAAqB,AACrB,mBAAqB,AACrB,qBAAsB,AACtB,kBAAmB,AACnB,WAAa,AACb,yBAA0B,AAC1B,sBAAuB,AACvB,qBAAsB,AACtB,oBAAqB,AACrB,gBAAkB,CACnB,AACD,mCACI,qBAA0B,CAC7B,AACD,oCACI,wBAA0B,CAC7B,AACD,mCACI,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,wBAAyB,AACzB,WAAa,AACb,cAAgB,AAChB,aAAe,AACf,UAAW,AACX,+BAAiC,AACjC,sBAAyB,CAC5B,AACD,uCACI,eAAgB,AAChB,eAAkB,CACrB,AACD,2FACM,4BAA8B,CACnC,AACD,6CACM,SAAW,CAChB,AACD,yBACA,qBACI,YAAc,CACjB,CACA",file:"SettingsAccount.vue",sourcesContent:["\n@-webkit-keyframes flash-data-v-4be0d924 {\n0% {\n    background-color: #E0E0E0;\n}\n50% {\n    background-color: #E0E0E0;\n}\n75% {\n    background-color: #EEEEEE;\n}\nto {\n    background-color: #E0E0E0;\n}\n}\n@keyframes flash-data-v-4be0d924 {\n0% {\n    background-color: #E0E0E0;\n}\n50% {\n    background-color: #E0E0E0;\n}\n75% {\n    background-color: #EEEEEE;\n}\nto {\n    background-color: #E0E0E0;\n}\n}\n.shadow_border[data-v-4be0d924] {\n  -webkit-box-shadow: 0 0 0.3rem rgba(175, 175, 175, 0.25);\n          box-shadow: 0 0 0.3rem rgba(175, 175, 175, 0.25);\n}\n.shadow_border--hover[data-v-4be0d924] {\n  -webkit-box-shadow: 0 0 0.3rem rgba(175, 175, 175, 0.25), 0 0.2rem 0.35rem rgba(175, 175, 175, 0.25);\n          box-shadow: 0 0 0.3rem rgba(175, 175, 175, 0.25), 0 0.2rem 0.35rem rgba(175, 175, 175, 0.25);\n}\n.tab_button[data-v-4be0d924] {\n  padding: 0.5rem 0.75rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  margin-right: 0.5rem;\n  display: inline-block;\n  position: relative;\n  top: -0.1rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n.tab_button[data-v-4be0d924]:hover {\n    background-color: #EEEEEE;\n}\n.tab_button[data-v-4be0d924]:active {\n    background-color: #dcdcdc;\n}\n.tab_button[data-v-4be0d924]::after {\n    content: '';\n    position: absolute;\n    background-color: #42A7FF;\n    width: calc(100% - 1rem);\n    left: 0.5rem;\n    bottom: -0.3rem;\n    height: 0.2rem;\n    opacity: 0;\n    -webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n}\n.tab_button--selected[data-v-4be0d924] {\n    cursor: default;\n    font-weight: bold;\n}\n.tab_button--selected[data-v-4be0d924]:active, .tab_button--selected[data-v-4be0d924]:hover {\n      background-color: transparent;\n}\n.tab_button--selected[data-v-4be0d924]::after {\n      opacity: 1;\n}\n@media (max-width: 870px) {\n.h1[data-v-4be0d924] {\n    display: none;\n}\n}\n"],sourceRoot:""}])},ohhU:function(t,o,e){var n=e("UtM+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("e9c222fe",n,!0)},uNje:function(t,o,e){"use strict";function n(t){e("ohhU")}Object.defineProperty(o,"__esModule",{value:!0});var a=e("xPtC"),r=e("3SgP"),s=e("VU/8"),c=n,d=s(a.a,r.a,c,"data-v-4be0d924",null);o.default=d.exports},xPtC:function(t,o,e){"use strict";var n=e("yILp"),a=e("IJpV"),r=e("U7ln"),s=e("3pCH"),c=e("42sQ");o.a={name:"settingsAccount",components:{FancyInput:n.a,LoadingButton:a.a,ConfirmModal:r.a},data:function(){return{password:{loading:!1,current:"",new:"",errors:{"new password":"","current password":""}},deleteAccountLoading:!1,showConfirmModal:!1}},computed:{},methods:{savePassword:function(){var t=this;return this.password.errors["current password"]="",this.password.errors["new password"]="",this.password.current.length?this.password.new.length?(this.password.loading=!0,void this.axios.put("/api/v1/user/"+this.$store.state.username,{currentPassword:this.password.current,newPassword:this.password.new}).then(function(o){t.password.loading=!1,t.password.current="",t.password.new=""}).catch(function(o){t.password.loading=!1,console.log(o),e.i(s.a)(t.$store)(o,function(o){"hash"===o.path&&(t.password.errors["new password"]=o.message)})})):void(this.password.errors["new password"]="Cannot be blank"):void(this.password.errors["current password"]="Cannot be blank")},deleteAccount:function(){var t=this;this.deleteAccountLoading=!0,this.axios.delete("/api/v1/user/"+this.$store.state.username).then(function(o){t.deleteAccountLoading=!1,t.$store.commit("setUsername",null),t.$router.push("/")}).catch(function(o){t.deleteAccountLoading=!1,e.i(s.a)(t.$store)(o)})}},mounted:function(){this.$store.dispatch("setTitle","account settings"),e.i(c.a)("settingsAccount")}}},"zW/1":function(t,o,e){"use strict";var n=e("o46f");o.a={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:n.a},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}}}});
//# sourceMappingURL=12.2bec4846786ae2d2d3ea.js.map