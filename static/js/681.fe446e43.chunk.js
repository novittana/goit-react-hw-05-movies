"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{152:function(t,n,e){e.d(n,{a:function(){return c}});var r=e(402),a=e(184);function c(){return(0,a.jsx)("div",{style:{position:"fixed",top:"0",zIndex:"2",width:"100vw",height:"100wh",overflow:"hidden",background:"rgba(0,0,0.0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},681:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(439),a=e(791),c=e(545),i=e(152),u=e(689),s=e(184);function o(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],o=n[1],p=(0,a.useState)(""),f=(0,r.Z)(p,2),h=f[0],d=f[1],l=(0,u.UO)().movieId;return(0,a.useEffect)((function(){d(!0),(0,c.tx)(l).then((function(t){o(t.results)})).catch((function(t){console.log(t)})).finally((function(){d(!1)}))}),[l]),(0,s.jsxs)("div",{children:[h&&(0,s.jsx)(i.a,{}),0===e.length&&(0,s.jsxs)("p",{children:["We don't have any revievs for this movie ",e]}),e&&(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author:",t.author_details.username]}),(0,s.jsx)("p",{children:t.content})]},t.id)}))})]})}},545:function(t,n,e){e.d(n,{Wd:function(){return v},Wy:function(){return d},rZ:function(){return o},tx:function(){return m},xA:function(){return f}});var r=e(861),a=e(687),c=e.n(a),i=e(243),u="https://api.themoviedb.org/",s="8aba4e3419a44727b7eb66f35fce4fa2";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"3/trending/movie/day"),{params:{api_key:s,page:n||1}});case 2:return w((e=t.sent).data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"3/search/movie"),{params:{api_key:s,query:n,page:1}});case 2:return w((r=t.sent).data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"3/movie/").concat(n),{params:{api_key:s}});case 2:return w((e=t.sent).data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"3/movie/").concat(n,"/credits"),{params:{api_key:s}});case 2:return w((e=t.sent).data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"3/movie/").concat(n,"/reviews"),{params:{api_key:s}});case 2:return w((e=t.sent).data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return t.poster_path&&(t.poster_path="https://image.tmdb.org/t/p/w500".concat(t.poster_path)),t.backdrop_path&&(t.backdrop_path="https://image.tmdb.org/t/p/w500".concat(t.backdrop_path)),t}}}]);
//# sourceMappingURL=681.fe446e43.chunk.js.map