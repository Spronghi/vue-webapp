(function(t){function e(e){for(var i,o,n=e[0],c=e[1],l=e[2],u=0,w=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&w.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(w.length)w.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="vue-webapp/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var f=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),s=a.n(i);s.a},"0518":function(t,e,a){},"0878":function(t,e,a){"use strict";var i=a("456b"),s=a.n(i);s.a},"2ddf":function(t,e,a){},"2fc6":function(t,e,a){"use strict";var i=a("7957"),s=a.n(i);s.a},"3cf7":function(t,e,a){},"456b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("a925"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-content",{on:{"&scroll":function(e){return t.onScroll(e)}}},[a("Home",{staticStyle:{"margin-bottom":"30px"},attrs:{"offset-top":t.offsetTop}}),a("Who",{staticStyle:{"margin-bottom":"50px"}}),a("Gallery",{staticStyle:{"margin-bottom":"50px"}}),a("FindUs",{staticStyle:{"margin-bottom":"50px"}})],1),a("Footer")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"background",attrs:{id:"home",fluid:""}},[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"text-white pa-6 title-text display-4"},[t._v(t._s(t.$t("home.title")))]),a("h3",{staticClass:"text-white headline"},[t._v(t._s(t.$t("home.subtitle")))])])],1)],1)},c=[],l={name:"Home",data:function(){return{}}},f=l,u=(a("cd1b"),a("2877")),w=a("6544"),d=a.n(w),m=a("62ad"),p=a("a523"),v=a("a722"),h=Object(u["a"])(f,n,c,!1,null,"23f3469c",null),b=h.exports;d()(h,{VCol:m["a"],VContainer:p["a"],VLayout:v["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:t.color}},[a("v-app-bar-nav-icon"),t._l(t.links,(function(e){return a("v-btn",{key:e.ref,staticClass:"ma-2",attrs:{text:""},on:{click:function(a){return t.$vuetify.goTo(e.ref)}}},[t._v(" "+t._s(t.$t(e.text))+" ")])})),a("v-spacer"),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-twitter")])],1),a("v-btn",{staticClass:"ma-1",attrs:{href:"",target:"_blank",text:"",icon:""}},[a("v-icon",[t._v("mdi-reddit")])],1)],2)},x=[],y={name:"Header",props:["offsetTop"],data:function(){return{drawer:null,links:[{ref:"#home",text:"header.title"},{ref:"#who",text:"header.who"},{ref:"#gallery",text:"header.gallery"},{ref:"#find-us",text:"header.find-us"}]}},computed:{color:function(){return this.offsetTop<100?"transparent":"white"}},methods:{toggle:function(){this.drawer=!this.drawer}}},C=y,_=a("40dc"),j=a("5bc1"),V=a("8336"),k=a("132d"),S=a("2fa4"),F=Object(u["a"])(C,g,x,!1,null,"55c762b7",null),O=F.exports;d()(F,{VAppBar:_["a"],VAppBarNavIcon:j["a"],VBtn:V["a"],VIcon:k["a"],VSpacer:S["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"gallery",fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12","offset-sm":"0"}},[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.images,(function(e,i){return a("v-col",{key:i,staticClass:"d-flex child-flex",attrs:{cols:"2"}},[a("v-hover",{key:i,scopedSlots:t._u([{key:"default",fn:function(s){var r=s.hover;return[a("v-card",{attrs:{flat:"",tile:"",elevation:r?12:2},on:{click:function(a){return t.showDialog(e,i)}}},[a("v-img",{staticClass:"grey lighten-2",attrs:{height:r?200:280,src:e.img,"lazy-src":e.img,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[a("v-btn",{staticClass:"font-weight-medium uppercase text-white",attrs:{text:""}},[t._v(" "+t._s(e.title)+" ")])],1),r?a("v-card-text",[t._v(" Visit ten places on our planet that are undergoing the biggest changes today. ")]):t._e()],1)]}}],null,!0)})],1)})),1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"1100"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[a("v-layout",{staticClass:"background-white",attrs:{"text-center":"",wrap:""}},[a("v-col",{attrs:{"max-width":"1000",cols:"12"}},[a("v-img",{attrs:{src:t.dialog.img,"lazy-src":t.dialog.img},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)},P=[],$={name:"Gallery",data:function(){return{dialog:{show:!1},images:[{title:"who 1",img:"https://picsum.photos/500/300?image=".concat(10)},{title:"who 2",img:"https://picsum.photos/500/300?image=".concat(15)},{title:"who 3",img:"https://picsum.photos/500/300?image=".concat(20)},{title:"who 4",img:"https://picsum.photos/500/300?image=".concat(25)},{title:"who 5",img:"https://picsum.photos/500/300?image=".concat(30)},{title:"who 6",img:"https://picsum.photos/500/300?image=".concat(35)},{title:"who 7",img:"https://picsum.photos/500/300?image=".concat(40)},{title:"who 8",img:"https://picsum.photos/500/300?image=".concat(45)},{title:"who 9",img:"https://picsum.photos/500/300?image=".concat(50)},{title:"who 10",img:"https://picsum.photos/500/300?image=".concat(55)},{title:"who 11",img:"https://picsum.photos/500/300?image=".concat(60)},{title:"who 12",img:"https://picsum.photos/500/300?image=".concat(65)}]}},methods:{showDialog:function(t,e){this.dialog={show:!0,index:e,img:t.img}}}},B=$,H=(a("2fc6"),a("b0af")),q=a("99d9"),D=a("169a"),A=a("ce87"),E=a("adda"),M=a("490a"),W=a("0fd9"),U=Object(u["a"])(B,T,P,!1,null,"229a43c0",null),G=U.exports;d()(U,{VBtn:V["a"],VCard:H["a"],VCardText:q["b"],VCol:m["a"],VContainer:p["a"],VDialog:D["a"],VHover:A["a"],VImg:E["a"],VLayout:v["a"],VProgressCircular:M["a"],VRow:W["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-4",attrs:{id:"find-us",flat:"",height:"600px",img:"https://cdn.vuetifyjs.com/images/toolbar/map.jpg"}},[a("v-row",[a("v-col",{staticClass:"text-left",staticStyle:{"padding-bottom":"0"},attrs:{cols:"8","offset-sm":"1"}},[a("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{color:"transparent",outlined:""}},[a("v-card-text",{staticClass:"headline text-left",staticStyle:{"padding-bottom":"0"}},[a("span",{staticClass:"buy-us"},[t._v("Find")]),a("span",{staticClass:"buy-us font-weight-black"},[t._v(" Us")])])],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("Via Poporo Pondo")]),a("v-card-subtitle",[t._v("73100 Lecce")])],1)],1)],1)],1)},N=[],z={name:"FindUs"},J=z,L=(a("aaff"),Object(u["a"])(J,I,N,!1,null,"e9d5b0f0",null)),R=L.exports;d()(L,{VCard:H["a"],VCardSubtitle:q["a"],VCardText:q["b"],VCardTitle:q["c"],VCol:m["a"],VRow:W["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"tmp-primary lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Vuetify")])])],1)],1)},Y=[],K={name:"Footer",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-google-plus","mdi-linkedin","mdi-instagram"]}}},X=K,Z=(a("eb78"),a("ce7e")),tt=a("553a"),et=Object(u["a"])(X,Q,Y,!1,null,"8189976e",null),at=et.exports;d()(et,{VBtn:V["a"],VCard:H["a"],VCardText:q["b"],VDivider:Z["a"],VFooter:tt["a"],VIcon:k["a"]});var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"who",fluid:""}},[i("v-layout",{attrs:{"text-center":"",wrap:""}},[i("v-col",{staticClass:"text-left",staticStyle:{"padding-bottom":"0"},attrs:{cols:"12","offset-sm":"1"}},[i("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{outlined:""}},[i("v-card-text",{staticClass:"headline text-left",staticStyle:{"padding-bottom":"0"}},[i("span",{staticClass:"buy-us"},[t._v("Who we")]),i("span",{staticClass:"buy-us font-weight-black"},[t._v(" Are")])])],1)],1),i("v-col",{attrs:{cols:"6","offset-sm":"3"}},[i("v-row",[i("v-card",{staticClass:"d-md-flex no-border",attrs:{outlined:""}},[i("v-card",{staticClass:"d-md-flex no-border",attrs:{outlined:""}},[i("v-card-text",{staticClass:"headline text-left"},[t._v(" "+t._s(t.who)+" ")])],1)],1)],1)],1),i("v-col",{staticStyle:{"margin-bottom":"30px"},attrs:{cols:"12"}},[i("v-divider")],1),i("v-row",[i("v-col",{staticClass:"text-left",attrs:{cols:"12","offset-sm":"1"}},[i("v-card",{staticClass:"d-md-flex text-left no-border",attrs:{outlined:""}},[i("v-card-text",{staticClass:"headline text-left"},[i("span",{staticClass:"buy-us"},[t._v("Why")]),i("span",{staticClass:"buy-us font-weight-black"},[t._v(" Buy From Us?")])])],1)],1),i("v-col",{attrs:{cols:"6","offset-sm":"2"}},t._l(t.items,(function(e,a){return i("v-row",{key:a},[i("v-card",{staticClass:"d-md-flex no-border",attrs:{outlined:""}},[i("v-icon",{attrs:{color:"#8bc34a"}},[t._v("mdi-check-outline")]),i("v-card-text",{staticClass:"headline text-left"},[t._v(" "+t._s(e)+" ")])],1)],1)})),1),i("v-col",{attrs:{cols:"4"}},[i("v-img",{attrs:{src:a("cba7"),"lazy-src":a("cba7"),"aspect-ratio":"1","max-width":"500","max-height":"1000"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)],1)},st=[],rt={name:"Who",data:function(){return{items:["Design, marketing and production decision for developing and supplying your own home collections for private label stores or chain groups.","Short delivery terms.","Attractive minimum order quantities.","Full cycle production lines with 40 years traditions and experience.","All technologies for manufacturing of towels – woven and warp knitted.","Quoting up to 24 hours.","Oeko-tex 100 certificated.","All interior collection from one producer.","100% made in Bulgaria/EU."],who:"Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}}},ot=rt,nt=(a("0878"),Object(u["a"])(ot,it,st,!1,null,"dc1a3b86",null)),ct=nt.exports;d()(nt,{VCard:H["a"],VCardText:q["b"],VCol:m["a"],VContainer:p["a"],VDivider:Z["a"],VIcon:k["a"],VImg:E["a"],VLayout:v["a"],VProgressCircular:M["a"],VRow:W["a"]});var lt={name:"App",components:{Footer:at,FindUs:R,Home:b,Header:O,Gallery:G,Who:ct},data:function(){return{offsetTop:0}},computed:{},methods:{onScroll:function(t){this.offsetTop=t.target.scrollTop}}},ft=lt,ut=(a("034f"),a("7496")),wt=a("a75b"),dt=Object(u["a"])(ft,r,o,!1,null,null,null),mt=dt.exports;d()(dt,{VApp:ut["a"],VContent:wt["a"]});var pt=a("f309");i["a"].use(pt["a"]);var vt=new pt["a"]({}),ht=a("669f"),bt=a("e312"),gt={it:ht,en:bt};i["a"].use(s["a"]);var xt=new s["a"]({locale:"en",messages:gt,theme:{themes:{light:{primary:"#8bc34a",secondary:"#cddc39",accent:"#00bcd4",error:"#ff5722",warning:"#ffc107",info:"#607d8b",success:"#4caf50"},options:{customProperties:!0}}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:vt,i18n:xt,render:function(t){return t(mt)}}).$mount("#app")},"669f":function(t){t.exports=JSON.parse('{"header":{"title":"Barba Gay","subtitle":"Troppo gay","who":"Chi Siamo"},"home":{"title":"Barba me la Suca","subtitle":"The new style of rich and gay people"},"who":{"title":"Chi Siamo","subtitle":"Gente simpatica","card1":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card2":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card3":{"title":"Barba è particolare","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"}}}')},7957:function(t,e,a){},"8a23":function(t,e,a){},aaff:function(t,e,a){"use strict";var i=a("0518"),s=a.n(i);s.a},cba7:function(t,e,a){t.exports=a.p+"img/who-1.fa138153.png"},cd1b:function(t,e,a){"use strict";var i=a("2ddf"),s=a.n(i);s.a},e312:function(t){t.exports=JSON.parse('{"header":{"title":"Header Title","subtitle":"Header Subtitle","who":"Who","gallery":"Gallery","find-us":"Find Us"},"home":{"title":"Home Title","subtitle":"Home Subtitle"},"who":{"title":"Who Title","subtitle":"Who Subtitle","card1":{"title":"Card1 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card2":{"title":"Card2 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"},"card3":{"title":"Card3 Title","content":"Peofjwe fijwe fowie jfwenfwefh eqw. Fwef jfew wemndsv ew wfbwef bwefiu we fwen fe wflm"}}}')},eb78:function(t,e,a){"use strict";var i=a("3cf7"),s=a.n(i);s.a}});
//# sourceMappingURL=app.95fb68c2.js.map