webpackJsonp([1],{"/yRs":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=(a=i("8ebl")).default||a,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var l=i("VU/8")(s,n,!1,function(t){i("CjMs")},null,null);e.default=l.exports},"0ZGp":function(t,e,i){t.exports=i.p+"static/img/micon.5e93fda.jpeg"},"4lFr":function(t,e){},"5ZbH":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=(a=i("hOwk")).default||a,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var l=i("VU/8")(s,n,!1,function(t){i("dtWn")},null,null);e.default=l.exports},"5cLx":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=(a=i("WgA/")).default||a,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},l=i("VU/8")(s,n,!1,null,null,null);e.default=l.exports},"A+o4":function(t,e){},CjMs:function(t,e){},FzJz:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={name:"App",data:function(){return{homeMessage:"Home"}},methods:{doSmoothScroll:function(){this.$SmoothScroll(document.querySelector(".top"),400,null,null,"y")},onMouseover:function(){this.homeMessage="profile"},onMouseleave:function(){this.homeMessage="Home"}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"flexcontainer"},[i("div",{staticClass:"flexitem item1",on:{mouseover:t.onMouseover,mouseleave:t.onMouseleave}},[i("router-link",{staticClass:"btn-circle-fishy",attrs:{to:"/",title:"プロフィール"}},[t._v(t._s(t.homeMessage))])],1),t._v(" "),i("div",{staticClass:"flexitem item2"},[i("router-link",{staticClass:"btn-circle-fishy",attrs:{to:"/skill",title:"勉強中"}},[t._v("Skill")])],1),t._v(" "),i("div",{staticClass:"flexitem item3"},[i("router-link",{staticClass:"btn-circle-fishy",attrs:{to:"/books",title:"こんな本読んでます"}},[t._v("Books")])],1)]),t._v(" "),i("main",[i("transition",{attrs:{name:"view"}},[i("router-view")],1)],1),t._v(" "),i("footer",[i("ul",[i("li",[i("router-link",{staticClass:"btn-circle-fishy-min",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),i("li",[i("router-link",{staticClass:"btn-circle-fishy-min",attrs:{to:"/skill"}},[t._v("Skill")])],1),t._v(" "),i("li",[i("router-link",{staticClass:"btn-circle-fishy-min",attrs:{to:"/books"}},[t._v("Books")])],1),t._v(" "),i("li",[i("a",{staticClass:"btn-circle-fishy-min",attrs:{href:"https://www.facebook.com/profile.php?id=100008842479976",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),i("li",[i("a",{staticClass:"btn-circle-fishy-min",attrs:{href:"https://twitter.com/hhvlNH1DpyMdte2",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),i("li",[i("a",{staticClass:"btn-circle-fishy-min",attrs:{href:"#"},on:{click:function(e){return t.doSmoothScroll()}}},[i("font-awesome-icon",{attrs:{icon:["fas","arrow-alt-circle-up"]}})],1)])])])])},staticRenderFns:[]};var l=i("VU/8")(s,n,!1,function(t){i("A+o4")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{attrs:{id:"flex"}},[t._m(0),t._v(" "),i("div",{staticClass:"profile-detail"},[i("div",{staticClass:"ribbon"},[t._v("\n        Naruhide Ueda\n      ")]),t._v(" "),i("div",{staticClass:"ribbon"},[t._v("\n        H6/05/18 age:25\n      ")]),t._v(" "),i("div",{staticClass:"ribbon"},[t._v("\n        一児のパパ\n      ")]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"ribbon"},[i("p",[t._v("奈良県大和郡山市")]),t._v(" "),i("div",{staticClass:"gmap"},[i("GmapMap",{staticStyle:{width:"100%",height:"300px"},attrs:{center:{lat:34.621518,lng:135.778167},zoom:12,"map-type-id":"terrain"}},[t._v('\n            :clickable="true"\n            :draggable="true"\n            @click="center=m.position"\n          />\n          ')])],1)])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-image"},[e("img",{attrs:{src:i("ZeUW"),alt:"profile-image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ribbon"},[e("p",[this._v("テニスが一番得意")]),this._v(" "),e("p",[this._v("小、中は野球少年")]),this._v(" "),e("p",[this._v("ゴルフは下手")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"rails"},[a("a",{attrs:{href:"https://my-google-teacher.herokuapp.com",target:"_blank"}},[t._v("Rails application (my-google-teacher)")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/naruhide/my-google-teacher.git",target:"_blank"}},[t._v("GitHub")]),t._v(" "),a("p",[t._v("Ruby on Rails で初めてWebアプリケーションを作りました。")]),t._v(" "),a("p",[t._v("Google検索ワードのおすすめ共有サービスです。")]),t._v(" "),a("p",[t._v("DBにMySQL,テストにはRSpecを使用しています。")])]),t._v(" "),a("div",{staticClass:"c"},[a("img",{attrs:{src:i("0ZGp"),alt:"自作OS制作中"}}),t._v(" "),a("p",[t._v("H8-3069マイコン上で動作するOSを一から制作中です。")]),t._v(" "),a("p",[t._v("PC上でクロスコンパイル開発を行っています。")])])])}]};var c=i("VU/8")({name:"Home",data:function(){return{}}},o,!1,function(t){i("4lFr")},"data-v-1d1b524e",null).exports;function u(t,e,i){var a=t*v.r/100,s=2*Math.PI/i*e-Math.PI/2;return{x:a*Math.cos(s)+v.cx,y:a*Math.sin(s)+v.cy}}var v={cx:200,cy:200,r:160},d=[{label:"Rails",value:90},{label:"RSpec",value:50},{label:"JavaScript",value:70},{label:"Vue.js",value:90},{label:"Node.js",value:60},{label:"jQuery",value:70},{label:"C言語",value:40},{label:"firebase",value:60},{label:"Git",value:80},{label:"MySQL",value:60}],p=[{label:"EC2",value:90},{label:"RDS",value:60},{label:"VPC",value:77},{label:"Route53",value:50},{label:"IAM",value:80},{label:"S3",value:50}],h={name:"Skill",data:function(){return{circle:v,stats:d,aws:p}},computed:{points:function(){var t=this.stats,e=t.length;return t.map(function(t,i){var a=u(t.value,i,e);return a.x+","+a.y}).join(" ")},point:function(){var t=this.stats,e=t.length,i=[];return t.map(function(t,a){var s=u(t.value+10,a,e);s.label=t.label,i.push(s)}),i},directions:function(){var t=this.aws,e=t.length;return t.map(function(t,i){var a=u(t.value,i,e);return a.x+","+a.y}).join(" ")},direction:function(){var t=this.aws,e=t.length,i=[];return t.map(function(t,a){var s=u(t.value+10,a,e);s.label=t.label,i.push(s)}),i}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill"},[i("div",[i("svg",{attrs:{width:"400",height:"400"}},[i("g",[i("polygon",{attrs:{points:t.points}}),t._v(" "),i("circle",{attrs:{cx:t.circle.cx,cy:t.circle.cy,r:t.circle.r}}),t._v(" "),t._l(t.point,function(e){return i("text",{attrs:{x:e.x,y:e.y}},[t._v("\n              "+t._s(e.label)+"\n        ")])})],2)])]),t._v(" "),i("div",[i("svg",{attrs:{width:"400",height:"400"}},[i("g",[i("polygon",{attrs:{points:t.directions}}),t._v(" "),i("circle",{attrs:{cx:t.circle.cx,cy:t.circle.cy,r:t.circle.r}}),t._v(" "),t._l(t.direction,function(e){return i("text",{attrs:{x:e.x,y:e.y}},[t._v("\n              "+t._s(e.label)+"\n        ")])})],2)])])])},staticRenderFns:[]};var m=i("VU/8")(h,f,!1,function(t){i("FzJz")},null,null).exports,_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"books"},[i("div",{staticClass:"flexbooks"},t._l(t.lists,function(e,a){return i("div",{key:e.id,staticClass:"bookitem",class:["list-"+a]},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.pulished))])])}),0)])},staticRenderFns:[]};var b=i("VU/8")({name:"Books",data:function(){return{lists:[{id:1,name:"パーフェクトJavaScript",pulished:"技術評論社"},{id:2,name:"JavaScriptコードレシピ集",pulished:"技術評論社"},{id:3,name:"基礎から学ぶVue.js",pulished:"C&R研究所"},{id:4,name:"基礎Ruby on Rails",pulished:"インプレス社"},{id:5,name:"パーフェクトRuby on Rails",pulished:"技術評論社"},{id:6,name:"アジャイル時代のオブジェクト脳の作り方",pulished:"翔泳社"},{id:7,name:"HTML&css3デザインきちんと入門",pulished:"SBクリエイティブ社"},{id:8,name:"SQLの絵本",pulished:"翔泳社"},{id:9,name:"リーダブルコード",pulished:"オライリージャパン"},{id:10,name:"ネットワークはなぜつながるのか",pulished:"日経BP社"},{id:11,name:"プログラムはなぜ動くのか",pulished:"日経BP社"},{id:12,name:"コンピュータはなぜ動くのか",pulished:"日経BP社"},{id:13,name:"オブジェクト指向でなぜつくるのか",pulished:"日経BP社"},{id:14,name:"Windowsはなぜ動くのか",pulished:"日経BP社"},{id:15,name:"Webを支える技術",pulished:"技術評論社"},{id:16,name:"若手ITエンジニア最強の指南書",pulished:"日経BP社"},{id:17,name:"アルゴリズム図鑑",pulished:"翔泳社"},{id:18,name:"達人プログラマー",pulished:"オーム社"},{id:19,name:"Amazon Web Services ネットワーク入門",pulished:"インプレス社"},{id:20,name:"Amazon Web Services 実践入門",pulished:"技術評論社"},{id:21,name:"サーバ/インフラを支える技術",pulished:"技術評論社"}]}}},_,!1,function(t){i("UMcy")},null,null).exports;a.a.use(r.a);var y=new r.a({routes:[{path:"/",name:"Home",component:c},{path:"/skill",name:"Skill",component:m},{path:"/books",name:"Books",component:b}]}),g=i("C/JF"),C=i("fhbW"),k=i("DfMW"),x=i("1e6/"),S=i("KLw7"),M=i.n(S),w=i("sA6N");g.c.add(C.a,k.b,k.a,C.b),a.a.component("font-awesome-icon",x.a),a.a.use(M.a),a.a.use(w,{load:{key:"AIzaSyDxPYNHH02iz3zvOOrplci-lT0vpSk_iZY",libraries:"places"}}),a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:l},template:"<App/>"})},T5eZ:function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=a},UMcy:function(t,e){},YI6p:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("jIen"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);var l=i("T5eZ"),r=i("VU/8")(s.a,l.a,!1,null,null,null);e.default=r.exports},ZeUW:function(t,e,i){t.exports=i.p+"static/img/marrige.3010ab1.jpeg"},dtWn:function(t,e){},preG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=(a=i("hQTS")).default||a,n={render:function(){var t=this.$createElement;return(this._self._c||t)("input",this._g(this._b({ref:"input"},"input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},l=i("VU/8")(s,n,!1,null,null,null);e.default=l.exports}},["NHnr"]);
//# sourceMappingURL=app.265c6ae4bf1c91fc689d.js.map