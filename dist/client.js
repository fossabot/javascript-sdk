!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("Selz",["exports"],e):e((t=t||self).Selz={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(t){return null!=t?t.constructor:null},f=function(t,e){return!!(t&&e&&t instanceof e)},l=function(t){return Array.isArray(t)},v=function(t){return s(t)===Object},d=function(t){return s(t)===String},h=function(t){return null==t},g=function(t){return h(t)||(d(t)||l(t))&&!t.length||v(t)&&!Object.keys(t).length},p=l,y=v,w=function(t){return s(t)===Number&&!Number.isNaN(t)},b=d,m=function(t){return d(t)&&/^[a-f\d]{24}$/i.test(t)},O=function(t){return d(t)&&/^[A-z]{3}$/.test(t)},j=function(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(f(t,window.URL))return!0;var n=t;e||/^https?:\/\/*/.test(t)||(n="http://".concat(t));try{return!g(new URL(n).hostname)}catch(t){return!1}},C=g,k=function t(e){n(this,t),Object.assign(this,e)},S=function t(e){n(this,t),Object.assign(this,e)},A=function t(e){n(this,t),Object.assign(this,e),this.cover=new S(e.cover)},P=function t(e){n(this,t),Object.assign(this,e)},E=function t(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";n(this,t),Object.assign(this,e),this.selected=e.id===r},I=function t(e,r){n(this,t),this.id=e,this.label=r},q=function t(e){n(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map((function(t){return new I(t,e.options[t])}))},x=null,z=function(){function t(e,r){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";if(n(this,t),y(r)){if(x=e,Object.assign(this,r),this.store=x.store,y(r.urls)&&(this.urls=new P(r.urls)),y(r.media)&&(this.media=new A(r.media)),p(r.images)&&(this.images=r.images.map((function(t){return new S(t)}))),p(r.files)&&(this.files=r.files.map((function(t){return new k(t)}))),r.hasVariants){var o=C(i)?r.variants[0].id:i;this.variants=r.variants.map((function(t){return new E(t,o)}))}r.hasVariantAttributes&&(this.variantAttributes=r.variantAttributes.map((function(t){return new q(t)})))}}return i(t,[{key:"selectedVariant",get:function(){return C(this.variants)?null:this.variants.find((function(t){return t.selected}))}}]),t}(),U=function t(e,r,i){n(this,t),this.cartId=i,Object.assign(this,r),this.product=new z(e,r.product,r.variantId)},T=null,_=function(){function t(e,r){var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];n(this,t),null===r||(T=e,Object.assign(this,r),this.store=T.store,this.active=i,this.items=Array.from(r.items).map((function(t){return new U(T,t,r.id)})))}return i(t,[{key:"add",value:function(t){return T.addToCart(this.id,t)}},{key:"remove",value:function(t){return T.removeFromCart(this.id,t)}}]),t}(),D=function t(e){n(this,t),this.productId=null,this.variantId=null,this.quantity=1,this.discountCode=null,this.buyersUnitPrice=null,(function(t){return!C(t)&&t instanceof z}(e)||y(e))&&(this.productId=e.id,this.variantId=m(e.variant)?e.variant:null)},N=function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;n(this,t),y(e)&&Object.assign(this,e)},L=function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;n(this,t),y(e)&&Object.assign(this,e)},R=function(t){return"https://".concat(C(t)||"selz.com"===t?"sdk.selz.com":"".concat(t,"/sdk"),"/")},F={product:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"products/find?url=").concat(e)},products:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1;return"".concat(R(t),"products/all/").concat(e,"?q=").concat(n,"&c=").concat(r,"&p=").concat(i)},categories:function(t,e){return"".concat(R(t),"categories/").concat(e)},store:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return w(e)?"".concat(R(t),"store/find/").concat(e):"".concat(R(t),"store/find?url=").concat(e)},buy:function(t){return"".concat(R(t),"cart/buy")},createCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/create/").concat(e)},getCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/").concat(e)},checkCarts:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/verify?ids=").concat(e)},addToCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/add/").concat(e)},updateCartItemQuantity:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/updateitemquantity/").concat(e)},removeFromCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(R(t),"cart/remove/").concat(e)}},K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var J=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var e,n,r,i,o,c,a,u,s,f,l,v,d,h,g;e=K,n=function(t,e,r){if(!u(e)||f(e)||l(e)||v(e)||a(e))return e;var i,o=0,c=0;if(s(e))for(i=[],c=e.length;o<c;o++)i.push(n(t,e[o],r));else for(var d in i={},e)Object.prototype.hasOwnProperty.call(e,d)&&(i[t(d,r)]=n(t,e[d],r));return i},r=function(t){return d(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1)},i=function(t){var e=r(t);return e.substr(0,1).toUpperCase()+e.substr(1)},o=function(t,e){return function(t,e){var n=(e=e||{}).separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)}(t,e).toLowerCase()},c=Object.prototype.toString,a=function(t){return"function"==typeof t},u=function(t){return t===Object(t)},s=function(t){return"[object Array]"==c.call(t)},f=function(t){return"[object Date]"==c.call(t)},l=function(t){return"[object RegExp]"==c.call(t)},v=function(t){return"[object Boolean]"==c.call(t)},d=function(t){return(t-=0)==t},h=function(t,e){var n=e&&"process"in e?e.process:e;return"function"==typeof n?function(e,r){return n(e,t,r)}:t},g={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(t,e){return n(h(r,e),t)},decamelizeKeys:function(t,e){return n(h(o,e),t,e)},pascalizeKeys:function(t,e){return n(h(i,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},t.exports?t.exports=g:e.humps=g}));function $(t){return JSON.parse(JSON.stringify(t))}function M(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();return y(i)?(Object.keys(i).forEach((function(e){y(i[e])?(!Object.keys(t).includes(e)&&Object.assign(t,o({},e,{})),M(t[e],i[e])):Object.assign(t,o({},e,i[e]))})),M.apply(void 0,[t].concat(n))):t}function Q(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){try{e(JSON.parse(t))}catch(t){n(t)}}))}function V(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}function B(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return t.toString().replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}function G(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=t.toString();return e=V(e,"-"," "),e=V(e,"_"," "),V(e=B(e)," ","")}var H=function(){var t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0,i=2<arguments.length?arguments[2]:void 0,o=r||new FormData,c=null;try{c=$(n)}catch(t){return o}return y(c)?(Object.keys(c).forEach((function(r){t=i?"".concat(i,"[").concat(r,"]"):r,"object"!==e(n[r])||n[r]instanceof File?o.append(G(t),n[r]):H(n[r],o,r)})),o):o},X={type:"GET",body:{},responseType:"json"};function Z(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=M({},X,e),r=n.type,i=n.body,o=n.responseType;return new Promise((function(e,n){try{var c=new XMLHttpRequest;if(!("withCredentials"in c)){var a=new Error("No CORS support");throw a.request=c,a}var u=function(){var t=new Error(c.status);t.request=c,n(t)};c.addEventListener("load",(function(){var t=c.response;return 400<=c.status?void u():void("json"===o?Q(t).then((function(t){if(t.success){var r=J.camelizeKeys(t.data);e(r)}else{var i=new Error("Request failed");i.errors=t.errors,n(i)}})).catch(n):e(t))})),c.addEventListener("error",u),c.open(r,t,!0),"json"!==o&&(c.responseType=o),c.send(H(i))}catch(t){n(t)}}))}var W={},Y=function(t){if(!Object.keys(W).includes(t)){W[t]=Z(t);var e=function(){delete W[t]};W[t].then(e).catch(e)}return W[t]},tt=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Z(t,{type:"POST",body:e})};function et(t){return p(t)?t.filter((function(e,n){return t.indexOf(e)===n})):t}var nt=new Map,rt=function(t){if(null===t)return null;var e=function(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://".concat(t));try{return new URL(e)}catch(t){return null}}(t);return null===e?null:"".concat(e.host).concat(e.pathname).replace(/\/$/,"")},it=function(){function t(e){n(this,t),this.config=a({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return i(t,[{key:"get",value:function(e){var n=nt.get(this.config.keys.root);if(t.supported){var r=window.localStorage.getItem(this.config.keys.root);C(r)||(n=JSON.parse(r))}return C(n)?null:C(e)?n:Object.keys(n).includes(e)?n[e]:null}},{key:"set",value:function(e,n){var r=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=this.get()||{};if(i[e]=r&&Object.keys(i).includes(e)?M(i[e],n):n,nt.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!C(t)){if(+t.schema!==this.config.schema)return void window.localStorage.removeItem(this.config.keys.root);var e=this.get(this.config.keys.stores)||[];C(e)||this.set(this.config.keys.stores,e.filter((function(t){var e=+t.ttl;return 0<e&&e>Date.now()})))}}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return C(e)?null:w(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var n=this.getCarts(t);return C(n)?null:b(e)?Object.keys(n).includes(e.toUpperCase())?n[e.toUpperCase()]:null:n}},{key:"setCart",value:function(t,e,n){this.set(this.config.keys.carts,o({},t,o({},e.toUpperCase(),{id:n.id,active:n.active})),!0)}},{key:"setCarts",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,o({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!w(t)&&!j(t))return null;var n=this.get(this.config.keys.stores)||[];if(w(t))e=n.find((function(e){return y(e.data)&&e.data.id===t}));else if(j(t)){var r=rt(t);if(null===r)return null;e=n.find((function(t){return p(t.urls)&&t.urls.includes(r)}))}if(!y(e))return null;var i=+e.ttl;return 0<i&&i<Date.now()?(this.purge(),null):new L(e.data)}},{key:"setStore",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=rt(e),r=this.get(this.config.keys.stores)||[],i=null;C(r)||(i=r.find((function(e){return e.data.id===t.id})));var o=Date.now()+this.config.ttl;if(y(i)){if(Object.assign(i,{data:t,ttl:o}),null!==n){p(i.urls)?i.urls.push(n):i.urls=[n];var c=et(i.urls);Object.assign(i,{urls:c})}}else{var a={data:t,ttl:o};null!==n&&Object.assign(a,{urls:[n]}),r.push(a)}this.set(this.config.keys.stores,r)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;try{return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(t){return!1}}}]),t}(),ot=function(){function t(e){n(this,t);var r=e.env,i=e.store,o=e.source;if(this.env=C(r)?"":r,this.store=i,this.source=o,!j(i)&&!w(i))throw Error("A store ID or URL is required to create a client");this.storage=new it}return i(t,[{key:"getStoreId",value:function(){var t=this;return new Promise((function(e,n){return w(t.store)?void e(t.store):t.store instanceof L?void e(t.store.id):(!j(t.store)&&n(new Error("Url is required for user lookup")),void t.getStore().then((function(t){e(t.id)})).catch(n))}))}},{key:"getStore",value:function(){var t=this;return new Promise((function(e,n){if(w(t.store)||j(t.store)){var r=t.storage.getStore(t.store);if(null!==r&&r instanceof L)return void e(r)}if(t.store instanceof L)e(t.store);else{var i=F.store(t.env,t.store);Y(i).then((function(n){t.setStore(n),e(t.store)})).catch(n)}}))}},{key:"setStore",value:function(t){if(y(t)){var e=j(this.store)?this.store:null;this.store=new L(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise((function(n,r){Y(F.product(e.env,t)).then((function(t){e.store instanceof L||e.setStore(t.store),n(new z(e,t))})).catch(r)}))}},{key:"getProducts",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return new Promise((function(i,o){t.getStoreId().then((function(c){Y(F.products(t.env,c,C(e)?"":e,b(n)?n:"",!w(r)||1>r?1:r)).then((function(e){i(a({},e,{products:e.products.map((function(e){return new z(t,e)}))}))})).catch(o)})).catch(o)}))}},{key:"getCategories",value:function(){var t=this;return new Promise((function(e,n){t.getStoreId().then((function(r){Y(F.categories(t.env,r)).then((function(t){e(a({},t,{categories:t.categories.map((function(t){return new N(t)}))}))})).catch(n)})).catch(n)}))}},{key:"buy",value:function(t){var e=this;return new Promise((function(n,r){if(C(t))r(new Error("A cart item is required"));else{var i=t;(y(t)||t instanceof z)&&(i=new D(t)),i instanceof D||r(new Error("A valid cart item is required")),tt(F.buy(e.env),i).then((function(t){var r=new _(e,t,!0);e.setStore(r.store),n(r)})).catch(r)}}))}},{key:"createCart",value:function(t,e){var n=this;return new Promise((function(r,i){return C(t)?void i(new Error("currency is required")):void n.getStoreId().then((function(o){var c=t.toUpperCase();tt(F.createCart(n.env,o),{currency:c,discount:C(e)?null:e,source:n.source}).then((function(t){var e=new _(n,t);n.storage.setCart(o,c,e),r(e)})).catch(i)})).catch(i)}))}},{key:"getCartId",value:function(t){var e=this;return new Promise((function(n,r){return O(t)?void e.getStoreId().then((function(i){var o=t.toUpperCase(),c=e.storage.getCart(i,o);C(c)?e.createCart(o).then((function(t){return n(t.id)})).catch(r):n(c.id)})).catch(r):void r(new Error("A valid currency code is required"))}))}},{key:"getCart",value:function(t){var e=this;return new Promise((function(n,r){var i=O(t),o=m(t);if(i||o)if(i){var c=t.toUpperCase();e.getCartId(c).then((function(t){return C(t)?void r(new Error("Could not find matching cart for currency code '".concat(c,"'"))):void e.getCart(t).then((function(t){e.setStore(t.store),n(t)})).catch(r)})).catch(r)}else Y(F.getCart(e.env,t)).then((function(t){var r=e.getActiveCart(),i=new _(e,t,t.id===r);e.setStore(i.store),n(i)})).catch(r);else r(new Error("A valid currency code or cart id are required"))}))}},{key:"getCarts",value:function(){var t=this,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return new Promise((function(n,r){t.getStoreId().then((function(i){var o=t.storage.getCarts(i);if(C(o))n(null);else if(e){var c=Object.keys(o).map((function(t){return o[t].id}));Y(F.checkCarts(t.env,c.join(","))).then((function(e){Object.entries(e).forEach((function(t){var e=u(t,2),n=e[0];if(!e[1]){var r=Object.keys(o).find((function(t){return o[t].id===n}));delete o[r]}})),t.storage.setCarts(i,o),Object.values(o).find((function(t){return t.active}))?n(o):t.setActiveCart().then(n).catch(r)})).catch(r)}else n(o)})).catch(r)}))}},{key:"setActiveCart",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(n,r){t.getStoreId().then((function(i){t.getCarts(!1).then((function(o){var c=o;if(C(c))n(null);else{if(O(e)){var a=e.toUpperCase(),u=Object.keys(c);if(!u.includes(a))return void r(new Error("No carts for ".concat(a)));u.forEach((function(t){c[t].active=t===a}))}else{var s=m(e)?e:c[Object.keys(c)[0]].id;Object.keys(c).forEach((function(t){var e=c[t];e.active=e.id===s}))}t.storage.setCarts(i,c),n(c)}}))})).catch(r)}))}},{key:"getActiveCart",value:function(){var t=this,e=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];return new Promise((function(n,r){t.getStoreId().then((function(i){var o=t.storage.getCarts(i);if(Object.keys(o).length){var c=Object.values(o).find((function(t){return t.active}));return c?e?void t.getCart(c.id).then(n).catch(r):void n(c.id):void n(null)}n(null)})).catch(r)}))}},{key:"addToCart",value:function(t,e){var n=this;return new Promise((function(r,i){if(m(t))if(C(e))i(new Error("A cart item is required"));else{var o=e;(y(e)||e instanceof z)&&(o=new D(e)),o instanceof D||i(new Error("A valid cart item is required")),tt(F.addToCart(n.env,t),o).then((function(t){var e=new _(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then((function(){r(e)})).catch(i)})).catch(i)}else i(new Error("A valid id is required"))}))}},{key:"updateCartItemQuantity",value:function(t,e){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return new Promise((function(i,o){return m(t)?C(e)?void o(new Error("A valid index is required")):void tt(F.updateCartItemQuantity(n.env,t),{index:e,quantity:r}).then((function(t){var e=new _(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then((function(){i(e)})).catch(o)})).catch(o):void o(new Error("A valid id is required"))}))}},{key:"removeFromCart",value:function(t,e){var n=this;return new Promise((function(r,i){return m(t)?C(e)?void i(new Error("A valid index is required")):void tt(F.removeFromCart(n.env,t),{index:e}).then((function(t){if(C(t))n.getCarts().then((function(){return r(null)})).catch(i);else{var e=new _(n,t,!0);n.setActiveCart(e.id).then((function(){r(e)})).catch(i)}})).catch(i):void i(new Error("A valid id is required"))}))}}]),t}();t.Cart=_,t.CartAddItem=D,t.CartItem=U,t.Category=N,t.Product=z,t.Store=L,t.default=ot,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=client.js.map
