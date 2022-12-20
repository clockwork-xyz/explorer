(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},l=t.parcelRequirea886;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequirea886=l),l.register("1zKMS",(function(t,n){var r,a,o,i;r=t.exports,a="FullPageHeader",o=function(){return b},Object.defineProperty(r,a,{get:o,set:i,enumerable:!0,configurable:!0});var f=l("aZikt"),d=l("hHMPk"),u=l("ltHDB"),p=l("6oEu9"),s=l("awYjP"),c=l("kaQO6"),g=l("691SI");const x=d.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,h=d.default(g.Row).attrs({width:"auto",padding:"10px 20px"})`
  background: #252525;
  border-radius: 100px;
`,m=d.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    fill: #aaa;
  }
  &:hover {
    color: #fff;
    svg {
      fill: #fff;
    }
    p {
      color: #fff;
    }
  }
`,b=()=>{const{t:t}=u.useTranslation();return e(f).createElement(x,null,e(f).createElement(h,null,e(f).createElement("img",{src:"/grey_logo.png",alt:"Phantom",width:"22px"}),e(f).createElement(c.LogoText,{size:16,lineHeight:18,margin:"0 0 0 10px"},"Phantom")),e(f).createElement(m,{"data-testid":"full-page-header-support-link",href:p.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(f).createElement(s.HelpIcon,null),e(f).createElement(c.Text,{color:"#AAA",size:16,weight:500,hoverColor:"#FFF",margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}}));define=__define;})(window.define);