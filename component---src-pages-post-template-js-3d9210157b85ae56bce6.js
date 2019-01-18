(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,n){"use strict";n.r(t);n(175),n(76);var a=n(0),i=n.n(a),o=n(160),r=n(174),l=n(36),c=o.c.ul.withConfig({displayName:"tagList__List",componentId:"di7ei6-0"})(["list-style-type:none;margin:0;padding:0;letter-spacing:0;font-size:15px;font-weight:400;font-style:normal;"]),d=o.c.li.withConfig({displayName:"tagList__ListItem",componentId:"di7ei6-1"})(["display:inline-block;border:none;color:rgba(0,0,0,.68);background:rgba(0,0,0,.05);border-radius:3px;margin:8px;padding:0 10px;& a{color:black;}& a:hover{opacity:1;}&:hover{background:rgba(0,0,0,0.1);}"]),m=function(e){var t=e.tags;return i.a.createElement(c,null,t.map(function(e){return i.a.createElement(d,{key:e},i.a.createElement(l.Link,{to:"/tags/"+e},e))}))},s=n(173),p=n(206),u=n.n(p),f=function(e,t){return e.length===t.length&&e.every(function(e,n){return a=e,i=t[n],a===i;var a,i})};var g=function(e,t){var n;void 0===t&&(t=f);var a,i=[],o=!1;return function(){for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return o&&n===this&&t(l,i)?a:(a=e.apply(this,l),o=!0,n=this,i=l,a)}},h=n(179),y=n.n(h),x=g(function(e,t){return u()(e,t)}),w=o.c.div.withConfig({displayName:"authorBio__RootDiv",componentId:"rhx0vu-0"})(["display:grid;grid-template-columns:70px auto;grid-template-rows:100px;grid-column-gap:5px;align-items:center;",""],s.a),v=o.c.div.withConfig({displayName:"authorBio__Bio",componentId:"rhx0vu-1"})(["display:flex;flex-direction:column;justify-content:flex-start;font-size:13px;opacity:0.8;"]),b=o.c.div.withConfig({displayName:"authorBio__ProfilePic",componentId:"rhx0vu-2"})(["height:60px;width:60px;border-radius:50%;background-image:url('","');background-position:center top;background-size:cover;"],y.a),E=o.c.div.withConfig({displayName:"authorBio__Name",componentId:"rhx0vu-3"})(["font-weight:bold;opacity:1;"]),_=o.c.div.withConfig({displayName:"authorBio__Blurb",componentId:"rhx0vu-4"})(["&:after{content:'","';@media(min-width:380px){content:'","';}@media(min-width:503px){content:'","';}}"],function(e){return e.short},function(e){return e.medium},function(e){return e.blurb}),k=o.c.div.withConfig({displayName:"authorBio__DateReadMinutes",componentId:"rhx0vu-5"})(["font-size:11.5px;"]),I=o.c.span.withConfig({displayName:"authorBio__MidDot",componentId:"rhx0vu-6"})(["padding:0 7px;vertical-align:middle;"]),C=function(e){var t=e.datePosted,n=e.timeToRead,a=e.blurb,o=x(a,60),r=x(a,80);return i.a.createElement(w,null,i.a.createElement(b,null),i.a.createElement(v,null,i.a.createElement(E,null,"Yusinto Ngadiman"),i.a.createElement(_,{blurb:a,short:o,medium:r}),i.a.createElement(k,null,t,i.a.createElement(I,null,"·"),n," min read")))};n.d(t,"postTemplateQuery",function(){return R});var N=o.c.h1.withConfig({displayName:"postTemplate__Title",componentId:"k5dusi-0"})(["margin-top:20px;margin-bottom:30px;"]),z=o.c.div.withConfig({displayName:"postTemplate__Content",componentId:"k5dusi-1"})(["",""],s.a),T=o.c.img.withConfig({displayName:"postTemplate__Hero",componentId:"k5dusi-2"})(["width:100%;max-height:300px;object-fit:cover;"]),R=(t.default=function(e){var t=e.data,n=t.markdownRemark,a=t.site.siteMetadata.blurb;if(n){var o=n.frontmatter,l=o.title,c=o.date,d=o.tags,s=o.files,p=n.html,u=n.timeToRead,f=s&&s.find(function(e){return"hero"===e.name});return i.a.createElement(r.a,null,i.a.createElement(C,{blurb:a,datePosted:c,timeToRead:u}),i.a.createElement(z,null,i.a.createElement(N,null,l)),f?i.a.createElement(T,{alt:"hero",src:f.publicURL}):null,i.a.createElement(z,{dangerouslySetInnerHTML:{__html:p}}),i.a.createElement(z,null,i.a.createElement(m,{tags:d})))}return"markdown is null!"},"2505481639")},162:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a),o=n(160).c.span.withConfig({displayName:"svg__StyledSvg",componentId:"lxgmgr-0"})(["padding-top:","px;"],function(e){return e.paddingTop||0});t.default=function(e){var t=e.type,a=e.fill,r=e.width,l=e.paddingTop,c=n(170)("./"+t).default;return i.a.createElement(o,{paddingTop:l},i.a.createElement(c,{fill:a,width:r}))}},163:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a);t.default=function(e){var t=e.width,n=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},i.a.createElement("title",null,"mail"),i.a.createElement("path",{className:"path1",d:"M80.589 270.643c24.986 13.414 371.098 199.373 384 206.285s29.594 10.189 46.387 10.189c16.794 0 33.485-3.277 46.387-10.189s359.014-192.87 384-206.285c25.037-13.466 48.691-65.843 2.765-65.843h-866.253c-45.926 0-22.272 52.378 2.714 65.843zM952.986 383.437c-28.416 14.797-378.214 197.069-395.622 206.182s-29.594 10.189-46.387 10.189-28.979-1.075-46.387-10.189-365.21-191.437-393.626-206.234c-19.968-10.445-19.763 1.792-19.763 11.213s0 373.402 0 373.402c0 21.504 28.979 51.2 51.2 51.2h819.2c22.221 0 51.2-29.696 51.2-51.2 0 0 0-363.93 0-373.35s0.205-21.658-19.814-11.213z"}))}},164:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a);t.default=function(e){var t=e.width,n=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},i.a.createElement("title",null,"github"),i.a.createElement("path",{className:"path1",d:"M674.816 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211s66.56-41.318 66.56-92.211c-0.051-50.79-29.798-92.109-66.56-92.109zM906.547 339.251c7.629-18.688 7.936-124.877-32.512-226.611 0 0-92.723 10.189-233.011 106.496-29.44-8.192-79.258-12.186-128.973-12.186-49.818 0-99.584 3.994-129.024 12.186-140.339-96.307-233.062-106.496-233.062-106.496-40.397 101.734-39.987 207.923-32.461 226.611-47.514 51.61-76.544 113.613-76.544 198.195 0 367.923 305.306 373.811 382.31 373.811 17.51 0 52.122 0.102 88.781 0.102 36.608 0 71.27-0.102 88.678-0.102 77.107 0 382.31-5.888 382.31-373.811 0-84.582-28.979-146.586-76.493-198.195zM513.434 866.048h-2.867c-193.075 0-343.501-22.989-343.501-210.688 0-45.005 15.872-86.682 53.606-121.293 62.822-57.702 169.216-27.187 289.894-27.187 0.512 0 1.024 0 1.485 0 0.512 0 0.922 0 1.382 0 120.678 0 227.123-30.515 289.997 27.187 37.632 34.611 53.504 76.288 53.504 121.293 0 187.699-150.374 210.688-343.501 210.688zM349.235 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211 36.813 0 66.611-41.318 66.611-92.211 0-50.79-29.798-92.109-66.611-92.109z"}))}},165:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a);t.default=function(e){var t=e.width,n=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},i.a.createElement("title",null,"linkedin"),i.a.createElement("path",{className:"path1",d:"M256 153.6c0 54.374-36.352 101.171-102.451 101.171-62.208 0-102.349-44.134-102.349-98.509 0-55.808 38.912-105.062 102.4-105.062s101.171 46.592 102.4 102.4zM51.2 972.8v-665.6h204.8v665.6h-204.8z"}),i.a.createElement("path",{className:"path2",d:"M358.4 534.733c0-79.104-2.611-145.203-5.222-202.291h184.013l9.114 88.218h3.891c25.907-41.523 89.395-102.4 195.686-102.4 129.638 0 226.918 86.784 226.918 273.51v381.030h-204.8v-351.283c0-81.613-31.078-143.872-102.4-143.872-54.374 0-81.613 44.032-95.898 80.333-5.222 13.005-6.502 31.13-6.502 49.306v365.517h-204.8v-438.067z"}))}},166:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a);t.default=function(e){var t=e.width,n=e.fill;return i.a.createElement("svg",{viewBox:"0 0 576 512",fill:n,width:t},i.a.createElement("path",{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}))}},167:function(e,t,n){"use strict";n.r(t);n(161);var a=n(0),i=n.n(a);t.default=function(e){var t=e.width,n=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},i.a.createElement("title",null,"twitter"),i.a.createElement("path",{className:"path1",d:"M886.579 319.795c0.41 8.294 0.563 16.691 0.563 24.986 0 255.488-194.406 549.99-549.888 549.99-109.21 0-210.739-32-296.294-86.886 15.155 1.792 30.515 2.714 46.080 2.714 90.624 0 173.926-30.925 240.026-82.688-84.531-1.587-155.955-57.395-180.531-134.195 11.776 2.202 23.91 3.379 36.352 3.379 17.664 0 34.765-2.304 50.944-6.707-88.422-17.818-155.034-95.898-155.034-189.594 0-0.819 0-1.587 0-2.406 26.061 14.49 55.91 23.194 87.552 24.218-51.866-34.714-86.016-93.798-86.016-160.922 0-35.379 9.523-68.608 26.214-97.178 95.283 116.992 237.773 193.894 398.387 201.984-3.277-14.182-4.966-28.877-4.966-44.083 0-106.701 86.477-193.178 193.229-193.178 55.603 0 105.83 23.398 141.107 60.979 43.981-8.704 85.35-24.781 122.726-46.899-14.438 45.107-45.107 82.995-84.992 106.906 39.117-4.71 76.288-15.002 111.002-30.413-25.907 38.81-58.675 72.806-96.461 99.994z"}))}},168:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(160),r=o.c.div.withConfig({displayName:"dateReadTime__DateReadMinutes",componentId:"sc-1xy9u8l-0"})(["font-size:","px;opacity:0.75;@media(min-width:690px){font-size:","px;}"],function(e){var t=e.fontSizeMobile;return t||12},function(e){var t=e.fontSizeDesktop;return t||14}),l=o.c.span.withConfig({displayName:"dateReadTime__MidDot",componentId:"sc-1xy9u8l-1"})(["padding:0 7px;vertical-align:middle;"]);t.a=function(e){var t=e.date,n=e.timeToRead,a=e.fontSizeMobile,o=e.fontSizeDesktop;return i.a.createElement(r,{fontSizeMobile:a,fontSizeDesktop:o},t,i.a.createElement(l,null,"·"),n," min read")}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"ReactJunkie - Yusinto Ngadiman's blog",description:"Yusinto Ngadiman's blog. Read writing from Yusinto Ngadiman on reactjunkie.com.",keywordsCsv:"yusinto,ngadiman,blog,yus,react,junkie,reactjunkie,graphql,react-site-nav,ld-redux,universal-hot-reload,relay-compiler-plus",blurb:"Frontend Engineer @ LaunchDarkly. Book addict and tea lover. Passionate about react graphql and making things fast."}}}}},170:function(e,t,n){var a={"./":162,"./email":163,"./email.js":163,"./github":164,"./github.js":164,"./index":162,"./index.js":162,"./linkedin":165,"./linkedin.js":165,"./star":166,"./star.js":166,"./twitter":167,"./twitter.js":167};function i(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=170},171:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"React hocs with ts. This is my preferred way. Say you have a hoc called   that wraps a component and shows\na loader and fetches some data on…",timeToRead:4,frontmatter:{date:"January 13, 2019",title:"React HOC with Typescript and Jest",path:"/react-hoc-typescript"}}},{node:{excerpt:"This is the quickest blog ever about the quickest way to integrate launch darkly with react. Two lines\nof code to get feature flags into…",timeToRead:1,frontmatter:{date:"November 12, 2018",title:"ld-react v2 Feature Flag with Hooks",path:"/ld-react-v2"}}},{node:{excerpt:"I was writing  ld-vue  when I needed a way to pass arguments\nto my Vue mixin. In my case, I needed to pass a client id to an external…",timeToRead:1,frontmatter:{date:"September 25, 2018",title:"Vue Mixins With Arguments",path:"/vue-mixin-args"}}},{node:{excerpt:"After more than 2 years and 30+ blog posts, I am proud to announce  reactjunkie.com \nhas finally moved to  Gatsby . It's been an incredible…",timeToRead:2,frontmatter:{date:"September 18, 2018",title:"Hello Gatsby",path:"/gatsby"}}}]}}}},172:function(e,t,n){e.exports=n.p+"static/blog-icon-b2517c3b1f98d8bf487ee4d15e740df8.png"},173:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(160),i=Object(a.b)(["margin:0 auto;max-width:740px;padding:0 20px;"])},174:function(e,t,n){"use strict";var a=n(177),i=n.n(a),o=n(169),r=n(0),l=n.n(r),c=n(1),d=n.n(c),m=n(176),s=n.n(m),p=n(36),u=n(160),f=[{type:"twitter",url:"https://twitter.com/yusinto"},{type:"github",url:"https://github.com/yusinto"},{type:"email",url:"mailto:yusinto@gmail.com"},{type:"linkedin",url:"https://www.linkedin.com/in/yusinto"}],g=[{name:"react-site-nav",description:"A kick ass site menu powered by styled components inspired by Stripe",stars:117},{name:"relay-compiler-plus",description:"Custom relay compiler which supports persisted queries",stars:59},{name:"universal-hot-reload",description:"Hot reload client and server webpack bundles for the ultimate development experience",stars:52},{name:"ld-react",description:"A library to integrate launch darkly with react",stars:20}],h=n(162),y=n(178),x=n.n(y),w=n(171),v=n(168),b=n(172),E=n.n(b),_=u.c.div.withConfig({displayName:"blog__RootDiv",componentId:"aef39i-0"})(["height:100%;width:100%;& img{margin-bottom:0;}"]),k=u.c.div.withConfig({displayName:"blog__ListContainer",componentId:"aef39i-1"})(["display:flex;justify-content:center;align-items:center;"]),I=u.c.ul.withConfig({displayName:"blog__List",componentId:"aef39i-2"})(["color:lightslategray;display:flex;flex-direction:column;justify-content:space-evenly;list-style-type:none;margin:0;padding:10px 8px 0 15px;"]),C=u.c.div.withConfig({displayName:"blog__ListItemContent",componentId:"aef39i-3"})(["display:flex;flex-direction:row;&:hover{opacity:0.7;}"]),N=u.c.div.withConfig({displayName:"blog__LisItemHeadingText",componentId:"aef39i-4"})(["display:flex;flex-direction:column;justify-content:space-between;font-size:10px;margin-left:5px;color:#6772e5;"]),z=u.c.div.withConfig({displayName:"blog__ListItemHeading",componentId:"aef39i-5"})(["margin:0;font-size:13px;font-weight:600;"]),T=u.c.div.withConfig({displayName:"blog__Latest",componentId:"aef39i-6"})(["display:flex;justify-content:flex-start;align-items:flex-start;padding:20px 20px;background:white;&:hover{opacity:0.7;}"]),R=u.c.img.withConfig({displayName:"blog__StyledLatestImage",componentId:"aef39i-7"})(["margin-top:2px;width:24px;"]),L=u.c.div.withConfig({displayName:"blog__LatestText",componentId:"aef39i-8"})(["display:flex;flex-direction:column;justify-content:flex-start;margin-left:6px;"]),S=u.c.div.withConfig({displayName:"blog__LatestHeading",componentId:"aef39i-9"})(["font-size:16px;font-weight:600;color:#6772e5;"]),M=u.c.div.withConfig({displayName:"blog__BlogTitle",componentId:"aef39i-10"})(["font-weight:bold;opacity:0.7;font-size:13px;"]),j=u.c.div.withConfig({displayName:"blog__BlogExcerpt",componentId:"aef39i-11"})(["font-size:12px;opacity:0.8;"]),B=Object(u.c)(p.Link).withConfig({displayName:"blog__StyledLink",componentId:"aef39i-12"})(["color:black;"]),D=function(e){e.data;return l.a.createElement(p.StaticQuery,{query:"481383303",render:function(e){var t=e.allMarkdownRemark.edges,n=t[0].node;return l.a.createElement(_,null,l.a.createElement(B,{to:n.frontmatter.path},l.a.createElement(T,null,l.a.createElement(R,{src:E.a,alt:"latest"}),l.a.createElement(L,null,l.a.createElement(S,null,"Latest"),l.a.createElement(M,null,n.frontmatter.title),l.a.createElement(j,null,n.excerpt),l.a.createElement(v.a,{fontSizeDesktop:11,date:n.frontmatter.date,timeToRead:n.timeToRead})))),l.a.createElement(k,null,l.a.createElement(I,null,t.map(function(e,t){if(0===t)return null;var n=e.node,a=n.timeToRead,i=n.frontmatter,o=i.title,r=i.date,c=i.path;return l.a.createElement("li",{key:c},l.a.createElement(p.Link,{to:c},l.a.createElement(C,null,l.a.createElement(N,null,l.a.createElement(z,null,o),l.a.createElement(v.a,{fontSizeDesktop:11,date:r,timeToRead:a})))))}),l.a.createElement("li",{key:"all-posts"},l.a.createElement(p.Link,{to:"/"},l.a.createElement(C,null,l.a.createElement(N,null,l.a.createElement(z,null,"All Posts"))))))))},data:w})},H=(n(175),u.c.ul.withConfig({displayName:"openSource__List",componentId:"sc-41mxv7-0"})(["display:flex;flex-direction:column;margin-top:10px;margin-left:30px;& a{color:black;}"])),O=u.c.li.withConfig({displayName:"openSource__ListItem",componentId:"sc-41mxv7-1"})(["display:flex;flex-direction:row;margin:5px 5px;align-items:center;"]),A=u.c.a.withConfig({displayName:"openSource__StyledLink",componentId:"sc-41mxv7-2"})(["display:flex;align-items:center;&:hover{opacity:0.7;}"]),q=u.c.div.withConfig({displayName:"openSource__RepoContainer",componentId:"sc-41mxv7-3"})(["display:flex;flex-direction:column;"]),P=u.c.h2.withConfig({displayName:"openSource__Repo",componentId:"sc-41mxv7-4"})(["margin:0;margin-right:10px;color:#6772e5;font-size:14px;line-height:22px;font-weight:600;letter-spacing:.025em;"]),J=u.c.div.withConfig({displayName:"openSource__Description",componentId:"sc-41mxv7-5"})(["font-size:13px;opacity:0.7;"]),F=u.c.div.withConfig({displayName:"openSource__StarContainer",componentId:"sc-41mxv7-6"})(["display:flex;align-items:center;"]),G=u.c.span.withConfig({displayName:"openSource__Count",componentId:"sc-41mxv7-7"})(["color:black;font-style:italic;font-size:14px;opacity:0.6;margin:0;margin-left:4px;padding:0;vertical-align:top;"]),U=function(){return l.a.createElement(H,null,g.map(function(e,t){return l.a.createElement(O,{key:e.name},l.a.createElement(A,{href:"https://github.com/yusinto/"+e.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(q,null,l.a.createElement(F,null,l.a.createElement(P,null,e.name),l.a.createElement(h.default,{fill:"grey",width:"12",type:"star"}),l.a.createElement(G,null,e.stars)),l.a.createElement(J,null,e.description))))}),l.a.createElement(O,{key:"all-repos"},l.a.createElement(A,{href:"https://github.com/yusinto/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(q,null,l.a.createElement(F,null,l.a.createElement(P,null,"All Repos"))))))},Y=u.c.div.withConfig({displayName:"header__RootDiv",componentId:"sc-31ozxh-0"})(["position:fixed;top:0;width:100%;background:#f6f9fc;z-index:2;"]),Q=u.c.div.withConfig({displayName:"header__Header",componentId:"sc-31ozxh-1"})(["display:flex;justify-content:space-between;height:","px;"],50),V=u.c.h1.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-2"})(["margin:0;margin-left:10px;font-size:25px;font-weight:bold;@media(min-width:375px){font-size:32px;}"]),W=u.c.div.withConfig({displayName:"header__SocialLinks",componentId:"sc-31ozxh-3"})(["display:flex;padding-top:5px;@media(min-width:480px){margin-right:10px;}"]),K=u.c.span.withConfig({displayName:"header__SocialLink",componentId:"sc-31ozxh-4"})(["width:18px;margin:8px 10px;@media(min-width:375px){width:20px;margin:10px;}@media(min-width:480px){margin:10px 13px;}"]),X=function(){return l.a.createElement(Y,null,l.a.createElement(Q,null,l.a.createElement(V,null,l.a.createElement(p.Link,{to:"/"},"ReactJunkie")),l.a.createElement(W,null,f.map(function(e){var t=e.type,n=e.url;return l.a.createElement(K,{key:t},"email"===t?l.a.createElement("a",{href:n},l.a.createElement(h.default,{type:t})):l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(h.default,{type:t})))}))),l.a.createElement(x.a,{background:"#323232",fontSize:"14",rowHeight:35,debug:!1},l.a.createElement(y.ContentGroup,{title:"Blog",width:"350",height:"435",background:"#eff2f5"},l.a.createElement(D,null)),l.a.createElement(y.ContentGroup,{title:"Open Source",width:"320",height:"400"},l.a.createElement(U,null)),l.a.createElement(y.ContentGroup,{title:"About",rootUrl:"/about"})))};function Z(){var e=i()(['\n  html {\n    font-family: sans-serif;\n  }\n  \n  h1 {\n    margin-top: 50px;\n  }\n  \n  h2, h3, h4, h5 {\n    margin-top: 30px;\n    margin-bottom: 12px;\n  }\n  \n  body {\n    margin: 0;\n  }\n  \n  a:hover {\n    text-decoration: none !important;\n    opacity: 0.7;\n  }\n  \n  ul, ol {\n    margin-left: 1.78rem;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: #14161a;\n    display: block;\n    margin-left: -0.45em;\n    padding-left: 0.2em;\n    border-left: 0.2em solid yellowgreen;\n  }\n  \n  .gatsby-highlight pre span.line-numbers-rows {\n    width: 5% !important;\n  }\n    \n  .gatsby-highlight pre span.line-numbers-rows span{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  \n  .gatsby-highlight {\n    border-radius: 0.3em;\n    overflow: auto;\n    margin-bottom: 20px;\n  }\n  \n  .gatsby-highlight pre[class*="language-"] {\n    margin: 0 !important;\n    padding: 0;\n    overflow: initial;\n    float: left; /* 1 */\n    min-width: 100%; /* 2 */\n  }\n  \n  .gatsby-highlight pre[class*="language-"].line-numbers {\n    padding-left: 2.8em; /* 3 */\n  }\n  \n  .embedVideoIframe {\n    margin-bottom: 0;\n  }\n  \n  #markdownImage {\n    border: 1px solid #2d2d2d;\n    box-shadow: 6px 7px 5px -1px rgba(0,0,0,0.11);\n    border-radius: 7px;\n  }\n']);return Z=function(){return e},e}var $=Object(u.a)(Z()),ee=u.c.div.withConfig({displayName:"layout__RootDiv",componentId:"ii2kc2-0"})(["margin:0 auto;width:100%;padding:","px 0;@media(min-width:768px){padding:","px 0;}"],60,95),te=function(e){var t=e.children;e.pageType,e.datePosted,e.timeToRead;return l.a.createElement(p.StaticQuery,{query:"320066194",render:function(e){var n=e.site.siteMetadata,a=n.title,i=n.description,o=n.keywordsCsv,r=n.blurb;return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null),l.a.createElement(s.a,{title:a,meta:[{name:"description",content:i+" "+r},{name:"keywords",content:o}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(X,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(ee,null,t))},data:o})};te.propTypes={children:d.a.node.isRequired,datePosted:d.a.string};t.a=te},179:function(e,t,n){e.exports=n.p+"static/icon-512x512-fe7d1fb00f5ab5cc590685767bd2310d.png"},206:function(e,t,n){"use strict";var a={ellipse:"…",chars:[" ","-"],max:140,truncate:!0};e.exports=function(e,t,n){if("string"!=typeof e||0===e.length)return"";if(0===t)return"";for(var i in n=n||{},a)null!==n[i]&&void 0!==n[i]||(n[i]=a[i]);return n.max=t||n.max,function(e,t,n,a,i){if(e.length<t)return e;for(var o=0,r="",l=Math.floor(t/2),c="middle"===i?l:t,d=0,m=e.length;d<m;d++)if(r=e.charAt(d),-1!==a.indexOf(r)&&"middle"!==i&&(o=d),!(d<c))return 0===o?i?e.substring(0,c-1)+n+("middle"===i?e.substring(e.length-l,e.length):""):"":e.substring(0,o)+n;return e}(e,n.max,n.ellipse,n.chars,n.truncate)}}}]);
//# sourceMappingURL=component---src-pages-post-template-js-3d9210157b85ae56bce6.js.map