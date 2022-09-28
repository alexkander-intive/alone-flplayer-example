/*! ******************************************************************************* 
   Package Name: fl-ads-ima
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flAdsIma=function(e,t,n){"use strict";
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
    ***************************************************************************** */var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};function i(e){if(e)switch(e){case 0:return t.AdContentTimePosition.PREROLL;case-1:return t.AdContentTimePosition.POSTROLL;default:return t.AdContentTimePosition.MIDROLL}return t.AdContentTimePosition.UNKNOWN}function a(e){return{adSystem:e.adSystem,adTitle:e.title,description:e.description,advertiser:e.advertiserName,survey:e.surveyUrl,creativeId:e.creativeId}}function s(e){var r,s,o=e.configuredLogger,u=n.createEventEmitter(),d=e.renderingSettings,c=e.videoElement,E=e.containerElement,A=e.imaSDK,l=e.request,T="",g=null,p="idle",f=0,y=0,v=!1,b=[],S=void 0,m=void 0,D=!1,I=function(){switch(p){case"loading":return t.PLAYBACK_STATES.LOADING;case"loaded":return t.PLAYBACK_STATES.LOADED;case"playing":case"skipped":case"started":case"resumed":case"completed":return t.PLAYBACK_STATES.STARTED;case"paused":return t.PLAYBACK_STATES.PAUSED;default:return t.PLAYBACK_STATES.IDLE}},k=function(e,n){var r,i,a;"buffering"===(p=e)?(r=I(),i=v?t.BUFFERING_STATES.ACTIVE:t.BUFFERING_STATES.INACTIVE,a={buffering:i,seeking:t.SEEKING_STATES.INACTIVE,player:r},o.info("Player state has changed",JSON.stringify(a)),u.publish("bufferingstatechanged",i)):"failed"===p?o.log("aderror",n):function(){var e=I();if(e!==t.PLAYBACK_STATES.LOADED&&e!==t.PLAYBACK_STATES.LOADING){var n={player:e,seeking:t.SEEKING_STATES.INACTIVE,buffering:t.BUFFERING_STATES.INACTIVE};o.info("Player state has changed",JSON.stringify(n)),u.publish("playbackstatechanged",e)}}()},L={subscribe:u.subscribe,unsubscribe:u.unsubscribe,get playerState(){return I()},get isBuffering(){return v},get isSeeking(){return!1},get currentTime(){return f},get currentEpochTime(){return 0},get duration(){return y},get playbackRate(){return 0},get availableBitrates(){return b},get minBitrate(){return 0},get maxBitrate(){return 0},get internalPlayerVersion(){return T},get internalPlayerName(){return"IMA SDK"},get isLive(){return!1},get remainingTime(){return g&&g.getRemainingTime()},get isMute(){return!(g&&g.getVolume())},load:function(){k("loading"),function(e){r.initialize();var t=new A.AdsRequest;o.debug("Requesting "+e.adTagUrl+" with w:"+e.slotWidth+", h:"+e.slotHeight),t.adTagUrl=e.adTagUrl,t.linearAdSlotWidth=e.slotWidth,t.linearAdSlotHeight=e.slotHeight,s.requestAds(t)}(l)},play:function(){g&&g.resume()},pause:function(){g&&g.pause()},abort:function(e){g&&g.destroy()},send:function(e,t,n){o.log("streamTimelineEvent: "+e+" Action: "+t+" metadata: "+n)},seek:function(e){},getThumbnail:function(e){},getAllTracks:function(){return[]},getActiveTracks:function(){return[]},seekableRange:function(){return{start:0,end:y}},seekToLiveEdge:function(){},currentOffsetFromLiveEdge:function(){return 0},selectTrack:function(e){},stop:function(){return g&&g.destroy(),k("idle"),Promise.resolve()},muteOrUnmute:function(){g&&(this.isMute?g.setVolume(c.volume):g.setVolume(0))},skipAd:function(){k("skipped"),g&&g.skip()},resize:function(e,t,n){n?g&&g.resize(e,t,A.ViewMode.FULLSCREEN):g&&g.resize(e,t,A.ViewMode.NORMAL)},discardAdBreak:function(){g&&g.discardAdBreak()},getCuePoints:function(){return g&&g.getCuePoints()},setRequestInterceptor:function(e){},setResponseInterceptor:function(e){},accessFunctionHandler:function(e){},setPlaybackOptions:function(e){o.log("playback options",e)}};function O(e){o.debug("onAdsManagerLoaded",e);var t=new A.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,d&&(t=function(e,t){e.autoAlign=!!t.autoAlign,e.bitrate=t.bitrate?t.bitrate:-1,e.enablePreloading=!!t.enablePreloading,e.loadVideoTimeout=t.loadVideoTimeout?t.loadVideoTimeout:-1,e.mimeTypes=t.mimeTypes?t.mimeTypes:[],e.UiElements=t.enableUiElements?[A.UiElements.AD_ATTRIBUTION,A.UiElements.COUNTDOWN]:[],e.useStyledLinearAds=!!t.useStyledLinearAds,e.useStyledNonLinearAds=!!t.useStyledNonLinearAds,t.playAdsAfterTime&&(e.playAdsAfterTime=t.playAdsAfterTime);return e}(t,d)),(g=e.getAdsManager(c,t))&&g.getCuePoints()&&u.publish("adcuepoints",g.getCuePoints()),function(e){e.addEventListener(A.AdEvent.Type.CONTENT_PAUSE_REQUESTED,h),e.addEventListener(A.AdEvent.Type.CONTENT_RESUME_REQUESTED,M),e.addEventListener(A.AdErrorEvent.Type.AD_ERROR,N,!1),e.addEventListener(A.AdError.Type.AD_LOAD,(function(e){o.log("adLoadError",e)})),e.addEventListener(A.AdError.Type.AD_PLAY,(function(e){o.log("adPlayError",e)}));var t=[A.AdEvent.Type.ALL_ADS_COMPLETED,A.AdEvent.Type.CLICK,A.AdEvent.Type.COMPLETE,A.AdEvent.Type.FIRST_QUARTILE,A.AdEvent.Type.LOADED,A.AdEvent.Type.MIDPOINT,A.AdEvent.Type.PAUSED,A.AdEvent.Type.STARTED,A.AdEvent.Type.RESUMED,A.AdEvent.Type.AD_PROGRESS,A.AdEvent.Type.THIRD_QUARTILE,A.AdEvent.Type.SKIPPED,A.AdEvent.Type.SKIPPABLE_STATE_CHANGED,A.AdEvent.Type.LOG,A.AdEvent.Type.CLICK,A.AdEvent.Type.VIDEO_CLICKED,A.AdEvent.Type.VIDEO_ICON_CLICKED,A.AdEvent.Type.IMPRESSION,A.AdEvent.Type.USER_CLOSE,A.AdEvent.Type.INTERACTION,A.AdEvent.Type.VOLUME_CHANGED,A.AdEvent.Type.VOLUME_MUTED];for(var n in t)e.addEventListener(t[n],R,!1);e.init(l.slotWidth,l.slotHeight,A.ViewMode.NORMAL),e.start()}(g)}var _=function(e,t){return function(e,t){var n=(e?e.getAdData():void 0).adPodInfo;return{adBreakID:" ",contentTimePosition:i(n.podIndex),adSequencePosition:1,adBreakStartTimeOffsetMs:1e3*n.timeOffset,remainingTimeMs:1e3*t.getRemainingTime(),durationMs:1e3*n.maxDuration,totalAds:n.totalAds,adBreakIndex:n.podIndex}}(e,t)},P=function(e,t,n){return function(e,t,n){var r=e?e.getAdData():void 0,i=r.adPodInfo;return{adID:r.adId||" ",sequence:i.adPosition,adStartTimeOffsetMs:1e3*i.timeOffset,durationMs:1e3*r.duration,remainingTimeMs:1e3*t.getRemainingTime(),isSkippable:r.skippable,skipOffsetMs:1e3*r.skipTimeOffset,isFiller:!1,adBreakInfo:n||void 0,vastProperties:r?a(r):void 0}}(e,t,n)};function R(e){switch(e.type){case A.AdEvent.Type.LOADED:S=_(e,g),m=P(e,g,S),y=m.durationMs?m.durationMs:0,k("loaded");break;case A.AdEvent.Type.STARTED:v=!1,k("started"),(a=e.getAd())&&m&&(m.mediaUrl=a.getMediaUrl()||"",m.vastProperties&&(m.vastProperties.bitrate=a.getVastMediaBitrate()||0)),u.publish(t.AdEvent.ADVERT_START,m);break;case A.AdEvent.Type.RESUMED:v&&(v=!1,k("buffering")),k("resumed"),u.publish(t.AdEvent.ADVERT_START,m),C(t.AdTrackingEvent.AD_RESUMED_EVENT);break;case A.AdEvent.Type.AD_BUFFERING:v=!0,k("buffering");break;case A.AdEvent.Type.FIRST_QUARTILE:S&&e.getAd()&&(S.totalAds=e.getAd().getAdPodInfo().getTotalAds()),C(t.AdTrackingEvent.AD_FIRST_QUARTILE_EVENT);break;case A.AdEvent.Type.MIDPOINT:C(t.AdTrackingEvent.AD_MIDPOINT_EVENT);break;case A.AdEvent.Type.THIRD_QUARTILE:C(t.AdTrackingEvent.AD_THIRD_QUARTILE_EVENT);break;case A.AdEvent.Type.AD_PROGRESS:var n=e.getAdData();if(!n)return;var r=1e3*n.currentTime;f=r,k("playing");var i=1e3*g.getRemainingTime();S&&(S.remainingTimeMs=i),m&&(m.adBreakInfo=S,m.remainingTimeMs=i),u.publish("adprogressupdate",m,r);break;case A.AdEvent.Type.PAUSED:k("paused");break;case A.AdEvent.Type.SKIPPED:k("skipped"),u.publish(t.AdEvent.ADVERT_END,m),C(t.AdTrackingEvent.AD_SKIPPED_EVENT),m=void 0;break;case A.AdEvent.Type.COMPLETE:k("completed"),u.publish(t.AdEvent.ADVERT_END,m),m=void 0;break;case A.AdEvent.Type.ALL_ADS_COMPLETED:break;case A.AdEvent.Type.LOG:!function(e){e.getAdData()&&e.getAdData().adError&&o.log("aderror",e.getAdData().adError)}(e);break;case A.AdEvent.Type.CLICK:C(t.AdTrackingEvent.AD_CLICK);break;case A.AdEvent.Type.VIDEO_CLICKED:C(t.AdTrackingEvent.AD_VIDEO_CLICKED);break;case A.AdEvent.Type.VIDEO_ICON_CLICKED:C(t.AdTrackingEvent.AD_VIDEO_ICON_CLICKED);break;case A.AdEvent.Type.IMPRESSION:C(t.AdTrackingEvent.AD_IMPRESSION);break;case A.AdEvent.Type.USER_CLOSE:C(t.AdTrackingEvent.AD_USER_CLOSE);break;case A.AdEvent.Type.INTERACTION:C(t.AdTrackingEvent.AD_INTERACTION);break;case A.AdEvent.Type.VOLUME_CHANGED:C(t.AdTrackingEvent.AD_VOLUME_CHANGED);break;case A.AdEvent.Type.VOLUME_MUTED:C(t.AdTrackingEvent.AD_VOLUME_MUTED);break;case A.AdEvent.Type.SKIPPABLE_STATE_CHANGED:C(t.AdTrackingEvent.AD_SKIPPABLE_STATE_CHANGED)}var a}function C(e){o.log('IMA: ad event "'+e+'"'),u.publish(t.AdEvent.ADVERT_TRACKING_EVENT,e)}function N(e){k("failed",e.getError()),u.publish("aderror",e.getError()),u.publish("adstatechanged",!1)}function h(){D=!0,u.publish(t.AdEvent.ADVERT_BREAK_START,S),u.publish("adstatechanged",!0),u.publish("adplayercontextwillchange")}function M(){D&&(u.publish(t.AdEvent.ADVERT_BREAK_END,S),S=void 0,D=!1),u.publish("adstatechanged",!1),u.publish("adplayercontextwillchange")}return o.debug("Initializing IMA SDK"),r=new A.AdDisplayContainer(E,c),(s=new A.AdsLoader(r)).addEventListener(A.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,O,!1),s.addEventListener(A.AdErrorEvent.Type.AD_ERROR,N,!1),T=s.getVersion(),c.onended=function(){s.contentComplete()},L}function o(e){var i=e.configuredLogger,a=n.createEventEmitter(),o=e.player,u=function(e){o.playbackOptions&&o.setPlaybackOptions(r(r({},o.playbackOptions),{autoPlayOnLoad:e}))},d=!!o.playbackOptions&&o.playbackOptions.autoPlayOnLoad;u(!1);var c=s(e),E=t.PlayerContext.MAIN,A=!1,l=!1,T=function(){c.load(),o.load()},g=function(){return E===t.PlayerContext.AD},p=function(e){E=e,i.info("Switched to context: "+E),a.publish("playercontextchanged",E)},f=function(e){e?(p(t.PlayerContext.AD),o.pause()):(p(t.PlayerContext.MAIN),d&&(o.playerState===t.PLAYBACK_STATES.LOADING?u(!0):(o.playerState!==t.PLAYBACK_STATES.LOADED||A)&&A||o.play()),(!l&&!d||A)&&function(){if(o.playerState!==t.PLAYBACK_STATES.LOADING){var e={player:o.playerState,seeking:t.SEEKING_STATES.INACTIVE,buffering:t.BUFFERING_STATES.INACTIVE};i.info("Player state has changed",JSON.stringify(e)),a.publish("playbackstatechanged",o.playerState)}}())},y={subscribe:function(e,t){c.subscribe(e,t),o.subscribe(e,t),a.subscribe(e,t)},unsubscribe:function(e,t){c.unsubscribe(e,t),o.unsubscribe(e,t),a.unsubscribe(e,t)},get playerContext(){return!g()&&"playerContext"in o?o.playerContext:E},get playerState(){return g()?c.playerState:o.playerState},get playbackRate(){return o.playbackRate},set playbackRate(e){g()||(o.playbackRate=e)},get availableBitrates(){return g()?c.availableBitrates:o.availableBitrates},set minBitrate(e){g()||(o.minBitrate=e)},get minBitrate(){return g()?c.minBitrate:o.minBitrate},set maxBitrate(e){g()||(o.maxBitrate=e)},get maxBitrate(){return g()?c.maxBitrate:o.maxBitrate},get internalPlayerName(){return g()?c.internalPlayerName:o.internalPlayerName},get internalPlayerVersion(){return g()?c.internalPlayerVersion:o.internalPlayerVersion},get rawPlayer(){return g()?void 0:o.rawPlayer},get rawLibrary(){return g()?void 0:o.rawLibrary},get isBuffering(){return g()?c.isBuffering:o.isBuffering},get isSeeking(){return g()?c.isSeeking:o.isSeeking},get currentTime(){return g()?c.currentTime:o.currentTime},get currentEpochTime(){return g()?c.currentEpochTime:o.currentEpochTime},get duration(){return g()?c.duration:o.duration},get playbackStatistics(){return g()?c.playbackStatistics:o.playbackStatistics},get isLive(){return o.isLive},get remainingTime(){return g()?c.remainingTime:-1},get isMute(){return g()?c.isMute:o.isMute},get playbackOptions(){return o.playbackOptions?o.playbackOptions:void 0},load:function(){T()},setRequestInterceptor:function(e){o.setRequestInterceptor(e)},setResponseInterceptor:function(e){o.setResponseInterceptor(e)},accessFunctionHandler:function(e){o.accessFunctionHandler(e)},stop:function(){return g()?c.stop().finally((function(){return o.stop()})):o.stop()},play:function(){d=!0,"idle"!==c.playerState||"idle"!==o.playerState?g()?c.play():o.play():T()},pause:function(){g()?c.pause():o.pause()},abort:function(e){c.abort(e),o.abort(e)},send:function(e,t,n){c.send(e,t,n),o.send(e,t,n)},seek:function(e){g()?c.seek(e):o.seek(e)},getThumbnail:function(e){return g()?c.getThumbnail(e):o.getThumbnail(e)},seekToLiveEdge:function(){return g()?c.seekToLiveEdge():o.seekToLiveEdge()},seekableRange:function(){return g()?c.seekableRange():o.seekableRange()},currentOffsetFromLiveEdge:function(){return g()?c.currentOffsetFromLiveEdge():o.currentOffsetFromLiveEdge()},getAllTracks:function(){return g()?[]:o.getAllTracks()},getActiveTracks:function(){return g()?[]:o.getActiveTracks()},selectTrack:function(e){g()||o.selectTrack(e)},muteOrUnmute:function(){c.muteOrUnmute&&c.muteOrUnmute(),o.muteOrUnmute&&o.muteOrUnmute()},skipAd:function(){g()?c.skipAd():i.warn("Unsupported operation 'skipAd' in "+E+" context")},resize:function(e,t,n){c.resize(e,t,n)},discardAdBreak:function(){g()?c.discardAdBreak():i.warn("Unsupported operation 'discardAdBreak' in "+E+" context")},getCuePoints:function(){return c.getCuePoints()},setPlaybackOptions:function(e){o.setPlaybackOptions(e)}};return c.subscribe("adstatechanged",(function(e){f(e)})),function(e){e.subscribe("playbackstatechanged",(function(e){e===t.PLAYBACK_STATES.STARTED&&(l=!0,A=!1),i.debug("Content Player state: "+e)})),e.subscribe("streamended",(function(){A=!0}))}(o),y}return e.createPlayerBuilder=function(){var e,t,r,i,a,s,u=n.createLogger(n.LoggerLevel.OFF);return{get player(){return e},get containerElement(){return t},get videoElement(){return r},get imaSDK(){return i},get configuredLogger(){return u},get request(){return a},get renderingSettings(){return s},contentPlayer:function(t){return e=t,this},contentContainerElement:function(e){return t=e,this},contentVideoElement:function(e){return r=e,this},adRequest:function(e){return a=e,this},ima:function(e){return i=e,this},adsRenderingSettings:function(e){return s=e,this},logger:function(e){return u=e,this},build:function(){return o(this)}}},e.version="7.0.56",Object.defineProperty(e,"__esModule",{value:!0}),e}({},flPlayerInterface,flFoundation);
