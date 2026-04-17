import{a as ft,b as _t,c as vt}from"./chunk-VCGTV7WV.js";import{$ as rt,A as je,C as Ge,H as Ue,J as He,K as Ke,L as We,M as de,N as qe,O as $e,Q as Qe,R as Ye,S as Xe,T as Je,U as B,V as Ze,W as et,X as tt,Y as nt,Z as it,_ as at,aa as X,ba as ot,c as Re,ca as lt,d as Fe,da as st,ea as ct,f as Ve,fa as dt,g as L,ga as mt,h as Le,ha as pt,i as Ne,j as Y,ja as ut,ka as ht,la as gt,ma as bt,na as J,oa as yt,p as N,pa as xt,qa as Ct,r as Be,ra as Mt,w as ze,y as se,z as ce}from"./chunk-PJVV5ON7.js";import{a as Ot}from"./chunk-ZWIINPDV.js";import{$a as u,Ab as m,Ba as l,Bb as g,Cb as j,D as ve,Db as oe,Eb as Ie,Ga as Ce,Jb as De,M as ae,N as re,Na as O,Nb as V,O as D,Oa as A,Ob as b,Pb as le,Ra as f,Ta as Me,V as T,X as y,Ya as R,Z as d,Za as k,Zb as Te,_a as E,_b as Pe,ab as o,ac as Ae,ba as U,bb as r,ca as H,cb as _,da as be,fa as ye,gb as Oe,h as I,hb as Se,ja as P,jb as q,kb as we,lb as v,mb as h,na as K,nb as F,ob as S,pa as xe,pb as ke,q as ne,qb as $,rb as x,sa as W,sb as C,v as _e,wb as Q,x as G,y as ie,yb as M,zb as Ee}from"./chunk-P5FAQ7YC.js";var zt=["*"];var jt=new y("MAT_CARD_CONFIG"),St=(()=>{class i{appearance;constructor(){let e=d(jt,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,n){t&2&&M("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:zt,decls:1,vars:0,template:function(t,n){t&1&&(F(),S(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})();var wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[L]})}return i})();var Ut=["text"],Ht=[[["mat-icon"]],"*"],Kt=["mat-icon","*"];function Wt(i,c){if(i&1&&_(0,"mat-pseudo-checkbox",1),i&2){let e=h();u("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function qt(i,c){if(i&1&&_(0,"mat-pseudo-checkbox",3),i&2){let e=h();u("disabled",e.disabled)}}function $t(i,c){if(i&1&&(o(0,"span",4),m(1),r()),i&2){let e=h();l(),j("(",e.group.label,")")}}var pe=new y("MAT_OPTION_PARENT_COMPONENT"),ue=new y("MatOptgroup");var me=class{source;isUserInput;constructor(c,e=!1){this.source=c,this.isUserInput=e}},z=(()=>{class i{_element=d(W);_changeDetectorRef=d(V);_parent=d(pe,{optional:!0});group=d(ue,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Y).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=K(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new P;_text;_stateChanges=new I;constructor(){let e=d(Fe);e.load($e),e.load(Ge),this._signalDisableRipple=!!this._parent&&Me(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!N(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new me(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&$(Ut,7),t&2){let a;x(a=C())&&(n._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&v("click",function(){return n._selectViaInteraction()})("keydown",function(p){return n._handleKeydown(p)}),t&2&&(we("id",n.id),R("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),M("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",b]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Kt,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(F(Ht),k(0,Wt,1,2,"mat-pseudo-checkbox",1),S(1),o(2,"span",2,0),S(4,1),r(),k(5,qt,1,1,"mat-pseudo-checkbox",3),k(6,$t,2,1,"span",4),_(7,"div",5)),t&2&&(E(n.multiple?0:-1),l(5),E(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),l(),E(n.group&&n.group._inert?6:-1),l(),u("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[_t,qe],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function kt(i,c,e){if(e.length){let t=c.toArray(),n=e.toArray(),a=0;for(let p=0;p<i+1;p++)t[p].group&&t[p].group===n[a]&&a++;return a}return 0}function Et(i,c,e,t){return i<e?i:i+c>e+t?Math.max(0,i-t+c):e}var he=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Qe,vt,z,L]})}return i})();var Zt=["trigger"],en=["panel"],tn=[[["mat-select-trigger"]],"*"],nn=["mat-select-trigger","*"];function an(i,c){if(i&1&&(o(0,"span",4),m(1),r()),i&2){let e=h();l(),g(e.placeholder)}}function rn(i,c){i&1&&S(0)}function on(i,c){if(i&1&&(o(0,"span",11),m(1),r()),i&2){let e=h(2);l(),g(e.triggerValue)}}function ln(i,c){if(i&1&&(o(0,"span",5),k(1,rn,1,0)(2,on,2,1,"span",11),r()),i&2){let e=h();l(),E(e.customTrigger?1:2)}}function sn(i,c){if(i&1){let e=q();o(0,"div",12,1),v("keydown",function(n){U(e);let a=h();return H(a._handleKeydown(n))}),S(2,1),r()}if(i&2){let e=h();Ee(e.panelClass),M("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),R("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var cn=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=d(ye);return()=>Be(i)}}),dn=new y("MAT_SELECT_CONFIG"),mn=new y("MatSelectTrigger"),ge=class{source;value;constructor(c,e){this.source=c,this.value=e}},Tt=(()=>{class i{_viewportRuler=d(Le);_changeDetectorRef=d(V);_elementRef=d(W);_dir=d(Ve,{optional:!0});_idGenerator=d(Y);_renderer=d(Ce);_parentFormField=d(ht,{optional:!0});ngControl=d(Ze,{self:!0,optional:!0});_liveAnnouncer=d(Ue);_defaultOptions=d(dn,{optional:!0});_animationsDisabled=He();_popoverLocation;_initialized=new I;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,a=kt(e,this.options,this.optionGroups),p=t._getHostElement();e===0&&a===1?n.scrollTop=0:n.scrollTop=Et(p.offsetTop,p.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ge(this,e)}_scrollStrategyFactory=d(cn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new I;_errorStateTracker;stateChanges=new I;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=K(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(B.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_e(()=>{let e=this.options;return e?e.changes.pipe(ae(e),re(()=>G(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(re(()=>this.optionSelectionChanges))});openedChange=new P;_openedStream=this.openedChange.pipe(ie(e=>e),ne(()=>{}));_closedStream=this.openedChange.pipe(ie(e=>!e),ne(()=>{}));selectionChange=new P;valueChange=new P;constructor(){let e=d(ct),t=d(nt,{optional:!0}),n=d(X,{optional:!0}),a=d(new De("tabindex"),{optional:!0}),p=d(ze,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new dt(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=p?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ft(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(D(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(D(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ae(null),D(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ve(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&de(this._trackedModal,"aria-owns",t),We(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;de(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,a=t===13||t===32,p=this._keyManager;if(!p.isTyping()&&a&&!N(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let w=this.selected;p.onKeydown(e);let s=this.selected;s&&w!==s&&this._liveAnnouncer.announce(s.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,a=n===40||n===38,p=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!p&&(n===13||n===32)&&t.activeItem&&!N(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!p&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let w=this.options.some(s=>!s.disabled&&!s.selected);this.options.forEach(s=>{s.disabled||(w?s.select():s.deselect())})}else{let w=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==w&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!N(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof se?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ke(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=G(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(D(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),G(...this.options.map(t=>t._stateChanges)).pipe(D(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Re(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,a){if(t&1&&ke(a,mn,5)(a,z,5)(a,ue,5),t&2){let p;x(p=C())&&(n.customTrigger=p.first),x(p=C())&&(n.options=p),x(p=C())&&(n.optionGroups=p)}},viewQuery:function(t,n){if(t&1&&$(Zt,5)(en,5)(ce,5),t&2){let a;x(a=C())&&(n.trigger=a.first),x(a=C())&&(n.panel=a.first),x(a=C())&&(n._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&v("keydown",function(p){return n._handleKeydown(p)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(R("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),M("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:le(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[2,"required","required",b],multiple:[2,"multiple","multiple",b],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",le],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",b]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[oe([{provide:ut,useExisting:i},{provide:pe,useExisting:i}]),xe],ngContentSelectors:nn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(F(tn),o(0,"div",2,0),v("click",function(){return n.open()}),o(3,"div",3),k(4,an,2,1,"span",4)(5,ln,3,1,"span",5),r(),o(6,"div",6)(7,"div",7),be(),o(8,"svg",8),_(9,"path",9),r()()()(),f(10,sn,3,16,"ng-template",10),v("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(p){return n._handleOverlayKeydown(p)})),t&2){let a=Q(1);l(3),R("id",n._valueId),l(),E(n.empty?4:5),l(6),u("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[se,ce],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var Pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[je,he,L,Ne,J,he]})}return i})();var At={Length:[{v:"FEET",l:"Feet (ft)"},{v:"INCHES",l:"Inches (in)"},{v:"YARDS",l:"Yards (yd)"},{v:"CENTIMETERS",l:"Centimeters (cm)"}],Weight:[{v:"KILOGRAM",l:"Kilogram (kg)"},{v:"GRAM",l:"Gram (g)"},{v:"POUND",l:"Pound (lb)"}],Volume:[{v:"LITRE",l:"Litre (L)"},{v:"MILLILITRE",l:"Millilitre (mL)"},{v:"GALLON",l:"Gallon (gal)"}],Temperature:[{v:"CELSIUS",l:"Celsius (\xB0C)"},{v:"FAHRENHEIT",l:"Fahrenheit (\xB0F)"},{v:"KELVIN",l:"Kelvin (K)"}]},Rt=["compare","convert","add","subtract","divide"],Ft=["compare","convert"],Vt={compare:"\u21C4 Compare",convert:"\u2194 Convert",add:"+ Add",subtract:"\u2212 Subtract",divide:"\xF7 Divide"},fe={compare:"\u21C4",add:"+",subtract:"\u2212",divide:"\xF7"};function un(i,c){if(i&1){let e=q();o(0,"button",15),v("click",function(){let n=U(e).$implicit,a=h();return H(a.selectOp(n))}),m(1),r()}if(i&2){let e=c.$implicit,t=h();M("active",t.activeOp===e),l(),j(" ",t.opLabels[e]," ")}}function hn(i,c){i&1&&(o(0,"mat-error"),m(1,"Required"),r())}function gn(i,c){i&1&&(o(0,"mat-error"),m(1,"Must be \u2265 0"),r())}function fn(i,c){if(i&1&&(o(0,"mat-option",23),m(1),r()),i&2){let e=c.$implicit;u("value",e.v),l(),g(e.l)}}function _n(i,c){if(i&1&&(o(0,"mat-option",23),m(1),r()),i&2){let e=c.$implicit;u("value",e.v),l(),g(e.l)}}function vn(i,c){if(i&1&&(Oe(0),o(1,"div",16)(2,"mat-form-field",17)(3,"mat-label"),m(4,"Value"),r(),_(5,"input",18),f(6,hn,2,0,"mat-error",12)(7,gn,2,0,"mat-error",12),r(),o(8,"mat-form-field",17)(9,"mat-label"),m(10,"From Unit"),r(),o(11,"mat-select",19),f(12,fn,2,2,"mat-option",20),r()(),o(13,"div",21),m(14,"\u2192"),r(),o(15,"mat-form-field",17)(16,"mat-label"),m(17,"To Unit"),r(),o(18,"mat-select",22),f(19,_n,2,2,"mat-option",20),r()()(),Se()),i&2){let e,t,n=h();l(6),u("ngIf",(e=n.form.get("v1"))==null?null:e.hasError("required")),l(),u("ngIf",(t=n.form.get("v1"))==null?null:t.hasError("min")),l(5),u("ngForOf",n.units),l(7),u("ngForOf",n.units)}}function bn(i,c){i&1&&(o(0,"mat-error"),m(1,"Required"),r())}function yn(i,c){if(i&1&&(o(0,"mat-option",23),m(1),r()),i&2){let e=c.$implicit;u("value",e.v),l(),g(e.l)}}function xn(i,c){if(i&1&&(o(0,"mat-option",23),m(1),r()),i&2){let e=c.$implicit;u("value",e.v),l(),g(e.l)}}function Cn(i,c){if(i&1&&(o(0,"div",24)(1,"div",25)(2,"mat-form-field",26)(3,"mat-label"),m(4,"First Value"),r(),_(5,"input",18),f(6,bn,2,0,"mat-error",12),r(),o(7,"mat-form-field",26)(8,"mat-label"),m(9,"Unit"),r(),o(10,"mat-select",19),f(11,yn,2,2,"mat-option",20),r()()(),o(12,"div",21),m(13),r(),o(14,"div",25)(15,"mat-form-field",26)(16,"mat-label"),m(17,"Second Value"),r(),_(18,"input",27),r(),o(19,"mat-form-field",26)(20,"mat-label"),m(21,"Unit"),r(),o(22,"mat-select",22),f(23,xn,2,2,"mat-option",20),r()()()()),i&2){let e,t=h();l(6),u("ngIf",(e=t.form.get("v1"))==null?null:e.hasError("required")),l(5),u("ngForOf",t.units),l(2),g(t.opSymbol),l(10),u("ngForOf",t.units)}}function Mn(i,c){i&1&&_(0,"mat-spinner",28)}function On(i,c){if(i&1&&(o(0,"span"),m(1),r()),i&2){let e=h();l(),g(e.opLabels[e.activeOp])}}function Sn(i,c){if(i&1&&(o(0,"div",29)(1,"div",30),m(2,"Result"),r(),o(3,"div",31),m(4),r(),o(5,"div",32),m(6),r()()),i&2){let e=h();l(4),g(e.displayResult),l(2),g(e.displayDetail)}}function wn(i,c){if(i&1&&(o(0,"div",33)(1,"div",30),m(2,"Error"),r(),o(3,"div",34),m(4),r()()),i&2){let e=h();l(4),g(e.resultError)}}var Ji=(()=>{class i{constructor(){this.emoji="",this.description="",this.fb=d(lt),this.qSvc=d(Ot),this.toast=d(bt),this.cdr=d(V),this.ops=[],this.activeOp="convert",this.units=[],this.opLabels=Vt,this.opSymbols=fe,this.loading=!1,this.result=null,this.resultError=""}ngOnInit(){this.ops=this.category==="Temperature"?Ft:Rt,this.units=At[this.category]||[],this.buildForm()}buildForm(){this.form=this.fb.group({v1:[null,B.required],u1:[this.units[0]?.v,B.required],v2:[null],u2:[this.units[1]?.v||this.units[0]?.v,B.required]}),this.result=null,this.resultError=""}selectOp(e){this.activeOp=e,this.buildForm()}get isSingleValue(){return this.activeOp==="convert"}get opSymbol(){return fe[this.activeOp]||""}get measurementType(){return{Length:"LENGTH",Weight:"WEIGHT",Volume:"VOLUME",Temperature:"TEMPERATURE"}[this.category]??this.category.toUpperCase()}run(){let e=this.form.value,t=parseFloat(e.v1);if(e.v1===null||e.v1===""||isNaN(t)){this.toast.error("Please enter a valid value.");return}if(!this.isSingleValue){let s=parseFloat(e.v2);if(e.v2===null||e.v2===""||isNaN(s)){this.toast.error("Please enter the second value.");return}}let n=this.isSingleValue?0:parseFloat(e.v2),a=e.u1,p=e.u2,w={ThisQuantityDTO:{Value:t,Unit:a,MeasurementType:this.measurementType},ThatQuantityDTO:{Value:n,Unit:p,MeasurementType:this.measurementType}};this.loading=!0,this.result=null,this.resultError="",this.qSvc.runOperation(this.activeOp,w).subscribe({next:s=>{this.loading=!1,console.log("API response:",s),s.IsError??s.isError??!1?(this.resultError=s.ErrorMessage||s.errorMessage||"An error occurred.",this.toast.error(this.resultError),this.cdr.detectChanges()):(this.result={IsError:!1,ErrorMessage:null,ResultValue:s.ResultValue??s.resultValue??null,ResultUnit:s.ResultUnit??s.resultUnit??"",ResultString:s.ResultString??s.resultString??"",ResultMeasurementType:s.ResultMeasurementType??"",ThisValue:s.ThisValue??0,ThisUnit:s.ThisUnit??"",ThisMeasurementType:s.ThisMeasurementType??"",ThatValue:s.ThatValue??0,ThatUnit:s.ThatUnit??"",ThatMeasurementType:s.ThatMeasurementType??"",Operation:s.Operation??"",Timestamp:s.Timestamp??""},this.toast.success(`${this.activeOp.charAt(0).toUpperCase()+this.activeOp.slice(1)} successful`),this.cdr.detectChanges())},error:s=>{this.loading=!1,this.resultError=s.message,this.toast.error(s.message),this.cdr.detectChanges()}})}get displayResult(){return this.result?this.activeOp==="compare"?this.result.ResultUnit==="EQUAL"||this.result.ResultString==="true"||this.result.ResultString==="True"?"\u2705 Equal":"\u274C Not Equal":this.activeOp==="divide"?`${this.roundTo(this.result.ResultValue??0,6)}  (ratio)`:`${this.roundTo(this.result.ResultValue??0,6)} ${this.result.ResultUnit??""}`:""}get displayDetail(){if(!this.result)return"";let{v1:e,u1:t,v2:n,u2:a}=this.form.value;return this.activeOp==="convert"?`${e} ${t}  \u2192  ${a}`:this.activeOp==="compare"?`${e} ${t}  vs  ${n} ${a}`:`${e} ${t}  ${this.activeOp}  ${n} ${a}`}roundTo(e,t){return Math.round(e*10**t)/10**t}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=O({type:i,selectors:[["app-operation-card"]],inputs:{category:"category",emoji:"emoji",description:"description"},decls:20,vars:12,consts:[["dualInput",""],[1,"op-card"],[1,"op-card-header"],[1,"op-icon"],[1,"op-title"],[1,"op-desc"],[1,"op-tabs"],["class","op-tab",3,"active","click",4,"ngFor","ngForOf"],[3,"ngSubmit","formGroup"],[4,"ngIf","ngIfElse"],["mat-flat-button","","type","submit",1,"run-btn",3,"disabled"],["diameter","20",4,"ngIf"],[4,"ngIf"],["class","result-box success",4,"ngIf"],["class","result-box error",4,"ngIf"],[1,"op-tab",3,"click"],[1,"form-row","single"],["appearance","outline",1,"flex-field"],["matInput","","type","number","formControlName","v1","placeholder","0","min","0"],["formControlName","u1"],[3,"value",4,"ngFor","ngForOf"],[1,"op-sym"],["formControlName","u2"],[3,"value"],[1,"form-row","dual"],[1,"input-group"],["appearance","outline",1,"full-field"],["matInput","","type","number","formControlName","v2","placeholder","0","min","0"],["diameter","20"],[1,"result-box","success"],[1,"result-label"],[1,"result-value"],[1,"result-detail"],[1,"result-box","error"],[1,"result-value","error-text"]],template:function(t,n){if(t&1&&(o(0,"mat-card",1)(1,"div",2)(2,"div",3),m(3),r(),o(4,"div")(5,"div",4),m(6),r(),o(7,"div",5),m(8),r()()(),o(9,"div",6),f(10,un,2,3,"button",7),r(),o(11,"form",8),v("ngSubmit",function(){return n.run()}),f(12,vn,20,4,"ng-container",9)(13,Cn,24,4,"ng-template",null,0,Ie),o(15,"button",10),f(16,Mn,1,0,"mat-spinner",11)(17,On,2,1,"span",12),r()(),f(18,Sn,7,2,"div",13)(19,wn,5,1,"div",14),r()),t&2){let a=Q(14);l(3),g(n.emoji),l(3),j("",n.category," Operations"),l(2),g(n.description),l(2),u("ngForOf",n.ops),l(),u("formGroup",n.form),l(),u("ngIf",n.isSingleValue)("ngIfElse",a),l(3),u("disabled",n.loading),l(),u("ngIf",n.loading),l(),u("ngIf",!n.loading),l(),u("ngIf",n.result&&!n.resultError),l(),u("ngIf",n.resultError)}},dependencies:[Ae,Te,Pe,st,it,Je,at,et,tt,ot,X,rt,wt,St,Xe,Ye,J,gt,mt,pt,xt,yt,Pt,Tt,z,Mt,Ct],styles:[".op-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#111318,#181c24)!important;border:1px solid var(--border)!important;border-radius:20px!important;padding:32px!important;box-shadow:0 8px 40px #0006,0 2px 8px #0000004d!important;min-height:calc(100vh - 120px);display:flex;flex-direction:column}.op-card[_ngcontent-%COMP%]   .op-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid var(--border)}.op-card[_ngcontent-%COMP%]   .op-card-header[_ngcontent-%COMP%]   .op-icon[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,var(--accent-dim),rgba(0,229,160,.08));display:flex;align-items:center;justify-content:center;font-size:28px;border:1px solid rgba(0,229,160,.2);box-shadow:0 4px 16px #00e5a01a}.op-card[_ngcontent-%COMP%]   .op-card-header[_ngcontent-%COMP%]   .op-title[_ngcontent-%COMP%]{font-family:var(--font-head);font-size:22px;font-weight:800;color:var(--text)}.op-card[_ngcontent-%COMP%]   .op-card-header[_ngcontent-%COMP%]   .op-desc[_ngcontent-%COMP%]{font-size:13px;color:var(--text-muted);margin-top:3px}.op-card[_ngcontent-%COMP%]   .op-tabs[_ngcontent-%COMP%]{display:flex;gap:6px;margin-bottom:32px;background:#0000004d;padding:6px;border-radius:12px;border:1px solid var(--border)}.op-card[_ngcontent-%COMP%]   .op-tabs[_ngcontent-%COMP%]   .op-tab[_ngcontent-%COMP%]{flex:1;min-width:80px;padding:10px 14px;border:none;border-radius:8px;background:transparent;cursor:pointer;color:var(--text-muted);font-family:var(--font-mono);font-size:13px;font-weight:500;transition:all .18s;white-space:nowrap;text-align:center}.op-card[_ngcontent-%COMP%]   .op-tabs[_ngcontent-%COMP%]   .op-tab[_ngcontent-%COMP%]:hover{color:var(--text);background:#ffffff0a}.op-card[_ngcontent-%COMP%]   .op-tabs[_ngcontent-%COMP%]   .op-tab.active[_ngcontent-%COMP%]{background:var(--accent);color:#000;font-weight:700;box-shadow:0 2px 12px #00e5a04d}.op-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.op-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{margin-bottom:28px}.op-card[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.2fr auto 1fr 1fr;align-items:center;gap:16px}@media(max-width:900px){.op-card[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.op-card[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%]   .op-sym[_ngcontent-%COMP%]{display:none}}@media(max-width:600px){.op-card[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%]{grid-template-columns:1fr}}.op-card[_ngcontent-%COMP%]   .form-row.single[_ngcontent-%COMP%]   .flex-field[_ngcontent-%COMP%]{width:100%}.op-card[_ngcontent-%COMP%]   .form-row.dual[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;gap:24px;align-items:start}@media(max-width:720px){.op-card[_ngcontent-%COMP%]   .form-row.dual[_ngcontent-%COMP%]{grid-template-columns:1fr}.op-card[_ngcontent-%COMP%]   .form-row.dual[_ngcontent-%COMP%]   .op-sym[_ngcontent-%COMP%]{display:none}}.op-card[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.op-card[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .full-field[_ngcontent-%COMP%]{width:100%}.op-card[_ngcontent-%COMP%]   .op-sym[_ngcontent-%COMP%]{color:var(--accent);font-size:28px;text-align:center;padding:0 8px;font-weight:300;margin-top:8px;text-shadow:0 0 20px rgba(0,229,160,.4)}.op-card[_ngcontent-%COMP%]   .run-btn[_ngcontent-%COMP%]{margin-top:auto;width:100%;padding:16px!important;background:linear-gradient(135deg,#00e5a0,#00c98a)!important;color:#000!important;border-radius:12px!important;font-family:var(--font-mono)!important;font-size:15px!important;font-weight:700!important;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 20px #00e5a040,0 2px 6px #0000004d!important}.op-card[_ngcontent-%COMP%]   .run-btn[_ngcontent-%COMP%]:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-2px);box-shadow:0 8px 32px #00e5a059,0 4px 12px #0006!important}.op-card[_ngcontent-%COMP%]   .run-btn[_ngcontent-%COMP%]:disabled{opacity:.55;transform:none;cursor:not-allowed}.op-card[_ngcontent-%COMP%]   .run-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: #000}.op-card[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]{margin-top:24px;padding:24px 28px;border-radius:14px;border:1px solid var(--border);background:linear-gradient(135deg,var(--surface2) 0%,rgba(24,28,36,.8) 100%);animation:_ngcontent-%COMP%_slideUp .3s ease}.op-card[_ngcontent-%COMP%]   .result-box.success[_ngcontent-%COMP%]{border-color:#00e5a04d;background:linear-gradient(135deg,#00e5a00f,#00e5a005);box-shadow:0 4px 24px #00e5a014}.op-card[_ngcontent-%COMP%]   .result-box.error[_ngcontent-%COMP%]{border-color:#ff5f6d4d;background:linear-gradient(135deg,#ff5f6d0f,#ff5f6d05);box-shadow:0 4px 24px #ff5f6d14}.op-card[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   .result-label[_ngcontent-%COMP%]{font-size:11px;color:var(--text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:2px}.op-card[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   .result-value[_ngcontent-%COMP%]{font-family:var(--font-head);font-size:36px;font-weight:800;color:var(--accent);text-shadow:0 0 30px rgba(0,229,160,.3);margin-bottom:6px}.op-card[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{color:var(--error);font-size:15px}.op-card[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   .result-detail[_ngcontent-%COMP%]{font-size:13px;color:var(--text-muted);margin-top:6px}  .op-card .mat-mdc-form-field-subscript-wrapper{min-height:18px}  .op-card .mat-mdc-text-field-wrapper{background:#00000040!important}  .op-card .mdc-outlined-text-field{--mdc-outlined-text-field-outline-color: rgba(255,255,255,.12);--mdc-outlined-text-field-focus-outline-color: var(--accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text)}  .op-card .mat-mdc-select-value-text{color:var(--text)}  .op-card .mat-mdc-form-field{font-size:15px}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"]})}}return i})();export{Ji as a};
