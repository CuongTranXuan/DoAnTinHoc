(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6cec3c8"],{"0be9":function(t,e,i){"use strict";var a=i("c260"),n=i.n(a);n.a},3272:function(t,e,i){"use strict";var a=i("f1d7"),n=i.n(a);n.a},"74a4":function(t,e,i){"use strict";var a=i("b74f"),n=i.n(a);n.a},"892f":function(t,e,i){},9267:function(t,e,i){"use strict";var a=i("fd10"),n=i.n(a);n.a},aa77:function(t,e,i){var a=i("5ca1"),n=i("be13"),o=i("79e5"),s=i("fdef"),r="["+s+"]",c="​",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),u=function(t,e,i){var n={},r=o(function(){return!!s[t]()||c[t]()!=c}),l=n[t]=r?e(h):s[t];i&&(n[i]=l),a(a.P+a.F*r,"String",n)},h=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},b2dd:function(t,e,i){},b74f:function(t,e,i){},b8c8:function(t,e,i){"use strict";var a=i("892f"),n=i.n(a);n.a},c260:function(t,e,i){},c5f6:function(t,e,i){"use strict";var a=i("7726"),n=i("69a8"),o=i("2d95"),s=i("5dbc"),r=i("6a99"),c=i("79e5"),l=i("9093").f,d=i("11e9").f,u=i("86cc").f,h=i("aa77").trim,f="Number",g=a[f],m=g,p=g.prototype,_=o(i("2aeb")(p))==f,v="trim"in String.prototype,y=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():h(e,3);var i,a,n,o=e.charCodeAt(0);if(43===o||45===o){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var s,c=e.slice(2),l=0,d=c.length;l<d;l++)if(s=c.charCodeAt(l),s<48||s>n)return NaN;return parseInt(c,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(_?c(function(){p.valueOf.call(i)}):o(i)!=f)?s(new m(y(e)),i,g):y(e)};for(var k,w=i("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)n(m,k=w[b])&&!n(g,k)&&u(g,k,d(m,k));g.prototype=p,p.constructor=g,i("2aba")(a,f,g)}},e0a6:function(t,e,i){"use strict";var a=i("b2dd"),n=i.n(a);n.a},ed44:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_general"},[i("h1",{staticClass:"admin_general__header"},[t._v("General")]),i("admin-forum-info"),i("admin-new-admin"),i("admin-categories")],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_categories"},[i("modal-window",{attrs:{loading:t.loading},model:{value:t.showAddModal,callback:function(e){t.showAddModal=e},expression:"showAddModal"}},[i("div",{attrs:{slot:"main"},slot:"main"},[i("p",[t._v("Add a category")]),i("fancy-input",{attrs:{placeholder:"Category name"},model:{value:t.add.name,callback:function(e){t.$set(t.add,"name",e)},expression:"add.name"}}),i("colour-picker",{model:{value:t.add.color,callback:function(e){t.$set(t.add,"color",e)},expression:"add.color"}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",on:{click:t.addCategory}},[t._v("Add category")]),i("button",{staticClass:"button button--modal",on:{click:t.toggleAddModal}},[t._v("Cancel")])])]),i("modal-window",{attrs:{loading:t.loading},model:{value:t.showEditModal,callback:function(e){t.showEditModal=e},expression:"showEditModal"}},[i("div",{attrs:{slot:"main"},slot:"main"},[i("p",[t._v("Edit this category")]),i("fancy-input",{attrs:{placeholder:"Category name"},model:{value:t.edit.name,callback:function(e){t.$set(t.edit,"name",e)},expression:"edit.name"}}),i("colour-picker",{model:{value:t.edit.color,callback:function(e){t.$set(t.edit,"color",e)},expression:"edit.color"}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",on:{click:t.editCategory}},[t._v("Update category")]),i("button",{staticClass:"button button--modal",on:{click:function(e){t.toggleEditModal(null)}}},[t._v("Cancel")])])]),i("div",{staticClass:"category_widget__box"},[t._m(0),i("transition-group",{attrs:{name:"slide"}},t._l(t.categories,function(e,a){return i("div",{key:e.id,staticClass:"admin_categories__category"},[i("div",{staticClass:"admin_categories__category__actions_holder"},[i("div",{staticClass:"admin_categories__category__actions"},[i("div",{staticClass:"admin_categories__category__action",on:{click:function(i){t.removeCateogry(e.id,a)}}},[t._v("Remove")]),i("div",{staticClass:"admin_categories__category__action",on:{click:function(i){t.toggleEditModal(e,a)}}},[t._v("Edit")])])]),i("div",{staticClass:"admin_categories__category__color",style:{"background-color":e.color}}),i("div",{staticClass:"admin_categories__category__name"},[t._v(t._s(e.name))])])}),0),i("div",{staticStyle:{"margin-top":"0.5rem"}},[i("div",{staticClass:"admin_categories__category admin_categories__category--add",on:{click:t.toggleAddModal}},[i("div",{staticClass:"admin_categories__category__color fa fa-plus"}),i("div",{staticClass:"admin_categories__category__name"},[t._v("Add new category")])])])],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category_widget__text"},[i("div",{staticClass:"category_widget__text__title"},[t._v("Categories")]),t._v("\n\t\t\tHover to remove or edit a category. "),i("br"),t._v("\n\t\t\tRemoving a category will place any threads in that category into 'Other'\n\t\t")])}],r=(i("7f7f"),i("6307")),c=i("80e3"),l=i("c5af"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"colour_picker"},[i("div",{staticClass:"colour_picker__selected_header"},[i("div",{staticClass:"colour_picker__selected_header__text"},[t._v("Selected colour")]),i("div",{staticClass:"colour_picker__selected",style:{"background-color":t.colour}})]),i("div",{staticClass:"colour_picker__selector_divider"},[i("div",{staticClass:"colour_picker__palette_picker",style:{left:t.palettePicker.left+"px",top:t.palettePicker.top+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.palettePicker.dragging=!0},mouseup:function(e){e.preventDefault(),e.stopPropagation(),t.palettePicker.dragging=!1,t.emit()}}}),i("canvas",{ref:"palette",staticClass:"colour_picker__palette",attrs:{width:t.dimensions,height:t.dimensions},on:{click:function(e){t.updatePalettePicker(e),t.emit()}}})]),i("div",{staticClass:"colour_picker__selector_divider"},[i("div",{staticClass:"colour_picker__hue_picker",style:{left:t.huePicker.left+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.huePicker.dragging=!0},mouseup:function(e){e.preventDefault(),e.stopPropagation(),t.huePicker.dragging=!1,t.emit()}}}),i("canvas",{ref:"hue",staticClass:"colour_picker__hue",attrs:{width:t.dimensions,height:t.hueHeight},on:{click:function(e){t.updateHuePicker(e),t.emit()}}})])])},u=[],h=i("2909");i("c5f6"),i("28a5");function f(t){if(Array.isArray(t))return t}function g(t,e){var i=[],a=!0,n=!1,o=void 0;try{for(var s,r=t[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)if(i.push(s.value),e&&i.length===e)break}catch(err){n=!0,o=err}finally{try{a||null==r["return"]||r["return"]()}finally{if(n)throw o}}return i}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(t,e){return f(t)||g(t,e)||m()}var _={name:"ColourPicker",props:["value"],data:function(){return{dimensions:100,hueHeight:20,palettePicker:{left:0,top:0,dragging:!1},huePicker:{left:0,dragging:!1},hue_:0,saturation_:0,lightness_:0}},computed:{colour:function(){var t="hsl("+this.hue+", "+this.saturation+"%, "+this.lightness+"%)";return t},hue:{get:function(){return this.hue_},set:function(t){if(this.hue_=t,this.$refs.hue){var e=this.$refs.hue.getBoundingClientRect().width;this.huePicker.left=Math.round(t*e/360-2)}}},saturation:{get:function(){return this.saturation_},set:function(t){if(this.saturation_=t,this.$refs.palette){this.$refs.palette.getBoundingClientRect();var e=this.$refs.palette.getBoundingClientRect().width;this.palettePicker.left=Math.round(t*e/100-8)}}},lightness:{get:function(){return this.lightness_},set:function(t){if(this.lightness_=t,this.$refs.palette){var e=this.$refs.palette.getBoundingClientRect().height;this.palettePicker.top=Math.round(e-t*e/100-8)}}}},watch:{value:function(){var t=document.createElement("span");t.style.backgroundColor=this.value;var e=t.style.backgroundColor,i=this.rgbStringToArray(e),a=this.rgbToHsl(i),n=p(a,3);this.hue=n[0],this.saturation=n[1],this.lightness=n[2],this.drawPalette()}},methods:{emit:function(){var t=document.createElement("span");t.style.backgroundColor=this.colour,this.$emit("input",t.style.backgroundColor)},drawPalette:function(){var t=this.$refs.palette.getContext("2d");t.clearRect(0,0,this.dimensions,this.dimensions);for(var e=0;e<=this.dimensions;e++)for(var i=0;i<=this.dimensions;i++){var a=100*e/this.dimensions+"%",n=100*(this.dimensions-i)/this.dimensions+"%";t.fillStyle="hsl("+this.hue+", "+a+", "+n+")",t.fillRect(e,i,1,1)}},drawHue:function(){for(var t=this.$refs.hue.getContext("2d"),e=0;e<=this.dimensions;e++){var i=e/this.dimensions*360;t.fillStyle="hsl("+i+", 100%, 50%)",t.fillRect(e,0,1,this.hueHeight)}},updatePalettePicker:function(t){if(this.$refs.palette&&(this.palettePicker.dragging||"click"===t.type)){var e=this.$refs.palette.getBoundingClientRect(),i=t.clientX-e.left-8,a=t.clientY-e.top-8;t.clientX>e.right&&(i=e.width-8),t.clientX<e.left&&(i=-8),t.clientY>e.bottom&&(a=e.height-8),t.clientY<e.top&&(a=-8),this.palettePicker.left=i,this.palettePicker.top=a;var n=i+8,o=a+8;this.saturation_=Math.round(100*n/e.width),this.lightness_=Math.round(100*(e.height-o)/e.height)}},updateHuePicker:function(t){if(this.$refs.hue&&(this.huePicker.dragging||"click"===t.type)){var e=this.$refs.hue.getBoundingClientRect(),i=t.clientX-e.left-2;t.clientY,e.top;t.clientX>e.right&&(i=e.width-2),t.clientX<e.left&&(i=-2),this.huePicker.left=i,this.hue_=Math.round(360*(i+2)/e.width),this.drawPalette()}},rgbStringToArray:function(t){return t.slice(4,-1).split(",").map(Number)},rgbToHsl:function(t){var e,i,a,n=t.map(function(t){return t/255}),o=p(n,3),s=o[0],r=o[1],c=o[2],l=Math.max.apply(Math,Object(h["a"])(n)),d=Math.min.apply(Math,Object(h["a"])(n));return a=100*(l+d)/2,l===d?[this.hue,0,a]:(i=a<50?(l-d)/(l+d):(l-d)/(2-l-d),i*=100,e=s===l?(r-c)/(l-d):r===l?2+(c-s)/(l-d):4+(s-r)/(l-d),e*=60,[e,i,a].map(function(t){return Math.round(t)}))}},mounted:function(){var t=this;this.drawPalette(),this.drawHue(),document.addEventListener("mousemove",function(e){t.updatePalettePicker(e),t.updateHuePicker(e)})}},v=_,y=(i("9267"),i("2877")),k=Object(y["a"])(v,d,u,!1,null,"fd889b6c",null);k.options.__file="ColourPicker.vue";var w=k.exports,b=i("c4b0"),C={name:"AdminCategories",components:{ModalWindow:r["a"],FancyInput:c["a"],LoadingIcon:l["a"],ColourPicker:w},data:function(){return{loading:!1,showAddModal:!1,showEditModal:!1,add:{name:"",color:"#ffffff"},edit:{name:"",color:"#ffffff",id:null,index:null},categories:[]}},methods:{toggleAddModal:function(){this.add.name="",this.add.color="#ffffff",this.showAddModal=!this.showAddModal},toggleEditModal:function(t,e){t?(this.edit.name=t.name,this.edit.color=t.color,this.edit.id=t.id,this.edit.index=e):(this.edit.name="",this.edit.color="#ffffff",this.edit.id=null,this.edit.index=null),this.showEditModal=!this.showEditModal},addCategory:function(){var t=this;this.loading=!0,this.axios.post("/api/v1/category",{name:this.add.name,color:this.add.color}).then(function(e){t.toggleAddModal(),t.loading=!1,t.categories.push(e.data),t.$store.commit("addCategories",e.data)}).catch(Object(b["a"])(this.$store))},removeCateogry:function(t,e){var i=this;this.axios.delete("/api/v1/category/"+t).then(function(a){i.categories.splice(e,1),i.$store.commit("removeCategory",t),a.data.otherCategoryCreated&&i.$store.commit("addCategories",a.data.otherCategoryCreated)}).catch(Object(b["a"])(this.$store))},editCategory:function(){var t=this;this.loading=!0,this.axios.put("/api/v1/category/"+this.edit.id,{name:this.edit.name,color:this.edit.color}).then(function(e){t.loading=!1,t.categories.splice(t.edit.index,1,e.data),t.$store.commit("updateCategory",e.data),t.toggleEditModal()}).catch(Object(b["a"])(this.$store))}},mounted:function(){var t=this;this.axios.get("/api/v1/category").then(function(e){t.categories=e.data.filter(function(t){return"Other"!==t.name})}).catch(Object(b["a"])(this.$store))}},x=C,A=(i("0be9"),Object(y["a"])(x,o,s,!1,null,"1a12c628",null));A.options.__file="AdminCategories.vue";var M=A.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_new_admin"},[i("modal-window",{model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("div",{staticStyle:{"padding-top":"1rem"},attrs:{slot:"main"},slot:"main"},[i("fancy-input",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{value:t.link,placeholder:"Admin login link",width:"100%"}})],1),i("button",{staticClass:"button button--modal",attrs:{slot:"footer"},on:{click:t.toggleModal},slot:"footer"},[t._v("\n\t\t\tOK\n\t\t")])]),i("div",{staticClass:"category_widget__box"},[i("div",{staticClass:"category_widget__text"},[i("div",{staticClass:"category_widget__text__title"},[t._v("Add other admin users")]),t._v("\n\t\t\tClick to generate a login link for a new admin account - this will expire after 24 hours\n\t\t\t\n\t\t\t"),t.filteredAdmins?i("div",[0===t.filteredAdmins.length?i("strong",[t._v("There are no other admins")]):[t._v("\n\t\t\t\t\tCurrent admins are you,\n\t\t\t\t\t"),t._l(t.filteredAdmins,function(e,a){return i("span",[i("router-link",{attrs:{to:"/user/"+e.username}},[t._v(t._s(e.username))]),a!==t.filteredAdmins.length-1?[t._v(",")]:t._e()],2)})]],2):i("div",[t._v("Loading...")])]),i("loading-button",{attrs:{loading:t.loading},on:{click:t.getLink}},[t._v("Generate link")])],1)],1)},E=[],N=i("8e8d"),I={name:"AdminNewAdmin",components:{ModalWindow:r["a"],FancyInput:c["a"],LoadingButton:N["a"]},methods:{toggleModal:function(){this.showModal=!this.showModal},getLink:function(){var t=this;this.axios.post("/api/v1/admin_token").then(function(e){t.link=window.location.origin+"/?token="+e.data.token,t.toggleModal()}).catch(Object(b["a"])(this.$store))}},data:function(){return{loading:!1,showModal:!1,link:"",admins:null}},computed:{filteredAdmins:function(){var t=this;return this.admins?this.admins.filter(function(e){return e.username!==t.$store.state.username}):null}},created:function(){var t=this;this.axios.get("/api/v1/user?role=admin").then(function(e){t.admins=e.data}).catch(Object(b["a"])(this.$store))}},S=I,O=(i("b8c8"),Object(y["a"])(S,P,E,!1,null,"4506d18f",null));O.options.__file="AdminNewAdmin.vue";var D=O.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_forum_info category_widget__box"},[t._m(0),i("div",[i("fancy-input",{attrs:{placeholder:"Forum name",error:t.errors.forumName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("div",[i("fancy-input",{attrs:{placeholder:"Forum description",error:t.errors.forumDescription},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),i("div",{staticClass:"admin_forum_info__label"},[i("toggle-switch",{model:{value:t.showDescription,callback:function(e){t.showDescription=e},expression:"showDescription"}}),i("span",[t._v("Show forum description on homepage")])],1),i("loading-button",{attrs:{loading:t.loading},on:{click:t.save}},[t._v("Save settings")])],1)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cateogry_widget__text"},[i("div",{staticClass:"category_widget__text__title"},[t._v("Forum info")])])}],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"toggle_switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.proxyValue,expression:"proxyValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.proxyValue)?t._i(t.proxyValue,null)>-1:t.proxyValue},on:{change:function(e){var i=t.proxyValue,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);a.checked?s<0&&(t.proxyValue=i.concat([o])):s>-1&&(t.proxyValue=i.slice(0,s).concat(i.slice(s+1)))}else t.proxyValue=n}}}),i("span")])},T=[],R={name:"ToggleSwitch",props:["value"],data:function(){return{proxyValue:this.value}},watch:{value:function(){this.proxyValue=this.value},proxyValue:function(){this.$emit("input",this.proxyValue)}}},L=R,H=(i("3272"),Object(y["a"])(L,j,T,!1,null,"53616f08",null));H.options.__file="ToggleSwitch.vue";var B=H.exports,X={name:"AdminForumInfo",components:{FancyInput:c["a"],LoadingButton:N["a"],ToggleSwitch:B},data:function(){return{name:"",description:"",showDescription:!1,loading:!1,errors:{forumName:"",forumDescription:""}}},methods:{save:function(){var t=this;if(this.errors.forumName="",this.errors.forumDescription="",this.name.trim().length){this.loading=!0;var e=this.axios.put("/api/v1/settings",{forumName:this.name,forumDescription:this.description||"",showDescription:this.showDescription});e.then(function(e){t.loading=!1,t.$store.commit("setSettings",e.data)}).catch(function(e){t.loading=!1,Object(b["a"])(t.$store)(err,function(e,i){void 0!==t.errors[e.path]?t.errors[e.path]=e.message:i.push(e.message)})})}else this.errors.forumName="Forum name can't be blank"}},mounted:function(){var t=this;this.axios.get("/api/v1/settings").then(function(e){t.name=e.data.forumName||"",t.description=e.data.forumDescription||"",t.showDescription=e.data.showDescription}).catch(Object(b["a"])(this.$store))}},G=X,Y=(i("e0a6"),Object(y["a"])(G,F,V,!1,null,"789547e1",null));Y.options.__file="AdminForumInfo.vue";var U=Y.exports,J={name:"AdminGeneral",components:{AdminCategories:M,AdminNewAdmin:D,AdminForumInfo:U}},W=J,K=(i("74a4"),Object(y["a"])(W,a,n,!1,null,"361c1c0d",null));K.options.__file="AdminGeneral.vue";e["default"]=K.exports},f1d7:function(t,e,i){},fd10:function(t,e,i){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-d6cec3c8.7a0fde9c.js.map