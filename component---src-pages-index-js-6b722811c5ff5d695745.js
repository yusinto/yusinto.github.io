(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,t,a){"use strict";a.r(t),a(181),a(81),a(78);var n=a(0),i=a.n(n),l=a(79),r=a(166),o=a(179),d=a(180),c=a(174),s=a(185),p=a.n(s),m=Object(r.default)("div").withConfig({displayName:"authorBioHomepage__ProfilePic"})(["border-radius:50%;background-image:url('","');background-position:center top;background-size:cover;height:80px;width:80px;@media(min-width:552px){grid-area:profilePic;height:120px;width:120px;}"],p.a),u=Object(r.default)("div").withConfig({displayName:"authorBioHomepage__Bio"})(["display:flex;flex-direction:column;justify-content:flex-start;@media(min-width:552px){grid-area:bio;}"]),f=Object(r.default)("div").withConfig({displayName:"authorBioHomepage__Name"})(["font-size:24px;font-weight:bold;opacity:1;"]),g=Object(r.default)("div").withConfig({displayName:"authorBioHomepage__Blurb"})(["font-size:15px;opacity:0.8;"]),h=Object(r.default)("div").withConfig({displayName:"authorBioHomepage__RootDiv"})(["display:grid;grid-template-columns:auto;grid-template-rows:100px auto;grid-column-gap:5px;align-items:center;",' margin-top:20px;@media(min-width:552px){grid-template-columns:auto auto;grid-template-rows:auto;grid-template-areas:"bio profilePic";}'],o.a),b=function(e){var t=e.blurb;return i.a.createElement(h,null,i.a.createElement(m,null),i.a.createElement(u,null,i.a.createElement(f,null,"Yusinto Ngadiman"),i.a.createElement(g,null,t)))};a.d(t,"indexQuery",function(){return j});var y=Object(r.default)("div").withConfig({displayName:"pages__Content"})(["",""],o.a),x=Object(r.default)("section").withConfig({displayName:"pages__PostTile"})(["margin:20px 0 30px;padding:15px 15px;box-shadow:0 1px 4px rgba(0,0,0,0.3);border-radius:5px;"]),w=Object(r.default)(function(e){var t=e.className,a=e.to,n=e.children;return i.a.createElement(l.Link,{className:t,to:a},n)}).withConfig({displayName:"pages__StyledGatsbyLink"})(["{display:flex;flex-direction:column;&:hover{opacity:1;}}"]),v=Object(r.default)("div").withConfig({displayName:"pages__PostHero"})(["width:100%;height:120px;background-image:url('","');margin:10px 0 20px;background-position:50% 50%;background-size:cover;border-radius:3px;@media(min-width:690px){height:200px;}"],function(e){return e.src}),E=Object(r.default)("div").withConfig({displayName:"pages__PostDescription"})(["color:black;"]),_=Object(r.default)("h3").withConfig({displayName:"pages__Title"})(["margin:0 0 10px;@media(min-width:690px){font-size:28px;}"]),k=Object(r.default)("div").withConfig({displayName:"pages__Summary"})(["margin:10px 0 20px;font-size:16px;"]),j=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=t.site.siteMetadata.blurb;return i.a.createElement(d.a,null,i.a.createElement(b,{blurb:n}),i.a.createElement(y,null,i.a.createElement("h4",null,"Latest"),a.map(function(e){var t=e.node,a=t.excerpt,n=t.timeToRead,l=t.frontmatter,r=l.title,o=l.date,d=l.path,s=l.files,p=s&&s.find(function(e){return"hero"===e.name});return i.a.createElement(x,{key:d},i.a.createElement(w,{to:d},p?i.a.createElement(v,{src:p.publicURL}):null,i.a.createElement(E,null,i.a.createElement(_,null,r),i.a.createElement(k,null,a),i.a.createElement(c.a,{date:o,timeToRead:n}))))})))},"3008121837")},168:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n),l=a(166),r=Object(l.default)("span").withConfig({displayName:"svg__StyledSvg"})(["padding-top:","px;"],function(e){return e.paddingTop||0});t.default=function(e){var t=e.type,n=e.fill,l=e.width,o=e.paddingTop,d=a(176)("./"+t).default;return i.a.createElement(r,{paddingTop:o},i.a.createElement(d,{fill:n,width:l}))}},169:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n);t.default=function(e){var t=e.width,a=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:a,width:t},i.a.createElement("title",null,"mail"),i.a.createElement("path",{className:"path1",d:"M80.589 270.643c24.986 13.414 371.098 199.373 384 206.285s29.594 10.189 46.387 10.189c16.794 0 33.485-3.277 46.387-10.189s359.014-192.87 384-206.285c25.037-13.466 48.691-65.843 2.765-65.843h-866.253c-45.926 0-22.272 52.378 2.714 65.843zM952.986 383.437c-28.416 14.797-378.214 197.069-395.622 206.182s-29.594 10.189-46.387 10.189-28.979-1.075-46.387-10.189-365.21-191.437-393.626-206.234c-19.968-10.445-19.763 1.792-19.763 11.213s0 373.402 0 373.402c0 21.504 28.979 51.2 51.2 51.2h819.2c22.221 0 51.2-29.696 51.2-51.2 0 0 0-363.93 0-373.35s0.205-21.658-19.814-11.213z"}))}},170:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n);t.default=function(e){var t=e.width,a=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:a,width:t},i.a.createElement("title",null,"github"),i.a.createElement("path",{className:"path1",d:"M674.816 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211s66.56-41.318 66.56-92.211c-0.051-50.79-29.798-92.109-66.56-92.109zM906.547 339.251c7.629-18.688 7.936-124.877-32.512-226.611 0 0-92.723 10.189-233.011 106.496-29.44-8.192-79.258-12.186-128.973-12.186-49.818 0-99.584 3.994-129.024 12.186-140.339-96.307-233.062-106.496-233.062-106.496-40.397 101.734-39.987 207.923-32.461 226.611-47.514 51.61-76.544 113.613-76.544 198.195 0 367.923 305.306 373.811 382.31 373.811 17.51 0 52.122 0.102 88.781 0.102 36.608 0 71.27-0.102 88.678-0.102 77.107 0 382.31-5.888 382.31-373.811 0-84.582-28.979-146.586-76.493-198.195zM513.434 866.048h-2.867c-193.075 0-343.501-22.989-343.501-210.688 0-45.005 15.872-86.682 53.606-121.293 62.822-57.702 169.216-27.187 289.894-27.187 0.512 0 1.024 0 1.485 0 0.512 0 0.922 0 1.382 0 120.678 0 227.123-30.515 289.997 27.187 37.632 34.611 53.504 76.288 53.504 121.293 0 187.699-150.374 210.688-343.501 210.688zM349.235 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211 36.813 0 66.611-41.318 66.611-92.211 0-50.79-29.798-92.109-66.611-92.109z"}))}},171:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n);t.default=function(e){var t=e.width,a=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:a,width:t},i.a.createElement("title",null,"linkedin"),i.a.createElement("path",{className:"path1",d:"M256 153.6c0 54.374-36.352 101.171-102.451 101.171-62.208 0-102.349-44.134-102.349-98.509 0-55.808 38.912-105.062 102.4-105.062s101.171 46.592 102.4 102.4zM51.2 972.8v-665.6h204.8v665.6h-204.8z"}),i.a.createElement("path",{className:"path2",d:"M358.4 534.733c0-79.104-2.611-145.203-5.222-202.291h184.013l9.114 88.218h3.891c25.907-41.523 89.395-102.4 195.686-102.4 129.638 0 226.918 86.784 226.918 273.51v381.030h-204.8v-351.283c0-81.613-31.078-143.872-102.4-143.872-54.374 0-81.613 44.032-95.898 80.333-5.222 13.005-6.502 31.13-6.502 49.306v365.517h-204.8v-438.067z"}))}},172:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n);t.default=function(e){var t=e.width,a=e.fill;return i.a.createElement("svg",{viewBox:"0 0 576 512",fill:a,width:t},i.a.createElement("path",{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}))}},173:function(e,t,a){"use strict";a.r(t),a(167);var n=a(0),i=a.n(n);t.default=function(e){var t=e.width,a=e.fill;return i.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:a,width:t},i.a.createElement("title",null,"twitter"),i.a.createElement("path",{className:"path1",d:"M886.579 319.795c0.41 8.294 0.563 16.691 0.563 24.986 0 255.488-194.406 549.99-549.888 549.99-109.21 0-210.739-32-296.294-86.886 15.155 1.792 30.515 2.714 46.080 2.714 90.624 0 173.926-30.925 240.026-82.688-84.531-1.587-155.955-57.395-180.531-134.195 11.776 2.202 23.91 3.379 36.352 3.379 17.664 0 34.765-2.304 50.944-6.707-88.422-17.818-155.034-95.898-155.034-189.594 0-0.819 0-1.587 0-2.406 26.061 14.49 55.91 23.194 87.552 24.218-51.866-34.714-86.016-93.798-86.016-160.922 0-35.379 9.523-68.608 26.214-97.178 95.283 116.992 237.773 193.894 398.387 201.984-3.277-14.182-4.966-28.877-4.966-44.083 0-106.701 86.477-193.178 193.229-193.178 55.603 0 105.83 23.398 141.107 60.979 43.981-8.704 85.35-24.781 122.726-46.899-14.438 45.107-45.107 82.995-84.992 106.906 39.117-4.71 76.288-15.002 111.002-30.413-25.907 38.81-58.675 72.806-96.461 99.994z"}))}},174:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(166),r=Object(l.default)("div").withConfig({displayName:"dateReadTime__DateReadMinutes"})(["font-size:","px;opacity:0.75;@media(min-width:690px){font-size:","px;}"],function(e){return e.fontSizeMobile||12},function(e){return e.fontSizeDesktop||14}),o=Object(l.default)("span").withConfig({displayName:"dateReadTime__MidDot"})(["padding:0 7px;vertical-align:middle;"]);t.a=function(e){var t=e.date,a=e.timeToRead,n=e.fontSizeMobile,l=e.fontSizeDesktop;return i.a.createElement(r,{fontSizeMobile:n,fontSizeDesktop:l},t,i.a.createElement(o,null,"·"),a," min read")}},175:function(e){e.exports={data:{site:{siteMetadata:{title:"ReactJunkie - Yusinto Ngadiman's blog",description:"Yusinto Ngadiman's blog. Read writing from Yusinto Ngadiman on reactjunkie.com.",keywordsCsv:"yusinto,ngadiman,blog,yus,react,junkie,reactjunkie,graphql,react-site-nav,ld-redux,universal-hot-reload,relay-compiler-plus",blurb:"Frontend Engineer @ Qantas. Tinkerer of things. Tea lover. Passionate about react graphql and making things fast."}}}}},176:function(e,t,a){var n={"./":168,"./email":169,"./email.js":169,"./github":170,"./github.js":170,"./index":168,"./index.js":168,"./linkedin":171,"./linkedin.js":171,"./star":172,"./star.js":172,"./twitter":173,"./twitter.js":173};function i(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id=176},177:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"After more than 2 years and 30+ blog posts, I am proud to announce  reactjunkie.com \nhas finally moved to  Gatsby . It's been an incredible…",timeToRead:2,frontmatter:{date:"September 18, 2018",title:"Hello Gatsby",path:"/gatsby"}}},{node:{excerpt:"Stripe has a beautiful site nav and this package is inspired by that.\nIntroducing react-site-nav, a beautifully animated site nav powered by…",timeToRead:3,frontmatter:{date:"July 13, 2018",title:"Introducing react-site-nav",path:"/react-site-nav"}}},{node:{excerpt:"About two years ago I wrote a package  ld-redux \nwhich allows easy integration of Launch Darkly and react redux apps. That package is still…",timeToRead:2,frontmatter:{date:"May 30, 2018",title:"React integration with Launch Darkly using ld-react",path:"/ld-react"}}},{node:{excerpt:"Schema stitching was introduced by Apollo, so there is a general misconception that it\nonly works with the apollo stack but it works with…",timeToRead:4,frontmatter:{date:"April 27, 2018",title:"Relay Schema Stitching with Pesisted Queries",path:"/relay-schema-stitching"}}}]}}}},178:function(e,t,a){e.exports=a.p+"static/blog-icon-b2517c3b1f98d8bf487ee4d15e740df8.png"},179:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(166),i=Object(n.css)(["margin:0 auto;max-width:740px;padding:0 20px;"])},180:function(e,t,a){"use strict";var n=a(183),i=a.n(n),l=a(175),r=a(0),o=a.n(r),d=a(3),c=a.n(d),s=a(182),p=a.n(s),m=a(79),u=a(166),f=(a(78),[{type:"twitter",url:"https://twitter.com/yusinto"},{type:"github",url:"https://github.com/yusinto"},{type:"email",url:"mailto:yusinto@gmail.com"},{type:"linkedin",url:"https://www.linkedin.com/in/yusinto"}]),g=[{name:"react-site-nav",description:"A kick ass site menu powered by styled components inspired by Stripe",stars:111},{name:"relay-compiler-plus",description:"Custom relay compiler which supports persisted queries",stars:51},{name:"universal-hot-reload",description:"Hot reload client and server webpack bundles for the ultimate development experience",stars:40},{name:"ld-redux",description:"A library to integrate launch darkly with react redux",stars:23}],h=a(168),b=a(184),y=a.n(b),x=a(177),w=a(174),v=a(178),E=a.n(v),_=Object(u.default)("div").withConfig({displayName:"blog__RootDiv"})(["height:100%;width:100%;& img{margin-bottom:0;}"]),k=Object(u.default)("div").withConfig({displayName:"blog__ListContainer"})(["display:flex;justify-content:center;align-items:center;"]),j=Object(u.default)("ul").withConfig({displayName:"blog__List"})(["color:lightslategray;display:flex;flex-direction:column;justify-content:space-evenly;list-style-type:none;margin:0;padding:10px 8px 0 15px;"]),N=Object(u.default)("div").withConfig({displayName:"blog__ListItemContent"})(["display:flex;flex-direction:row;&:hover{opacity:0.7;}"]),C=Object(u.default)("div").withConfig({displayName:"blog__LisItemHeadingText"})(["display:flex;flex-direction:column;justify-content:space-between;font-size:10px;margin-left:5px;color:#6772e5;"]),O=Object(u.default)("div").withConfig({displayName:"blog__ListItemHeading"})(["margin:0;font-size:13px;font-weight:600;"]),z=Object(u.default)("div").withConfig({displayName:"blog__Latest"})(["display:flex;justify-content:flex-start;align-items:flex-start;padding:20px 20px;background:white;&:hover{opacity:0.7;}"]),S=Object(u.default)("img").withConfig({displayName:"blog__StyledLatestImage"})(["margin-top:2px;width:24px;"]),R=Object(u.default)("div").withConfig({displayName:"blog__LatestText"})(["display:flex;flex-direction:column;justify-content:flex-start;margin-left:6px;"]),L=Object(u.default)("div").withConfig({displayName:"blog__LatestHeading"})(["font-size:16px;font-weight:600;color:#6772e5;"]),T=Object(u.default)("div").withConfig({displayName:"blog__BlogTitle"})(["font-weight:bold;opacity:0.7;font-size:13px;"]),M=Object(u.default)("div").withConfig({displayName:"blog__BlogExcerpt"})(["font-size:12px;opacity:0.8;"]),D=Object(u.default)(m.Link).withConfig({displayName:"blog__StyledLink"})(["color:black;"]),B=function(e){return e.data,o.a.createElement(m.StaticQuery,{query:"481383303",render:function(e){var t=e.allMarkdownRemark.edges,a=t[0].node;return o.a.createElement(_,null,o.a.createElement(D,{to:a.frontmatter.path},o.a.createElement(z,null,o.a.createElement(S,{src:E.a,alt:"latest"}),o.a.createElement(R,null,o.a.createElement(L,null,"Latest"),o.a.createElement(T,null,a.frontmatter.title),o.a.createElement(M,null,a.excerpt),o.a.createElement(w.a,{fontSizeDesktop:11,date:a.frontmatter.date,timeToRead:a.timeToRead})))),o.a.createElement(k,null,o.a.createElement(j,null,t.map(function(e,t){if(0===t)return null;var a=e.node,n=a.timeToRead,i=a.frontmatter,l=i.title,r=i.date,d=i.path;return o.a.createElement("li",{key:d},o.a.createElement(m.Link,{to:d},o.a.createElement(N,null,o.a.createElement(C,null,o.a.createElement(O,null,l),o.a.createElement(w.a,{fontSizeDesktop:11,date:r,timeToRead:n})))))}),o.a.createElement("li",{key:"all-posts"},o.a.createElement(m.Link,{to:"/"},o.a.createElement(N,null,o.a.createElement(C,null,o.a.createElement(O,null,"All Posts"))))))))},data:x})},H=(a(181),Object(u.default)("ul").withConfig({displayName:"openSource__List"})(["display:flex;flex-direction:column;margin-top:10px;margin-left:30px;& a{color:black;}"])),I=Object(u.default)("li").withConfig({displayName:"openSource__ListItem"})(["display:flex;flex-direction:row;margin:5px 5px;align-items:center;"]),P=Object(u.default)("a").withConfig({displayName:"openSource__StyledLink"})(["display:flex;align-items:center;&:hover{opacity:0.7;}"]),A=Object(u.default)("div").withConfig({displayName:"openSource__RepoContainer"})(["display:flex;flex-direction:column;"]),G=Object(u.default)("h2").withConfig({displayName:"openSource__Repo"})(["margin:0;margin-right:10px;color:#6772e5;font-size:14px;line-height:22px;font-weight:600;letter-spacing:.025em;"]),q=Object(u.default)("div").withConfig({displayName:"openSource__Description"})(["font-size:13px;opacity:0.7;"]),J=Object(u.default)("div").withConfig({displayName:"openSource__StarContainer"})(["display:flex;align-items:center;"]),Q=Object(u.default)("span").withConfig({displayName:"openSource__Count"})(["color:black;font-style:italic;font-size:14px;opacity:0.6;margin:0;margin-left:4px;padding:0;vertical-align:top;"]),U=function(){return o.a.createElement(H,null,g.map(function(e,t){return o.a.createElement(I,{key:e.name},o.a.createElement(P,{href:"https://github.com/yusinto/"+e.name,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(A,null,o.a.createElement(J,null,o.a.createElement(G,null,e.name),o.a.createElement(h.default,{fill:"grey",width:"12",type:"star"}),o.a.createElement(Q,null,e.stars)),o.a.createElement(q,null,e.description))))}),o.a.createElement(I,{key:"all-repos"},o.a.createElement(P,{href:"https://github.com/yusinto/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(A,null,o.a.createElement(J,null,o.a.createElement(G,null,"All Repos"))))))},Y=Object(u.default)("div").withConfig({displayName:"header__RootDiv"})(["position:fixed;top:0;width:100%;background:#f6f9fc;z-index:2;"]),F=Object(u.default)("div").withConfig({displayName:"header__Header"})(["display:flex;justify-content:space-between;height:","px;"],50),V=Object(u.default)("h1").withConfig({displayName:"header__Logo"})(["margin:0;margin-left:10px;font-size:25px;font-weight:bold;@media(min-width:375px){font-size:32px;}"]),K=Object(u.default)("div").withConfig({displayName:"header__SocialLinks"})(["display:flex;padding-top:5px;@media(min-width:480px){margin-right:10px;}"]),W=Object(u.default)("span").withConfig({displayName:"header__SocialLink"})(["width:18px;margin:8px 10px;@media(min-width:375px){width:20px;margin:10px;}@media(min-width:480px){margin:10px 13px;}"]),X=function(){return o.a.createElement(Y,null,o.a.createElement(F,null,o.a.createElement(V,null,o.a.createElement(m.Link,{to:"/"},"ReactJunkie")),o.a.createElement(K,null,f.map(function(e){var t=e.type,a=e.url;return o.a.createElement(W,{key:t},"email"===t?o.a.createElement("a",{href:a},o.a.createElement(h.default,{type:t})):o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h.default,{type:t})))}))),o.a.createElement(y.a,{background:"#323232",fontSize:"14",rowHeight:35,debug:!1},o.a.createElement(b.ContentGroup,{title:"Blog",width:"350",height:"435",background:"#eff2f5"},o.a.createElement(B,null)),o.a.createElement(b.ContentGroup,{title:"Open Source",width:"320",height:"400"},o.a.createElement(U,null)),o.a.createElement(b.ContentGroup,{title:"About",rootUrl:"/about"})))};function Z(){var e=i()(["\n  html {\n    font-family: sans-serif;\n  }\n  \n  h1 {\n    margin-top: 50px;\n  }\n  \n  h2, h3, h4, h5 {\n    margin-top: 50px;\n    margin-bottom: 12px;\n  }\n  \n  body {\n    margin: 0;\n  }\n  \n  a:hover {\n    text-decoration: none;\n    opacity: 0.7;\n  }\n  \n  ul, ol {\n    margin-left: 1.78rem;\n  }\n  \n  .gatsby-highlight {\n    margin-bottom: 30px;\n  }\n  \n  .gatsby-highlight-code-line {\n    background-color: #14161a;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 0.75em;\n    border-left: 0.2em solid yellowgreen;\n  }\n  \n  .embedVideoIframe {\n    margin-bottom: 0;\n  }\n  \n  #markdownImage {\n    border: 1px solid #2d2d2d;\n    box-shadow: 6px 7px 5px -1px rgba(0,0,0,0.11);\n    border-radius: 7px;\n  }\n"]);return Z=function(){return e},e}Object(u.injectGlobal)(Z());var $=Object(u.default)("div").withConfig({displayName:"layout__RootDiv"})(["margin:0 auto;width:100%;padding:","px 0;@media(min-width:768px){padding:","px 0;}"],60,95),ee=function(e){var t=e.children;return e.pageType,e.datePosted,e.timeToRead,o.a.createElement(m.StaticQuery,{query:"320066194",render:function(e){var a=e.site.siteMetadata,n=a.title,i=a.description,l=a.keywordsCsv,r=a.blurb;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{title:n,meta:[{name:"description",content:i+" "+r},{name:"keywords",content:l}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(X,{siteTitle:e.site.siteMetadata.title}),o.a.createElement($,null,t))},data:l})};ee.propTypes={children:c.a.node.isRequired,datePosted:c.a.string},t.a=ee},185:function(e,t,a){e.exports=a.p+"static/icon-512x512-fe7d1fb00f5ab5cc590685767bd2310d.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-6b722811c5ff5d695745.js.map