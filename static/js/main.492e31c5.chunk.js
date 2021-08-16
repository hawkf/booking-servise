(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),r=t(24),n=t.n(r),i=t(2),l=t(6),o=t(10),d=Object(o.a)(),j="six-cities/changeCity",u="six-cities/setDefaultCityFilter",m="six-cities/changeActiveOfferId",b="data/loadOffers",_="data/changeFavorites",p="user/requiredAuthorization",h="user/logout",O="six-cities/redirectToRoute",f="six-cities/setUserEmail",x="data/setOpenedOffer",v="data/loadComments",g="data/sendComment",N="data/loadOffersNearBy",y="data/setSortType",w=Object(l.b)(j,(function(e){return{payload:e}})),k=Object(l.b)(u),R=Object(l.b)(m,(function(e){return{payload:e}})),S=Object(l.b)(_,(function(e){return{payload:e}})),C=Object(l.b)(b,(function(e){return{payload:e}})),P=Object(l.b)(p,(function(e){return{payload:e}})),q=Object(l.b)(h),I=Object(l.b)(O,(function(e){return{payload:e}})),T=Object(l.b)(f,(function(e){return{payload:e}})),A=Object(l.b)(x,(function(e){return{payload:e}})),E=Object(l.b)(v,(function(e){return{payload:e}})),H=Object(l.b)(g,(function(e){return{payload:e}})),F=Object(l.b)(N,(function(e){return{payload:e}})),L=Object(l.b)(y,(function(e){return{payload:e}})),U=function(e){return function(e){return function(a){return a.type===O&&d.push(a.payload),e(a)}}},M=t(19),z=t(50),D=t.n(z),W=401,B=function(e){var a;return e.headers=Object(M.a)(Object(M.a)({},e.headers),{},{"x-token":null!==(a=localStorage.getItem("token"))&&void 0!==a?a:""}),e},G=t(7),Y=t(4),J=t(0);function K(e){return!1===e?null:Object(J.jsx)("div",{className:"place-card__mark",children:Object(J.jsx)("span",{children:"Premium"})})}var Q=t(3),V=t.n(Q),X=(V.a.shape({id:V.a.string.isRequired,cityName:V.a.string.isRequired,location:V.a.shape({latitude:V.a.number.isRequired,longitude:V.a.number.isRequired}),isFavorite:V.a.bool.isRequired,images:V.a.arrayOf(V.a.string.isRequired),description:V.a.string.isRequired,bedrooms:V.a.number.isRequired,maxAdults:V.a.number.isRequired,goods:V.a.arrayOf(V.a.string.isRequired),host:V.a.shape({avatarUrl:V.a.string.isRequired,id:V.a.string.isRequired,isPro:V.a.bool.isRequired,name:V.a.string.isRequired}),cardImage:V.a.string.isRequired,price:V.a.number.isRequired,rating:V.a.number.isRequired,title:V.a.string.isRequired,type:V.a.string.isRequired,isPremium:V.a.bool.isRequired}),t(33)),Z=t.n(X);function $(e){var a=100*Math.round(e)/5;return"".concat(a,"%")}function ee(e,a){return Z()(a.date).diff(e.date)}function ae(e,a){return a.price-e.price}function te(e,a){return e.price-a.price}function ce(e,a){return a.rating-e.rating}function se(e){return"".concat(Z()(e).format("MMMM YYYY"))}var re=function(e){var a=Object.assign({},e,{id:e.id.toString(),cityName:e.city.name,cityLocation:e.city.location,isFavorite:e.is_favorite,maxAdults:e.max_adults,host:{avatarUrl:e.host.avatar_url,id:e.host.id.toString(),isPro:e.host.is_pro,name:e.host.name},cardImage:e.preview_image,isPremium:e.is_premium,location:e.location});return delete a.city,delete a.is_favorite,delete a.is_premium,delete a.max_adults,delete a.avatar_url,delete a.is_pro,delete a.preview_image,delete a.is_premium,a},ne=t(15),ie="/login",le="/favorites",oe="/",de="/offer/:id",je="/page-not-found",ue=["Paris","Cologne","Brussels","Amsterdam","Hamburg","Dusseldorf"],me="AUTH",be="NO_AUTH",_e="UNKNOWN",pe="/hotels",he="/login",Oe="/logout",fe="/comments/",xe="/favorite",ve={POPULAR:"Popular",PRICE_LOW_TO_HIGH:"Price: low to high",PRICE_HIGH_TO_LOW:"Price: high to low",TOP_RATED_FIRST:"Top rated first"},ge=function(e){return Object.assign({},e,{user:{avatarUrl:e.user.avatar_url,id:e.user.id,isPro:e.user.is_pro,name:e.user.name}})};var Ne=function(e){var a=e.offer,t=e.className,s=Object(c.useState)(a.isFavorite),r=Object(ne.a)(s,2),n=r[0],l=r[1],o=a.id,d=Object(i.b)();return Object(J.jsx)("button",{onClick:function(){var e,a;d((e=o,a=n?0:1,function(t,c,s){s.post("".concat(xe,"/").concat(e,"/").concat(a)).then((function(e){var a=e.data;return t(S(re(a)))})).catch((function(){return t(I(ie))}))})),l(!n)},className:"".concat(t," ").concat(n?"".concat(t,"--active"):""," button"),type:"button",children:e.children})};var ye=function(e){var a=e.offer,t=Object(G.g)(),c="/offer/".concat(a.id),s=a.cardImage,r=a.price,n=a.rating,l=a.title,o=a.type,d=a.isPremium,j=$(n),u=Object(i.b)(),m=function(e){u(R(e))};return Object(J.jsxs)("article",{onMouseOver:function(){m(a.id)},onMouseOut:function(){m(null)},className:"cities__place-card place-card",children:[Object(J.jsx)(K,{isPremium:d}),Object(J.jsx)("div",{className:"cities__image-wrapper place-card__image-wrapper",children:Object(J.jsx)(Y.a,{to:c,children:Object(J.jsx)("img",{className:"place-card__image",src:s,width:"260",height:"200",alt:"Offer"})})}),Object(J.jsxs)("div",{className:"place-card__info",children:[Object(J.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(J.jsxs)("div",{className:"place-card__price",children:[Object(J.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",r]}),Object(J.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(J.jsxs)(Ne,{className:"place-card__bookmark-button",offer:a,children:[Object(J.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(J.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(J.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(J.jsx)("div",{className:"place-card__rating rating",children:Object(J.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(J.jsx)("span",{style:{width:j}}),Object(J.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(J.jsx)("h2",{onClick:function(){t.push(c)},className:"place-card__name",children:Object(J.jsx)(Y.a,{to:c,children:l})}),Object(J.jsx)("p",{className:"place-card__type",children:o})]})]})};function we(e,a){return a.filter((function(a){return a.cityName===e}))}var ke,Re=t(17),Se=t(12),Ce="Paris",Pe={city:Ce,sortType:ve.POPULAR,offers:[],offersNearby:null,openedOffer:null,activeOfferId:null,isDataLoaded:!1},qe=Object(l.c)(Pe,(function(e){e.addCase(w,(function(e,a){e.city=a.payload})).addCase(k,(function(e){e.city=Ce})).addCase(R,(function(e,a){e.activeOfferId=a.payload})).addCase(C,(function(e,a){e.offers=a.payload,e.isDataLoaded=!0})).addCase(A,(function(e,a){e.openedOffer=a.payload})).addCase(F,(function(e,a){e.offersNearby=a.payload})).addCase(S,(function(e,a){var t,c;e.offers[(t=e.offers,c=a.payload.id,t.findIndex((function(e){return e.id===c})))]=a.payload})).addCase(L,(function(e,a){e.sortType=a.payload}))})),Ie={authorizationStatus:_e,userEmail:null},Te=Object(l.c)(Ie,(function(e){e.addCase(P,(function(e,a){e.authorizationStatus=a.payload})).addCase(q,(function(e){e.authorizationStatus=be})).addCase(T,(function(e,a){e.userEmail=a.payload}))})),Ae=Object(l.c)({comments:null,isCommentFormSending:!1},(function(e){e.addCase(H,(function(e,a){e.isCommentFormSending=a.payload})).addCase(E,(function(e,a){e.comments=a.payload}))})),Ee="DATA",He="FORM",Fe="USER",Le=Object(Se.c)((ke={},Object(Re.a)(ke,Ee,qe),Object(Re.a)(ke,He,Ae),Object(Re.a)(ke,Fe,Te),ke)),Ue=t(9),Me=t.n(Ue),ze=function(e){return Me()(e,"".concat(Ee,".city"),null)},De=function(e){return Me()(e,"".concat(Ee,".offers"),[])},We=function(e){return Me()(e,"".concat(Ee,".offersNearby"),[])},Be=function(e){return Me()(e,"".concat(Ee,".openedOffer"),null)},Ge=function(e){return Me()(e,"".concat(Ee,".activeOfferId"),null)},Ye=function(e){return Me()(e,"".concat(Ee,".isDataLoaded"),!1)},Je=function(e){return Me()(e,"".concat(Ee,".sortType"),null)};var Ke=function(){return Object(J.jsxs)("div",{className:"cities__places-container cities__places-container--empty container",children:[Object(J.jsx)("section",{className:"cities__no-places",children:Object(J.jsxs)("div",{className:"cities__status-wrapper tabs__content",children:[Object(J.jsx)("b",{className:"cities__status",children:"No places to stay available"}),Object(J.jsx)("p",{className:"cities__status-description",children:"We could not find any property available at the moment in Dusseldorf"})]})}),Object(J.jsx)("div",{className:"cities__right-section"})]})};var Qe=function(){var e,a=Object(i.c)(De),t=Object(i.c)(ze),c=Object(i.c)(Je);if(null===t)return Object(J.jsx)(Ke,{});switch(c){case ve.PRICE_LOW_TO_HIGH:e=we(t,a).slice().sort(te);break;case ve.PRICE_HIGH_TO_LOW:e=we(t,a).slice().sort(ae);break;case ve.TOP_RATED_FIRST:e=we(t,a).slice().sort(ce);break;default:e=we(t,a)}return Object(J.jsx)("div",{className:"cities__places-list places__list tabs__content",children:e.map((function(e){return Object(J.jsx)(ye,{offer:e},e.id)}))})};function Ve(){return Object(J.jsx)("div",{className:"header__left",children:Object(J.jsx)(Y.a,{className:"header__logo-link header__logo-link--active",to:oe,children:Object(J.jsx)("img",{className:"header__logo",src:"img/logo.svg",alt:"6 cities logo",width:"81",height:"41"})})})}t(118);var Xe=t(16),Ze=t.n(Xe);var $e=function(e,a){var t=Object(c.useState)(null),s=Object(ne.a)(t,2),r=s[0],n=s[1];return Object(c.useEffect)((function(){if(null!==e.current&&null===r){var t=Ze.a.map(e.current,{center:{lat:a.latitude,lng:a.longitude},zoom:a.zoom});Ze.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(t),n(t)}}),[e,r,a]),r};var ea=function(e){var a=e.offers,t=Object(c.useRef)(),s=Object(i.c)(Ge),r=$e(t,a[0].cityLocation),n=Ze.a.icon({iconUrl:"img/pin.svg",iconSize:[30,30],iconAnchor:[15,30]}),l=Ze.a.icon({iconUrl:"img/pin-active.svg",iconSize:[30,30],iconAnchor:[15,30]});return Object(c.useEffect)((function(){var e=Ze.a.layerGroup();return r&&(e.addTo(r),a.forEach((function(a){var t=a.location,c=t.latitude,r=t.longitude,i=a.id;Ze.a.marker({lat:c,lng:r},{icon:s===i?l:n}).addTo(e)})),r.flyTo([a[0].cityLocation.latitude,a[0].cityLocation.longitude],a[0].cityLocation.zoom)),function(){e.clearLayers()}}),[r,a,s,l,n]),Object(J.jsx)("div",{id:"map",ref:t,style:{height:"100%"}})};var aa=function(){var e=Object(i.c)(ze),a=Object(i.b)();return Object(J.jsx)("div",{className:"tabs",children:Object(J.jsx)("section",{className:"locations container",children:Object(J.jsx)("ul",{className:"locations__list tabs__list",children:ue.map((function(t){return Object(J.jsx)("li",{onClick:function(){a(w(t))},className:"locations__item",children:Object(J.jsx)(Y.a,{className:"locations__item-link tabs__item ".concat(t===e?"tabs__item--active":""),to:"#",children:Object(J.jsx)("span",{children:t})},t)},t)}))})})})};var ta=function(){var e=Object(c.useState)(!1),a=Object(ne.a)(e,2),t=a[0],s=a[1],r=Object.keys(ve),n=Object(i.c)(Je),l=Object(i.b)();return Object(J.jsxs)("form",{className:"places__sorting",action:"#",method:"get",children:[Object(J.jsx)("span",{style:{marginRight:"8px"},className:"places__sorting-caption",children:"Sort by"}),Object(J.jsxs)("span",{onClick:function(){s(!t)},className:"places__sorting-type",tabIndex:"0",children:[n,Object(J.jsx)("svg",{className:"places__sorting-arrow",width:"7",height:"4",children:Object(J.jsx)("use",{xlinkHref:"#icon-arrow-select"})})]}),Object(J.jsx)("ul",{className:"places__options places__options--custom ".concat(t?"places__options--opened":""),children:r.map((function(e){return Object(J.jsx)("li",{onClick:function(){return l(L(ve[e])),void s(!t)},className:"places__option",tabIndex:"0",children:ve[e]},ve[e])}))})]})};var ca=function(){var e=Object(i.c)(De),a=Object(i.c)(ze),t=we(a,e),c=1===t.length;return Object(J.jsxs)("b",{className:"places__found",children:["".concat(t.length).concat(c?" place":" places")," to stay in ",a]})},sa=function(e){return Me()(e,"".concat(Fe,".authorizationStatus"),_e)},ra=function(e){return Me()(e,"".concat(Fe,".userEmail"),null)};var na=function(){var e=Object(G.g)(),a=Object(i.c)(sa),t=Object(i.b)();return a===be?Object(J.jsxs)(Y.a,{onClick:function(){e.push(ie)},className:"header__nav-link header__nav-link--profile",to:"#",children:[Object(J.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(J.jsx)("span",{className:"header__login",children:"Sign in"})]}):Object(J.jsx)(Y.a,{onClick:function(){t((function(e,a,t){return t.delete(Oe).then((function(){return localStorage.removeItem("token")})).then((function(){return e(q())})).then((function(){return e(T(null))}))}))},className:"header__nav-link",to:"#",children:Object(J.jsx)("span",{className:"header__signout",children:"Sign out"})})};var ia=function(){var e=Object(i.c)(ra);return null===e?null:Object(J.jsxs)(Y.a,{className:"header__nav-link header__nav-link--profile",to:le,children:[Object(J.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(J.jsx)("span",{className:"header__user-name user__name",children:e})]})};var la=function(){var e=Object(i.c)(De),a=we(Object(i.c)(ze),e),t=0===a.length;return Object(J.jsxs)("div",{className:"page page--gray page--main",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"header__wrapper",children:[Object(J.jsx)(Ve,{}),Object(J.jsx)("nav",{className:"header__nav",children:Object(J.jsxs)("ul",{className:"header__nav-list",children:[Object(J.jsx)("li",{className:"header__nav-item user",children:Object(J.jsx)(ia,{})}),Object(J.jsx)("li",{className:"header__nav-item",children:Object(J.jsx)(na,{})})]})})]})})}),Object(J.jsxs)("main",{className:"page__main page__main--index ".concat(t?"page__main--index-empty":""),children:[Object(J.jsx)("h1",{className:"visually-hidden",children:"Cities"}),Object(J.jsx)(aa,{}),Object(J.jsx)("div",{className:"cities",children:t?Object(J.jsx)(Ke,{}):Object(J.jsxs)("div",{className:"cities__places-container container",children:[Object(J.jsxs)("section",{className:"cities__places places",children:[Object(J.jsx)("h2",{className:"visually-hidden",children:"Places"}),Object(J.jsx)(ca,{}),Object(J.jsx)(ta,{}),Object(J.jsx)(Qe,{})]}),Object(J.jsx)("div",{className:"cities__right-section",children:Object(J.jsx)("section",{className:"cities__map map",children:Object(J.jsx)(ea,{offers:a})})})]})})]})]})},oa=t(36);var da=function(e){var a=e.onRatingChangeHandle,t=e.value,s=e.isCommentFormSending,r=Object(c.useRef)();return Object(c.useEffect)((function(){!1===s&&(r.current.checked=!1)}),[s]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("input",{ref:r,onChange:function(){return a(t)},disabled:!!s||"",className:"form__rating-input visually-hidden",name:"rating",value:t,id:"".concat(t,t>1?"-stars":"-star"),type:"radio"}),Object(J.jsx)("label",{htmlFor:"".concat(t,t>1?"-stars":"-star"),className:"reviews__rating-label form__rating-label",title:"perfect",children:Object(J.jsx)("svg",{className:"form__star-image",width:"37",height:"33",children:Object(J.jsx)("use",{xlinkHref:"#icon-star"})})})]})},ja=function(e){return Me()(e,"".concat(He,".comments"),[])},ua=function(e){return Me()(e,"".concat(He,".isCommentFormSending"),!0)},ma=t(26),ba=t.n(ma);var _a=function(e){var a=e.offerId,t=Object(c.useState)(null),s=Object(ne.a)(t,2),r=s[0],n=s[1],l=Object(c.useState)(""),o=Object(ne.a)(l,2),d=o[0],j=o[1],u=Object(i.c)(ua),m=Object(i.b)(),b=function(e,a,t){m(H(!0)),m(function(e,a,t){return function(c,s,r){return r.post("".concat(fe).concat(a),e).then((function(e){var a=e.data;return c(E(a.map((function(e){return ge(e)}))))})).then((function(){return c(H(!1))})).catch((function(){t(),c(H(!1))}))}}(e,a,t))};function _(e){n(e)}Object(c.useEffect)((function(){!1===u&&(n(null),j(""))}),[u]);var p=!u&&null!==r&&String(d).trim().length>=50&&String(d).trim().length<=300;return Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({comment:d,rating:r},a,(function(){ba()("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f")}))},className:"reviews__form form",action:"#",method:"post",children:[Object(J.jsx)("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),Object(J.jsx)("div",{className:"reviews__rating-form form__rating",children:[5,4,3,2,1].map((function(e){return Object(J.jsx)(da,{isCommentFormSending:u,value:e,onRatingChangeHandle:_},e)}))}),Object(J.jsx)("textarea",{value:d,onChange:function(e){j(e.target.value)},disabled:!!u||"",className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved"}),Object(J.jsxs)("div",{className:"reviews__button-wrapper",children:[Object(J.jsxs)("p",{className:"reviews__help",children:["To submit review please make sure to set ",Object(J.jsx)("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least ",Object(J.jsx)("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),Object(J.jsx)("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!p,children:"Submit"})]})]})};var pa=function(){return Object(J.jsx)("p",{children:"Loading ..."})};V.a.shape({id:V.a.number.isRequired,comment:V.a.string.isRequired,date:V.a.string.isRequired,rating:V.a.number.isRequired,user:V.a.shape({avatarUrl:V.a.string.isRequired,id:V.a.number.isRequired,isPro:V.a.bool.isRequired,name:V.a.string.isRequired})});function ha(e){var a=e.commentItem,t=a.comment,c=a.date,s=a.rating,r=a.user,n=r.avatarUrl,i=r.name,l=$(s);return Object(J.jsxs)("li",{className:"reviews__item",children:[Object(J.jsxs)("div",{className:"reviews__user user",children:[Object(J.jsx)("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:Object(J.jsx)("img",{className:"reviews__avatar user__avatar",src:n,width:"54",height:"54",alt:"Reviews avatar"})}),Object(J.jsx)("span",{className:"reviews__user-name",children:i})]}),Object(J.jsxs)("div",{className:"reviews__info",children:[Object(J.jsx)("div",{className:"reviews__rating rating",children:Object(J.jsxs)("div",{className:"reviews__stars rating__stars",children:[Object(J.jsx)("span",{style:{width:l}}),Object(J.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(J.jsx)("p",{className:"reviews__text",children:t}),Object(J.jsx)("time",{className:"reviews__time",dateTime:c,children:se(c)})]})]})}var Oa=function(){var e=Object(i.c)(ja),a=Object(i.c)(ua),t=Object(i.c)(Be),s=Object(i.b)(),r=function(){ba()("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")},n=function(e,a){s(function(e,a){return function(t,c,s){return s.get("".concat(fe).concat(e)).then((function(e){var a=e.data;return t(E(a.map((function(e){return ge(e)}))))})).catch((function(){return a()}))}}(e,a))};if(Object(c.useEffect)((function(){!1===a&&n(t.id,r)})),null===e)return null;var l=e.slice().sort(ee);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("h2",{className:"reviews__title",children:["Reviews \xb7",Object(J.jsx)("span",{className:"reviews__amount",children:e.length})]}),Object(J.jsx)("ul",{className:"reviews__list",children:l.map((function(e){return Object(J.jsx)(ha,{commentItem:e},e.id)}))})]})};function fa(e){var a=e.offer,t=Object(G.g)(),c="/offer/".concat(a.id),s=a.cardImage,r=a.price,n=a.rating,i=a.title,l=a.type,o=$(n);return Object(J.jsxs)("article",{className:"near-places__card place-card",children:[Object(J.jsx)("div",{className:"near-places__image-wrapper place-card__image-wrapper",children:Object(J.jsx)(Y.a,{to:c,children:Object(J.jsx)("img",{className:"place-card__image",src:s,width:"260",height:"200",alt:"Place"})})}),Object(J.jsxs)("div",{className:"place-card__info",children:[Object(J.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(J.jsxs)("div",{className:"place-card__price",children:[Object(J.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",r]}),Object(J.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(J.jsxs)(Ne,{className:"place-card__bookmark-button",offer:a,children:[Object(J.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(J.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(J.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(J.jsx)("div",{className:"place-card__rating rating",children:Object(J.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(J.jsx)("span",{style:{width:o}}),Object(J.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(J.jsx)("h2",{onClick:function(){t.push(c)},className:"place-card__name",children:Object(J.jsx)(Y.a,{to:c,children:i})}),Object(J.jsx)("p",{className:"place-card__type",children:l})]})]})}var xa=function(){var e=Object(i.c)(We);return Array.isArray(e)?Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("section",{className:"near-places places",children:[Object(J.jsx)("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),Object(J.jsx)("div",{className:"near-places__list places__list",children:e.map((function(e){return Object(J.jsx)(fa,{offer:e},e.id)}))})]})}):null};var va=function(){var e=Object(G.h)().id,a=Object(i.c)(Be),t=Object(i.c)(sa),s=Object(i.c)(We),r=Object(i.b)();if(Object(c.useEffect)((function(){return r(function(e){return function(a,t,c){return c.get("".concat(pe,"/").concat(e)).then((function(e){var t=e.data;return a(A(re(t)))})).catch((function(){return a(I(je))}))}}(e)),function(e){r(R(e))}(e),r(function(e){return function(a,t,c){return c.get("".concat(pe,"/").concat(e,"/nearby")).then((function(e){var t=e.data;return a(F(t.map((function(e){return re(e)}))))}))}}(e)),function(){r(A(null)),r(E(null))}}),[e,r]),null===a||null===s)return Object(J.jsx)(pa,{});var n=s.concat(a),l=a.images,o=a.description,d=a.bedrooms,j=a.maxAdults,u=a.goods,m=a.host,b=a.price,_=a.rating,p=a.title,h=a.type,O=a.isPremium,f=$(_),x=m.avatarUrl,v=m.isPro,g=m.name,N=t===me;return Object(J.jsxs)("div",{className:"page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"header__wrapper",children:[Object(J.jsx)(Ve,{}),Object(J.jsx)("nav",{className:"header__nav",children:Object(J.jsxs)("ul",{className:"header__nav-list",children:[Object(J.jsx)("li",{className:"header__nav-item user",children:Object(J.jsx)(ia,{})}),Object(J.jsx)("li",{className:"header__nav-item",children:Object(J.jsx)(na,{})})]})})]})})}),Object(J.jsxs)("main",{className:"page__main page__main--property",children:[Object(J.jsxs)("section",{className:"property",children:[Object(J.jsx)("div",{className:"property__gallery-container container",children:Object(J.jsx)("div",{className:"property__gallery",children:l.map((function(e){return Object(J.jsx)("div",{className:"property__image-wrapper",children:Object(J.jsx)("img",{className:"property__image",src:e,alt:"Studio"})},Object(oa.a)())}))})}),Object(J.jsx)("div",{className:"property__container container",children:Object(J.jsxs)("div",{className:"property__wrapper",children:[O&&Object(J.jsx)("div",{className:"property__mark",children:Object(J.jsx)("span",{children:"Premium"})}),Object(J.jsxs)("div",{className:"property__name-wrapper",children:[Object(J.jsx)("h1",{className:"property__name",children:p}),Object(J.jsxs)(Ne,{className:"property__bookmark-button",offer:a,children:[Object(J.jsx)("svg",{className:"property__bookmark-icon",width:"31",height:"33",children:Object(J.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(J.jsx)("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),Object(J.jsxs)("div",{className:"property__rating rating",children:[Object(J.jsxs)("div",{className:"property__stars rating__stars",children:[Object(J.jsx)("span",{style:{width:f}}),Object(J.jsx)("span",{className:"visually-hidden",children:"Rating"})]}),Object(J.jsx)("span",{className:"property__rating-value rating__value",children:_})]}),Object(J.jsxs)("ul",{className:"property__features",children:[Object(J.jsx)("li",{className:"property__feature property__feature--entire",children:h}),Object(J.jsx)("li",{className:"property__feature property__feature--bedrooms",children:"".concat(d,1===d?" Bedroom":" Bedrooms")}),Object(J.jsxs)("li",{className:"property__feature property__feature--adults",children:["Max ","".concat(j,1===j?" adult":" adults")]})]}),Object(J.jsxs)("div",{className:"property__price",children:[Object(J.jsxs)("b",{className:"property__price-value",children:["\u20ac",b]}),Object(J.jsx)("span",{className:"property__price-text",children:"\xa0night"})]}),Object(J.jsxs)("div",{className:"property__inside",children:[Object(J.jsx)("h2",{className:"property__inside-title",children:"What's inside"}),Object(J.jsx)("ul",{className:"property__inside-list",children:u.map((function(e){return Object(J.jsx)("li",{className:"property__inside-item",children:e},Object(oa.a)())}))})]}),Object(J.jsxs)("div",{className:"property__host",children:[Object(J.jsx)("h2",{className:"property__host-title",children:"Meet the host"}),Object(J.jsxs)("div",{className:"property__host-user user",children:[Object(J.jsx)("div",{className:v?"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper":"property__avatar-wrapper user__avatar-wrapper",children:Object(J.jsx)("img",{className:"property__avatar user__avatar",src:x,width:"74",height:"74",alt:"Host avatar"})}),Object(J.jsx)("span",{className:"property__user-name",children:g}),Object(J.jsx)("span",{className:"property__user-status",children:v?"Pro":""})]}),Object(J.jsx)("div",{className:"property__description",children:Object(J.jsx)("p",{className:"property__text",children:o})})]}),Object(J.jsxs)("section",{className:"property__reviews reviews",children:[Object(J.jsx)(Oa,{}),N&&Object(J.jsx)(_a,{offerId:e})]})]})}),Object(J.jsx)("section",{className:"property__map map",children:Object(J.jsx)(ea,{offers:n})})]}),Object(J.jsx)(xa,{})]})]})};var ga=function(){return Object(J.jsxs)("div",{className:"page page--gray page--main",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"header__wrapper",children:[Object(J.jsx)(Ve,{}),Object(J.jsx)("nav",{className:"header__nav",children:Object(J.jsxs)("ul",{className:"header__nav-list",children:[Object(J.jsx)("li",{className:"header__nav-item user",children:Object(J.jsxs)(Y.a,{className:"header__nav-link header__nav-link--profile",to:"#",children:[Object(J.jsx)("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),Object(J.jsx)("span",{className:"header__user-name user__name",children:"Oliver.conner@gmail.com"})]})}),Object(J.jsx)("li",{className:"header__nav-item",children:Object(J.jsx)(Y.a,{className:"header__nav-link",to:"#",children:Object(J.jsx)("span",{className:"header__signout",children:"Sign out"})})})]})})]})})}),Object(J.jsxs)("section",{className:"game__screen",children:[Object(J.jsx)("h1",{children:"404. Page not found"}),Object(J.jsx)("a",{href:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})]})};var Na=function(){return Object(J.jsxs)("section",{className:"favorites favorites--empty",children:[Object(J.jsx)("h1",{className:"visually-hidden",children:"Favorites (empty)"}),Object(J.jsxs)("div",{className:"favorites__status-wrapper",children:[Object(J.jsx)("b",{className:"favorites__status",children:"Nothing yet saved."}),Object(J.jsx)("p",{className:"favorites__status-description",children:"Save properties to narrow down search or plan your future trips."})]})]})};function ya(e){var a=e.offer,t=Object(G.g)(),c=a.cardImage,s=a.price,r=a.rating,n=a.title,i=a.type,l="/offer/".concat(a.id),o=$(r);return Object(J.jsxs)("article",{className:"favorites__card place-card",children:[Object(J.jsx)("div",{className:"favorites__image-wrapper place-card__image-wrapper",children:Object(J.jsx)(Y.a,{to:l,children:Object(J.jsx)("img",{className:"place-card__image",src:c,width:"150",height:"110",alt:"Place"})})}),Object(J.jsxs)("div",{className:"favorites__card-info place-card__info",children:[Object(J.jsxs)("div",{className:"place-card__price-wrapper",children:[Object(J.jsxs)("div",{className:"place-card__price",children:[Object(J.jsxs)("b",{className:"place-card__price-value",children:["\u20ac",s]}),Object(J.jsx)("span",{className:"place-card__price-text",children:"/\xa0night"})]}),Object(J.jsxs)(Ne,{className:"place-card__bookmark-button",offer:a,children:[Object(J.jsx)("svg",{className:"place-card__bookmark-icon",width:"18",height:"19",children:Object(J.jsx)("use",{xlinkHref:"#icon-bookmark"})}),Object(J.jsx)("span",{className:"visually-hidden",children:"In bookmarks"})]})]}),Object(J.jsx)("div",{className:"place-card__rating rating",children:Object(J.jsxs)("div",{className:"place-card__stars rating__stars",children:[Object(J.jsx)("span",{style:{width:o}}),Object(J.jsx)("span",{className:"visually-hidden",children:"Rating"})]})}),Object(J.jsx)("h2",{onClick:function(){t.push(l)},className:"place-card__name",children:Object(J.jsx)(Y.a,{to:l,children:n})}),Object(J.jsx)("p",{className:"place-card__type",children:i})]})]})}function wa(e,a){return a.filter((function(a){return a.cityName===e})).map((function(e){return Object(J.jsx)(ya,{offer:e},e.id)}))}var ka=function(e){var a=e.favoriteOffers,t=Array.from(new Set(a.map((function(e){return e.cityName}))));return Object(J.jsxs)("section",{className:"favorites",children:[Object(J.jsx)("h1",{className:"favorites__title",children:"Saved listing"}),Object(J.jsx)("ul",{className:"favorites__list",children:t.map((function(e){return Object(J.jsxs)("li",{className:"favorites__locations-items",children:[Object(J.jsx)("div",{className:"favorites__locations locations locations--current",children:Object(J.jsx)("div",{className:"locations__item",children:Object(J.jsx)(Y.a,{className:"locations__item-link",to:"#",children:Object(J.jsx)("span",{children:e})})})}),Object(J.jsx)("div",{className:"favorites__places",children:wa(e,a)})]},e)}))})]})};var Ra=function(){var e=Object(i.c)(De).filter((function(e){return e.isFavorite})),a=0===e.length;return Object(J.jsxs)("div",{className:"page",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"header__wrapper",children:[Object(J.jsx)(Ve,{}),Object(J.jsx)("nav",{className:"header__nav",children:Object(J.jsxs)("ul",{className:"header__nav-list",children:[Object(J.jsx)("li",{className:"header__nav-item user",children:Object(J.jsx)(ia,{})}),Object(J.jsx)("li",{className:"header__nav-item",children:Object(J.jsx)(na,{})})]})})]})})}),Object(J.jsx)("main",{className:"page__main page__main--favorites",children:Object(J.jsxs)("div",{className:"page__favorites-container container",children:[a&&Object(J.jsx)(Na,{}),!a&&Object(J.jsx)(ka,{favoriteOffers:e})]})}),Object(J.jsx)("footer",{className:"footer container",children:Object(J.jsx)(Y.a,{className:"footer__logo-link",to:oe,children:Object(J.jsx)("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"})})})]})};var Sa=function(){var e=Object(c.useState)(""),a=Object(ne.a)(e,2),t=a[0],s=a[1],r=Object(c.useRef)(),n=String(t).trim().length>=1,l=Object(i.b)(),o=function(e){l(function(e){var a=e.login,t=e.password;return function(e,c,s){return s.post(he,{email:a,password:t}).then((function(e){var a=e.data;return localStorage.setItem("token",a.token)})).then((function(){return e(P(me))})).then((function(){return e(T(a))})).then((function(){return e(I(oe))}))}}(e))};return Object(J.jsxs)("div",{className:"page page--gray page--login",children:[Object(J.jsx)("header",{className:"header",children:Object(J.jsx)("div",{className:"container",children:Object(J.jsxs)("div",{className:"header__wrapper",children:[Object(J.jsx)(Ve,{}),Object(J.jsx)("nav",{className:"header__nav",children:Object(J.jsx)("ul",{className:"header__nav-list",children:Object(J.jsx)("li",{className:"header__nav-item user",children:Object(J.jsx)(na,{})})})})]})})}),Object(J.jsx)("main",{className:"page__main page__main--login",children:Object(J.jsxs)("div",{className:"page__login-container container",children:[Object(J.jsxs)("section",{className:"login",children:[Object(J.jsx)("h1",{className:"login__title",children:"Sign in"}),Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o({login:r.current.value,password:t})},className:"login__form form",action:"#",method:"post",children:[Object(J.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(J.jsx)("label",{className:"visually-hidden",children:"E-mail"}),Object(J.jsx)("input",{ref:r,className:"login__input form__input",type:"email",name:"email",placeholder:"Email",required:""})]}),Object(J.jsxs)("div",{className:"login__input-wrapper form__input-wrapper",children:[Object(J.jsx)("label",{className:"visually-hidden",children:"Password"}),Object(J.jsx)("input",{value:t,onChange:function(e){s(e.target.value)},className:"login__input form__input",type:"password",name:"password",placeholder:"Password",required:""})]}),Object(J.jsx)("button",{className:"login__submit form__submit button",type:"submit",disabled:!n,children:"Sign in"})]})]}),Object(J.jsx)("section",{className:"locations locations--login locations--current",children:Object(J.jsx)("div",{className:"locations__item",children:Object(J.jsx)(Y.a,{className:"locations__item-link",to:"#",children:Object(J.jsx)("span",{children:"Amsterdam"})})})})]})})]})};var Ca=function(e){var a=e.render,t=e.path,c=e.exact,s=Object(i.c)(sa);return Object(J.jsx)(G.b,{path:t,exact:c,render:function(e){return s===me?a(e):Object(J.jsx)(G.a,{to:ie})}})};var Pa=function(e){var a=e.render,t=e.path,c=e.exact,s=Object(i.c)(sa);return Object(J.jsx)(G.b,{path:t,exact:c,render:function(e){return s===me?Object(J.jsx)(G.a,{to:oe}):a(e)}})};var qa=function(e){var a=Object(i.c)(Ye);return function(e){return e===_e}(Object(i.c)(sa))||!a?Object(J.jsx)(pa,{}):Object(J.jsx)(G.c,{history:d,children:Object(J.jsxs)(G.d,{children:[Object(J.jsx)(G.b,{exact:!0,path:oe,children:Object(J.jsx)(la,{})}),Object(J.jsx)(Pa,{exact:!0,path:ie,render:function(){return Object(J.jsx)(Sa,{})}}),Object(J.jsx)(Ca,{exact:!0,path:le,render:function(){return Object(J.jsx)(Ra,{})}}),Object(J.jsx)(G.b,{exact:!0,path:le,children:Object(J.jsx)(Ra,{})}),Object(J.jsx)(G.b,{exact:!0,path:de,children:Object(J.jsx)(va,Object(M.a)({},e))}),Object(J.jsx)(G.b,{children:Object(J.jsx)(ga,{})})]})})},Ia=function(e){var a=D.a.create({baseURL:"https://7.react.pages.academy/six-cities",timeout:5e3});return a.interceptors.request.use(B),a.interceptors.response.use((function(e){return e}),(function(a){throw a.response.status===W&&e(),a})),a}((function(){return Ta.dispatch(P(be))})),Ta=Object(l.a)({reducer:Le,middleware:function(e){return e({thunk:{extraArgument:Ia}}).concat(U)}});Ta.dispatch((function(e,a,t){return t.get(he).then((function(a){var t=a.data;return e(T(t.email))})).then((function(){return e(P(me))})).catch((function(){}))})),Ta.dispatch((function(e,a,t){return t.get(pe).then((function(a){var t=a.data;return e(C(t.map((function(e){return re(e)}))))}))})),n.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(i.a,{store:Ta,children:Object(J.jsx)(qa,{})})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.492e31c5.chunk.js.map