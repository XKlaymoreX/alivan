(this.webpackJsonpalivan=this.webpackJsonpalivan||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/calendar.845d1fa2.svg"},141:function(e,t,a){e.exports=a.p+"static/media/map.52a1e297.svg"},142:function(e,t,a){e.exports=a.p+"static/media/restaurant.517fb5a8.svg"},144:function(e,t,a){e.exports=a.p+"static/media/smallCompressed.91fbfac6.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/largeCompressed.1a4d0179.jpg"},148:function(e,t,a){e.exports=a(296)},153:function(e,t,a){},154:function(e,t,a){},180:function(e,t){},182:function(e,t){},193:function(e,t){},195:function(e,t){},222:function(e,t){},224:function(e,t){},225:function(e,t){},231:function(e,t){},233:function(e,t){},251:function(e,t){},253:function(e,t){},265:function(e,t){},268:function(e,t){},294:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(138),i=a.n(c),o=(a(153),a(154),a(6)),l=a.n(o),s=a(11),m=a(4),u=a(12),d=a.n(u),f=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=r.a.useState(0),o=Object(m.a)(i,2),u=o[0],f=o[1],p=r.a.useState(""),g=Object(m.a)(p,2),v=g[0],E=g[1],x=r.a.useState(!1),b=Object(m.a)(x,2),h=b[0],N=b[1],y=r.a.useState({message:"",success:!1}),w=Object(m.a)(y,2),j=w[0],S=w[1],k=Object(n.useRef)(null),O=Object(n.useRef)(null),C=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,n=!1,N(!0),r=document.getElementById("nome"),c=document.getElementById("numero"),0===a.length||0===u?(0===a.length&&(r.className=r.className+" border-danger redPlaceHolder"),0===u&&(c.className=c.className+" border-danger",c.style.color="red"),E("I campi non possono essere vuoti!"),N(!1)):(a.length<2||a.length>20?(t=!1,E("Il Campo 'Nome Famiglia' deve contenere tra i 2 e i 20 caratteri!"),r.className=r.className+" border-danger redPlaceHolder",N(!1)):t=!0,u<1||u>10||isNaN(u)?(n=!1,E("Inserire un numero di invitati Valido!(Minimo: 1, Massimo: 10)"),c.value="",c.className=c.className+" border-danger",c.style.color="red",N(!1)):n=!0),!t||!n){e.next=18;break}return i={familyName:a,presentsNumber:u},e.prev=8,e.next=11,d.a.post("/api/v1/inviti",i).then((function(e){N(!1),S({message:"Spedizione dell'invito Riuscita! :)",success:!0})})).catch((function(e){N(!1),S({message:"".concat(e.response.data),success:!1})}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log(e.t0);case 16:e.next=19;break;case 18:N(!1);case 19:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"formSection"},r.a.createElement("div",{className:"myForm shadow-lg"},r.a.createElement("div",{className:"formQuestion"},r.a.createElement("span",{className:" formMargin"},"Sarete dei nostri?"),r.a.createElement("small",{className:" formMargin"},"Non dovete fare altro che compilare il form")),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"nome"},"Nome Famiglia"),r.a.createElement("input",{type:"Text",onKeyDown:function(e){" "===e.key&&0==a.length&&e.preventDefault()},id:"nome",ref:k,onInput:function(e){c(e.currentTarget.value),e.currentTarget.className="myTextBox",E(""),S({message:"",success:!1})},name:"nome",className:"myTextBox"})),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"numero"},"Numero di Presenti"),r.a.createElement("input",{type:"Number",id:"numero",ref:O,onInput:function(e){f(parseInt(e.currentTarget.value)),e.currentTarget.className="myTextBox",e.currentTarget.style.color="#DAA520",E(""),S({message:"",success:!1})},name:"numero",min:"1",max:"10",defaultValue:"0",className:"myTextBox"})),r.a.createElement("small",{className:"text-danger"},v),r.a.createElement("div",{className:"formRowButton"},h?r.a.createElement("span",{style:{fontSize:"20px",fontFamily:"Poppins",color:"#DAA520",marginBottom:"20px"}},"Uhmmm.. controllo se c'\xe8 spazio"):r.a.createElement(r.a.Fragment,null,j.success?r.a.createElement("span",{className:"text-success",style:{margin:"20px 0 20px 0",fontWeight:"bold"}},j.message):r.a.createElement("span",{className:"text-danger",style:{margin:"20px 0 20px 0",fontWeight:"bold"}},j.message)),r.a.createElement("input",{type:"submit",value:"Partecipa!",onClick:function(){return C()},className:"goButton"}))))},p=a(139),g=a.n(p),v=function(e){var t=r.a.useState(!0),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){window.innerWidth<992?c(!1):c(!0)})),window.addEventListener("load",(function(){window.innerWidth<992?c(!1):c(!0)}))}),[]),r.a.createElement("div",{className:g()("myCard","rounded",{"shadow-lg":n})},r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"myQuestion"},e.questionMark),r.a.createElement("div",{className:"myImage"},r.a.createElement("img",{src:e.svg,alt:""})),r.a.createElement("div",{className:"myInfo"},e.info),r.a.createElement("div",{className:"myDetails"},r.a.createElement("a",{href:e.href},e.details))))},E=a(140),x=a.n(E),b=a(141),h=a.n(b),N=a(142),y=a.n(N),w=function(){return r.a.createElement("div",{className:"infoSection",id:"infosection"},r.a.createElement("div",{className:"infoIntroduction shadow-sm d-flex justify-content-center align-items-center",style:{fontFamily:"Poppins"},id:"infoAnchor"},r.a.createElement("span",null,"Informazioni")),r.a.createElement("div",{className:"infoGrid "},r.a.createElement(v,{svg:x.a,questionMark:"Quando?",info:"1 Luglio 2021-11:30am",details:"Salva Evento",href:"https://calendar.google.com/calendar/r/eventedit?text=Matrimonio+Alice+Ivan&dates=20210710T100000+0200/20210710T103000+0200&details=Matrimonio&location=Localit\xe0+S.+Anna,+98,+12065+Monforte+d'Alba+CN"}),r.a.createElement(v,{svg:h.a,questionMark:"Dove?",info:"Monforte d'Alba",details:"Vai alla Mappa",href:"https://goo.gl/maps/5yWbVswnEs46aqeA9"}),r.a.createElement(v,{svg:y.a,questionMark:"Ristorante?",info:"Ristorante 'La Torricella'",details:"Vai al Sito",href:"http://www.latorricella.eu/it/"})))},j=function(){return r.a.createElement("div",{className:"myContent d-flex flex-column ",style:{zIndex:1,background:"white"}},r.a.createElement(w,null),r.a.createElement(f,null),r.a.createElement("footer",null,r.a.createElement("span",null,"Website developed with \u2764 by Cristian Hoza.")))},S=(a(50),a(34)),k=function(e){var t=e.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"textWrapper"},r.a.createElement("div",{className:"textContainer"},r.a.createElement("span",{className:"bigText"},'Alice ha detto : "Si"!'),r.a.createElement("br",null),r.a.createElement("span",{className:"smallText"},"Questo \xe8 il tuo invito al nostro matrimonio"),r.a.createElement("button",{onClick:function(){return function(){var e=S.a.timeline();e.to(".textWrapper",{opacity:0,duration:.2,ease:"power1"}),e.to(".img",{filter:"brightness(100%) contrast(80%) saturate(100%)",duration:.5},.5).then((function(){window.location.assign("/#infosection")})).then((function(){e.to(".textWrapper",{opacity:100,duration:.2,ease:"power1"},2),e.to(".img",{filter:"brightness(100%) contrast(30%) saturate(150%)",duration:.5},2)}))}()}},"Partecipa \ud83e\udd70"))),r.a.createElement("div",{className:"imgSectionWrapper",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"800px"}},r.a.createElement("img",{src:t,loading:"lazy",className:"img",style:{userSelect:"none",pointerEvents:"none",objectFit:"cover",width:"100%",height:"100%",objectPosition:"center",filter:"brightness(100%) contrast(30%) saturate(150%)"}})))},O=a(143),C=function(e){var t=e.image;return r.a.useEffect((function(){S.a.registerPlugin(O.a),S.a.to(".textWrapper",{scrollTrigger:{trigger:".textWrapper",start:"start start",end:"80% start",toggleActions:"none none reverse none",scrub:!0},opacity:0,display:"none"})})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"textWrapper"},r.a.createElement("div",{className:"textContainer"},r.a.createElement("span",{className:"bigText"},"Alice ha detto : ",r.a.createElement("br",null),' "Si"!'),r.a.createElement("br",null),r.a.createElement("span",{className:"smallText"},"Questo \xe8 il tuo invito al nostro matrimonio"),r.a.createElement("button",{onClick:function(){S.a.to(".img",{filter:"brightness(100%) contrast(80%) saturate(100%)",duration:.5}).then((function(){window.location.assign("/#infosection")}))}},"Partecipa \ud83e\udd70"))),r.a.createElement("div",{className:"imgSectionWrapper",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"800px"}},r.a.createElement("img",{src:t,loading:"lazy",className:"img",style:{userSelect:"none",pointerEvents:"none",objectFit:"cover",width:"100%",height:"100%",objectPosition:"center",filter:"brightness(100%) contrast(60%) saturate(140%)"}})))},P=a(144),F=a.n(P),T=a(145),I=a.n(T),B=function(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){window.innerWidth<1380?c(!0):c(!1)})),window.addEventListener("load",(function(){window.innerWidth<1380?c(!0):c(!1)}))}),[]),n?r.a.createElement(k,{image:F.a}):r.a.createElement(C,{image:I.a})},A=function(){return r.a.createElement("div",{className:"Home d-flex flex-column",style:{backgroundColor:"#eee"}},r.a.createElement(B,null),r.a.createElement(j,null))},W=a(33),M=(a(84),function(){return r.a.createElement("div",{className:"myHeader shadow-sm"},r.a.createElement("span",null,"Area Privata"),r.a.createElement(W.b,{to:"/",className:"myLink"},"Torna Alla Home"))}),R=a(5),z=a(147),L=a.n(z),D=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),u=o[0],f=o[1],p=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("user").value,a=document.getElementById("password").value,n=L.a.AES.encrypt(a,"2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU"),e.prev=3,e.next=6,d.a.post("/Private/Login",{user:t,password:n.toString()});case 6:return e.abrupt("return",f(!0));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",c(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"myPrivateContent",style:{fontFamily:"Poppins"}},r.a.createElement("div",{className:"myContentSection shadow-lg rounded"},r.a.createElement("h3",{style:{marginBottom:"30px"}},"Accesso Area Inviti"),u?r.a.createElement(R.a,{to:"/Private/Dashboard"}):r.a.createElement("div",null),r.a.createElement("div",{className:"myFormContent"},r.a.createElement("label",{className:"formLabel"},"Nome Utente"),r.a.createElement("input",{type:"text",id:"user",placeholder:"Nome Utente...",onInput:function(){return c("")}}),r.a.createElement("label",{className:"formLabel"},"Password"),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password...",onInput:function(){return c("")}}),r.a.createElement("span",{style:{color:"red",fontWeight:"bold",fontFamily:"Poppins"}},a),r.a.createElement("button",{type:"submit",onClick:p},"Procedi"))))},H=function(){return r.a.createElement("div",{className:"myPrivate"},r.a.createElement(M,null),r.a.createElement(D,null))},_=function(e){var t=function(){var t=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading[1](!e.loading[0]),t.prev=1,t.next=4,d.a.delete("/api/v1/inviti/".concat(e._id)).then((function(e){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row h-80"},r.a.createElement("a",{className:"col-12 d-flex justify-content-center align-items-center bg-danger",href:"javascript:void(0)",style:{textDecoration:"none",color:"white",borderRadius:"6px 6px 6px 6px",margin:"1px 0 1px 0"},onClick:function(){return t()}},"Del"))))},q=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)([]),u=Object(m.a)(o,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var t=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/api/v1/inviti").then((function(t){p(t.data),i(!1),e.calculationMethods[0](f.length),e.calculationMethods[1](f.map((function(e){return e.presentsNumber})).reduce((function(e,t){return e+t}),0))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}})()()}),[c]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,f.map((function(e){return r.a.createElement(_,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[c,i]})}))))},Q=function(e){var t=function(){var t=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading[1](!e.loading[0]),t.prev=1,t.next=4,d.a.delete("/api/v1/inviti/bin/".concat(e._id));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row h-80"},r.a.createElement("a",{className:"col-12 d-flex justify-content-center align-items-center bg-danger",href:"javascript:void(0)",style:{textDecoration:"none",color:"white",borderRadius:"6px 6px 6px 6px",margin:"1px 0 1px 0"},onClick:function(){return t()}},"Del"))))},U=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(m.a)(i,2),u=o[0],f=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/v1/inviti/bin").then((function(e){f(e.data),c(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,u.map((function(e){return r.a.createElement(Q,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[a,c]})}))))},V=(a(294),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),o=Object(m.a)(i,2),u=o[0],f=o[1],p=Object(n.useState)(),g=Object(m.a)(p,2),v=g[0],E=g[1],x=Object(n.useState)(!1),b=Object(m.a)(x,2),h=b[0],N=b[1],y=Object(n.useState)(!1),w=Object(m.a)(y,2),j=w[0],S=w[1],k=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/Private/LogOut");case 3:S(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-flex flex-column",style:{fontFamily:"Poppins"}},h?r.a.createElement(R.a,{to:"/"}):r.a.createElement(r.a.Fragment,null),j?r.a.createElement(R.a,{to:"/Private"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("h2",null,"Lista Invitati"),r.a.createElement("div",{className:"commandSection container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",marginBottom:"10px",height:"50px"}},r.a.createElement("div",{className:"row h-100 text-black",style:{fontSize:"20px",userSelect:"none",cursor:"pointer"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-right controlButton",onClick:function(){return N(!0)}},"Home"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-left controlButton",onClick:function(){return k()}},"Log Out"))),r.a.createElement("div",{className:"counter container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",padding:"20px 0 20px 0"}},r.a.createElement("h5",null,"Totali"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Famiglie"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Invitati")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},u),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},v))),r.a.createElement("div",{className:"itemsSelector container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",height:"100px",marginTop:"10px"}},r.a.createElement("div",{className:"row rounded text-white",style:{height:"100%",fontSize:"20px"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#28A745":"#1d8233",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!1)}},"Invitati"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#BF2F3B":"#DC3545",borderBottomRightRadius:"6px",borderTopRightRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!0)}},"Cestino"))),r.a.createElement("div",{className:"container-fluid invitationsGrid rounded"},r.a.createElement("div",{className:"row",style:{fontWeight:"bold",fontSize:"25px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Nome Famiglia"),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Numero Presenti"),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"})),a?r.a.createElement(U,null):r.a.createElement(q,{calculationMethods:[f,E]})))});var G=function(){return r.a.createElement(W.a,null,r.a.createElement("div",{className:"App",style:{textAlign:"center",maxWidth:"1920px",margin:"auto",boxShadow:"1px 1px 5px grey"}},r.a.createElement(R.d,null,r.a.createElement(R.b,{exact:!0,path:"/",component:A}),r.a.createElement(R.b,{exact:!0,path:"/Private",component:H}),r.a.createElement(R.b,{path:"/Private/Dashboard",component:V}),r.a.createElement(R.b,{exact:!0,path:"/*",component:A}))))};a(295);i.a.render(r.a.createElement(G,null),document.getElementById("root"))},50:function(e,t,a){},84:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.7699670f.chunk.js.map