(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return u}),t(79);var n=t(0),r=t.n(n),l=t(3),i=t.n(l),s=t(78),o=function(e){var a=e.pageContext,t=e.data,n=a.tag;if(t.allMarkdownRemark){var l=t.allMarkdownRemark,i=l.edges,o=l.totalCount,u=o+" post"+(1===o?"":"s")+" tagged with '"+n+"'";return r.a.createElement("div",null,r.a.createElement("h1",null,u),r.a.createElement("ul",null,i.map(function(e){var a=e.node.frontmatter,t=a.path,n=a.title;return r.a.createElement("li",{key:t},r.a.createElement(s.Link,{to:t},n))})),r.a.createElement(s.Link,{to:"/tags"},"All tags"))}return"markdown edges null!"};o.propTypes={pathContext:i.a.shape({tag:i.a.string.isRequired}),data:i.a.shape({allMarkdownRemark:i.a.shape({totalCount:i.a.number.isRequired,edges:i.a.arrayOf(i.a.shape({node:i.a.shape({frontmatter:i.a.shape({path:i.a.string.isRequired,title:i.a.string.isRequired})})}).isRequired)})})},a.default=o;var u="597435495"}}]);
//# sourceMappingURL=component---src-pages-tag-template-js-bd2bcd8e43be94f34a20.js.map