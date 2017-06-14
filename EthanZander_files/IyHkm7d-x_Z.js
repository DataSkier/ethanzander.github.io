if (self.CavalryLogger) { CavalryLogger.start_js(["Piy2q"]); }

__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){f.exports={REVERT:"revert"};}),null);
__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};}),null);
__d("TimelineDOMID",[],(function a(b,c,d,e,f,g){f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",ABOVE_COMPOSER:"timeline_above_composer",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",FIG_COMPOSER:"profile_fig_composer",FIG_TIMELINE:"profile_fig_timeline",FIG_ESCAPE_HATCH:"profile_fig_escape_hatch",FIG_INFO_REVIEW:"profile_fig_info_review",FIG_INTRO_CARD:"profile_fig_intro_card",FIG_PROTILES:"profile_fig_protiles",FIG_ADS:"profile_fig_ads",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",PREFIX_FIG_PROTILES:"profile_fig_protiles_",SUFFIX_MORE_PAGER:"_more_pager"};}),null);
__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k='ScrollColumn/adjust',l=c('React').createClass({displayName:'ScrollColumn',propTypes:{left:j.string,topOffset:j.number,zIndex:j.number},getDefaultProps:function m(){return {left:'',topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function m(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function m(){var n='auto',o=this.state.fixedLeft,p='auto';if(this.state.fixed==='bottom'){n=this.state.fixedBottom;}else if(this.state.fixed==='top'){p=this.state.fixedTop;}else{o='auto';p=this.state.top;}var q=c('joinClasses')(this.props.className,"_5ss7");return c('React').createElement('div',{className:q,ref:'container'},c('React').createElement('div',{className:"_5ss8"+(this.state.fixed?' '+"fixed_always":''),ref:'column',style:{bottom:n,left:o,top:p,zIndex:this.props.zIndex}},this.props.children));},componentDidMount:function m(){this.setState({adjustEventListener:c('tidyEvent')(c('Arbiter').subscribe(k,function(){this._adjust();}.bind(this))),resizeListener:c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),scrollListener:c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function m(n,o){if(o.fixed!==this.state.fixed)c('Arbiter').inform('reflow');},componentWillUnmount:function m(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function m(event){var n=c('Vector').getScrollPosition().y;this._scrollDelta=n-this._scroll;this._scroll=n;this._adjust();},_adjust:function m(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var n=this._getTopPositionForRef('column'),o=this._getTopPositionForRef('container'),p=n-o;this._setNotFixed(p);},_getTopPositionForRef:function m(n){var o=this.refs[n];o||i(0);var p=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(o),'viewport').y;if(this._scroll<0)p+=this._scroll;return p;},_getTopBoundWithOffset:function m(){return c('ViewportBounds').getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function m(){var n=this._getTopPositionForRef('container');return n>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function m(){var n=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-this._getTopBoundWithOffset();return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>n;},_isBottomOfColumnVisible:function m(){var n=this._getTopPositionForRef('column'),o=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.column),'viewport').y,p=n+o;return p<=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},_isTopOfColumnVisible:function m(){var n=this._getTopPositionForRef('column');return n>=this._getTopBoundWithOffset();},_getFixedLeft:function m(){return c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.container),'viewport').x;},_setFixedToBottom:function m(){this.setState({fixed:'bottom',fixedBottom:c('ViewportBounds').getBottom(),fixedLeft:this.props.left===''?this._getFixedLeft():this.props.left});},_setFixedToTop:function m(){this.setState({fixed:'top',fixedLeft:this.props.left===''?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function m(n){this.setState({fixed:false,top:n});},_updateContainerHeight:function m(){c('ReactDOM').findDOMNode(this.refs.container).style.height=c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+this.state.top+'px';},_updateColumnWidth:function m(){c('ReactDOM').findDOMNode(this.refs.column).style.width=c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});l.EVENT_SHOULD_ADJUST=k;f.exports=l;}),null);
__d('update',['fbjs/lib/invariant'],(function a(b,c,d,e,f,g){'use strict';var h={}.hasOwnProperty;function i(t){if(Array.isArray(t)){return t.concat();}else if(t&&typeof t==='object'){return Object.assign(new t.constructor(),t);}else return t;}var j='$push',k='$unshift',l='$splice',m='$set',n='$merge',o='$apply',p=[j,k,l,m,n,o],q={};p.forEach(function(t){q[t]=true;});function r(t,u,v){Array.isArray(t)||c('fbjs/lib/invariant')(0);var w=u[v];Array.isArray(w)||c('fbjs/lib/invariant')(0);}function s(t,u){typeof u==='object'||c('fbjs/lib/invariant')(0);if(h.call(u,m)){Object.keys(u).length===1||c('fbjs/lib/invariant')(0);return u[m];}var v=i(t);if(h.call(u,n)){var w=u[n];w&&typeof w==='object'||c('fbjs/lib/invariant')(0);v&&typeof v==='object'||c('fbjs/lib/invariant')(0);Object.assign(v,u[n]);}if(h.call(u,j)){r(t,u,j);u[j].forEach(function(y){v.push(y);});}if(h.call(u,k)){r(t,u,k);u[k].forEach(function(y){v.unshift(y);});}if(h.call(u,l)){Array.isArray(t)||c('fbjs/lib/invariant')(0);Array.isArray(u[l])||c('fbjs/lib/invariant')(0);u[l].forEach(function(y){Array.isArray(y)||c('fbjs/lib/invariant')(0);v.splice.apply(v,y);});}if(h.call(u,o)){typeof u[o]==='function'||c('fbjs/lib/invariant')(0);v=u[o](v);}for(var x in u)if(!(Object.prototype.hasOwnProperty.call(q,x)&&q[x]))v[x]=s(t[x],u[x]);return v;}f.exports=s;}),null);
__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l={ViewRenderer:c('XUITypeaheadView.react'),useLayer:true},m={ViewRenderer:c('XUITypeaheadView.react'),useLayer:false},n={ViewRenderer:c('XUITypeaheadTextOnlyView.react'),useLayer:true};i=babelHelpers.inherits(o,c('React').Component);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.focusInput=function(){this.refs.typeahead&&this.refs.typeahead.focusInput();}.bind(this),this.blurInput=function(){this.refs.typeahead&&this.refs.typeahead.blurInput();}.bind(this),this.hideView=function(){this.refs.typeahead.hideView();}.bind(this),this.getTextFieldDOM=function(){return this.refs.typeahead.getTextFieldDOM();}.bind(this),this.$XUITypeahead1=function(){this.props.onClear();setTimeout(function(){return this.focusInput();}.bind(this),0);}.bind(this),q;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.render=function(){'use strict';var p=c('joinClasses')(this.props.inputClassName,"_55r1"+(!!this.props.tallInput?' '+"_55r2":'')),q=null;if(this.props.presenter){q=this.props.presenter;}else if(this.props.viewStyle=='rich'){q=l;}else if(this.props.viewStyle=='richNoLayer'){q=m;}else q=n;if(!this.props.presenter&&this.props.maxEntries)q=c('update')(q,{maxEntries:{$set:this.props.maxEntries}});var r=this.props.showPhoto&&this.props.selectedEntry?c('React').createElement(c('Image.react'),{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,s=this.props.clearable?c('React').createElement(c('XUICloseButton.react'),{className:"_wrm"+(this.props.disabled||!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this.$XUITypeahead1}):null,t=this.props,u=t.className,v=babelHelpers.objectWithoutProperties(t,['className']);return c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('span',{className:c('joinClasses')("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!s?' '+"_4ehf":'')+(!!r?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),u)},r,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},v,{inputClassName:p,ref:'typeahead',presenter:q,textInputDataTestID:this.props.textInputDataTestID})),s));};o.propTypes=babelHelpers['extends']({excludedEntries:k.object,maxEntries:k.number,onChange:k.func.isRequired,onSelectAttempt:k.func.isRequired,onEnterWithoutSelection:k.func,onEntriesFound:k.func,onNoEntriesFound:k.func,selectedEntry:k.instanceOf(c('SearchableEntry')),tallInput:k.bool,viewStyle:k.oneOf(['textonly','rich','richNoLayer']),clearable:k.bool,onClear:k.func,showPhoto:k.bool,textInputDataTestID:k.string,highlightOnSelect:k.bool,presenter:k.object,inputID:k.string},c('XUIError.react').propTypes);o.defaultProps={viewStyle:'rich'};f.exports=o;}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/follow\/follow_privacy\/nux\/log\/view\/",{});}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});}),null);
__d('SubscribeButton',['Arbiter','AsyncRequest','Button','CSS','Event','TooltipData','XFollowPrivacyNuxLogViewAsyncController','XPubcontentChainedSuggestionsController'],(function a(b,c,d,e,f,g){var h={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function i(j){c('Button').setEnabled(j,true);c('TooltipData').remove(j);},_disable:function i(j,k){c('Button').setEnabled(j,false);if(k)c('TooltipData').set(j,k);},init:function i(j,k,l,m,n,o,p,q,r,s,t,u){var v=!t,w=!(r===undefined||r===null);if(w&&!p&&!q)h._disable(k,r);c('Event').listen(k,'click',function(){c('Arbiter').inform(h.SUBSCRIBED,{profile_id:m,contextID:u,suppress:true});if(s){s.show();var x=c('XFollowPrivacyNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(x).send();}});c('Arbiter').subscribe(h.SUBSCRIBED,function(x,y){if(m==y.profile_id){if(!n)l.suppressNextMouseEnter&&l.suppressNextMouseEnter();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(p||q)h._enable(k);}j.swap(v);if(o===true&&y.chaining!==false){var z=c('XPubcontentChainedSuggestionsController').getURIBuilder().setInt('profileid',m).getURI();new (c('AsyncRequest'))().setURI(z).send();}}});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(x,y){if(m==y.profile_id){j.unswap(v);l.hideFlyout&&l.hideFlyout();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(!p&&!q)h._disable(k,r);}c('Arbiter').inform('SubMenu/Reset');}});},initSubscribe:function i(j,k){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.SUBSCRIBED,{profile_id:k}),0);});},initUnsubscribe:function i(j,k,l){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.UNSUBSCRIBED,{profile_id:k,contextID:l}),0);});},initSubscribeMenuItem:function i(j,k,l){c('CSS').hide(k);this._initMenuItem(j,k,l);},initUnsubscribeMenuItem:function i(j,k,l){c('CSS').hide(j);this._initMenuItem(j,k,l);},_initMenuItem:function i(j,k,l){this.initSubscribe(j,l);this.initUnsubscribe(k,l);c('Arbiter').subscribe(h.SUBSCRIBED,function(m,n){c('CSS').hide(j);c('CSS').show(k);});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(m,n){c('CSS').hide(k);c('CSS').show(j);});}};f.exports=h;}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});}),null);
__d('ProfileHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','FollowRequestResultEnum','MenuStaticItem','ProfileSubFollowStatus','Run','SeeFirstNuxEvents','SubscribeButton','SubscriptionsHandler','XFeedSeeFirstNuxController'],(function a(b,c,d,e,f,g,h,i){var j=1,k='live_notifs',l={follow:0,see_first:0,subscribe_all_live_notifications:k,subscribe_suggested_live_notifications:k,subscribe_none_live_notifications:k};function m(n,o,p,q,r){'use strict';this.$ProfileHoverButton1=o;this.$ProfileHoverButton2=p;this.$ProfileHoverButton3=r;this.$ProfileHoverButton4=q;this.$ProfileHoverButton5=n;this.$ProfileHoverButton6=null;this.$ProfileHoverButton7=new (c('SubscriptionsHandler'))();this.$ProfileHoverButton2.subscribe('itemclick',function(s,t){if(t.item instanceof c('MenuStaticItem'))return;var u=t.item.getValue();if(u==='unfollow'){c('Arbiter').inform(c('SubscribeButton').UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();this.$ProfileHoverButton5.getPopover().hideLayer();}else{this.setSelected(u);if(u===c('ProfileSubFollowStatus').SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c('SeeFirstNuxEvents').SEE_FIRST_SELECTED);}}}.bind(this));this.$ProfileHoverButton7.addSubscriptions(c('Arbiter').subscribe(c('SubscribeButton').SUBSCRIBED,this.setSelected.bind(this,c('ProfileSubFollowStatus').REGULAR_FOLLOW)));this.$ProfileHoverButton7.addSubscriptions(c('Arbiter').subscribe(c('FollowRequestResultEnum').REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c('SeeFirstNuxEvents').IMP);this.$ProfileHoverButton7.addSubscriptions(c('Event').listen(c('DOM').find(this.$ProfileHoverButton4.getRoot(),"._50zy"),'click',this.logNux.bind(this,c('SeeFirstNuxEvents').XOUT)));}c('Run').onLeave(this.cleanUp.bind(this));}m.prototype.logNux=function(event){'use strict';var n=c('XFeedSeeFirstNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))(n).setData({event:event,id:this.$ProfileHoverButton3.id}).send();};m.prototype.getButtons=function(){'use strict';return c('DOM').scry(this.$ProfileHoverButton1,"._3oz-");};m.prototype.getSelected=function(){'use strict';var n=this.getButtons(),o=null;n.forEach(function(p){var q=p.getAttribute('data-status');if(c('CSS').matchesSelector(p,"._52-0"))o=q;});return o;};m.prototype.setSelected=function(n){'use strict';this.$ProfileHoverButton6=this.getSelected();var o=this.getButtons(),p=l[n];o.forEach(function(q){if(p===k)return;var r=q.getAttribute('data-status');if(r===n){c('CSS').addClass(q,"_52-0");}else c('CSS').removeClass(q,"_52-0");});this.$ProfileHoverButton2.forEachItem(function(q){if(!q.getValue)return;var r=q.getValue(),s=l[r];if(r==='unfollow')return;var t=q.getRoot();if(r===n){c('CSS').addClass(t,"_52-0");}else if(s===p)c('CSS').removeClass(t,"_52-0");});};m.prototype.handleResponse=function(event,n){'use strict';if(n.id!==this.$ProfileHoverButton3.id||n.location!==j)return;if(event===c('FollowRequestResultEnum').REVERT)this.revert();};m.prototype.revert=function(){'use strict';if(this.$ProfileHoverButton6===null)return;this.setSelected(this.$ProfileHoverButton6);};m.prototype.cleanUp=function(){'use strict';this.$ProfileHoverButton7&&this.$ProfileHoverButton7.release();this.$ProfileHoverButton7=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null;};f.exports=m;}),null);
__d('SeeFirstProfilePopoverMenu',['PopoverMenu'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('PopoverMenu'));i=h&&h.prototype;j.prototype._onMenuDone=function(k){'use strict';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('TimelineCoverCollapse',['$','Arbiter','DOMDimensions','Style','TidyArbiter','getViewportDimensions'],(function a(b,c,d,e,f,g){g.collapse=function(h,i){i--;var j=c('getViewportDimensions')().height,k=c('DOMDimensions').getDocumentDimensions().height,l=j+i;if(k<=l)c('Style').set(c('$')('globalContainer'),'min-height',l+'px');window.scrollBy(0,i);c('TidyArbiter').inform('TimelineCover/coverCollapsed',i,c('Arbiter').BEHAVIOR_STATE);};}),null);
__d('TimelineCapsuleUtilities',['CSS'],(function a(b,c,d,e,f,g){var h={setFirstUnit:function i(j){var k=true;for(var l=0;l<j.childNodes.length;++l){var m=j.childNodes[l];if(m.id.indexOf('tl_unit_')===0)if(k){k=false;c('CSS').addClass(m,'firstUnit');}else{c('CSS').removeClass(m,'firstUnit');break;}}}};f.exports=h;}),null);
__d('TimelineComposer',['csx','Arbiter','Bootloader','ComposerXMarauderLogger','ComposerXStore','CSS','DOM','DOMQuery','Event','Parent','ProfileFIGConfig','ReloadPage','Run','TimelineCapsuleUtilities','TimelineDOMID','$','ge','getObjectValues','goURI','tidyEvent'],(function a(b,c,d,e,f,g,h){var i=void 0,j=void 0;function k(){c('ComposerXMarauderLogger').logCompleted(i.id);}function l(n){if(n.hidePost){k();return;}if(n.redirect){var o=c('ComposerXStore').getAllForComposer(i.id);c('getObjectValues')(o).forEach(function(q){if(q.reset)q.reset(q);});c('goURI')(n.redirect);k();return;}if(!n.streamStory){c('ReloadPage').now();return;}if(c('ProfileFIGConfig').hasFIG){var p=c('ge')(c('TimelineDOMID').FIG_TIMELINE);if(p){c('DOM').prependContent(p,n.streamStory);k();return;}}if(n.backdatedTime){c('Bootloader').loadModules(["TimelineStoryPublisher"],function(q){q.publish(n);},'TimelineComposer');k();return;}m.renderCapsuleBasedStory(i,n.streamStory);c('Arbiter').inform('TimelineComposer/on_after_publish',n.streamStory,c('Arbiter').BEHAVIOR_PERSISTENT);k();}var m={init:function n(o){i=c('$')(o);j=c('Arbiter').subscribe('composer/publish',function(event,p){if(p.composer_id===i.id)l(p);});c('Run').onLeave(m.destroy);},destroy:function n(){j&&j.unsubscribe();},renderCapsuleBasedStory:function n(o,p){var q=c('Parent').byClass(o,'fbTimelineCapsule');if(!q)return;var r=c('DOMQuery').scry(q,".fbTimelineUnit")[0],s=r.nextSibling;if(s&&s.getAttribute('data-spine'))r=r.nextSibling;var t=c('DOM').insertAfter(r,p)[0];if(c('CSS').hasClass(t,'fbTimelineUnit'))t=c('DOM').find(t,'div.timelineUnitContainer');c('Bootloader').loadModules(["Animation"],function(u){new u(t).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(u.ease.both).go();},'TimelineComposer');c('TimelineCapsuleUtilities').setFirstUnit(q);},getRoot:function n(){return i;},initNUX:function n(o,p){c('tidyEvent')(c('Event').listen(o,'click',function(){var q=c('DOM').scry(p,'textarea')[0];q&&q.focus();}));}};f.exports=b.TimelineComposer||m;}),null);
__d("XReactComposerQAndAAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/qanda\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),null);
__d('ReactComposerQAndALazyAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ActorURI','Bootloader','React','XReactComposerQAndAAttachmentBootstrapController'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ReactComposerQAndALazyAttachment',mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],statics:{attachmentID:c('ReactComposerAttachmentType').QANDA},propTypes:{bootloader:c('ReactComposerBootloaderPropTypes')},bootload:function i(j){if(this.props.bootloader&&this.props.bootloader.qandaAttachment){this.props.bootloader.qandaAttachment(j);}else c('Bootloader').loadModules(["ReactComposerQAndAAttachmentContainer.react"],j,'ReactComposerQAndALazyAttachment.react');},getBootstrapURI:function i(){var j=c('XReactComposerQAndAAttachmentBootstrapController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI();return c('ActorURI').create(j,this.context.actorID);}});f.exports=h;}),null);
__d('ScrollColumnRenderer',['DOMContainer.react','React','ReactRenderer','ScrollColumn.react'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l){c('ReactRenderer').constructAndRenderComponentAcrossTransitions(c('ScrollColumn.react'),babelHelpers['extends']({children:[c('React').createElement(c('DOMContainer.react'),{key:'content'},j)]},l),k);}};f.exports=h;}),null);
__d('ContextualLayerAsyncRelative',['Event','Parent'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};h.prototype.disable=function(){'use strict';this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};h.prototype._attachListener=function(){'use strict';this._listener=c('Event').listen(this._layer.getRoot(),'click',this._onclick.bind(this));};h.prototype._onclick=function(i){'use strict';var j=c('Parent').byTag(i.getTarget(),'A');if(!j)return;var k=j.getAttribute('ajaxify'),l=j.href,m=k||l;if(j.rel==='async'||j.rel==='async-post'){e(['AsyncRequest'],function(n){n.bootstrap(m,this._layer.getContext(),j.rel==='async-post');}.bind(this));return false;}};Object.assign(h.prototype,{_layerSubscription:null,_listener:null});f.exports=h;}),null);