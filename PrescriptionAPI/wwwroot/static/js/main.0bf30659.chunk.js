(this["webpackJsonpvoice-prescription"]=this["webpackJsonpvoice-prescription"]||[]).push([[0],{186:function(e,t,n){e.exports=n(371)},191:function(e,t,n){},192:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(191),n(192),n(48)),i=n(58),s=n(63),u=n(62),m=n(26),p=n(41),h=n(20),f=n(384),d=n(385),E=n(386),g=n(388),b=n(183),v=n(389),k=n(126),S=n(392),O=n(395),j=n(396),y=n(397),w=(n(88),n(76),n(393)),I=n(394),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onEnd,n=void 0===t?function(){}:t,r=e.onResult,c=void 0===r?function(){}:r,o=e.onError,l=void 0===o?function(){}:o,i=Object(a.useRef)(null),s=Object(a.useState)(!1),u=Object(m.a)(s,2),p=u[0],h=u[1],f=Object(a.useState)(!1),d=Object(m.a)(f,2),E=d[0],g=d[1],b=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");c(t)},v=function(e){"not-allowed"===e.error&&(i.current.onend=function(){},h(!1)),l(e)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!p&&E){var t=e.lang,n=void 0===t?"":t,a=e.interimResults,r=void 0===a||a,c=e.continuous,o=void 0!==c&&c,l=e.maxAlternatives,s=void 0===l?1:l,u=e.grammars;h(!0),i.current.lang=n,i.current.interimResults=r,i.current.onresult=b,i.current.onerror=v,i.current.continuous=o,i.current.maxAlternatives=s,u&&(i.current.grammars=u),i.current.onend=function(){return i.current.start()},i.current.start()}},S=function(){p&&E&&(i.current.onresult=function(){},i.current.onend=function(){},i.current.onerror=function(){},h(!1),i.current.stop(),n())};return Object(a.useEffect)((function(){"undefined"!==typeof window&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.SpeechRecognition&&(g(!0),i.current=new window.SpeechRecognition))}),[]),{listen:k,listening:p,stop:S,supported:E}},x=function(e){var t=e.changeHandler,n=e.labelName,c=Object(a.useState)("en-US"),o=Object(m.a)(c,2),l=o[0],i=(o[1],Object(a.useState)("")),s=Object(m.a)(i,2),u=s[0],p=s[1],h=Object(a.useState)(!1),f=Object(m.a)(h,2),d=(f[0],f[1]),E=N({onResult:function(e){p(e)},onEnd:function(){t(u)},onError:function(e){"not-allowed"===e.error&&d(!0)}}),g=E.listen,b=E.listening,v=E.stop,k=(E.supported,b?v:function(){console.log("Pressed!"),d(!1),g({lang:l})}),O=r.a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),j=Object(m.a)(O,2);j[0],j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{type:"text",id:"transcript",value:u,placeholder:n,onChange:function(e){t(e.target.value),p(e.target.value)},suffix:b?r.a.createElement(w.a,{style:{fontSize:16,color:"#1890ff"},onClick:k}):r.a.createElement(I.a,{style:{fontSize:16,color:"black"},onClick:k})}))},A=n(387),C=n(92),R=n.n(C),H=Object(A.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),T=function(){H();var e=Object(a.useState)("no name"),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("no age"),l=Object(m.a)(o,2),i=l[0],s=l[1],u=Object(a.useState)("no symptoms"),p=Object(m.a)(u,2),h=p[0],f=p[1],d=Object(a.useState)("no diagnosis"),E=Object(m.a)(d,2),g=E[0],w=E[1],I=Object(a.useState)("no remarks"),N=Object(m.a)(I,2),A=N[0],C=N[1],T=Object(a.useState)(!1),_=Object(m.a)(T,2),P=_[0],M=_[1],z=Object(a.useState)("no medicines"),D=Object(m.a)(z,2),L=D[0],B=D[1],F=Object(a.useState)("coolestcucumber123@gmail.com"),W=Object(m.a)(F,2),J=(W[0],W[1]),G=Object(a.useState)(null);Object(b.a)(G);function U(){P||M(!0),R()({method:"POST",url:"/generate/pdf",responseType:"blob",withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*"},crossdomain:!0,data:{Name:n+" ",Age:i+" ",Symptoms:h+" ",Diagnosis:g+" ",Medication:L+" ",Remarks:A+" "}}).then((function(e){var t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n)})).catch((function(e){console.log(e),console.log("result = "+typeof e)}))}return r.a.createElement(v.a,{name:"nest-messages",onFinish:U},r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){c(e)}(e)},labelName:"Name"})),r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){s(e)}(e)},labelName:"Age"})),r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){f(e)}(e)},labelName:"Symptoms"})),r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){w(e)}(e)},labelName:"Diagnosis"})),r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){B(e)}(e)},labelName:"Medication"})),r.a.createElement(v.a.Item,null,r.a.createElement(x,{changeHandler:function(e){return function(e){C(e)}(e)},labelName:"Remarks"})),r.a.createElement("center",null,r.a.createElement(k.a,{onClick:U,shape:"round",type:"primary",style:{minWidth:"30%"},icon:r.a.createElement(O.a,null),size:"large"},"Generate PDF"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v.a.Item,null,r.a.createElement(S.a,{onChange:function(e){J(e)},placeholder:"useEmail",prefix:r.a.createElement(j.a,null)})),r.a.createElement("center",null,r.a.createElement(k.a,{onClick:function(){R()({method:"POST",url:"/generate/email",data:{Name:n+" ",Age:i+" ",Symptoms:h+" ",Diagnosis:g+" ",Medication:L+" ",Remarks:A+" "}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e),console.log("result = "+typeof e)}))},shape:"round",type:"primary",style:{minWidth:"30%"},icon:r.a.createElement(y.a,null),size:"large"},"Send Email")))},_=g.a.Title,P=(g.a.Text,f.a.Header,f.a.Content);f.a.Footer,f.a.Sider;var M=function(){return r.a.createElement(P,{style:{margin:"20px 20px 20px 20px"}},r.a.createElement(d.a,{gutter:16,sm:{span:18,offset:3},md:{span:18,offset:3}},r.a.createElement(E.a,{span:8,offset:8},r.a.createElement("center",null,r.a.createElement(_,null,"Generate Prescriptions"),r.a.createElement("br",null)))),r.a.createElement(d.a,{gutter:16,sm:{span:18,offset:4},md:{span:18,offset:3}},r.a.createElement(E.a,{md:{span:24},lg:{span:8,offset:4}},r.a.createElement("center",null,r.a.createElement(_,{level:4},"Fill the form to send pdfs directly to your patients")),r.a.createElement(T,null)),r.a.createElement(E.a,{md:{span:18,offset:4},lg:{span:8,offset:2}},r.a.createElement("center",null,r.a.createElement(_,{level:4},"Your previous prescriptions")))))};var z=function(){return r.a.createElement("h1",null,"About")};var D=function(){return r.a.createElement("h1",null,"Home")},L=n(390),B=n(391),F=n(398),W=n(399),J=n(400),G=n(401),U=n(402),K=n(403);var Q=function(){return r.a.createElement("h1",null,"Login")};var V=function(){return r.a.createElement("h1",null,"Register")},Y=n(177),Z=n.n(Y)()({basename:"/voice-prescription"}),$=(L.a.SubMenu,function(){localStorage.access_token=null,localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),Z.replace("/home")}),q=function(){var e=Object(a.useState)("mail"),t=Object(m.a)(e,2),n=t[0],c=t[1];return r.a.createElement(L.a,{onClick:function(e){c(e.key)},selectedKeys:n,mode:"horizontal",className:"rightMenu"},r.a.createElement(L.a.Item,{key:"Home",icon:r.a.createElement(F.a,null)},r.a.createElement(p.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement(L.a.Item,{key:"Logout",icon:r.a.createElement(W.a,null),onClick:$},"Logout"),r.a.createElement(L.a.Item,{key:"Prescription",icon:r.a.createElement(O.a,null)},r.a.createElement(p.b,{to:"/prescription",className:"nav-link"},"Prescription")),r.a.createElement(L.a.Item,{key:"Register",icon:r.a.createElement(J.a,null)},r.a.createElement(p.b,{to:"/register",className:"nav-link"},"Register")),r.a.createElement(L.a.Item,{key:"About us",icon:r.a.createElement(G.a,null)},r.a.createElement(p.b,{to:"/about",className:"nav-link"},"About")),r.a.createElement(L.a.Item,{key:"Github",icon:r.a.createElement(U.a,null)},r.a.createElement("a",{href:"https://github.com/saipurnimag/didactic-happiness"},"Github")))},X=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={current:"mail",visible:!1},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("nav",{className:"menuBar"},r.a.createElement("div",{className:"logo",style:{sm:18,md:8,lg:8}},r.a.createElement("a",{href:""},"VoicePrescription")),r.a.createElement("div",{className:"menuCon"},r.a.createElement("div",{className:"rightMenu"},r.a.createElement(q,null)),r.a.createElement(k.a,{className:"barsMenu",type:"primary",onClick:this.showDrawer},r.a.createElement("span",{className:"barsBtn"})),r.a.createElement(B.a,{title:"Menu",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement(L.a,{mode:"vertical"},r.a.createElement(L.a.Item,{key:"Login",icon:r.a.createElement(K.a,null),title:"Login"},r.a.createElement(p.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement(L.a.Item,{key:"Prescription",icon:r.a.createElement(O.a,null),title:"Prescription"},r.a.createElement(p.b,{to:"/prescription",className:"nav-link"},"Prescription")))))),r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{path:"/prescription",component:M}),r.a.createElement(h.a,{path:"/about",component:z}),r.a.createElement(h.a,{path:"/login",component:Q}),r.a.createElement(h.a,{path:"/register",component:V}))))}}]),n}(a.Component);var ee=function(){return r.a.createElement(p.a,null,r.a.createElement(X,null))},te=(n(364),n(368),n(178)),ne=n.n(te),ae=(a.Component,function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).login=function(){e.props.auth.login()},e.logout=function(){e.props.auth.logout()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return r.a.createElement("div",null,e()&&r.a.createElement("div",{className:"container column"},r.a.createElement(ee,null)),!e()&&r.a.createElement("div",{className:"container column",style:"width:800px; margin:0 auto;"},this.login()))}}]),n}(a.Component)),re=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Loading..."))},ce=n(179),oe=new function e(){var t=this;Object(l.a)(this,e),this.auth0=new ce.a.WebAuth({domain:"dev-azjag0p7.us.auth0.com",clientID:"5i6Wmd7BMAMLz8QFST9uKfH8pJzB0HyZ",redirectUri:"https://appbaseio-apps.github.io/reactivesearch-auth0-example/callback",audience:"https://dev-azjag0p7.us.auth0.com/userinfo",responseType:"token id_token",scope:"openid"}),this.login=function(){t.auth0.authorize()},this.handleAuthentication=function(){t.auth0.parseHash((function(e,n){n&&n.accessToken&&n.idToken?(t.setSession(n),Z.replace("/home")):e&&(Z.replace("/home"),console.log(e))}))},this.setSession=function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),Z.replace("/home")},this.logout=function(){localStorage.accessToken=null,localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),Z.replace("/home")},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}},le=function(){return r.a.createElement(h.b,{history:Z,component:ae},r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(ae,Object.assign({auth:oe},e))}}),r.a.createElement(h.a,{path:"/home",render:function(e){return r.a.createElement(ae,Object.assign({auth:oe},e))}}),r.a.createElement(h.a,{path:"/callback",render:function(e){return/access_token|id_token|error/.test(e.location.hash)&&oe.handleAuthentication(),r.a.createElement(re,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.0bf30659.chunk.js.map