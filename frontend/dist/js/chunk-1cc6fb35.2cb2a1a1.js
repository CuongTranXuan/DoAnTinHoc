(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc6fb35"],{"0be9":function(t,e,i){"use strict";var a=i("c260"),o=i.n(a);o.a},9267:function(t,e,i){"use strict";var a=i("fd10"),o=i.n(a);o.a},aa77:function(t,e,i){var a=i("5ca1"),o=i("be13"),n=i("79e5"),r=i("fdef"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),d=RegExp(s+s+"*$"),u=function(t,e,i){var o={},s=n(function(){return!!r[t]()||c[t]()!=c}),l=o[t]=s?e(h):r[t];i&&(o[i]=l),a(a.P+a.F*s,"String",o)},h=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},c260:function(t,e,i){},c2e0:function(t,e,i){"use strict";var a=i("ca9b"),o=i.n(a);o.a},c5f6:function(t,e,i){"use strict";var a=i("7726"),o=i("69a8"),n=i("2d95"),r=i("5dbc"),s=i("6a99"),c=i("79e5"),l=i("9093").f,d=i("11e9").f,u=i("86cc").f,h=i("aa77").trim,f="Number",g=a[f],_=g,p=g.prototype,m=n(i("2aeb")(p))==f,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():h(e,3);var i,a,o,n=e.charCodeAt(0);if(43===n||45===n){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var r,c=e.slice(2),l=0,d=c.length;l<d;l++)if(r=c.charCodeAt(l),r<48||r>o)return NaN;return parseInt(c,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(m?c(function(){p.valueOf.call(i)}):n(i)!=f)?r(new _(y(e)),i,g):y(e)};for(var C,k=i("9e1e")?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;k.length>b;b++)o(_,C=k[b])&&!o(g,C)&&u(g,C,d(_,C));g.prototype=p,p.constructor=g,i("2aba")(a,f,g)}},ca9b:function(t,e,i){},ed44:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_general"},[i("h1",{staticClass:"admin_general__header"},[t._v("General")]),i("admin-categories")],1)},o=[],n=(i("cadf"),i("551c"),i("097d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_categories"},[i("modal-window",{attrs:{loading:t.loading},model:{value:t.showAddModal,callback:function(e){t.showAddModal=e},expression:"showAddModal"}},[i("div",{attrs:{slot:"main"},slot:"main"},[i("p",[t._v("Add a category")]),i("fancy-input",{attrs:{placeholder:"Category name"},model:{value:t.add.name,callback:function(e){t.$set(t.add,"name",e)},expression:"add.name"}}),i("colour-picker",{model:{value:t.add.color,callback:function(e){t.$set(t.add,"color",e)},expression:"add.color"}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",on:{click:t.addCategory}},[t._v("Add category")]),i("button",{staticClass:"button button--modal",on:{click:t.toggleAddModal}},[t._v("Cancel")])])]),i("modal-window",{attrs:{loading:t.loading},model:{value:t.showEditModal,callback:function(e){t.showEditModal=e},expression:"showEditModal"}},[i("div",{attrs:{slot:"main"},slot:"main"},[i("p",[t._v("Edit this category")]),i("fancy-input",{attrs:{placeholder:"Category name"},model:{value:t.edit.name,callback:function(e){t.$set(t.edit,"name",e)},expression:"edit.name"}}),i("colour-picker",{model:{value:t.edit.color,callback:function(e){t.$set(t.edit,"color",e)},expression:"edit.color"}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--modal button--green",on:{click:t.editCategory}},[t._v("Update category")]),i("button",{staticClass:"button button--modal",on:{click:function(e){t.toggleEditModal(null)}}},[t._v("Cancel")])])]),i("div",{staticClass:"category_widget__box"},[t._m(0),i("transition-group",{attrs:{name:"slide"}},t._l(t.categories,function(e,a){return i("div",{key:e.id,staticClass:"admin_categories__category"},[i("div",{staticClass:"admin_categories__category__actions_holder"},[i("div",{staticClass:"admin_categories__category__actions"},[i("div",{staticClass:"admin_categories__category__action",on:{click:function(i){t.removeCateogry(e.id,a)}}},[t._v("Remove")]),i("div",{staticClass:"admin_categories__category__action",on:{click:function(i){t.toggleEditModal(e,a)}}},[t._v("Edit")])])]),i("div",{staticClass:"admin_categories__category__color",style:{"background-color":e.color}}),i("div",{staticClass:"admin_categories__category__name"},[t._v(t._s(e.name))])])}),0),i("div",{staticStyle:{"margin-top":"0.5rem"}},[i("div",{staticClass:"admin_categories__category admin_categories__category--add",on:{click:t.toggleAddModal}},[i("div",{staticClass:"admin_categories__category__color fa fa-plus"}),i("div",{staticClass:"admin_categories__category__name"},[t._v("Add new category")])])])],1)],1)}),r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category_widget__text"},[i("div",{staticClass:"category_widget__text__title"},[t._v("Categories")]),t._v("\n\t\t\tHover to remove or edit a category. "),i("br"),t._v("\n\t\t\tRemoving a category will place any threads in that category into 'Other'\n\t\t")])}],s=(i("7f7f"),i("6307")),c=i("80e3"),l=i("c5af"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"colour_picker"},[i("div",{staticClass:"colour_picker__selected_header"},[i("div",{staticClass:"colour_picker__selected_header__text"},[t._v("Selected colour")]),i("div",{staticClass:"colour_picker__selected",style:{"background-color":t.colour}})]),i("div",{staticClass:"colour_picker__selector_divider"},[i("div",{staticClass:"colour_picker__palette_picker",style:{left:t.palettePicker.left+"px",top:t.palettePicker.top+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.palettePicker.dragging=!0},mouseup:function(e){e.preventDefault(),e.stopPropagation(),t.palettePicker.dragging=!1,t.emit()}}}),i("canvas",{ref:"palette",staticClass:"colour_picker__palette",attrs:{width:t.dimensions,height:t.dimensions},on:{click:function(e){t.updatePalettePicker(e),t.emit()}}})]),i("div",{staticClass:"colour_picker__selector_divider"},[i("div",{staticClass:"colour_picker__hue_picker",style:{left:t.huePicker.left+"px"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.huePicker.dragging=!0},mouseup:function(e){e.preventDefault(),e.stopPropagation(),t.huePicker.dragging=!1,t.emit()}}}),i("canvas",{ref:"hue",staticClass:"colour_picker__hue",attrs:{width:t.dimensions,height:t.hueHeight},on:{click:function(e){t.updateHuePicker(e),t.emit()}}})])])},u=[],h=i("2909");i("c5f6"),i("28a5");function f(t){if(Array.isArray(t))return t}function g(t,e){var i=[],a=!0,o=!1,n=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done);a=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){o=!0,n=c}finally{try{a||null==s["return"]||s["return"]()}finally{if(o)throw n}}return i}function _(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(t,e){return f(t)||g(t,e)||_()}var m={name:"ColourPicker",props:["value"],data:function(){return{dimensions:100,hueHeight:20,palettePicker:{left:0,top:0,dragging:!1},huePicker:{left:0,dragging:!1},hue_:0,saturation_:0,lightness_:0}},computed:{colour:function(){var t="hsl("+this.hue+", "+this.saturation+"%, "+this.lightness+"%)";return t},hue:{get:function(){return this.hue_},set:function(t){if(this.hue_=t,this.$refs.hue){var e=this.$refs.hue.getBoundingClientRect().width;this.huePicker.left=Math.round(t*e/360-2)}}},saturation:{get:function(){return this.saturation_},set:function(t){if(this.saturation_=t,this.$refs.palette){this.$refs.palette.getBoundingClientRect();var e=this.$refs.palette.getBoundingClientRect().width;this.palettePicker.left=Math.round(t*e/100-8)}}},lightness:{get:function(){return this.lightness_},set:function(t){if(this.lightness_=t,this.$refs.palette){var e=this.$refs.palette.getBoundingClientRect().height;this.palettePicker.top=Math.round(e-t*e/100-8)}}}},watch:{value:function(){var t=document.createElement("span");t.style.backgroundColor=this.value;var e=t.style.backgroundColor,i=this.rgbStringToArray(e),a=this.rgbToHsl(i),o=p(a,3);this.hue=o[0],this.saturation=o[1],this.lightness=o[2],this.drawPalette()}},methods:{emit:function(){var t=document.createElement("span");t.style.backgroundColor=this.colour,this.$emit("input",t.style.backgroundColor)},drawPalette:function(){var t=this.$refs.palette.getContext("2d");t.clearRect(0,0,this.dimensions,this.dimensions);for(var e=0;e<=this.dimensions;e++)for(var i=0;i<=this.dimensions;i++){var a=100*e/this.dimensions+"%",o=100*(this.dimensions-i)/this.dimensions+"%";t.fillStyle="hsl("+this.hue+", "+a+", "+o+")",t.fillRect(e,i,1,1)}},drawHue:function(){for(var t=this.$refs.hue.getContext("2d"),e=0;e<=this.dimensions;e++){var i=e/this.dimensions*360;t.fillStyle="hsl("+i+", 100%, 50%)",t.fillRect(e,0,1,this.hueHeight)}},updatePalettePicker:function(t){if(this.$refs.palette&&(this.palettePicker.dragging||"click"===t.type)){var e=this.$refs.palette.getBoundingClientRect(),i=t.clientX-e.left-8,a=t.clientY-e.top-8;t.clientX>e.right&&(i=e.width-8),t.clientX<e.left&&(i=-8),t.clientY>e.bottom&&(a=e.height-8),t.clientY<e.top&&(a=-8),this.palettePicker.left=i,this.palettePicker.top=a;var o=i+8,n=a+8;this.saturation_=Math.round(100*o/e.width),this.lightness_=Math.round(100*(e.height-n)/e.height)}},updateHuePicker:function(t){if(this.$refs.hue&&(this.huePicker.dragging||"click"===t.type)){var e=this.$refs.hue.getBoundingClientRect(),i=t.clientX-e.left-2;t.clientY,e.top;t.clientX>e.right&&(i=e.width-2),t.clientX<e.left&&(i=-2),this.huePicker.left=i,this.hue_=Math.round(360*(i+2)/e.width),this.drawPalette()}},rgbStringToArray:function(t){return t.slice(4,-1).split(",").map(Number)},rgbToHsl:function(t){var e,i,a,o=t.map(function(t){return t/255}),n=p(o,3),r=n[0],s=n[1],c=n[2],l=Math.max.apply(Math,Object(h["a"])(o)),d=Math.min.apply(Math,Object(h["a"])(o));return a=100*(l+d)/2,l===d?[this.hue,0,a]:(i=a<50?(l-d)/(l+d):(l-d)/(2-l-d),i*=100,e=r===l?(s-c)/(l-d):s===l?2+(c-r)/(l-d):4+(r-s)/(l-d),e*=60,[e,i,a].map(function(t){return Math.round(t)}))}},mounted:function(){var t=this;this.drawPalette(),this.drawHue(),document.addEventListener("mousemove",function(e){t.updatePalettePicker(e),t.updateHuePicker(e)})}},v=m,y=(i("9267"),i("2877")),C=Object(y["a"])(v,d,u,!1,null,"fd889b6c",null);C.options.__file="ColourPicker.vue";var k=C.exports,b=i("c4b0"),w={name:"AdminCategories",components:{ModalWindow:s["a"],FancyInput:c["a"],LoadingIcon:l["a"],ColourPicker:k},data:function(){return{loading:!1,showAddModal:!1,showEditModal:!1,add:{name:"",color:"#ffffff"},edit:{name:"",color:"#ffffff",id:null,index:null},categories:[]}},methods:{toggleAddModal:function(){this.add.name="",this.add.color="#ffffff",this.showAddModal=!this.showAddModal},toggleEditModal:function(t,e){t?(this.edit.name=t.name,this.edit.color=t.color,this.edit.id=t.id,this.edit.index=e):(this.edit.name="",this.edit.color="#ffffff",this.edit.id=null,this.edit.index=null),this.showEditModal=!this.showEditModal},addCategory:function(){var t=this;this.loading=!0,this.axios.post("/api/v1/category",{name:this.add.name,color:this.add.color}).then(function(e){t.toggleAddModal(),t.loading=!1,t.categories.push(e.data),t.$store.commit("addCategories",e.data)}).catch(Object(b["a"])(this.$store))},removeCateogry:function(t,e){var i=this;this.axios.delete("/api/v1/category/"+t).then(function(a){i.categories.splice(e,1),i.$store.commit("removeCategory",t),a.data.otherCategoryCreated&&i.$store.commit("addCategories",a.data.otherCategoryCreated)}).catch(Object(b["a"])(this.$store))},editCategory:function(){var t=this;this.loading=!0,this.axios.put("/api/v1/category/"+this.edit.id,{name:this.edit.name,color:this.edit.color}).then(function(e){t.loading=!1,t.categories.splice(t.edit.index,1,e.data),t.$store.commit("updateCategory",e.data),t.toggleEditModal()}).catch(Object(b["a"])(this.$store))}},mounted:function(){var t=this;this.axios.get("/api/v1/category").then(function(e){t.categories=e.data.filter(function(t){return"Other"!==t.name})}).catch(Object(b["a"])(this.$store))}},P=w,M=(i("0be9"),Object(y["a"])(P,n,r,!1,null,"1a12c628",null));M.options.__file="AdminCategories.vue";var E=M.exports,x={name:"AdminGeneral",components:{AdminCategories:E}},A=x,$=(i("c2e0"),Object(y["a"])(A,a,o,!1,null,"7131ca25",null));$.options.__file="AdminGeneral.vue";e["default"]=$.exports},fd10:function(t,e,i){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-1cc6fb35.2cb2a1a1.js.map