"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[398],{9233:function(e,t,n){n(7313);var i=n(5823),a=n(1387),r=(n(8282),n(4631)),o=n(6417);t.Z=function(e){var t=e.onChangeHandler;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,{"data-testid":"file-input",type:"file",onChange:function(e){var n=e.target.files[0];return console.log("size",(0,i.bE)(n.size)),(0,i.TV)(n)?(0,i.bE)(n.size)>200?(a.Am.warn("file exceeded 200MB"),void(e.target.value="")):void t(e):(a.Am.warn("Select video file"),void(e.target.value=""))},style:{width:"100%"},inputProps:{accept:"video/*"}})})}},5269:function(e,t,n){var i=n(4165),a=n(5861),r=n(9439),o=n(9328),s=n(7313);t.Z=function(e){var t=e.url,n=e.config,l=(0,s.useState)(null),c=(0,r.Z)(l,2),d=c[0],u=c[1],h=(0,s.useState)(!1),p=(0,r.Z)(h,2),f=p[0],m=p[1],v=(0,s.useState)(!1),g=(0,r.Z)(v,2),x=g[0],Z=g[1],y=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(a){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),m(!1),Z(!0),e.prev=3,e.next=6,o.Z.post(t,a,n);case 6:200===(r=e.sent).status?(Z(!1),u(r)):(Z(!1),m(!0)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),Z(!1),m(!0);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return[d,f,x,y]}},9571:function(e,t,n){var i=n(7313),a=n(7829),r=n(1113),o=n(6417),s=function(e){console.log("header rendering");var t=e.heading,n=e.description;return(0,o.jsxs)(a.Z,{marginBottom:5,children:[(0,o.jsx)(r.Z,{variant:"h4",component:"h1",gutterBottom:!0,fontWeight:600,children:t}),(0,o.jsx)(r.Z,{variant:"body1",component:"p",children:n})]})};t.Z=(0,i.memo)(s)},87:function(e,t,n){n(7313);var i=n(593),a=n(7829),r=n(1113),o=n(9099),s=n(9176),l=n(8925),c=n(2539),d=n(5823),u=n(6417);t.Z=function(e){var t=e.percent,n=e.strVideoPath,h=e.action;t=isNaN(t)?0:t;var p="";return h===i.om.FPS?p="The video's FPS has been updated.":h===i.om.COMPRESS?p="The video has been compressed.":h===i.om.RESOLUTION?p="The video's resolution has been updated.":h===i.om.FORMAT&&(p="The video's format has been updated."),(0,u.jsx)(u.Fragment,{children:n.length>0?(0,u.jsxs)(a.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,u.jsx)(r.Z,{variant:"body1",component:"p",fontSize:18,marginBottom:3,children:p}),(0,u.jsx)(o.Z,{variant:"contained",color:"primary",size:"large",endIcon:(0,u.jsx)(c.qm7,{}),onClick:function(e){(0,l.saveAs)("".concat(d.FH,"/").concat(n),"video")},children:"Download"})]}):(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,u.jsx)(s.Z,{variant:"determinate",value:t,style:{width:"100%",height:"20px",maxWidth:"400px"}}),(0,u.jsx)(r.Z,{variant:"body2",color:"textSecondary",children:"Processing ".concat(Math.ceil(t),"%")}),(0,u.jsxs)(r.Z,{variant:"body2",style:{color:"#000000",marginTop:"20px"},children:[(0,u.jsx)("span",{style:{color:"#ff0000"},children:"IMPORTANT:"})," Avoid page refresh while processing. Refreshing will necessitate video reupload."]})]})})}},1398:function(e,t,n){n.r(t);var i=n(9439),a=n(7313),r=n(9233),o=n(5269),s=(n(8282),n(7829)),l=n(1113),c=n(6269),d=n(4537),u=n(9099),h=n(593),p=n(87),f=n(9571),m=n(7864),v=n(5823),g=n(6417);t.default=function(e){var t=e.wsClient,n=(0,a.useState)(20),x=(0,i.Z)(n,2),Z=x[0],y=x[1],j=(0,a.useState)(null),S=(0,i.Z)(j,2),b=S[0],w=S[1],F=(0,a.useState)(0),C=(0,i.Z)(F,2),P=C[0],O=C[1],R=(0,a.useState)(!1),T=(0,i.Z)(R,2),N=T[0],A=T[1],E=(0,a.useState)(""),I=(0,i.Z)(E,2),M=I[0],D=I[1],k=(0,o.Z)({url:"".concat(v.FH,"/upload"),config:h.AH}),z=(0,i.Z)(k,4),H=z[0],L=z[1],V=z[2],q=z[3];return(0,a.useEffect)((function(){if(H){var e=h.om.COMPRESS,n={COMPRESS_VAL:Z};t.send(JSON.stringify({type:"enque",newUploadedFileName:H.data.newUploadedFileName,uploadedFileFormat:H.data.uploadedFileFormat,action:e,actionParam:n}))}}),[H,L,V]),t.onmessage=function(e){var t=JSON.parse(e.data);if(console.log("WS message! ",t),"reencodeResponse"===t.type)A(!1),t.bSuccess?(console.log("Reencoded path >> ",t.strOutputFilePath),D(t.strOutputFilePath)):D("");else if("reencodeProgress"===t.type){var n=isNaN(t.percent)?0:parseInt(t.percent);O(n)}},(0,g.jsx)(g.Fragment,{children:N||0!==M.length?(0,g.jsx)(p.Z,{percent:P,strVideoPath:M,action:h.om.COMPRESS}):(0,g.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",children:[(0,g.jsx)(f.Z,{heading:"Compress Video",description:"Reduce the video file sizes while maintaining quality, with adjustable compression strength."}),(0,g.jsx)("form",{onSubmit:function(e){e.preventDefault(),D(""),O(0),A(!0);var t=new FormData;t.append("video",b),t.append("format",(0,h.xm)(b.name,!0)),q(t)},children:(0,g.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"center",children:[(0,g.jsx)(r.Z,{onChangeHandler:function(e){console.log(e.target.files[0]),w(e.target.files[0])}}),(0,g.jsxs)(s.Z,{display:"flex",flexDirection:"column",alignItems:"flex-start",style:{width:"100%",margin:"15px 0"},children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsxs)(l.Z,{id:"slider-label",variant:"body1",fontWeight:500,children:["Compression strength: ",(0,g.jsx)("span",{"data-testid":"value-label",children:Z}),"%"]}),(0,g.jsx)(c.Z,{title:"Higher value indicates stronger compression, but potentially lower quality. The recommended compression strength is 20.",arrow:!0,children:(0,g.jsx)(s.Z,{children:(0,g.jsx)(m.ocf,{style:{cursor:"pointer",marginLeft:"5px"}})})})]}),(0,g.jsx)(d.ZP,{"data-testid":"slider",value:Z,min:0,max:100,onChange:function(e,t){y(t)},"aria-labelledby":"horizontal-slider",valueLabelDisplay:"auto"})]}),(0,g.jsx)(u.Z,{"data-testid":"uploadbtn",type:"submit",variant:"contained",color:"primary",disabled:null===b,children:"upload"})]})})]})})}},593:function(e,t,n){n.d(t,{AH:function(){return i},om:function(){return r},xm:function(){return a}});var i={headers:{"content-type":"multipart/form-data"}},a=function(e,t){var n=e.split("."),i=n[n.length-1];return t?"."+i:i},r={FPS:1,RESOLUTION:2,FORMAT:3,COMPRESS:4}}}]);