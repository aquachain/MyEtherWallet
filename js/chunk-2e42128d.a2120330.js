(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e42128d"],{"14fb":function(t,e,n){"use strict";var s=n("d68c"),a=n.n(s);a.a},"1b03":function(t,e,n){},"1da5":function(t,e,n){"use strict";var s=n("64ca"),a=n.n(s);a.a},"1f82":function(t,e,n){},"2cd3":function(t,e,n){},"3dca":function(t,e,n){"use strict";var s=n("1b03"),a=n.n(s);a.a},"459b":function(t,e,n){},"4bd1":function(t,e,n){"use strict";var s=n("f461"),a=n.n(s);a.a},"64ca":function(t,e,n){},6702:function(t,e,n){"use strict";var s=n("459b"),a=n.n(s);a.a},7805:function(t,e,n){"use strict";var s=n("1f82"),a=n.n(s);a.a},"8e92":function(t,e,n){"use strict";var s=n("ea11"),a=n.n(s);a.a},"8f6a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-manager"},[n("interface-container-title",{attrs:{title:t.$t("common.ntfManager")}}),!t.isReady&&t.isOnlineAndEth?n("div",{staticClass:"inner-side-menu content-container"},[n("nft-side-menu",{attrs:{"supported-nft-obj":t.sideMenuData,"nft-config":t.nftConfig}}),n("loading-sign",{attrs:{loadingmessage1:t.$t("common.loading")}})],1):t._e(),t.isReady&&t.hasNfts?n("div",{staticClass:"inner-side-menu content-container"},[n("nft-side-menu",{attrs:{"supported-nft-obj":t.sideMenuData,"nft-config":t.nftConfig,"initial-highlighted":t.selectedContract,"loading-complete":t.countsRetrieved,"sent-update":t.sentUpdate},on:{selected:t.changeSelectedContract}}),t.showDetails?n("div",[n("nft-details",{attrs:{nft:t.detailsFor,"selected-title":t.nftTitle},on:{nftTransfered:t.removeSentNft,back:t.comeBack}})],1):t._e(),t.showDetails?t._e():n("div",[n("content-block-title",{attrs:{"button-text":t.ntfCount,title:t.nftTitle}}),n("div",{staticClass:"grid-container"},[t._l(t.nftToShow,function(e){return n("div",{key:e.key,staticClass:"kitty"},[n("div",{staticClass:"kitty-img",on:{click:function(n){return t.showNftDetails(e)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasImage(e),expression:"!hasImage(nft)"}],staticClass:"placeholder"},[n("div",{staticClass:"animated-background"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasImage(e),expression:"hasImage(nft)"}]},[n("img",{attrs:{src:t.getImage(e)},on:{load:function(n){return t.hasLoaded(e)}}})]),n("p",[t._v("#"+t._s(e.token))])])])}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.selectedNtf.count>9,expression:"selectedNtf.count > 9"}],staticClass:"internal-nav-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.startIndex>0,expression:"startIndex > 0"}],staticClass:"internal-nav prev",on:{click:function(e){return t.getPrevious()}}},[n("i",{staticClass:"fa fa-chevron-left"})]),t._v("\n          "+t._s(t.$t("dapps.showing",{first:t.startIndex,last:t.endIndex}))+"\n          "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showNextButton,expression:"showNextButton"}],staticClass:"internal-nav next",on:{click:function(e){return t.getNext()}}},[n("i",{staticClass:"fa fa-chevron-right"})])])],2)],1)],1):t._e(),t.isReady&&!t.hasNfts?n("div",{staticClass:"inner-side-menu content-container"},[t._v("\n    No NFTs\n  ")]):t._e(),t.isOnlineAndEth?t._e():n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.online,expression:"!online"}]},[t._v("\n      NFTs are\n    ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.online,expression:"online"}]},[t._v("\n      NFTs are not supported on "+t._s(t.network.type.name_long)+"\n    ")])]),n("div",{staticClass:"flex--row--align-start mft-manager-content-container"})],1)},a=[],r=(n("8e6e"),n("456d"),n("6b54"),n("c5f6"),n("ee1d"),n("96cf"),n("3b8d")),i=(n("7f7f"),n("ac6a"),n("8615"),n("bd86")),o=n("c1be"),c=n("55c1"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex--row--align-center content-block-title"},[n("h4",[t._v(t._s(t.title))]),n("div",{staticClass:"margin--left--auto"},[n("p",[t._v(t._s(t.buttonText))])])])},u=[],l={components:{},props:{title:{type:String,default:""},buttonText:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},mounted:function(){}},f=l,h=(n("4bd1"),n("2877")),p=Object(h["a"])(f,d,u,!1,null,"598f2b72",null),m=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nft-side-menu"},[n("div",{staticClass:"desktop-menu"},[n("ul",{staticClass:"listing-container"},t._l(t.sortByCount,function(e){return n("li",{key:e.key,class:e.contract===t.selected?"selected":"",on:{click:function(n){return t.selectNft(e)}}},[t._v("\n        "+t._s(e.title)+" ("+t._s(e.count)+")\n      ")])}),0)]),n("div",{staticClass:"mobile-menu"},[n("b-dropdown",{attrs:{text:"CryptoKitties (5)"}},t._l(t.sortByCount,function(e){return n("b-dropdown-item",{key:e.key,attrs:{href:"#"}},[t._v("\n        "+t._s(e.title)+" ("+t._s(e.count)+")\n      ")])}),1)],1)])},v=[],b=(n("55dd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-search"},[t._t("default"),s("img",{attrs:{src:n("ba91")}})],2)}),w=[],y={props:{options:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},watch:{},methods:{}},C=y,k=(n("6702"),Object(h["a"])(C,b,w,!1,null,"3525e393",null)),x=k.exports,O={components:{"input-search":x},props:{supportedNftObj:{type:Object,default:function(){return{}}},initialHighlighted:{type:String,default:""},loadingComplete:{type:Boolean,default:!1},sentUpdate:{type:Number,default:0}},data:function(){return{selected:"",searchResults:[]}},computed:{sortByCount:function(){return Object.values(this.supportedNftObj).sort(function(t,e){return t.count<e.count?1:t.count>e.count?-1:0})}},watch:{loadingComplete:function(){this.setSelectedToTop()},sentUpdate:function(){this.setSelectedToTop()}},mounted:function(){this.selected=this.initialHighlighted},methods:{setSelectedToTop:function(){this.selected=this.sortByCount[0].contract,this.$emit("selected",this.selected)},selectNft:function(t){this.searchResults=[],t.count>0&&(this.selected=t.contract,this.$emit("selected",t.contract))},showDetails:function(t){this.searchResults=[],this.$emit("showTokenDetails",t)}}},_=O,A=(n("1da5"),n("becd"),Object(h["a"])(_,g,v,!1,null,"84ba72da",null)),D=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-details"},[n("div",{staticClass:"crypto-kitties-details-content-container"},[n("back-button",{nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"kitty-image"},[n("img",{attrs:{src:t.nft.image}})]),n("div",{staticClass:"kitty-text"},[n("h3",[t._v(t._s(t.$t("dapps.sendMy",{value:t.selectedTitle})))]),n("p",[t._v("#"+t._s(t.nft.token))]),n("div",{staticClass:"address-input-container"},[n("address-selector",{attrs:{title:t.$t("interface.sendTxToAddr")},on:{toAddress:t.prepareTransfer}}),n("div",{staticClass:"send-button-container"},[n("standard-button",{attrs:{"button-disabled":!t.isValidAddress,options:t.sendButton},nativeOn:{click:function(e){return t.transfer(e)}}})],1)],1)])])],1)])},N=[],j=n("2f62"),I=n("ce96"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-back-button"},[n("p",{on:{click:function(e){return e.preventDefault(),t.back(e)}}},[t._v("< "+t._s(t.$t("common.back")))])])},S=[],R={props:{url:{type:String,default:""}},methods:{back:function(){this.$router.push("/interface/nft-manager")}}},E=R,$=(n("8e92"),Object(h["a"])(E,T,S,!1,null,"6bdf08f6",null)),B=$.exports,M=n("94b2d"),F=n("a8f0");function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,s)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var L={components:{"interface-container-title":c["a"],"back-button":B,"address-selector":M["a"],"standard-button":F["a"]},props:{selectedTitle:{type:String,default:"Error"},nft:{type:Object,default:function(){return{}}},selectedContract:{type:String,default:"Error"},nftConfig:{type:Object,default:function(){return{}}}},data:function(){return{toAddress:"",tokenContract:{},ERC721tokenContract:{},cryptoKittiesContract:{},cryptoKittiesConfig:"0x06012c8cf97bead5deae237070f9587f8e7a266d",sendButton:{title:this.$t("interface.send"),buttonStyle:"green",helpCenter:!0,noMinWidth:!0,fullWidth:!0}}},computed:K({},Object(j["b"])(["account","web3"]),{isValidAddress:function(){return""!==this.toAddress&&I["c"].isValidENSorEtherAddress(this.toAddress)}}),watch:{},mounted:function(){this.ERC721tokenContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}])},methods:{prepareTransfer:function(t){this.toAddress=t,this.ERC721tokenContract.options.address=this.nft.contract},buildData:function(){return this.nft.contract.toLowerCase()===this.cryptoKittiesConfig.toLowerCase()?(this.cryptoKittiesContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]),this.cryptoKittiesContract.methods.transfer(this.toAddress,this.nft.token).encodeABI()):this.ERC721tokenContract.methods.transferFrom(this.account.address,this.toAddress,this.nft.token).encodeABI()},transfer:function(){if(this.isValidAddress){var t=this.buildData(),e={from:this.account.address,to:this.nft.contract,data:t};this.web3.eth.sendTransaction(e).catch(function(t){I["d"].responseHandler(t,I["d"].ERROR)}),this.$emit("nftTransfered",this.nft),this.toAddress=""}},goBack:function(){this.$emit("back")}}},U=L,V=(n("3dca"),Object(h["a"])(U,P,N,!1,null,"65352542",null)),G=V.exports,J=n("901e"),W=n.n(J),z=function(t){return 2*t},q=function(t){t="0x"==t.substring(0,2)?t.substring(2):t,t=t.substring(0,t.lastIndexOf("1")-1);var e=t.length;e-=z(32);for(var n=new W.a("0x"+t.substr(e,z(32))).toNumber(),s=[],a=0;a<n;a++){e-=z(1);var r=new W.a("0x"+t.substr(e,z(1))).toNumber();e-=z(r),s.push(new W.a("0x"+t.substr(e,z(r))))}return s},Q=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"addr",type:"address"}],name:"getTokenBalance",outputs:[{name:"bal",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"owner",type:"address"},{name:"tokenId",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"token",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"number",type:"uint256"}],name:"getByteSize",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddresses",type:"address[]"},{name:"_owner",type:"address"}],name:"getTokenBalances",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddress",type:"address"},{name:"_owner",type:"address"},{name:"idxOffset",type:"uint256"},{name:"count",type:"uint256"}],name:"getOwnedTokens",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"}];function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,s)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Z="https://nft.mewapi.io/nft",tt={components:{"loading-sign":o["a"],"content-block-title":m,"nft-side-menu":D,"interface-container-title":c["a"],"nft-details":G},props:{},data:function(){return{nftABI:Q,countPerPage:9,nftConfig:[],tokenHelper:{},mayHaveTokens:[!0,!0],countsRetrieved:!1,showDetails:!1,selectedContract:"0x06012c8cf97bead5deae237070f9587f8e7a266d",detailsFor:{},nftTokens:{},nftData:{},ownedTokens:[],tokenContractAddress:"0xeA3352C1a3480Ac5a32Fcd1F2854529BA7193F14",sentUpdate:0}},computed:Y({},Object(j["b"])(["account","web3","online","network"]),{endIndex:function(){if(this.nftData[this.selectedContract]){var t=this.nftData[this.selectedContract].details.length,e=t>this.countPerPage?this.countPerPage:t;return this.nftData[this.selectedContract].currentIndex+e}},nftTitle:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract].title:"Loading"},nftToShow:function(){return this.nftData[this.selectedContract]&&this.nftData[this.selectedContract].details?this.nftData[this.selectedContract].details.length>this.countPerPage?this.nftData[this.selectedContract].details.slice(this.nftData[this.selectedContract].currentIndex,this.nftData[this.selectedContract].currentIndex+this.countPerPage):this.nftData[this.selectedContract].details:[]},ntfCount:function(){return this.nftData[this.selectedContract]?this.$t("dapps.nftOwnCount",{perPage:this.countPerPage,count:this.nftData[this.selectedContract].count}):this.$t("dapps.noneOwned")},selectedNtf:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract]:{}},showNextButton:function(){if(this.nftData[this.selectedContract]){var t=this.nftData[this.selectedContract].count;return this.endIndex!==t&&this.endIndex<=t}},sideMenuData:function(){return this.nftData},startIndex:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract].currentIndex:0},activeAddress:function(){return this.account.address},hasNfts:function(){return Object.values(this.nftData).some(function(t){return t.count>0})},isReady:function(){return this.isOnlineAndEth&&this.countsRetrieved},isOnlineAndEth:function(){return this.online&&"ETH"===this.network.type.name}}),watch:{},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={count:0,selected:!1,startIndex:0,priorIndex:0,currentIndex:0,details:[]},t.next=3,this.getTokenConfig();case 3:n=t.sent,this.nftConfig=n.map(function(t){return Y({},t,{contract:t.contractAddress})}),this.nftData=this.nftConfig.reduce(function(t,n){return t[n.contract]=Y({},n,{},e),t},{}),"ETH"===this.network.type.name&&(this.getOwnedCounts(),this.getOwned());case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{hasLoaded:function(t){this.$set(t,"loaded",!0)},hasImage:function(t){if(t.loaded)return!0},removeSentNft:function(t){var e=this.nftData[t.contract].details.filter(function(e){return e.token!==t.token});this.$set(this.nftData[t.contract],"details",e),this.nftData[t.contract].count-=1,0===this.nftData[t.contract].count&&(this.sentUpdate+=1),this.showDetails=!1},changeSelectedContract:function(t){this.selectedContract=t,this.showDetails=!1},comeBack:function(){this.showDetails=!1},getImage:function(t){return t.image},getNftImagePath:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Z,"?contract=").concat(e,"&token=").concat(n),{mode:"cors",cache:"no-cache",method:"GET"});case 2:return s=t.sent,t.next=5,s.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedCounts:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,s,a,r=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:this.activeAddress,n=this.nftConfig.filter(function(t){return t.ERC721Extension}).map(function(t){return t.contract}),s=new this.web3.eth.Contract(Q),s.options.address=this.tokenContractAddress,t.next=6,s.methods.getTokenBalances(n,e.toLowerCase()).call();case 6:a=t.sent,q(a).map(function(t,e){return r.nftData[n[e]].count=Number.isNaN(t.toNumber())?0:t.toNumber(),t.toString()});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getOwned:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,s,a,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:this.activeAddress,n=r.length>1&&void 0!==r[1]?r[1]:this.nftData,this.processing){t.next=11;break}return this.processing=!0,s=Object.keys(n),t.next=7,this.getOwnedTokens(s,e,n);case 7:return a=t.sent,this.ready=!0,this.processing=!1,t.abrupt("return",a);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getOwnedNonStandard:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var s,a,r=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=i.length>2&&void 0!==i[2]?i[2]:0,a=i.length>3&&void 0!==i[3]?i[3]:this.countPerPage,fetch("".concat(Z,"?nonStandardContract=").concat(e,"&address=").concat(n,"&offset=").concat(s,"&limit=").concat(a),{mode:"cors",cache:"no-cache",method:"GET"}).then(function(t){return t.json()}).then(function(t){r.nftData[e].count=t.total,r.countsRetrieved=!0;var n=function(t,e,n){return e.reduce(function(t,e){return"@tokenvalue@"===e&&(e=n.toString()),t&&"undefined"!==t[e]?t[e]:void 0},t)},s=r.nftData[e].metadataKeys||["kitties"],a=r.nftData[e].imageKey||"image_url_png",i=n(t,s).map(function(t){return{contract:e,token:t.id,image:t[a]?"".concat(Z,"/image?path=").concat(t[a]):""}});return r.nftData[e].details=i.slice(0,9),r.$set(r.nftData[e],"details",i.slice(0,9)),r.nftData[e].details}).then(function(t){if(t.length>0)for(var n=t.length>r.countPerPage?r.countPerPage:t.length,s=function(n){Number.isNaN(t[n].token)||""!==t[n].image||r.getNftImagePath(e,t[n].token).then(function(t){r.nftData[e].details[n].image="".concat(Z,"/image?path=").concat(t.image)}).catch(function(){r.nftData[e].details[n]&&(r.nftData[e].details[n].image="")})},a=0;a<n;a++)s(a)});case 3:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedStandard:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var s,a,r,i=this,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=o.length>2&&void 0!==o[2]?o[2]:this.countPerPage,a=o.length>3&&void 0!==o[3]?o[3]:this.activeAddress,r=o.length>4&&void 0!==o[4]?o[4]:void 0,r||(r=new this.web3.eth.Contract(Q),r.options.address=this.tokenContractAddress),r.methods.getOwnedTokens(e,a.toLowerCase(),n,s).call().then(function(t){return q(t).map(function(t){return{contract:e,token:t.toNumber(),image:""}})}).then(function(t){if(i.nftData[e].details=t,i.$set(i.nftData[e],"details",t),t.length>0)for(var n=t.length>i.countPerPage?i.countPerPage:t.length,s=function(n){Number.isNaN(t[n].token)||i.getNftImagePath(e,t[n].token).then(function(t){i.nftData[e].details[n].image="".concat(Z,"/image?path=").concat(t.image)}).catch(function(){i.nftData[e].details[n]&&(i.nftData[e].details[n].image="")})},a=0;a<n;a++)s(a)});case 5:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedTokens:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n,s){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=new this.web3.eth.Contract(Q),a.options.address=this.tokenContractAddress,r=0;case 3:if(!(r<e.length)){t.next=10;break}return t.next=6,this.loadForContract(e[r],s,n,a);case 6:s=t.sent;case 7:r++,t.next=3;break;case 10:case"end":return t.stop()}},t,this)}));function e(e,n,s){return t.apply(this,arguments)}return e}(),getNext:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.account.address,e=this.nftData[this.selectedContract],n=e.currentIndex+this.countPerPage;n<=e.count?(e.priorIndex=e.currentIndex,e.currentIndex=n):(e.priorIndex=e.currentIndex,e.currentIndex=e.count),e.nonStandard?this.getOwnedNonStandard(e.contract,t,n,this.countPerPage):this.getOwnedStandard(e.contract,n,this.countPerPage)},getPrevious:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.activeAddress,e=this.nftData[this.selectedContract],n=e.currentIndex-e.priorIndex;e.currentIndex-n>=0?e.currentIndex=e.currentIndex-n:e.currentIndex=0,e.priorIndex-n>=0?e.priorIndex=e.priorIndex-n:e.priorIndex=0,n>=0&&(e.nonStandard?this.getOwnedNonStandard(e.contract,t,n,this.countPerPage):this.getOwnedStandard(e.contract,n,this.countPerPage))},getTokenConfig:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Z,"?supported=true"),{mode:"cors",cache:"no-cache",method:"GET","Cache-Control":"no-cache"});case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),loadForContract:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var s,a,r=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=i.length>2&&void 0!==i[2]?i[2]:this.activeAddress,a=i.length>3&&void 0!==i[3]?i[3]:null,!n[e].ERC721Extension){t.next=7;break}return this.getOwnedStandard(e,0,this.countPerPage,s,a).then(function(t){r.nftData[e].details=t}),t.abrupt("return",n);case 7:n[e].nonStandard&&this.getOwnedNonStandard(e,s);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),showNftDetails:function(t){this.detailsFor=t,this.showDetails=!0}}},et=tt,nt=(n("7805"),Object(h["a"])(et,s,a,!1,null,"0fcf5e2d",null)),st=nt.exports;n.d(e,"default",function(){return st})},"94b2d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drop-down-address-selector"},[s("div",{staticClass:"dropdown--title"},[s("h4",[t._v(t._s(t.title))]),s("button",{staticClass:"title-button prevent-user-select",on:{click:function(e){return t.copyToClipboard(t.$refs.addressInput)}}},[t._v("\n      "+t._s(t.$t("common.copy"))+"\n    ")])]),s("div",{staticClass:"dropdown--content"},[s("div",{staticClass:"dropdown-input-box",class:t.dropdownOpen?"dropdown-open":""},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAddress,expression:"selectedAddress"}],ref:"addressInput",attrs:{type:"text",placeholder:"Please enter the address"},domProps:{value:t.selectedAddress},on:{focus:function(e){t.dropdownOpen=!1},input:function(e){e.target.composing||(t.selectedAddress=e.target.value)}}}),t.validAddress?t._e():s("div",{staticClass:"blockie-place-holder-image"}),t.validAddress?s("div",{staticClass:"selected-address-blockie"},[s("blockie",{attrs:{address:t.selectedAddress,width:"30px",height:"30px"}}),t.isToken(t.currency)?s("div",[s("img",{staticClass:"currency-icon",attrs:{src:n("9165")}})]):s("div",[s("i",{class:["currency-icon","as-font","cc",t.currency,"cc-icon"]})])],1):t._e(),s("div",{staticClass:"dropdown-open-button",on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[t.dropdownOpen?t._e():s("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}}),t.dropdownOpen?s("i",{staticClass:"fa fa-chevron-up",attrs:{"aria-hidden":"true"}}):t._e()])]),t.dropdownOpen?s("div",{staticClass:"dropdown-list-box"},[s("ul",t._l(t.addresses,function(e){return s("li",{key:e.key,on:{click:function(n){return t.listedAddressClick(e.address)}}},[s("div",{staticClass:"list-blockie"},[s("blockie",{attrs:{address:e.address,width:"30px",height:"30px"}}),s("img",{staticClass:"currency-icon",attrs:{src:n("9165")}})],1),s("div",{staticClass:"address-block"},[s("p",{staticClass:"listed-address"},[t._v("\n              "+t._s(e.address)+"\n              ")])]),e.address===t.currentAddress?s("p",{staticClass:"address-note"},[t._v("\n            "+t._s(t.$t("interface.myAddr"))+"\n          ")]):t._e(),t.toAddressCheckMark?s("i",{staticClass:"fa fa-check-circle good-button",attrs:{"aria-hidden":"true"}}):t._e()])}),0)]):t._e()])])},a=[],r=n("75fc"),i=(n("20d6"),n("7099"),n("e351"),n("34eb")),o=n.n(i),c=n("8233"),d=n.n(c),u=n("c8e5"),l=n("b643"),f=o()("v5:error"),h={components:{blockie:u["a"]},props:{title:{type:String,default:""},currentAddress:{type:String,default:""},currency:{type:String,default:"ETH"}},data:function(){return{selectedAddress:"",validAddress:!1,dropdownOpen:!1,addresses:[],toAddressCheckMark:!1}},watch:{currentAddress:function(t){-1===this.addresses.findIndex(function(e){return e.address===t})&&(this.addresses=[{address:t,currency:l["a"]}].concat(Object(r["a"])(this.addresses)))},selectedAddress:function(t){this.validateAddress(t)},currency:function(){this.validateAddress(this.selectedAddress)}},methods:{copyToClipboard:function(t){t.select(),document.execCommand("copy")},isToken:function(t){return"undefined"!==typeof l["c"][t]},listedAddressClick:function(t){this.toAddressCheckMark=!0,this.dropdownOpen=!this.dropdownOpen,this.selectedAddress=t},validateAddress:function(t){if(""!==this.selectedAddress){var e=t.address?t.address:t;if(l["c"][this.currency])this.validAddress=d.a.validate(e,"ETH");else try{this.validAddress=d.a.validate(e,this.currency)}catch(n){f(n),this.validAddress=!1}this.validAddress?(this.$emit("toAddress",e),this.$emit("validAddress",!0)):(this.$emit("toAddress",""),this.$emit("validAddress",!1))}}}},p=h,m=(n("f6ad"),n("2877")),g=Object(m["a"])(p,s,a,!1,null,"418c99a3",null),v=g.exports;n.d(e,"a",function(){return v})},ba91:function(t,e,n){t.exports=n.p+"img/magnifier.22778787.svg"},becd:function(t,e,n){"use strict";var s=n("2cd3"),a=n.n(s);a.a},c1be:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-sign"},[n("div",{staticClass:"loading-container",class:t.color},[t._m(0),""!=t.loadingmessage1?n("p",{staticClass:"loading-message1"},[t._v("\n      "+t._s(t.loadingmessage1)+"\n    ")]):t._e(),""!=t.loadingmessage2?n("p",{staticClass:"loading-message2"},[t._v("\n      "+t._s(t.loadingmessage2)+"\n    ")]):t._e()])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],r={name:"LoadingSign",components:{},props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},i=r,o=(n("14fb"),n("2877")),c=Object(o["a"])(i,s,a,!1,null,"48638ccc",null),d=c.exports;n.d(e,"a",function(){return d})},d68c:function(t,e,n){},ea11:function(t,e,n){},f378:function(t,e,n){},f461:function(t,e,n){},f6ad:function(t,e,n){"use strict";var s=n("f378"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-2e42128d.a2120330.js.map