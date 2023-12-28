"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[328],{9233:function(e,t,n){n(7313);var i=n(5823),r=n(1387),a=(n(8282),n(4631)),o=n(6417);t.Z=function(e){var t=e.onChangeHandler;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{"data-testid":"file-input",type:"file",onChange:function(e){var n=e.target.files[0];return console.log("size",(0,i.bE)(n.size)),(0,i.TV)(n)?(0,i.bE)(n.size)>200?(r.Am.warn("file exceeded 200MB"),void(e.target.value="")):void t(e):(r.Am.warn("Select video file"),void(e.target.value=""))},style:{width:"100%"},inputProps:{accept:"video/*"}})})}},5269:function(e,t,n){var i=n(4165),r=n(5861),a=n(9439),o=n(9328),s=n(7313);t.Z=function(e){var t=e.url,n=e.config,c=(0,s.useState)(null),l=(0,a.Z)(c,2),u=l[0],d=l[1],p=(0,s.useState)(!1),h=(0,a.Z)(p,2),f=h[0],m=h[1],v=(0,s.useState)(!1),g=(0,a.Z)(v,2),x=g[0],Z=g[1],S=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(r){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(null),m(!1),Z(!0),e.prev=3,e.next=6,o.Z.post(t,r,n);case 6:200===(a=e.sent).status?(Z(!1),d(a)):(Z(!1),m(!0)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),Z(!1),m(!0);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return[u,f,x,S]}},9571:function(e,t,n){var i=n(7313),r=n(7829),a=n(1113),o=n(6417),s=function(e){console.log("header rendering");var t=e.heading,n=e.description;return(0,o.jsxs)(r.Z,{marginBottom:5,children:[(0,o.jsx)(a.Z,{variant:"h4",component:"h1",gutterBottom:!0,fontWeight:600,children:t}),(0,o.jsx)(a.Z,{variant:"body1",component:"p",children:n})]})};t.Z=(0,i.memo)(s)},87:function(e,t,n){n(7313);var i=n(593),r=n(7829),a=n(1113),o=n(9099),s=n(9176),c=n(8925),l=n(2539),u=n(6417);t.Z=function(e){var t=e.percent,n=e.strVideoPath,d=e.action;t=isNaN(t)?0:t;var p="";return d===i.om.FPS?p="The video's FPS has been updated.":d===i.om.COMPRESS?p="The video has been compressed.":d===i.om.RESOLUTION?p="The video's resolution has been updated.":d===i.om.FORMAT&&(p="The video's format has been updated."),(0,u.jsx)(u.Fragment,{children:n.length>0?(0,u.jsxs)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,u.jsx)(a.Z,{variant:"body1",component:"p",fontSize:18,marginBottom:3,children:p}),(0,u.jsx)(o.Z,{variant:"contained",color:"primary",size:"large",endIcon:(0,u.jsx)(l.qm7,{}),onClick:function(e){(0,c.saveAs)(i.tB+n,"video")},children:"Download"})]}):(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,u.jsx)(s.Z,{variant:"determinate",value:t,style:{width:"100%",height:"20px",maxWidth:"400px"}}),(0,u.jsx)(a.Z,{variant:"body2",color:"textSecondary",children:"Processing ".concat(Math.ceil(t),"%")}),(0,u.jsxs)(a.Z,{variant:"body2",style:{color:"#000000",marginTop:"20px"},children:[(0,u.jsx)("span",{style:{color:"#ff0000"},children:"IMPORTANT:"})," Avoid page refresh while processing. Refreshing will necessitate video reupload."]})]})})}},8328:function(e,t,n){n.r(t);var i=n(9439),r=n(7313),a=n(9233),o=n(5269),s=(n(8282),n(7829)),c=n(4631),l=n(9099),u=n(593),d=n(87),p=n(9571),h=n(5823),f=n(6417);t.default=function(e){var t=e.wsClient,n=(0,r.useState)(""),m=(0,i.Z)(n,2),v=m[0],g=m[1],x=(0,r.useState)(""),Z=(0,i.Z)(x,2),S=Z[0],y=Z[1],j=(0,r.useState)(null),F=(0,i.Z)(j,2),b=F[0],P=F[1],w=(0,r.useState)(0),O=(0,i.Z)(w,2),T=O[0],C=O[1],R=(0,o.Z)({url:"".concat(h.FH,"/upload"),config:u.AH}),N=(0,i.Z)(R,4),I=N[0],A=N[1],E=N[2],M=N[3],k=(0,r.useState)(!1),D=(0,i.Z)(k,2),z=D[0],B=D[1],H=(0,r.useState)(""),V=(0,i.Z)(H,2),U=V[0],q=V[1];return t.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("WS message! ",t),"reencodeResponse"===t.type)B(!1),t.bSuccess?(console.log("Reencoded path >> ",t.strOutputFilePath),q(t.strOutputFilePath)):q("");else if("reencodeProgress"===t.type){var n=isNaN(t.percent)?0:parseInt(t.percent);C(n)}},(0,r.useEffect)((function(){if(I){var e=u.om.FPS,n={FPS:v};t.send(JSON.stringify({type:"enque",newUploadedFileName:I.data.newUploadedFileName,uploadedFileFormat:I.data.uploadedFileFormat,action:e,actionParam:n}))}}),[I,A,E]),(0,f.jsx)(f.Fragment,{children:z||0!==U.length?(0,f.jsx)(d.Z,{percent:T,strVideoPath:U,action:u.om.FPS}):(0,f.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,f.jsx)(p.Z,{heading:"Video FPS Reencoding",description:"Reencode video files by adjusting the Frames Per Second (FPS) value."}),(0,f.jsx)("form",{onSubmit:function(e){e.preventDefault(),q(""),C(0),B(!0);var t=new FormData;t.append("video",b),t.append("format",(0,u.xm)(b.name,!0)),M(t)},children:(0,f.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,f.jsx)(a.Z,{onChangeHandler:function(e){P(e.target.files[0])}}),(0,f.jsx)(c.Z,{"data-testid":"fps-input",type:"number",label:"FPS",variant:"outlined",required:!0,style:{width:"100%",margin:"15px 0"},value:v,onChange:function(e){y("");var t=e.target.value;if(!/^[1-9]\d*$/.test(t))return g(t),void y("Please enter a positive number");g(Math.min(240,parseInt(t)).toString())},error:!!S,helperText:S,inputProps:{min:1}}),(0,f.jsx)(l.Z,{"data-testid":"uploadbtn",type:"submit",variant:"contained",color:"primary",disabled:""!==S||null===b||""===v,children:"upload"})]})})]})})}},593:function(e,t,n){n.d(t,{AH:function(){return r},om:function(){return o},tB:function(){return i},xm:function(){return a}});var i="http://localhost:3000\\",r={headers:{"content-type":"multipart/form-data"}},a=function(e,t){var n=e.split("."),i=n[n.length-1];return t?"."+i:i},o={FPS:1,RESOLUTION:2,FORMAT:3,COMPRESS:4}},5823:function(e,t,n){n.d(t,{FH:function(){return a},TV:function(){return r},bE:function(){return i}});var i=function(e){return e/1048576},r=function(e){return!(!e||0!=e.type.indexOf("video"))},a="localhost"===window.location.hostname.split(":")[0]||window.location.hostname.includes("192")?"http://localhost:3000":"http://ec2-54-90-108-68.compute-1.amazonaws.com/3000"}}]);