/*! ******************************************************************************* 
   Package Name: fl-platform-player
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flPlatformPlayer=function(e,r,t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function n(e,r,t,n){return new(t||(t=Promise))((function(a,i){function u(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(u,o)}l((n=n.apply(e,r||[])).next())}))}function a(e,r){var t,n,a,i,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(e,u)}catch(e){i=[6,e],n=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}return Object.defineProperty(e,"BufferUtils",{enumerable:!0,get:function(){return r.BufferUtils}}),Object.defineProperty(e,"ExternalPlayer",{enumerable:!0,get:function(){return r.ExternalPlayer}}),Object.defineProperty(e,"PlayerErrorCodes",{enumerable:!0,get:function(){return r.PlayerErrorCodes}}),Object.defineProperty(e,"StringUtils",{enumerable:!0,get:function(){return r.StringUtils}}),Object.defineProperty(e,"Uint8ArrayUtils",{enumerable:!0,get:function(){return r.Uint8ArrayUtils}}),Object.defineProperty(e,"createComposablePlayer",{enumerable:!0,get:function(){return r.createComposablePlayer}}),Object.defineProperty(e,"createPlayerBuilder",{enumerable:!0,get:function(){return r.createPlayerBuilder}}),Object.defineProperty(e,"createUVPPlayerBuilder",{enumerable:!0,get:function(){return r.createUVPPlayerBuilder}}),Object.defineProperty(e,"createWebMafPlayerBuilder",{enumerable:!0,get:function(){return r.createWebMafPlayerBuilder}}),e.getLicenseHandler=function(e){return n(this,void 0,void 0,(function(){var r,n;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,e.ensureAuthorization()];case 1:return r=a.sent(),t.isError(r)?[2,Promise.reject(r)]:[2,{licenseRequestHandler:function(e){if(!e.headers&&"query"===e.authToken&&e.uris&&e.uris.length>0){var t=e.uris[0].indexOf("?")>=0?"&":"?";e.uris[0]+=t+"authorization="+r.accessToken}else e.headers.Authorization="Bearer "+r.accessToken},licenseResponseHandler:function(e){}}];case 2:return n=a.sent(),[2,Promise.reject(n)];case 3:return[2]}}))}))},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flPlayer,flFoundation);

