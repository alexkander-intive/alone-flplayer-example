/*! ******************************************************************************* 
   Package Name: fl-player-interface
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flPlayerInterface=function(E){"use strict";var T,A,_,e,t,a,d;E.BUFFERING_STATES=void 0,(T=E.BUFFERING_STATES||(E.BUFFERING_STATES={})).ACTIVE="active",T.INACTIVE="inactive",E.SEEKING_STATES=void 0,(A=E.SEEKING_STATES||(E.SEEKING_STATES={})).ACTIVE="active",A.INACTIVE="inactive",E.PLAYBACK_STATES=void 0,(_=E.PLAYBACK_STATES||(E.PLAYBACK_STATES={})).IDLE="idle",_.LOADING="loading",_.LOADED="loaded",_.STARTED="started",_.PAUSED="paused",_.STOPPED="stopped",E.TrackType=void 0,(e=E.TrackType||(E.TrackType={})).AUDIO="audio",e.TEXT="text",E.TrackKind=void 0,(t=E.TrackKind||(E.TrackKind={})).SUBTITLE="subtitle",t.CAPTION="caption",E.DrmScheme=void 0,(a=E.DrmScheme||(E.DrmScheme={})).NONE="none",a.WIDEVINE="widevine",a.PLAYREADY="playready",a.FAIRPLAY="fairplay",a.CLEARKEY="clearkey",E.MediaType=void 0,(d=E.MediaType||(E.MediaType={})).DASH="dash",d.SMOOTH_STREAMING="ss",d.HLS="hls",d.MP4="mp4",d.OTHER="other";var o,R,P;E.AdContentTimePosition=void 0,(o=E.AdContentTimePosition||(E.AdContentTimePosition={})).PREROLL="preroll",o.MIDROLL="midroll",o.POSTROLL="postroll",o.UNKNOWN="unknown",E.RequestType=void 0,(R=E.RequestType||(E.RequestType={}))[R.MANIFEST=0]="MANIFEST",R[R.SEGMENT=1]="SEGMENT",R[R.LICENSE=2]="LICENSE",E.PlayerContext=void 0,(P=E.PlayerContext||(E.PlayerContext={})).MAIN="main",P.AD="ad",P.PROMO="promo";var n,i,I,S,L,r,N,D,C,M,l,O,K=function(){function E(E){this.metaTags=E}return E.prototype.tagIds=function(){return this.metaTags.map((function(E){return E.id}))},E.prototype.tagsById=function(E){return this.metaTags.filter((function(T){return T.id===E}))},E.prototype.toString=function(){var E=this,T=[];return this.metaTags.forEach((function(A){T.push("{"),T.push("id="+A.id),T.push(", type="+A.type),T.push(", attr=["+E.bytesToString(A.extendedAttributes)+"]"),T.push("}")})),T.push(""),T.join("")},E.prototype.bytesToString=function(E){for(var T="",A=1;A<E.length;A++)T+=String.fromCharCode(E[A]);return T},E}();E.FrameType=void 0,(n=E.FrameType||(E.FrameType={})).META_TAG_TEXT_TYPE="TEXT",n.META_TAG_USER_DEFINED_TEXT_TYPE="TXXX",n.META_TAG_TITLE_TYPE="TIT2",n.META_TAG_ALBUM_TYPE="TALB",n.META_TAG_ARTIST_TYPE="TOPE",n.META_TAG_DATE_TYPE="TDAT",n.META_TAG_SESSION_INFO_TYPE="SESSION_INFO",n.META_TAG_TRACK_NUM_TYPE="TRCK",n.META_TAG_YEAR_TYPE="TYER",n.META_TAG_LYRIC_TYPE="SYLT",n.META_TAG_COMMENTS_TYPE="COMM",n.META_TAG_PRIVATE_FRAME_TYPE="PRIV",n.META_TAG_PICTURE_TYPE="APIC",n.META_TAG_GEOB_TYPE="GEOB",n.META_TAG_BINARY_TYPE="BINARY",n.META_TAG_EMSG_TYPE="EMSG",n.META_TAG_URL_LINK_TYPE="WXXX",n.META_TAG_CHAPTER_TYPE="CHAP",n.META_TAG_CHAPTER_TOC_TYPE="CTOC",E.AdTrackingEvent=void 0,(i=E.AdTrackingEvent||(E.AdTrackingEvent={})).AD_UNKNOWN_EVENT="Unknown",i.AD_BREAK_STARTED_EVENT="Ad Break Started",i.AD_STARTED_EVENT="Ad Started",i.AD_FIRST_QUARTILE_EVENT="Ad First Quartile",i.AD_MIDPOINT_EVENT="Ad Midpoint",i.AD_THIRD_QUARTILE_EVENT="Ad Third Quartile",i.AD_PAUSED_EVENT="Ad Paused",i.AD_RESUMED_EVENT="Ad Resumed",i.AD_MUTED_EVENT="Ad Muted",i.AD_UNMUTED_EVENT="Ad Unmuted",i.AD_ENDED_EVENT="Ad Ended",i.AD_BREAK_ENDED_EVENT="Ad Break Ended",i.AD_SKIPPED_EVENT="Ad Skipped",i.AD_PLAYER_EXPANDED_EVENT="Ad Player Expanded",i.AD_PLAYER_COLLAPSED_EVENT="Ad Player Collapsed",i.AD_EXPANDED_EVENT="Ad Expanded",i.AD_COLLAPSED_EVENT="Ad Collapsed",i.AD_CLICK="Ad Click",i.AD_VIDEO_CLICKED="Ad Video Clicked",i.AD_VIDEO_ICON_CLICKED="Ad Video Icon Clicked",i.AD_IMPRESSION="Ad Impression",i.AD_USER_CLOSE="Ad User Close",i.AD_INTERACTION="Ad Interaction",i.AD_SKIPPABLE_STATE_CHANGED="Ad Skippable State Changed",i.AD_VOLUME_CHANGED="Ad Volume Changed",i.AD_VOLUME_MUTED="Ad Volume Muted",E.StreamTimelineEvent=void 0,(I=E.StreamTimelineEvent||(E.StreamTimelineEvent={})).BLACKOUT="blackout",I.LIVE_PROGRAM_START="liveProgramStart",I.LIVE_PROGRAM_END="liveProgramEnd",I.LIVE_EVENT_START="liveEventStart",I.LIVE_EVENT_END="liveEventEnd",I.OVERFLOW_EVENT_END="overflowEventEnd",I.GAME_INFO="gameInfo",I.GAME_EVENT="gameEvent",I.UNKNOWN="unknown",E.Action=void 0,(S=E.Action||(E.Action={})).NONE="none",S.STOP_PLAYBACK="stopPlayback",S.START_PLAYBACK="startPlayback",E.BlackoutAction=void 0,(L=E.BlackoutAction||(E.BlackoutAction={})).ALLOW="ALLOW",L.DENY="DENY",L.ALLOW_WITH_UPGRADE="ALLOW_WITH_UPGRADE",E.AdEvent=void 0,(r=E.AdEvent||(E.AdEvent={})).ADVERT_BREAK_START="adbreakstart",r.ADVERT_BREAK_END="adbreakend",r.ADVERT_START="adstart",r.ADVERT_END="adend",r.ADVERT_VERIFICATION_START="adverificationstart",r.ADVERT_VERIFICATION_END="adverificationend",r.ADVERT_TRACKING_EVENT="adverttrackingevent",E.PlaybackFastForwardMode=void 0,(N=E.PlaybackFastForwardMode||(E.PlaybackFastForwardMode={}))[N.TRICK_FW_PLAY_ALL=100]="TRICK_FW_PLAY_ALL",N[N.TRICK_FW_PLAY_FIRST=101]="TRICK_FW_PLAY_FIRST",N[N.TRICK_FW_PLAY_LAST=102]="TRICK_FW_PLAY_LAST",N[N.TRICK_FW_SKIP_ALL=103]="TRICK_FW_SKIP_ALL",E.PlaybackRewindMode=void 0,(D=E.PlaybackRewindMode||(E.PlaybackRewindMode={}))[D.TRICK_RW_PLAY_ALL=200]="TRICK_RW_PLAY_ALL",D[D.TRICK_RW_PLAY_FIRST=201]="TRICK_RW_PLAY_FIRST",D[D.TRICK_RW_PLAY_LAST=202]="TRICK_RW_PLAY_LAST",D[D.TRICK_RW_SKIP_ALL=203]="TRICK_RW_SKIP_ALL",E.PlaybackAutoSeekMode=void 0,(C=E.PlaybackAutoSeekMode||(E.PlaybackAutoSeekMode={}))[C.AUTO_SEEK_SKIP_ALL=300]="AUTO_SEEK_SKIP_ALL",C[C.AUTO_SEEK_PLAY_PREROLL=301]="AUTO_SEEK_PLAY_PREROLL",C[C.AUTO_SEEK_PLAY_MIDROLL=302]="AUTO_SEEK_PLAY_MIDROLL",C[C.AUTO_SEEK_PLAY_ALL=303]="AUTO_SEEK_PLAY_ALL",E.PlaybackRepeatedMode=void 0,(M=E.PlaybackRepeatedMode||(E.PlaybackRepeatedMode={}))[M.REPEAT_ALWAYS_PLAY=400]="REPEAT_ALWAYS_PLAY",M[M.REPEAT_PLAY_ONCE=401]="REPEAT_PLAY_ONCE",E.PlaybackInterruptedMode=void 0,(l=E.PlaybackInterruptedMode||(E.PlaybackInterruptedMode={}))[l.INTERRUPT_SKIP=500]="INTERRUPT_SKIP",l[l.INTERRUPT_RESTART=501]="INTERRUPT_RESTART",l[l.INTERRUPT_RESUME=502]="INTERRUPT_RESUME",E.Resolution=void 0,(O=E.Resolution||(E.Resolution={})).HD="HD",O.FHD="FHD",O["2K"]="2K",O["4K"]="4K",O["8K"]="8K";return E.MetadataInformation=K,E.VALUE_UNKNOWN=-99999,E.version="7.0.56",Object.defineProperty(E,"__esModule",{value:!0}),E}({});

