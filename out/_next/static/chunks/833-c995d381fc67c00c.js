(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[833],{5861:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(3366),o=r(7462),i=r(7294),a=r(6010),l=r(9707),s=r(4780),u=r(948),c=r(1657),f=r(8216),d=r(1588),p=r(4867);function h(e){return(0,p.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);let y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,f.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,h,a)},v=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,f.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},_={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=e=>_[e]||e,x=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),i=k(r.color),s=(0,l.Z)((0,o.Z)({},r,{color:i})),{align:u="inherit",className:f,component:d,gutterBottom:p=!1,noWrap:h=!1,paragraph:_=!1,variant:x="body1",variantMapping:P=b}=s,C=(0,n.Z)(s,y),O=(0,o.Z)({},s,{align:u,color:i,className:f,component:d,gutterBottom:p,noWrap:h,paragraph:_,variant:x,variantMapping:P}),w=d||(_?"p":P[x]||b[x])||"span",E=g(O);return(0,m.jsx)(v,(0,o.Z)({as:w,ref:t,ownerState:O,className:(0,a.Z)(E.root,f)},C))});var P=x},948:function(e,t,r){"use strict";r.d(t,{FO:function(){return a}});var n=r(182),o=r(247),i=r(606);let a=e=>(0,n.x9)(e)&&"classes"!==e,l=(0,n.ZP)({themeId:i.Z,defaultTheme:o.Z,rootShouldForwardProp:a});t.ZP=l},8216:function(e,t,r){"use strict";var n=r(4142);t.Z=n.Z},5920:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),o=function(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{"function"==typeof e?e(t):e&&(e.current=t)})},e)}},8791:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return f}});var o=r(7294);let i=!0,a=!1,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function u(){i=!1}function c(){"hidden"===this.visibilityState&&a&&(i=!0)}var f=function(){let e=o.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",c,!0)}},[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!l[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(n),n=window.setTimeout(()=>{a=!1},100),t.current=!1,!0)},ref:e}}},9731:function(e,t,r){"use strict";r.d(t,{ZP:function(){return g},Co:function(){return v}});var n=r(7462),o=r(7294),i=r(5042),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,i.Z)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),s=r(5260),u=r(444),c=r(8137),f=r(7278),d=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?l:d},h=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},m=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,u.hC)(t,r,n),(0,f.L)(function(){return(0,u.My)(t,r,n)}),null},y=(function e(t,r){var i,a,l=t.__emotion_real===t,f=l&&t.__emotion_base||t;void 0!==r&&(i=r.label,a=r.target);var d=h(t,r,l),y=d||p(f),g=!y("as");return function(){var v=arguments,b=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&b.push("label:"+i+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{b.push(v[0][0]);for(var _=v.length,k=1;k<_;k++)b.push(v[k],v[0][k])}var x=(0,s.w)(function(e,t,r){var n=g&&e.as||f,i="",l=[],h=e;if(null==e.theme){for(var v in h={},e)h[v]=e[v];h.theme=o.useContext(s.T)}"string"==typeof e.className?i=(0,u.fp)(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var _=(0,c.O)(b.concat(l),t.registered,h);i+=t.key+"-"+_.name,void 0!==a&&(i+=" "+a);var k=g&&void 0===d?p(n):y,x={};for(var P in e)(!g||"as"!==P)&&k(P)&&(x[P]=e[P]);return x.className=i,x.ref=r,o.createElement(o.Fragment,null,o.createElement(m,{cache:t,serialized:_,isStringTag:"string"==typeof n}),o.createElement(n,x))});return x.displayName=void 0!==i?i:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=f,x.__emotion_styles=b,x.__emotion_forwardProp=d,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,o){return e(t,(0,n.Z)({},r,o,{shouldForwardProp:h(x,o,!0)})).apply(void 0,b)},x}}).bind();/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function g(e,t){let r=y(e,t);return r}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){y[e]=y(e)});let v=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},182:function(e,t,r){"use strict";r.d(t,{ZP:function(){return b},x9:function(){return y}});var n=r(3366),o=r(7462),i=r(9731),a=r(6500),l=r(4142);let s=["variant"];function u(e){return 0===e.length}function c(e){let{variant:t}=e,r=(0,n.Z)(e,s),o=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?o+=u(o)?e[t]:(0,l.Z)(e[t]):o+=`${u(o)?t:(0,l.Z)(t)}${(0,l.Z)(e[t].toString())}`}),o}var f=r(6523);let d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],p=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,h=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);let n={};return r.forEach(e=>{let t=c(e.props);n[t]=e.style}),n},m=(e,t,r,n)=>{var o,i;let{ownerState:a={}}=e,l=[],s=null==r?void 0:null==(o=r.components)?void 0:null==(i=o[n])?void 0:i.variants;return s&&s.forEach(r=>{let n=!0;Object.keys(r.props).forEach(t=>{a[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)}),n&&l.push(t[c(r.props)])}),l};function y(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let g=(0,a.Z)();function v({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function b(e={}){let{themeId:t,defaultTheme:r=g,rootShouldForwardProp:a=y,slotShouldForwardProp:l=y}=e,s=e=>(0,f.Z)((0,o.Z)({},e,{theme:v((0,o.Z)({},e,{defaultTheme:r,themeId:t}))}));return s.__mui_systemSx=!0,(e,u={})=>{let c;(0,i.Co)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:f,slot:g,skipVariantsResolver:b,skipSx:_,overridesResolver:k}=u,x=(0,n.Z)(u,d),P=void 0!==b?b:g&&"Root"!==g||!1,C=_||!1,O=y;"Root"===g?O=a:g?O=l:"string"==typeof e&&e.charCodeAt(0)>96&&(O=void 0);let w=(0,i.ZP)(e,(0,o.Z)({shouldForwardProp:O,label:c},x)),E=(n,...i)=>{let a=i?i.map(e=>"function"==typeof e&&e.__emotion_real!==e?n=>e((0,o.Z)({},n,{theme:v((0,o.Z)({},n,{defaultTheme:r,themeId:t}))})):e):[],l=n;f&&k&&a.push(e=>{let n=v((0,o.Z)({},e,{defaultTheme:r,themeId:t})),i=p(f,n);if(i){let t={};return Object.entries(i).forEach(([r,i])=>{t[r]="function"==typeof i?i((0,o.Z)({},e,{theme:n})):i}),k(e,t)}return null}),f&&!P&&a.push(e=>{let n=v((0,o.Z)({},e,{defaultTheme:r,themeId:t}));return m(e,h(f,n),n,f)}),C||a.push(s);let u=a.length-i.length;if(Array.isArray(n)&&u>0){let e=Array(u).fill("");(l=[...n,...e]).raw=[...n.raw,...e]}else"function"==typeof n&&n.__emotion_real!==n&&(l=e=>n((0,o.Z)({},e,{theme:v((0,o.Z)({},e,{defaultTheme:r,themeId:t}))})));let c=w(l,...a);return e.muiName&&(c.muiName=e.muiName),c};return w.withConfig&&(E.withConfig=w.withConfig),E}}},9707:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7462),o=r(3366),i=r(9766),a=r(4920);let l=["sx"],s=e=>{var t,r;let n={systemProps:{},otherProps:{}},o=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:a.Z;return Object.keys(e).forEach(t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};function u(e){let t;let{sx:r}=e,a=(0,o.Z)(e,l),{systemProps:u,otherProps:c}=s(a);return t=Array.isArray(r)?[u,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,i.P)(t)?(0,n.Z)({},u,t):u}:(0,n.Z)({},u,r),(0,n.Z)({},c,{sx:t})}},7078:function(e,t){"use strict";let r;let n=e=>e,o=(r=n,{configure(e){r=e},generate:e=>r(e),reset(){r=n}});t.Z=o},4780:function(e,t,r){"use strict";function n(e,t,r){let n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((e,n)=>{if(n){let o=t(n);""!==o&&e.push(o),r&&r[n]&&e.push(r[n])}return e},[]).join(" ")}),n}r.d(t,{Z:function(){return n}})},4867:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7078);let o={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function i(e,t,r="Mui"){let i=o[t];return i?`${r}-${i}`:`${n.Z.generate(e)}-${t}`}},1588:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4867);function o(e,t,r="Mui"){let o={};return t.forEach(t=>{o[t]=(0,n.Z)(e,t,r)}),o}},6010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",a="restore",l="server-patch",s="prefetch",u="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(4532),a=r(3353),l=r(1410),s=r(9064),u=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),h=r(4266),m=r(3991),y=new Set;function g(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(y.has(i))return;y.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:y,children:b,prefetch:_=null,passHref:k,replace:x,shallow:P,scroll:C,locale:O,onClick:w,onMouseEnter:E,onTouchStart:T,legacyBehavior:Z=!1,...A}=e;r=b,Z&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let S=!1!==_,R=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,M=o.default.useContext(c.RouterContext),j=o.default.useContext(f.AppRouterContext),L=null!=M?M:j,I=!M,{href:N,as:U}=o.default.useMemo(()=>{if(!M){let e=v(l);return{href:e,as:y?v(y):e}}let[e,t]=(0,i.resolveHref)(M,l,!0);return{href:e,as:y?(0,i.resolveHref)(M,y):t||e}},[M,l,y]),F=o.default.useRef(N),H=o.default.useRef(U);Z&&(n=o.default.Children.only(r));let B=Z?n&&"object"==typeof n&&n.ref:t,[z,D,q]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(H.current!==U||F.current!==N)&&(q(),H.current=U,F.current=N),z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[U,B,N,q,z]);o.default.useEffect(()=>{L&&D&&S&&g(L,N,U,{locale:O},{kind:R},I)},[U,N,D,O,S,null==M?void 0:M.locale,L,I,R]);let K={ref:V,onClick(e){Z||"function"!=typeof w||w(e),Z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,i,l,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:u,scroll:s}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,L,N,U,x,P,C,O,I,S)},onMouseEnter(e){Z||"function"!=typeof E||E(e),Z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(S||!I)&&g(L,N,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:R},I)},onTouchStart(e){Z||"function"!=typeof T||T(e),Z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(S||!I)&&g(L,N,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:R},I)}};if((0,s.isAbsoluteUrl)(U))K.href=U;else if(!Z||k||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);K.href=t||(0,h.addBasePath)((0,u.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return Z?o.default.cloneElement(n,K):o.default.createElement("a",{...A,...K},r)}),_=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,a=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5569)}}]);