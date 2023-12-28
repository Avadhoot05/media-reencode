"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[129],{9233:function(e,t,n){n(7313);var a=n(5823),o=n(1387),i=(n(8282),n(4631)),r=n(6417);t.Z=function(e){var t=e.onChangeHandler;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{"data-testid":"file-input",type:"file",onChange:function(e){var n=e.target.files[0];return console.log("size",(0,a.bE)(n.size)),(0,a.TV)(n)?(0,a.bE)(n.size)>200?(o.Am.warn("file exceeded 200MB"),void(e.target.value="")):void t(e):(o.Am.warn("Select video file"),void(e.target.value=""))},style:{width:"100%"},inputProps:{accept:"video/*"}})})}},5269:function(e,t,n){var a=n(4165),o=n(5861),i=n(9439),r=n(9328),s=n(7313);t.Z=function(e){var t=e.url,n=e.config,c=(0,s.useState)(null),l=(0,i.Z)(c,2),d=l[0],u=l[1],p=(0,s.useState)(!1),m=(0,i.Z)(p,2),f=m[0],v=m[1],h=(0,s.useState)(!1),g=(0,i.Z)(h,2),Z=g[0],x=g[1],b=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(o){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),v(!1),x(!0),e.prev=3,e.next=6,r.Z.post(t,o,n);case 6:200===(i=e.sent).status?(x(!1),u(i)):(x(!1),v(!0)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),x(!1),v(!0);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return[d,f,Z,b]}},9571:function(e,t,n){var a=n(7313),o=n(7829),i=n(1113),r=n(6417),s=function(e){console.log("header rendering");var t=e.heading,n=e.description;return(0,r.jsxs)(o.Z,{marginBottom:5,children:[(0,r.jsx)(i.Z,{variant:"h4",component:"h1",gutterBottom:!0,fontWeight:600,children:t}),(0,r.jsx)(i.Z,{variant:"body1",component:"p",children:n})]})};t.Z=(0,a.memo)(s)},87:function(e,t,n){n(7313);var a=n(593),o=n(7829),i=n(1113),r=n(9099),s=n(9176),c=n(8925),l=n(2539),d=n(6417);t.Z=function(e){var t=e.percent,n=e.strVideoPath,u=e.action;t=isNaN(t)?0:t;var p="";return u===a.om.FPS?p="The video's FPS has been updated.":u===a.om.COMPRESS?p="The video has been compressed.":u===a.om.RESOLUTION?p="The video's resolution has been updated.":u===a.om.FORMAT&&(p="The video's format has been updated."),(0,d.jsx)(d.Fragment,{children:n.length>0?(0,d.jsxs)(o.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,d.jsx)(i.Z,{variant:"body1",component:"p",fontSize:18,marginBottom:3,children:p}),(0,d.jsx)(r.Z,{variant:"contained",color:"primary",size:"large",endIcon:(0,d.jsx)(l.qm7,{}),onClick:function(e){(0,c.saveAs)(a.tB+n,"video")},children:"Download"})]}):(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,d.jsx)(s.Z,{variant:"determinate",value:t,style:{width:"100%",height:"20px",maxWidth:"400px"}}),(0,d.jsx)(i.Z,{variant:"body2",color:"textSecondary",children:"Processing ".concat(Math.ceil(t),"%")}),(0,d.jsxs)(i.Z,{variant:"body2",style:{color:"#000000",marginTop:"20px"},children:[(0,d.jsx)("span",{style:{color:"#ff0000"},children:"IMPORTANT:"})," Avoid page refresh while processing. Refreshing will necessitate video reupload."]})]})})}},6129:function(e,t,n){n.r(t);var a=n(9439),o=n(7313),i=n(9233),r=n(5269),s=(n(8282),n(7829)),c=n(9099),l=n(7903),d=n(7874),u=n(3306),p=n(6782),m=n(5480),f=n(593),v=n(87),h=n(9571),g=n(5823),Z=n(6417);t.default=function(e){var t=e.wsClient,n=[,{2:"mp4"},{3:"mov"},{4:"flv"},{5:"mkv"},{6:"avi"}],x=(0,o.useState)(""),b=(0,a.Z)(x,2),y=b[0],C=b[1],w=(0,o.useState)(null),j=(0,a.Z)(w,2),S=j[0],F=j[1],O=(0,o.useState)(""),I=(0,a.Z)(O,2),M=I[0],T=I[1],R=(0,o.useState)(0),k=(0,a.Z)(R,2),N=k[0],P=k[1],A=(0,r.Z)({url:"".concat(g.FH,"/upload"),config:f.AH}),L=(0,a.Z)(A,4),V=L[0],B=L[1],D=L[2],H=L[3],z=(0,o.useState)(!1),E=(0,a.Z)(z,2),G=E[0],q=E[1],U=(0,o.useState)(""),W=(0,a.Z)(U,2),J=W[0],K=W[1];return(0,o.useEffect)((function(){if(V){var e=f.om.FORMAT,n={FORMAT:y};t.send(JSON.stringify({type:"enque",newUploadedFileName:V.data.newUploadedFileName,uploadedFileFormat:V.data.uploadedFileFormat,action:e,actionParam:n}))}}),[V,B,D]),t.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("WS message! ",t),"reencodeResponse"===t.type)q(!1),t.bSuccess?(console.log("Reencoded path >> ",t.strOutputFilePath),K(t.strOutputFilePath)):K("");else if("reencodeProgress"===t.type){var n=isNaN(t.percent)?0:parseInt(t.percent);P(n)}},(0,Z.jsx)(Z.Fragment,{children:G||0!==J.length?(0,Z.jsx)(v.Z,{percent:N,strVideoPath:J,action:f.om.FORMAT}):(0,Z.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,Z.jsx)(h.Z,{heading:"Video Format Conversion",description:"Reencode video files by modifying the file format."}),(0,Z.jsx)("form",{onSubmit:function(e){console.log(y),e.preventDefault(),K(""),P(0),q(!0);var t=new FormData;t.append("video",S),t.append("format",(0,f.xm)(S.name,!0)),H(t)},children:(0,Z.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,Z.jsx)(i.Z,{onChangeHandler:function(e){T(""),F(e.target.files[0]),console.log(y.toLowerCase(),(0,f.xm)(e.target.files[0].name,!1).toLowerCase()),y.toLowerCase()==(0,f.xm)(e.target.files[0].name,!1).toLowerCase()&&T("file is already in selected file format")}}),(0,Z.jsxs)(d.Z,{error:!!M,style:{width:"100%",margin:"15px 0"},children:[(0,Z.jsx)(u.Z,{id:"format-label",children:"Select Format"}),(0,Z.jsx)(p.Z,{"data-testid":"format-select",labelId:"format-label",value:y,onChange:function(e){T(""),C(e.target.value),S&&e.target.value.toLowerCase()==(0,f.xm)(S.name,!1).toLowerCase()&&T("file is already in selected file format")},children:n.map((function(e){var t=Object.keys(e)[0],n=e[t];return(0,Z.jsx)(l.Z,{value:n,children:n.toUpperCase()},t)}))}),""!==M&&(0,Z.jsx)(m.Z,{children:M})]}),(0,Z.jsx)(c.Z,{"data-testid":"uploadbtn",type:"submit",variant:"contained",color:"primary",disabled:""!==M||null===S||""===y,children:"upload"})]})})]})})}},593:function(e,t,n){n.d(t,{AH:function(){return o},om:function(){return r},tB:function(){return a},xm:function(){return i}});var a="http://localhost:3000\\",o={headers:{"content-type":"multipart/form-data"}},i=function(e,t){var n=e.split("."),a=n[n.length-1];return t?"."+a:a},r={FPS:1,RESOLUTION:2,FORMAT:3,COMPRESS:4}},5823:function(e,t,n){n.d(t,{FH:function(){return i},TV:function(){return o},bE:function(){return a}});var a=function(e){return e/1048576},o=function(e){return!(!e||0!=e.type.indexOf("video"))},i="localhost"===window.location.hostname.split(":")[0]||window.location.hostname.includes("192")?"http://localhost:3000":"http://ec2-54-90-108-68.compute-1.amazonaws.com/3000"},7903:function(e,t,n){n.d(t,{Z:function(){return F}});var a=n(5987),o=n(4942),i=n(1413),r=n(7313),s=n(3061),c=n(1921),l=n(7551),d=n(7592),u=n(7342),p=n(1195),m=n(7999),f=n(4993),v=n(6983),h=n(7430);var g=(0,h.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var Z=(0,h.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var x=(0,h.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),b=n(2298);function y(e){return(0,b.Z)("MuiMenuItem",e)}var C=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=n(6417),j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},n.typography.body1),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16}),a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"}),{},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(C.selected),(0,o.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(C.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,o.Z)(t,"&.".concat(C.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(g.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,o.Z)(t,"& + .".concat(g.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(x.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(x.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(Z.root),{minWidth:36}),t),!a.dense&&(0,o.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"})),a.dense&&(0,i.Z)((0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2),{},(0,o.Z)({},"& .".concat(Z.root," svg"),{fontSize:"1.25rem"})))})),F=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),o=n.autoFocus,l=void 0!==o&&o,d=n.component,m=void 0===d?"li":d,h=n.dense,g=void 0!==h&&h,Z=n.divider,x=void 0!==Z&&Z,b=n.disableGutters,C=void 0!==b&&b,F=n.focusVisibleClassName,O=n.role,I=void 0===O?"menuitem":O,M=n.tabIndex,T=n.className,R=(0,a.Z)(n,j),k=r.useContext(p.Z),N=r.useMemo((function(){return{dense:g||k.dense||!1,disableGutters:C}}),[k.dense,g,C]),P=r.useRef(null);(0,f.Z)((function(){l&&P.current&&P.current.focus()}),[l]);var A,L=(0,i.Z)((0,i.Z)({},n),{},{dense:N.dense,divider:x,disableGutters:C}),V=function(e){var t=e.disabled,n=e.dense,a=e.divider,o=e.disableGutters,r=e.selected,s=e.classes,l={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",r&&"selected"]},d=(0,c.Z)(l,y,s);return(0,i.Z)((0,i.Z)({},s),d)}(n),B=(0,v.Z)(P,t);return n.disabled||(A=void 0!==M?M:-1),(0,w.jsx)(p.Z.Provider,{value:N,children:(0,w.jsx)(S,(0,i.Z)((0,i.Z)({ref:B,role:I,tabIndex:A,component:m,focusVisibleClassName:(0,s.Z)(V.focusVisible,F),className:(0,s.Z)(V.root,T)},R),{},{ownerState:L,classes:V}))})}))}}]);