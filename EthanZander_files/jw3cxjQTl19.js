if (self.CavalryLogger) { CavalryLogger.start_js(["z4jL\/"]); }

__d("PUWErrorCodes",[],(function a(b,c,d,e,f,g){f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};}),null);
__d('Optimus',['Event','Parent'],(function a(b,c,d,e,f,g){'use strict';var h={};function i(k,l){var m=l.getTarget();if(!m)return;var n=h[k];for(var o in n){var p=c('Parent').byAttribute(m,o);if(p)do{var q=n[o][p.getAttribute(o)];if(q&&q.handleOptimus(k,p,l)===false)break;}while(p=c('Parent').byAttribute(p.parentNode,o));}}function j(k,l,m,n){if(!h[k]){h[k]={};c('Event').listen(document.documentElement,k,i.bind(null,k));}if(!h[k][l])h[k][l]={};if(!h[k][l][m])h[k][l][m]=n;}f.exports={addRelClick:function k(l,m){j('click','rel',l,m);},addEventListener:j};}),null);
__d('PagesComposerUnpublishedPostsStore',['ReactComposerStoreBase','PagesComposerActionsTypes'],(function a(b,c,d,e,f,g){var h,i,j={isDraft:false,scheduledPublishTime:null,backdateConfig:null,isAdsPost:false,stopFeedDistributionDate:null,isOfferUpsellShown:false,isOfferUpsellAbandoned:false,offerConfig:null};h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return Object.assign({},j);},function(m){switch(m.type){case c('PagesComposerActionsTypes').BACKDATE:l&&l.$PagesComposerUnpublishedPostsStore1(m);break;case c('PagesComposerActionsTypes').SET_DRAFT:l&&l.$PagesComposerUnpublishedPostsStore2(m);break;case c('PagesComposerActionsTypes').SCHEDULE:l&&l.$PagesComposerUnpublishedPostsStore3(m);break;case c('PagesComposerActionsTypes').SET_ADS_POST:l&&l.$PagesComposerUnpublishedPostsStore4(m);break;case c('PagesComposerActionsTypes').SHOW_OFFER_UPSELL:l&&l.$PagesComposerUnpublishedPostsStore5(m);break;case c('PagesComposerActionsTypes').ABANDON_OFFER_UPSELL:l&&l.$PagesComposerUnpublishedPostsStore6(m);break;}});l=this;}k.prototype.getBackdateConfig=function(l){'use strict';return this.getComposerData(l).backdateConfig;};k.prototype.getIsDraft=function(l){'use strict';return this.getComposerData(l).isDraft;};k.prototype.getScheduledPublishTime=function(l){'use strict';return this.getComposerData(l).scheduledPublishTime;};k.prototype.getStopFeedDistributionTime=function(l){'use strict';return this.getComposerData(l).stopFeedDistributionDate;};k.prototype.getIsAdsPost=function(l){'use strict';return this.getComposerData(l).isAdsPost;};k.prototype.getIsOfferUpsellShown=function(l){'use strict';return this.getComposerData(l).isOfferUpsellShown;};k.prototype.getIsOfferUpsellAbandoned=function(l){'use strict';return this.getComposerData(l).isOfferUpsellAbandoned;};k.prototype.getOfferConfig=function(l){'use strict';return this.getComposerData(l).offerConfig;};k.prototype.$PagesComposerUnpublishedPostsStore1=function(l){'use strict';var m=this.getComposerData(l.composerID);m.backdateConfig={year:l.year,month:l.month,day:l.day,hideFromNewsFeed:l.hideFromNewsFeed};};k.prototype.$PagesComposerUnpublishedPostsStore3=function(l){'use strict';var m=this.getComposerData(l.composerID);m.scheduledPublishTime=l.scheduleDate;m.stopFeedDistributionDate=l.stopFeedDistributionDate;};k.prototype.$PagesComposerUnpublishedPostsStore2=function(l){'use strict';var m=this.getComposerData(l.composerID);m.isDraft=true;};k.prototype.$PagesComposerUnpublishedPostsStore4=function(l){'use strict';var m=this.getComposerData(l.composerID);m.isAdsPost=true;};k.prototype.$PagesComposerUnpublishedPostsStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','config']),n=m[0],o=m[1],p=this.getComposerData(n);p.offerConfig=o;p.isOfferUpsellShown=true;this.emitChange(n);};k.prototype.$PagesComposerUnpublishedPostsStore6=function(l){'use strict';var m=this.getComposerData(l.composerID);m.isOfferUpsellAbandoned=true;};f.exports=new k();}),null);
__d('ProfileActionBarLogger',['FBJSON','MarauderLogger','Optimus'],(function a(b,c,d,e,f,g){function h(){c('Optimus').addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function i(j,k,l){c('MarauderLogger').log('profile_high_quality_action',null,c('FBJSON').parse(k.getAttribute('data-store')));return false;}});}g.init=h;}),null);
__d('ProfileEscapeHatch',['CSS','ProfileTabUtils','Run','TimelineComponentKeys','TimelineController'],(function a(b,c,d,e,f,g){var h=[],i=false;function j(k){'use strict';this.$ProfileEscapeHatch1=k;h.push(this);if(!i){c('TimelineController').register(c('TimelineComponentKeys').ESCAPE_HATCH,j);c('Run').onLeave(function(){h=[];});i=true;}}j.handleTabChange=function(k){'use strict';h.forEach(function(l){c('CSS').conditionShow(l.$ProfileEscapeHatch1,c('CSS').shown(l.$ProfileEscapeHatch1)||c('ProfileTabUtils').isTimelineTab(k));});};f.exports=j;}),null);
__d('ProfileNavigation',['Arbiter','CSS','PageTransitions','ProfileDOMID','ProfileOverviewDOMID','ProfileTabConst','ProfileTabUtils','ScriptPath','TimelineComponentKeys','TimelineController','TimelineDOMID','TimelineURI','UIPagelet','URI','$','ge'],(function a(b,c,d,e,f,g){var h=7,i='/profile_book.php',j=null,k=null;function l(w){var x=c('URI').getMostRecentURI(),y=c('TimelineURI').getSectionKeyFromURI(x),z=c('TimelineURI').getTabKeyFromURI(x),aa=c('TimelineURI').getSectionKeyFromURI(w),ba=c('TimelineURI').getTabKeyFromURI(w),ca=w.getQueryData();if(s(x,w)||t(ba)||t(z)||!!ca.and||c('TimelineURI').isVideoPermalink(w))return false;if(ca.hc_location==='profile_browser')return false;if(Object.prototype.hasOwnProperty.call(ca,'theater')){c('Arbiter').subscribeOnce('PhotoSnowlift.CLOSE',u);return false;}if(Object.prototype.hasOwnProperty.call(ca,'force-refresh'))return false;if(c('ProfileTabUtils').isTimelineTab(z)&&!c('ProfileTabUtils').isTimelineTab(ba)&&r(aa)){j=aa;m(aa,'TimelineMedleyView',c('TimelineDOMID').TAB_CONTENT,c('ProfileOverviewDOMID').MEDLEY_ROOT,ca);return true;}if(!c('ProfileTabUtils').isTimelineTab(z)&&c('ProfileTabUtils').isTimelineTab(ba)){j=y;m(c('ProfileTabConst').TIMELINE,'TimelineWallColumn',c('ProfileOverviewDOMID').MEDLEY_ROOT,c('TimelineDOMID').TAB_CONTENT,ca);return true;}return false;}function m(w,x,y,z,aa){c('CSS').hide(c('$')(y));c('Arbiter').inform('save_facebar_query',true);var ba=c('ge')(z);if(ba){c('CSS').show(ba);q(w);}else n(x,w,aa);c('TimelineController').registerCurrentKey(w);}function n(w,x,y){o();var z=babelHelpers['extends']({},k,{tab_key:x});if(y)z=babelHelpers['extends']({},z,y);var aa=function ca(da){p();da();},ba={append:true,displayCallback:aa,finallyHandler:q.bind(null,x),usePipe:true};c('UIPagelet').loadFromEndpoint(w,c('ProfileDOMID').MAIN_COLUMN_PERSONAL,z,ba);}function o(){c('CSS').show(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}function p(){c('CSS').hide(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}function q(w){var x=i;if(w&&!c('ProfileTabUtils').isTimelineTab(w))x+=':'+w;c('ScriptPath').set(x);c('PageTransitions').transitionComplete();}function r(w){return j===null||w===j;}function s(w,x){var y=c('TimelineURI').getVanityFromURI(w),z=w.getQueryData().id,aa=c('TimelineURI').getVanityFromURI(x),ba=x.getQueryData().id;if(y&&aa)return y!==aa;if(z&&ba)return z!==ba;return true;}function t(w){return c('ProfileTabUtils').isActivityLogTab(w)||w===c('ProfileTabConst').MEMORIAL_CONTACT||w===c('ProfileTabConst').POSTS;}function u(){c('PageTransitions').registerHandler(l,h);}var v={init:function w(x){k=x.profileContextData;c('TimelineController').register(c('TimelineComponentKeys').ASYNC_NAV,this);u();},reset:function w(){k=null;j=null;c('PageTransitions').removeHandler(l);}};f.exports=v;}),null);
__d('TimelineNavLight',['csx','cx','invariant','Arbiter','CSS','DataStore','DOM','DOMQuery','Event','Parent','ProfileOverviewDOMID','ProfileOverviewSection','ProfileTabConst','ProfileTimelineUILogger','TimelineAppSectionConstants','TimelineComponentKeys','TimelineController','destroyOnUnload','queryThenMutateDOM','requireWeak'],(function a(b,c,d,e,f,g,h,i,j){var k="_6-7",l="_6-6",m="_529n",n="_5215",o="_9rw",p="_70k",q="._6-7",r="._6-6";function s(t){'use strict';!s.$TimelineNavLight1||j(0);this.$TimelineNavLight2=t;this.$TimelineNavLight3=c('DOMQuery').scry(t,q)[0];this.$TimelineNavLight4=c('DOMQuery').scry(t,r);this.$TimelineNavLight5();c('ProfileOverviewSection').subscribe('Medley/transitionToSection',function(v,w){this.$TimelineNavLight6(w.slice(c('ProfileOverviewDOMID').PREFIX_MEDLEY.length));}.bind(this));c('TimelineController').register(c('TimelineComponentKeys').COVER_NAV,this);var u=c('Event').listen(this.$TimelineNavLight2,'click',this.$TimelineNavLight7.bind(this));s.$TimelineNavLight1=this;c('destroyOnUnload')(function(){this.$TimelineNavLight2=null;this.$TimelineNavLight3=null;this.$TimelineNavLight4=null;u.remove();if(this.$TimelineNavLight8)this.$TimelineNavLight8.remove();s.$TimelineNavLight1=null;}.bind(this));}s.prototype.handleTabChange=function(t){'use strict';this.$TimelineNavLight6(t);};s.prototype.setMoreMenuInstance=function(t){'use strict';this.$TimelineNavLight8=c('Event').listen(t.getRoot(),'click',this.$TimelineNavLight9.bind(this));};s.setMoreMenuInstance=function(t){'use strict';!!s.$TimelineNavLight1||j(0);s.$TimelineNavLight1.setMoreMenuInstance(t);};s.prototype.$TimelineNavLight6=function(t){'use strict';this.$TimelineNavLight3&&c('CSS').removeClass(this.$TimelineNavLight3,k);this.$TimelineNavLight4.some(function(u){var v=c('TimelineAppSectionConstants').collectionTabKeyToAppTabKey[t]||t;if(c('DataStore').get(u,'tab-key')===v){c('CSS').addClass(u,k);this.$TimelineNavLight3=u;return true;}}.bind(this));if(t===c('ProfileTabConst').TIMELINE)c('requireWeak')('ScrollColumn.react',function(u){c('Arbiter').inform(u.EVENT_SHOULD_ADJUST);});};s.prototype.$TimelineNavLight5=function(){'use strict';var t=this.$TimelineNavLight4.length-1,u=this.$TimelineNavLight4[t],v=void 0,w=void 0,x=void 0,y=0;c('queryThenMutateDOM')(function(){v=c('Parent').byClass(this.$TimelineNavLight2,p).offsetWidth;w=u.offsetLeft;x=u.offsetWidth;for(var z=t;z>1;z--){var aa=this.$TimelineNavLight4[z];if(aa.offsetLeft+aa.offsetWidth>v){y++;}else break;}}.bind(this),function(){if(w+x>v)c('CSS').addClass(this.$TimelineNavLight2,n);for(var z=t;z>t-y;z--)c('DOM').remove(this.$TimelineNavLight4[z]);c('CSS').removeClass(c('Parent').byClass(this.$TimelineNavLight2,m),m);}.bind(this));};s.prototype.$TimelineNavLight10=function(t,u){'use strict';var v=c('Parent').byClass(t,u);if(v)return c('DataStore').get(v,'tab-key');return null;};s.prototype.$TimelineNavLight7=function(event){'use strict';var t=this.$TimelineNavLight10(event.target,l);if(t)c('ProfileTimelineUILogger').logCoverNavItemClick(t);};s.prototype.$TimelineNavLight9=function(event){'use strict';var t=this.$TimelineNavLight10(event.target,o);if(t)c('ProfileTimelineUILogger').logCoverNavMoreItemClick(t);};f.exports=s;}),null);
__d('VideoCallHelpler',['FBRTCCallabilityStore','FBRTCCore','TooltipData'],(function a(b,c,d,e,f,g){'use strict';function h(j,k){var l=k.calleeID,m=k.calleeName;j.forEachItem(function(n){if(n.getValue&&n.getValue()==='video_call'){if(c('FBRTCCallabilityStore').isCallable(k.calleeID)){n.enable();}else n.disable();c('TooltipData').set(n.getRoot(),c('FBRTCCallabilityStore').callButtonTooltip(l,m),'right');}});}var i={bindProfileVideoCallAction:function j(k,l){h(k,l);c('FBRTCCallabilityStore').addListener(function(){h(k,l);});k.subscribe('itemclick',function(m,n){if(n.item.getValue()==='video_call'&&!n.item.isDisabled())c('FBRTCCore').startOutgoingCall(l.calleeID,'timeline_profile',false);});}};f.exports=i;}),null);
__d('TimelineLogging',['TimelineComponentKeys','TimelineController','reportData'],(function a(b,c,d,e,f,g){var h=false,i=0,j=null,k=null,l={init:function m(n){if(h)return;i=n;c('TimelineController').register(c('TimelineComponentKeys').LOGGING,this);},reset:function m(){h=false;i=0;j=null;},log:function m(n,o){o.profile_id=i;c('reportData')(n,{gt:o});},logSectionChange:function m(n,o){var p={timeline_section_change:1,key:n};if(j&&n==j){p.timeline_scrubber=1;j=null;}if(k&&n==k){p.sticky_header_nav=1;k=null;}l.log('timeline',p);},logScrubberClick:function m(n){j=n;},logStickyHeaderNavClick:function m(n){k=n;}};f.exports=l;}),null);
__d('ReactComposerFocusStore',['ReactComposerFocusActionTypes','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){var k=void 0;i.constructor.call(this,function(){return {focusConfig:{},isFocused:false};},function(l){if(!k)return;switch(l.type){case c('ReactComposerFocusActionTypes').SUBSCRIBE:k.$ReactComposerFocusStore1(l.composerID,l.onFocusAcquiredCallback,l.onFocusLostCallback);k.emitChange(l.composerID);break;case c('ReactComposerFocusActionTypes').UNSUBSCRIBE:k.$ReactComposerFocusStore2(l.composerID);k.emitChange(l.composerID);break;case c('ReactComposerFocusActionTypes').FOCUS_ACQUIRED:k.$ReactComposerFocusStore3(l.composerID);k.emitChange(l.composerID);break;case c('ReactComposerFocusActionTypes').FOCUS_LOST:k.$ReactComposerFocusStore4(l.composerID);k.emitChange(l.composerID);break;}});k=this;}j.prototype.$ReactComposerFocusStore1=function(k,l,m){var n=this.getComposerData(k);n.focusConfig={onFocusAcquiredCallback:l,onFocusLostCallback:m};};j.prototype.$ReactComposerFocusStore2=function(k){var l=this.getComposerData(k);l.focusConfig={};};j.prototype.$ReactComposerFocusStore3=function(k){var l=this.getComposerData(k);if(l.focusConfig.onFocusAcquiredCallback)setTimeout(l.focusConfig.onFocusAcquiredCallback,0);l.isFocused=true;};j.prototype.$ReactComposerFocusStore4=function(k){var l=this.getComposerData(k);if(l.focusConfig.onFocusLostCallback)setTimeout(l.focusConfig.onFocusLostCallback,0);l.isFocused=false;};j.prototype.isComposerFocused=function(k){return this.getComposerData(k).isFocused;};f.exports=new j();}),null);
__d("XAfterPartyWWWController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ads\/afterparty\/www\/",{page_id:{type:"Int",required:true},scrolling_offset:{type:"Int",defaultValue:0}});}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/unpublished_posts\/post_success\/",{type:{type:"String",required:true}});}),null);
__d('PagesComposer',['csx','cx','ActorURI','Arbiter','AsyncRequest','Bootloader','ReactComposerFocusStore','ComposerXMarauderLogger','ComposerXStore','DOM','PagesComposerUnpublishedPostsStore','Parent','ReloadPage','Run','XUnpublishedPostSuccessController','XAfterPartyWWWController','$','getObjectValues','goURI'],(function a(b,c,d,e,f,g,h,i){var j=500,k=20,l=58,m=void 0,n=void 0;function o(){c('ComposerXMarauderLogger').logCompleted(m.id);}function p(s){if(s.hidePost){var t=c('ComposerXStore').getAllForComposer(m.id);if(!c('getObjectValues')(t).length){var u=null;if(c('PagesComposerUnpublishedPostsStore').getIsDraft(m.id))u='draft';if(c('PagesComposerUnpublishedPostsStore').getScheduledPublishTime(m.id))u='scheduled';if(u){var v=c('XUnpublishedPostSuccessController').getURIBuilder().setString('type',u).getURI();v=c('ActorURI').create(v,n);new (c('AsyncRequest'))().setURI(v).send();}}o();return;}if(s.redirect){var t=c('ComposerXStore').getAllForComposer(m.id);c('getObjectValues')(t).forEach(function(y){if(y.reset)y.reset(y);});c('goURI')(s.redirect);o();return;}if(!s.streamStory){c('ReloadPage').now();return;}if(s.backdatedTime){c('Bootloader').loadModules(["PagesStoryPublisher"],function(y){y.publish(s);},'PagesComposer');o();return;}var w=r.renderStory(m,s.streamStory);c('Arbiter').inform('TimelineComposer/on_after_publish',w,c('Arbiter').BEHAVIOR_PERSISTENT);if(n){var x=c('XAfterPartyWWWController').getURIBuilder().setInt('page_id',n);q(x,0);}o();}function q(s,t){if(!c('ReactComposerFocusStore').isComposerFocused(m.id)){if(t>0)s.setInt('scrolling_offset',l);new (c('AsyncRequest'))().setURI(s.getURI()).send();}else if(t<k)setTimeout(q.bind(this,s,t+1),j);}var r={init:function s(t,u){m=c('$')(t);n=u;var v=c('Arbiter').subscribe('composer/publish',function(event,w){if(w.composer_id===m.id)p(w);});c('Run').onLeave(v.unsubscribe.bind(v));},renderStory:function s(t,u){var v=c('Parent').bySelector(t,"#pagelet_timeline_main_column");if(!v)return;var w=c('DOM').scry(v,"._5sem")[0],x=c('DOM').prependContent(w,u)[0];c('Bootloader').loadModules(["Animation"],function(y){new y(x).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(y.ease.both).go();},'PagesComposer');return x;},replaceByID:function s(t,u){c('DOM').replace(c('$')(t),u);}};f.exports=b.PagesComposer||r;}),null);
__d('glyph',[],(function a(b,c,d,e,f,g){f.exports=function h(i){throw new Error('glyph: Unexpected glyph call.');};}),null);
__d('Emscripten',[],(function a(b,c,d,e,f,g){f.exports={isSupported:function h(){return typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set;}};}),null);
__d('PooledWebWorker',['WebWorker'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('WebWorker'));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this,m);this.$PooledWebWorker1=l;this.$PooledWebWorker2=k;}j.prototype.getIndex=function(){'use strict';return this.$PooledWebWorker1;};j.prototype.getPool=function(){'use strict';return this.$PooledWebWorker2;};f.exports=j;}),null);
__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],(function a(b,c,d,e,f,g){h.isSupported=function(){'use strict';return c('PooledWebWorker').isSupported();};function h(i,j){'use strict';this.$WebWorkerPool1=[];for(var k=0;k<j;k++)this.$WebWorkerPool1.push(new (c('PooledWebWorker'))(this,k,i).setErrorHandler(this.$WebWorkerPool2).setMessageHandler(this.$WebWorkerPool3).execute());this.$WebWorkerPool4=0;}h.prototype.setMessageHandler=function(i){'use strict';this.$WebWorkerPool5=i||c('emptyFunction');return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this.$WebWorkerPool1.forEach(function(j){return j.setAllowCrossPageTransition(i);});return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$WebWorkerPool6=i||c('emptyFunction');return this;};h.prototype.postMessage=function(){'use strict';var i=this.getWorker();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];i.postMessage.apply(i,k);return i;};h.prototype.$WebWorkerPool3=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);this.getPool().$WebWorkerPool5.apply(this.getPool(),j);};h.prototype.$WebWorkerPool2=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);return this.getPool().$WebWorkerPool6.apply(this.getPool(),j);};h.prototype.getWorker=function(){'use strict';var i=this.$WebWorkerPool1[this.$WebWorkerPool4];this.$WebWorkerPool4=(this.$WebWorkerPool4+1)%this.$WebWorkerPool1.length;return i;};f.exports=h;}),null);
__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','PUWErrorCodes','WebWorker','WebWorkerPool'],(function a(b,c,d,e,f,g){var h=null;i.isSupported=function(){'use strict';return c('WebWorkerPool').isSupported()&&c('Emscripten').isSupported()&&!c('JpegResizerConfig').isGKBlacklisted;};i.getSingleton=function(j){'use strict';if(!h)h=new i(j||i.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return h;};i.prepareResource=function(j){'use strict';c('WebWorker').prepareResource(c('JpegResizeWorkerResource'),j);};function i(j){'use strict';j=j||i.DEFAULT_POOL_SIZE;c('WebWorker').prepareResource(c('JpegResizeWorkerResource'));this.$JpegResizer1=new (c('WebWorkerPool'))(c('JpegResizeWorkerResource'),j).setErrorHandler(this.$JpegResizer2.bind(this)).setMessageHandler(this.$JpegResizer3.bind(this));this.$JpegResizer4={};this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}i.prototype.setHighQuality=function(j){'use strict';if(j){this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer5=i.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer6=i.LOW_QUALITY_RESIZE_WIDTH;}return this;};i.prototype.setAllowCrossPageTransition=function(j){'use strict';this.$JpegResizer1.setAllowCrossPageTransition(j);return this;};i.prototype.resizeBlob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6,this.$JpegResizer5,k,l);};i.prototype.resize360Blob=function(j,k,l,m){'use strict';var n=this.$JpegResizer6*3,o=this.$JpegResizer5*3;if(m){n=m;o=m;}return this.$JpegResizer7(j,n,o,k,l);};i.prototype.$JpegResizer7=function(j,k,l,m,n){'use strict';var o=this.$JpegResizer1.getWorker();if(o.isCurrentState('terminated')){var p=new Error('Worker terminated');p.code=c('PUWErrorCodes').WORKER_TERMINATED;m(p);return this;}var q=o.postMessage({blob:j,height:l,width:k}).getIndex();this.$JpegResizer8(q).unshift({done:m,progress:n});return this;};i.prototype.$JpegResizer8=function(j){'use strict';if(!Object.prototype.hasOwnProperty.call(this.$JpegResizer4,j))this.$JpegResizer4[j]=[];return this.$JpegResizer4[j];};i.prototype.$JpegResizer2=function(j,k){'use strict';j.terminate();var l=this.$JpegResizer8(j.getIndex());this.$JpegResizer9(k);l.forEach(function(m){return m.done(k);});l.length=0;};i.prototype.$JpegResizer3=function(j,k){'use strict';if(k.error)this.$JpegResizer9(k.error);if(k.done){this.$JpegResizer8(j.getIndex()).pop().done(k.error,k.blob,k.skipped);}else{var l=this.$JpegResizer8(j.getIndex()),m=l[l.length-1].progress;if(m)m({written:k.written,total:k.total});}};i.prototype.$JpegResizer9=function(j){'use strict';var k=j.message;if(k&&k.indexOf('Not a JPEG file')!==-1){j.code=c('PUWErrorCodes').BAD_JPEG;}else if(k&&k.indexOf('abort()')!==-1){j.code=c('PUWErrorCodes').WORKER_ABORT;}else j.code=c('PUWErrorCodes').UNKNOWN_RESIZE_ERROR;};i.DEFAULT_POOL_SIZE=3;i.DEFAULT_RESIZE_HEIGHT=2048;i.DEFAULT_RESIZE_WIDTH=2048;i.LOW_QUALITY_RESIZE_HEIGHT=960;i.LOW_QUALITY_RESIZE_WIDTH=960;f.exports=i;}),null);