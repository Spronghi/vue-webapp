(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],f=0,d=[];f<r.length;f++)n=r[f],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-webapp/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0225":function(t,e,a){},"034f":function(t,e,a){"use strict";var i=a("8a23"),s=a.n(i);s.a},1317:function(t,e,a){},"2ddf":function(t,e,a){},"3cf7":function(t,e,a){},"51bc":function(t,e,a){"use strict";var i=a("9bc9"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("a925"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-content",{on:{"&scroll":function(e){return t.onScroll(e)}}},[a("Home",{staticStyle:{"margin-bottom":"30px"},attrs:{"offset-top":t.offsetTop}}),a("Who",{staticStyle:{"margin-bottom":"50px"}}),a("Gallery",{staticStyle:{"margin-bottom":"50px"}}),a("FindUs",{staticStyle:{"margin-bottom":"50px"}})],1),a("Footer")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"background",attrs:{id:"home",fluid:""}},[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"text-white pa-6 title-text display-4"},[t._v(t._s(t.$t("home.title")))]),a("h3",{staticClass:"text-white headline"},[t._v(t._s(t.$t("home.subtitle")))])])],1)],1)},l=[],c={name:"Home",data:function(){return{}}},u=c,f=(a("cd1b"),a("2877")),d=a("6544"),w=a.n(d),m=a("62ad"),p=a("a523"),v=a("a722"),h=Object(f["a"])(u,r,l,!1,null,"23f3469c",null),g=h.exports;w()(h,{VCol:m["a"],VContainer:p["a"],VLayout:v["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:t.color}},[t.isMobile?a("v-menu",{attrs:{transition:"scroll-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-app-bar-nav-icon",t._g({},i))]}}],null,!1,719886440)},[a("v-list",t._l(t.links,(function(e,i){return a("v-list-item",{key:i,staticStyle:{"min-width":"250px",padding:"15px"},on:{click:function(a){return t.$vuetify.goTo(e.ref)}}},[a("v-icon",{attrs:{large:""}},[t._v(t._s(e.icon))]),a("v-list-item-title",{staticClass:"big-text",staticStyle:{"padding-left":"15px"}},[t._v(t._s(t.$t(e.text)))]),i!==t.links.length?a("v-divider",{key:"divider-"+i}):t._e()],1)})),1)],1):t._e(),a("v-btn",{staticClass:"ma-2",attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo(t.home.ref)}}},[t._v(" "+t._s(t.$t(t.home.text))+" ")]),t.isMobile?t._e():a("div",t._l(t.links,(function(e){return a("v-btn",{key:e.ref,staticClass:"ma-2",attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo(e.ref)}}},[t._v(" "+t._s(t.$t(e.text))+" ")])})),1),a("v-spacer"),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-twitter")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-reddit")])],1)],1)},x=[],y=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},_=y,C={name:"Header",props:["offsetTop"],data:function(){return{drawer:null,home:{ref:"#home",text:"header.title"},links:[{ref:"#who",text:"header.who",icon:"mdi-account-circle"},{ref:"#gallery",text:"header.gallery",icon:"mdi-image-filter"},{ref:"#find-us",text:"header.find-us",icon:"mdi-crosshairs-gps"}]}},computed:{isMobile:_,color:function(){return this.offsetTop<100?"transparent":"white"}},methods:{toggle:function(){this.drawer=!this.drawer}}},j=C,V=(a("b0e8"),a("40dc")),k=a("5bc1"),S=a("8336"),F=a("ce7e"),P=a("132d"),T=a("8860"),O=a("da13"),M=a("5d23"),$=a("e449"),B=a("2fa4"),H=Object(f["a"])(j,b,x,!1,null,"12369379",null),A=H.exports;w()(H,{VAppBar:V["a"],VAppBarNavIcon:k["a"],VBtn:S["a"],VDivider:F["a"],VIcon:P["a"],VList:T["a"],VListItem:O["a"],VListItemTitle:M["a"],VMenu:$["a"],VSpacer:B["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"gallery",fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.images,(function(e,i){return a("v-col",{key:i,class:{"col-2":!t.isMobile,"col-12":t.isMobile}},[a("v-hover",{key:i,scopedSlots:t._u([{key:"default",fn:function(s){var o=s.hover;return[a("v-card",{attrs:{flat:"",tile:"",elevation:o?12:2},on:{click:function(a){return t.showDialog(e,i)}}},[a("v-img",{staticClass:"grey lighten-2",attrs:{height:t.imageHeight(o),src:e.img,"lazy-src":e.img,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[a("v-btn",{staticClass:"font-weight-medium uppercase text-white",attrs:{text:""}},[t._v(" "+t._s(e.title)+" ")])],1),o&&!t.isMobile?a("v-card-text",{attrs:{height:"80"}},[t._v(" Visit ten places on our planet that are undergoing the biggest changes today. ")]):t._e()],1)]}}],null,!0)})],1)})),1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"1100"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[a("v-layout",{staticClass:"background-white",attrs:{"text-center":"",wrap:""}},[a("v-col",{attrs:{"max-width":"900",cols:"12"}},[a("v-img",{attrs:{src:t.dialog.img,"lazy-src":t.dialog.img},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),t.isMobile?a("v-card-text",[t._v(" Visit ten places on our planet that are undergoing the biggest changes today. ")]):t._e()],1)],1)],1)],1)},q=[],E={name:"Gallery",data:function(){return{dialog:{show:!1},images:[{title:"who 1",img:"https://picsum.photos/500/300?image=".concat(10)},{title:"who 2",img:"https://picsum.photos/500/300?image=".concat(15)},{title:"who 3",img:"https://picsum.photos/500/300?image=".concat(20)},{title:"who 4",img:"https://picsum.photos/500/300?image=".concat(25)},{title:"who 5",img:"https://picsum.photos/500/300?image=".concat(30)},{title:"who 6",img:"https://picsum.photos/500/300?image=".concat(35)},{title:"who 7",img:"https://picsum.photos/500/300?image=".concat(40)},{title:"who 8",img:"https://picsum.photos/500/300?image=".concat(45)},{title:"who 9",img:"https://picsum.photos/500/300?image=".concat(50)},{title:"who 10",img:"https://picsum.photos/500/300?image=".concat(55)},{title:"who 11",img:"https://picsum.photos/500/300?image=".concat(60)},{title:"who 12",img:"https://picsum.photos/500/300?image=".concat(65)}]}},methods:{showDialog:function(t,e){this.dialog={show:!0,index:e,img:t.img}},imageHeight:function(t){return t||this.isMobile?200:280}},computed:{isMobile:_}},I=E,W=(a("51bc"),a("b0af")),L=a("99d9"),U=a("169a"),G=a("ce87"),N=a("adda"),z=a("490a"),J=a("0fd9"),R=Object(f["a"])(I,D,q,!1,null,"17f52312",null),Q=R.exports;w()(R,{VBtn:S["a"],VCard:W["a"],VCardText:L["b"],VCol:m["a"],VContainer:p["a"],VDialog:U["a"],VHover:G["a"],VImg:N["a"],VLayout:v["a"],VProgressCircular:z["a"],VRow:J["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-4",attrs:{id:"find-us",flat:"",height:"600px",img:"https://cdn.vuetifyjs.com/images/toolbar/map.jpg"}},[a("v-row",[a("v-col",{staticClass:"text-left col-lg-8 col-md-6",staticStyle:{"padding-bottom":"0"},attrs:{"offset-lg":"1"}},[a("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{color:"transparent",outlined:""}},[a("v-card-text",{staticClass:"headline text-left",staticStyle:{"padding-bottom":"0"}},[a("span",{staticClass:"buy-us"},[t._v("Find")]),a("span",{staticClass:"buy-us font-weight-black"},[t._v(" Us")])])],1)],1),a("v-col",{staticClass:"col-lg-2 col-md-12"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("Via Poporo Pondo")]),a("v-card-subtitle",[t._v("73100 Lecce")])],1)],1)],1)],1)},K=[],X={name:"FindUs"},Z=X,tt=(a("c087"),Object(f["a"])(Z,Y,K,!1,null,"4b7e422e",null)),et=tt.exports;w()(tt,{VCard:W["a"],VCardSubtitle:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:m["a"],VRow:J["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"tmp-primary lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1)],1)},it=[],st={name:"Footer",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"]}}},ot=st,nt=(a("eb78"),a("553a")),rt=Object(f["a"])(ot,at,it,!1,null,"8189976e",null),lt=rt.exports;w()(rt,{VBtn:S["a"],VCard:W["a"],VCardText:L["b"],VDivider:F["a"],VFooter:nt["a"],VIcon:P["a"]});var ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"who",fluid:""}},[i("v-layout",{attrs:{"text-center":"",wrap:""}},[i("v-col",{staticClass:"text-left",staticStyle:{"padding-bottom":"0"},attrs:{cols:"12","offset-sm":"1"}},[i("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{outlined:""}},[i("v-card-text",{staticClass:"headline text-left",staticStyle:{"padding-bottom":"0"}},[i("span",{staticClass:"buy-us"},[t._v("Who we")]),i("span",{staticClass:"buy-us font-weight-black"},[t._v(" Are")])])],1)],1),i("v-col",{staticClass:"col-lg-6 col-md-12",attrs:{"offset-lg":"3"}},[i("v-row",[i("v-card",{staticClass:"d-md-flex no-border",attrs:{outlined:""}},[i("v-card",{staticClass:"d-md-flex no-border",attrs:{outlined:""}},[i("v-card-text",{staticClass:"headline",class:{"text-center":t.isMobile,"text-left":!t.isMobile}},[t._v(" "+t._s(t.who)+" ")])],1)],1)],1)],1),i("v-col",{staticStyle:{"margin-bottom":"30px"},attrs:{cols:"12"}},[i("v-divider")],1),i("v-row",[i("v-col",{staticClass:"text-left",attrs:{cols:"12","offset-lg":"1"}},[i("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{color:"transparent",outlined:""}},[i("v-card-text",{staticClass:"headline text-left"},[i("span",{staticClass:"buy-us"},[t._v("Why")]),i("span",{staticClass:"buy-us font-weight-black"},[t._v(" Buy From Us?")])])],1)],1),i("v-col",{staticClass:"col-lg-6 col-md-8",attrs:{color:"transparent",offset:"1"}},t._l(t.items,(function(e,a){return i("v-row",{key:a},[i("v-col",{staticClass:"text-left",attrs:{cols:"12","offset-md":"1"}},[i("v-icon",{staticClass:"icon-check",attrs:{color:"#8bc34a"}},[t._v("mdi-check-outline")]),i("span",{staticClass:"headline ",domProps:{textContent:t._s(e)}})],1)],1)})),1),t.isMobile?t._e():i("v-col",{attrs:{cols:"col-lg-4"}},[i("v-img",{attrs:{src:a("cba7"),"lazy-src":a("cba7"),"aspect-ratio":"1","max-width":"500","max-height":"1000"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)})],1)],1)],1)],1)},ut=[],ft={name:"Who",data:function(){return{items:["Design, marketing and production decision for developing and supplying your own home collections for private label stores or chain groups.","Short delivery terms.","Attractive minimum order quantities.","Full cycle production lines with 40 years traditions and experience.","All technologies for manufacturing of towels – woven and warp knitted.","Quoting up to 24 hours.","Oeko-tex 100 certificated.","All interior collection from one producer.","100% made in Bulgaria/EU."],who:"Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}},computed:{isMobile:_}},dt=ft,wt=(a("814c"),Object(f["a"])(dt,ct,ut,!1,null,"c490bab2",null)),mt=wt.exports;w()(wt,{VCard:W["a"],VCardText:L["b"],VCol:m["a"],VContainer:p["a"],VDivider:F["a"],VIcon:P["a"],VImg:N["a"],VLayout:v["a"],VProgressCircular:z["a"],VRow:J["a"]});var pt={name:"App",components:{Footer:lt,FindUs:et,Home:g,Header:A,Gallery:Q,Who:mt},data:function(){return{offsetTop:0}},computed:{},methods:{onScroll:function(t){this.offsetTop=t.target.scrollTop}}},vt=pt,ht=(a("034f"),a("7496")),gt=a("a75b"),bt=Object(f["a"])(vt,o,n,!1,null,null,null),xt=bt.exports;w()(bt,{VApp:ht["a"],VContent:gt["a"]});var yt=a("f309");i["a"].use(yt["a"]);var _t=new yt["a"]({}),Ct=a("669f"),jt=a("e312"),Vt={it:Ct,en:jt};i["a"].use(s["a"]);var kt=new s["a"]({locale:"en",messages:Vt,theme:{themes:{light:{primary:"#8bc34a",secondary:"#cddc39",accent:"#00bcd4",error:"#ff5722",warning:"#ffc107",info:"#607d8b",success:"#4caf50"},options:{customProperties:!0}}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:_t,i18n:kt,render:function(t){return t(xt)}}).$mount("#app")},"669f":function(t){t.exports=JSON.parse('{"header":{"title":"Barba Gay","subtitle":"Troppo gay","who":"Chi Siamo"},"home":{"title":"Barba me la Suca","subtitle":"The new style of rich and gay people"},"who":{"title":"Chi Siamo","subtitle":"Gente simpatica","card1":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card2":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card3":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"}}}')},"814c":function(t,e,a){"use strict";var i=a("1317"),s=a.n(i);s.a},"8a23":function(t,e,a){},"9bc9":function(t,e,a){},b0e8:function(t,e,a){"use strict";var i=a("0225"),s=a.n(i);s.a},c087:function(t,e,a){"use strict";var i=a("d534"),s=a.n(i);s.a},cba7:function(t,e,a){t.exports=a.p+"img/who-1.fa138153.png"},cd1b:function(t,e,a){"use strict";var i=a("2ddf"),s=a.n(i);s.a},d534:function(t,e,a){},e312:function(t){t.exports=JSON.parse('{"header":{"title":"Header Title","subtitle":"Header Subtitle","who":"Who","gallery":"Gallery","find-us":"Find Us"},"home":{"title":"Home Title","subtitle":"Home Subtitle"},"who":{"title":"Who Title","subtitle":"Who Subtitle","card1":{"title":"Card1 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card2":{"title":"Card2 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card3":{"title":"Card3 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"}}}')},eb78:function(t,e,a){"use strict";var i=a("3cf7"),s=a.n(i);s.a}});
//# sourceMappingURL=app.6661202f.js.map