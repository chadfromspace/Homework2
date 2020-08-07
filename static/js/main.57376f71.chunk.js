(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":"1","name":"Interactive Portfolio","description":"An animated and interactive portfolio coded with Unity in C#.","deployedURL":"https://chadfromspace.github.io/InteractivePortfolio","repositoryURL":"https://github.com/chadfromspace/InteractivePortfolio","img":"./assets/img/interactiveportfolio.png"},{"id":"1","name":"Project","description":"ProjectDescription","deployedURL":"ProjectURL","repositoryURL":"RepositoryURL","img":"/path/"}]')},25:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(30),a(31),a(6)),l=a(7),s=a(9),u=a(8),m=(a(32),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutMe"},r.a.createElement("figure",null,r.a.createElement("img",{className:"aboutMe",alt:"A person in blue light.",src:"./assets/img/aboutme.png"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"I'm a Full Stack Web Developer, Graphic Designer, and Game Developer from Atlanta, GA")))}}]),a}(n.Component)),p=(a(33),a(34),a(19)),h=a(15),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{className:"text-center projectCard",key:this.props.id},r.a.createElement(h.a.Header,null,this.props.name),r.a.createElement(h.a.Body,null,r.a.createElement("img",{alt:this.props.description,src:this.props.img}),r.a.createElement(h.a.Text,null,this.props.description),r.a.createElement("a",{href:this.props.deployedURL},r.a.createElement(p.a,{className:"mr-2",variant:"primary"},"Website")),r.a.createElement("a",{href:this.props.repositoryURL},r.a.createElement(p.a,{variant:"primary"},"Github Repository")))))}}]),a}(n.Component),d=a(23),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={projects:d},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.projects.map((function(e,t){return r.a.createElement(f,{key:t,name:e.name,description:e.description,deployedURL:e.deployedURL,repositoryURL:e.repositoryURL,img:e.img})})))}}]),a}(n.Component),b=(a(35),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"I prefer to be contacted via LinkedIn.",r.a.createElement("a",{href:"https://www.linkedin.com/in/chad-dubay-a17a501aa/"},"LinkedIn"),r.a.createElement("a",{href:"chadfromspace.github.com"},"GitHub")))}}]),a}(n.Component)),E=(a(36),a(13)),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar links"},r.a.createElement("h4",{className:"mr-4"},r.a.createElement(E.b,{to:"/"},"About")),r.a.createElement("h4",{className:"mr-4"},r.a.createElement(E.b,{to:"/projects"},"Projects")),r.a.createElement("h4",null,r.a.createElement(E.b,{to:"/contact"},"Contact"))))}}]),a}(n.Component),j=(a(42),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",null,"Created with React. Be sure to check out my\xa0",r.a.createElement("a",{href:"https://chadfromspace.github.io/InteractivePortfolio"},"Interactive Portfolio"),"\xa0that was create using Unity and C#."))}}]),a}(n.Component)),g=a(2);var O=function(){return r.a.createElement(E.a,null,r.a.createElement(y,null),r.a.createElement("div",{className:"page"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:m}),r.a.createElement(g.a,{path:"/projects",component:v}),r.a.createElement(g.a,{path:"/contact",component:b}))),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.57376f71.chunk.js.map