webpackJsonp([1],{"5A34":function(t,e){},"6zaL":function(t,e){},AxFT:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({},i,!1,function(t){s("AxFT")},null,null).exports,c=s("/ocq"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"header"},[s("div",{staticClass:"headerLeft"},[t.goBack?s("p",{on:{click:t.cheakGo}},[t._v("<")]):t._e(),t._v(" "),t.logo?s("p"):t._e()]),t._v(" "),s("div",{staticClass:"headerCenter"},[t.title?s("p",[t._v(t._s(t.title))]):t._e()]),t._v(" "),s("div",{staticClass:"headerRight"},[t.signln?s("p",[s("router-link",{attrs:{to:"/passwordLogin"}},[t._v("\n                登录|注册\n            ")])],1):t._e()])])},staticRenderFns:[]};var r=s("VU/8")({props:["title","goBack","logo","signln"],data:function(){return{show:!1}},methods:{cheakGo:function(){this.$router.go(-1)}}},o,!1,function(t){s("WO5l")},null,null).exports,l=s("mtWM"),u=s.n(l),d={components:{Header:r},data:function(){return{username:"",password:""}},methods:{checkform:function(){var t=this,e='https://tina-record.github.io/foodApp/v1/signIn?name="'+this.username+'"&password="'+this.password+'"';u.a.get(e).then(function(e){return t.checkResult(e)}).catch(function(t){alert("网络无法访问")})},checkResult:function(t){console.log(t.data),200===t.data.statu?!0===t.data.data[0].success?alert("登录成功"):alert("登录失败"):console.log("服务器出错")}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Header",{attrs:{title:"密码登录",goBack:"ture"}}),t._v(" "),s("section",{staticClass:"loginMain"},[s("form",{staticClass:"loginForm"},[s("div",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("div",[s("p",{staticClass:"loginParagraph"},[t._v("温馨提示：未注册过的账号，登录时将自动注册")]),t._v(" "),s("p",{staticClass:"loginParagraph"},[t._v("注册过的用户可凭账号密码登录")]),t._v(" "),s("button",{staticClass:"loginSubmit",on:{click:t.checkform}},[t._v("登录")])])])],1)},staticRenderFns:[]};var h=s("VU/8")(d,p,!1,function(t){s("6zaL")},null,null).exports,f={components:{Header:r},data:function(){return{defaultCity:"",cities:""}},mounted:function(){this.checkCities()},methods:{checkCities:function(){var t=this;u.a.get("https://tina-record.github.io/foodApp/v1/cities").then(function(e){return t.decideCities(e)}).catch(function(t){alert("网络无法访问")})},decideCities:function(t){200===t.data.statu?(this.defaultCity=t.data.data.default.city,this.cities=t.data.data.cities):alert("服务器出错")},clickCity:function(t){this.$router.push({path:"/businesses/"+t})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Header",{attrs:{title:"首页",logo:"true"}}),t._v(" "),s("article",{staticClass:"address-body"},[s("section",{staticClass:"current-city"},[s("h4",{staticClass:"hot-city"},[t._v("当前城市")]),t._v(" "),s("div",{staticClass:"default-city"},[s("p",[t._v(t._s(t.defaultCity))]),t._v(" "),s("p",[t._v(">")])])]),t._v(" "),s("section",{staticClass:"popular-city"},[s("h4",[t._v("热门城市")]),t._v(" "),s("ul",t._l(t.cities,function(e){return s("li",{key:e.city,on:{click:function(s){t.clickCity(e.city)}}},[t._v(t._s(e.city))])}),0)])])],1)},staticRenderFns:[]};var _=s("VU/8")(f,v,!1,function(t){s("5A34")},null,null).exports,m={components:{Header:r},data:function(){return{city:"深圳",classifyShow:"",m_nearByBusinesses:[]}},mounted:function(){this.city=this.$route.params.cityName,this.checkData(),this.GetNearbyBusinesses()},filters:{currencydecimal:function(t){return(t/=1e3).toFixed(1)}},methods:{checkData:function(){var t=this,e='https://tina-record.github.io/foodApp/v1/commodity/classify?city="'+this.city+'"';console.log(e),u.a.get(e).then(function(e){return t.checkResult(e)}).catch(function(t){alert("网络无法访问")})},checkResult:function(t){console.log(t.data),200===t.data.statu?(this.classifyShow=t.data.data,console.log(this.classifyShow)):console.log("服务器出错")},GetNearbyBusinesses:function(){var t=this;u.a.get("https://tina-record.github.io/foodApp/v1/businesses/businessesShow").then(function(e){return t.decideNearbyBusinesses(e)}).catch(function(t){alert("网络无法访问")})},decideNearbyBusinesses:function(t){console.log(t.data),200===t.data.statu?(this.m_nearByBusinesses=t.data.data,console.log(this.m_nearByBusinesses)):alert("服务器出错")}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("Header",{attrs:{title:this.city,goBack:"true",signln:"true"}}),t._v(" "),s("section",{staticClass:"foodTypesContainer"},[s("div",{staticClass:"swiperSlide"},t._l(t.classifyShow,function(e){return s("a",{key:e.imgPath,staticClass:"pictureLink"},[s("figure",{staticClass:"pictureContainer"},[s("img",{staticClass:"picture",attrs:{src:e.imgPath}}),t._v(" "),s("figcaption",{staticClass:"pictureTitle"},[t._v(t._s(e.name))])])])}),0)]),t._v(" "),t._l(t.m_nearByBusinesses,function(e){return s("section",{key:e.name},[s("section",{staticClass:"businessBar"},[s("img",{staticClass:"busLogo",attrs:{src:e.logoPath}}),t._v(" "),s("section",{staticClass:"text"},[s("article",{staticClass:"businessName"},[t._v(t._s(e.name))]),t._v(" "),s("h5",[s("p",[s("span",[t._v("￥"+t._s(e.details.designationPrice)+"起送/配送费约￥"+t._s(e.details.transportFee))])]),t._v(" "),s("p",[s("span",{staticClass:"gray"},[t._v(t._s(t._f("currencydecimal")(e.details.distance))+"公里 /")]),t._v(" "),s("span",{staticClass:"eleColor"},[t._v(t._s(e.details.time))])])])])])])}),t._v(" "),s("footer")],2)},staticRenderFns:[]};var y=s("VU/8")(m,g,!1,function(t){s("QrkY")},null,null).exports;a.a.use(c.a);var C=new c.a({routes:[{path:"/",component:_},{path:"/passwordLogin",component:h},{path:"/address",component:_},{path:"/businesses/:cityName",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:C,components:{App:n},template:"<App/>"})},QrkY:function(t,e){},WO5l:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.99bf791cf75ba685d39e.js.map