(function(e){function t(t){for(var s,n,c=t[0],o=t[1],d=t[2],f=0,p=[];f<c.length;f++)n=c[f],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="http://wiki.verticalskyline.com/wp-content/plugins/vue-plugin/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id="4678"},5093:function(e,t,a){"use strict";a("fb4e")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("expertinfo")],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("body",{attrs:{id:"top"}},[a("header",{staticClass:"d-print-none"},[a("div",{staticClass:"container text-center text-lg-left"},[a("div",{staticClass:"py-3 clearfix"},[a("div",{staticClass:"site-nav"},[a("nav",{attrs:{role:"navigation"}},[a("ul",{staticClass:"nav justify-content-center"},[a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:e.expert.personalInfo.twitter,title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"}),a("span",{staticClass:"menu-title sr-only"},[e._v("Twitter")])])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:e.expert.personalInfo.facebook,title:"Facebook"}},[a("i",{staticClass:"fab fa-facebook"}),a("span",{staticClass:"menu-title sr-only"},[e._v("Facebook")])])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:e.expert.personalInfo.linkedIn,title:"Instagram"}},[a("i",{staticClass:"fab fa-instagram"}),a("span",{staticClass:"menu-title sr-only"},[e._v("Instagram")])])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:e.expert.personalInfo.website,title:"linkedIn"}},[a("i",{staticClass:"fab fa-linkedin-in"}),a("span",{staticClass:"menu-title sr-only"},[e._v("linkedIn")])])])])])])])])]),a("div",{staticClass:"page-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"cover shadow-lg bg-white"},[a("div",{staticClass:"cover-bg p-3 p-lg-4 text-white"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-5"},[a("div",{staticClass:"avatar hover-effect bg-white shadow-sm p-1"},[a("img",{attrs:{src:e.expert.personalInfo.personalPhoto,width:"200",height:"200"}})])]),a("div",{staticClass:"col-lg-8 col-md-7 text-center text-md-start"},[a("h2",{staticClass:"h1 mt-2",attrs:{"data-aos":"fade-left","data-aos-delay":"0"}},[e._v(" "+e._s(e.expert.personalInfo.fullName)+" ")]),e.expert.about?[a("p",{attrs:{"data-aos":"fade-left","data-aos-delay":"100"}},[e._v(" "+e._s(e.expert.about.currentTitle)+" ")]),a("p",{attrs:{"data-aos":"fade-left","data-aos-delay":"100"}},[e._v(" "+e._s(e.expert.about.summary)+" ")])]:e._e(),e._m(0)],2)])]),a("div",{staticClass:"about-section pt-4 px-3 px-lg-4 mt-1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h2",{staticClass:"h3 mb-3"},[e._v("About Me")]),e.expert.personalInfo.fullName?a("h3",[e._v(" "+e._s(e.expert.personalInfo.fullName)+" | "),e.expert.personalInfo.country&&0==e.expert.locale?a("span",{staticClass:"pb-1"},[e._v(e._s(e.expert.personalInfo.country.nameAr))]):e._e(),e.expert.personalInfo.country&&1==e.expert.locale?a("span",{staticClass:"pb-1"},[e._v(e._s(e.expert.personalInfo.country.nameEn))]):e._e()]):e._e(),e.expert.personalInfo.summary?a("p",[e._v(" "+e._s(e.expert.personalInfo.summary)+" ")]):e._e()]),a("div",{staticClass:"col-md-5 offset-md-1"},[a("div",{staticClass:"row mt-2"},[e.expert.personalInfo.dateOfBirth?a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-sm-4"},[e.expert.personalInfo.dateOfBirth?a("div",{staticClass:"pb-1"},[e._v("Date Of Birth:")]):e._e()]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"pb-1 text-secondary"},[e._v(" "+e._s(e._f("formatDateM")(e.expert.personalInfo.dateOfBirth))+" ")])])]):e._e(),e.expert.personalInfo.email?a("div",{staticClass:"row mt-2"},[e._m(1),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"pb-1 text-secondary"},[e._v(" "+e._s(e.expert.personalInfo.email)+" ")])])]):e._e(),e.expert.personalInfo.phone?a("div",{staticClass:"row mt-2"},[e._m(2),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"pb-1 text-secondary"},[e._v(" "+e._s(e.expert.personalInfo.phone)+" ")])])]):e._e(),e.expert.personalInfo.country.nameEn?a("div",{staticClass:"row mt-2"},[a("div",{staticClass:"col-sm-4"},[e.expert.personalInfo.country&&0==e.expert.locale?a("div",{staticClass:"pb-1"},[e._v(e._s(e.expert.personalInfo.country.nameAr))]):e._e(),e.expert.personalInfo.country&&1==e.expert.locale?a("div",{staticClass:"pb-1"},[e._v(e._s(e.expert.personalInfo.country.nameEn))]):e._e()]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"pb-1 text-secondary"},[e._v(" "+e._s(e.expert.personalInfo.country)+" "+e._s(e.expert.personalInfo.country.nameEn)+" ")])])]):e._e()])])])]),e.expert.experiences?a("hr"):e._e(),a("div",{staticClass:"work-experience-section px-3 px-lg-4"},[e.expert.experiences?a("h2",{staticClass:"h3 mb-4"},[e._v("Work Experience")]):e._e(),a("div",{staticClass:"timeline"},e._l(e.expert.experiences,(function(t){return a("div",{key:t.id,staticClass:"timeline-card timeline-card-primary card shadow-sm"},[a("div",{staticClass:"card-body"},[t.jobTitle?a("div",{staticClass:"h5 mb-1"},[e._v(" "+e._s(t.jobTitle)+" "),t.countryId?a("span",{staticClass:"text-muted h6"},[e._v("at "+e._s(t.country.nameEn))]):e._e()]):e._e(),t.jobTitle?a("div",{staticClass:"text-muted text-small mb-2"},[e._v(" May, 2015 - Present ")]):e._e(),t.description?a("div",[e._v(" "+e._s(t.description)+" ")]):e._e()])])})),0)]),e.expert.projects?a("hr"):e._e(),a("div",{staticClass:"page-break"}),e.expert.projects?a("div",{staticClass:"education-section px-3 px-lg-4 pb-4"},[a("h2",{staticClass:"h3 mb-4"},[e._v("Projects")]),a("div",{staticClass:"timeline"},e._l(e.expert.projects,(function(t){return a("div",{key:t.id,staticClass:"timeline-card timeline-card-success card shadow-sm"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"h5 mb-1"},[a("a",{attrs:{target:"_blank",href:t.url}},[e._v(e._s(t.name))])]),a("div",{staticClass:"text-muted text-small mb-2"},[e._v(" "+e._s(e._f("formatDate")(t.startDate))+" - "+e._s(e._f("formatDate")(t.endDate))+" ")]),a("div",[e._v(" "+e._s(t.description)+" ")])])])})),0)]):e._e(),e.expert.publishedWorks?a("hr",{staticClass:"d-print-none"}):e._e(),e.expert.publishedWorks?a("div",{staticClass:"work-experience-section px-3 px-lg-4"},[a("h2",{staticClass:"h3 mb-4"},[e._v("Published Work")]),a("div",{staticClass:"timeline"},e._l(e.expert.publishedWorks,(function(t){return a("div",{key:t.id,staticClass:"timeline-card timeline-card-primary card shadow-sm"},[a("div",{staticClass:"card-body"},[t.title?a("div",{staticClass:"h3 mb-1"},[a("a",{attrs:{href:t.url}},[e._v(e._s(t.title))]),a("span",{staticClass:"text-muted h6"},[e._v("is "+e._s(t.publishedWorkType.nameEn))])]):e._e(),a("div",{staticClass:"text-muted text-small mb-2"},[e._v(" "+e._s(e._f("formatDateM")(t.publishDate))+" ")]),t.description?a("div",[e._v(" "+e._s(t.description)+" ")]):e._e()])])})),0)]):e._e(),e.expert.memberships?a("hr",{staticClass:"d-print-none"}):e._e(),a("div",{staticClass:"work-experience-section px-3 px-lg-4"},[e.expert.memberships?a("h2",{staticClass:"h3 mb-4"},[e._v("Memberships")]):e._e(),a("div",{staticClass:"timeline"},e._l(e.expert.memberships,(function(t){return a("div",{key:t.id,staticClass:"timeline-card timeline-card-primary card shadow-sm"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"h3 mb-1"},[e._v(" "+e._s(t.title)+" "),a("span",{staticClass:"text-muted h6"},[e._v("in "+e._s(t.orgName))])]),a("div",[e._v(" "+e._s(t.description)+" ")])])])})),0)])])])])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-print-none",attrs:{"data-aos":"fade-left","data-aos-delay":"200"}},[a("a",{staticClass:"btn btn-light text-dark shadow-sm mt-1 me-1",attrs:{href:"right-resume.pdf",target:"_blank"}},[e._v("Download CV")]),a("a",{staticClass:"btn btn-success shadow-sm mt-1",attrs:{href:"#contact"}},[e._v("Hire Me")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"pb-1"},[e._v("Email")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"pb-1"},[e._v("Phone")])])}],o=(a("ac1f"),a("466d"),a("bc3a")),d=a.n(o),l={data:function(){return{expert:{personalInfo:{country:{}}},experts:{},info:{}}},mounted:{getrequest:function(){var e=this;return this.experts.filter((function(t){return t.requestId.match(e.info)}))}},created:function(){var e=this,t=window.location.pathname;localStorage.setItem("url",t);var a=116,s=localStorage.url;"/en/"==s?d.a.get("https://qalatdb.simulalab.org/api/qalat-cvs/0").then((function(t){200!=t.status?console.log(t.status):e.experts=t.data})):d.a.get("https://qalatdb.simulalab.org/api/qalat-cvs/1").then((function(t){200!=t.status?console.log(t.status):e.experts=t.data})),a&&d.a.get("https://qalatdb.simulalab.org/api/cv-by-id/"+a).then((function(t){200!=t.status?console.log(t.status):e.expert=t.data}))}},f=l,p=(a("5093"),a("2877")),b=Object(p["a"])(f,n,c,!1,null,"16d0e82c",null),m=b.exports,v={components:{expertinfo:m},name:"App"},u=v,h=Object(p["a"])(u,r,i,!1,null,null,null),j=h.exports,x=a("5f5b"),_=a("b1e0"),g=a("c1df"),y=a.n(g),C=a("0759"),k=a("7386");s["default"].config.productionTip=!1,s["default"].filter("formatDate",(function(e){if(e)return y()(String(e)).format("YYYY")})),s["default"].filter("formatDateM",(function(e){if(e)return y()(String(e)).format("MM/YYYY")})),s["default"].use(x["a"]),s["default"].use(_["a"]),s["default"].component("BIcon",C["a"]),s["default"].component("BIconArrowUp",k["eb"]),s["default"].component("BIconArrowDown",k["x"]),new s["default"]({render:function(e){return e(j)}}).$mount("#app")},c1db:function(e,t,a){var s=a("24fb");t=s(!1),t.push([e.i,'.nav[data-v-16d0e82c]{display:flex;padding-left:0;margin-bottom:0;list-style:none}.timeline[data-v-16d0e82c]{border-left:2px solid #e6e9ed;padding:1rem 0}.timeline-card[data-v-16d0e82c]{position:relative;margin-left:31px;border-left:2px solid;margin-bottom:2rem}.timeline-card[data-v-16d0e82c]:last-child{margin-bottom:1rem}.timeline-card[data-v-16d0e82c]:before{background-color:#fff;border-radius:10px;width:12px;height:12px;top:20px;left:-41px;border:2px solid;z-index:2}.timeline-card[data-v-16d0e82c]:after,.timeline-card[data-v-16d0e82c]:before{content:"";display:inline-block;position:absolute}.timeline-card[data-v-16d0e82c]:after{background-color:currentColor;width:29px;height:2px;top:25px;left:-29px;z-index:1}.timeline-card-primary[data-v-16d0e82c]{border-left-color:#4a89dc}.timeline-card-primary[data-v-16d0e82c]:before{border-color:#4a89dc}.timeline-card-primary[data-v-16d0e82c]:after{background-color:#4a89dc}.timeline-card-success[data-v-16d0e82c]{border-left-color:#37bc9b}.timeline-card-success[data-v-16d0e82c]:before{border-color:#37bc9b}.timeline-card-success[data-v-16d0e82c]:after{background-color:#37bc9b}html[data-v-16d0e82c]{scroll-behavior:smooth}.nav-link[data-v-16d0e82c],.site-title[data-v-16d0e82c]{font-size:1.25rem;line-height:2.5rem}.nav-link[data-v-16d0e82c]{padding:0;color:rgba(0,0,0,.5)}.active .nav-link[data-v-16d0e82c],.nav-link[data-v-16d0e82c]:focus,.nav-link[data-v-16d0e82c]:hover{color:rgba(0,0,0,.8)}.nav-item+.nav-item[data-v-16d0e82c]{margin-left:1rem}.cover[data-v-16d0e82c]{border-radius:10px}.avatar[data-v-16d0e82c]{max-width:216px;max-height:216px;margin-top:20px;text-align:center;margin-left:auto;margin-right:auto}.avatar img[data-v-16d0e82c]{filter:grayscale(100%)}footer a[data-v-16d0e82c]:not(.nav-link){color:inherit;border-bottom:1px dashed;text-decoration:none;cursor:pointer}@media (min-width:48em){.site-title[data-v-16d0e82c]{float:left}.site-nav[data-v-16d0e82c]{float:right}.avatar[data-v-16d0e82c]{margin-left:0}}@media print{body[data-v-16d0e82c]{background-color:#fff}.container[data-v-16d0e82c]{width:auto;max-width:100%;padding:0}.cover[data-v-16d0e82c],.cover-bg[data-v-16d0e82c]{border-radius:0}.cover.shadow-lg[data-v-16d0e82c]{box-shadow:none!important}.cover-bg[data-v-16d0e82c]{padding:5rem!important;padding-bottom:10px!important}.avatar[data-v-16d0e82c]{margin-top:-10px}.about-section[data-v-16d0e82c]{padding:6.5rem 5rem 2rem!important}.contant-section[data-v-16d0e82c],.education-section[data-v-16d0e82c],.skills-section[data-v-16d0e82c],.work-experience-section[data-v-16d0e82c]{padding:1.5rem 5rem 2rem!important}.page-break[data-v-16d0e82c]{padding-top:5rem;page-break-before:always}}.card-body[data-v-16d0e82c]{margin-left:20px}',""]),e.exports=t},fb4e:function(e,t,a){var s=a("c1db");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("499e").default;r("dff29f38",s,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.js.map