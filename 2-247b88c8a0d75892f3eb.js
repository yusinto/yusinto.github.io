(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i),r=n(166),o=Object(r.b)("span").withConfig({displayName:"svg__StyledSvg"})(["padding-top:","px;"],function(e){return e.paddingTop||0});t.default=function(e){var t=e.type,i=e.fill,r=e.width,l=e.paddingTop,c=n(201)("./"+t).default;return a.a.createElement(o,{paddingTop:l},a.a.createElement(c,{fill:i,width:r}))}},170:function(e,t,n){"use strict";var i=n(191),a=n.n(i),r=n(192),o=n(0),l=n.n(o),c=n(3),s=n.n(c),d=n(173),p=n.n(d),u=n(79),f=n(166),m=(n(78),[{type:"twitter",url:"https://twitter.com/yusinto"},{type:"github",url:"https://github.com/yusinto"},{type:"email",url:"mailto:yusinto@gmail.com"},{type:"linkedin",url:"https://www.linkedin.com/in/yusinto"}]),h=[{name:"react-site-nav",description:"A kick ass site menu powered by styled components inspired by Stripe",stars:110},{name:"relay-compiler-plus",description:"Custom relay compiler which supports persisted queries",stars:50},{name:"universal-hot-reload",description:"Hot reload client and server webpack bundles for the ultimate development experience",stars:40},{name:"ld-redux",description:"A library to integrate launch darkly with react redux",stars:21}],g=n(169),b=(n(53),n(13)),y=n.n(b),w=n(180),x=n(202),v=n.n(x),k=320,E=200,O=10,j=function(e){return Object(f.a)(["",""],function(t){return t[e]?v()(e)+": "+t[e]:null})},_=Object(f.b)("div").withConfig({displayName:"siteNav__GridContainer"})(["@media(max-width:","px){position:absolute;visibility:hidden;}@media(min-width:","px){display:grid;",";justify-items:stretch;grid-template-columns:repeat(",",","px);grid-template-rows:","px;position:relative;",";",";",";","px;}"],function(e){return e.breakpoint-1},function(e){return e.breakpoint},j("justifyContent"),function(e){return e.columns},function(e){return e.columnWidth},function(e){return e.rowHeight},j("background"),j("color"),j("fontFamily"),j("fontSize")),C=Object(f.b)("div").withConfig({displayName:"siteNav__GridItem"})(["grid-column:"," / span 1;display:flex;justify-content:center;align-items:center;&:hover{opacity:0.5;cursor:default;}& a{",";}"],function(e){return e.index+1},j("color")),N=Object(f.b)("div").withConfig({displayName:"siteNav__ContentRow"})(["grid-column:1 / span ",";grid-row:2 / span 1;position:relative;height:0;"],function(e){return e.columns}),z=Object(f.d)(["from{opacity:0;transform:perspective(","px) rotateX(-60deg);transform-origin:top center;}to{opacity:1;transform:perspective(","px) rotateX(0deg);transform-origin:top center;}"],850,850),D=Object(f.d)(["from{opacity:1;transform:perspective(","px) rotateX(0deg);transform-origin:top center;}to{opacity:0;transform:perspective(","px) rotateX(-60deg);transform-origin:top center;visibility:hidden;}"],850,850),S=Object(f.b)("div").withConfig({displayName:"siteNav__MovingDiv"})(["opacity:1;",";",";position:absolute;top:","px;left:","px;width:","px;height:","px;display:",";border-radius:4px;box-shadow:0 8px 28px 1px rgba(138,126,138,0.67);animation:"," "," forwards ease;"],j("color"),j("background"),function(e){return e.top},function(e){var t=e.fromData;return t?t.left:0},function(e){var t=e.fromData;return t?t.width:0},function(e){var t=e.fromData;return t?t.height:0},function(e){return e.display},function(e){var t=e.fadeOut,n=e.display,i=e.fromData,a=e.toData;if(t)return D;if("block"===n){if(i.left===a.left)return z;if(i)return function(e,t){return Object(f.d)(["from{left:","px;width:","px;height:","px;}to{left:","px;width:","px;height:","px;}"],e.left,e.width,e.height,t.left,t.width,t.height)}(i,a)}return""},function(e){var t=e.fadeOut,n=e.display,i=e.fromData,a=e.toData;if(t)return"0.34s";if("block"===n){if(i.left===a.left)return"0.25s";if(i)return"0.25s"}return"0s"}),M=Object(f.d)(["from{opacity:0;}to{opacity:1;}"]),L=Object(f.d)(["from{opacity:1;}to{opacity:0;}"]),R=function(e,t,n){return Object(f.a)(["margin-left:","px;"],e?e.left+e.width/2-t+n-8-(t>0||n>0?O:0):0)},T=Object(f.b)("div").withConfig({displayName:"siteNav__Arrow"})(["top:-","px;z-index:1;position:absolute;"," display:",";width:0;height:0;border-left:","px solid transparent;border-right:","px solid transparent;border-bottom:","px solid ",";animation:"," "," forwards ease;"],function(e){return 8-e.top},function(e){var t=e.toData,n=e.leftOffset,i=e.rightOffset;return R(t,n,i)},function(e){var t=e.display,n=e.toData;return n&&0===n.width&&0===n.height?"none":t},8,8,8,function(e){return e.background},function(e){var t=e.fadeOut,n=e.display,i=e.fromData,a=e.toData,r=e.leftOffset,o=e.rightOffset;if(t)return L;if("block"===n){if(i.left===a.left)return M;if(i)return function(e,t,n,i){return Object(f.d)(["from{","}to{","}"],R(e,n,i),R(t,n,i))}(i,a,r,o)}return""},function(e){var t=e.fadeOut,n=e.display,i=e.fromData,a=e.toData;if(t)return"0.34s";if("block"===n){if(i.left===a.left)return"0.25s";if(i)return"0.28s"}return"0s"}),I=Object(f.d)(["from{opacity:0;}to{opacity:1;}"]),A=Object(f.d)(["from{opacity:1;}to{opacity:0;}"]),B=Object(f.b)("div").withConfig({displayName:"siteNav__ContentGroupContainer"})(["position:absolute;margin-top:0;margin-bottom:0;width:100%;height:100%;opacity:",";z-index:",";animation:","  ","s forwards;"],function(e){return e.show?1:0},function(e){return e.show?1:0},function(e){var t=e.show,n=e.fadeOut;return t?I:n?A:""},function(e){return e.show?"0.1":"0.29"}),H=function(e){var t=e.title,n=e.width,i=e.height,a=e.background;return l.a.createElement("div",null,t,": ",n,"x",i,"; ",a)},F=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={display:"none",fadeOut:!1,fromData:null,toData:null,leftOffset:0,rightOffset:0},t.memoizeMenuData=Object(w.a)(function(e,t){return l.a.Children.map(t,function(t,n){var i,a,r=t.props,o=r.width,l=r.height;return o||l?(i=o||k,a=l||E):(i=0,a=0),Object.assign({},t.props,{height:a,width:i,index:n,left:(n+1)*e-e/2-i/2})})}),t.memoizeGridItems=Object(w.a)(function(e,n){return l.a.Children.map(e,function(e,i){var a=e.props,r=a.title,o=a.rootUrl;return l.a.createElement(C,{key:"menu-title-"+i,index:i,onMouseEnter:function(e){return t.onMouseEnter(e.target,i)},color:n},o?l.a.createElement("a",{href:o},r):r)})}),t.memoizeContent=Object(w.a)(function(e,t,n){return l.a.Children.map(e,function(e,i){return l.a.createElement(B,{key:"content-group-"+i,show:n&&n.index===i,fadeOut:t&&t.index===i},e.props.children)})}),t.memoizeColumns=Object(w.a)(function(e){return l.a.Children.count(e)}),t.memoizeAlign=Object(w.a)(function(e){switch(e){case"left":return"start";case"right":return"end";default:return"center"}}),t.close=function(){t.props.debug||t.setState(function(e){return{fadeOut:!0,fromData:e.toData}})},t.onMouseEnter=function(e,n){t.setState(function(i){var a=t.memoizeMenuData(t.props.columnWidth,t.props.children)[n],r=Object.assign({},a),o=0,l=0;if(e){var c=e.getBoundingClientRect(),s=c.left,d=c.width,p=e.parentNode.clientWidth;return o=r.width/2-(s+d/2),l=r.width/2-(p-(s+d/2)),o>0?r.left+=o+O:o=0,l>0?r.left-=l-O:l=0,{display:"block",fadeOut:!1,fromData:i.fadeOut||!i.toData?r:i.toData,toData:r,leftOffset:o,rightOffset:l}}})},t.onMouseLeave=function(){return t.close()},t.onClickMovingDiv=function(){return t.close()},t}return y()(t,e),t.prototype.render=function(){var e=this.props,t=e.columnWidth,n=e.rowHeight,i=e.background,a=e.contentBackground,r=e.contentColor,o=e.contentTop,c=e.children,s=e.align,d=e.fontSize,p=e.fontFamily,u=e.color,f=e.breakpoint,m=this.state,h=m.fromData,g=m.toData,b=m.display,y=m.fadeOut,w=m.leftOffset,x=m.rightOffset,v=this.memoizeColumns(c),k=this.memoizeGridItems(c,u),E=this.memoizeContent(c,h,g),O=this.memoizeAlign(s),j=g&&g.background||a;return l.a.createElement("nav",null,l.a.createElement(_,{background:i,columnWidth:t,rowHeight:n,justifyContent:O,fontSize:d,fontFamily:p,color:u,breakpoint:f,onMouseLeave:this.onMouseLeave,columns:v},k,l.a.createElement(N,{columns:v},l.a.createElement(T,{display:b,fadeOut:y,fromData:h,toData:g,top:o,onClick:this.onClickMovingDiv,background:j,leftOffset:w,rightOffset:x}),l.a.createElement(S,{display:b,fadeOut:y,fromData:h,toData:g,color:r,top:o,onClick:this.onClickMovingDiv,background:j},E))))},t}(o.Component);F.defaultProps={align:"center",columnWidth:150,rowHeight:45,background:"#323232",contentBackground:"#fff",contentColor:"#323232",contentTop:0,breakpoint:768,color:"#fff",debug:!1};var J=n(203),q=n(181),P=n(204),W=n.n(P),G=Object(f.b)("div").withConfig({displayName:"blog__RootDiv"})(["height:100%;width:100%;& img{margin-bottom:0;}"]),Q=Object(f.b)("div").withConfig({displayName:"blog__ListContainer"})(["display:flex;justify-content:center;align-items:center;"]),U=Object(f.b)("ul").withConfig({displayName:"blog__List"})(["color:lightslategray;display:flex;flex-direction:column;justify-content:space-evenly;list-style-type:none;margin:0;padding:10px 8px 0 15px;"]),X=Object(f.b)("div").withConfig({displayName:"blog__ListItemContent"})(["display:flex;flex-direction:row;&:hover{opacity:0.7;}"]),Y=Object(f.b)("div").withConfig({displayName:"blog__LisItemHeadingText"})(["display:flex;flex-direction:column;justify-content:space-between;font-size:10px;margin-left:5px;color:#6772e5;"]),V=Object(f.b)("div").withConfig({displayName:"blog__ListItemHeading"})(["margin:0;font-size:13px;font-weight:600;"]),K=Object(f.b)("div").withConfig({displayName:"blog__Latest"})(["display:flex;justify-content:flex-start;align-items:flex-start;padding:20px 20px;background:white;&:hover{opacity:0.7;}"]),Z=Object(f.b)("img").withConfig({displayName:"blog__StyledLatestImage"})(["margin-top:2px;width:24px;"]),$=Object(f.b)("div").withConfig({displayName:"blog__LatestText"})(["display:flex;flex-direction:column;justify-content:flex-start;margin-left:6px;"]),ee=Object(f.b)("div").withConfig({displayName:"blog__LatestHeading"})(["font-size:16px;font-weight:600;color:#6772e5;"]),te=Object(f.b)("div").withConfig({displayName:"blog__BlogTitle"})(["font-weight:bold;opacity:0.7;font-size:13px;"]),ne=Object(f.b)("div").withConfig({displayName:"blog__BlogExcerpt"})(["font-size:12px;opacity:0.8;"]),ie=Object(f.b)(u.Link).withConfig({displayName:"blog__StyledLink"})(["color:black;"]),ae=function(e){return e.data,l.a.createElement(u.StaticQuery,{query:"481383303",render:function(e){var t=e.allMarkdownRemark.edges,n=t[0].node;return l.a.createElement(G,null,l.a.createElement(ie,{to:n.frontmatter.path},l.a.createElement(K,null,l.a.createElement(Z,{src:W.a,alt:"latest"}),l.a.createElement($,null,l.a.createElement(ee,null,"Latest"),l.a.createElement(te,null,n.frontmatter.title),l.a.createElement(ne,null,n.excerpt),l.a.createElement(q.a,{fontSizeDesktop:11,date:n.frontmatter.date,timeToRead:n.timeToRead})))),l.a.createElement(Q,null,l.a.createElement(U,null,t.map(function(e,t){if(0===t)return null;var n=e.node,i=n.timeToRead,a=n.frontmatter,r=a.title,o=a.date,c=a.path;return l.a.createElement("li",{key:c},l.a.createElement(u.Link,{to:c},l.a.createElement(X,null,l.a.createElement(Y,null,l.a.createElement(V,null,r),l.a.createElement(q.a,{fontSizeDesktop:11,date:o,timeToRead:i})))))}),l.a.createElement("li",{key:"all-posts"},l.a.createElement(u.Link,{to:"/"},l.a.createElement(X,null,l.a.createElement(Y,null,l.a.createElement(V,null,"All Posts"))))))))},data:J})},re=(n(171),Object(f.b)("ul").withConfig({displayName:"openSource__List"})(["display:flex;flex-direction:column;margin-top:10px;margin-left:30px;& a{color:black;}"])),oe=Object(f.b)("li").withConfig({displayName:"openSource__ListItem"})(["display:flex;flex-direction:row;margin:5px 5px;align-items:center;"]),le=Object(f.b)("a").withConfig({displayName:"openSource__StyledLink"})(["display:flex;align-items:center;&:hover{opacity:0.7;}"]),ce=Object(f.b)("div").withConfig({displayName:"openSource__RepoContainer"})(["display:flex;flex-direction:column;"]),se=Object(f.b)("h2").withConfig({displayName:"openSource__Repo"})(["margin:0;margin-right:10px;color:#6772e5;font-size:14px;line-height:22px;font-weight:600;letter-spacing:.025em;"]),de=Object(f.b)("div").withConfig({displayName:"openSource__Description"})(["font-size:13px;opacity:0.7;"]),pe=Object(f.b)("div").withConfig({displayName:"openSource__StarContainer"})(["display:flex;align-items:center;"]),ue=Object(f.b)("span").withConfig({displayName:"openSource__Count"})(["color:black;font-style:italic;font-size:14px;opacity:0.6;margin:0;margin-left:4px;padding:0;vertical-align:top;"]),fe=function(){return l.a.createElement(re,null,h.map(function(e,t){return l.a.createElement(oe,{key:e.name},l.a.createElement(le,{href:"https://github.com/yusinto/"+e.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(ce,null,l.a.createElement(pe,null,l.a.createElement(se,null,e.name),l.a.createElement(g.default,{fill:"grey",width:"12",type:"star"}),l.a.createElement(ue,null,e.stars)),l.a.createElement(de,null,e.description))))}),l.a.createElement(oe,{key:"all-repos"},l.a.createElement(le,{href:"https://github.com/yusinto/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(ce,null,l.a.createElement(pe,null,l.a.createElement(se,null,"All Repos"))))))},me=Object(f.b)("div").withConfig({displayName:"header__RootDiv"})(["position:fixed;top:0;width:100%;background:#f6f9fc;z-index:2;"]),he=Object(f.b)("div").withConfig({displayName:"header__Header"})(["display:flex;justify-content:space-between;height:","px;"],50),ge=Object(f.b)("h1").withConfig({displayName:"header__Logo"})(["margin:0;margin-left:10px;font-size:25px;font-weight:bold;@media(min-width:375px){font-size:32px;}"]),be=Object(f.b)("div").withConfig({displayName:"header__SocialLinks"})(["display:flex;padding-top:5px;@media(min-width:480px){margin-right:10px;}"]),ye=Object(f.b)("span").withConfig({displayName:"header__SocialLink"})(["width:18px;margin:8px 10px;@media(min-width:375px){width:20px;margin:10px;}@media(min-width:480px){margin:10px 13px;}"]),we=function(){return l.a.createElement(me,null,l.a.createElement(he,null,l.a.createElement(ge,null,l.a.createElement(u.Link,{to:"/"},"ReactJunkie")),l.a.createElement(be,null,m.map(function(e){var t=e.type,n=e.url;return l.a.createElement(ye,{key:t},"email"===t?l.a.createElement("a",{href:n},l.a.createElement(g.default,{type:t})):l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.default,{type:t})))}))),l.a.createElement(F,{background:"#323232",fontSize:"14",rowHeight:35,debug:!1},l.a.createElement(H,{title:"Blog",width:"350",height:"420",background:"#eff2f5"},l.a.createElement(ae,null)),l.a.createElement(H,{title:"Open Source",width:"320",height:"400"},l.a.createElement(fe,null)),l.a.createElement(H,{title:"About",rootUrl:"/about"})))};function xe(){var e=a()(["\n  html {\n    font-family: sans-serif;\n  }\n  \n  h1 {\n    margin-top: 50px;\n  }\n  \n  h2, h3, h4, h5 {\n    margin-top: 50px;\n    margin-bottom: 12px;\n  }\n  \n  body {\n    margin: 0;\n  }\n  \n  a:hover {\n    text-decoration: none;\n    opacity: 0.7;\n  }\n  \n  ul, ol {\n    margin-left: 1.78rem;\n  }\n  \n  .gatsby-highlight {\n    margin-bottom: 30px;\n  }\n  \n  .gatsby-highlight-code-line {\n    background-color: #14161a;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 0.75em;\n    border-left: 0.2em solid yellowgreen;\n  }\n  \n  .embedVideoIframe {\n    margin-bottom: 0;\n  }\n  \n  #markdownImage {\n    border: 1px solid #2d2d2d;\n    box-shadow: 6px 7px 5px -1px rgba(0,0,0,0.11);\n    border-radius: 7px;\n  }\n"]);return xe=function(){return e},e}Object(f.c)(xe());var ve=Object(f.b)("div").withConfig({displayName:"layout__RootDiv"})(["margin:0 auto;width:100%;padding:","px 0;@media(min-width:768px){padding:","px 0;}"],60,95),ke=function(e){var t=e.children;return e.pageType,e.datePosted,e.timeToRead,l.a.createElement(u.StaticQuery,{query:"320066194",render:function(e){var n=e.site.siteMetadata,i=n.title,a=n.description,r=n.keywordsCsv,o=n.blurb;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:i,meta:[{name:"description",content:a+" "+o},{name:"keywords",content:r}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(we,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(ve,null,t))},data:r})};ke.propTypes={children:s.a.node.isRequired,datePosted:s.a.string},t.a=ke},175:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i);t.default=function(e){var t=e.width,n=e.fill;return a.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},a.a.createElement("title",null,"mail"),a.a.createElement("path",{className:"path1",d:"M80.589 270.643c24.986 13.414 371.098 199.373 384 206.285s29.594 10.189 46.387 10.189c16.794 0 33.485-3.277 46.387-10.189s359.014-192.87 384-206.285c25.037-13.466 48.691-65.843 2.765-65.843h-866.253c-45.926 0-22.272 52.378 2.714 65.843zM952.986 383.437c-28.416 14.797-378.214 197.069-395.622 206.182s-29.594 10.189-46.387 10.189-28.979-1.075-46.387-10.189-365.21-191.437-393.626-206.234c-19.968-10.445-19.763 1.792-19.763 11.213s0 373.402 0 373.402c0 21.504 28.979 51.2 51.2 51.2h819.2c22.221 0 51.2-29.696 51.2-51.2 0 0 0-363.93 0-373.35s0.205-21.658-19.814-11.213z"}))}},176:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i);t.default=function(e){var t=e.width,n=e.fill;return a.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},a.a.createElement("title",null,"github"),a.a.createElement("path",{className:"path1",d:"M674.816 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211s66.56-41.318 66.56-92.211c-0.051-50.79-29.798-92.109-66.56-92.109zM906.547 339.251c7.629-18.688 7.936-124.877-32.512-226.611 0 0-92.723 10.189-233.011 106.496-29.44-8.192-79.258-12.186-128.973-12.186-49.818 0-99.584 3.994-129.024 12.186-140.339-96.307-233.062-106.496-233.062-106.496-40.397 101.734-39.987 207.923-32.461 226.611-47.514 51.61-76.544 113.613-76.544 198.195 0 367.923 305.306 373.811 382.31 373.811 17.51 0 52.122 0.102 88.781 0.102 36.608 0 71.27-0.102 88.678-0.102 77.107 0 382.31-5.888 382.31-373.811 0-84.582-28.979-146.586-76.493-198.195zM513.434 866.048h-2.867c-193.075 0-343.501-22.989-343.501-210.688 0-45.005 15.872-86.682 53.606-121.293 62.822-57.702 169.216-27.187 289.894-27.187 0.512 0 1.024 0 1.485 0 0.512 0 0.922 0 1.382 0 120.678 0 227.123-30.515 289.997 27.187 37.632 34.611 53.504 76.288 53.504 121.293 0 187.699-150.374 210.688-343.501 210.688zM349.235 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211 36.813 0 66.611-41.318 66.611-92.211 0-50.79-29.798-92.109-66.611-92.109z"}))}},177:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i);t.default=function(e){var t=e.width,n=e.fill;return a.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},a.a.createElement("title",null,"linkedin"),a.a.createElement("path",{className:"path1",d:"M256 153.6c0 54.374-36.352 101.171-102.451 101.171-62.208 0-102.349-44.134-102.349-98.509 0-55.808 38.912-105.062 102.4-105.062s101.171 46.592 102.4 102.4zM51.2 972.8v-665.6h204.8v665.6h-204.8z"}),a.a.createElement("path",{className:"path2",d:"M358.4 534.733c0-79.104-2.611-145.203-5.222-202.291h184.013l9.114 88.218h3.891c25.907-41.523 89.395-102.4 195.686-102.4 129.638 0 226.918 86.784 226.918 273.51v381.030h-204.8v-351.283c0-81.613-31.078-143.872-102.4-143.872-54.374 0-81.613 44.032-95.898 80.333-5.222 13.005-6.502 31.13-6.502 49.306v365.517h-204.8v-438.067z"}))}},178:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i);t.default=function(e){var t=e.width,n=e.fill;return a.a.createElement("svg",{viewBox:"0 0 576 512",fill:n,width:t},a.a.createElement("path",{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}))}},179:function(e,t,n){"use strict";n.r(t),n(168);var i=n(0),a=n.n(i);t.default=function(e){var t=e.width,n=e.fill;return a.a.createElement("svg",{viewBox:"0 0 1024 1024",fill:n,width:t},a.a.createElement("title",null,"twitter"),a.a.createElement("path",{className:"path1",d:"M886.579 319.795c0.41 8.294 0.563 16.691 0.563 24.986 0 255.488-194.406 549.99-549.888 549.99-109.21 0-210.739-32-296.294-86.886 15.155 1.792 30.515 2.714 46.080 2.714 90.624 0 173.926-30.925 240.026-82.688-84.531-1.587-155.955-57.395-180.531-134.195 11.776 2.202 23.91 3.379 36.352 3.379 17.664 0 34.765-2.304 50.944-6.707-88.422-17.818-155.034-95.898-155.034-189.594 0-0.819 0-1.587 0-2.406 26.061 14.49 55.91 23.194 87.552 24.218-51.866-34.714-86.016-93.798-86.016-160.922 0-35.379 9.523-68.608 26.214-97.178 95.283 116.992 237.773 193.894 398.387 201.984-3.277-14.182-4.966-28.877-4.966-44.083 0-106.701 86.477-193.178 193.229-193.178 55.603 0 105.83 23.398 141.107 60.979 43.981-8.704 85.35-24.781 122.726-46.899-14.438 45.107-45.107 82.995-84.992 106.906 39.117-4.71 76.288-15.002 111.002-30.413-25.907 38.81-58.675 72.806-96.461 99.994z"}))}},181:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(166),o=Object(r.b)("div").withConfig({displayName:"dateReadTime__DateReadMinutes"})(["font-size:","px;opacity:0.75;@media(min-width:690px){font-size:","px;}"],function(e){return e.fontSizeMobile||12},function(e){return e.fontSizeDesktop||14}),l=Object(r.b)("span").withConfig({displayName:"dateReadTime__MidDot"})(["padding:0 7px;vertical-align:middle;"]);t.a=function(e){var t=e.date,n=e.timeToRead,i=e.fontSizeMobile,r=e.fontSizeDesktop;return a.a.createElement(o,{fontSizeMobile:i,fontSizeDesktop:r},t,a.a.createElement(l,null,"·"),n," min read")}},192:function(e){e.exports={data:{site:{siteMetadata:{title:"ReactJunkie - Yusinto Ngadiman's blog",description:"Yusinto Ngadiman's blog. Read writing from Yusinto Ngadiman on reactjunkie.com.",keywordsCsv:"yusinto,ngadiman,blog,yus,react,junkie,reactjunkie,graphql,react-site-nav,ld-redux,universal-hot-reload,relay-compiler-plus",blurb:"Frontend Engineer @ Qantas. Tinkerer of things. Tea lover. Passionate about react graphql and making things fast."}}}}},201:function(e,t,n){var i={"./":169,"./email":175,"./email.js":175,"./github":176,"./github.js":176,"./index":169,"./index.js":169,"./linkedin":177,"./linkedin.js":177,"./star":178,"./star.js":178,"./twitter":179,"./twitter.js":179};function a(e){var t=r(e);return n(t)}function r(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=201},203:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Stripe has a beautiful site nav and this package is inspired by that.\nIntroducing react-site-nav, a beautifully animated site nav powered by…",timeToRead:3,frontmatter:{date:"July 13, 2018",title:"Introducing react-site-nav",path:"/react-site-nav"}}},{node:{excerpt:"About two years ago I wrote a package  ld-redux \nwhich allows easy integration of Launch Darkly and react redux apps. That package is still…",timeToRead:2,frontmatter:{date:"May 30, 2018",title:"React integration with Launch Darkly using ld-react",path:"/ld-react"}}},{node:{excerpt:"Schema stitching was introduced by Apollo, so there is a general misconception that it\nonly works with the apollo stack but it works with…",timeToRead:4,frontmatter:{date:"April 27, 2018",title:"Relay Schema Stitching with Pesisted Queries",path:"/relay-schema-stitching"}}},{node:{excerpt:"For most javascript objects, the prototype chain ends at the Object prototype. This prototype provides a few commonly used\nmethods like…",timeToRead:1,frontmatter:{date:"March 28, 2018",title:"Javascript Lessons: toJSON and valueOf",path:"/js-lessons-tojson-valueof"}}}]}}}},204:function(e,t,n){e.exports=n.p+"static/blog-icon-b2517c3b1f98d8bf487ee4d15e740df8.png"}}]);
//# sourceMappingURL=2-247b88c8a0d75892f3eb.js.map