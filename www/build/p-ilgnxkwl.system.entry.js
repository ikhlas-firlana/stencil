var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i["throw"](e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(a,s)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d8c81702.system.js","./p-92e7b94f.system.js","./p-2294249a.system.js","./p-2445f09c.system.js","./p-8ef8f356.system.js"],(function(e){"use strict";var t,n,i,r,o,a,s,u,c,l,d,f,p,h,m;return{setters:[function(e){t=e.r;n=e.c;i=e.f;r=e.d;o=e.h;a=e.H;s=e.e},function(e){u=e.B;c=e.p;l=e.a;d=e.d;f=e.e},function(e){p=e.g},function(e){h=e.c},function(e){m=e.s}],execute:function(){var y=function(e){var t=h();var n=h();var i=h();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.3);i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])};var v=function(e){var t=h();var n=h();var i=h();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.3,0);i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])};var g=function(e){var t=h();var n=h();var i=h();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]);return t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])};var b=function(e){var t=h();var n=h();var i=h();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0);i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])};var w=e("ion_loading",function(){function e(e){var r=this;t(this,e);this.presented=false;this.mode=n(this);this.keyboardClose=true;this.duration=0;this.backdropDismiss=false;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){r.dismiss(undefined,u)};c(this.el);this.didPresent=i(this,"ionLoadingDidPresent",7);this.willPresent=i(this,"ionLoadingWillPresent",7);this.willDismiss=i(this,"ionLoadingWillDismiss",7);this.didDismiss=i(this,"ionLoadingDidDismiss",7)}e.prototype.componentWillLoad=function(){if(this.spinner===undefined){var e=n(this);this.spinner=r.get("loadingSpinner",r.get("spinner",e==="ios"?"lines":"crescent"))}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,l(this,"loadingEnter",y,g,undefined)];case 1:t.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return e.dismiss()}),this.duration+10)}return[2]}}))}))};e.prototype.dismiss=function(e,t){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return d(this,e,t,"loadingLeave",v,b)};e.prototype.onDidDismiss=function(){return f(this.el,"ionLoadingDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"ionLoadingWillDismiss")};e.prototype.render=function(){var e;var t=this,i=t.message,r=t.spinner;var s=n(this);return o(a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign({},p(this.cssClass),(e={},e[s]=true,e["loading-translucent"]=this.translucent,e))},o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{class:"loading-wrapper",role:"dialog"},r&&o("div",{class:"loading-spinner"},o("ion-spinner",{name:r})),i&&o("div",{class:"loading-content",innerHTML:m(i)})))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:true,configurable:true});return e}())}}}));