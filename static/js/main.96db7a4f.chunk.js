(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),u=(a(15),a(9)),l=a(1),s=a(6),i=a.n(s);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:i.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},m=a(7),_=a(8),d=new(function(){function e(t){Object(m.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(_.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLike",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"d92f283c-c212-4fc6-810d-3af1a30b9902","Content-Type":"application/json"}}),h=o.a.createContext();var f=function(e){var t=e.card,a=e.handleCard,n=e.handleCardLike,c=e.handleCardDelete,r=o.a.useContext(h),u=!1;t.owner&&(u=r._id===t.owner._id);var l="place__delete-button ".concat(u?"place__delete-button_visible":"place__delete-button_hidden"),s=!1;t.likes&&(s=t.likes.some((function(e){return e._id===r._id})));var i="place__like-button ".concat(s&&"place__like-button_active");return o.a.createElement("div",{className:"place"},o.a.createElement("button",{className:"place__image-button",onClick:function(){a(t)}},o.a.createElement("img",{className:"place__image",src:t.link,alt:t.name})),o.a.createElement("div",{className:"place__info"},o.a.createElement("p",{className:"place__heading"},t.name),o.a.createElement("div",{className:"place__buttons"},o.a.createElement("button",{className:i,onClick:function(){return n(t)},"aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",type:"button"}),o.a.createElement("button",{className:"place__sumoflikes-button","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432",type:"button"},t.likes?t.likes.length:0))),o.a.createElement("button",{className:l,onClick:function(){return c(t)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button"}))};var b=function(e){var t=e.cards,a=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,r=e.onCardClick,u=e.handleCardLike,l=e.handleCardDelete,s=o.a.useContext(h);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"cover"},o.a.createElement("div",{className:"cover__profile"},o.a.createElement("button",{className:"cover__image",style:{backgroundImage:"url(".concat(s.avatar,")")},onClick:c}),o.a.createElement("div",{className:"cover__heading-info"},o.a.createElement("h1",{className:"cover__heading"},s.name),o.a.createElement("button",{className:"cover__edit",onClick:a,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),o.a.createElement("p",{className:"cover__subheading"},s.about)),o.a.createElement("button",{className:"cover__add",onClick:n,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"})),o.a.createElement("section",{className:"places"},t.map((function(e){return o.a.createElement(f,{key:e._id,card:e,handleCard:r,handleCardLike:function(e){return u(e)},handleCardDelete:function(e){return l(e)}})}))))};var E=function(e){return o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("form",{className:"popup__container popup__container_type_".concat(e.name," popup__item"),name:"popup__container_type_".concat(e.name),onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h2",{className:"popup__heading popup__heading_type_".concat(e.name)},e.title),e.children,o.a.createElement("button",{className:"popup__add-button popup__add-button_type_".concat(e.name),type:"submit"},e.buttonText),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_".concat(e.name),type:"button",onClick:e.onClose})))};var v=function(e){var t=e.card,a=e.onClose;return o.a.createElement("section",{className:"popup popup_type_photo ".concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__image-group popup__item"},o.a.createElement("img",{className:"popup__image",src:t?t.link:"",alt:t?t.name:""}),o.a.createElement("p",{className:"popup__text popup__text_type_photo"},t?t.name:""),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_photo",onClick:a,type:"button"})))};var g=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020\xa0Mesto\xa0Russia"))};var k=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateUser,r=Object(n.useState)(""),u=Object(l.a)(r,2),s=u[0],i=u[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),_=m[0],d=m[1],f=o.a.useContext(h);return Object(n.useEffect)((function(){i(f.name),d(f.about)}),[f]),o.a.createElement(E,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){return function(e){e.preventDefault(),c({name:s,about:_,avatar:f.avatar})}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return i(e.target.value)},type:"text",className:"popup__text popup__text_type_name",name:"popup__text_type_name",placeholder:"\u0418\u043c\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return d(e.target.value)},type:"text",className:"popup__text popup__text_type_job",name:"popup__text_type_job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=(o.a.useContext(h),o.a.useRef());return o.a.createElement(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){return function(e){e.preventDefault(),n(c.current.value)}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{ref:c,type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateCard,c=o.a.useState(""),r=Object(l.a)(c,2),u=r[0],s=r[1],i=o.a.useState(""),p=Object(l.a)(i,2),m=p[0],_=p[1];return o.a.createElement(E,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){return function(e){e.preventDefault(),n({name:u,link:m})}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return s(e.target.value)},type:"text",className:"popup__text popup__text_type_placename",name:"popup__text_type_placename",placeholder:"\u0413\u043e\u0440\u043d\u044b\u0439 \u0410\u043b\u0442\u0430\u0439",minLength:"1",maxLength:"30",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return _(e.target.value)},type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],m=s[1],_=Object(n.useState)(!1),f=Object(l.a)(_,2),y=f[0],j=f[1],O=Object(n.useState)(),x=Object(l.a)(O,2),S=x[0],P=x[1],U=Object(n.useState)({}),L=Object(l.a)(U,2),w=L[0],T=L[1],A=Object(n.useState)([]),D=Object(l.a)(A,2),I=D[0],q=D[1];function J(){c(!1),j(!1),m(!1),P(void 0)}return Object(n.useEffect)((function(){d.getUserInfo().then((function(e){T(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){d.getInitialCards().then((function(e){q(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(h.Provider,{value:w},o.a.createElement(p,null),o.a.createElement(b,{cards:I,handleCardLike:function(e){return function(e){var t=!1;e.likes&&(t=e.likes.some((function(e){return e._id===w._id}))),d.changeLike(e._id,!t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));q(a)})).catch((function(e){return console.log(e)}))}(e)},handleCardDelete:function(e){return function(e){d.deleteCard(e._id).then((function(){q(I.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}(e)},onEditProfile:function(){c(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){j(!0)},onCardClick:function(e){P(e)}}),o.a.createElement(k,{isOpen:a,onClose:J,onUpdateUser:function(e){return function(e){d.sendUserInfo(e).then((function(){J(),T(e)})).catch((function(e){return console.log(e)}))}(e)}}),o.a.createElement(N,{isOpen:i,onClose:J,onUpdateCard:function(e){return function(e){d.postNewCard(e).then((function(){q([].concat(Object(u.a)(I),[e])),J()})).catch((function(e){return console.log(e)}))}(e)}}),o.a.createElement(E,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",onClose:J}),o.a.createElement(C,{isOpen:y,onClose:J,onUpdateAvatar:function(e){return function(e){d.changeAvatar(e).then((function(){J(),T({name:w.name,about:w.about,avatar:e})})).catch((function(e){return console.log(e)}))}(e)}}),o.a.createElement(v,{card:S,onClose:J}),o.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/header-logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.96db7a4f.chunk.js.map