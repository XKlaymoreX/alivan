(this.webpackJsonpalivan=this.webpackJsonpalivan||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/calendar.82d9c7be.svg"},140:function(e,t,a){e.exports=a.p+"static/media/map.8d7b2c2f.svg"},141:function(e,t,a){e.exports=a.p+"static/media/restaurant.f6c24b78.svg"},142:function(e,t,a){e.exports=a.p+"static/media/img2.5ed9ae78.jpg"},146:function(e,t,a){e.exports=a(295)},151:function(e,t,a){},152:function(e,t,a){},170:function(e,t,a){},179:function(e,t){},181:function(e,t){},192:function(e,t){},194:function(e,t){},221:function(e,t){},223:function(e,t){},224:function(e,t){},230:function(e,t){},232:function(e,t){},250:function(e,t){},252:function(e,t){},264:function(e,t){},267:function(e,t){},293:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(137),l=a.n(c),o=(a(151),a(152),a(7)),i=a.n(o),s=a(17),m=a(4),u=a(18),d=a.n(u),f=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=r.a.useState(0),o=Object(m.a)(l,2),u=o[0],f=o[1],p=r.a.useState(""),v=Object(m.a)(p,2),g=v[0],E=v[1],b=r.a.useState(!1),h=Object(m.a)(b,2),N=h[0],x=h[1],y=r.a.useState({message:"",success:!1}),w=Object(m.a)(y,2),j=w[0],S=w[1],O=Object(n.useRef)(null),k=Object(n.useRef)(null),P=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,n=!1,x(!0),r=document.getElementById("nome"),c=document.getElementById("numero"),0===a.length||0===u?(0===a.length&&(r.className=r.className+" border-danger redPlaceHolder"),0===u&&(c.className=c.className+" border-danger",c.style.color="red"),E("I campi non possono essere vuoti!"),x(!1)):(a.length<2||a.length>20?(t=!1,E("Il Campo 'Nome Famiglia' deve contenere tra i 2 e i 20 caratteri!"),r.className=r.className+" border-danger redPlaceHolder",x(!1)):t=!0,u<1||u>10||isNaN(u)?(n=!1,E("Inserire un numero di invitati Valido!(Minimo: 1, Massimo: 10)"),c.value="",c.className=c.className+" border-danger",c.style.color="red",x(!1)):n=!0),!t||!n){e.next=18;break}return l={familyName:a,presentsNumber:u},e.prev=8,e.next=11,d.a.post("/api/v1/inviti",l).then((function(e){x(!1),S({message:"Spedizione dell'invito Riuscita! :)",success:!0})})).catch((function(e){S({message:"Oh no! Qualcosa \xe8 andato Storto :/",success:!1})}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log(e.t0);case 16:e.next=19;break;case 18:x(!1);case 19:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"formSection"},r.a.createElement("div",{className:"myForm shadow-lg"},r.a.createElement("div",{className:"formQuestion"},r.a.createElement("span",{className:" formMargin"},"Sarete dei nostri?"),r.a.createElement("small",{className:" formMargin"},"Non dovete fare altro che compilare il form")),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"nome"},"Nome Famiglia"),r.a.createElement("input",{type:"Text",id:"nome",ref:O,onInput:function(e){c(e.currentTarget.value),e.currentTarget.className="myTextBox",E(""),S({message:"",success:!1})},name:"nome",className:"myTextBox",placeholder:"Nome famiglia..."})),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"numero"},"Numero di Presenti"),r.a.createElement("input",{type:"Number",id:"numero",ref:k,onInput:function(e){f(parseInt(e.currentTarget.value)),e.currentTarget.className="myTextBox",e.currentTarget.style.color="#DAA520",E(""),S({message:"",success:!1})},name:"numero",min:"1",max:"10",defaultValue:"1",className:"myTextBox",placeholder:"Numero Persone..."})),r.a.createElement("small",{className:"text-danger"},g),r.a.createElement("div",{className:"formRowButton"},N?r.a.createElement("span",{style:{fontSize:"20px",fontFamily:"Poppins",color:"#DAA520"}},"Uhmmm.. controllo se c'\xe8 spazio"):r.a.createElement(r.a.Fragment,null,j.success?r.a.createElement("span",{className:"text-success"},j.message):r.a.createElement("span",{className:"text-danger"},j.message)),r.a.createElement("input",{type:"submit",value:"Partecipa!",onClick:function(){return P()},className:"goButton"}))))},p=a(138),v=a.n(p),g=function(e){var t=r.a.useState(!0),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){window.innerWidth<992?c(!1):c(!0)})),window.addEventListener("load",(function(){window.innerWidth<992?c(!1):c(!0)}))}),[]),r.a.createElement("div",{className:v()("myCard","rounded",{"shadow-lg":n})},r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"myQuestion"},e.questionMark),r.a.createElement("div",{className:"myImage"},r.a.createElement("img",{src:e.svg,alt:""})),r.a.createElement("div",{className:"myInfo"},e.info),r.a.createElement("div",{className:"myDetails"},r.a.createElement("a",{href:e.href},e.details))))},E=a(139),b=a.n(E),h=a(140),N=a.n(h),x=a(141),y=a.n(x),w=function(){return r.a.createElement("div",{className:"infoSection"},r.a.createElement("div",{className:"infoIntroduction shadow-sm d-flex justify-content-center align-items-center",style:{fontFamily:"Poppins"},id:"infoAnchor"},r.a.createElement("span",null,"Informazioni")),r.a.createElement("div",{className:"infoGrid "},r.a.createElement(g,{svg:b.a,questionMark:"Quando?",info:"1 Luglio 2021|11:30am",details:"Salva Evento",href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=MXV1ZzJvN2c1Z21mN29lM3R0Z2k3bmxhOG4gaG96YS5jcmlzdGlhbjAxQG0&tmsrc=hoza.cristian01%40gmail.com"}),r.a.createElement(g,{svg:N.a,questionMark:"Dove?",info:"Monforte d'Alba",details:"Vai alla Mappa",href:"https://goo.gl/maps/5yWbVswnEs46aqeA9"}),r.a.createElement(g,{svg:y.a,questionMark:"Ristorante?",info:"Ristorante 'La Torricella'",details:"Vai al Sito",href:"http://www.latorricella.eu/it/"})))},j=function(){return r.a.createElement("div",{className:"myContent d-flex flex-column ",style:{zIndex:1,background:"white"}},r.a.createElement(w,null),r.a.createElement(f,null))},S=(a(170),a(48)),O=a(145),k=a(142),P=a.n(k),F=function(){return Object(n.useEffect)((function(){S.a.registerPlugin(O.a),S.a.timeline().from(".imgSectionWrapper",{x:"-300vw",ease:"power2",duration:2}).from(".welcomeText",{opacity:0,ease:"power2",duration:.5}).from(".bi-chevron-compact-down",{opacity:0,ease:"power2",duration:.5}),S.a.to(".imgSectionWrapper",{scrollTrigger:{trigger:".imgSectionWrapper",pin:!0}})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"imgSectionWrapper",style:{zIndex:-1,height:"100vh"}},r.a.createElement("img",{src:P.a,style:{objectFit:"cover",width:"90%",height:"90%",objectPosition:"center",position:"absolute",zIndex:-1,filter:"brightness(100%) contrast(85%) saturate(80%)"}}),r.a.createElement("div",{className:"welcomeText"},"Benvenuti Al Nostro Matrimonio"),r.a.createElement("svg",{width:"6em",height:"4em",viewBox:"0 0 16 16",className:"bi bi-chevron-compact-down",fill:"black",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"}))))},B=function(){return r.a.createElement("div",{className:"Home d-flex flex-column"},r.a.createElement(F,null),r.a.createElement(j,null))},C=a(33),I=(a(83),function(){return r.a.createElement("div",{className:"myHeader shadow-sm"},r.a.createElement("span",null,"Area Privata"),r.a.createElement(C.b,{to:"/",className:"myLink"},"Torna Alla Home"))}),T=a(5),M=a(144),z=a.n(M),A=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],f=o[1],p=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("user").value,a=document.getElementById("password").value,n=z.a.AES.encrypt(a,"2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU"),e.prev=3,e.next=6,d.a.post("/Private/Login",{user:t,password:n.toString()});case 6:return e.abrupt("return",f(!0));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",c(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"myPrivateContent",style:{fontFamily:"Poppins"}},r.a.createElement("div",{className:"myContentSection shadow-lg rounded"},r.a.createElement("h3",{style:{marginBottom:"30px"}},"Accesso Area Inviti"),u?r.a.createElement(T.a,{to:"/Private/Dashboard"}):r.a.createElement("div",null),r.a.createElement("div",{className:"myFormContent"},r.a.createElement("label",{className:"formLabel"},"Nome Utente"),r.a.createElement("input",{type:"text",id:"user",placeholder:"Nome Utente...",onInput:function(){return c("")}}),r.a.createElement("label",{className:"formLabel"},"Password"),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password...",onInput:function(){return c("")}}),r.a.createElement("span",{style:{color:"red",fontWeight:"bold",fontFamily:"Poppins"}},a),r.a.createElement("button",{type:"submit",onClick:p},"Procedi"))))},R=function(){return r.a.createElement("div",{className:"myPrivate"},r.a.createElement(I,null),r.a.createElement(A,null))},L=function(e){var t=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading[1](!e.loading[0]),t.prev=1,t.next=4,d.a.delete("/api/v1/inviti/".concat(e._id)).then((function(e){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row h-80"},r.a.createElement("a",{className:"col-12 d-flex justify-content-center align-items-center bg-danger",href:"javascript:void(0)",style:{textDecoration:"none",color:"white",borderRadius:"6px 6px 6px 6px",margin:"1px 0 1px 0"},onClick:function(){return t()}},"Del"))))},W=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),u=Object(m.a)(o,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/api/v1/inviti").then((function(t){p(t.data),l(!1),e.calculationMethods[0](f.length),e.calculationMethods[1](f.map((function(e){return e.presentsNumber})).reduce((function(e,t){return e+t}),0))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}})()()}),[c]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,f.map((function(e){return r.a.createElement(L,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[c,l]})}))))},D=function(e){return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"}))},H=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],f=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/v1/inviti/bin").then((function(e){f(e.data),c(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,u.map((function(e){return r.a.createElement(D,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[a,c]})}))))},_=(a(293),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(m.a)(l,2),u=o[0],f=o[1],p=Object(n.useState)(),v=Object(m.a)(p,2),g=v[0],E=v[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),N=h[0],x=h[1],y=Object(n.useState)(!1),w=Object(m.a)(y,2),j=w[0],S=w[1],O=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/Private/LogOut");case 3:S(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-flex flex-column",style:{fontFamily:"Poppins"}},N?r.a.createElement(T.a,{to:"/"}):r.a.createElement(r.a.Fragment,null),j?r.a.createElement(T.a,{to:"/Private"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("h2",null,"Lista Invitati"),r.a.createElement("div",{className:"commandSection container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",marginBottom:"10px",height:"50px"}},r.a.createElement("div",{className:"row h-100 text-black",style:{fontSize:"20px",userSelect:"none",cursor:"pointer"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-right controlButton",onClick:function(){return x(!0)}},"Home"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-left controlButton",onClick:function(){return O()}},"Log Out"))),r.a.createElement("div",{className:"counter container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",padding:"20px 0 20px 0"}},r.a.createElement("h5",null,"Totali"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Famiglie"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Invitati")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},u),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},g))),r.a.createElement("div",{className:"itemsSelector container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",height:"100px",marginTop:"10px"}},r.a.createElement("div",{className:"row rounded text-white",style:{height:"100%",fontSize:"20px"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#28A745":"#1d8233",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!1)}},"Invitati"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#BF2F3B":"#DC3545",borderBottomRightRadius:"6px",borderTopRightRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!0)}},"Cestino"))),r.a.createElement("div",{className:"container-fluid invitationsGrid rounded"},r.a.createElement("div",{className:"row",style:{fontWeight:"bold",fontSize:"25px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Nome Famiglia"),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Numero Presenti"),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"})),a?r.a.createElement(H,null):r.a.createElement(W,{calculationMethods:[f,E]})))});var G=function(){return r.a.createElement(C.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",component:B}),r.a.createElement(T.b,{exact:!0,path:"/Private",component:R}),r.a.createElement(T.b,{path:"/Private/Dashboard",component:_}),r.a.createElement(T.b,{exact:!0,path:"/*",component:B}))))};a(294);l.a.render(r.a.createElement(G,null),document.getElementById("root"))},83:function(e,t,a){}},[[146,1,2]]]);
//# sourceMappingURL=main.baa921df.chunk.js.map