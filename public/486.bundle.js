(self.webpackChunkreact_app_redux=self.webpackChunkreact_app_redux||[]).push([[486],{5216:function(e,t,r){"use strict";var n=r(7294),o=r(7703),a=r(9382),i=r(5697),l=r.n(i);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){var t,r,o=e.data,a=e.favoriteBooks,i=o.id,l=o.volumeInfo,c=l.title,s=l.imageLinks,f=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=f[0],v=f[1];return(0,n.useEffect)((function(){a.filter((function(e){return e.data.id===i})).length&&v(!0)})),n.createElement("div",null,n.createElement("div",{className:m?"book__card borderFavorite":"book__card"},n.createElement("img",{src:void 0===s?"":"".concat(s.thumbnail)}),n.createElement("p",null,c.length>15?c.substr(0,15)+"...":c),m?n.createElement("button",{className:"book__button btn-favorite",type:"submit",onClick:function(){return function(t){e.deleteFavorite(t),v(!1)}(i)}},"FAVORITE"):n.createElement("button",{className:"book__button",type:"submit",onClick:function(){e.setFavorite({data:o}),v(!0)}},"FAVORITE")))};c.propTypes={favorite:l().bool,imageLinks:l().object,title:l().string},c.displayName="Book";var s={setFavorite:a.oW,deleteFavorite:a.r7};t.Z=(0,o.$j)((function(e){return{favoriteBooks:e.favoriteBooks}}),s)(c)},5486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7294),o=r(7703),a=r(5216),i=(0,o.$j)((function(e){return{favoriteBooks:e.favoriteBooks,changeName:e.changeName}}),null)((function(e){var t=e.favoriteBooks,r=e.changeName;return n.createElement("div",null,n.createElement("h2",{className:"favoriteList_title"},"Your favorite books!",r),n.createElement("div",{className:"booklist__searched-container"},t.length?t.map((function(e){return n.createElement("div",null,n.createElement(a.Z,{key:e.id,data:e.data}))})):n.createElement("h3",null,"Empty")))})),l=function(){return n.createElement(i,null)}}}]);
//# sourceMappingURL=486.bundle.js.map