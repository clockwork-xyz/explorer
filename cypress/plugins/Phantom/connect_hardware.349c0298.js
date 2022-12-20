(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequirea886;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea886=r);var o=r("aZikt"),l=r("ihAua"),i=r("hHMPk"),c=r("ehJ6P"),d=r("d3pmY"),s=r("lxqKj"),u=r("gDkTC"),p=r("lwple");r("5dL5p");var m=r("ltHDB"),g=r("eHClh"),h=r("7m4nF"),y=r("6oEu9"),f=r("f8jMK"),v=r("cFuyE"),S=r("jKFz7"),x=r("iXlMH"),E=r("8f92J"),w=r("g9tZv"),T=r("41J1p"),P=r("2WP7v"),b=r("fGPQl"),H=r("bBAGA"),A=r("jhy6c"),C=r("8xzWM"),k=r("5y3N4"),I=r("awYjP"),F=r("1zKMS"),L=r("ekJeC"),B=r("lFcxH"),O=(o=r("aZikt"),i=r("hHMPk"),f=r("f8jMK"),i=r("hHMPk"),r("elS0S"));const D=i.default(O.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`;O=r("elS0S"),I=r("awYjP");var M=r("691SI");const j=i.default(M.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
  position: absolute;
`,$=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,R=i.default.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:t,totalSteps:n,currentStepIndex:a,isHidden:r,showBackButtonOnFirstStep:l})=>{const i=l||0!==a;return e(o).createElement(j,{opacity:r?0:1},i?e(o).createElement(D,{right:1,onClick:t},e(o).createElement(I.LeftChevronIcon,null)):e(o).createElement(R,null),e(o).createElement($,null,f.range(n).map((t=>{const n=t<=a?"#4E44CE":"#333";return e(o).createElement(O.Circle,{key:t,diameter:12,color:n})}))),e(o).createElement(R,null))};var _=r("45nY7"),N=(o=r("aZikt"),i=r("hHMPk"),r("i5Y99")),K=(I=r("awYjP"),r("3VRqy"));const V=i.default(N.ListboxInput)`
  position: relative;
  width: 100%;
`,Y=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,U=({value:t,placeholderText:n,options:a,onChange:r})=>{var l;const i=a.map((e=>e.value)),c=0===a.length,d=null===(l=a.find((e=>e.value===t)))||void 0===l?void 0:l.displayValue;return e(o).createElement(V,{value:null!=t?t:"__none",onChange:e=>r(e,i.indexOf(e)),tabIndex:0,disabled:c},(()=>e(o).createElement(e(o).Fragment,null,e(o).createElement(K.SelectButton,{arrow:e(o).createElement(Y,null,e(o).createElement(I.DownChevronIcon,null))},void 0===t?n:d),!c&&e(o).createElement(K.SelectPopover,null,e(o).createElement(K.SelectList,null,a.map((t=>{var n;return e(o).createElement(K.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))};var q=r("fbyUi"),z=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))};E.telemetry.init();const J=i.default.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,Z=i.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,G=i.default(B.IconHeader)`
  margin-top: 46px;
`,Q=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,X=()=>{const t=new URLSearchParams(u.useLocation().search).get("permission");return e(o).createElement(e(o).Fragment,null,e(o).createElement(P.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(o).createElement(F.FullPageHeader,null),e(o).createElement(b.HardwareWalletProvider,null,e(o).createElement(k.OnboardingAndConnectHardwareErrorBoundary,null,t?e(o).createElement(J,null,e(o).createElement(ne,{onFinish:()=>window.close(),pushStep:y.NOOP,popStep:y.NOOP})):e(o).createElement(ee,null))))},ee=()=>{const[t,n]=o.useState([]),a=s.usePreviousDistinct(t,((e,t)=>(null==e?void 0:e.length)===t.length)),r=f.getLast(t),l=e=>{n((t=>c.default(t,(t=>{t.push(e)}))))},i=()=>{n((e=>c.default(e,(e=>{e.pop()}))))};o.useEffect((()=>{n([e(o).createElement(ne,{pushStep:l,popStep:i})])}),[]);const u=t.length,p=t.length>(null!=a?a:[]).length,m=0===(null==a?void 0:a.length),g={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(o).createElement(J,null,e(o).createElement(W,{totalSteps:3,onBackClick:i,currentStepIndex:u-1}),e(o).createElement(d.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(d.motion.div,Object.assign({style:{height:"100%"},key:`${t.length}_${null==a?void 0:a.length}`},g),r)))},te=i.default.div`
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;
`,ne=t=>{const{t:n}=m.useTranslation(),{ledgerTransportState:a,transport:r,getPermission:l}=b.useLedgerTransport();let i,c,d=L.ConfirmationIconType.Default,s=e(o).createElement(_.SpinnerIcon,null),u=n("commandContinue"),p=!1,g=y.NOOP;switch(a){case b.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),p=!0;break;case b.LedgerTransportState.NeedsPermission:s=e(o).createElement(I.AddIcon,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),g=l;break;case b.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case b.LedgerTransportState.WaitingForApplication:s=e(o).createElement(I.SolanaIcon,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case b.LedgerTransportState.Connected:d=L.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),g=()=>{if(!r)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(o).createElement(re,Object.assign({transport:r},t)))};break;case b.LedgerTransportState.Failed:d=L.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),u=n("commandRetry"),g=l}return e(o).createElement(te,null,e(o).createElement(G,{icon:e(o).createElement(L.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:i,secondaryText:c,headerStyle:B.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:g,theme:"primary",disabled:p},u))},ae=[h.DerivationPathType.Bip44RootSolana,h.DerivationPathType.Bip44Solana,h.DerivationPathType.Bip44ChangeSolana],re=t=>{var n;const{t:a}=m.useTranslation(),[r,l]=o.useState(0),[i,d]=o.useState(void 0),[s,u]=o.useState([]),[P,b]=o.useState({}),[A,k]=o.useState(!1),F=null===(n=H.useFetchConnection())||void 0===n?void 0:n.data,L=null==F?void 0:F.connection,[O,D,M]=w.useStorage(p.StorageKeys.AccountMetas,[]),j=o.useMemo((()=>{const e=O.filter((e=>e.type===h.AccountType.Ledger)).map((e=>e.publicKey.toString()));return s.filter((t=>!e.includes(t.toString())))}),[s,O]),$=void 0!==r?ae[r]:void 0,R=o.useMemo((()=>$?$===h.DerivationPathType.Bip44RootSolana?[S.solanaDerivationPath(0,0,h.DerivationPathType.Bip44RootSolana)]:f.range(10).map((e=>S.solanaDerivationPath(e,0,$))):[]),[$]),W=ae.map((e=>({value:e,displayValue:y.DERIVATION_PATH_TYPE_TO_VALUE[e]})));o.useEffect((()=>{z(void 0,void 0,void 0,(function*(){if(!D&&L){k(!0);try{const e=[];for(const n of R){const a=yield S.getPublicKeyAsync(t.transport,n);e.push(a)}u(e);const n=yield x.getMultipleAccountsAsync(L,e,"finalized");b(n)}catch(e){E.telemetry.captureError(e)}finally{k(!1)}}}))}),[t.transport,D,R,L]),o.useEffect((()=>{u([])}),[R]),o.useEffect((()=>{1===j.length&&d(0)}),[j]);const _=j.map((t=>{var n;const a=t.toString(),r=null===(n=P[t.toString()])||void 0===n?void 0:n.lamports,l=void 0!==r?v.formatTokenAmount(v.lamportsToSolana(r)):"0";return{displayValue:e(o).createElement(Q,null,e(o).createElement("span",null,v.formatHashMedium(a,7)),e(o).createElement("label",null,l," SOL")),value:a}})),N=void 0===r||void 0===i,K=void 0!==i?j[i]:void 0;return e(o).createElement(te,null,e(o).createElement(G,{icon:e(o).createElement(I.AddIcon,null),primaryText:a("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:B.IconHeaderStyle.Large}),e(o).createElement(Z,null,e(o).createElement(U,{placeholderText:a("connectHardwareSelectAddressDerivationPath"),options:W,value:$,onChange:(e,t)=>{l(t)}}),e(o).createElement(U,{placeholderText:A?a("connectHardwareSelectAddressSearching"):0===j.length?a("connectHardwareSelectAddressAllAddressesImported"):a("connectHardwareSelectAddressWalletAddress"),options:_,value:null==K?void 0:K.toString(),onChange:(e,t)=>{d(t)}}),e(o).createElement(C.Button,{onClick:()=>{if(void 0===i)return;const n=j[i],a=s.map((e=>e.toString())).indexOf(n.toString());var r,l;r=n.toString(),l=a,z(void 0,void 0,void 0,(function*(){if(D)return;const e=c.default(O,(e=>{const t=e.filter((e=>e.type===h.AccountType.Ledger)).length+1,n=R[l].toString("hex");e.push({type:h.AccountType.Ledger,name:`Ledger ${t}`,publicKey:r,derivationPath:n})})),t=e.length-1;T.analytics.capture("connectHardwareAddAccount"),M(e);const n=new q.LocalStorage;yield g.setSelectedAccountIndex(n,t)})),t.pushStep(e(o).createElement(oe,Object.assign({},t)))},theme:"primary",disabled:N},a("connectHardwareAddAccountButton"))))},oe=()=>{const{t:t}=m.useTranslation();return e(o).createElement(te,null,e(o).createElement(G,{icon:e(o).createElement(L.ConfirmationIcon,{defaultIcon:e(o).createElement("div",null),type:L.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:B.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:()=>{T.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},t("pastParticipleDone")))};l.render(e(o).createElement(u.BrowserRouter,null,e(o).createElement(A.QueryProvider,null,e(o).createElement(X,null))),document.getElementById("root")),T.analytics.capture("connectHardwareOpen");define=__define;})(window.define);