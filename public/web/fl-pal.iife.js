/*! ******************************************************************************* 
   Package Name: fl-pal
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flPal=function(e,n){"use strict";
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
    ***************************************************************************** */var t=function(){return t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},t.apply(this,arguments)};function r(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))}function o(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var i={adWillPlayMuted:!1,continuousPlayback:!1,iconsSupported:!1,playerType:"FL Player",videoHeight:480,videoWidth:640},a=Object.freeze({SESSION_INIT_FAILURE:1537}),c=function(){function e(e,t){this.createSessionError=function(e,t){var r=n.createError(e,t);return n.createError(a.SESSION_INIT_FAILURE|n.ErrorCodes.ERROR_CATEGORY_MASK_THIRDPARTY,t,r)},this.logger=t||n.createLogger(n.LoggerLevel.OFF,"FL_PAL_SESSION"),this.nonceLoader=this.createNonceLoader(e),this.logger.log("PAL session created.")}return e.prototype.initialize=function(e){return r(this,void 0,void 0,(function(){var t,r,i,a,c;return o(this,(function(o){switch(o.label){case 0:this.deferred_=new n.UtilFactory.Deferred,t=this.createNonceRequest(e),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.nonceLoader.loadNonceManager(t)];case 2:return r=o.sent(),this.logger.log("PAL session initialized."),this.nonceManager=r,this.deferred_.resolve(r.getNonce()),[3,4];case 3:return i=o.sent(),a="PAL session initialization failed. "+i,this.logger.warn(a),c=this.createSessionError(-1,a),this.deferred_.reject(c),[3,4];case 4:return[2,this.deferred_.promise]}}))}))},e.prototype.sendAdClick=function(){this.nonceManager.sendAdClick()},e.prototype.sendAdTouch=function(e){this.nonceManager.sendAdTouch(e)},e.prototype.sendPlaybackStart=function(){this.nonceManager.sendPlaybackStart()},e.prototype.sendPlaybackEnd=function(){this.nonceManager.sendPlaybackEnd()},e.prototype.shutdown=function(){this.logger.log("PAL session destroyed."),this.nonceLoader=void 0,this.nonceManager=void 0},e.prototype.createNonceLoader=function(e){var n=new goog.pal.ConsentSettings;return n.allowStorage=e,new goog.pal.NonceLoader(n)},e.prototype.createNonceRequest=function(e){var n=t(t({},i),e),r=new goog.pal.NonceRequest;return n.adWillAutoPlay&&(r.adWillAutoPlay=n.adWillAutoPlay),r.adWillPlayMuted=n.adWillPlayMuted,r.continuousPlayback=n.continuousPlayback,r.descriptionUrl=n.descriptionUrl,r.iconsSupported=n.iconsSupported,n.nonceLengthLimit&&(r.nonceLengthLimit=n.nonceLengthLimit),n.omidPartnerName&&(r.omidPartnerName=n.omidPartnerName),n.omidPartnerVersion&&(r.omidPartnerVersion=n.omidPartnerVersion),n.omidVersion&&(r.omidVersion=n.omidVersion),r.playerType=n.playerType,r.playerVersion=n.playerVersion,r.ppid=n.ppid,r.videoHeight=n.videoHeight,r.videoWidth=n.videoWidth,r},e}();return e.createPalSession=function(e,n){return new c(e,n)},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flFoundation);

