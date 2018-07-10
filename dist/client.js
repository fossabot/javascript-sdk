!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("index",e):t.index=e()}(this,function(){"use strict";var t=function(t){return null!==t&&void 0!==t?t.constructor:null},e=function(t){return Array.isArray(t)},n=function(e){return t(e)===Object},r=function(e){return t(e)===String},i=function(t){return null===t||void 0===t},o=function(t){return i(t)||(r(t)||e(t))&&!t.length||n(t)&&!Object.keys(t).length},a={array:e,object:n,number:function(e){return t(e)===Number&&!Number.isNaN(e)},string:r,boolean:function(e){return t(e)===Boolean},function:function(e){return t(e)===Function},nullOrUndefined:i,objectId:function(t){return r(t)&&/^[a-f\d]{24}$/i.test(t)},currencyCode:function(t){return r(t)&&/^[A-z]{3}$/.test(t)},url:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(t,e){return Boolean(t&&e&&t instanceof e)}(t,window.URL))return!0;var n=t;e||/^https?:\/\/*/.test(t)||(n="http://"+t);try{return!o(new URL(n).hostname)}catch(t){return!1}},empty:o};function u(t){return"https://"+(a.empty(t)?"":t+"-")+"selz.com/sdk/"}var c={product:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"products/find?url="+e},products:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return u(t)+"products/all"+e+"?q="+n+"&p="+r},store:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a.number(e)?u(t)+"store/find/"+e:u(t)+"store/find?url="+e},createCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/create/"+e},getCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/"+e},checkCarts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/verify?ids="+e},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/add/"+e},updateCartItemQuantity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/updateitemquantity/"+e},removeFromCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return u(t)+"cart/remove/"+e}},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},d=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=null,g=function t(e){f(this,t),Object.assign(this,e)},y=function t(e){f(this,t),Object.assign(this,e)},m=function t(e){f(this,t),Object.assign(this,e),this.cover=new y(e.cover)},p=function t(e){f(this,t),Object.assign(this,e)},b=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";f(this,t),Object.assign(this,e),this.selected=e.id===n},w=function t(e){f(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map(function(t){return new function t(e,n){f(this,t),this.id=e,this.label=n}(t,e.options[t])})},j=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(f(this,t),a.object(n)){if(v=e,Object.assign(this,n),this.store=v.store,a.object(n.urls)&&(this.urls=new g(n.urls)),a.object(n.media)&&(this.media=new m(n.media)),a.array(n.images)&&(this.images=n.images.map(function(t){return new y(t)})),a.array(n.files)&&(this.files=n.files.map(function(t){return new p(t)})),a.array(n.variants)&&n.variants.length){var i=a.empty(r)?n.variants[0].id:r;this.variants=n.variants.map(function(t){return new b(t,i)})}a.array(n.variant_attributes)&&n.variant_attributes.length&&(this.variant_attributes=n.variant_attributes.map(function(t){return new w(t)}))}}return l(t,[{key:"featured_image",get:function(){return this.images.find(function(t){return t.is_featured})}},{key:"is_sold_out",get:function(){return 0===this.quantity_available}},{key:"selected_variant",get:function(){return a.empty(this.variants)?null:this.variants.find(function(t){return t.selected})}}]),t}(),k=null,C=function t(e,n){var r=this;f(this,t),this.cartId=n;var i=e.quantity;Object.assign(this,e,{_setQuantity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i=t,k.updateCartItemQuantity(r.cartId,r.index,t)},_getQuantity:function(){return i},get quantity(){return this._getQuantity()},set quantity(t){this._setQuantity(t)}}),this.product=new j(k,e.product,e.variant_id)},S=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];f(this,t),null!==n&&(k=e,Object.assign(this,n),this.store=k.store,this.active=r,this.items=Array.from(n.items).map(function(t){return new C(t,n.id)}))}return l(t,[{key:"add",value:function(t){return k.addToCart(this.id,t)}},{key:"remove",value:function(t){return k.removeFromCart(this.id,t)}}]),t}(),O=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;f(this,t),a.object(e)&&Object.assign(this,e)};function I(t,e){var n={mode:"cors",redirect:"follow"};return new Promise(function(r,i){var o=new Request(t,Object.assign(n,e));o.headers.append("Accept","application/json"),fetch(o).then(function(t){if(!(t.status>=200&&t.status<300)){var e=new Error(t.status);throw e.response=t,e}try{t.json().then(function(t){if(!t.success){var e=new Error("Request failed");throw e.errors=t.errors,e}r(t.data)}).catch(i)}catch(e){throw e}}).catch(i)})}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}var E=function t(e,n,r){var i=n||new FormData,o=void 0;return a.object(e)?(Object.keys(e).forEach(function(n){o=r?r+"["+n+"]":n,"object"!==s(e[n])||e[n]instanceof File?i.append(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return A(t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}(t=A(t=A(t,"-"," "),"_"," "))," ","")}(o),e[n]):t(e[n],i,n)}),i):i},q={},P=function(t){if(!Object.keys(q).includes(t)){q[t]=I(t);var e=function(){delete q[t]};q[t].then(e).catch(e)}return q[t]},_=function(t,e){var n={method:"POST"};return a.object(e)&&(n.body=E(e)),I(t,n)};var U=new Map,x=function(t){if(null===t)return null;var e=function(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://"+t);try{return new URL(e)}catch(t){return null}}(t);return null===e?null:(""+e.host+e.pathname).replace(/\/$/,"")},N=function(){function t(e){f(this,t),this.config=Object.assign({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return l(t,[{key:"get",value:function(e){var n=U.get(this.config.keys.root);if(t.supported){var r=window.localStorage.getItem(this.config.keys.root);a.empty(r)||(n=JSON.parse(r))}return a.empty(n)?null:a.empty(e)?n:Object.keys(n).includes(e)?n[e]:null}},{key:"set",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.get()||{};if(r&&Object.keys(i).includes(e)?i[e]=function t(){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!n.length)return i;var o=n.shift();return a.object(o)?(Object.keys(o).forEach(function(e){a.object(o[e])?(Object.keys(i).includes(e)||Object.assign(i,h({},e,{})),t(i[e],o[e])):Object.assign(i,h({},e,o[e]))}),t.apply(void 0,[i].concat(n))):i}(i[e],n):i[e]=n,U.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!a.empty(t))if(Number(t.schema)===this.config.schema){var e=this.get(this.config.keys.stores)||[];a.empty(e)||this.set(this.config.keys.stores,e.filter(function(t){var e=Number(t.ttl);return e>0&&e>Date.now()}))}else window.localStorage.removeItem(this.config.keys.root)}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return a.empty(e)?null:a.number(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var n=this.getCarts(t);return a.empty(n)?null:a.string(e)?Object.keys(n).includes(e.toUpperCase())?n[e.toUpperCase()]:null:n}},{key:"setCart",value:function(t,e,n){this.set(this.config.keys.carts,h({},t,h({},e.toUpperCase(),{id:n.id,active:n.active})),!0)}},{key:"setCarts",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,h({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!a.number(t)&&!a.url(t))return null;var n=this.get(this.config.keys.stores)||[];if(a.number(t))e=n.find(function(e){return a.object(e.data)&&e.data.id===t});else if(a.url(t)){var r=x(t);if(null===r)return null;e=n.find(function(t){return a.array(t.urls)&&t.urls.includes(r)})}if(!a.object(e))return null;var i=Number(e.ttl);return i>0&&i<Date.now()?(this.purge(),null):new O(e.data)}},{key:"setStore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=x(e),r=this.get(this.config.keys.stores)||[],i=null;a.empty(r)||(i=r.find(function(e){return e.data.id===t.id}));var o,u=Date.now()+this.config.ttl;if(a.object(i)){if(Object.assign(i,{data:t,ttl:u}),null!==n){a.array(i.urls)?i.urls.push(n):i.urls=[n];var c=(o=i.urls,a.array(o)?o.filter(function(t,e){return o.indexOf(t)===e}):o);Object.assign(i,{urls:c})}}else{var s={data:t,ttl:u};null!==n&&Object.assign(s,{urls:[n]}),r.push(s)}this.set(this.config.keys.stores,r)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;var t="___test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}}]),t}();return{SelzClient:function(){function t(e){f(this,t);var n=e.env,r=e.store;if(this.env=a.empty(n)?"":n,this.store=r,!a.url(r)&&!a.number(r))throw Error("A store ID or URL is required to create a client");this.storage=new N}return l(t,[{key:"getStoreId",value:function(){var t=this;return new Promise(function(e,n){a.number(t.store)?e(t.store):t.store instanceof O?e(t.store.id):(a.url(t.store)||n(new Error("Url is required for user lookup")),t.getStore().then(function(t){e(t.id)}).catch(n))})}},{key:"getStore",value:function(){var t=this;return new Promise(function(e,n){if(a.number(t.store)||a.url(t.store)){var r=t.storage.getStore(t.store);if(null!==r&&r instanceof O)return void e(r)}if(t.store instanceof O)e(t.store);else{var i=c.store(t.env,t.store);P(i).then(function(n){t.setStore(n),e(t.store)}).catch(n)}})}},{key:"setStore",value:function(t){if(a.object(t)){var e=a.url(this.store)?this.store:null;this.store=new O(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise(function(n,r){P(c.product(e.env,t)).then(function(t){e.store instanceof O||e.setStore(t.store),n(new j(e,t))}).catch(r)})}},{key:"getProducts",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(r,i){t.getStoreId().then(function(o){P(c.products(t.env,o,e,n<1?1:n)).then(function(e){r(e.map(function(e){return new j(t,e)}))}).catch(i)}).catch(i)})}},{key:"createCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.empty(t)?i(new Error("currency is required")):n.getStoreId().then(function(o){var u=t.toUpperCase();_(c.createCart(n.env,o),{currency:u,discount:a.empty(e)?null:e}).then(function(t){var e=new S(n,t);n.storage.setCart(o,u,e),r(e)}).catch(i)}).catch(i)})}},{key:"getCartId",value:function(t){var e=this;return new Promise(function(n,r){a.currencyCode(t)?e.getStoreId().then(function(i){var o=t.toUpperCase(),u=e.storage.getCart(i,o);a.empty(u)?e.createCart(o).then(function(t){return n(t.id)}).catch(r):n(u.id)}).catch(r):r(new Error("A valid currency code is required"))})}},{key:"getCart",value:function(t){var e=this;return new Promise(function(n,r){var i=a.currencyCode(t),o=a.objectId(t);if(i||o)if(i){var u=t.toUpperCase();e.getCartId(u).then(function(t){a.empty(t)?r(new Error("Could not find matching cart for currency code '"+u+"'")):e.getCart(t).then(function(t){e.setStore(t.store),n(t)}).catch(r)}).catch(r)}else P(c.getCart(e.env,t)).then(function(t){var r=e.getActiveCart(),i=new S(e,t,t.id===r);e.setStore(i.store),n(i)}).catch(r);else r(new Error("A valid currency code or cart id are required"))})}},{key:"getCarts",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(a.empty(o))n(null);else if(e){var u=Object.keys(o).map(function(t){return o[t].id});P(c.checkCarts(t.env,u.join(","))).then(function(e){Object.entries(e).forEach(function(t){var e=d(t,2),n=e[0];if(!e[1]){var r=Object.keys(o).find(function(t){return o[t].id===n});delete o[r]}}),t.storage.setCarts(i,o),Object.values(o).find(function(t){return t.active})?n(o):t.setActiveCart().then(n).catch(r)}).catch(r)}else n(o)}).catch(r)})}},{key:"setActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(n,r){t.getStoreId().then(function(i){t.getCarts(!1).then(function(o){var u=o;if(a.empty(u))n(null);else{if(a.currencyCode(e)){var c=e.toUpperCase(),s=Object.keys(u);if(!s.includes(c))return void r(new Error("No carts for "+c));s.forEach(function(t){u[t].active=t===c})}else{var f=a.objectId(e)?e:u[Object.keys(u)[0]].id;Object.keys(u).forEach(function(t){var e=u[t];e.active=e.id===f})}t.storage.setCarts(i,u),n(u)}})}).catch(r)})}},{key:"getActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(Object.keys(o).length){var a=Object.values(o).find(function(t){return t.active});a?e?t.getCart(a.id).then(n).catch(r):n(a.id):n(null)}else n(null)}).catch(r)})}},{key:"addToCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.objectId(t)?a.empty(e)?i(new Error("A valid product is required")):_(c.addToCart(n.env,t),e).then(function(t){var e=new S(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}).catch(i):i(new Error("A valid id is required"))})}},{key:"updateCartItemQuantity",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,o){a.objectId(t)?a.empty(e)?o(new Error("A valid index is required")):_(c.updateCartItemQuantity(n.env,t),{index:e,quantity:r}).then(function(t){var e=new S(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){i(e)}).catch(o)}).catch(o):o(new Error("A valid id is required"))})}},{key:"removeFromCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.objectId(t)?a.empty(e)?i(new Error("A valid index is required")):_(c.removeFromCart(n.env,t),{index:e}).then(function(t){if(a.empty(t))n.getCarts().then(function(){return r(null)}).catch(i);else{var e=new S(n,t,!0);n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}}).catch(i):i(new Error("A valid id is required"))})}}]),t}(),Product:j,Cart:S,Store:O}});

//# sourceMappingURL=client.js.map
