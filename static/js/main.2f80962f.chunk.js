(this["webpackJsonppunjabi-classics"]=this["webpackJsonppunjabi-classics"]||[]).push([[0],{102:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),s=(n(76),n(44)),l=n.n(s),j=n(57),o=n(47),b=n(63),u=n(129),d=n(138),x=n(23),O=n(8),h=n(130),p=n(131),m=n(132),g=n(128),f=n(139),y=n(60),v=n.n(y),w=n(58),S=n(2),k=function(){return Object(S.jsx)(f.a,{title:"Source","aria-label":"source",children:Object(S.jsx)(g.a,{edge:"start",color:"inherit","aria-label":"open github",onClick:function(){return window.open(w.a)},children:Object(S.jsx)(v.a,{})})})},L=n(61),N=n.n(L),B=Object(u.a)({wrapper:{marginRight:"12px"}}),C=function(){var t=B();return Object(S.jsx)("div",{className:t.wrapper,children:Object(S.jsx)(f.a,{title:"Back","aria-label":"back",children:Object(S.jsx)(g.a,{edge:"start",color:"inherit","aria-label":"back",component:x.b,to:"/",children:Object(S.jsx)(N.a,{})})})})},T=Object(u.a)((function(t){return{root:{flexGrow:1},title:{flexGrow:1,display:"block"},actions:{display:"flex",position:"relative",marginLeft:t.spacing(1),width:"auto"}}})),z=function(){var t=T(),e=Object(O.f)().pathname;return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsx)(h.a,{position:"fixed",color:"primary",children:Object(S.jsxs)(p.a,{children:["/"!==e&&Object(S.jsx)(C,{}),Object(S.jsx)(m.a,{className:t.title,variant:"h6",noWrap:!0,children:"Punjabi Classics"}),Object(S.jsx)("div",{className:t.actions,children:Object(S.jsx)(k,{})})]})}),Object(S.jsx)(p.a,{})]})},P=n(137),E=n(133),F=n(135),G=n(134),J=n(136),W=Object(u.a)({card:{width:"400px"},cardContent:{height:"150px"},title:{fontSize:14},subTitle:{fontSize:13,marginBottom:12}}),H=function(t){var e=t.id,n=t.singer,a=t.originalTitle,c=t.translatedTitle,i=t.lyricist,r=W();return Object(S.jsxs)(E.a,{className:r.card,children:[Object(S.jsxs)(G.a,{className:r.cardContent,children:[Object(S.jsx)(m.a,{className:r.title,color:"textSecondary",gutterBottom:!0,children:n}),Object(S.jsx)(m.a,{variant:"h5",component:"h2",children:a}),Object(S.jsx)(m.a,{className:r.subTitle,color:"textSecondary",children:"Lyricist: ".concat(i)}),Object(S.jsx)(m.a,{variant:"body2",component:"p",children:'"'.concat(c,'"')})]}),Object(S.jsx)(F.a,{children:Object(S.jsx)(J.a,{component:x.b,to:"/lyrics/".concat(e),size:"small",children:"Go to lyrics"})})]})};H.defaultProps={lyricist:"Unknown"};var A=H,I=function(t){var e=t.lyricsList;return Object(S.jsx)(P.a,{container:!0,spacing:3,justify:"center",children:e.map((function(t){var e=t.singer,n=t.title,a=t.lyricist,c=t.id;return Object(S.jsx)(P.a,{item:!0,children:Object(S.jsx)(A,{id:c,singer:e,originalTitle:n.original,translatedTitle:n.english,lyricist:a})},c)}))})},M=n(62),R=n.n(M),U=function(){return Object(S.jsx)("hr",{style:{maxWidth:"500px"}})},q=function(t){var e=t.lyricsList,n=Object(O.g)().id,c=e.find((function(t){return t.id===n})),i=c.title,r=c.link,s=c.singer,l=c.lyricist,j=c.language,o=c.translation,b=c.commentary,u=c.lyrics,d=c.footnotes;return Object(S.jsxs)("div",{style:{textAlign:"center"},children:[Object(S.jsx)(m.a,{variant:"h5",children:i.original}),Object(S.jsx)(m.a,{variant:"subtitle1",children:'"'.concat(i.english,'"')}),Object(S.jsx)("br",{}),Object(S.jsx)(R.a,{url:r,style:{margin:"0 auto"}}),Object(S.jsx)("br",{}),Object(S.jsx)(U,{}),Object(S.jsx)(m.a,{variant:"subtitle2",children:"Singer - ".concat(s)}),Object(S.jsx)(m.a,{variant:"subtitle2",children:"Lyricist - ".concat(l)}),Object(S.jsx)(m.a,{variant:"subtitle2",children:"Original language - ".concat(j)}),Object(S.jsx)(m.a,{variant:"subtitle2",children:"English translator - ".concat(o)}),Object(S.jsx)(U,{}),Object(S.jsx)(m.a,{variant:"subtitle1",children:"Harman's commentary"}),b.map((function(t,e){return Object(S.jsx)(m.a,{variant:"body2",gutterBottom:!0,children:t},e.toString())})),Object(S.jsx)(U,{}),Object(S.jsx)(m.a,{variant:"subtitle1",children:"Lyrics"}),u.map((function(t,e){return Object(S.jsxs)(a.Fragment,{children:[Object(S.jsx)(m.a,{variant:"body2",gutterBottom:!0,children:t[0]}),Object(S.jsx)(m.a,{variant:"body2",style:{fontWeight:600},children:t[1]}),Object(S.jsx)("br",{})]},e.toString())})),d&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(U,{}),Object(S.jsx)(m.a,{variant:"subtitle1",children:"Footnotes"}),d.map((function(t,e){return Object(S.jsx)(m.a,{variant:"subtitle2",gutterBottom:!0,children:t},e.toString())})),Object(S.jsx)("br",{})]})]})},D=Object(b.a)({palette:{primary:{main:"#192978"}}}),K=Object(u.a)({contentContainer:{margin:"24px"}}),Q=function(t){var e=t.lyricsList,n=K();return Object(S.jsx)(d.a,{theme:D,children:Object(S.jsxs)(x.a,{children:[Object(S.jsx)(z,{}),Object(S.jsx)("div",{className:n.contentContainer,children:Object(S.jsxs)(O.c,{children:[Object(S.jsx)(O.a,{path:"/lyrics/:id",children:Object(S.jsx)(q,{lyricsList:e})}),Object(S.jsx)(O.a,{path:"/",children:Object(S.jsx)(I,{lyricsList:e})})]})})]})})},V=["kamli","ja-mur-ja","pyala-rakh-de","sambh-leh-dahooda","aisi-lagi-lagan","tere-tille-ton","ajab-andaz","punjab-di-malika"],X=function(){var t=Object(a.useState)(null),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(!1),r=Object(o.a)(i,2),s=r[0],b=r[1];return Object(a.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all(V.map((function(t){return fetch("data/".concat(t,".json"))})));case 3:return e=t.sent,t.next=6,Promise.all(e.map((function(t){return t.json()})));case 6:n=t.sent,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),b(!0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),null!==n?Object(S.jsx)(Q,{lyricsList:n}):s?"Oops! Something went wrong.":"Loading..."};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(X,{})}),document.getElementById("root"))},58:function(t){t.exports=JSON.parse('{"a":"https://github.com/HarmanSran/punjabi-classics"}')},76:function(t,e,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.2f80962f.chunk.js.map