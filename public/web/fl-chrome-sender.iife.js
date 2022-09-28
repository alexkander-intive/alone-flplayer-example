/*! ******************************************************************************* 
   Package Name: fl-chrome-sender
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flChromeSender=function(e,t,n){"use strict";
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
    ***************************************************************************** */function r(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function o(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var s,i,o;function c(e,t){void 0===t&&(t=[]);var n=t.filter((function(t){return t.adStartTimeOffsetMs+t.durationMs<e})).map((function(e){return e.durationMs})).reduce((function(e,t){return e+t}),0);return n+=t.filter((function(t){return n=e,(r=t).adStartTimeOffsetMs<=n&&n<r.adStartTimeOffsetMs+r.durationMs;var n,r})).map((function(t){return e-t.adStartTimeOffsetMs})).reduce((function(e,t){return e+t}),0)}!function(e){e.SENDER="sender",e.RECEIVER="receiver"}(s||(s={})),function(e){e.ERROR="error",e.INFO="info",e.SUCCESS="success"}(i||(i={})),function(e){e.USER_CONTEXT="userContext",e.PLAYBACK_AUTHORISATION="playbackAuthorisation",e.DEVICE_REGISTRATION="deviceRegistration",e.CUSTOM="custom",e.SELECT_TRACK="selectTrack"}(o||(o={}));return e.createCastManagerImpl=function(){var e,u,l,f,d,m,g=b()&&cast.framework.CastContext.getInstance(),p=t.createEventEmitter(),S=t.createLogger(),h={subscribe:function(e,t){p.subscribe(e,t)},unsubscribe:function(e,t){p.unsubscribe(e,t)},get castContext(){return g},get castSessionManager(){return e},get castPlayer(){return function(e){var s,i,o,u=t.createLogger(),l=t.createEventEmitter(),f=g()&&new cast.framework.RemotePlayer,d=g()&&new cast.framework.RemotePlayerController(f),m={get platformAsset(){},loadMedia:function(t,n){return void 0===n&&(n={}),r(this,void 0,void 0,(function(){var r,s,i,o,c;return a(this,(function(a){switch(a.label){case 0:if(!g())return u.debug("cast framework is not available. Ensure the cast framework is loaded properly and running on chrome browser."),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.getUserAuthToken()];case 2:return r=a.sent(),s={castAsset:{userAuthToken:r,platformAsset:t,headers:n.headers,flAnalyticsData:n.flAnalyticsData||{},videoAnalyticsData:n.videoAnalyticsData||{}}},(i=new chrome.cast.media.MediaInfo).metadata=n.metadata,i.tracks=n.mediaTracks,i.customData=s,o=new chrome.cast.media.LoadRequest(i),(n.initialPlaybackTime||0===n.initialPlaybackTime)&&(o.currentTime=n.initialPlaybackTime),b(),e.castSessionManager.loadMedia(o).then((function(){l.publish("contentloaded"),p()}),(function(e){u.error("Failed to Loadmedia",e),v()})),[3,4];case 3:return c=a.sent(),u.error("Failed to Loadmedia",c),[3,4];case 4:return[2]}}))}))},subscribe:function(e,t){l.subscribe(e,t)},unsubscribe:function(e,t){l.unsubscribe(e,t)},get playerState(){switch(f.playerState){case"PLAYING":case"BUFFERING":return"started";case"PAUSED":return"paused";default:return"idle"}},get playbackRate(){return 0},set playbackRate(e){},get availableBitrates(){return[]},set minBitrate(e){},get minBitrate(){return 0},set maxBitrate(e){},get maxBitrate(){return 0},get internalPlayerName(){return"Chrome Sender"},get internalPlayerVersion(){return""},get rawPlayer(){return f},get rawLibrary(){},get isBuffering(){return!1},get isSeeking(){return!1},get currentTime(){if(void 0!==f.liveSeekableRange)return f.currentTime;var e=c(1e3*f.currentTime,o);return f.currentTime-e/1e3},get currentEpochTime(){return new Date(f.currentTime).getTime()},get duration(){return void 0===f.liveSeekableRange&&o?(1e3*f.duration-o.filter((function(e){return e.durationMs>0})).map((function(e){return e.durationMs})).reduce((function(e,t){return e+t}),0))/1e3:f.duration},get playbackStatistics(){},get isLive(){return void 0!==f.liveSeekableRange},get isMute(){return f.isMuted},muteOrUnmute:function(){d.muteOrUnmute()},load:function(){},setRequestInterceptor:function(e){},setResponseInterceptor:function(e){},stop:function(){return d.stop(),Promise.resolve()},play:function(){f.isPaused&&d.playOrPause()},pause:function(){f.canPause&&!f.isPaused&&d.playOrPause()},abort:function(e){u.log(e)},send:function(e,t,n){u.log("streamTimelineEvent: "+e+" Action: "+t+" metadata: "+n)},seek:function(t){if(f.canSeek&&void 0!==f.liveSeekableRange)f.currentTime=t,d.seek();else{var n=c(1e3*e.castSessionManager.getMediaSession().getEstimatedTime(),o);f.currentTime=t+n/1e3,d.seek()}},getThumbnail:function(e){},seekToLiveEdge:function(){this.seek(f.liveSeekableRange.end)},seekableRange:function(){return f.liveSeekableRange?{start:f.liveSeekableRange.start,end:f.liveSeekableRange.end}:{start:0,end:this.duration}},currentOffsetFromLiveEdge:function(){return 0},getAllTracks:function(){return f.mediaInfo?f.mediaInfo.tracks.map((function(e){return{language:e.language,type:e.type.toLowerCase()}})):[]},getActiveTracks:function(){if(!f.mediaInfo||!e.castSessionManager||!e.castSessionManager.getMediaSession())return[];var t=f.mediaInfo.tracks,n=e.castSessionManager.getMediaSession().activeTrackIds;return t.filter((function(e){return n.includes(e.trackId)})).map((function(e){return{language:e.language,type:e.type.toLowerCase()}}))},selectTrack:function(t){if(g()&&f.mediaInfo){var n=[],r=f.mediaInfo.tracks;t&&(n=r.filter((function(e){return t.type.toLowerCase()===e.type.toLowerCase()&&t.language===e.language})).map((function(e){return e.trackId})));var a=new chrome.cast.media.EditTracksInfoRequest(n);e.castSessionManager.getMediaSession().editTracksInfo(a,(function(){u.log("Successfully changed track")}),(function(e){u.log("Failed to edit tracks",e)}))}},get remainingTime(){return 0},skipAd:function(){d.skipAd()},discardAdBreak:function(){},getCuePoints:function(){return[]},resize:function(e,t,n){},accessFunctionHandler:function(e){},get playerContext(){return i},setPlaybackOptions:function(e){u.log("playback options",e)}};function g(){return"undefined"!=typeof cast}var p=function(){g()?(d=new cast.framework.RemotePlayerController(f),s=e.castSessionManager.getMediaSession(),d.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED,(function(){f.isConnected?u.log("RemotePlayerController: Player connected"):f.isConnected||u.log("RemotePlayerController: Player disconnected")})),d.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED,(function(){l.publish("progressupdate")})),d.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED,(function(){"idle"===m.playerState&&"FINISHED"===s.idleReason&&l.publish("streamended"),l.publish("playbackstatechanged",m.playerState)})),d.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED,(function(){l.publish("seekingstatechanged")}))):u.debug("cast framework is not available. Ensure the cast framework is loaded properly and running on chrome browser.")},S=function(e,n){if(e&&e.errorCode)return t.createError(e.errorCode,e.errorMessage,n,e.contextDescription)},h=function(e,t){var r=JSON.parse(t);if("adbreaks"===r.messageName.toLowerCase()&&(l.publish(r.messageName.toLowerCase(),r.message),o=r.message),"adstart"===r.messageName.toLowerCase()&&(i=n.PlayerContext.AD),"adend"===r.messageName.toLowerCase()&&(i=n.PlayerContext.MAIN),"adprogressupdate"===r.messageName.toLowerCase())l.publish(r.messageName.toLowerCase(),r.message.adInfo,r.message.progress);else if("streamtimelineevent"===r.messageName.toLowerCase())l.publish(r.messageName.toLowerCase(),r.message.eventName,r.message.action,r.message.metadata);else if("error"===r.messageType.toLowerCase()){var a=r.message,s=S(a.internalError),c=S(a,s);l.publish(r.messageType.toLowerCase(),c)}else l.publish(r.messageName.toLowerCase(),r.message)},b=function(){e.castSessionManager.addMessageListener(e.getChannelNamespace(),h)},v=function(){e.castSessionManager.removeMessageListener(e.getChannelNamespace(),h)};return m}(this)},initialize:function(e,t,n,r){if(b())try{e.autoJoinPolicy=chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,cast.framework.CastContext.getInstance().setOptions(e),u=n,l=t,d=r,function(){if(!b())return;g.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,v)}()}catch(e){S.debug("cast session is failed to initialised",e)}else S.debug("cast framework is not available. Ensure the cast framework is loaded properly and running on chrome browser.")},sendUserDeviceInformation:function(){return r(this,void 0,void 0,(function(){var t,n,r;return a(this,(function(a){switch(a.label){case 0:if(null==e)return[3,5];f={id:e.getCastDevice().label,name:"chromecast"},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.getUserAuthToken()];case 2:return t=a.sent(),n={userAuthToken:t,platformClient:l,proxyPlatformClient:f},m={messageName:o.USER_CONTEXT,messageType:i.INFO,messageOrigin:s.SENDER,message:n},this.sendMessage(JSON.stringify(m)),[3,4];case 3:throw r=a.sent(),S.debug("Send UserDeviceInformation failed",r),r;case 4:return[3,6];case 5:S.debug("cast session is not initialised"),a.label=6;case 6:return[2]}}))}))},sendMessage:function(t){return r(this,void 0,void 0,(function(){var n;return a(this,(function(r){switch(r.label){case 0:if(!e)return S.warn("cast session is not initialised"),[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e.sendMessage(d,t)];case 2:return r.sent(),[3,4];case 3:throw n=r.sent(),S.error("Send message to receiver failed with error",n),n;case 4:return[2]}}))}))},getUserAuthToken:function(){return r(this,void 0,void 0,(function(){var e;return a(this,(function(n){switch(n.label){case 0:if(!u)throw new Error("PlatformAuthorizer is not configured");return[4,u.userAuthorizationDelegate.fetchUserAuthorizationToken()];case 1:if(e=n.sent(),t.isError(e))throw S.error("UserAuthorization token fetch error ",e),e;return[2,e.accessToken]}}))}))},getChannelNamespace:function(){if(!d)throw new Error("ChannelNamespace is not configured");return d},destroy:function(e){g&&g.endCurrentSession(e),function(){if(!b())return;g.removeEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,v)}()}};function b(){return"undefined"!=typeof cast}var v=function(t){switch(t.sessionState){case cast.framework.SessionState.SESSION_STARTED:case cast.framework.SessionState.SESSION_RESUMED:S.debug("Cast Session started."),e=cast.framework.CastContext.getInstance().getCurrentSession(),h.sendUserDeviceInformation(),p.publish("castSessionConnected");break;case cast.framework.SessionState.SESSION_START_FAILED:S.error("Failed to start session"),p.publish("castSessionFailed");break;case cast.framework.SessionState.SESSION_ENDED:S.debug("Cast Session ended."),p.publish("castSessionEnded")}};return h},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flFoundation,flPlayerInterface);
