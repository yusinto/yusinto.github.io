(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"DQA/":function(t,e,n){t.exports=n.p+"static/icon-512x512-fe7d1fb00f5ab5cc590685767bd2310d.png"},XnEF:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("vOnD"),i=Object(a.b)(["margin:0 auto;max-width:740px;padding:0 20px;"])},k7a8:function(t,e,n){"use strict";n("V+eJ");var a={ellipse:"…",chars:[" ","-"],max:140,truncate:!0};t.exports=function(t,e,n){if("string"!=typeof t||0===t.length)return"";if(0===e)return"";for(var i in n=n||{},a)null!==n[i]&&void 0!==n[i]||(n[i]=a[i]);return n.max=e||n.max,function(t,e,n,a,i){if(t.length<e)return t;for(var r=0,o="",l=Math.floor(e/2),d="middle"===i?l:e,c=0,u=t.length;c<u;c++)if(o=t.charAt(c),-1!==a.indexOf(o)&&"middle"!==i&&(r=c),!(c<d))return 0===r?i?t.substring(0,d-1)+n+("middle"===i?t.substring(t.length-l,t.length):""):"":t.substring(0,r)+n;return t}(t,n.max,n.ellipse,n.chars,n.truncate)}},pHLD:function(t,e,n){"use strict";n.r(e);n("f3/d"),n("dRSK");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Bl7J"),l=n("Wbzz"),d=r.c.ul.withConfig({displayName:"tagList__List",componentId:"di7ei6-0"})(["list-style-type:none;margin:0;padding:0;letter-spacing:0;font-size:15px;font-weight:400;font-style:normal;"]),c=r.c.li.withConfig({displayName:"tagList__ListItem",componentId:"di7ei6-1"})(["display:inline-block;border:none;color:rgba(0,0,0,.68);background:rgba(0,0,0,.05);border-radius:3px;margin:8px;padding:0 10px;& a{color:black;}& a:hover{opacity:1;}&:hover{background:rgba(0,0,0,0.1);}"]),u=function(t){var e=t.tags;return i.a.createElement(d,null,e.map((function(t){return i.a.createElement(c,{key:t},i.a.createElement(l.Link,{to:"/tags/"+t},t))})))},m=n("XnEF"),p=n("k7a8"),s=n.n(p),g=n("Wwog"),f=n("DQA/"),h=n.n(f),b=Object(g.a)((function(t,e){return s()(t,e)})),x=r.c.div.withConfig({displayName:"authorBio__RootDiv",componentId:"rhx0vu-0"})(["display:grid;grid-template-columns:70px auto;grid-template-rows:100px;grid-column-gap:5px;align-items:center;",""],m.a),v=r.c.div.withConfig({displayName:"authorBio__Bio",componentId:"rhx0vu-1"})(["display:flex;flex-direction:column;justify-content:flex-start;font-size:13px;opacity:0.8;"]),w=r.c.div.withConfig({displayName:"authorBio__ProfilePic",componentId:"rhx0vu-2"})(["height:60px;width:60px;border-radius:50%;background-image:url('","');background-position:center top;background-size:cover;"],h.a),y=r.c.div.withConfig({displayName:"authorBio__Name",componentId:"rhx0vu-3"})(["font-weight:bold;opacity:1;"]),_=r.c.div.withConfig({displayName:"authorBio__Blurb",componentId:"rhx0vu-4"})(["&:after{content:'","';@media(min-width:380px){content:'","';}@media(min-width:503px){content:'","';}}"],(function(t){return t.short}),(function(t){return t.medium}),(function(t){return t.blurb})),E=r.c.div.withConfig({displayName:"authorBio__DateReadMinutes",componentId:"rhx0vu-5"})(["font-size:11.5px;"]),k=r.c.span.withConfig({displayName:"authorBio__MidDot",componentId:"rhx0vu-6"})(["padding:0 7px;vertical-align:middle;"]),I=function(t){var e=t.datePosted,n=t.timeToRead,a=t.blurb,r=b(a,60),o=b(a,80);return i.a.createElement(x,null,i.a.createElement(w,null),i.a.createElement(v,null,i.a.createElement(y,null,"Yusinto Ngadiman"),i.a.createElement(_,{blurb:a,short:r,medium:o}),i.a.createElement(E,null,e,i.a.createElement(k,null,"·"),n," min read")))};n.d(e,"postTemplateQuery",(function(){return T}));var N=r.c.h1.withConfig({displayName:"postTemplate__Title",componentId:"k5dusi-0"})(["margin-top:20px;margin-bottom:30px;"]),C=r.c.div.withConfig({displayName:"postTemplate__Content",componentId:"k5dusi-1"})(["",""],m.a),B=r.c.img.withConfig({displayName:"postTemplate__Hero",componentId:"k5dusi-2"})(["width:100%;max-height:300px;object-fit:cover;"]),T=(e.default=function(t){var e=t.data,n=e.markdownRemark,a=e.site.siteMetadata.blurb;if(n){var r=n.frontmatter,l=r.title,d=r.date,c=r.tags,m=r.files,p=n.html,s=n.timeToRead,g=m&&m.find((function(t){return"hero"===t.name}));return i.a.createElement(o.a,null,i.a.createElement(I,{blurb:a,datePosted:d,timeToRead:s}),i.a.createElement(C,null,i.a.createElement(N,null,l)),g?i.a.createElement(B,{alt:"hero",src:g.publicURL}):null,i.a.createElement(C,{dangerouslySetInnerHTML:{__html:p}}),i.a.createElement(C,null,i.a.createElement(u,{tags:c})))}return"markdown is null!"},"2505481639")}}]);
//# sourceMappingURL=component---src-pages-post-template-js-b087d01989cd51ebb5a6.js.map