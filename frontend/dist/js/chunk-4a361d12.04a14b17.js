(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a361d12"],{"080a":function(t,e,i){"use strict";var n=i("c668"),o=i.n(n);o.a},4917:function(t,e,i){"use strict";var n=i("cb7c"),o=i("9def"),l=i("0390"),s=i("5f1b");i("214f")("match",1,function(t,e,i,a){return[function(i){var n=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=a(i,t,this);if(e.done)return e.value;var c=n(t),r=String(this);if(!c.global)return s(c,r);var u=c.unicode;c.lastIndex=0;var d,_=[],m=0;while(null!==(d=s(c,r))){var v=String(d[0]);_[m]=v,""===v&&(c.lastIndex=l(r,o(c.lastIndex),u)),m++}return 0===m?null:_}]})},"6e0b":function(t,e,i){"use strict";var n=i("c89d"),o=i.n(n);o.a},"6fab":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu_tooltip",class:{"menu_tooltip--touch":!t.touchDisabled}},[i("div",{staticClass:"menu_tooltip__overlay",class:{"menu_tooltip__overlay--show":t.value},on:{click:function(e){t.$emit("input",!1)}}}),t._t("button"),i("div",{staticClass:"menu_tooltip__menu",class:{"menu_tooltip__menu--show":t.value},style:{top:t.top,width:t.width}},[i("div",{staticClass:"menu_tooltip__menu__inner"},[t._t("menu")],2)])],2)},o=[],l=(i("cadf"),i("551c"),i("097d"),{name:"MenuTooltip",props:["value","top","width","touch-disabled"]}),s=l,a=(i("6e0b"),i("2877")),c=Object(a["a"])(s,n,o,!1,null,"5bd61e2c",null);c.options.__file="MenuTooltip.vue";e["a"]=c.exports},"71a2":function(t,e,i){"use strict";var n=i("b6c9"),o=i.n(n);o.a},"87e6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input_editor_core"},[i("div",[i("emoji-selector",{attrs:{"right-align":t.rightAlignEmoji},on:{emoji:t.addEmoji},model:{value:t.emojiSelectorVisible,callback:function(e){t.emojiSelectorVisible=e},expression:"emojiSelectorVisible"}}),i("div",{staticClass:"input_editor_core__format_bar"},[i("div",{staticClass:"input_editor_core__format_button input_editor_core__format_button--emoji",attrs:{title:"Emoji"},on:{click:function(e){t.emojiSelectorVisible=!0}}},[i("span",{staticClass:"far fa-grin"})]),i("div",{staticClass:"input_editor_core__format_button",attrs:{title:"Bold (ctrl + b)"},on:{click:function(e){t.replaceSelectedText("__","__")}}},[t._v("\n\t\t\t\tB\n\t\t\t")]),i("div",{staticClass:"input_editor_core__format_button",attrs:{title:"Italic (ctrl + i)"},on:{click:function(e){t.replaceSelectedText("*","*")}}},[t._v("\n\t\t\t\tI\n\t\t\t")])]),i("textarea",{ref:"textarea",staticClass:"input_editor_core__input",attrs:{placeholder:"Type here"},domProps:{value:t.value},on:{input:function(e){t.setEditor(e.target.value)},focus:function(e){t.$emit("focus")},blur:function(e){t.$emit("blur")},keydown:[function(e){return("button"in e||66===e.keyCode)&&e.ctrlKey?(e.preventDefault(),void t.replaceSelectedText("__","__")):null},function(e){return("button"in e||73===e.keyCode)&&e.ctrlKey?(e.preventDefault(),void t.replaceSelectedText("*","*")):null}]}})],1),i("modal-window",{model:{value:t.linkModalVisible,callback:function(e){t.linkModalVisible=e},expression:"linkModalVisible"}},[i("div",{attrs:{slot:"main"},slot:"main"},[i("p",[t._v("\n\t\t\t\tEnter the web address in the input box below\n\t\t\t")]),i("fancy-input",{attrs:{placeholder:"Text for link",width:"100%"},model:{value:t.linkText,callback:function(e){t.linkText=e},expression:"linkText"}}),i("fancy-input",{attrs:{placeholder:"Web address for link",width:"100%"},model:{value:t.linkURL,callback:function(e){t.linkURL=e},expression:"linkURL"}})],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"button button--green button--modal",on:{click:t.addLink}},[t._v("\n\t\t\t\tAdd link\n\t\t\t")]),i("button",{staticClass:"button button--modal",on:{click:function(e){t.setModalState("link",!1)}}},[t._v("\n\t\t\t\tCancel\n\t\t\t")])])])],1)},o=[],l=(i("4917"),i("ac6a"),i("6307")),s=i("80e3"),a=(i("6334"),i("e145")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"emoji_selector"},[i("div",{staticClass:"emoji_selector__overlay",class:{"emoji_selector__overlay--show":t.value},on:{click:function(e){t.$emit("input",!1)}}}),i("div",{staticClass:"emoji_selector__context"},[i("div",{staticClass:"emoji_selector__tooltip",class:{"emoji_selector__tooltip--show":t.value,"emoji_selector__tooltip--right":t.rightAlign}},[t._l(t.emojis,function(e,n){return[i("div",{staticClass:"emoji_selector__title"},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]),i("div",{ref:"emoji_row",refInFor:!0,staticClass:"emoji_selector__row"},t._l(e.emojis,function(e){return i("span",{staticClass:"emoji_selector__emoji",on:{click:function(i){t.emitEmoji(e)}}},[t._v(t._s(e))])}),0)]})],2)])])},r=[],u=(i("cadf"),i("551c"),i("097d"),{name:"EmojiSelector",props:["value","right-align"],data:function(){return{stickyIndex:0,emojis:[{title:"smileys",emojis:["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😋","😜","😝","😛","🤑","🤗","🤓","😎","🤡","🤠","😏","😒","😞","😔","😟","😕","🙁","😣","😖","😫","😩","😤","😠","😡","😶","😐","😑","😯","😦","😧","😮","😲","😵","😳","😱","😨","😰","😢","😥","🤤","😭","😓","😪","😴","🙄","🤔","🤥","😬","🤐"]},{title:"people",emojis:["👶","👦","👧","👨","👩","👱‍♀️","👱","👴","👵","👲","👳‍♀️","👳","👮‍♀️","👮","💁","💁‍♂️","🙅","🙅‍♂️","🙆","🙆‍♂️","🙋","🙋‍♂️","💃","🕺","👯","👯‍♂️","🚶‍♀️","🚶","🏃‍♀️"]},{title:"animals",emojis:["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙊","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🕷","🐢","🐍"]}]}},methods:{emitEmoji:function(t){this.$emit("input",!1),this.$emit("emoji",t)}}}),d=u,_=(i("080a"),i("2877")),m=Object(_["a"])(d,c,r,!1,null,"02177cf2",null);m.options.__file="EmojiSelector.vue";var v=m.exports,f={},h={name:"InputEditorCore",props:["value","error","right-align-emoji"],components:{ModalWindow:l["a"],FancyInput:s["a"],ErrorTooltip:a["a"],EmojiSelector:v},data:function(){return{linkText:"",linkURL:"",linkModalVisible:!1,imageModalVisible:!1,emojiSelectorVisible:!1}},methods:{setModalState:function(t,e){"link"===t?(this.linkModalVisible=e,e?this.linkText=this.getSelectionData().val:(this.linkText="",this.linkURL="")):"image"===t&&(this.imageModalVisible=e)},checkUsernames:function(t){var e=this,i=0,n=[],o=function(o){i++,o&&n.push(o),i===t.length&&e.$emit("mentions",n)};t.forEach(function(t){e.checkUsername(t,o)})},checkUsername:function(t,e){var i=t.trim().slice(1),n=f[i];void 0!==n?e(n):void 0===n&&this.axios.get("/api/v1/user/"+i).then(function(t){f[i]=i,e(i)}).catch(function(t){f[i]=null,e(null)})},setEditor:function(t){var e=t.match(/(^|\s)@[^\s]+/g)||[];this.checkUsernames(e),this.$emit("input",t)},getSelectionData:function(){var t=this.$refs.textarea,e=t.selectionStart,i=t.selectionEnd;return{val:t.value.slice(e,i),start:e,end:i}},replaceSelectedText:function(t,e){var i=this.getSelectionData(),n=this.$refs.textarea;this.value.substr(i.start-t.length,t.length)===t&&this.value.substr(i.end,e.length)===e?(this.setEditor(this.value.slice(0,i.start-t.length)+i.val+this.value.slice(i.end+e.length)),setTimeout(function(){n.selectionStart=i.start-t.length,n.selectionEnd=i.end-e.length},0)):(this.setEditor(this.value.slice(0,i.start)+t+i.val+e+this.value.slice(i.end)),setTimeout(function(){n.selectionStart=i.start+t.length,n.selectionEnd=i.end+e.length},0)),n.focus()},addEmoji:function(t){var e=this.getSelectionData(),i=this.$refs.textarea;this.setEditor(this.value.slice(0,e.start)+t+this.value.slice(e.end)),i.focus(),setTimeout(function(){i.selectionStart=e.start+t.length,i.selectionEnd=e.start+t.length},0)}}},p=h,b=(i("71a2"),Object(_["a"])(p,n,o,!1,null,"3e34c18d",null));b.options.__file="InputEditorCore.vue";e["a"]=b.exports},b6c9:function(t,e,i){},c668:function(t,e,i){},c89d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4a361d12.04a14b17.js.map