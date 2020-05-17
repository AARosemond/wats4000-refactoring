(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],h=0,p=[];h<i.length;h++)s=i[h],n[s]&&p.push(n[s][0]),n[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"1c14":function(t,e,r){"use strict";var a=r("c829"),n=r.n(a);n.a},2071:function(t,e,r){},"2b5d":function(t,e,r){},"2c88":function(t,e,r){},"353c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("a026"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Weather Service")]),r("router-view")],1)},o=[],s={name:"app"},i=s,u=(r("034f"),r("2877")),c=Object(u["a"])(i,n,o,!1,null,null,null),l=c.exports,h=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("City Search")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.getCities(e)}}},[r("p",[t._v("\n      Enter city name:\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris, FR"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Go")])])]),t.results&&t.results.list.length>0?r("ul",{staticClass:"cities"},t._l(t.results.list,function(e,a){return r("li",{key:a},[r("h2",[t._v(t._s(e.name)+", "+t._s(e.sys.country))]),r("p",[r("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.id}}}},[t._v("View Current Weather")])],1),r("weather-summary",{attrs:{weatherData:t.weatherData.weather}}),r("weather-conditions",{attrs:{conditions:t.weatherData.main}})],1)}),0):t._e(),r("error-list",{attrs:{errorList:t.errors}})],1)},d=[],m=r("bc3a"),f=r.n(m);const v=f.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});v.interceptors.request.use(function(t){return t.params.APPID="f6c081f425905d686971f0b5a280bf98",t.params.units="imperial",t},function(t){return Promise.reject(t)});var _=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.weatherData,function(e){return r("div",{key:e.main},[t._v(t._s(e)+"\n     "),r("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.icon+".png",alt:e.main}}),r("br"),r("b",[t._v(t._s(e.main))])])}),0)},y=[],w={name:"WeatherSummary",data(){return{}},props:{weatherData:{}}},b=w,g=(r("e9b1"),Object(u["a"])(b,_,y,!1,null,"29a3ac72",null)),D=g.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("dl",[t.conditions.temp!=t.conditions.temp_min?r("dt",[t._v("Current Temperature")]):t._e(),t.conditions.temp!=t.conditions.temp_min?r("dd",[t._v(t._s(t.conditions.temp)+"%")]):t._e(),r("dt",[t._v("Humidity")]),r("dd",[t._v(t._s(t.conditions.humidity)+"%")]),r("dt",[t._v("High")]),r("dd",[t._v(t._s(t.conditions.temp_max)+"°F")]),r("dt",[t._v("Low")]),r("dd",[t._v(t._s(t.conditions.temp_min)+"°F")])])])},O=[],j={name:"WeatherConditions",data(){return{}},props:{conditions:{}}},x=j,$=(r("ed65"),Object(u["a"])(x,C,O,!1,null,"703029f8",null)),P=$.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.errorList.length>0?r("div",[r("h2",[t._v("There was an error fetching data.")]),r("ul",{staticClass:"errors"},t._l(t.errorList,function(e){return r("li",{key:e.message},[t._v(t._s(e.message))])}),0)]):t._e()])},L=[],S={name:"ErrorList",data(){return{}},props:{errorList:[]}},q=S,F=(r("6717"),Object(u["a"])(q,k,L,!1,null,"66abc6f8",null)),I=F.exports,M={name:"CitySearch",data(){return{results:null,errors:[],query:""}},methods:{getCities:function(){v.get("find",{params:{q:this.query}}).then(t=>{this.results=t.data}).catch(t=>{this.errors.push(t)})}},components:{"weather-summary":D,"weather-conditions":P,"error-list":I}},W=M,E=(r("5f51"),Object(u["a"])(W,p,d,!1,null,"a9d283e2",null)),A=E.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("\n    Current Weather\n    "),t.weatherData?r("span",[t._v("for "+t._s(t.weatherData.name)+", "+t._s(t.weatherData.sys.country))]):t._e()]),r("p",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),r("router-link",{attrs:{to:{name:"Forecast",params:{cityId:t.$route.params.cityId}}}},[t._v("View 5-Day Forecast")])],1),t.weatherData&&0===t.errors.length?r("div",[r("weather-summary",{attrs:{weatherData:t.weatherData.weather}}),r("weather-conditions",{attrs:{conditions:t.weatherData.main}})],1):r("div",[r("h2",[t._v("Loading...")])]),r("error-list",{attrs:{errorList:t.errors}})],1)},J=[],T={name:"CurrentWeather",data(){return{weatherData:null,errors:[],query:""}},created(){v.get("weather",{params:{id:this.$route.params.cityId}}).then(t=>{this.weatherData=t.data}).catch(t=>{this.errors.push(t)})},components:{"weather-summary":D,"weather-conditions":P,"error-list":I}},N=T,R=(r("93a0"),Object(u["a"])(N,H,J,!1,null,"15089f41",null)),V=R.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("\n    Five Day Hourly Forecast\n    "),t.weatherData?r("span",[t._v("for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()]),r("p",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),r("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.$route.params.cityId}}}},[t._v("\n      Current Weather\n      "),t.weatherData?r("span",[t._v("for "+t._s(t.weatherData.city.name)+", "+t._s(t.weatherData.city.country))]):t._e()])],1),t.weatherData&&0===t.errors.length?r("ul",{staticClass:"forecast"},[r("li",[r("weather-summary",{attrs:{weatherData:t.forecast.weather}}),r("weather-conditions",{attrs:{conditions:t.forecast.main}})],1)]):r("div",[r("h2",[t._v("Loading...")])]),r("error-list",{attrs:{errorList:t.errors}})],1)},U=[],z={name:"Forecast",data(){return{weatherData:null,errors:[],query:""}},created(){v.get("forecast",{params:{id:this.$route.params.cityId}}).then(t=>{this.weatherData=t.data}).catch(t=>{this.errors.push(t)})},filters:{formatDate:function(t){let e=new Date(1e3*t);const r=["January","February","March","April","May","June","July","August","September","October","November","December"];let a=e.getDate(),n=e.getMonth(),o=e.getHours();return 12===o?o="Noon":0===o?o="Midnight":o>12?o=o-12+"PM":o<12&&(o+="AM"),`${r[n]} ${a} @ ${o}`}},components:{"weather-summary":D,"weather-conditions":P,"error-list":I}},B=z,K=(r("1c14"),Object(u["a"])(B,G,U,!1,null,"5602324f",null)),Q=K.exports;a["a"].use(h["a"]);var X=new h["a"]({routes:[{path:"/",name:"CitySearch",component:A},{path:"/:cityId/current",name:"CurrentWeather",component:V},{path:"/:cityId/forecast",name:"Forecast",component:Q}]});a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:X,template:"<App/>",components:{App:l}})},"5f51":function(t,e,r){"use strict";var a=r("a3aa"),n=r.n(a);n.a},"64a9":function(t,e,r){},6717:function(t,e,r){"use strict";var a=r("2071"),n=r.n(a);n.a},"93a0":function(t,e,r){"use strict";var a=r("2b5d"),n=r.n(a);n.a},a3aa:function(t,e,r){},c829:function(t,e,r){},e9b1:function(t,e,r){"use strict";var a=r("2c88"),n=r.n(a);n.a},ed65:function(t,e,r){"use strict";var a=r("353c"),n=r.n(a);n.a}});
//# sourceMappingURL=app.5f0ecc16.js.map