!function(){"use strict";var t="2.1.5";const e={universalga:"ga",trackerName:"",label:"file",trackingobject:"_gaq",gtag:"gtag"};class i{constructor(t,i){if(this.player=t,this.utils=t.utils,this._=t._,this._config=this._.extend({},e,i),this.onGaTrack=i.debug&&this._.isFunction(i.onGaTrack)?i.onGaTrack:this.utils.noop,this._universalWrapper=void 0,this._currItem=void 0,this._state=void 0,this._casting=!1,("string"!=typeof this._config.gtag||void 0===window[this._config.gtag])&&"function"!=typeof this._config.gtag){const t=this._getTrackingObject();if(!t||"string"==typeof t)return void this.utils.log("Could not find Google Analytics Interface.",this._config)}this.player.on("playlistItem",(t=>{const e=t.item;var i,s,n;this._currItem=this._.extend({played:!1},e),this._currItem.label=(i=this.utils,s=e,n=this._config.label,s?n&&s[n]&&s[n].length?"file"===n?i.getAbsolutePath(s[n]):s[n]:s.file?s.file:s.sources?((t,e)=>{const i=[];for(let t=e.length-1;t--;)e[t].file&&i.push(e[t].file);return i.sort(),t.getAbsolutePath(i[0])})(i,s.sources):"":"")})),this.player.on("play",(t=>{this._currItem.played?"paused"===this._state&&this.trackEventNew("Resume","interaction"!==t.playReason):(this._currItem.played=!0,this.trackEventNew("Play","interaction"!==t.playReason)),this._state="playing"})),this.player.on("buffer",(()=>{this.trackEventNew("Buffer",!0),this._state="buffering"})),this.player.on("pause",(t=>{this.trackEventNew("Pause","interaction"!==t.pauseReason),this._state="paused"})),this.player.on("seek",(()=>{this.trackEventNew("Seek",!0)})),this.player.on("complete",(()=>{this.trackEventNew("Complete",!0)})),this.player.on("cast",(t=>{this._casting=Boolean(t.active)}))}_getTrackingObject(){return window[this._config.universalga]?(this._universalWrapper||(this._universalWrapper={push:t=>{const e=window[this._config.universalga],i=this._config.trackerName?`${this._config.trackerName}.send`:"send";t.splice(0,1,i,"event"),t[5]={nonInteraction:t[6]},t.length=6,e.apply(window,t)}}),this._universalWrapper):"string"==typeof this._config.trackingobject?window[this._config.trackingobject]:this._config.trackingobject}trackAsync(t,e,i,s){this._getTrackingObject().push(["_trackEvent",t,e,i,void 0,s])}trackSync(t,e,i,s){this._getTrackingObject()._trackEvent(t,e,i,void 0,s)}trackGtag(t,e,i,s,n){t("event",i,{event_category:e,event_label:s,event_action:i,non_interaction:n})}trackEventNew(t,e){let i="";const s="function"==typeof this._config.gtag?this._config.gtag:window[this._config.gtag];this._casting||(s?(i="gtag",this.trackGtag(s,"JW Player Video",t,this._currItem.label,e)):void 0!==this._getTrackingObject()._trackEvent?(i="sync",this.trackSync("JW Player Video",t,this._currItem.label,e)):void 0!==this._getTrackingObject().push&&(i="async",this.trackAsync("JW Player Video",t,this._currItem.label,e)),this.onGaTrack({type:i,category:"JW Player Video",action:t,label:this._currItem.label,nonInteraction:e}))}}i.version=t;class s{constructor(t,e){this.player=t,this.utils=t.utils,this.config=e,this.sendEnhancedEvents=Boolean(this.config.sendEnhancedEvents),this.currItem=null,window.gtag?(this.player.on("playlistItem",(t=>{this.currItem=t.item;const e=this.currItem.duration;e&&e>0&&(this.currItem.progressTracker={10:!1,25:!1,50:!1,75:!1})})),this.sendEnhancedEvents&&(this.player.on("firstFrame",(()=>{this.sendCustomEvent("video_start")})),this.player.on("time",(t=>{var e;const i=Math.floor(t.currentTime/t.duration*100);!1===(null==(e=this.currItem)?void 0:e.progressTracker[i])&&(this.sendCustomEvent("video_percentage",i),this.currItem.progressTracker[i]=!0)}))),this.player.on("play",(t=>{this.currItem.played?"paused"===t.oldstate&&this.sendCustomEvent(this.sendEnhancedEvents?"video_resume":"Resume"):(this.currItem.played=!0,this.sendCustomEvent(this.sendEnhancedEvents?"video_play":"Play"))})),this.player.on("buffer",(()=>{this.sendCustomEvent(this.sendEnhancedEvents?"video_buffer":"Buffer")})),this.player.on("pause",(()=>{this.sendCustomEvent(this.sendEnhancedEvents?"video_pause":"Pause")})),this.player.on("seek",(()=>{this.sendCustomEvent(this.sendEnhancedEvents?"video_seek":"Seek")})),this.player.on("complete",(()=>{this.sendCustomEvent(this.sendEnhancedEvents?"video_complete":"Complete")})),this.player.on("cast",(t=>{this.casting=Boolean(t.active)}))):this.utils.log("Could not find Google Analytics Interface.",this.config)}sendCustomEvent(t,e=0){if(this.casting||!window.gtag)return;const i=this.player.getPosition(),s=this.player.getViewable(),n={video_current_time:i>=0?i:null,video_duration:this.currItem.duration||null,video_percent:"complete"===t?100:e,video_provider:"JW Player",video_title:this.currItem.title||null,video_url:this.currItem.file||null,visible:s?"true":"false"};window.gtag("event",t,n)}}var n,a,r;s.version=t;const o=window.jwplayerPluginJsonp||window.jwplayer().registerPlugin;let c=!0;!1===(null==(n=window.jwplayer().getConfig())||null==(a=n.setupConfig)||null==(r=a.ga)?void 0:r.useUniversalAnalytics)&&(c=!1),o("gapro","8.0.0",c?i:s)}();