(this.webpackJsonpalivan=this.webpackJsonpalivan||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/calendar.845d1fa2.svg"},141:function(e,t,a){e.exports=a.p+"static/media/map.52a1e297.svg"},142:function(e,t,a){e.exports=a.p+"static/media/restaurant.517fb5a8.svg"},145:function(e,t,a){e.exports=a(294)},150:function(e,t,a){},151:function(e,t,a){},169:function(e,t,a){},178:function(e,t){},180:function(e,t){},191:function(e,t){},193:function(e,t){},220:function(e,t){},222:function(e,t){},223:function(e,t){},229:function(e,t){},231:function(e,t){},249:function(e,t){},251:function(e,t){},263:function(e,t){},266:function(e,t){},292:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(138),l=a.n(c),o=(a(150),a(151),a(6)),s=a.n(o),i=a(11),m=a(4),u=a(12),d=a.n(u),f=function(){var e=r.a.useState(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=r.a.useState(0),o=Object(m.a)(l,2),u=o[0],f=o[1],p=r.a.useState(""),v=Object(m.a)(p,2),g=v[0],E=v[1],b=r.a.useState(!1),h=Object(m.a)(b,2),x=h[0],N=h[1],y=r.a.useState({message:"",success:!1}),w=Object(m.a)(y,2),j=w[0],O=w[1],k=Object(n.useRef)(null),S=Object(n.useRef)(null),C=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,n=!1,N(!0),r=document.getElementById("nome"),c=document.getElementById("numero"),0===a.length||0===u?(0===a.length&&(r.className=r.className+" border-danger redPlaceHolder"),0===u&&(c.className=c.className+" border-danger",c.style.color="red"),E("I campi non possono essere vuoti!"),N(!1)):(a.length<2||a.length>20?(t=!1,E("Il Campo 'Nome Famiglia' deve contenere tra i 2 e i 20 caratteri!"),r.className=r.className+" border-danger redPlaceHolder",N(!1)):t=!0,u<1||u>10||isNaN(u)?(n=!1,E("Inserire un numero di invitati Valido!(Minimo: 1, Massimo: 10)"),c.value="",c.className=c.className+" border-danger",c.style.color="red",N(!1)):n=!0),!t||!n){e.next=18;break}return l={familyName:a,presentsNumber:u},e.prev=8,e.next=11,d.a.post("/api/v1/inviti",l).then((function(e){N(!1),O({message:"Spedizione dell'invito Riuscita! :)",success:!0})})).catch((function(e){O({message:"Oh no! Qualcosa \xe8 andato Storto :/",success:!1})}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log(e.t0);case 16:e.next=19;break;case 18:N(!1);case 19:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"formSection"},r.a.createElement("div",{className:"myForm shadow-lg"},r.a.createElement("div",{className:"formQuestion"},r.a.createElement("span",{className:" formMargin"},"Sarete dei nostri?"),r.a.createElement("small",{className:" formMargin"},"Non dovete fare altro che compilare il form")),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"nome"},"Nome Famiglia"),r.a.createElement("input",{type:"Text",id:"nome",ref:k,onInput:function(e){c(e.currentTarget.value),e.currentTarget.className="myTextBox",E(""),O({message:"",success:!1})},name:"nome",className:"myTextBox",placeholder:"Nome famiglia..."})),r.a.createElement("div",{className:"formRow"},r.a.createElement("label",{className:"label",htmlFor:"numero"},"Numero di Presenti"),r.a.createElement("input",{type:"Number",id:"numero",ref:S,onInput:function(e){f(parseInt(e.currentTarget.value)),e.currentTarget.className="myTextBox",e.currentTarget.style.color="#DAA520",E(""),O({message:"",success:!1})},name:"numero",min:"1",max:"10",defaultValue:"1",className:"myTextBox",placeholder:"Numero Persone..."})),r.a.createElement("small",{className:"text-danger"},g),r.a.createElement("div",{className:"formRowButton"},x?r.a.createElement("span",{style:{fontSize:"20px",fontFamily:"Poppins",color:"#DAA520",marginBottom:"20px"}},"Uhmmm.. controllo se c'\xe8 spazio"):r.a.createElement(r.a.Fragment,null,j.success?r.a.createElement("span",{className:"text-success"},j.message):r.a.createElement("span",{className:"text-danger"},j.message)),r.a.createElement("input",{type:"submit",value:"Partecipa!",onClick:function(){return C()},className:"goButton"}))))},p=a(139),v=a.n(p),g=function(e){var t=r.a.useState(!0),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){window.innerWidth<992?c(!1):c(!0)})),window.addEventListener("load",(function(){window.innerWidth<992?c(!1):c(!0)}))}),[]),r.a.createElement("div",{className:v()("myCard","rounded",{"shadow-lg":n})},r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"myQuestion"},e.questionMark),r.a.createElement("div",{className:"myImage"},r.a.createElement("img",{src:e.svg,alt:""})),r.a.createElement("div",{className:"myInfo"},e.info),r.a.createElement("div",{className:"myDetails"},r.a.createElement("a",{href:e.href},e.details))))},E=a(140),b=a.n(E),h=a(141),x=a.n(h),N=a(142),y=a.n(N),w=function(){return r.a.createElement("div",{className:"infoSection"},r.a.createElement("div",{className:"infoIntroduction shadow-sm d-flex justify-content-center align-items-center",style:{fontFamily:"Poppins"},id:"infoAnchor"},r.a.createElement("span",null,"Informazioni")),r.a.createElement("div",{className:"infoGrid "},r.a.createElement(g,{svg:b.a,questionMark:"Quando?",info:"1 Luglio 2021-11:30am",details:"Salva Evento",href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=MXV1ZzJvN2c1Z21mN29lM3R0Z2k3bmxhOG4gaG96YS5jcmlzdGlhbjAxQG0&tmsrc=hoza.cristian01%40gmail.com"}),r.a.createElement(g,{svg:x.a,questionMark:"Dove?",info:"Monforte d'Alba",details:"Vai alla Mappa",href:"https://goo.gl/maps/5yWbVswnEs46aqeA9"}),r.a.createElement(g,{svg:y.a,questionMark:"Ristorante?",info:"Ristorante 'La Torricella'",details:"Vai al Sito",href:"http://www.latorricella.eu/it/"})))},j=function(){return r.a.createElement("div",{className:"myContent d-flex flex-column ",style:{zIndex:1,background:"white"}},r.a.createElement(w,null),r.a.createElement(f,null))},O=(a(169),a(34)),k=a.n(O),S=a(43),C=a.n(S),P=function(e){var t=r.a.useState(k.a),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){window.addEventListener("resize",(function(){window.innerWidth<1380?c(C.a):c(k.a)})),window.addEventListener("load",(function(){window.innerWidth<1380?c(C.a):c(k.a)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"textWrapper"},r.a.createElement("div",{className:"textContainer"},r.a.createElement("span",{className:"bigText"},"Benvenuti al nostro",r.a.createElement("br",null)," Matrimonio"),r.a.createElement("br",null),r.a.createElement("span",{className:"smallText"},"Da Alice e Ivan"))),r.a.createElement("div",{className:"imgSectionWrapper",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"600px"}},r.a.createElement("img",{src:n,loading:"lazy",className:"rounded",style:{userSelect:"none",pointerEvents:"none",objectFit:"cover",width:"90%",height:"90%",objectPosition:"center",filter:"brightness(100%) contrast(85%) saturate(80%)"}})))},F=function(){return r.a.createElement("div",{className:"Home d-flex flex-column"},r.a.createElement(P,null),r.a.createElement(j,null))},B=a(33),I=(a(84),function(){return r.a.createElement("div",{className:"myHeader shadow-sm"},r.a.createElement("span",null,"Area Privata"),r.a.createElement(B.b,{to:"/",className:"myLink"},"Torna Alla Home"))}),T=a(5),A=a(144),M=a.n(A),R=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],f=o[1],p=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("user").value,a=document.getElementById("password").value,n=M.a.AES.encrypt(a,"2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU"),e.prev=3,e.next=6,d.a.post("/Private/Login",{user:t,password:n.toString()});case 6:return e.abrupt("return",f(!0));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",c(e.t0.response.data.message));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"myPrivateContent",style:{fontFamily:"Poppins"}},r.a.createElement("div",{className:"myContentSection shadow-lg rounded"},r.a.createElement("h3",{style:{marginBottom:"30px"}},"Accesso Area Inviti"),u?r.a.createElement(T.a,{to:"/Private/Dashboard"}):r.a.createElement("div",null),r.a.createElement("div",{className:"myFormContent"},r.a.createElement("label",{className:"formLabel"},"Nome Utente"),r.a.createElement("input",{type:"text",id:"user",placeholder:"Nome Utente...",onInput:function(){return c("")}}),r.a.createElement("label",{className:"formLabel"},"Password"),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password...",onInput:function(){return c("")}}),r.a.createElement("span",{style:{color:"red",fontWeight:"bold",fontFamily:"Poppins"}},a),r.a.createElement("button",{type:"submit",onClick:p},"Procedi"))))},z=function(){return r.a.createElement("div",{className:"myPrivate"},r.a.createElement(I,null),r.a.createElement(R,null))},L=function(e){var t=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading[1](!e.loading[0]),t.prev=1,t.next=4,d.a.delete("/api/v1/inviti/".concat(e._id)).then((function(e){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row h-80"},r.a.createElement("a",{className:"col-12 d-flex justify-content-center align-items-center bg-danger",href:"javascript:void(0)",style:{textDecoration:"none",color:"white",borderRadius:"6px 6px 6px 6px",margin:"1px 0 1px 0"},onClick:function(){return t()}},"Del"))))},D=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),u=Object(m.a)(o,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/api/v1/inviti").then((function(t){p(t.data),l(!1),e.calculationMethods[0](f.length),e.calculationMethods[1](f.map((function(e){return e.presentsNumber})).reduce((function(e,t){return e+t}),0))}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}})()()}),[c]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,f.map((function(e){return r.a.createElement(L,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[c,l]})}))))},W=function(e){var t=function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading[1](!e.loading[0]),t.prev=1,t.next=4,d.a.delete("/api/v1/inviti/bin/".concat(e._id));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row rounded shadow-sm",id:e._id,style:{fontSize:"20px",minHeight:"50px",backgroundColor:"#eee",marginBottom:"10px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.familyName),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},e.presentsNumber),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"row h-80"},r.a.createElement("a",{className:"col-12 d-flex justify-content-center align-items-center bg-danger",href:"javascript:void(0)",style:{textDecoration:"none",color:"white",borderRadius:"6px 6px 6px 6px",margin:"1px 0 1px 0"},onClick:function(){return t()}},"Del"))))},H=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),u=o[0],f=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/v1/inviti/bin").then((function(e){f(e.data),c(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h1",null,"Uhm.. vediamo chi c'\xe8"):r.a.createElement(r.a.Fragment,null,u.map((function(e){return r.a.createElement(W,{familyName:e.familyName,presentsNumber:e.presentsNumber,_id:e._id,key:e._id,loading:[a,c]})}))))},_=(a(292),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(m.a)(l,2),u=o[0],f=o[1],p=Object(n.useState)(),v=Object(m.a)(p,2),g=v[0],E=v[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),x=h[0],N=h[1],y=Object(n.useState)(!1),w=Object(m.a)(y,2),j=w[0],O=w[1],k=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/Private/LogOut");case 3:O(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-flex flex-column",style:{fontFamily:"Poppins"}},x?r.a.createElement(T.a,{to:"/"}):r.a.createElement(r.a.Fragment,null),j?r.a.createElement(T.a,{to:"/Private"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("h2",null,"Lista Invitati"),r.a.createElement("div",{className:"commandSection container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",marginBottom:"10px",height:"50px"}},r.a.createElement("div",{className:"row h-100 text-black",style:{fontSize:"20px",userSelect:"none",cursor:"pointer"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-right controlButton",onClick:function(){return N(!0)}},"Home"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center border-left controlButton",onClick:function(){return k()}},"Log Out"))),r.a.createElement("div",{className:"counter container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",padding:"20px 0 20px 0"}},r.a.createElement("h5",null,"Totali"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Famiglie"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{fontWeight:"bold"}},"Totale Invitati")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},u),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center"},g))),r.a.createElement("div",{className:"itemsSelector container-fluid rounded shadow-sm",style:{backgroundColor:"#eee",height:"100px",marginTop:"10px"}},r.a.createElement("div",{className:"row rounded text-white",style:{height:"100%",fontSize:"20px"}},r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#28A745":"#1d8233",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!1)}},"Invitati"),r.a.createElement("div",{className:"col-6 d-flex justify-content-center align-items-center",style:{backgroundColor:a?"#BF2F3B":"#DC3545",borderBottomRightRadius:"6px",borderTopRightRadius:"6px",cursor:"pointer",userSelect:"none"},onClick:function(){return c(!0)}},"Cestino"))),r.a.createElement("div",{className:"container-fluid invitationsGrid rounded"},r.a.createElement("div",{className:"row",style:{fontWeight:"bold",fontSize:"25px"}},r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Nome Famiglia"),r.a.createElement("div",{className:"col-5 d-flex justify-content-center align-items-center"},"Numero Presenti"),r.a.createElement("div",{className:"col-2 d-flex justify-content-center align-items-center"})),a?r.a.createElement(H,null):r.a.createElement(D,{calculationMethods:[f,E]})))});var G=function(){return r.a.createElement(B.a,null,r.a.createElement("div",{className:"App",style:{textAlign:"center"}},r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",component:F}),r.a.createElement(T.b,{exact:!0,path:"/Private",component:z}),r.a.createElement(T.b,{path:"/Private/Dashboard",component:_}),r.a.createElement(T.b,{exact:!0,path:"/*",component:F}))))};a(293);l.a.render(r.a.createElement(G,null),document.getElementById("root"))},34:function(e,t,a){e.exports=a.p+"static/media/largeCompressed.1a4d0179.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/smallCompressed.91fbfac6.jpg"},84:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.62dd704a.chunk.js.map