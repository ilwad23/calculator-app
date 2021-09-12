(this["webpackJsonpcalculator-app-main-react"]=this["webpackJsonpcalculator-app-main-react"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,c,i,o,l,a,s,u,h,p,b,d=t(1),x=t.n(d),j=t(10),g=t.n(j),m=(t(18),t(4)),O=function(n,e){switch(e.type){case"CHANGE_THEME":return Object(m.a)(Object(m.a)({},n),{},{toggle:e.toggle});case"CHANGE_NUMBER":return Object(m.a)(Object(m.a)({},n),{},{number:n.number+e.number});case"DELETE_NUMBER":return Object(m.a)(Object(m.a)({},n),{},{number:"0"});case"PLACE_OPERATOR":return Object(m.a)(Object(m.a)({},n),{},{previousNumber:n.number,number:"",operator:e.operator});case"RESET":return Object(m.a)(Object(m.a)({},n),{},{previousNumber:"0",number:"0",operator:""});case"EQUAL":var t;switch(n.operator){case"+":t=parseFloat(n.previousNumber)+parseFloat(n.number);break;case"-":t=parseFloat(n.previousNumber)-parseFloat(n.number);break;case"/":t=parseFloat(n.previousNumber)/parseFloat(n.number);break;case"x":t=parseFloat(n.previousNumber)*parseFloat(n.number)}return Object(m.a)(Object(m.a)({},n),{},{number:t})}},f=t(0),C=Object(d.createContext)(),w=function(n){var e=n.reducer,t=n.initialState,r=n.children;return Object(f.jsx)(C.Provider,{value:Object(d.useReducer)(e,t),children:r})},B=function(){return Object(d.useContext)(C)},E=t(5),K=t(3),v=t(2),k=v.c.div(r||(r=Object(K.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: ",';\n  display: grid;\n  place-items: center;\n  font-family: "Spartan", sans-serif;\n  font-weight: 700;\n  color: #fff;\n'])),(function(n){return n.bgColorMain})),y=v.c.div(c||(c=Object(K.a)(["\n  width: 541px;\n  height: 721px;\n  @media screen and (max-width: 500px) {\n    width: 80vw;\n    min-height: 667px;\n  }\n"]))),S=v.c.div(i||(i=Object(K.a)(["\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n"]))),N=v.c.h2(o||(o=Object(K.a)(["\n  margin-top: 20px;\n  color: ",";\n  "])),(function(n){return n.theme.color})),M=v.c.div(l||(l=Object(K.a)(["\n  margin-top: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  "]))),A=v.c.p(a||(a=Object(K.a)(["\n  color: ",";\n  font-size: 13px;\n  line-height: 15px;\n  "])),(function(n){return n.theme.color})),R=v.c.div(s||(s=Object(K.a)(["\n  margin-left: 25px;\n  "]))),T=v.c.div(u||(u=Object(K.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 72px;\n  "]))),H=v.c.p(h||(h=Object(K.a)(["\n  font-size: 12px;\n  line-height: 13px;\n  color: ",";\n  "])),(function(n){return n.theme.color})),_=v.c.div(p||(p=Object(K.a)(["\n  background: ",";\n  border-radius: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n  width: 72px;\n  height: 26px;\n"])),(function(n){return n.theme.toggleBgColor})),F=v.c.div(b||(b=Object(K.a)(["\n  width: 18px;\n  height: 18px;\n  border-radius: 100px;\n  cursor: pointer;\n  background: ",";\n"])),(function(n){return n.on&&n.theme.circleBgColor})),U={color:"white",toggleBgColor:"#232c43",circleBgColor:"#d03f2f"},L={color:"hsl(60, 10%, 19%)",toggleBgColor:"hsl(0, 5%, 81%)",circleBgColor:"hsl(25, 98%, 40%)"},G={color:"hsl(52, 100%, 62%)",toggleBgColor:"hsl(268, 71%, 12%)",circleBgColor:"hsl(176, 100%, 44%)"};var z,P,D=function(){var n={1:U,2:L,3:G},e=B(),t=Object(E.a)(e,2),r=t[0].toggle,c=t[1];return Object(f.jsx)(v.a,{theme:n[r],children:Object(f.jsxs)(S,{children:[Object(f.jsx)(N,{children:"calc"}),Object(f.jsxs)(M,{children:[Object(f.jsx)(A,{children:"THEME"}),Object(f.jsxs)(R,{children:[Object(f.jsxs)(T,{children:[Object(f.jsx)(H,{children:"1"}),Object(f.jsx)(H,{children:"2"}),Object(f.jsx)(H,{children:"3"})]}),Object(f.jsxs)(_,{children:[Object(f.jsx)(F,{on:1==r,onMouseUp:function(){return c({type:"CHANGE_THEME",toggle:1})}}),Object(f.jsx)(F,{on:2==r,onMouseUp:function(){return c({type:"CHANGE_THEME",toggle:2})}}),Object(f.jsx)(F,{on:3==r,onMouseUp:function(){return c({type:"CHANGE_THEME",toggle:3})}})]})]})]})]})})},I=v.c.div(z||(z=Object(K.a)(["\n  width: 541px;\n  height: 128px;\n  margin-top: 15px;\n  color: ",";\n  background: ",";\n  border-radius: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  @media screen and (max-width: 500px) {\n    width: 100%;\n    height: 87px;\n  }\n"])),(function(n){return n.theme.color}),(function(n){return n.theme.bgColor})),J=v.c.h1(P||(P=Object(K.a)(["\n  margin-right: 30px;\n"]))),Q={bgColor:"hsl(224, 36%, 15%)",color:"white"},q={bgColor:"hsl(0, 0%, 93%)",color:"hsl(60, 10%, 19%)"},V={bgColor:"hsl(268, 71%, 12%)",color:"hsl(52, 100%, 62%)"};var W,X,Y,Z,$=function(){var n={1:Q,2:q,3:V},e=B(),t=Object(E.a)(e,2),r=t[0],c=r.toggle,i=r.number,o=(t[1],new Intl.NumberFormat("en"));return Object(f.jsx)(v.a,{theme:n[c],children:Object(f.jsx)(I,{children:Object(f.jsx)(J,{children:o.format(i)})})})},nn=v.c.div(W||(W=Object(K.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  grid-gap: 30px;\n  width: 541px;\n  height: 482px;\n  margin-top: 30px;\n  padding: 30px;\n  background: ",";\n  border-radius: 10px;\n  @media screen and (max-width: 500px) {\n    margin-top: 25px;\n    grid-gap: 10px;\n    width: 100%;\n    height: 419px;\n  }\n  "])),(function(n){return n.theme.mainBg})),en=v.c.div(X||(X=Object(K.a)(["\n  left: 157px;\n  top: 297px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  font-size: 35px;\n  line-height: 39px;\n  background: ",";\n  box-shadow: ",";\n  color: ",";\n  grid-column: ",";\n  ",";\n      ",";\n      &:active {\n        opacity: 0.5;\n      }\n      @media screen and (max-width: 500px) {\n        font-size: 28px;\n      }\n      @media screen and (max-width: 300px) {\n        font-size: 21px;\n      }\n      "])),(function(n){return n.theme.mainKBg}),(function(n){return n.theme.mainKBgSw}),(function(n){return n.theme.mainKColor}),(function(n){return n.bigB&&"1/3"}),(function(n){return n.blue&&Object(v.b)(Y||(Y=Object(K.a)(["\n      background: #637097;\n      box-shadow: 0px 4px 4px #444b5a;\n      background: ",";\n      box-shadow: ",";\n      color: ",";\n      "])),(function(n){return n.theme.secKBg}),(function(n){return n.theme.secKBgSw}),(function(n){return n.theme.secKColor}))}),(function(n){return n.bigO&&Object(v.b)(Z||(Z=Object(K.a)(["\n      grid-column: 3/5;\n      color: ",";\n      background: ",";\n      box-shadow: ",";\n      "])),(function(n){return n.theme.thirdKColor}),(function(n){return n.theme.thirdKBg}),(function(n){return n.theme.thirdKBgSw}))})),tn={mainBg:"hsl(223, 31%, 20%)",mainKBg:"#eae3dc",mainKBgSw:"0px 4px 4px #b4a597",mainKColor:"hsl(221, 14%, 31%)",secKBg:"#637097",secKBgSw:"0px 4px 4px #444b5a",secKColor:"white",thirdKBg:"#d03f2f",thirdKBgSw:"0px 4px 4px #93261A",thirdKColor:"white"},rn={mainBg:"hsl(0, 5%, 81%)",mainKBg:"hsl(45, 7%, 89%)",mainKBgSw:"0px 4px 4px hsl(35, 11%, 61%)",mainKColor:"hsl(60, 10%, 19%)",secKBg:"hsl(185, 42%, 37%)",secKBgSw:"0px 4px 4px hsl(185, 58%, 25%)",secKColor:"white",thirdKBg:"hsl(25, 98%, 40%)",thirdKBgSw:"0px 4px 4px hsl(25, 99%, 27%)",thirdKColor:"white"},cn={mainBg:"hsl(268, 71%, 12%)",mainKBg:"hsl(268, 47%, 21%)",mainKBgSw:"0px 4px 4px hsl(290, 70%, 36%)",mainKColor:"hsl(52, 100%, 62%)",secKBg:"hsl(281, 89%, 26%)",secKBgSw:"0px 4px 4px hsl(285, 91%, 52%)",secKColor:"white",thirdKBg:"hsl(176, 100%, 44%)",thirdKBgSw:"0px 4px 4px hsl(177, 92%, 70%)",thirdKColor:"hsl(198, 20%, 13%)"};var on=function(){var n={1:tn,2:rn,3:cn},e=B(),t=Object(E.a)(e,2),r=t[0].toggle,c=t[1];function i(n){c({type:"CHANGE_NUMBER",number:n})}function o(n){c({type:"PLACE_OPERATOR",operator:n})}return Object(f.jsx)(v.a,{theme:n[r],children:Object(f.jsxs)(nn,{children:[Object(f.jsx)(en,{onClick:function(){return i(7)},children:"7"}),Object(f.jsx)(en,{onClick:function(){return i(8)},children:"8"}),Object(f.jsx)(en,{onClick:function(){return i(9)},children:"9"}),Object(f.jsx)(en,{onClick:function(){return c({type:"DELETE_NUMBER"})},blue:!0,children:"DEL"}),Object(f.jsx)(en,{onClick:function(){return i(4)},children:"4"}),Object(f.jsx)(en,{onClick:function(){return i(5)},children:"5"}),Object(f.jsx)(en,{onClick:function(){return i(6)},children:"6"}),Object(f.jsx)(en,{onClick:function(){return o("+")},children:"+"}),Object(f.jsx)(en,{onClick:function(){return i(1)},children:"1"}),Object(f.jsx)(en,{onClick:function(){return i(2)},children:"2"}),Object(f.jsx)(en,{onClick:function(){return i(3)},children:"3"}),Object(f.jsx)(en,{onClick:function(){return o("-")},children:"-"}),Object(f.jsx)(en,{onClick:function(){return i(".")},children:"."}),Object(f.jsx)(en,{onClick:function(){return i(0)},children:"0"}),Object(f.jsx)(en,{onClick:function(){return o("/")},children:"/"}),Object(f.jsx)(en,{onClick:function(){return o("x")},children:"x"}),Object(f.jsx)(en,{onClick:function(){return c({type:"RESET"})},blue:!0,bigB:!0,children:"RESET"}),Object(f.jsx)(en,{onClick:function(){return c({type:"EQUAL"})},bigO:!0,children:"="})]})})};var ln=function(){var n=B(),e=Object(E.a)(n,2),t=e[0].toggle;return e[1],Object(f.jsx)(k,{bgColorMain:{1:"hsl(222, 26%, 31%)",2:"hsl(0, 0%, 90%)",3:"hsl(268, 75%, 9%)"}[t],children:Object(f.jsxs)(y,{children:[Object(f.jsx)(D,{}),Object(f.jsx)($,{}),Object(f.jsx)(on,{})]})})};g.a.render(Object(f.jsx)(x.a.StrictMode,{children:Object(f.jsx)(w,{initialState:{toggle:1,previousNumber:"0",number:"0",operator:""},reducer:O,children:Object(f.jsx)(ln,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e9d8c3f4.chunk.js.map