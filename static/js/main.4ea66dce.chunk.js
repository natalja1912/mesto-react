(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),s=(a(12),a(1)),l=a(4),p=a.n(l);var u=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},i=a(5),m=a(6),_=new(function(){function e(t){Object(i.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(m.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLike",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"d92f283c-c212-4fc6-810d-3af1a30b9902","Content-Type":"application/json"}});var h=function(e){var t=e.name,a=e.link,n=e.likes,o=e.handleCard;return c.a.createElement("div",{className:"place"},c.a.createElement("button",{className:"place__image-button",onClick:function(){o({name:t,link:a})}},c.a.createElement("img",{className:"place__image",src:a,alt:t})),c.a.createElement("div",{className:"place__info"},c.a.createElement("p",{className:"place__heading"},t),c.a.createElement("div",{className:"place__buttons"},c.a.createElement("button",{className:"place__like-button","aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",type:"button"}),c.a.createElement("button",{className:"place__sumoflikes-button","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432",type:"button"},n))),c.a.createElement("button",{className:"place__delete-button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button"}))};var d=function(e){var t=e.onEditProfile,a=e.onAddPlace,o=e.onEditAvatar,r=e.onCardClick,l=Object(n.useState)("\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),p=Object(s.a)(l,2),u=p[0],i=p[1],m=Object(n.useState)("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"),d=Object(s.a)(m,2),b=d[0],f=d[1],E=Object(n.useState)("https://www.bagira.guru/images/joomgallery/originals/lyudi_18/foto_zhak_iv_kusto__-_interesnie_fakti_20190810_2078596433.jpg"),y=Object(s.a)(E,2),N=y[0],g=y[1],k=Object(n.useState)([]),v=Object(s.a)(k,2),j=v[0],x=v[1];return Object(n.useEffect)((function(){Promise.all([_.getUserInfo(),_.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];i(a.name),f(a.about),g(a.avatar),x(n)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("main",{className:"content"},c.a.createElement("section",{className:"cover"},c.a.createElement("div",{className:"cover__profile"},c.a.createElement("button",{className:"cover__image",style:{backgroundImage:"url(".concat(N,")")},onClick:o}),c.a.createElement("div",{className:"cover__heading-info"},c.a.createElement("h1",{className:"cover__heading"},u),c.a.createElement("button",{className:"cover__edit",onClick:t,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),c.a.createElement("p",{className:"cover__subheading"},b)),c.a.createElement("button",{className:"cover__add",onClick:a,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"})),c.a.createElement("section",{className:"places"},j.map((function(e){return c.a.createElement(h,{key:e._id,name:e.name,link:e.link,likes:e.likes.length,handleCard:r})}))))};var b=function(e){return c.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},c.a.createElement("form",{className:"popup__container popup__container_type_".concat(e.name," popup__item"),name:"popup__container_type_".concat(e.name),noValidate:!0},c.a.createElement("h2",{className:"popup__heading popup__heading_type_".concat(e.name)},e.title),e.children,c.a.createElement("button",{className:"popup__add-button popup__add-button_type_".concat(e.name),type:"submit"},e.buttonText),c.a.createElement("button",{className:"popup__close-button popup__close-button_type_".concat(e.name),type:"button",onClick:e.onClose})))};var f=function(e){var t=e.card,a=e.onClose;return c.a.createElement("section",{className:"popup popup_type_photo ".concat(t&&"popup_opened")},c.a.createElement("div",{className:"popup__image-group popup__item"},c.a.createElement("img",{className:"popup__image",src:t.link,alt:t.name}),c.a.createElement("p",{className:"popup__text popup__text_type_photo"},t.name),c.a.createElement("button",{className:"popup__close-button popup__close-button_type_photo",onClick:a,type:"button"})))};var E=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa92020\xa0Mesto\xa0Russia"))};var y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(s.a)(r,2),p=l[0],i=l[1],m=Object(n.useState)(!1),_=Object(s.a)(m,2),h=_[0],y=_[1],N=Object(n.useState)(!1),g=Object(s.a)(N,2),k=g[0],v=g[1];function j(){o(!1),y(!1),i(!1),v(!1)}return c.a.createElement("div",{className:"page"},c.a.createElement(u,null),c.a.createElement(d,{onEditProfile:function(){o(!0)},onAddPlace:function(){i(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){v(e)}}),c.a.createElement(b,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:j},c.a.createElement("label",{className:"popup__input"},c.a.createElement("input",{type:"text",className:"popup__text popup__text_type_name",name:"popup__text_type_name",placeholder:"\u0418\u043c\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",required:!0}),c.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),c.a.createElement("label",{className:"popup__input"},c.a.createElement("input",{type:"text",className:"popup__text popup__text_type_job",name:"popup__text_type_job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"200",required:!0}),c.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."))),c.a.createElement(b,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:p,onClose:j},c.a.createElement("label",{className:"popup__input"},c.a.createElement("input",{type:"text",className:"popup__text popup__text_type_placename",name:"popup__text_type_placename",placeholder:"\u0413\u043e\u0440\u043d\u044b\u0439 \u0410\u043b\u0442\u0430\u0439",minLength:"1",maxLength:"30",required:!0}),c.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),c.a.createElement("label",{className:"popup__input"},c.a.createElement("input",{type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),c.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430."))),c.a.createElement(b,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",onClose:j}),c.a.createElement(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:h,onClose:j},c.a.createElement("label",{className:"popup__input"},c.a.createElement("input",{type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),c.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430."))),c.a.createElement(f,{card:k,onClose:j}),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/header-logo.855a8c98.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4ea66dce.chunk.js.map