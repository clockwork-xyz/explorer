(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequirea886;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequirea886=r),r.register("6e3fU",(function(n,i){t(n.exports,"NotificationAccountHeader",(function(){return s}));var o=r("aZikt"),l=r("2uNYq"),a=r("8sCMi"),c=r("i5RrQ");const s=t=>l.useIsMultiChainEnabled()?e(o).createElement(c.MultichainAccountHeader,Object.assign({enableAccountSwitcher:!1},t)):e(o).createElement(a.AccountHeader,Object.assign({},t))})),r.register("3SLht",(function(n,i){t(n.exports,"BlocklistConnectRequest",(function(){return k}),(function(e){return k=e})),t(n.exports,"BlocklistOrigin",(function(){return S}),(function(e){return S=e}));var o=r("aZikt"),l=r("ltHDB"),a=r("6oEu9"),c=r("lwple"),s=r("9OxTN"),u=r("cFuyE"),d=r("czDD7"),f=r("hHMPk"),p=r("8xzWM"),m=r("awYjP"),g=r("lFcxH"),x=r("kaQO6"),b=r("6e3fU"),h=r("h7pEd"),E=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function l(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}c((i=i.apply(e,t||[])).next())}))};const y="#eb3742",v=f.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=f.default.div`
  border: 1px solid ${y};
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 10px;
`,k=({tabId:t,origin:n,confirmApproval:i,denyApproval:r})=>{const{t:a}=l.useTranslation();return e(o).createElement(h.Container,{"data-testid":"blocklist-connect-request"},e(o).createElement(b.NotificationAccountHeader,null),e(o).createElement(h.Body,null,e(o).createElement(h.TopGroup,null,e(o).createElement(g.TabIconHeader,{tabId:t,secondaryText:u.removeWebPrefixes(n),showWarning:!0})),e(o).createElement(v,null,e(o).createElement(T,null,e(o).createElement(x.Text,{size:14,color:y},a("blocklistConnectionDisabled"))),e(o).createElement(x.Text,{size:14,color:"#777777",hoverColor:y,onClick:()=>i(n)},a("blocklistConnectionIgnoreWarning")))),e(o).createElement(h.Footer,{plain:!0},e(o).createElement(p.Button,{onClick:()=>r(n)},a("commandClose"))))},w=f.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fae5e6;
`,O=f.default.div`
  position: absolute;
  width: 760px;
  height: 603px;
  left: calc(50% - 760px / 2 + 0.5px);
  top: calc(50% - 603px / 2);
  border: 2px solid ${y};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`,C=f.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`,I=f.default.a`
  text-decoration: underline;
  color: ${y};
`,S=({origin:t})=>{const{t:n}=l.useTranslation(),i=t?s.removeSubdomainFromDomain(t):"";return e(o).createElement(w,null,e(o).createElement(O,null,e(o).createElement(C,null,e(o).createElement(m.LogoPhishingDetected,null)),e(o).createElement(x.Text,{size:30,color:y,weight:"600"},n("blocklistOriginDomainIsBlocked",{domainName:i||n("blocklistOriginThisDomain")})),e(o).createElement(x.Text,{color:y},n("blocklistOriginSiteIsMalicious")),e(o).createElement(x.Text,{color:y},e(o).createElement(l.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(o).createElement(I,{href:a.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(o).createElement(I,{href:a.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),i?e(o).createElement(x.Text,{color:y,onClick:()=>E(void 0,void 0,void 0,(function*(){const e=yield d.getStorageValue(c.StorageKeys.UserWhitelistedOrigins);let n=JSON.parse(`${e}`);n?n.push(i):n=[i],n=[...new Set(n)],d.setStorageValue(c.StorageKeys.UserWhitelistedOrigins,JSON.stringify(n)),window.location.href=t})),hoverUnderline:!0},n("blocklistOriginIgnoreWarning",{domainName:i})):e(o).createElement(e(o).Fragment,null)))}}));define=__define;})(window.define);