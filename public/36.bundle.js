(self.webpackChunkreact_app_redux=self.webpackChunkreact_app_redux||[]).push([[36],{5216:function(t,e,n){"use strict";var r=n(7294),o=n(7703),a=n(9382),i=n(5697),c=n.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){var e,n,o=t.data,a=t.favoriteBooks,i=o.id,c=o.volumeInfo,l=c.title,s=c.imageLinks,f=(e=(0,r.useState)(!1),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=f[0],b=f[1];return(0,r.useEffect)((function(){a.filter((function(t){return t.data.id===i})).length&&b(!0)})),r.createElement("div",null,r.createElement("div",{className:m?"book__card borderFavorite":"book__card"},r.createElement("img",{src:void 0===s?"":"".concat(s.thumbnail)}),r.createElement("p",null,l.length>15?l.substr(0,15)+"...":l),m?r.createElement("button",{className:"book__button btn-favorite",type:"submit",onClick:function(){return function(e){t.deleteFavorite(e),b(!1)}(i)}},"FAVORITE"):r.createElement("button",{className:"book__button",type:"submit",onClick:function(){t.setFavorite({data:o}),b(!0)}},"FAVORITE")))};l.propTypes={favorite:c().bool,imageLinks:c().object,title:c().string},l.displayName="Book";var s={setFavorite:a.oW,deleteFavorite:a.r7};e.Z=(0,o.$j)((function(t){return{favoriteBooks:t.favoriteBooks}}),s)(l)},4144:function(t,e,n){"use strict";n.d(e,{Gj:function(){return a},bQ:function(){return i},ty:function(){return c}});var r="https://www.googleapis.com/books/v1/volumes?q=",o="&key=AIzaSyDXrl1PB2RFqlCofGfp2kPur3zV88E-8gY",a=function(t){return"".concat(r).concat(t).concat(o,"&maxResults=15")},i=function(t){return"".concat(r).concat(t).concat(o,"&maxResults=9")},c="https://media.tenor.com/images/e791327361a8ed1c377aacfce9f52251/tenor.gif"},6036:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(7294),o=n(4144),a=n(5216),i=n(9669),c=n.n(i);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=n(5697),f=n.n(s),m=function(){var t=function(){var t=u((0,r.useState)(""),2),e=t[0],n=t[1],a=u((0,r.useState)([]),2),i=a[0],l=a[1],s=u((0,r.useState)(!1),2),f=s[0],m=s[1];return{handleChange:function(t){t.preventDefault();var e=t.target.value;n(e)},handleSubmit:function(t){t.preventDefault();var n=e;c().get((0,o.Gj)(n)).then((function(t){l(t.data.items),m(!0)}))},result:i,doneFetch:f}}(),e=t.handleChange,n=t.handleSubmit,i=t.result,l=t.doneFetch;return r.createElement("div",{className:"booklist__container"},r.createElement("div",{className:"booklist__box"},r.createElement("h1",{className:"booklist_title"},"Search some books"),r.createElement("form",{onSubmit:n,className:"booklist__form"},r.createElement("input",{autoComplete:"none",className:"booklist_input",type:"text",placeholder:"Search a book",onChange:e}),r.createElement("button",{type:"submit",className:"booklist__button"},r.createElement("i",{class:"fas fa-search"})))),r.createElement("div",{className:"booklist__searched-container"},l?i.map((function(t){return r.createElement(a.Z,{key:t,data:t})})):r.createElement("img",{className:"booklist__gif",src:o.ty,alt:"Not results"})))};m.propTypes={doneFetch:f().bool,result:f().array};var b=m,d=function(){return r.createElement("div",null,r.createElement(b,null))}}}]);
//# sourceMappingURL=36.bundle.js.map