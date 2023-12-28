"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[537],{4537:function(e,t,r){r.d(t,{ZP:function(){return re}});var a=r(5987),n=r(4942),o=r(1413),i=r(7313),l=r(3061),u=r(1921),s=r(5229),c=r(3066),d=r(3433),v=r(9439),m=r(9081),p=r(782),f=r(5669),b=r(7472),h=r(2678),Z=r(2780),g={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function x(e,t){return e-t}function k(e,t,r){return null==e?t:Math.min(Math.max(t,e),r)}function S(e,t){var r;return(null!=(r=e.reduce((function(e,r,a){var n=Math.abs(t-r);return null===e||n<e.distance||n===e.distance?{distance:n,index:a}:e}),null))?r:{}).index}function w(e,t){if(void 0!==t.current&&e.changedTouches){for(var r=e,a=0;a<r.changedTouches.length;a+=1){var n=r.changedTouches[a];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function y(e,t,r){return 100*(e-t)/(r-t)}function L(e,t,r){var a=Math.round((e-r)/t)*t+r;return Number(a.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}var a=e.toString().split(".")[1];return a?a.length:0}(t)))}function C(e){var t=e.values,r=e.newValue,a=e.index,n=t.slice();return n[a]=r,n.sort(x)}function P(e){var t,r,a,n=e.sliderRef,o=e.activeIndex,i=e.setActive,l=(0,m.Z)(n.current);null!=(t=n.current)&&t.contains(l.activeElement)&&Number(null==l||null==(r=l.activeElement)?void 0:r.getAttribute("data-index"))===o||(null==(a=n.current)||a.querySelector('[type="range"][data-index="'.concat(o,'"]')).focus());i&&i(o)}function R(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"object"===typeof e&&"object"===typeof t&&function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return e===t};return e.length===t.length&&e.every((function(e,a){return r(e,t[a])}))}(e,t)}var z,A={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},T=function(e){return e};function N(){return void 0===z&&(z="undefined"===typeof CSS||"function"!==typeof CSS.supports||CSS.supports("touch-action","none")),z}function I(e){var t=e["aria-labelledby"],r=e.defaultValue,a=e.disabled,n=void 0!==a&&a,l=e.disableSwap,u=void 0!==l&&l,s=e.isRtl,c=void 0!==s&&s,z=e.marks,I=void 0!==z&&z,M=e.max,E=void 0===M?100:M,j=e.min,F=void 0===j?0:j,V=e.name,O=e.onChange,D=e.onChangeCommitted,Y=e.orientation,B=void 0===Y?"horizontal":Y,X=e.rootRef,q=e.scale,H=void 0===q?T:q,W=e.step,$=void 0===W?1:W,_=e.tabIndex,G=e.value,J=i.useRef(),K=i.useState(-1),Q=(0,v.Z)(K,2),U=Q[0],ee=Q[1],te=i.useState(-1),re=(0,v.Z)(te,2),ae=re[0],ne=re[1],oe=i.useState(!1),ie=(0,v.Z)(oe,2),le=ie[0],ue=ie[1],se=i.useRef(0),ce=(0,p.Z)({controlled:G,default:null!=r?r:F,name:"Slider"}),de=(0,v.Z)(ce,2),ve=de[0],me=de[1],pe=O&&function(e,t,r){var a=e.nativeEvent||e,n=new a.constructor(a.type,a);Object.defineProperty(n,"target",{writable:!0,value:{value:t,name:V}}),O(n,t,r)},fe=Array.isArray(ve),be=fe?ve.slice().sort(x):[ve];be=be.map((function(e){return k(e,F,E)}));var he=!0===I&&null!==$?(0,d.Z)(Array(Math.floor((E-F)/$)+1)).map((function(e,t){return{value:F+$*t}})):I||[],Ze=he.map((function(e){return e.value})),ge=(0,f.Z)(),xe=ge.isFocusVisibleRef,ke=ge.onBlur,Se=ge.onFocus,we=ge.ref,ye=i.useState(-1),Le=(0,v.Z)(ye,2),Ce=Le[0],Pe=Le[1],Re=i.useRef(),ze=(0,b.Z)(we,Re),Ae=(0,b.Z)(X,ze),Te=function(e){return function(t){var r,a=Number(t.currentTarget.getAttribute("data-index"));Se(t),!0===xe.current&&Pe(a),ne(a),null==e||null==(r=e.onFocus)||r.call(e,t)}},Ne=function(e){return function(t){var r;ke(t),!1===xe.current&&Pe(-1),ne(-1),null==e||null==(r=e.onBlur)||r.call(e,t)}};(0,h.Z)((function(){var e;n&&Re.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[n]),n&&-1!==U&&ee(-1),n&&-1!==Ce&&Pe(-1);var Ie=function(e){return function(t){var r;null==(r=e.onChange)||r.call(e,t);var a=Number(t.currentTarget.getAttribute("data-index")),n=be[a],o=Ze.indexOf(n),i=t.target.valueAsNumber;if(he&&null==$&&(i=i<n?Ze[o-1]:Ze[o+1]),i=k(i,F,E),he&&null==$){var l=Ze.indexOf(be[a]);i=i<be[a]?Ze[l-1]:Ze[l+1]}if(fe){u&&(i=k(i,be[a-1]||-1/0,be[a+1]||1/0));var s=i;i=C({values:be,newValue:i,index:a});var c=a;u||(c=i.indexOf(s)),P({sliderRef:Re,activeIndex:c})}me(i),Pe(a),pe&&!R(i,ve)&&pe(t,i,a),D&&D(t,i)}},Me=i.useRef(),Ee=B;c&&"horizontal"===B&&(Ee+="-reverse");var je=function(e){var t,r,a=e.finger,n=e.move,o=void 0!==n&&n,i=Re.current.getBoundingClientRect(),l=i.width,s=i.height,c=i.bottom,d=i.left;if(t=0===Ee.indexOf("vertical")?(c-a.y)/s:(a.x-d)/l,-1!==Ee.indexOf("-reverse")&&(t=1-t),r=function(e,t,r){return(r-t)*e+t}(t,F,E),$)r=L(r,$,F);else{var v=S(Ze,r);r=Ze[v]}r=k(r,F,E);var m=0;if(fe){m=o?Me.current:S(be,r),u&&(r=k(r,be[m-1]||-1/0,be[m+1]||1/0));var p=r;r=C({values:be,newValue:r,index:m}),u&&o||(m=r.indexOf(p),Me.current=m)}return{newValue:r,activeIndex:m}},Fe=(0,Z.Z)((function(e){var t=w(e,J);if(t)if(se.current+=1,"mousemove"!==e.type||0!==e.buttons){var r=je({finger:t,move:!0}),a=r.newValue,n=r.activeIndex;P({sliderRef:Re,activeIndex:n,setActive:ee}),me(a),!le&&se.current>2&&ue(!0),pe&&!R(a,ve)&&pe(e,a,n)}else Ve(e)})),Ve=(0,Z.Z)((function(e){var t=w(e,J);if(ue(!1),t){var r=je({finger:t,move:!0}).newValue;ee(-1),"touchend"===e.type&&ne(-1),D&&D(e,r),J.current=void 0,De()}})),Oe=(0,Z.Z)((function(e){if(!n){N()||e.preventDefault();var t=e.changedTouches[0];null!=t&&(J.current=t.identifier);var r=w(e,J);if(!1!==r){var a=je({finger:r}),o=a.newValue,i=a.activeIndex;P({sliderRef:Re,activeIndex:i,setActive:ee}),me(o),pe&&!R(o,ve)&&pe(e,o,i)}se.current=0;var l=(0,m.Z)(Re.current);l.addEventListener("touchmove",Fe),l.addEventListener("touchend",Ve)}})),De=i.useCallback((function(){var e=(0,m.Z)(Re.current);e.removeEventListener("mousemove",Fe),e.removeEventListener("mouseup",Ve),e.removeEventListener("touchmove",Fe),e.removeEventListener("touchend",Ve)}),[Ve,Fe]);i.useEffect((function(){var e=Re.current;return e.addEventListener("touchstart",Oe,{passive:N()}),function(){e.removeEventListener("touchstart",Oe,{passive:N()}),De()}}),[De,Oe]),i.useEffect((function(){n&&De()}),[n,De]);var Ye=function(e){return function(t){var r;if(null==(r=e.onMouseDown)||r.call(e,t),!n&&!t.defaultPrevented&&0===t.button){t.preventDefault();var a=w(t,J);if(!1!==a){var o=je({finger:a}),i=o.newValue,l=o.activeIndex;P({sliderRef:Re,activeIndex:l,setActive:ee}),me(i),pe&&!R(i,ve)&&pe(t,i,l)}se.current=0;var u=(0,m.Z)(Re.current);u.addEventListener("mousemove",Fe),u.addEventListener("mouseup",Ve)}}},Be=y(fe?be[0]:F,F,E),Xe=y(be[be.length-1],F,E)-Be,qe=function(e){return function(t){var r;null==(r=e.onMouseOver)||r.call(e,t);var a=Number(t.currentTarget.getAttribute("data-index"));ne(a)}},He=function(e){return function(t){var r;null==(r=e.onMouseLeave)||r.call(e,t),ne(-1)}};return{active:U,axis:Ee,axisProps:A,dragging:le,focusedThumbIndex:Ce,getHiddenInputProps:function(){var r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={onChange:Ie(a||{}),onFocus:Te(a||{}),onBlur:Ne(a||{})},l=(0,o.Z)((0,o.Z)({},a),i);return(0,o.Z)((0,o.Z)({tabIndex:_,"aria-labelledby":t,"aria-orientation":B,"aria-valuemax":H(E),"aria-valuemin":H(F),name:V,type:"range",min:e.min,max:e.max,step:null!=(r=e.step)?r:void 0,disabled:n},l),{},{style:(0,o.Z)((0,o.Z)({},g),{},{direction:c?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={onMouseDown:Ye(e||{})},r=(0,o.Z)((0,o.Z)({},e),t);return(0,o.Z)({ref:Ae},r)},getThumbProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={onMouseOver:qe(e||{}),onMouseLeave:He(e||{})};return(0,o.Z)((0,o.Z)({},e),t)},marks:he,open:ae,range:fe,rootRef:Ae,trackLeap:Xe,trackOffset:Be,values:be}}var M=r(7551),E=r(7342),j=r(7592),F=r(9860),V=function(e){return!e||!(0,c.Z)(e)},O=r(1615),D=r(7430),Y=r(2298);function B(e){return(0,Y.Z)("MuiSlider",e)}var X=(0,D.Z)("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),q=r(6417);var H=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function W(e){return e}var $=(0,j.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,O.Z)(r.color))],"medium"!==r.size&&t["size".concat((0,O.Z)(r.size))],r.marked&&t.marked,"vertical"===r.orientation&&t.vertical,"inverted"===r.track&&t.trackInverted,!1===r.track&&t.trackFalse]}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(r.vars||r).palette[a.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===a.orientation&&(0,o.Z)((0,o.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===a.size&&{height:2}),a.marked&&{marginBottom:20})),"vertical"===a.orientation&&(0,o.Z)((0,o.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===a.size&&{width:2}),a.marked&&{marginRight:44})),{},(t={"@media print":{colorAdjust:"exact"}},(0,n.Z)(t,"&.".concat(X.disabled),{pointerEvents:"none",cursor:"default",color:(r.vars||r).palette.grey[400]}),(0,n.Z)(t,"&.".concat(X.dragging),(0,n.Z)({},"& .".concat(X.thumb,", & .").concat(X.track),{transition:"none"})),t))})),_=(0,j.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:function(e,t){return t.rail}})((function(e){var t=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}),"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}),"inverted"===t.track&&{opacity:1})})),G=(0,j.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme,r=e.ownerState,a="light"===t.palette.mode?(0,M.$n)(t.palette[r.color].main,.62):(0,M._j)(t.palette[r.color].main,.5);return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===r.size&&{border:"none"}),"horizontal"===r.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"}),"vertical"===r.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"}),!1===r.track&&{display:"none"}),"inverted"===r.track&&{backgroundColor:t.vars?t.vars.palette.Slider["".concat(r.color,"Track")]:a,borderColor:t.vars?t.vars.palette.Slider["".concat(r.color,"Track")]:a})})),J=(0,j.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:function(e,t){var r=e.ownerState;return[t.thumb,t["thumbColor".concat((0,O.Z)(r.color))],"medium"!==r.size&&t["thumbSize".concat((0,O.Z)(r.size))]]}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:r.transitions.create(["box-shadow","left","bottom"],{duration:r.transitions.duration.shortest})},"small"===a.size&&{width:12,height:12}),"horizontal"===a.orientation&&{top:"50%",transform:"translate(-50%, -50%)"}),"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 50%)"}),{},(t={"&:before":(0,o.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(r.vars||r).shadows[2]},"small"===a.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},(0,n.Z)(t,"&:hover, &.".concat(X.focusVisible),{boxShadow:"0px 0px 0px 8px ".concat(r.vars?"rgba(".concat(r.vars.palette[a.color].mainChannel," / 0.16)"):(0,M.Fq)(r.palette[a.color].main,.16)),"@media (hover: none)":{boxShadow:"none"}}),(0,n.Z)(t,"&.".concat(X.active),{boxShadow:"0px 0px 0px 14px ".concat(r.vars?"rgba(".concat(r.vars.palette[a.color].mainChannel," / 0.16)"):(0,M.Fq)(r.palette[a.color].main,.16))}),(0,n.Z)(t,"&.".concat(X.disabled),{"&:hover":{boxShadow:"none"}}),t))})),K=(0,j.ZP)((function(e){var t=e.children,r=e.className,a=e.value,n=function(e){var t=e.open;return{offset:(0,l.Z)(t&&X.valueLabelOpen),circle:X.valueLabelCircle,label:X.valueLabelLabel}}(e);return t?i.cloneElement(t,{className:(0,l.Z)(t.props.className)},(0,q.jsxs)(i.Fragment,{children:[t.props.children,(0,q.jsx)("span",{className:(0,l.Z)(n.offset,r),"aria-hidden":!0,children:(0,q.jsx)("span",{className:n.circle,children:(0,q.jsx)("span",{className:n.label,children:a})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:function(e,t){return t.valueLabel}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((t={},(0,n.Z)(t,"&.".concat(X.valueLabelOpen),{transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(1)")}),(0,n.Z)(t,"zIndex",1),(0,n.Z)(t,"whiteSpace","nowrap"),t),r.typography.body2),{},{fontWeight:500,transition:r.transitions.create(["transform"],{duration:r.transitions.duration.shortest}),transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(0)"),position:"absolute",backgroundColor:(r.vars||r).palette.grey[600],borderRadius:2,color:(r.vars||r).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===a.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}}),"vertical"===a.orientation&&{right:"small"===a.size?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"50%"}}),"small"===a.size&&{fontSize:r.typography.pxToRem(12),padding:"0.25rem 0.5rem"})})),Q=(0,j.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:function(e){return(0,j.Dz)(e)&&"markActive"!==e},overridesResolver:function(e,t){var r=e.markActive;return[t.mark,r&&t.markActive]}})((function(e){var t=e.theme,r=e.ownerState,a=e.markActive;return(0,o.Z)((0,o.Z)((0,o.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===r.orientation&&{top:"50%",transform:"translate(-1px, -50%)"}),"vertical"===r.orientation&&{left:"50%",transform:"translate(-50%, 1px)"}),a&&{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8})})),U=(0,j.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:function(e){return(0,j.Dz)(e)&&"markLabelActive"!==e},overridesResolver:function(e,t){return t.markLabel}})((function(e){var t=e.theme,r=e.ownerState,a=e.markLabelActive;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},t.typography.body2),{},{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===r.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}),"vertical"===r.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}),a&&{color:(t.vars||t).palette.text.primary})})),ee=function(e){return e.children},te=i.forwardRef((function(e,t){var r,n,d,v,m,p,f,b,h,Z,g,x,k,S,w,L,C,P,R,z,A,T,N,M,j=(0,E.Z)({props:e,name:"MuiSlider"}),D="rtl"===(0,F.Z)().direction,Y=j["aria-label"],X=j["aria-valuetext"],te=j["aria-labelledby"],re=j.component,ae=void 0===re?"span":re,ne=j.components,oe=void 0===ne?{}:ne,ie=j.componentsProps,le=void 0===ie?{}:ie,ue=j.color,se=void 0===ue?"primary":ue,ce=j.classes,de=j.className,ve=j.disableSwap,me=void 0!==ve&&ve,pe=j.disabled,fe=void 0!==pe&&pe,be=j.getAriaLabel,he=j.getAriaValueText,Ze=j.marks,ge=void 0!==Ze&&Ze,xe=j.max,ke=void 0===xe?100:xe,Se=j.min,we=void 0===Se?0:Se,ye=(j.name,j.onChange,j.onChangeCommitted,j.orientation),Le=void 0===ye?"horizontal":ye,Ce=j.size,Pe=void 0===Ce?"medium":Ce,Re=j.step,ze=void 0===Re?1:Re,Ae=j.scale,Te=void 0===Ae?W:Ae,Ne=j.slotProps,Ie=j.slots,Me=(j.tabIndex,j.track),Ee=void 0===Me?"normal":Me,je=(j.value,j.valueLabelDisplay),Fe=void 0===je?"off":je,Ve=j.valueLabelFormat,Oe=void 0===Ve?W:Ve,De=(0,a.Z)(j,H),Ye=(0,o.Z)((0,o.Z)({},j),{},{isRtl:D,max:ke,min:we,classes:ce,disabled:fe,disableSwap:me,orientation:Le,marks:ge,color:se,size:Pe,step:ze,scale:Te,track:Ee,valueLabelDisplay:Fe,valueLabelFormat:Oe}),Be=I((0,o.Z)((0,o.Z)({},Ye),{},{rootRef:t})),Xe=Be.axisProps,qe=Be.getRootProps,He=Be.getHiddenInputProps,We=Be.getThumbProps,$e=Be.open,_e=Be.active,Ge=Be.axis,Je=Be.focusedThumbIndex,Ke=Be.range,Qe=Be.dragging,Ue=Be.marks,et=Be.values,tt=Be.trackOffset,rt=Be.trackLeap;Ye.marked=Ue.length>0&&Ue.some((function(e){return e.label})),Ye.dragging=Qe,Ye.focusedThumbIndex=Je;var at=function(e){var t=e.disabled,r=e.dragging,a=e.marked,n=e.orientation,o=e.track,i=e.classes,l=e.color,s=e.size,c={root:["root",t&&"disabled",r&&"dragging",a&&"marked","vertical"===n&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse",l&&"color".concat((0,O.Z)(l)),s&&"size".concat((0,O.Z)(s))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",s&&"thumbSize".concat((0,O.Z)(s)),l&&"thumbColor".concat((0,O.Z)(l))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,u.Z)(c,B,i)}(Ye),nt=null!=(r=null!=(n=null==Ie?void 0:Ie.root)?n:oe.Root)?r:$,ot=null!=(d=null!=(v=null==Ie?void 0:Ie.rail)?v:oe.Rail)?d:_,it=null!=(m=null!=(p=null==Ie?void 0:Ie.track)?p:oe.Track)?m:G,lt=null!=(f=null!=(b=null==Ie?void 0:Ie.thumb)?b:oe.Thumb)?f:J,ut=null!=(h=null!=(Z=null==Ie?void 0:Ie.valueLabel)?Z:oe.ValueLabel)?h:K,st=null!=(g=null!=(x=null==Ie?void 0:Ie.mark)?x:oe.Mark)?g:Q,ct=null!=(k=null!=(S=null==Ie?void 0:Ie.markLabel)?S:oe.MarkLabel)?k:U,dt=null!=(w=null!=(L=null==Ie?void 0:Ie.input)?L:oe.Input)?w:"input",vt=null!=(C=null==Ne?void 0:Ne.root)?C:le.root,mt=null!=(P=null==Ne?void 0:Ne.rail)?P:le.rail,pt=null!=(R=null==Ne?void 0:Ne.track)?R:le.track,ft=null!=(z=null==Ne?void 0:Ne.thumb)?z:le.thumb,bt=null!=(A=null==Ne?void 0:Ne.valueLabel)?A:le.valueLabel,ht=null!=(T=null==Ne?void 0:Ne.mark)?T:le.mark,Zt=null!=(N=null==Ne?void 0:Ne.markLabel)?N:le.markLabel,gt=null!=(M=null==Ne?void 0:Ne.input)?M:le.input,xt=(0,s.Z)({elementType:nt,getSlotProps:qe,externalSlotProps:vt,externalForwardedProps:De,additionalProps:(0,o.Z)({},V(nt)&&{as:ae}),ownerState:(0,o.Z)((0,o.Z)({},Ye),null==vt?void 0:vt.ownerState),className:[at.root,de]}),kt=(0,s.Z)({elementType:ot,externalSlotProps:mt,ownerState:Ye,className:at.rail}),St=(0,s.Z)({elementType:it,externalSlotProps:pt,additionalProps:{style:(0,o.Z)((0,o.Z)({},Xe[Ge].offset(tt)),Xe[Ge].leap(rt))},ownerState:(0,o.Z)((0,o.Z)({},Ye),null==pt?void 0:pt.ownerState),className:at.track}),wt=(0,s.Z)({elementType:lt,getSlotProps:We,externalSlotProps:ft,ownerState:(0,o.Z)((0,o.Z)({},Ye),null==ft?void 0:ft.ownerState),className:at.thumb}),yt=(0,s.Z)({elementType:ut,externalSlotProps:bt,ownerState:(0,o.Z)((0,o.Z)({},Ye),null==bt?void 0:bt.ownerState),className:at.valueLabel}),Lt=(0,s.Z)({elementType:st,externalSlotProps:ht,ownerState:Ye,className:at.mark}),Ct=(0,s.Z)({elementType:ct,externalSlotProps:Zt,ownerState:Ye,className:at.markLabel}),Pt=(0,s.Z)({elementType:dt,getSlotProps:He,externalSlotProps:gt,ownerState:Ye});return(0,q.jsxs)(nt,(0,o.Z)((0,o.Z)({},xt),{},{children:[(0,q.jsx)(ot,(0,o.Z)({},kt)),(0,q.jsx)(it,(0,o.Z)({},St)),Ue.filter((function(e){return e.value>=we&&e.value<=ke})).map((function(e,t){var r,a=y(e.value,we,ke),n=Xe[Ge].offset(a);return r=!1===Ee?-1!==et.indexOf(e.value):"normal"===Ee&&(Ke?e.value>=et[0]&&e.value<=et[et.length-1]:e.value<=et[0])||"inverted"===Ee&&(Ke?e.value<=et[0]||e.value>=et[et.length-1]:e.value>=et[0]),(0,q.jsxs)(i.Fragment,{children:[(0,q.jsx)(st,(0,o.Z)((0,o.Z)((0,o.Z)({"data-index":t},Lt),!(0,c.Z)(st)&&{markActive:r}),{},{style:(0,o.Z)((0,o.Z)({},n),Lt.style),className:(0,l.Z)(Lt.className,r&&at.markActive)})),null!=e.label?(0,q.jsx)(ct,(0,o.Z)((0,o.Z)((0,o.Z)({"aria-hidden":!0,"data-index":t},Ct),!(0,c.Z)(ct)&&{markLabelActive:r}),{},{style:(0,o.Z)((0,o.Z)({},n),Ct.style),className:(0,l.Z)(at.markLabel,Ct.className,r&&at.markLabelActive),children:e.label})):null]},t)})),et.map((function(e,t){var r=y(e,we,ke),a=Xe[Ge].offset(r),n="off"===Fe?ee:ut;return(0,q.jsx)(n,(0,o.Z)((0,o.Z)((0,o.Z)({},!(0,c.Z)(n)&&{valueLabelFormat:Oe,valueLabelDisplay:Fe,value:"function"===typeof Oe?Oe(Te(e),t):Oe,index:t,open:$e===t||_e===t||"on"===Fe,disabled:fe}),yt),{},{children:(0,q.jsx)(lt,(0,o.Z)((0,o.Z)({"data-index":t},wt),{},{className:(0,l.Z)(at.thumb,wt.className,_e===t&&at.active,Je===t&&at.focusVisible),style:(0,o.Z)((0,o.Z)({},a),{},{pointerEvents:me&&_e!==t?"none":void 0},wt.style),children:(0,q.jsx)(dt,(0,o.Z)({"data-index":t,"aria-label":be?be(t):Y,"aria-valuenow":Te(e),"aria-labelledby":te,"aria-valuetext":he?he(Te(e),t):X,value:et[t]},Pt))}))}),t)}))]}))})),re=te}}]);