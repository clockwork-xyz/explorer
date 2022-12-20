(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=i.parcelRequirea886;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},i.parcelRequirea886=a),a.register("ekJeC",(function(i,n){t(i.exports,"ConfirmationIconType",(function(){return p})),t(i.exports,"ConfirmationIcon",(function(){return m}));var r=a("aZikt"),o=a("hHMPk"),l=a("d3pmY"),c=a("elS0S"),u=a("awYjP");const d=o.default.div`
  position: relative;
`,s=o.default(l.motion.div)`
  width: ${e=>e.width}px;
  height: ${e=>e.width}px;
`,f=o.default(l.motion.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;var p;!function(e){e.Default="default",e.Failure="failure",e.Success="success"}(p||(p={}));const m=({type:t,iconWidth:i,defaultIcon:n,backgroundWidth:a=94})=>e(r).createElement(d,null,e(r).createElement(l.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(r).createElement(s,{width:a,key:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(t){case p.Default:return e(r).createElement(c.Circle,{diameter:a,color:"#181818",includeDarkBoxShadow:!0});case p.Failure:return e(r).createElement(c.Circle,{diameter:a,color:"#EB3742",opacity:.1});case p.Success:return e(r).createElement(c.Circle,{diameter:a,color:"#21E56F",opacity:.1});default:return null}})())),e(r).createElement(l.AnimatePresence,{exitBeforeEnter:!0,initial:!0},e(r).createElement(f,{key:t,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},(()=>{switch(t){case p.Default:return null!=n?n:e(r).createElement(u.QuestionMarkIcon,{width:null!=i?i:30});case p.Failure:return e(r).createElement(u.FailureIcon,{width:null!=i?i:30});case p.Success:return e(r).createElement(u.CheckmarkIcon,{height:"100%",width:null!=i?i:40,fill:"#21E56F"});default:return null}})())))}));define=__define;})(window.define);