/*! ******************************************************************************* 
   Package Name: fl-cast-platform-player
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flCastPlatformPlayer=function(e,t,n,a,r,s,i,o,c){"use strict";
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
    ***************************************************************************** */var u,E,d,l,T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},T.apply(this,arguments)};function A(e,t,n,a){return new(n||(n=Promise))((function(r,s){function i(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((a=a.apply(e,t||[])).next())}))}function C(e,t){var n,a,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,a=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],a=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}!function(e){e.SENDER="sender",e.RECEIVER="receiver"}(u||(u={})),function(e){e.ERROR="error",e.INFO="info",e.SUCCESS="success"}(E||(E={})),function(e){e.USER_CONTEXT="userContext",e.PLAYBACK_AUTHORISATION="playbackAuthorisation",e.DEVICE_REGISTRATION="deviceRegistration",e.AD_BREAK_START="adBreakStart",e.AD_BREAK_END="adBreakEnd",e.AD_PROGRESS_UPDATE="adProgressUpdate",e.AD_START="adStart",e.AD_END="adEnd",e.AD_CUE_POINTS="adCuePoints",e.AD_BREAKS="adBreaks",e.STREAM_TIMELINE_EVENT="streamTimelineEvent",e.AVAILABLE_TRACKS="availableTracks",e.CUSTOM="custom",e.ACTIVE_TRACKS="activeTracks",e.SELECT_TRACK="selectTrack"}(d||(d={})),e.CastEventMessage=void 0,(l=e.CastEventMessage||(e.CastEventMessage={})).ERROR="ERROR",l.LOAD_MEDIA_REQUEST="LOAD_MEDIA_REQUEST",l.DEVICE_REGISTRATION_SUCCESS="DEVICE_REGISTRATION_SUCCESS",l.MEDIA_PLAYBACK_INFO_HANDLER="MEDIA_PLAYBACK_INFO_HANDLER",l.STREAM_TIMELINE_EVENT="STREAM_TIMELINE_EVENT",l.PRE_CONTENT_AUTH_REQUEST_HANDLER="PRE_CONTENT_AUTH_REQUEST_HANDLER",l.POST_CONTENT_AUTH_RESPONSE_HANDLER="POST_CONTENT_AUTH_RESPONSE_HANDLER";var f=Object.freeze({CONTENT_TYPE_DASH:"application/dash+xml",CONTENT_TYPE_HLS:"application/x-mpegurl",CONTENT_TYPE_SS:"application/vnd.ms-sstr+xml",CONTENT_TYPE_MP4:"video/mp4",CAST_PLATFORM_CHANNEL:"urn:x-cast:com.quickplay.platform.player.cast",HTTP_HEADER_AUTHORIZATION_KEY:"Authorization",HTTP_HEADER_BEARER_AUTH_PREFIX:"Bearer"});function R(e){if(e)switch(e){case 0:return s.AdContentTimePosition.PREROLL;case-1:return s.AdContentTimePosition.POSTROLL;default:return s.AdContentTimePosition.MIDROLL}return s.AdContentTimePosition.UNKNOWN}function m(e){return{adTitle:e.title}}function g(l){var g,S,_,v,p,N,P,y=this,I=void 0,b=void 0,h=l.configuredLogger,O=l.castPlayer,L=l.yospaceAds,M=t.createEventEmitter(),k=O.rawLibrary,D=O.rawPlayer,H=new k.framework.CastReceiverOptions,U=D.getPlayerManager(),F=l.eventListenerCallback,B={fetchUserAuthorizationToken:function(){return Promise.resolve(_)}};H.customNamespaces={},H.customNamespaces[f.CAST_PLATFORM_CHANNEL]=k.framework.system.MessageType.JSON;D.addCustomMessageListener(f.CAST_PLATFORM_CHANNEL,(function(t){return A(y,void 0,void 0,(function(){var n,s,i,o,c,T;return C(this,(function(A){switch(A.label){case 0:if(!t.data)return[3,10];h.debug("Message received",t.data),A.label=1;case 1:if(A.trys.push([1,8,,9]),(n=t.data).messageType!=E.INFO||n.messageName!=d.USER_CONTEXT)return[3,6];v=n.message,S&&S.invalidateDeviceToken(),g&&g.dispose(),S=void 0,C=v.userAuthToken,_={accessToken:C},g||(g=a.createPlatformAuthorizer(l.platformConfig,B)),S=function(e){S||(S=r.createContentAuthorizer(l.contentAuthConfiguration,g,a.createPlatformClient(e.platformClient.id),e.proxyPlatformClient));return S}(v),A.label=2;case 2:return A.trys.push([2,4,,5]),[4,S.registerDevice()];case 3:return A.sent(),h.log("Device Registered"),s=$(d.DEVICE_REGISTRATION,E.SUCCESS,u.RECEIVER,"Device registered successfully"),F&&F(e.CastEventMessage.DEVICE_REGISTRATION_SUCCESS),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,s),[3,5];case 4:return i=A.sent(),h.error("Device Registration has failed",i),c=$(d.DEVICE_REGISTRATION,E.ERROR,u.RECEIVER,i),F&&F(e.CastEventMessage.ERROR,i),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,c),[3,5];case 5:return[3,7];case 6:c=$(d.CUSTOM,E.INFO,u.RECEIVER,"User context is invalid"),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,c),A.label=7;case 7:return[3,9];case 8:return o=A.sent(),h.error("Token Failure",o),c=$(d.DEVICE_REGISTRATION,E.ERROR,u.RECEIVER,o),F&&F(e.CastEventMessage.ERROR,o),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,c),[3,9];case 9:(T=t.data).messageType==E.INFO&&T.messageName==d.SELECT_TRACK&&function(e){var t=U.getAudioTracksManager(),n=U.getTextTracksManager();if(e)if("audio"===e.type)""===e.language?t.setActiveByIds([]):(t.setActiveByLanguage(e.language),K()),h.log("Audio Track Selected successfully");else""===e.language?n.setActiveByIds([]):(n.setActiveByLanguage(e.language),K()),h.log("Text Track Selected successfully")}(T.message),A.label=10;case 10:return[2]}var C}))}))}));function w(e){return A(this,void 0,void 0,(function(){var n,a;return C(this,(function(r){return S?(_.accessToken=e.userAuthToken,n=S.authorizePlayback(T(T({},e.platformAsset),l.shouldDisableSSAI&&{disableSsai:!0}),e.headers),t.isError(n)?(h.error("Content Auth has failed",n),a=$(d.PLAYBACK_AUTHORISATION,E.ERROR,u.RECEIVER,n),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,a),[2,Promise.reject(n)]):[2,Promise.resolve(n)]):(h.error("Platform is not initialized"),[2,Promise.reject()])}))}))}function V(n,a){return A(this,void 0,void 0,(function(){var i,c,R;return C(this,(function(m){switch(m.label){case 0:return[4,w(n.media.customData.castAsset)];case 1:return i=m.sent(),F&&F(e.CastEventMessage.POST_CONTENT_AUTH_RESPONSE_HANDLER,i),c=n.media,[4,Y(i,a.platformAsset)];case 2:return c.contentUrl=m.sent(),h.log("---contentUrl----",n.media.contentUrl),i.adType===r.AdTechnology.CSAI&&i.csaiAdCuePointVmap&&(n.media.vmapAdsRequest={adTagUrl:i.csaiAdCuePointVmap}),l.isHeartbeatEnabled&&i.heartbeatFlag&&function(e,t,n,a){p&&(p=null),p=o.createHeartbeatBuilder(t,e,T(T({},l.heartbeatConfiguration),{syncIntervalMS:n.heartbeatFreq}),g).setHeartbeatToken(n.heartbeatToken).setLiveEndTime(n.liveEndTime).setLiveStartTime(n.liveStartTime).setLiveEventType(n.liveEventType).setHeaders(a.headers).setLogger(h).build(),O.addStateChangeStep((function(){return p&&p.processPlayerStateChange(O)})),O.addHeartBeatStep((function(){return p&&p.processHeartbeatChange(O)}))}(a.platformAsset.mediaID,v.platformClient.id,i,a),(R=a.platformAsset.consumptionType)===r.ConsumptionType.LIVE&&a.platformAsset.playbackMode===r.PlaybackMode.CATCHUP&&(R=r.ConsumptionType.VOD),function(n,a,i){var o=this;U.setMediaPlaybackInfoHandler((function(c){return F(e.CastEventMessage.MEDIA_PLAYBACK_INFO_HANDLER,c),function(e,t){switch(e){case r.ConsumptionType.VOD:t.media.streamType="BUFFERED";break;case r.ConsumptionType.LIVE:t.media.streamType="LIVE";break;default:t.media.streamType="NONE"}}(i,a),function(e,t){switch(e){case s.MediaType.DASH:t.media.contentType=f.CONTENT_TYPE_DASH;break;case s.MediaType.HLS:t.media.contentType=f.CONTENT_TYPE_HLS;break;case s.MediaType.MP4:t.media.contentType=f.CONTENT_TYPE_MP4;break;case s.MediaType.SMOOTH_STREAMING:t.media.contentType=f.CONTENT_TYPE_SS;break;default:t.media.contentType=f.CONTENT_TYPE_DASH}}(n.mediaType,a),function(e,t){switch(e){case s.DrmScheme.WIDEVINE:t.protectionSystem=k.framework.ContentProtection.WIDEVINE;break;case s.DrmScheme.PLAYREADY:t.protectionSystem=k.framework.ContentProtection.PLAYREADY;break;case s.DrmScheme.CLEARKEY:t.protectionSystem=k.framework.ContentProtection.CLEARKEY;break;default:t.protectionSystem=k.framework.ContentProtection.NONE}}(n.drmScheme,c),c.licenseRequestHandler=function(e){return A(o,void 0,void 0,(function(){var n,a,r,s;return C(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,g.ensureAuthorization()];case 1:return n=i.sent(),t.isError(n)||((s={})[f.HTTP_HEADER_AUTHORIZATION_KEY]=f.HTTP_HEADER_BEARER_AUTH_PREFIX+" "+n.accessToken,a=s,Object.assign(e.headers,a)),[3,3];case 2:return r=i.sent(),h.log("ensureAuthorization is failed",r),[3,3];case 3:return[2]}}))}))},c.licenseUrl=n.drmLicenseUrl,c}))}(i,n,R),S=$(d.PLAYBACK_AUTHORISATION,E.SUCCESS,u.RECEIVER,"Playback is authorised successfully"),D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,S),[2]}var S}))}))}function Y(e,t){return A(this,void 0,void 0,(function(){return C(this,(function(n){return e.ssaiEnabled&&L?[2,z(e.contentUrl,t)]:[2,e.contentUrl]}))}))}function K(){var e=U.getTextTracksManager().getActiveTracks(),t=U.getAudioTracksManager().getActiveTrack();t=t||[];var n=[];x(e=e||[],n),x(t,n),h.log("activeTracks",n);var a=$(d.ACTIVE_TRACKS,E.INFO,u.RECEIVER,n);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,a)}function x(e,t){e.length&&e.forEach((function(e){e.type&&"text"===e.type.toLowerCase()&&t.push({language:e.language,type:"subtitle"}),t.push({language:e.language,type:e.type.toLowerCase()})}))}function z(e,t){return A(this,void 0,void 0,(function(){var n,a;return C(this,(function(r){switch(r.label){case 0:return[4,(n=c.YospaceAdsSessionFactory.createYospaceAdsSession(L,h)).initialize({contentURL:e,playbackMode:ee(t),timeout:15e3})];case 1:return a=r.sent(),function(e){e.subscribe("adbreakstart",G),e.subscribe("adbreakend",Q),e.subscribe("adprogressupdate",X),e.subscribe("adstart",j),e.subscribe("adend",q),e.subscribe("adcuepoints",W),e.subscribe("adbreaks",Z)}(c.YospaceAdsPlayerFactory.createYospaceAdsPlayer(O,n,L,h)),[2,a]}}))}))}function G(e){var t=$(d.AD_BREAK_START,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adbreakstart",e)}function j(e){var t=$(d.AD_START,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adstart",e)}function q(e){var t=$(d.AD_END,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adend",e)}function Q(e){var t=$(d.AD_BREAK_END,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adbreakend",e)}function X(e,t){var n=$(d.AD_PROGRESS_UPDATE,E.INFO,u.RECEIVER,{adInfo:e,progress:t});D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,n),h.log("[ADS] adprogress",e,t)}function W(e){var t=$(d.AD_CUE_POINTS,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adcuepoints",e)}function Z(e){var t=$(d.AD_BREAKS,E.INFO,u.RECEIVER,e);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,t),h.log("[ADS] adbreaks",e)}function J(t,n,a){var r={eventName:t,action:n,metadata:a},s=$(d.STREAM_TIMELINE_EVENT,E.INFO,u.RECEIVER,{eventName:t,action:n,metadata:a,payload:r});D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,s),F(e.CastEventMessage.STREAM_TIMELINE_EVENT,r),h.log("streamTimelineEvent: "+t+" Action: "+n+" metadata: "+a)}function $(e,t,n,a){return{messageName:e,messageType:t,messageOrigin:n,message:a}}function ee(e){if(e.consumptionType===r.ConsumptionType.VOD)return c.PlaybackMode.Vod;switch(e.playbackMode){case r.PlaybackMode.CATCHUP:return c.PlaybackMode.LiveCatchup;case r.PlaybackMode.RESTART:return c.PlaybackMode.LiveRestart;case r.PlaybackMode.LIVE:return c.PlaybackMode.Live}}function te(e){M.publish("castReceiverReady",e),h.log("Cast is ready to play the content")}U.setMessageInterceptor(k.framework.messages.MessageType.LOAD,(function(t){return new Promise((function(a,r){return A(y,void 0,void 0,(function(){var s,o;return C(this,(function(c){switch(c.label){case 0:if(!t.media||!t.media.customData.castAsset)return[3,4];s=t.media.customData.castAsset,F&&(F(e.CastEventMessage.LOAD_MEDIA_REQUEST,t),F(e.CastEventMessage.PRE_CONTENT_AUTH_REQUEST_HANDLER,s.platformAsset)),l.isBookmarkEnabled&&(T=s.platformAsset.mediaID,N&&(N=null),(N=n.createPlaybackSessionBookmarker(T,l.bookmarkConfiguration,g)).subscribe("thresholdlimitreached",(function(){h.log("Threshold Limit is Reached")})),O.addStateChangeStep((function(e){return N&&N.processPlayerStateChange(e)}))),l.isStreamConcurrencyEnabled&&function(e){P&&(P=null),P=i.createStreamConcurrencyResolver(e,l.streamConcurrencyConfiguration,g),O.addStateChangeStep((function(e){return P&&P.processPlayerStateChange(e)}))}(s.platformAsset.mediaID),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,V(t,s)];case 2:return c.sent(),a(t),[3,4];case 3:return function(t){h.error("Content Auth failed",t);var n=$(d.PLAYBACK_AUTHORISATION,E.ERROR,u.RECEIVER,t);F&&F(e.CastEventMessage.ERROR,t);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,n)}(o=c.sent()),r(o),[3,4];case 4:return[2]}var T}))}))}))}));return O.subscribe("castReceiverReady",te),O.subscribe("streamtimelineevent",J),O.addHeartBeatStep((function(){})),O.addStateChangeStep((function(){h.log("stateChanged value")})),null!=k.framework.events&&(U.addEventListener(k.framework.events.EventType.PLAYING,(function(e){h.log("PLAYING_EVENT",e),function(){var e=U.getTextTracksManager().getTracks(),t=U.getAudioTracksManager().getTracks(),n=[];x(e,n),x(t,n),h.log("availableTracks",n);var a=$(d.AVAILABLE_TRACKS,E.INFO,u.RECEIVER,n);D.sendCustomMessage(f.CAST_PLATFORM_CHANNEL,void 0,a)}(),K()})),U.addEventListener(k.framework.events.EventType.BREAK_STARTED,(function(e){b=function(e,t){var n=e.getBreakManager().getBreakById(t.breakId);return{adBreakID:t.breakId||" ",contentTimePosition:R(n.position),adSequencePosition:1,adBreakStartTimeOffsetMs:1e3*t.currentMediaTime,remainingTimeMs:-1e3,durationMs:1e3*n.duration||-1e3,totalAds:t.total,adBreakIndex:n.position}}(U,e),G(b)})),U.addEventListener(k.framework.events.EventType.BREAK_ENDED,(function(e){Q(b),b=void 0})),U.addEventListener(k.framework.events.EventType.BREAK_CLIP_STARTED,(function(e){I=function(e,t,n){var a=e.getBreakManager().getBreakClipById(t.breakClipId);return{adID:t.breakClipId||" ",sequence:t.index,adStartTimeOffsetMs:1e3*t.currentMediaTime,durationMs:1e3*a.duration,isSkippable:!!(t.whenSkippable&&t.whenSkippable>=0),skipOffsetMs:1e3*t.whenSkippable,isFiller:!1,adBreakInfo:n||void 0,vastProperties:a?m(a):void 0}}(U,e,b),j(I)})),U.addEventListener(k.framework.events.EventType.BREAK_CLIP_ENDED,(function(e){q(I),I=void 0}))),O.load(),O}return e.createCastPlatformPlayer=g,e.createCastPlatformPlayerBuilder=function(){var e,n,a,r,s,i,o,c,u,E=t.createLogger(t.LoggerLevel.OFF,"FL_CAST_PLATFORM_PLAYER"),d=!1,l=!1,T=!1,A=!1;return{get streamConcurrencyConfiguration(){if(e)return e;throw"Stream Concurrency Configuration is missing"},get bookmarkConfiguration(){if(n)return n;throw"Bookmark Configuration is missing"},get heartbeatConfiguration(){if(a)return a;throw"Heartbeat Configuration is missing"},get contentAuthConfiguration(){if(r)return r;throw"Content Authorization Configuration is missing"},get configuredLogger(){return E},get isBookmarkEnabled(){return d},get isStreamConcurrencyEnabled(){return l},get isHeartbeatEnabled(){return T},get shouldDisableSSAI(){return A},get serverCertificate(){return s},get castPlayer(){return o},get yospaceAds(){return i},get platformConfig(){return c},get eventListenerCallback(){return u},addCastPlayer:function(e){return o=e,this},addApplicationConfig:function(t){return e={endPointUrl:t.streamConcurrencyEndPoint,syncIntervalMS:t.streamConcurrencySyncIntervalMS},n={endPointUrl:t.bookmarkEndPoint,syncIntervalMS:t.bookmarkSyncIntervalMS,thresholdPercentage:t.bookmarkThresholdPercentage},a={heartbeatEndPointUrl:t.heartbeatEndPoint,streamConcurrencyEndPointUrl:t.streamConcurrencyEndPoint,syncIntervalMS:t.heartbeatSyncIntervalMS,multiStreamMode:t.multiStreamMode,stopPlayerOnStreamTimelineEvent:t.stopPlayerOnStreamTimelineEvent},r={endPointUrl:t.playbackAuthEndPoint,clientRegistrationEndPointUrl:t.clientRegistrationEndPoint},c={clientID:t.clientID,clientSecret:t.clientSecret,xClientId:t.xClientId,authorizationEndPoint:t.authorizationEndPoint},T=t.enableHeartbeat||!1,A=t.disableSSAI||!1,this},addCertificate:function(e){return s=e,this},addYospaceAds:function(e){return i=e,this},enableStreamConcurrency:function(){return l=!0,this},enableBookmark:function(){return d=!0,this},disableSSAI:function(){return A=!0,this},logger:function(e){return E=e,this},castEventListener:function(e){return u=e,this},build:function(){return g(this)}}},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flFoundation,flBookmarks,flPlatformAuthorizer,flContentAuthorization,flPlayerInterface,flStreamConcurrency,flHeartbeat,flAdsYospace);
