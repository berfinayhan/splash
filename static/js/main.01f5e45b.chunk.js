(this.webpackJsonpsplash=this.webpackJsonpsplash||[]).push([[0],{15:function(e,n,t){e.exports=t(24)},21:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(5),o=t.n(i),l=(t(20),t(21),t(6)),c=t(7),s=t(14),m=t(13),u=t(8),h=t(9);function g(){var e=Object(u.a)(["\n  min-height: 2em;\n  font-size: medium;\n  font-weight: 600;\n  opacity: ",";\n  transition: opacity 375ms ease-out;\n  @media (max-width: 767px) {\n    min-height: 4.875em;\n  }\n"]);return g=function(){return e},e}var f=h.a.h3(g(),(function(e){return e.show?1:0})),d=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={tags:["I'm currently designing freelance @ Gnar","Ask me about my dogs Falafel, and Tantuni"],currentIdx:0,showTag:!0},e.componentDidMount=function(){e.tagInterval=setInterval(e.cycleTags,5e3)},e.componentWillUnmount=function(){clearTimeout(e.animationTimer),clearInterval(e.tagInterval)},e.setShowTag=function(n){e.setState({showTag:n})},e.changeTag=function(){var n=e.state,t=n.currentIdx,a=n.tags;e.setState({currentIdx:t===a.length-1?0:t+1})},e.cycleTags=function(){e.setShowTag(!1),clearTimeout(e.animationTimer),e.animationTimer=setTimeout((function(){e.changeTag(),e.setShowTag(!0)}),500)},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,n=e.tags,t=e.currentIdx,a=e.showTag;return r.a.createElement("div",{className:"link-list"},r.a.createElement("h1",null,"Hey, I'm Berfin"),r.a.createElement("h2",null,"# I'm a Product Designer"),r.a.createElement(f,{show:a},n[t]))}}]),t}(a.PureComponent),k=[{key:"email",flavorText:"shoot me an email at ",link:"ayhanberfin1@gmail.com",linkText:"ayhanberfin1@gmail.com"},{key:"linkedin",flavorText:"connect with me on ",link:"https://www.linkedin.com/in/berfin-ayhan/",linkText:"linkedin"}],w=function(){return r.a.createElement("div",{className:"link-list"},k.map((function(e){return r.a.createElement("span",{key:e.key,className:"link-item"},e.flavorText,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},e.linkText))})))},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(d,null),r.a.createElement(w,null)),r.a.createElement("p",{className:"closeBracket"},"}"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.01f5e45b.chunk.js.map