_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"6mjY":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/building",function(){return t("8efJ")}])},"8efJ":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var r=t("nKUr");t("q1tI"),t("YFqc");function o(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container mx-auto px-0 h-full",children:Object(r.jsx)("div",{className:"flex content-center items-center justify-center h-full",children:Object(r.jsx)("img",{alt:"",src:"img/taxan/enconstruction.png"})})})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var y=c.Children.only(v),_=y&&"object"===typeof y&&y.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),E=r(w,2),j=E[0],L=E[1],M=c.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);(0,c.useEffect)((function(){var e=L&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,L,g,n,t]);var x={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,m,b,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof g?g:t&&t.locale,I=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);x.href=I||(0,a.addBasePath)((0,a.addLocale)(p,N,t&&t.defaultLocale))}return c.default.cloneElement(y,x)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["6mjY",0,2,1]]]);