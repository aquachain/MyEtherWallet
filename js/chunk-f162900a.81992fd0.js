(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f162900a"],{"0003":function(t,e,i){"use strict";i.d(e,"e",function(){return o}),i.d(e,"d",function(){return c}),i.d(e,"c",function(){return l}),i.d(e,"f",function(){return u}),i.d(e,"h",function(){return d}),i.d(e,"g",function(){return p}),i.d(e,"a",function(){return f}),i.d(e,"b",function(){return h});i("6b54");var n=i("901e"),a=i.n(n),r=function(t){return new a.a(t)},s=function(t,e,i){return r(t).times(r(e)).div(r(i))};function o(t){return a.a.isBigNumber(t)||(t=new a.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.a.isBigNumber(t)||(t=new a.a(t)),!isFinite(t)||isNaN(t)?"--":i?t.toFixed(e,a.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=c(o(t),e,i);return isFinite(n)&&new a.a(n).gt(0)?n:"--"}function u(t,e,i,n){return s(r(t),r(e),r(i)).minus(r(n))}function d(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(s(r(e).plus(.001),r(i),r(n))).minus(r(a).times(1))}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(s(r(e),r(i),r(n))).minus(r(a).times(1))}function f(t,e,i){return s(r(i),t,e)}function h(t,e,i,n){for(var a=parseInt(i),o=a;o>0;o--){var c=s(o,t,e).lte(r(n));if(c)return o}for(var l=100;l>0;l--){var u=s(l/100,t,e).lte(r(n));if(u)return l/100}return 0}},"14fb":function(t,e,i){"use strict";var n=i("d68c"),a=i.n(n);a.a},"358c":function(t,e,i){"use strict";var n=i("3654"),a=i.n(n);a.a},3654:function(t,e,i){},"446a":function(t,e,i){"use strict";var n=i("d81e"),a=i.n(n);a.a},"6f04":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-maker"},[i("dai-confirmation-modal",{ref:"daiconfirmation",attrs:{opencdp:t.openCdp,txinfo:t.txInfo,"liquidation-price":t.liquidationPrice,"collat-ratio":t.displayFixedPercent(t.collatRatio),"liquidation-penalty":t.displayPercentValue(t.liquidationPenalty),"min-ratio":t.displayPercentValue(t.liquidationRatio),"current-price":t.displayFixedValue(t.ethPrice,2),collateral:t.ethQty.toString(),generate:t.daiQty.toString()}}),t.loading?i("loading-overlay",{attrs:{loadingmessage:t.$t("dappsMaker.creatingMessage")}}):t._e(),i("div",{staticClass:"manage-container"},[i("p",{staticClass:"top-title"},[t._v("\n      "+t._s(t.$t("dappsMaker.maker_title"))+"\n    ")]),i("p",{staticClass:"top-title-sub"},[t._v("\n      "+t._s(t.$t("dappsMaker.createInstruct"))+"\n    ")]),i("div",{staticClass:"currency-ops-new"},[i("div",{staticClass:"currency-picker-container"},[i("div",{staticClass:"interface__block-title"},[t._v("\n          "+t._s(t.$t("dappsMaker.collateral"))+"\n        ")]),t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ethQty,expression:"ethQty"}],class:[t.hasEnoughEth?"":"red-border","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.ethQty},on:{input:function(e){e.target.composing||(t.ethQty=e.target.value)}}}),i("div",{staticClass:"input-block-message"},[t.hasEnoughEth?t._e():i("p",{staticClass:"red-text"},[t._v("Not enough ETH")]),i("p",[t._v("\n            "+t._s(t.$t("dappsMaker.minCollat"))+"\n            "),i("b",[t._v(t._s(t.displayFixedValue(t.minEth,6)))]),t._v(" ETH\n          ")]),i("p",[t._v(t._s(t.displayFixedValue(t.depositInPeth,6))+" PETH")])])]),i("div",{staticClass:"arrow"},[i("img",{attrs:{src:t.arrowImage}})]),i("div",[i("div",{staticClass:"interface__block-title"},[t._v("\n          "+t._s(t.$t("dappsMaker.generate"))+"\n        ")]),t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.daiQty,expression:"daiQty"}],class:[t.veryRisky?"red-border":"",t.risky&&!t.veryRisky?"orange-border":"","currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.daiQty},on:{input:function(e){e.target.composing||(t.daiQty=e.target.value)}}}),i("div",{staticClass:"input-block-message"},[i("p",[t._v("\n            "+t._s(t.$t("dappsMaker.maxGenerate"))+"\n            "),i("b",[t._v(t._s(t.displayFixedValue(t.maxDaiDraw,6)))]),t._v(" DAI\n          ")])])])]),i("div",{staticClass:"cdp-info-block cdp-info-entry"},[i("ul",[i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.minEthReq")))]),i("p",[t._v(t._s(t.displayFixedValue(t.minEth,6))+" ETH")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice")))]),i("p",[i("b",[t._v(t._s(t.liquidationPrice))]),t._v(" USD\n          ")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.currentPriceInfo")))]),i("p",[t._v(t._s(t.displayFixedValue(t.ethPrice,2))+" USD")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),i("p",[t._v(t._s(t.displayPercentValue(t.liquidationPenalty))+"%")])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),i("p",{class:[t.veryRisky?"red-text":"",t.risky&&!t.veryRisky?"orange-text":""]},[i("b",[t._v(t._s(t.displayFixedPercent(t.collatRatio))+"%")])])]),i("li",[i("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),i("p",[t._v(t._s(t.displayPercentValue(t.liquidationRatio))+"%")])])])]),i("div",{staticClass:"cdp-info-block cdp-info-entry"},[i("ul",[i("li",[i("p",[t._v("\n            "+t._s(t.$t("dappsMaker.stabilityFeeInMkr",{value:t.displayFixedPercent(t.stabilityFee).toString()}))+"\n          ")])])])]),i("div",{staticClass:"buttons-container"},[i("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.openDaiConfirmation}},[t._v("\n        "+t._s(t.$t("dappsMaker.collatAndGenerate"))+"\n      ")])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-text-container dropdown-container"},[i("p",[i("span",{staticClass:"cc ETH cc-icon currency-symbol"}),t._v("\n            ETH\n            "),i("span",{staticClass:"subname"},[t._v("- Ethereum ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-text-container dropdown-container"},[i("p",[i("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),t._v("\n            DAI\n            "),i("span",{staticClass:"subname"},[t._v("- Maker DAI ")])])])}],r=(i("8e6e"),i("456d"),i("96cf"),i("3b8d")),s=(i("6b54"),i("ac6a"),i("bd86")),o=i("2f62"),c=i("70c1"),l=i.n(c),u=i("55c1"),d=i("539d"),p=i("c8e5"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:t.$t("dappsMaker.DAIConfirmation"),centered:"","hide-footer":"",static:"",lazy:""}},[n("div",{staticClass:"modal-content-container"},[n("div",{staticClass:"tx-amount"},[n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.collateral"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9165")}})]),n("div",{staticClass:"amount"},[t._v(t._s(t.collateral)),n("span",[t._v("ETH")])])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:i("432e")}})]),n("div",[n("div",{staticClass:"interface__block-title"},[t._v("\n            "+t._s(t.$t("dappsMaker.generate"))+"\n          ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9b76")}})]),n("div",{staticClass:"amount"},[t._v(t._s(t.generate)),n("span",[t._v("DAI")])])])])]),n("div",{staticClass:"detail-info"},[n("expending-option",{attrs:{title:t.$t("dappsMaker.details")}},[n("ul",[n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidPrice"))+" (ETH/USD)")]),n("p",{staticClass:"bold"},[t._v(t._s(t.liquidationPrice)+" USD")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.currentPrice"))+" (ETH/USD)")]),n("p",[t._v(t._s(t.currentPrice)+" USD")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidationPenalty")))]),n("p",[t._v(t._s(t.liquidationPenalty)+"%")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.collateralRatio")))]),n("p",{staticClass:"bold"},[t._v(t._s(t.collatRatio)+" %")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.minimumRatio")))]),n("p",[t._v(t._s(t.minRatio)+"%")])])])])],1),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:t.confirmButton},nativeOn:{click:function(e){return t.confirmClicked(e)}}})],1)])])],1)},h=[],v=(i("c5f6"),i("75fb")),m=i("a8f0"),y={components:{"expending-option":v["a"],"standard-button":m["a"]},props:{opencdp:{type:Function,default:function(){}},liquidationPrice:{type:Number,default:0},collatRatio:{type:String,default:"Error"},liquidationPenalty:{type:String,default:"Error"},minRatio:{type:String,default:"Error"},currentPrice:{type:String,default:"Error"},collateral:{type:String,default:"Error"},generate:{type:String,default:"Error"}},data:function(){return{confirmButton:{title:this.$t("dappsMaker.confirmAndCreate"),buttonStyle:"green",helpCenter:!0}}},computed:{},watch:{},mounted:function(){},methods:{confirmClicked:function(){this.opencdp()}}},g=y,_=(i("446a"),i("2877")),b=Object(_["a"])(g,f,h,!1,null,"3f74f3b8",null),P=b.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-overlay"},[i("div",{staticClass:"loading-sign"},[i("loading-sign",{attrs:{loadingmessage1:t.loadingmessage,color:"white"}})],1)])},C=[],w=i("c1be"),x={components:{"loading-sign":w["a"]},props:{loadingmessage:{type:String,default:""}},data:function(){return{}}},R=x,E=(i("358c"),Object(_["a"])(R,k,C,!1,null,"2bfe5986",null)),D=E.exports,$=i("0003"),Q=i("901e"),S=i.n(Q),M=i("cc82"),q=i.n(M);function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(i,!0).forEach(function(e){Object(s["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var j=function(t){return new S.a(t)},I=function(t,e,i){return j(t).times(j(e)).div(j(i))},T={components:{"interface-container-title":u["a"],"interface-bottom-text":d["a"],blockie:p["a"],"dai-confirmation-modal":P,"loading-overlay":D},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"},ethPrice:{type:S.a,default:j(0)},pethPrice:{type:S.a,default:j(0)},liquidationPenalty:{type:S.a,default:j(0)},stabilityFee:{type:S.a,default:j(0)},liquidationRatio:{type:S.a,default:j(0)},wethToPethRatio:{type:S.a,default:j(0)},pethMin:{type:S.a,default:j(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},buildEmpty:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}}},data:function(){return{arrowImage:q.a,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,txInfo:{},loading:!1}},computed:F({},Object(o["b"])(["account","gasPrice","web3","network","ens"]),{validInputs:function(){return!j(this.ethQty).isNaN()&&!j(this.daiQty).isNaN()&&(!!j(this.ethQty).gt(0)&&(!j(this.ethQty).lte(this.values.minEth)&&(!j(this.maxDaiDraw).lte(j(this.daiQty))&&(!j(this.collatRatio).lte(1.501)&&j(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)))))},hasEnoughEth:function(){return!j(this.ethQty).isNaN()&&j(l.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)},atSetFloor:function(){return this.priceFloor<=0?0:I(this.ethPrice,this.liquidationRatio,this.priceFloor)},collatRatio:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcCollatRatio(this.ethQty,this.daiQty)},liquidationPrice:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcLiquidationPrice(this.ethQty,this.daiQty)},maxDaiDraw:function(){if(this.ethQty<=0)return 0;var t=this.calcDaiDraw(this.ethQty).times(.01);return j(this.calcDaiDraw(this.ethQty)).minus(t)},minEthDeposit:function(){return this.daiQty<=0?0:this.calcMinEthDeposit(this.daiQty)},risky:function(){var t=this.collatRatio;return!!j(t).gt(0)&&j(t).lte(2)},veryRisky:function(){var t=this.collatRatio;return!!j(t).gt(0)&&j(t).lte(1.75)},depositInPeth:function(){return this.ethQty<=0?0:this.toPeth(this.ethQty)},minEth:function(){return this.wethToPethRatio?j(this.pethMin).times(this.wethToPethRatio):"--"}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.buildEmptyInstance();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{buildEmptyInstance:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.buildEmpty();case 2:this.makerCDP=t.sent,this.$forceUpdate();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),displayPercentValue:$["e"],displayFixedValue:$["d"],displayFixedPercent:$["c"],openCdp:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!(this.ethQty<=0)){t.next=3;break}return t.abrupt("return",0);case 3:return setTimeout(function(){e.loading=!1},5e3),this.$eventHub.$on("showTxConfirmModal",function(){e.$emit("cdpOpened"),e.loading&&(e.$refs.daiconfirmation.$refs.modal.hide(),e.loading=!1)}),t.next=7,this.makerCDP.openCdp(this.ethQty,this.daiQty);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openDaiConfirmation:function(){this.$refs.daiconfirmation.$refs.modal.show()},toUSD:function(t){if(void 0===t||null===t)return j(0);var e=this.ethPrice.times(j(t));return e.lt(0)?j(0):e},toPeth:function(t){return j(t).eq(0)?j(0):j(t).div(this.wethToPethRatio)},fromPeth:function(t){return j(t).eq(0)?j(0):j(t).times(this.wethToPethRatio)},calcMinCollatRatio:function(t){return I(this.ethPrice,this.liquidationRatio,t)},calcDaiDraw:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:I(e,j(t),i)},calcMinEthDeposit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:I(i,t,e)},calcCollatRatio:function(t,e){return t<=0||e<=0?0:I(this.ethPrice,t,e)},calcLiquidationPrice:function(t,e){if(t<=0||e<=0)return 0;for(var i=parseInt(this.ethPrice),n=i;n>0;n--){var a=I(n,t,e).lte(this.liquidationRatio);if(a)return n}for(var r=100;r>0;r--){var s=I(r/100,t,e).lte(this.liquidationRatio);if(s)return r/100}return 0}}},N=T,V=(i("b5ed"),Object(_["a"])(N,n,a,!1,null,"b36da01c",null)),H=V.exports;e["default"]=H},b5ed:function(t,e,i){"use strict";var n=i("d7a5"),a=i.n(n);a.a},c1be:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-sign"},[i("div",{staticClass:"loading-container",class:t.color},[t._m(0),""!=t.loadingmessage1?i("p",{staticClass:"loading-message1"},[t._v("\n      "+t._s(t.loadingmessage1)+"\n    ")]):t._e(),""!=t.loadingmessage2?i("p",{staticClass:"loading-message2"},[t._v("\n      "+t._s(t.loadingmessage2)+"\n    ")]):t._e()])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lds-spinner"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])}],r={name:"LoadingSign",components:{},props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},s=r,o=(i("14fb"),i("2877")),c=Object(o["a"])(s,n,a,!1,null,"48638ccc",null),l=c.exports;i.d(e,"a",function(){return l})},d68c:function(t,e,i){},d7a5:function(t,e,i){},d81e:function(t,e,i){}}]);
//# sourceMappingURL=chunk-f162900a.81992fd0.js.map