(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequirea886=l),l.register("dgKOx",(function(t,n){e(t.exports,"Main",(function(){return i}));var r=l("hHMPk"),o=l("7OhhO"),a=l("fCuks");const i=r.default.div`
  background-color: #222222;
  min-width: ${o.PHANTOM_WIDTH}px;
  min-height: ${o.PHANTOM_HEIGHT}px;
  height: 100vh;
  width: 100vw;
  ${e=>e.withBorder&&o.BROWSER_ENV.browser.name!==a.BROWSER_MAP.safari?"border: 1px solid #323232;":""}
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${o.BROWSER_ENV.browser.name===a.BROWSER_MAP.firefox?"border-radius: 8px;":""}
`})),l.register("1pVZM",(function(n,r){e(n.exports,"LedgerAction",(function(){return T})),e(n.exports,"isKnownLedgerActionError",(function(){return A})),e(n.exports,"LedgerActionError",(function(){return C}));var o=l("aZikt"),a=l("hHMPk"),i=l("ltHDB"),c=l("8f92J"),s=l("6oEu9"),u=l("1DdzG"),d=l("99Anx"),m=l("fGPQl"),p=l("8xzWM"),g=l("lFcxH"),f=l("45nY7"),E=l("hHJQk"),x=l("elS0S"),h=l("awYjP"),w=l("kaQO6");const k=a.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`,y=a.default(g.IconHeader)`
  margin: auto 0px;
  padding-left: 10px;
  padding-right: 10px;
`,T=({ledgerAction:e,numberOfTransactions:n=1,cancel:r=s.NOOP})=>{const{t:l}=i.useTranslation(),{ledgerTransportState:a,transport:d}=m.useLedgerTransport();let g,E=n>1?l("ledgerActionNeedToApproveMany",{numberOfTransactions:n}):l("ledgerActionNeedToApprove"),x=l("commandCancel"),h="default",w=r;switch(a){case m.LedgerTransportState.Searching:case m.LedgerTransportState.WaitingForApplication:g=l("ledgerActionPleaseConnect");break;case m.LedgerTransportState.Connected:g=l("ledgerActionApprove");break;default:g=l("ledgerActionNeedPermission"),E=l("ledgerActionPleaseConnectAndApprove"),h="primary",x=l("commandContinue"),w=()=>{u.openTabAsync({url:"connect_hardware.html?permission=true"}),r()}}return o.useEffect((()=>{if(a===m.LedgerTransportState.Connected&&d)try{e(d)}catch(e){c.telemetry.captureError(e)}}),[a]),t(o).createElement(k,null,t(o).createElement(y,{icon:t(o).createElement(f.Spinner,{diameter:75}),primaryText:g,secondaryText:E}),t(o).createElement(p.Button,{onClick:w,theme:h},x))},v=a.default.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,P=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
`,b=a.default(w.Text).attrs({size:28,lineHeight:34,weight:500})`
  margin-bottom: 8px;
  margin-top: 22px;
`,S=a.default(w.Text).attrs({size:16,color:"#777"})`
  max-width: 275px;
  span {
    color: white;
  }
`,A=e=>{if(e){if(26632===e.statusCode)return!0;if(27013===e.statusCode)return!0;if(27404===e.statusCode)return!0;if("DisconnectedDeviceDuringOperation"===e.name)return!0}return!1},C=({ledgerActionError:e,onRetryClick:n,onCancelClick:r})=>{const{t:l}=i.useTranslation();return t(o).createElement(v,null,t(o).createElement("div",null,t(o).createElement(E.PageHeader,null,l("ledgerActionErrorHeader")),t(o).createElement(P,null,t(o).createElement(x.Circle,{color:d.hexToRGB("#EB3742",.1),diameter:94},t(o).createElement(h.FailureIcon,{width:32})),26632===(null==e?void 0:e.statusCode)?t(o).createElement(t(o).Fragment,null,t(o).createElement(b,null,l("ledgerActionErrorBlindSignDisabledPrimaryText")),t(o).createElement(S,null,l("ledgerActionErrorBlindSignDisabledSecondaryText"))):t(o).createElement(t(o).Fragment,null),27013===(null==e?void 0:e.statusCode)?t(o).createElement(t(o).Fragment,null,t(o).createElement(b,null,l("ledgerActionErrorUserRejectionPrimaryText")),t(o).createElement(S,null,l("ledgerActionErrorUserRejectionSecondaryText"))):t(o).createElement(t(o).Fragment,null),27404===(null==e?void 0:e.statusCode)?t(o).createElement(t(o).Fragment,null,t(o).createElement(b,null,l("ledgerActionErrorDeviceLockedPrimaryText")),t(o).createElement(S,null,l("ledgerActionErrorDeviceLockedSecondaryText"))):t(o).createElement(t(o).Fragment,null),"DisconnectedDeviceDuringOperation"===(null==e?void 0:e.name)?t(o).createElement(t(o).Fragment,null,t(o).createElement(b,null,l("ledgerActionErrorDeviceDisconnectedDuringOperationPrimaryText")),t(o).createElement(S,null,l("ledgerActionErrorDeviceDisconnectedDuringOperationSecondaryText"))):t(o).createElement(t(o).Fragment,null))),t(o).createElement(p.ButtonPair,{primaryText:l("commandRetry"),secondaryText:l("commandCancel"),onPrimaryClicked:n,onSecondaryClicked:r}))}})),l.register("eg2w4",(function(n,r){e(n.exports,"Info",(function(){return d}));var o=l("aZikt"),a=l("hHMPk"),i=l("awYjP"),c=l("kaQO6"),s=l("5M7QO");const u=a.default.div`
  display: flex;
  ${e=>e.isVisible?"cursor: pointer;":""}
  align-items: center;
  p {
    margin-right: 6px;
  }
`,d=({children:e,fontWeight:n,fontSize:r=14,iconSize:l,info:a,lineHeight:d,tooltipAlignment:m})=>{const[p,g]=o.useState(!1),f=!!a,E=f&&p,x=E?"#8A81F8":"#777";return t(o).createElement(s.Tooltip,{label:f?a:t(o).createElement(t(o).Fragment,null),ariaLabel:"Info",color:"#000",alignment:m,isVisible:E,triggerParams:{onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1)}}},t(o).createElement(u,{isVisible:E},t(o).createElement(c.Text,{color:x,lineHeight:d,size:r,weight:n},e),f?t(o).createElement(i.InfoIcon,{fill:x,width:l}):null))}})),l.register("345ql",(function(t,n){e(t.exports,"useGetNetworkFee",(function(){return a}));var r=l("cFuyE"),o=l("eW1cp");const a=()=>{const{feeCalculator:e}=o.useBlockchainState();return r.lamportsToSolana(e.lamportsPerSignature)}})),l.register("kHEYY",(function(n,r){e(n.exports,"Unlock",(function(){return H}),(function(e){return H=e}));var o=l("aZikt"),a=l("hHMPk"),i=l("ltHDB"),c=l("1vmp5"),s=l("6oEu9"),u=l("cNv5c"),d=l("2Of8G"),m=l("41J1p"),p=l("1DdzG"),g=l("8xzWM"),f=l("hHJQk"),E=l("awYjP"),x=l("lFcxH"),h=l("cGG4P"),w=l("kaQO6"),k=l("6pkBl"),y=l("h7pEd"),T=l("8f92J"),v=l("gFYhf"),P=function(e,t,n,r){return new(n||(n=Promise))((function(o,l){function a(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const b=a.default.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,S=a.default.div`
  flex: 1;
  height: 100%;
  margin-top: ${e=>e.isFullScreen?"40px":"105px"};
  display: flex;
  flex-direction: column;
  align-items: center;
`,A=a.default(h.Input)`
  margin-top: 26px;
  margin-bottom: 24px;
`,C=a.default.div`
  width: 12px;
`,F=a.default(w.Text).attrs({size:16,weight:500,color:"#666666"})`
  text-decoration: none;
  &:hover {
    color: #999999;
  }
`,H=({onUnlock:e,isFullScreen:n})=>{const{t:r}=i.useTranslation(),{pushDetailView:l}=u.useDetailViews(),{showSettingsMenu:a}=d.useSettingsMenu(),{register:g,handleSubmit:x,errors:h,getValues:A,setError:H}=c.useForm(),B=o.useCallback((()=>P(void 0,void 0,void 0,(function*(){try{if(!(yield e(A("password"))))throw new Error("Incorrect password");m.analytics.capture("unlockWallet")}catch(e){e.message&&e.message.includes("Incorrect password")?H("password",{type:"manual",message:r("unlockErrorIncorrectPassword")}):(T.telemetry.captureMessage("Unexpected error when unlocking wallet."),H("password",{type:"manual",message:r("unlockErrorSomethingWentWrong")}))}}))),[A,e,H,r]),R=()=>{m.analytics.capture("forgotPassword"),a(),l(t(o).createElement(v.ForgotPassword,null))};return n?t(o).createElement(y.Body,null,t(o).createElement(b,{onSubmit:x(B)},t(o).createElement(S,{isFullScreen:!0},t(o).createElement(D,null),t(o).createElement(O,{register:g,warning:h.password})),t(o).createElement(M,null),t(o).createElement(F,{onClick:R},r("unlockForgotPassword")))):t(o).createElement(y.Container,null,t(o).createElement(f.Header,{justifyContent:"space-between"},t(o).createElement(C,null),t(o).createElement(w.Text,{weight:500,size:16,color:"#555555"},"Phantom.app"),t(o).createElement(k.IconWrapper,{onClick:()=>{m.analytics.capture("walletMenuHelpCenter"),p.openTabAsync({url:s.PHANTOM_SUPPORT_URL})}},t(o).createElement(E.HelpIcon,null))),t(o).createElement(y.Body,null,t(o).createElement(b,{id:"unlock-form",onSubmit:x(B)},t(o).createElement(S,{isFullScreen:!1},t(o).createElement(D,null),t(o).createElement(O,{register:g,warning:h.password}),t(o).createElement(F,{onClick:R},r("unlockForgotPassword"))))),t(o).createElement(y.Footer,{plain:!0},t(o).createElement(M,{"data-testid":"unlock-form-submit-button",form:"unlock-form"})))},O=({register:e,warning:n})=>{const{t:r}=i.useTranslation();return t(o).createElement(A,{"data-testid":"unlock-form-password-input",name:"password",autoFocus:!0,placeholder:r("unlockPassword"),type:"password",ref:e({required:!0}),warning:n})},D=()=>{const{t:e}=i.useTranslation();return t(o).createElement(x.IconHeader,{icon:t(o).createElement(E.LogoDark,null),primaryText:e("unlockEnterPassword")})},M=e=>{const{t:n}=i.useTranslation();return t(o).createElement(g.Button,Object.assign({type:"submit",theme:"primary"},e),n("unlockActionButtonUnlock"))}})),l.register("gFYhf",(function(n,r){e(n.exports,"ForgotPassword",(function(){return f}));var o=l("aZikt"),a=l("ltHDB"),i=l("6oEu9"),c=l("41J1p"),s=l("1DdzG"),u=l("kaQO6"),d=l("awYjP"),m=l("8xzWM"),p=l("hHJQk"),g=l("5RhzW");const f=()=>{const{t:e}=a.useTranslation(),n=o.useCallback((()=>{c.analytics.capture("walletMenuHelpCenter"),s.openTabAsync({url:i.PHANTOM_SUPPORT_URL})}),[]),r=o.useCallback((()=>{s.openTabAsync({url:"onboarding.html?restore=true"})}),[]);return t(o).createElement(t(o).Fragment,null,t(o).createElement(p.SettingsHeader,null,e("unlockForgotPassword")),t(o).createElement(g.ColumnWrapper,{size:"large"},t(o).createElement("div",null),t(o).createElement(g.Content,null,t(o).createElement(d.LockIcon,null),t(o).createElement(u.Text,{size:26,weight:500,lineHeight:31},e("unlockForgotPassword")),t(o).createElement(u.Text,{size:16,color:"#777777",lineHeight:21},e("forgotPasswordText")),t(o).createElement(g.ButtonText,{margin:"8px 0 0",onClick:n},e("commandLearnMore"))),t(o).createElement(m.Button,{onClick:r,theme:"primary"},e("walletMenuItemsResetSecretPhrase"))))}})),l.register("3jzCT",(function(n,r){e(n.exports,"ExtensionLockWrapper",(function(){return i}));var o=l("aZikt"),a=l("kNJcR");const i=e=>{const{openOnboarding:n,renderLocked:r}=e,{state:l,refresh:i,unlock:c}=a.useExtensionLockState();return o.useEffect((()=>{"unknown"===l&&i(),"onboarding"===l&&n()}),[l,i,n]),"locked"===l?t(o).createElement(t(o).Fragment,null,r(c)):"unlocked"===l?t(o).createElement(t(o).Fragment,null,e.children):null}}));define=__define;})(window.define);