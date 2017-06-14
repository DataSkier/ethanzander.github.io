if (self.CavalryLogger) { CavalryLogger.start_js(["3a1Se"]); }

__d("PagesLikeFollowNotifActions",[],(function a(b,c,d,e,f,g){f.exports={INIT_DATA:"init_data",LIKE:"like",UNLIKE:"unlike",FOLLOW_CHANGED:"follow_changed",NOTIF_CHANGE:"notif_change",NOTIF_ALL_ON:"notif_all_on",NOTIF_ALL_OFF:"notif_all_off",NEWS_FEED_CHANGE:"news_feed_change"};}),null);
__d("PublishingToolsSource",[],(function a(b,c,d,e,f,g){f.exports={ADS_CANVAS_LANDING_PAGE:"ads_canvas_landing_page",COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",PAGES_MANAGER_BAR:"pages_manager_bar",PAYMENT_SETTINGS_HEADER:"payment_settings_header",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_INSIGHTS:"video_insights",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_UPLOAD_NOTIF:"video_upload_notif",LEAD_GEN_DOWNLOAD_DIALOG_FORMS_LIB:"lead_gen_download_dialog_forms_lib",LEAD_GEN_DOWNLOAD_DIALOG_NAM:"lead_gen_download_dialog_nam",LEAD_GEN_DOWNLOAD_DIALOG_NAM_LINK:"lead_gen_download_dialog_nam_link",LEAD_GEN_DOWNLOAD_DIALOG_PE:"lead_gen_download_dialog_pe",LEAD_GEN_DOWNLOAD_DIALOG_PE_LINK:"lead_gen_download_dialog_pe_link",LEAD_GEN_DOWNLOAD_DIALOG_OTHER:"lead_gen_download_dialog_other",LEAD_GEN_FORM_LIBRARY_NOTICE:"lead_gen_form_library_notice",LEAD_GEN_INLINE_FORM_SELECTOR:"lead_gen_inline_form_selector",LEAD_GEN_ORGANIC:"lead_gen_organic",WWW_CHATBAR:"www_chatbar"};}),null);
__d("VideoEditSource",[],(function a(b,c,d,e,f,g){f.exports={PROCESSING_DIALOG:"processing_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_ASSET_INSIGHTS:"video_asset_insights",PERMALINK:"permalink",TIMELINE:"timeline",SNOWLIFT:"snowlift",LIBRARY:"library",SEASON_DETAILS:"season_details",PLAYLIST_DETAILS:"playlist_details",REFERENCE_LIBRARY:"reference_library",CAROUSEL_PREVIEW:"carousel_preview",PAGE_VIDEO_LPP_PUBLISH:"page_video_lpp_publish",SCHEDULE_LIVE_STORY:"schedule_live_story",UNKNOWN:"unknown"};}),null);
__d("VideoLibrarySource",[],(function a(b,c,d,e,f,g){f.exports={VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_INSIGHTS:"video_insights",VIDEOS_HUB:"videos_hub"};}),null);
__d('ProgressBar.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$UIProgressBar1=function(){var r=this.props,s=Math.min(Math.max((r.value-r.min)/(r.max-r.min)*100,0),100);return s;}.bind(this),this.$UIProgressBar2=function(){return this.props.label!=null&&this.props.size!=='small';}.bind(this),this.$UIProgressBar3=function(){return this.$UIProgressBar2()&&this.props.typesetting==='float';}.bind(this),this.$UIProgressBar4=function(){if(!this.$UIProgressBar2())return null;return this.props.label;}.bind(this),this.$UIProgressBar5=function(){if(this.$UIProgressBar3())return c('React').createElement('div',{className:"_6a"},' ');return null;}.bind(this),this.$UIProgressBar6=function(){var r=Math.round(this.$UIProgressBar1()),s="_5e4k"+(r===0?' '+"_5e2d":'')+(r===100?' '+"_5e4j":''),t=this.$UIProgressBar4();if(t)t=c('React').createElement('span',{className:"_5e2h"},t);var u=c('React').createElement('div',{className:s,style:{width:r+'%'}},this.$UIProgressBar5(),t);return u;}.bind(this),this.$UIProgressBar7=function(){var r=this.$UIProgressBar4();if(!r)return null;r=c('React').createElement('span',{className:"_5e2h _5e2n"},r);if(this.$UIProgressBar3()){var s=this.$UIProgressBar1(),t={left:s+'%',width:s+'%'},u=c('React').createElement('div',{className:"_5e2g",style:t},this.$UIProgressBar5(),r);return u;}return r;}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5e4h"+(!this.$UIProgressBar3()?' '+"_5e2k":'')+(this.$UIProgressBar3()?' '+"_5e2j":'')+(this.props.size==='small'?' '+"_5e2l":'')+(this.props.isRounded===true?' '+"_5e2m":'');if(this.$UIProgressBar3()){return c('React').createElement('div',babelHelpers['extends']({},this.props,{role:'progressbar','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':this.$UIProgressBar1(),className:c('joinClasses')(this.props.className,m)}),c('React').createElement('div',{className:"_5e2k"},this.$UIProgressBar7(),this.$UIProgressBar6()));}else return c('React').createElement('div',babelHelpers['extends']({},this.props,{role:'progressbar','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':this.$UIProgressBar1(),className:c('joinClasses')(this.props.className,m)}),this.$UIProgressBar7(),this.$UIProgressBar6());};l.propTypes={value:k.number.isRequired,label:k.oneOfType([k.string,k.element]),min:k.number,max:k.number,size:k.oneOf(['small','large']),typesetting:k.oneOf(['float','inline']),isRounded:k.bool};l.defaultProps={min:0,max:100,size:'large',typesetting:'inline',isRounded:false};f.exports=l;}),null);
__d('OptimisticVideoPostUtils',['AsyncRequest'],(function a(b,c,d,e,f,g){var h={shouldShowOptimisticPost:function i(j){if(j.isScheduledPost||j.isHiddenFromTimeline||j.isSecret||!j.isPageToPage&&!j.isToUserProfile||j.isDraft)return false;return true;},checkVideoStatus:function i(j,k,l,m){new (c('AsyncRequest'))().setURI('/ajax/video/encode/feedback/ping/').setData({video_id:j}).setHandler(function(n){var o=n.getPayload();if(n.error||o.error){l(j,n);}else if(o.is_ready){k(j);}else m(j);}).send();}};f.exports=h;}),null);
__d('SubscriptionLevels',[],(function a(b,c,d,e,f,g){var h={ALL:'162318810514679',DEFAULT:'271670892858696',TOP:'266156873403755'};f.exports=h;}),null);
__d('EditSubscriptions',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','MenuDeprecated','Parent','SubscriptionLevels','arrayContains','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i){var j=45,k=[c('SubscriptionLevels').ALL,c('SubscriptionLevels').DEFAULT,c('SubscriptionLevels').TOP],l={},m={},n={},o={},p={},q={},r={},s={},t={},u={},v={},w="/ajax/follow/follow_profile.php",x="/ajax/follow/unfollow_profile.php",y="/ajax/settings/notifications/notify_me.php",z={},aa={},ba={},ca=null,da={};function ea(cb){return c('arrayContains')(k,cb);}function fa(cb,db,eb,fb){var gb=c('Parent').byClass(fb,'uiMenuItem')||c('Parent').bySelector(fb,"._54ni"),hb=c('getOrCreateDOMID')(cb);if(!gb||!c('DOM').contains(cb,gb)){return;}else if(c('CSS').hasClass(gb,'SubscribeMenuSubscribeCheckbox')){if(n[db]){ka(hb,db);}else ja(hb,db);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuUnsubscribe')){ka(hb,db);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuSettingsItem')){wa(cb,true);return false;}else if(c('CSS').hasClass(gb,'SubscriptionMenuGoBack')){wa(cb,false);return false;}else if(c('CSS').hasClass(gb,'SubscriptionMenuItem')){ha(cb,db,eb,gb);return false;}else if(c('CSS').hasClass(gb,'SubscribeMenuNotifyMeCheckbox')){ga(cb,db);return false;}}function ga(cb,db){if(o[db]){ab(cb,db);}else za(cb,db);}function ha(cb,db,eb,fb){if(c('CSS').hasClass(fb,'SubscriptionMenuLevel')){if(c('MenuDeprecated').isItemChecked(fb))return;ua(cb,db,na(fb),true,eb);}else if(c('CSS').hasClass(fb,'SubscriptionMenuCategory')){ra(db,fb,!c('MenuDeprecated').isItemChecked(fb),true,eb);}else if(c('CSS').hasClass(fb,'SubscriptionAppStory'))ta(db,fb,!c('MenuDeprecated').isItemChecked(fb),eb);}function ia(cb){return da[cb]?da[cb]:0;}function ja(cb,db){var eb={profile_id:db};c('Arbiter').inform('FollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').UNBLACKLIST,eb);new (c('AsyncRequest'))().setURI(w).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'FollowUserFail',eb)).send();}function ka(cb,db){var eb={profile_id:db};c('Arbiter').inform('UnfollowingUser',eb);c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,eb);new (c('AsyncRequest'))().setURI(x).setMethod('POST').setData({profile_id:db,location:ia(cb)}).setErrorHandler(c('Arbiter').inform.bind(null,'UnfollowUserFail',eb)).send();}function la(cb,db,eb){var fb={profile_id:cb,level:s[cb],custom_categories:t[cb],location:eb};new (c('AsyncRequest'))().setURI('/ajax/follow/manage_subscriptions.php').setData(fb).send();}function ma(cb,db){var eb=t[db]||[],fb=c('MenuDeprecated').getItems(cb);fb.forEach(function(gb){if(c('CSS').hasClass(gb,'SubscriptionMenuCategory')){var hb=na(gb);if(c('arrayContains')(eb,hb)){pa(gb);}else qa(gb);}else if(c('CSS').hasClass(gb,'SubscriptionAppStory')){var ib=na(gb);if(ba[db]&&ba[db][ib]){pa(gb);}else qa(gb);}});ua(cb,db,s[db],false);}function na(cb){var db=c('DOM').scry(cb,'input')[0];return db&&db.value;}function oa(cb){return c('DOM').find(cb,'a.itemAnchor');}function pa(cb){c('CSS').addClass(cb,'checked');oa(cb).setAttribute('aria-checked',true);}function qa(cb){c('CSS').removeClass(cb,'checked');oa(cb).setAttribute('aria-checked',false);}function ra(cb,db,eb,fb,gb){if(eb){pa(db);}else qa(db);var hb=na(db);if(ea(hb)){eb&&sa(cb,hb);}else if(eb){if(!c('arrayContains')(t[cb],hb))t[cb].push(hb);}else{var ib=t[cb].indexOf(hb);if(ib!==-1)t[cb].splice(ib,1);}if(fb)la(cb,hb,gb);}function sa(cb,db){s[cb]=db;c('Arbiter').inform('SubscriptionLevelUpdated',{profile_id:cb,level:db});}function ta(cb,db,eb,fb){var gb='/ajax/feed/filter_action/',hb=na(db),ib={actor_id:cb,app_id:hb};if(eb){pa(db);gb+='resubscribe_user_app/';ib.action='resubscribe_user_app';if(!ba[cb])ba[cb]={};ba[cb][hb]=true;}else{qa(db);gb+='unsubscribe_user_app_checkbox/';ib.action='unsubscribe_user_app_checkbox';if(ba[cb])ba[cb][hb]=false;}new (c('AsyncRequest'))().setURI(gb).setData(ib).send();}function ua(cb,db,eb,fb,gb){var hb=c('DOM').scry(cb,'.SubscriptionMenuLevel'),ib=null;hb.forEach(function(jb){if(na(jb)==eb){ib=jb;}else if(c('MenuDeprecated').isItemChecked(jb))ra(db,jb,false,false);});ib&&ra(db,ib,true,fb,gb);}function va(cb,db,eb){n[db]=eb;c('CSS').conditionClass(cb,'isUnsubscribed',!eb);var fb=c('DOM').scry(cb,'li.SubscribeMenuSubscribeCheckbox');if(fb.length!==0){var gb=fb[0];if(eb){pa(gb);}else qa(gb);}}function wa(cb,db){c('CSS').conditionClass(cb,'subscriptionMenuOpen',db);}function xa(cb,db,eb){var fb=c('DOM').find(cb,".FriendListSubscriptionsMenu"),gb=c('DOM').find(fb,".uiMenuInner");if(ca!=null)ca.forEach(function(hb){gb.removeChild(hb);});eb.forEach(function(hb){gb.appendChild(hb);});ca=eb;}c('Arbiter').subscribe('UnfollowUser',function(cb,db){if(u[db.profile_id]){sa(db.profile_id,u[db.profile_id]);t[db.profile_id]=v[db.profile_id].slice();}});c('Arbiter').subscribe('UpdateSubscriptionLevel',function(cb,db){var eb=db.profile_id+'',fb=db.level+'';sa(eb,fb);var gb;for(gb in l)if(l[gb]===eb){var hb=c('ge')(gb);hb&&ua(hb,eb,fb,false);}});c('Arbiter').subscribe('listeditor/close_editor',function(){var cb;for(cb in l){var db=c('ge')(cb);db&&wa(db,false);}});function ya(cb,db,eb){o[db]=eb;var fb=aa[db];if(fb){if(eb){fb.select();}else fb.deselect();return;}var gb=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckbox');if(gb.length!==0){var hb=gb[0];c('CSS').conditionShow(hb,true);var ib=c('DOM').scry(cb,'li.SubscribeMenuNotifyMeCheckboxSeparator');if(ib.length>0)c('CSS').conditionShow(ib[0],true);if(eb){pa(hb);}else qa(hb);}}function za(cb,db){var eb={profile_id:db};c('Arbiter').inform('EnableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:true}).setErrorHandler(c('Arbiter').inform.bind(null,'EnableNotifsForUserFail',eb)).send();}function ab(cb,db){var eb={profile_id:db};c('Arbiter').inform('DisableNotifsForUser',eb);new (c('AsyncRequest'))().setURI(y).setMethod('POST').setData({notifier_id:db,enable:false}).setErrorHandler(c('Arbiter').inform.bind(null,'DisableNotifsForUserFail',eb)).send();}var bb={init:function cb(db,eb,fb){var gb=c('getOrCreateDOMID')(db);da[gb]=fb;if(!l[gb])c('Event').listen(db,'click',function(hb){return fa(db,l[gb],fb,hb.getTarget());});if(fb===j&&z[eb].length)xa(db,eb,z[eb]);if(s[eb])ma(db,eb);l[gb]=eb;c('CSS').conditionClass(db,'NonFriendSubscriptionMenu',!m[eb]);c('CSS').conditionClass(db,'cannotSubscribe',!p[eb]);c('CSS').conditionClass(db,'noSubscriptionLevels',q[eb]&&!r[eb]);c('CSS').conditionClass(db,'noSubscribeCheckbox',!m[eb]&&!q[eb]);va(db,eb,n[eb]);ya(db,eb,o[eb]);c('Arbiter').subscribe(['FollowUser','FollowingUser','UnfollowUserFail'],function(hb,ib){if(ib.profile_id==eb)va(db,eb,true);}.bind(this));c('Arbiter').subscribe(['UnfollowUser','UnfollowingUser','FollowUserFail'],function(hb,ib){if(ib.profile_id==eb){c('Arbiter').inform('SubMenu/Reset');va(db,eb,false);}}.bind(this));c('Arbiter').subscribe(['EnableNotifsForUser','DisableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,true);}.bind(this));c('Arbiter').subscribe(['DisableNotifsForUser','EnableNotifsForUserFail'],function(hb,ib){if(ib.profile_id==eb)ya(db,eb,false);}.bind(this));c('Arbiter').subscribe('listeditor/friend_lists_changed',function(hb,ib){if(ib.notify_state){var jb=ib.added_uid?ib.added_uid:ib.removed_uid;ya(db,jb,ib.notify_state.is_notified);}}.bind(this));},getSubscriptions:function cb(db){return {level:s[db],custom_categories:t[db]};},registerTimelineNotifySelector:function cb(db,eb){var fb=db.getInitialMenu(),gb=db.getContentRoot();fb.forEachItem(function(hb){var ib=hb.getRoot();if(c('CSS').hasClass(ib,'SubscribeMenuNotifyMeCheckbox')){aa[eb]=hb;ya(gb,eb,o[eb]);}});fb.subscribe('itemclick',function(hb,ib){if(ib.item===aa[eb])ga(gb,eb);return true;});},toggleNotificationsOnJoin:function cb(db,eb){if(o[db]!==eb)ga(null,db);},setSubscriptions:function cb(db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob){sa(db,jb+'');m[db]=eb;n[db]=fb;p[db]=gb;q[db]=hb;r[db]=ib;u[db]=lb+'';t[db]=kb.map(String);v[db]=mb.map(String);z[db]=ob;o[db]=nb;}};f.exports=b.EditSubscriptions||bb;}),null);
__d('ProfileVideoWWWFrontendActionTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ProfileVideoWWWFrontendActionLoggerConfig',this.$ProfileVideoWWWFrontendActionTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ProfileVideoWWWFrontendActionTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1=babelHelpers['extends']({},this.$ProfileVideoWWWFrontendActionTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.event=j;return this;};h.prototype.setSessionID=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.session_id=j;return this;};h.prototype.setUploadError=function(j){this.$ProfileVideoWWWFrontendActionTypedLogger1.upload_error=j;return this;};var i={event:true,session_id:true,upload_error:true};f.exports=h;}),null);
__d('PagesEventObserver',['Banzai'],(function a(b,c,d,e,f,g){var h='pages_client_logging',i={VITAL_WAIT:c('Banzai').VITAL_WAIT,logData_DEPRECATED:function j(k,l){var m={delay:l||c('Banzai').VITAL_WAIT};c('Banzai').post(h,k,m);},notify:function j(event,k,l,m,n){var o=babelHelpers['extends']({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||c('Banzai').VITAL_WAIT};c('Banzai').post(h,o,p);},registerLogOnClick:function j(k,l){var m=arguments.length<=2||arguments[2]===undefined?null:arguments[2];k.addEventListener('click',function(){if(m)i.notify(m,l,null,null,null);});}};f.exports=i;}),null);
__d('PagesBanzaiEventListener',['Event','PagesEventObserver','Run'],(function a(b,c,d,e,f,g){var h={registerLogEvent:function i(j,k,l){var m=c('Event').listen(j,'click',function(event){c('PagesEventObserver').logData_DEPRECATED(k,l);});c('Run').onLeave(function(){m.remove();});}};f.exports=h;}),null);
__d('PagesLikeFollowNotifDispatcher',['Arbiter','ExplicitRegistrationReactDispatcher','PageLikeConstants','PagesLikeFollowNotifActions','SubscriptionsHandler'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(k){i.constructor.call(this,k);var l=new (c('SubscriptionsHandler'))();l.addSubscriptions(c('Arbiter').subscribe(c('PageLikeConstants').LIKED,function(m,n){return this.dispatchLike(n.profile_id);}.bind(this)),c('Arbiter').subscribe(c('PageLikeConstants').UNLIKED,function(m,n){return this.dispatchUnlike(n.profile_id);}.bind(this)));}j.prototype.dispatchLike=function(k){this.dispatch({type:c('PagesLikeFollowNotifActions').LIKE,data:{pageID:k,likeStatus:true}});};j.prototype.dispatchUnlike=function(k){this.dispatch({type:c('PagesLikeFollowNotifActions').UNLIKE,data:{pageID:k,likeStatus:false}});};f.exports=new j({strict:true});}),null);
__d('PagesFollowStore',['FluxReduceStore','PagesLikeFollowNotifActions','PagesLikeFollowNotifDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxReduceStore'));i=h&&h.prototype;j.prototype.getInitialState=function(){return {};};j.prototype.reduce=function(k,l){var m=babelHelpers['extends']({},k);switch(l.type){case c('PagesLikeFollowNotifActions').INIT_DATA:if(l.data.pageID in k)return k;m[l.data.pageID]=l.data.followStatus;return m;case c('PagesLikeFollowNotifActions').FOLLOW_CHANGED:m[l.data.pageID]=l.data.followStatus;return m;}return k;};function j(){h.apply(this,arguments);}f.exports=new j(c('PagesLikeFollowNotifDispatcher'));}),null);
__d("XPagesManagerPublishingToolsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/{page_token}\/publishing_tools\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},current_page:{type:"Int"},section:{type:"String"},source:{type:"Enum",enumType:1},sourceID:{type:"String"},refSource:{type:"Enum",enumType:1},initial_data:{type:"StringToStringMap"}});}),null);
__d('VideoLibraryButton.react',['cx','fbt','PublishingToolsSource','React','URI','VideoLibrarySource','XPagesManagerPublishingToolsController','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.$VideoLibraryButton1=function(){'use strict';return c('XPagesManagerPublishingToolsController').getURIBuilder().setString('page_token',this.props.pageID).setString('section','VIDEOS').setEnum('source',this.props.source).setEnum('refSource',this.props.refSource).getURI();};l.prototype.$VideoLibraryButton2=function(){'use strict';this.$VideoLibraryButton1().go();};l.prototype.render=function(){'use strict';return c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',className:"_2bhc",label:i._("Video Library"),size:this.props.size,onClick:this.$VideoLibraryButton2.bind(this)});};function l(){'use strict';j.apply(this,arguments);}l.defaultProps={size:'small'};f.exports=l;}),null);
__d("HubbleContext",[],(function a(b,c,d,e,f,g){var h={},i={get:function j(k){return h[k];},getPageID:function j(){return h.page&&h.page.id;},getEventToShow:function j(){return h.eventToShow;},setContext:function j(k){h=k;},setFieldsIfNonexistant:function j(k){for(var l in k)if(!Object.prototype.hasOwnProperty.call(h,l))i.setKey(l,k[l]);},setKey:function j(k,l){h[k]=l;},reset:function j(){h={};},getContext:function j(){return h;}};f.exports=i;}),null);
__d('HubbleLogger',['BanzaiLogger','ErrorUtils','HubbleContext','HubbleSurfaces','arrayContains'],(function a(b,c,d,e,f,g){var h=null,i=null,j=null,k=null,l=Object.keys(c('HubbleSurfaces')).map(function(n){return c('HubbleSurfaces')[n];}),m={getStatefulFields:function n(){return {pageid:c('HubbleContext').getPageID(),platform:j,prev_section:k,section:h,surface:i};},logAction:function n(o){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{action:o}));},logMetric:function n(o,p){c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{metric:o,metric_value:p}));},logException:function n(o,p){var q=c('ErrorUtils').normalizeError(p);c('BanzaiLogger').log('HubbleLoggerConfig',babelHelpers['extends']({},this.getStatefulFields(),{error_message:o,stack_trace:q.stack.split('\n')}));},reset:function n(){h=null;i=null;j=null;k=null;},setActiveSection:function n(o){k=h;h=o;},setActiveSurface:function n(o){if(!c('arrayContains')(l,o)){c('ErrorUtils').reportError('Hubble: Invalid surface value: '+o);return;}i=o;},setPlatform:function n(o){j=o;}};f.exports=m;}),null);
__d("XVideoEditController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/edit\/",{v:{type:"Int",required:true},album:{type:"Int"},source:{type:"Enum",enumType:1},notif_t:{type:"String"}});}),null);
__d("XVideoEditDialogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/edit\/dialog\/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}});}),null);