/*! ******************************************************************************* 
   Package Name: fl-favourites
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flFavourites=function(e,t,r){"use strict";
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
    ***************************************************************************** */function n(e,t,r,n){return new(r||(r=Promise))((function(u,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?u(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}s((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,u,i,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(u=2&i[0]?n.return:i[0]?n.throw||((u=n.return)&&u.call(n),0):n.next)&&!(u=u.call(n,i[1])).done)return u;switch(n=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(u=o.trys,(u=u.length>0&&u[u.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){o.label=i[1];break}if(6===i[0]&&o.label<u[1]){o.label=u[1],u=i;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(i);break}u[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i;e.SortOrder=void 0,(i=e.SortOrder||(e.SortOrder={}))[i.ASC=0]="ASC",i[i.DESC=1]="DESC",e.SortBy=void 0,(e.SortBy||(e.SortBy={})).TIMESTAMP="ut";return e.createFavouriteService=function(e,i){function o(r){return t.createRequestBuilder().url(e).path(r).get().build()}function a(r){return t.createRequestBuilder().url(e).path("/user/favorite/delete/"+r).delete("").build()}function s(e){var t=[];return e.data.forEach((function(e){var r={contentId:e.itemId,timestamp:e.ut};t.push(r)})),t}return{getFavourites:function(o,a,c,l){return function(o,a,c,l){return n(this,void 0,void 0,(function(){var n,f,h;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),n={},o&&(n.pageNumber=o),a&&(n.pageSize=a),c&&(n.sort=c),l&&(n.order=l),f=t.createRequestBuilder().url(e).path("/user/favorite/list").get().queryParameters(n).build(),[4,r.AuthorizationUtil.makeAuthorizedRequest(f,i)];case 1:return[2,s(u.sent())];case 2:return h=u.sent(),[2,Promise.reject(h)];case 3:return[2]}}))}))}(o,a,c,l)},getFavourite:function(e){return function(e){return n(this,void 0,void 0,(function(){var t,n;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),t="/user/favorite/lookup/"+e,[4,r.AuthorizationUtil.makeAuthorizedRequest(o(t),i)];case 1:return[2,{contentId:u.sent().data.itemId}];case 2:return n=u.sent(),[2,Promise.reject(n)];case 3:return[2]}}))}))}(e)},putFavourite:function(o){return function(o){return n(this,void 0,void 0,(function(){var n,a;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),n=function(r){var n={itemId:r};return t.createRequestBuilder().url(e).path("/user/favorite/create").put(n).build()}(o),[4,r.AuthorizationUtil.makeAuthorizedRequest(n,i)];case 1:return u.sent(),[2,Promise.resolve()];case 2:return a=u.sent(),[2,Promise.reject(a)];case 3:return[2]}}))}))}(o)},deleteFavourite:function(e){return function(e){return n(this,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,r.AuthorizationUtil.makeAuthorizedRequest(a(e),i)];case 1:return n.sent(),[2,Promise.resolve()];case 2:return t=n.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))}(e)},getFavouriteCount:function(){return function(){return n(this,void 0,void 0,(function(){var e,t;return u(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e="/user/favorite/count",[4,r.AuthorizationUtil.makeAuthorizedRequest(o(e),i)];case 1:return[2,n.sent().data];case 2:return t=n.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))}()}}},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flFoundation,flPlatformAuthorizer);

