(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-e9275796":"6a437340"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-e9275796":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-e9275796":"6a1f52d7"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}]})],1)},a=[],i=(n("7c55"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("login")],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,"label-width":"20%"}},[n("div",{staticClass:"login-title"},[e._v("DISC性格测试")]),n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"验证码"}},[n("el-input",{staticStyle:{width:"40%"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:e.form.gCode},on:{click:e.getCode}},[e._v(e._s(e.form.gCode?e.form.codeCountDown+"s后重新发送":"获取验证码"))])],1),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)},p=[],h=n("5530"),g=n("2f62"),v={name:"login",props:{msg:String},data:function(){return{form:{username:"",password:"",gCode:!1,codeCountDown:0}}},methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["changeLogin"])),{},{onSubmit:function(){var e=this;this.axios({method:"post",url:"Https://character.wdmedu.com:44444/user/cverify",data:{mobile:this.form.username,verifycode:this.form.password}}).then((function(t){t&&(2e4===t.data.code?(e.$message({message:"登录成功",type:"success"}),e.changeLogin({Authorization:"token"}),e.$router.push({path:"/test"})):e.$message.error(t.data.message))}))},getCode:function(){var e=this;this.axios({method:"post",url:"Https://character.wdmedu.com:44444/user/mverify",data:{mobile:this.form.username}}).then((function(t){if(t)if(2e4===t.data.code){e.form.gCode=!0,e.form.codeCountDown=60;var n=window.setInterval((function(){e.form.codeCountDown--,e.form.codeCountDown<=0&&(e.form.gCode=!1,clearInterval(n))}),1e3)}else e.$message.error(t.data.message)}))}})},b=v,y=(n("eab6"),Object(i["a"])(b,m,p,!1,null,"6e1dc9cc",null)),w=y.exports,C={name:"Home",components:{login:w}},S=C,_=Object(i["a"])(S,f,d,!1,null,null,null),O=_.exports;r["default"].use(l["a"]);var j=[{path:"/",name:"Home",component:O,meta:{title:"登录",type:""}},{path:"/test",name:"Test",component:function(){return n.e("chunk-e9275796").then(n.bind(null,"2762"))},meta:{title:"性格测试",type:"login"}}],k=new l["a"]({base:"",routes:j}),x=k;r["default"].use(g["a"]);var A=new g["a"].Store({state:{Authorization:localStorage.getItem("Authorization")?localStorage.getItem("Authorization"):""},mutations:{changeLogin:function(e,t){e.Authorization=t.Authorization,localStorage.setItem("Authorization",t.Authorization)}},actions:{},modules:{}}),E=n("7876"),$=n.n(E),P=n("5c96"),z=n.n(P),T=(n("0fae"),n("5cfb"),n("bc3a")),D=n.n(T),I=n("a7fe"),L=n.n(I),N=n("4328"),H=n.n(N),M=n("aea3"),q=n.n(M);r["default"].use(q.a),r["default"].prototype.$qs=H.a,r["default"].use(L.a,D.a),r["default"].use($.a),r["default"].use(z.a),r["default"].config.productionTip=!1,x.beforeEach((function(e,t,n){if("/"===e.path)n();else{var r=localStorage.getItem("Authorization");null===r||""===r?n("/"):n()}})),new r["default"]({router:x,store:A,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},b8cc:function(e,t,n){},eab6:function(e,t,n){"use strict";var r=n("b8cc"),o=n.n(r);o.a}});
//# sourceMappingURL=app.514c8c8c.js.map