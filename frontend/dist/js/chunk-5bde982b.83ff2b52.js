(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bde982b"],{"175d":function(t,e,i){"use strict";var a=i("9add"),o=i.n(a);o.a},"19b4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fancy_textarea"},[i("div",{staticClass:"fancy_textarea__container",staticStyle:{position:"relative",display:"inline-block"},style:{width:t.width||"20rem"}},[i("div",{staticClass:"fancy_textarea__placeholder",class:{"fancy_textarea__placeholder--active":t.active||t.value.length}},[t._v("\n\t\t\t"+t._s(t.placeholder)+"\n\t\t")]),i("textarea",{staticClass:"input fancy_textarea__textarea",domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)},focus:t.addActive,blur:t.removeActive}})]),i("error-tooltip",{attrs:{error:t.error}})],1)},o=[],r=i("e145"),n={name:"FancyTextarea",props:["value","placeholder","width","error"],components:{ErrorTooltip:r["a"]},data:function(){return{active:!1}},methods:{updateValue:function(t){this.$emit("input",t)},addActive:function(){this.active=!0},removeActive:function(){this.active=!1}}},s=n,c=(i("175d"),i("2877")),l=Object(c["a"])(s,a,o,!1,null,"133c8d9c",null);l.options.__file="FancyTextarea.vue";e["a"]=l.exports},4917:function(t,e,i){"use strict";var a=i("cb7c"),o=i("9def"),r=i("0390"),n=i("5f1b");i("214f")("match",1,function(t,e,i,s){return[function(i){var a=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,a):new RegExp(i)[e](String(a))},function(t){var e=s(i,t,this);if(e.done)return e.value;var c=a(t),l=String(this);if(!c.global)return n(c,l);var u=c.unicode;c.lastIndex=0;var d,p=[],f=0;while(null!==(d=n(c,l))){var v=String(d[0]);p[f]=v,""===v&&(c.lastIndex=r(l,o(c.lastIndex),u)),f++}return 0===f?null:p}]})},"562d":function(t,e,i){},"7da2":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"route_container"},[i("confirm-modal",{attrs:{color:"red",text:"Yes, remove it"},on:{confirm:t.removeProfilePicture},model:{value:t.picture.showRemoveProfilePictureModal,callback:function(e){t.$set(t.picture,"showRemoveProfilePictureModal",e)},expression:"picture.showRemoveProfilePictureModal"}},[t._v("\n\t\tAre you sure you want to remove your profile picture?\n\t")]),i("modal-window",{attrs:{loading:t.picture.loading,width:"25rem"},on:{input:t.hideProflePictureModal},model:{value:t.picture.showProfilePictureModal,callback:function(e){t.$set(t.picture,"showProfilePictureModal",e)},expression:"picture.showProfilePictureModal"}},[i("div",{staticClass:"profile_picture_modal",class:{"profile_picture_modal--picture.dragging":t.picture.dragging},attrs:{slot:"main"},on:{dragover:t.handleDragOver,drkagend:function(e){t.picture.dragging=!1},drkgleave:function(e){t.picture.dragging=!1},drop:t.handleFileDrop},slot:"main"},[i("div",{staticClass:"h3"},[t._v("Add a profile picture")]),i("p",{staticClass:"p--condensed"},[t._v("\n\t\t\t\tDrag and drop an image or\n\t\t\t\t"),i("label",{staticClass:"button profile_picture_modal__upload_button"},[i("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(e){t.processImage(e.target.files[0])}}}),t._v("\n\t\t\t\t\tupload a file\n\t\t\t\t")])]),i("div",{staticClass:"profile_picture_modal__drag_area"},[t.picture.dataURL?i("div",{staticClass:"profile_picture_modal__drag_area__image picture_circle",style:{"background-image":"url("+t.picture.dataURL+")"}}):i("span",{staticClass:"fa fa-cloud-upload profile_picture_modal__drag_area__icon",class:{"profile_picture_modal__drag_area__icon--picture.dragging":t.picture.dragging}})])]),i("div",{staticClass:"profile_picture_modal__buttons",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",class:{"button--disabled":!t.picture.dataURL},on:{click:t.uploadProfilePicture}},[t._v("\n\t\t\t\tUpload picture\n\t\t\t")]),i("button",{staticClass:"button button--modal",on:{click:t.hideProflePictureModal}},[t._v("Cancel")])])]),i("div",{staticClass:"h1"},[t._v("General settings")]),i("p"),i("div",{staticClass:"h3"},[t._v("About me")]),i("p",{staticClass:"p--condensed"},[t._v("\n\t\t\tWrite something about yourself to be displayed on your user page\n\t\t")]),i("fancy-textarea",{attrs:{placeholder:"About me description",error:t.description.error,type:"password"},model:{value:t.description.value,callback:function(e){t.$set(t.description,"value",e)},expression:"description.value"}}),i("loading-button",{staticClass:"button button--green",attrs:{loading:t.description.loading},on:{click:t.saveDescription}},[t._v("\n\t\t\tSave description\n\t\t")]),i("p"),i("p"),i("div",{staticClass:"h3"},[t._v("Profile picture")]),i("p",{staticClass:"p--condensed"},[t._v("\n\t\t\tThis will be displayed by your posts on the site\n\t\t")]),t.picture.current?i("p",{staticClass:"p--condensed profile_picture_preview picture_circle",style:{"background-image":"url("+t.picture.current+")"}}):t._e(),i("button",{staticClass:"button",on:{click:function(e){t.picture.showProfilePictureModal=!0}}},[t._v("\n\t\t\t"+t._s(t.picture.current?"Change":"Add")+" profile picture\n\t\t")]),t.picture.current?i("button",{staticClass:"button",staticStyle:{"margin-left":"0.5rem"},on:{click:function(e){t.picture.showRemoveProfilePictureModal=!0}}},[t._v("\n\t\t\tRemove\n\t\t")]):t._e(),i("p")],1)},o=[],r=(i("4917"),i("19b4")),n=i("8e8d"),s=i("c5af"),c=i("6307"),l=i("da16"),u=i("c4b0"),d=i("bd28"),p={name:"settingsGeneral",components:{FancyTextarea:r["a"],LoadingButton:n["a"],LoadingIcon:s["a"],ModalWindow:c["a"],ConfirmModal:l["a"]},data:function(){return{description:{value:"",loading:!1,error:""},picture:{current:null,showProfilePictureModal:!1,showRemoveProfilePictureModal:!1,dragging:!1,dataURL:null,file:null,loading:!1}}},computed:{},methods:{saveDescription:function(){var t=this;this.description.error="",this.description.loading=!0,this.axios.put("/api/v1/user/"+this.$store.state.username,{description:this.description.value}).then(function(e){t.description.loading=!1}).catch(function(e){t.description.loading=!1,Object(u["a"])(t.$store)(e,function(e){t.description.error=e.message})})},uploadProfilePicture:function(){var t=this;this.picture.loading=!0;var e=new FormData;e.append("picture",this.picture.file),this.axios.post("/api/v1/user/"+this.$store.state.username+"/picture",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.hideProflePictureModal(),t.picture.current=e.data.picture}).catch(function(e){t.picture.loading=!1,Object(u["a"])(t.$store)(e)})},removeProfilePicture:function(){var t=this;this.axios.delete("/api/v1/user/"+this.$store.state.username+"/picture").then(function(e){t.picture.current=null}).catch(Object(u["a"])(this.$store))},hideProflePictureModal:function(){var t=this;this.picture.showProfilePictureModal=!1,setTimeout(function(){t.picture.dataURL=null,t.picture.loading=!1},200)},handleDragOver:function(t){t.preventDefault(),this.picture.dragging=!0},handleFileDrop:function(t){if(t.preventDefault(),this.picture.dragging=!1,t.dataTransfer&&t.dataTransfer.items){var e=t.dataTransfer.items[0];e.type.match("^image/")&&this.processImage(e.getAsFile())}},processImage:function(t){var e=this,i=new FileReader;i.readAsDataURL(t),this.picture.file=t,i.addEventListener("load",function(){e.picture.dataURL=i.result})}},created:function(){var t=this;this.$store.dispatch("setTitle","general settings"),this.$nextTick(function(){t.axios.get("/api/v1/user/"+t.$store.state.username).then(function(e){t.description.value=e.data.description||"",t.picture.current=e.data.picture}).catch(function(e){Object(u["a"])(t.$store)(e)})}),Object(d["a"])("settingsGeneral")}},f=p,v=(i("b389"),i("2877")),h=Object(v["a"])(f,a,o,!1,null,"2bb242e9",null);h.options.__file="SettingsGeneral.vue";e["default"]=h.exports},"9add":function(t,e,i){},b389:function(t,e,i){"use strict";var a=i("562d"),o=i.n(a);o.a},bd28:function(t,e,i){"use strict";var a=i("bc3a"),o=i.n(a);e["a"]=function(t,e){"userPosts"===t||"userThreads"===t?o.a.get("/api/v1/user/"+e).then(function(e){return o.a.post("/api/v1/log",{route:t,resourceId:e.data.id})}).catch(console.log):o.a.post("/api/v1/log",{route:t,resourceId:e}).catch(console.log)}},da16:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal-window",{attrs:{value:t.showModal},on:{input:t.setShowModal}},[i("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[t._t("default")],2),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal",class:t.buttonColor,on:{click:t.confirm}},[t._v(t._s(t.text||"OK"))]),i("button",{staticClass:"button button--modal",on:{click:function(e){t.setShowModal(!1)}}},[t._v("Cancel")])])])},o=[],r=i("6307"),n={name:"ConfirmModal",props:["value","color","text"],components:{ModalWindow:r["a"]},data:function(){return{showModal:!1}},computed:{buttonColor:function(){return this.color?"button--"+this.color:""}},watch:{value:function(t){this.showModal=t}},methods:{setShowModal:function(t){this.showModal=t,this.$emit("input",t)},confirm:function(){this.$emit("confirm"),this.setShowModal(!1)}},mounted:function(){this.setShowModal(this.value)}},s=n,c=i("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);l.options.__file="ConfirmModal.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-5bde982b.83ff2b52.js.map