/*! ******************************************************************************* 
   Package Name: fl-content-authorization
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flContentAuthorization=function(e,t,r){"use strict";
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
    ***************************************************************************** */function n(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{u(n.next(e))}catch(e){a(e)}}function c(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}u((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function a(e,a){return{registerDevice:function(o,c){return function(o,c){return n(this,void 0,void 0,(function(){var n,u,s;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=function(r,n){var i={uniqueId:r};n&&(i.castDeviceId=n);return t.createRequestBuilder().url(e).path("/device/app/register").post(i).build()}(o,c),[4,r.AuthorizationUtil.makeAuthorizedRequest(n,a)];case 1:return[2,{secret:(u=i.sent()).data.secret,expiry:u.data.expiry,deviceId:u.data.deviceId}];case 2:return s=i.sent(),[2,Promise.reject(s)];case 3:return[2]}}))}))}(o,c)}}}function o(e,a){return{renewLicense:function(o,c){return function(o,c){return n(this,void 0,void 0,(function(){var n,u,s;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=function(r,n){return t.createRequestBuilder().url(e).headers(Object.assign({},n)).path("/media/license/refresh").post(r).build()}(o,c),[4,r.AuthorizationUtil.makeAuthorizedRequest(n,a)];case 1:return[2,(u=i.sent()).data&&u.data.licenseUrl];case 2:return s=i.sent(),[2,Promise.reject(s)];case 3:return[2]}}))}))}(o,c)}}}var c,u,s="application/json";function d(e,a){return{authorizePlayback:function(o,c){var u=o;return o.castDeviceId&&(u.castDeviceId=o.castDeviceId),function(o,c,u){return n(this,void 0,void 0,(function(){var n,d,l;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=function(r,n,i){var a,o=((a={})["Content-Type"]=s,a["X-Device-Id"]=n,a);return t.createRequestBuilder().url(e).headers(Object.assign(o,i)).path("/media/content/authorize").post(r).build()}(o,c,u),[4,r.AuthorizationUtil.makeAuthorizedRequest(n,a)];case 1:return[2,{contentId:(d=i.sent()).data.contentId,contentUrl:d.data.contentUrl,drmLicenseUrl:d.data.licenseUrl,mediaType:d.data.mediaFormat,drmScheme:d.data.drm,licenseToken:d.data.licenseToken,skd:d.data.skd,subtitle:d.data.subtitle,cuepoints:d.data.cuepoints,fpCertificateUrl:d.data.fpCertificateUrl,licenseProvider:d.data.licenseProvider,heartbeatFlag:d.data.heartbeatFlag,heartbeatToken:d.data.heartbeatToken,heartbeatFreq:d.data.heartbeatFreq,blackoutUrl:d.data.blackoutUrl,blackoutAction:d.data.blackoutAction,ssaiEnabled:d.data.ssaiEnabled,liveStartTime:d.data.liveStartTime,liveEndTime:d.data.liveEndTime,livePlaybackMode:d.data.livePlaybackMode,liveEventType:d.data.liveEventType,preSlateContentUrl:d.data.preSlateContentUrl,postSlateContentUrl:d.data.postSlateContentUrl,licenseRefreshToken:d.data.licenseRefreshToken,preSlateStartTime:d.data.preSlateStartTime,preSlateEndTime:d.data.preSlateEndTime,postSlateStartTime:d.data.postSlateStartTime,postSlateEndTime:d.data.postSlateEndTime,keyframe:d.data.keyframe,streamId:d.data.streamId,issuedAt:r.AuthorizationUtil.platformServiceTime(),bumperSegment:d.data.bumperSegment,adType:d.data.adType,csaiAdCuePointVmap:d.data.csaiAdCuePointVmap,csaiAdCuePointVast:d.data.csaiAdCuePointVast}];case 2:return l=i.sent(),[2,Promise.reject(l)];case 3:return[2]}}))}))}(u,o.deviceToken,c)}}}e.DeliveryType=void 0,(c=e.DeliveryType||(e.DeliveryType={})).STREAMING="streaming",c.DOWNLOAD="download",e.PlaybackMode=void 0,(u=e.PlaybackMode||(e.PlaybackMode={})).LIVE="live",u.RESTART="restart",u.CATCHUP="catchup";var l,v,p="CONTENT_AUTHORIZER_STORE_ACCESS_TOKEN";e.ConsumptionType=void 0,(l=e.ConsumptionType||(e.ConsumptionType={})).VOD="vod",l.LIVE="live",e.AdTechnology=void 0,(v=e.AdTechnology||(e.AdTechnology={})).CSAI="csai",v.SSAI="ssai";return e.createClientRegistrationService=function(e,t){return a(e,t)},e.createContentAuthorizer=function(c,u,s,l){var v=c.maxRetries,f=t.createKeyValueStore("CONTENT_AUTHORIZER_STORE_NAME",sessionStorage),m=a(c.clientRegistrationEndPointUrl,u),h=void 0,y=d(c.endPointUrl,u);function T(){return f.get(p)}function b(){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),T()?[2,Promise.resolve()]:[4,m.registerDevice(s.id,l&&l.id)];case 1:return e=n.sent(),t.isError(e)?[2,Promise.reject(e)]:(f.set(p,e),[3,3]);case 2:return r=n.sent(),[2,Promise.reject(r)];case 3:return[2]}}))}))}function S(e){var n=r.AuthorizationUtil.platformServiceTime(),i=t.Algorithm.HS256,a=n>0?n/1e3:(new Date).getTime()/1e3,o=t.CryptoJS.enc.Base64.parse(e.secret),c={alg:i,typ:"JWT"},u={deviceId:e.deviceId,aud:"playback-auth-service",iat:a,exp:a+e.expiry};return t.JWTUtil.encode(c,u,o,i)}function A(r){return n(this,void 0,void 0,(function(){var n,a,d,l,v;return i(this,(function(i){switch(i.label){case 0:if(!c.renewLicenseEndPointUrl)return[2,Promise.reject()];if(!(n=T()))return[2,Promise.reject()];h||(h=o(c.renewLicenseEndPointUrl,u)),a=S(n),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,h.renewLicense({deviceId:n.deviceId,deviceName:s.name,contentId:r.mediaID,drm:r.drmScheme,delivery:e.DeliveryType.STREAMING,licenseUrl:r.licenseUrl,licenseRefreshToken:r.licenseRefreshToken},(v={},v["X-Device-Id"]=a,v))];case 2:return d=i.sent(),t.isError(d)?[2,Promise.reject(d)]:[2,Promise.resolve(d)];case 3:return l=i.sent(),[2,Promise.reject(l)];case 4:return[2]}}))}))}return{registerDevice:function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return[2,t.AsyncUtil.retryOnNetworkFailure((function(){return b()}),v)]}))}))},renewLicense:function(e){return n(this,void 0,void 0,(function(){return i(this,(function(t){return[2,A(e)]}))}))},authorizePlayback:function(r,a){return n(this,void 0,void 0,(function(){return i(this,(function(o){return[2,t.AsyncUtil.retryOnNetworkFailure((function(){return function(r,a){return n(this,void 0,void 0,(function(){var n,o,c,u,d;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),[4,b()];case 1:return i.sent(),(n=T())?(o=S(n))?(c=function(t,r,n,i,a){var o,c,u,s,d,l,v,p,f,m;return{deviceName:t.name,deviceId:r.deviceId,contentId:n.mediaID,contentTypeId:n.consumptionType,catalogType:n.catalogType,mediaFormat:n.mediaType,drm:n.drmScheme,delivery:e.DeliveryType.STREAMING,disableSsai:n.disableSsai?"true":"false",startTime:n.startTime,endTime:n.endTime,playbackMode:n.playbackMode,eventId:n.eventId,castDeviceId:a&&a.id,deviceManufacturer:null!==(o=n.deviceManufacturer)&&void 0!==o?o:t.deviceManufacturer,deviceModelName:null!==(c=n.deviceModelName)&&void 0!==c?c:t.deviceModelName,deviceModelNumber:null!==(u=n.deviceModelNumber)&&void 0!==u?u:t.deviceModelNumber,deviceYear:null!==(s=n.deviceYear)&&void 0!==s?s:t.deviceYear,deviceOs:null!==(d=n.deviceOs)&&void 0!==d?d:t.deviceOs,deviceOsVersion:null!==(l=n.deviceOsVersion)&&void 0!==l?l:t.deviceOsVersion,supportedResolution:null!==(v=n.supportedResolution)&&void 0!==v?v:t.supportedResolution,supportedAudio:null!==(p=n.supportedAudio)&&void 0!==p?p:t.supportedAudio,supportedAudioCodecs:null!==(f=n.supportedAudioCodecs)&&void 0!==f?f:t.supportedAudioCodecs,supportedVideoCodecs:null!==(m=n.supportedVideoCodecs)&&void 0!==m?m:t.supportedVideoCodecs,deviceToken:i}}(s,n,r,o,l),[4,y.authorizePlayback(c,a)]):[2,Promise.reject(o)]:[3,3];case 2:return u=i.sent(),t.isError(u)?[2,Promise.reject(u)]:[2,Promise.resolve(u)];case 3:return[2,Promise.reject()];case 4:return d=i.sent(),[2,Promise.reject(d)];case 5:return[2]}}))}))}(r,a)}),v)]}))}))},invalidateDeviceToken:function(){f.clear()}}},e.createPlaybackAuthorizationService=function(e,t){return d(e,t)},e.createRenweLicenseService=function(e,t){return o(e,t)},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flFoundation,flPlatformAuthorizer);
