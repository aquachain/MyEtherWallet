(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3f27e52"],{2097:function(e,t,s){},"55e2":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"verify-content-container"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v("Signature:")]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:e.deleteInput}},[e._v(e._s(e.$t("common.clear")))]),s("span",{on:{click:e.copyToClipboard}},[e._v(e._s(e.$t("common.copy")))])])])]),s("div",{staticClass:"the-form signature"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"signature",staticClass:"custom-textarea-1",attrs:{name:"signature"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),s("div",[""!==e.message&&!0===e.showMessage?s("p",{staticClass:"success-message"},[e._v("\n        "+e._s(JSON.parse(e.message).address)+"\n        "+e._s(e.$t("interface.verifiedMessage"))+":\n        "),JSON.parse(e.message).msg.length>20?s("br"):e._e(),s("b",[e._v(e._s(JSON.parse(e.message).msg))])]):e._e(),e.errors.has("signature")?s("p",[e._v(e._s(e.errors.first("signature")))]):e._e()])]),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"buttons"},[s("button",{class:[e.errors.has("signature")||""===e.message?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.verifyMessage}},[e._v("\n        "+e._s(e.$t("common.verifyMessage"))+"\n      ")])])])])},a=[],r=s("f29f"),i=r["a"],o=(s("5b3d"),s("2877")),c=Object(o["a"])(i,n,a,!1,null,"70b69d08",null),u=c.exports;s.d(t,"a",function(){return u})},"5b3d":function(e,t,s){"use strict";var n=s("2097"),a=s.n(n);a.a},bb65:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-message-container"},[s("interface-container-title",{attrs:{title:e.$t("common.verifyMessage")}}),s("verify-message-input"),s("div",{staticClass:"content-container"},[s("div",{staticClass:"submit-button-container"},[s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},a=[],r=s("539d"),i=s("55c1"),o=s("55e2"),c={name:"VerifyMessage",components:{"interface-bottom-text":r["a"],"interface-container-title":i["a"],"verify-message-input":o["a"]}},u=c,l=(s("dfb1"),s("2877")),d=Object(l["a"])(u,n,a,!1,null,"7755a897",null),f=d.exports;s.d(t,"default",function(){return f})},dfb1:function(e,t,s){"use strict";var n=s("e20b"),a=s.n(n);a.a},e20b:function(e,t,s){},f29f:function(e,t,s){"use strict";(function(e){s("8e6e"),s("ac6a"),s("456d"),s("6b54"),s("a481");var n=s("bd86"),a=s("ce96"),r=s("2f62"),i=s("b671");function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(s,!0).forEach(function(t){Object(n["a"])(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}t["a"]={props:{signature:{type:String,default:""}},data:function(){return{message:this.signature,showMessage:!1}},computed:c({},Object(r["b"])(["web3"])),watch:{message:function(e){this.message=e},signature:function(e){this.message=e}},methods:{copyToClipboard:function(){this.$refs.signature.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},deleteInput:function(){this.showMessage=!1,this.message=""},verifyMessage:function(){try{var t=JSON.parse(this.message),s=Object(i["hashPersonalMessage"])(Object(i["toBuffer"])(t.msg)),n=e.from(t.sig.replace("0x",""),"hex");if(65!==n.length)return void a["d"].responseHandler("Something went wrong!",a["d"].ERROR);n[64]=0===n[64]||1===n[64]?n[64]+27:n[64],"1"===t.version&&(s=this.web3.utils.sha3(t.msg));var r=Object(i["ecrecover"])(s,n[64],n.slice(0,32),n.slice(32,64));t.address.replace("0x","")!==Object(i["pubToAddress"])(r).toString("hex")?(this.showMessage=!1,a["d"].responseHandler("Signer address is different from the derived address!",a["d"].ERROR)):this.showMessage=!0}catch(o){a["d"].responseHandler(o,a["d"].ERROR)}}}}}).call(this,s("1c35").Buffer)}}]);
//# sourceMappingURL=chunk-d3f27e52.7ca2f6c8.js.map