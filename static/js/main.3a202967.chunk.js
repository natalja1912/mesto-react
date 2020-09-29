(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(15),n(9)),u=n(1),l=n(8),s=n.n(l);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},_=o.a.createContext();var m=function(e){var t=e.card,n=e.handleCard,a=e.handleCardLike,r=e.handleCardDelete,c=o.a.useContext(_),i=c._id===t.owner._id,u="place__delete-button ".concat(i?"place__delete-button_visible":"place__delete-button_hidden"),l=t.likes.some((function(e){return e._id===c._id})),s="place__like-button ".concat(l&&"place__like-button_active");return o.a.createElement("div",{className:"place"},o.a.createElement("button",{className:"place__image-button",onClick:function(){n(t)}},o.a.createElement("img",{className:"place__image",src:t.link,alt:t.name})),o.a.createElement("div",{className:"place__info"},o.a.createElement("p",{className:"place__heading"},t.name),o.a.createElement("div",{className:"place__buttons"},o.a.createElement("button",{className:s,onClick:function(){return a(t)},"aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",type:"button"}),o.a.createElement("button",{className:"place__sumoflikes-button","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432",type:"button"},t.likes?t.likes.length:0))),o.a.createElement("button",{className:u,onClick:function(){return r(t)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button"}))};var d=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,r=e.onEditAvatar,c=e.onCardClick,i=e.handleCardLike,u=e.handleCardDelete,l=o.a.useContext(_);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"cover"},o.a.createElement("div",{className:"cover__profile"},o.a.createElement("button",{className:"cover__image",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:r}),o.a.createElement("div",{className:"cover__heading-info"},o.a.createElement("h1",{className:"cover__heading"},l.name),o.a.createElement("button",{className:"cover__edit",onClick:n,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),o.a.createElement("p",{className:"cover__subheading"},l.about)),o.a.createElement("button",{className:"cover__add",onClick:a,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"})),o.a.createElement("section",{className:"places"},t.map((function(e){return o.a.createElement(m,{key:e._id,card:e,handleCard:c,handleCardLike:function(e){return i(e)},handleCardDelete:function(e){return u(e)}})}))))};var f=function(e){var t=e.card,n=e.onClose;return o.a.createElement("section",{className:"popup popup_type_photo ".concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__image-group popup__item"},o.a.createElement("img",{className:"popup__image",src:t?t.link:"",alt:t?t.name:""}),o.a.createElement("p",{className:"popup__text popup__text_type_photo"},t?t.name:""),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_photo",onClick:n,type:"button"})))};var h=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020\xa0Mesto\xa0Russia"))},b=n(4),v=n(5),E=new(function(){function e(t){Object(b.a)(this,e),this._getResponseData=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))},this._url=t.baseUrl,this._headers=t.headers}return Object(v.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"sendUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLike",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return n._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"d92f283c-c212-4fc6-810d-3af1a30b9902","Content-Type":"application/json"}});var g=function(e){return o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("form",{className:"popup__container popup__container_type_".concat(e.name," popup__item"),name:"popup__container_type_".concat(e.name),onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h2",{className:"popup__heading popup__heading_type_".concat(e.name)},e.title),e.children,o.a.createElement("button",{className:"popup__add-button popup__add-button_type_".concat(e.name),type:"submit"},e.buttonText),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_".concat(e.name),type:"button",onClick:e.onClose})))};var y=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,c=e.isLoading,i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],p=l[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),f=d[0],h=d[1],b=o.a.useContext(_);return Object(a.useEffect)((function(){p(b.name),h(b.about)}),[b]),o.a.createElement(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault(),r({name:s,about:f,avatar:b.avatar})}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"popup__text popup__text_type_name",name:"popup__text_type_name",placeholder:"\u0418\u043c\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return h(e.target.value)},type:"text",className:"popup__text popup__text_type_job",name:"popup__text_type_job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")))};var C=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,r=e.isLoading,c=(o.a.useContext(_),o.a.useRef());return o.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault(),a(c.current.value)}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{ref:c,type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateCard,r=e.isLoading,c=o.a.useContext(_),i=o.a.useState(""),l=Object(u.a)(i,2),s=l[0],p=l[1],m=o.a.useState(""),d=Object(u.a)(m,2),f=d[0],h=d[1];return o.a.createElement(g,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault();var t={name:s,link:f,owner:{_id:c._id},likes:[]};a(t)}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"popup__text popup__text_type_placename",name:"popup__text_type_placename",placeholder:"\u0413\u043e\u0440\u043d\u044b\u0439 \u0410\u043b\u0442\u0430\u0439",minLength:"2",maxLength:"30",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return h(e.target.value)},type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var N=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit;function r(e){e.preventDefault(),a(),n()}return o.a.createElement(g,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){return r(e)}})},O=function(){function e(t,n){Object(b.a)(this,e),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._button=this._form.querySelector(t.buttonSelector),this._fieldSelector=t.fieldSelector,this._errorSelector=t.errorSelector}return Object(v.a)(e,[{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._toggleSubmitButton(),this._inputList.forEach((function(t){var n=t.closest(e._fieldSelector).querySelector(e._errorSelector);t.addEventListener("input",(function(){e._isValid(t,n),e._toggleSubmitButton()}))}))}},{key:"_isValid",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_showInputError",value:function(e,t){t.classList.add("popup__input-error_active"),e.classList.add("popup__text_type_error"),e&&(t.textContent=e.validationMessage)}},{key:"_hideInputError",value:function(e,t){t.classList.remove("popup__input-error_active"),e.classList.remove("popup__text_type_error"),t.textContent=""}},{key:"formReset",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.closest(e._fieldSelector).querySelector(e._errorSelector);e._hideInputError(t,n),e._form.reset(),e._toggleSubmitButton()}))}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput()?(this._button.classList.add("popup__add-button_inactive"),this._button.setAttribute("disabled",!0)):(this._button.classList.remove("popup__add-button_inactive"),this._button.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}]),e}(),S={formSelector:".popup__container",fieldSelector:".popup__input",inputSelector:".popup__text",errorSelector:".popup__input-error",buttonSelector:".popup__add-button"};var x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),l=Object(u.a)(c,2),s=l[0],m=l[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),g=v[0],x=v[1],j=Object(a.useState)(!1),L=Object(u.a)(j,2),w=L[0],D=L[1],I=Object(a.useState)(),U=Object(u.a)(I,2),A=U[0],R=U[1],q=Object(a.useState)({}),T=Object(u.a)(q,2),P=T[0],V=T[1],B=Object(a.useState)([]),J=Object(u.a)(B,2),M=J[0],H=J[1],W=Object(a.useState)(!1),z=Object(u.a)(W,2),$=z[0],F=z[1],G=Object(a.useState)({}),K=Object(u.a)(G,2),Q=K[0],X=K[1];function Y(){r(!1),x(!1),m(!1),D(!1),R(void 0)}return Object(a.useEffect)((function(){Promise.all([E.getUserInfo(),E.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];V(n),H(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=new O(S,document.querySelector(".popup__container_type_place"));return e.enableValidation(),e.formReset()}),[s]),Object(a.useEffect)((function(){var e=new O(S,document.querySelector(".popup__container_type_profile"));return e.enableValidation(),e.formReset()}),[n]),Object(a.useEffect)((function(){var e=new O(S,document.querySelector(".popup__container_type_avatar"));return e.enableValidation(),e.formReset()}),[g]),o.a.createElement("div",{className:"page"},o.a.createElement(_.Provider,{value:P},o.a.createElement(p,null),o.a.createElement(d,{cards:M,handleCardLike:function(e){return function(e){var t=e.likes.some((function(e){return e._id===P._id}));E.changeLike(e._id,!t).then((function(t){var n=M.map((function(n){return n._id===e._id?t:n}));H(n)})).catch((function(e){return console.log(e)}))}(e)},handleCardDelete:function(e){return function(e){D(!0),X(e)}(e)},onEditProfile:function(){r(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){R(e)}}),o.a.createElement(y,{isLoading:$,isOpen:n,onClose:Y,onUpdateUser:function(e){return function(e){F(!0),E.sendUserInfo(e).then((function(){Y(),V(e)})).catch((function(e){return console.log(e)})).finally((function(){return F(!1)}))}(e)}}),o.a.createElement(k,{isLoading:$,isOpen:s,onClose:Y,onUpdateCard:function(e){return function(e){F(!0),E.postNewCard(e).then((function(e){H([e].concat(Object(i.a)(M))),Y()})).catch((function(e){return console.log(e)})).finally((function(){return F(!1)}))}(e)}}),o.a.createElement(N,{isOpen:w,onClose:Y,onSubmit:function(){E.deleteCard(Q._id).then((function(){H(M.filter((function(e){return e._id!==Q._id})))})).catch((function(e){return console.log(e)}))}}),o.a.createElement(C,{isLoading:$,isOpen:g,onClose:Y,onUpdateAvatar:function(e){return function(e){F(!0),E.changeAvatar(e).then((function(){Y(),V({name:P.name,about:P.about,avatar:e})})).catch((function(e){return console.log(e)})).finally((function(){return F(!1)}))}(e)}}),o.a.createElement(f,{card:A,onClose:Y}),o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/header-logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.3a202967.chunk.js.map