/*! ******************************************************************************* 
   Package Name: fl-stream-concurrency
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flStreamConcurrency=function(e,t,r,n){"use strict";
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
    ***************************************************************************** */function o(e,t,r,n){return new(r||(r=Promise))((function(o,u){function i(e){try{a(n.next(e))}catch(e){u(e)}}function c(e){try{a(n.throw(e))}catch(e){u(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function i(e,t,i){var c=i&&i.maxRetries;return{putStreamForDeviceId:function(i){return function(i){return o(this,void 0,void 0,(function(){var o,a;return u(this,(function(u){try{return o={deviceId:i},a=r.createRequestBuilder().url(e).path("/user/stream/create").put(o).headers({accept:"application/json"}).build(),r.AsyncUtil.retryOnNetworkFailure((function(){return n.AuthorizationUtil.makeAuthorizedRequest(a,t)}),c),[2,Promise.resolve()]}catch(e){return[2,Promise.reject(e)]}return[2]}))}))}(i)},deleteStreamForDeviceId:function(i){return function(i){return o(this,void 0,void 0,(function(){var o,a;return u(this,(function(u){try{return o={deviceId:i},a=r.createRequestBuilder().url(e).path("/user/stream/delete/"+i).delete(o).headers({accept:"application/json"}).build(),r.AsyncUtil.retryOnNetworkFailure((function(){return n.AuthorizationUtil.makeAuthorizedRequest(a,t)}),c),[2,Promise.resolve()]}catch(e){return[2,Promise.reject(e)]}return[2]}))}))}(i)}}}return e.createStreamConcurrencyResolver=function(e,r,n,o){var u;void 0===o&&(o=i(r.endPointUrl,n));var c=r.syncIntervalMS||3e3,a=o,l=!1;function s(){clearInterval(u),u=void 0}return{get streamConcurrencyService(){return a},get deviceId(){return e},processPlayerStateChange:function(r){switch(r.playerState){case t.PLAYBACK_STATES.STARTED:!function(t){if(u)return;u=setInterval((function(){!function(t){a.putStreamForDeviceId(e).catch((function(e){t.abort(e),s()}))}(t)}),c)}(r),l=!1;break;case t.PLAYBACK_STATES.PAUSED:case t.PLAYBACK_STATES.IDLE:l||(a.deleteStreamForDeviceId(e).catch((function(e){})),l=!0),s()}}}},e.createStreamConcurrencyService=i,e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flPlayerInterface,flFoundation,flPlatformAuthorizer);

