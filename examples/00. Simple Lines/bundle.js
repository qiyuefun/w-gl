!function(){"use strict";var e=function(e){!function(e){if(!e)throw new Error("Eventify cannot use falsy object as events subject");for(var t=["on","fire","off"],n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw new Error("Subject cannot be eventified, since it already has property '"+t[n]+"'")}(e);var t=function(e){var t=Object.create(null);return{on:function(n,r,o){if("function"!=typeof r)throw new Error("callback is expected to be a function");var i=t[n];return i||(i=t[n]=[]),i.push({callback:r,ctx:o}),e},off:function(n,r){if(void 0===n)return t=Object.create(null),e;if(t[n])if("function"!=typeof r)delete t[n];else for(var o=t[n],i=0;i<o.length;++i)o[i].callback===r&&o.splice(i,1);return e},fire:function(n){var r,o=t[n];if(!o)return e;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var i=0;i<o.length;++i){var a=o[i];a.callback.apply(a.ctx,r)}return e}}}(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};var t="undefined"!=typeof Float32Array?Float32Array:Array;function n(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function r(e,t,n){var r=t[0],o=t[1],i=t[2],a=t[3],s=t[4],c=t[5],u=t[6],l=t[7],f=t[8],h=t[9],d=t[10],m=t[11],v=t[12],p=t[13],g=t[14],w=t[15],y=n[0],b=n[1],x=n[2],C=n[3];return e[0]=y*r+b*s+x*f+C*v,e[1]=y*o+b*c+x*h+C*p,e[2]=y*i+b*u+x*d+C*g,e[3]=y*a+b*l+x*m+C*w,y=n[4],b=n[5],x=n[6],C=n[7],e[4]=y*r+b*s+x*f+C*v,e[5]=y*o+b*c+x*h+C*p,e[6]=y*i+b*u+x*d+C*g,e[7]=y*a+b*l+x*m+C*w,y=n[8],b=n[9],x=n[10],C=n[11],e[8]=y*r+b*s+x*f+C*v,e[9]=y*o+b*c+x*h+C*p,e[10]=y*i+b*u+x*d+C*g,e[11]=y*a+b*l+x*m+C*w,y=n[12],b=n[13],x=n[14],C=n[15],e[12]=y*r+b*s+x*f+C*v,e[13]=y*o+b*c+x*h+C*p,e[14]=y*i+b*u+x*d+C*g,e[15]=y*a+b*l+x*m+C*w,e}function o(e,t,n){var r=t[0],o=t[1],i=t[2],a=t[3];return e[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*a,e[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*a,e[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*a,e[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*a,e}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var i,a;i=new t(4),t!=Float32Array&&(i[0]=0,i[1]=0,i[2]=0,i[3]=0),a=i;class s{constructor(){this.children=[],this.model=n(),this.worldModel=n(),this.worldTransformNeedsUpdate=!0,this.type="Element",this.scene=null}appendChild(e,t){e.parent=this,t?this.children.unshift(e):this.children.push(e),e.bindScene&&e.bindScene(this.scene),this.scene&&this.scene.renderFrame()}bindScene(e){this.scene=e}traverse(e,t){e(this);for(var n=0;n<this.children.length;++n){this.children[n].traverse(e,t)}t&&t(this)}rotate(e,t){return function(e,t,n,r){var o,i,a,s,c,u,l,f,h,d,m,v,p,g,w,y,b,x,C,E,A,S,T,M,L=r[0],F=r[1],P=r[2],B=Math.hypot(L,F,P);B<1e-6||(L*=B=1/B,F*=B,P*=B,o=Math.sin(n),a=1-(i=Math.cos(n)),s=t[0],c=t[1],u=t[2],l=t[3],f=t[4],h=t[5],d=t[6],m=t[7],v=t[8],p=t[9],g=t[10],w=t[11],y=L*L*a+i,b=F*L*a+P*o,x=P*L*a-F*o,C=L*F*a-P*o,E=F*F*a+i,A=P*F*a+L*o,S=L*P*a+F*o,T=F*P*a-L*o,M=P*P*a+i,e[0]=s*y+f*b+v*x,e[1]=c*y+h*b+p*x,e[2]=u*y+d*b+g*x,e[3]=l*y+m*b+w*x,e[4]=s*C+f*E+v*A,e[5]=c*C+h*E+p*A,e[6]=u*C+d*E+g*A,e[7]=l*C+m*E+w*A,e[8]=s*S+f*T+v*M,e[9]=c*S+h*T+p*M,e[10]=u*S+d*T+g*M,e[11]=l*S+m*T+w*M,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]))}(this.model,this.model,e,t),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}rotateX(e){return function(e,t,n){var r=Math.sin(n),o=Math.cos(n),i=t[4],a=t[5],s=t[6],c=t[7],u=t[8],l=t[9],f=t[10],h=t[11];t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=i*o+u*r,e[5]=a*o+l*r,e[6]=s*o+f*r,e[7]=c*o+h*r,e[8]=u*o-i*r,e[9]=l*o-a*r,e[10]=f*o-s*r,e[11]=h*o-c*r}(this.model,this.model,e),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}rotateY(e){return function(e,t,n){var r=Math.sin(n),o=Math.cos(n),i=t[0],a=t[1],s=t[2],c=t[3],u=t[8],l=t[9],f=t[10],h=t[11];t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*o-u*r,e[1]=a*o-l*r,e[2]=s*o-f*r,e[3]=c*o-h*r,e[8]=i*r+u*o,e[9]=a*r+l*o,e[10]=s*r+f*o,e[11]=c*r+h*o}(this.model,this.model,e),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}rotateZ(e){return function(e,t,n){var r=Math.sin(n),o=Math.cos(n),i=t[0],a=t[1],s=t[2],c=t[3],u=t[4],l=t[5],f=t[6],h=t[7];t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*o+u*r,e[1]=a*o+l*r,e[2]=s*o+f*r,e[3]=c*o+h*r,e[4]=u*o-i*r,e[5]=l*o-a*r,e[6]=f*o-s*r,e[7]=h*o-c*r}(this.model,this.model,e),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}scale(e){return function(e,t,n){var r=n[0],o=n[1],i=n[2];e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]}(this.model,this.model,e),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}translate(e){return function(e,t,n){var r,o,i,a,s,c,u,l,f,h,d,m,v=n[0],p=n[1],g=n[2];t===e?(e[12]=t[0]*v+t[4]*p+t[8]*g+t[12],e[13]=t[1]*v+t[5]*p+t[9]*g+t[13],e[14]=t[2]*v+t[6]*p+t[10]*g+t[14],e[15]=t[3]*v+t[7]*p+t[11]*g+t[15]):(r=t[0],o=t[1],i=t[2],a=t[3],s=t[4],c=t[5],u=t[6],l=t[7],f=t[8],h=t[9],d=t[10],m=t[11],e[0]=r,e[1]=o,e[2]=i,e[3]=a,e[4]=s,e[5]=c,e[6]=u,e[7]=l,e[8]=f,e[9]=h,e[10]=d,e[11]=m,e[12]=r*v+s*p+f*g+t[12],e[13]=o*v+c*p+h*g+t[13],e[14]=i*v+u*p+d*g+t[14],e[15]=a*v+l*p+m*g+t[15])}(this.model,this.model,e),this.worldTransformNeedsUpdate=!0,this.scene&&this.scene.renderFrame(),this}removeChild(e){let t=this.children.indexOf(e);t>-1&&this.children.splice(t,1),this.scene&&this.scene.renderFrame()}updateWorldTransform(e){(this.worldTransformNeedsUpdate||e)&&(this.parent?r(this.worldModel,this.parent.worldModel,this.model):function(e,t){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]}(this.worldModel,this.model),this.worldTransformNeedsUpdate=!1,e=!0);let t=e;for(var n=this.children,o=0;o<n.length;o++)t=n[o].updateWorldTransform(e)||t;return t}draw(e,t){for(var n=0;n<this.children.length;++n){this.children[n].draw(e,t)}}dispose(){for(var e=0;e<this.children.length;++e){this.children[e].dispose()}}}var c=300,u=25;var l=d,f=d,h=function(e,t,n){e.removeEventListener("wheel",t,n)};function d(e,t,n){e.addEventListener("wheel",t,n)}l.addWheelListener=f,l.removeWheelListener=h;var m="function"==typeof Float32Array;function v(e,t){return 1-3*t+3*e}function p(e,t){return 3*t-6*e}function g(e){return 3*e}function w(e,t,n){return((v(t,n)*e+p(t,n))*e+g(t))*e}function y(e,t,n){return 3*v(t,n)*e*e+2*p(t,n)*e+g(t)}function b(e){return e}var x=function(e,t,n,r){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===r)return b;for(var o=m?new Float32Array(11):new Array(11),i=0;i<11;++i)o[i]=w(.1*i,e,n);function a(t){for(var r=0,i=1;10!==i&&o[i]<=t;++i)r+=.1;--i;var a=r+.1*((t-o[i])/(o[i+1]-o[i])),s=y(a,e,n);return s>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var i=y(t,n,r);if(0===i)return t;t-=(w(t,n,r)-e)/i}return t}(t,a,e,n):0===s?a:function(e,t,n,r,o){var i,a,s=0;do{(i=w(a=t+(n-t)/2,r,o)-e)>0?n=a:t=a}while(Math.abs(i)>1e-7&&++s<10);return a}(t,r,r+.1,e,n)}return function(e){return 0===e?0:1===e?1:w(a(e),t,r)}},C={ease:x(.25,.1,.25,1),easeIn:x(.42,0,1,1),easeOut:x(0,0,.58,1),easeInOut:x(.42,0,.58,1),linear:x(0,0,1,1)},E=function(e,t,n){var r=Object.create(null),o=Object.create(null),i="function"==typeof(n=n||{}).easing?n.easing:C[n.easing];i||(n.easing&&console.warn("Unknown easing function in amator: "+n.easing),i=C.ease);var a="function"==typeof n.step?n.step:T,s="function"==typeof n.done?n.done:T,c=function(e){if(!e){return"undefined"!=typeof window&&window.requestAnimationFrame?{next:window.requestAnimationFrame.bind(window),cancel:window.cancelAnimationFrame.bind(window)}:{next:function(e){return setTimeout(e,1e3/60)},cancel:function(e){return clearTimeout(e)}}}if("function"!=typeof e.next)throw new Error("Scheduler is supposed to have next(cb) function");if("function"!=typeof e.cancel)throw new Error("Scheduler is supposed to have cancel(handle) function");return e}(n.scheduler),u=Object.keys(t);u.forEach((function(n){r[n]=e[n],o[n]=t[n]-e[n]}));var l,f="number"==typeof n.duration?n.duration:400,h=Math.max(1,.06*f),d=0;return l=c.next((function t(){var n=i(d/h);d+=1,function(t){u.forEach((function(n){e[n]=o[n]*t+r[n]}))}(n),d<=h?(l=c.next(t),a(e)):(l=0,setTimeout((function(){s(e)}),0))})),{cancel:function(){c.cancel(l),l=0}}},A=M,S=M();function T(){}function M(){var e=new Set,t=new Set,n=0;return{next:r,cancel:r,clearAll:function(){e.clear(),t.clear(),cancelAnimationFrame(n),n=0}};function r(e){t.add(e),n||(n=requestAnimationFrame(o))}function o(){n=0;var r=t;t=e,(e=r).forEach((function(e){e()})),e.clear()}}E.makeAggregateRaf=A,E.sharedScheduler=S;var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F=function(e,t,n){"object"!=typeof n&&(n={});var r,o,i,a,s,c,u,l,f,h,d="number"==typeof n.minVelocity?n.minVelocity:5,m="number"==typeof n.amplitude?n.amplitude:.25,v="function"==typeof n.cancelAnimationFrame?n.cancelAnimationFrame:"function"==typeof L.cancelAnimationFrame?L.cancelAnimationFrame:clearTimeout,p="function"==typeof n.requestAnimationFrame?n.requestAnimationFrame:"function"==typeof L.requestAnimationFrame?L.requestAnimationFrame:function(e){return setTimeout(e,16)};return{start:function(){r=e(),c=f=a=u=0,o=new Date,v(i),v(h),i=p(g)},stop:function(){v(i),v(h);var t=e();s=t.x,l=t.y,o=Date.now(),(a<-d||a>d)&&(s+=c=m*a);(u<-d||u>d)&&(l+=f=m*u);h=p(w)},cancel:function(){v(i),v(h)}};function g(){var t=Date.now(),n=t-o;o=t;var s=e(),c=s.x-r.x,l=s.y-r.y;r=s;var f=1e3/(1+n);a=.8*c*f+.2*a,u=.8*l*f+.2*u,i=p(g)}function w(){var e=Date.now()-o,n=!1,r=0,i=0;c&&((r=-c*Math.exp(-e/342))>.5||r<-.5?n=!0:r=c=0),f&&((i=-f*Math.exp(-e/342))>.5||i<-.5?n=!0:i=f=0),n&&(t(s+r,l+i),h=p(w))}};var P=function(e){if(e)return{capture:R,release:R};var t,n,r,o=!1;return{capture:function(e){o=!0,n=window.document.onselectstart,r=window.document.ondragstart,window.document.onselectstart=B,(t=e).ondragstart=B},release:function(){if(!o)return;o=!1,window.document.onselectstart=n,t&&(t.ondragstart=r)}}};function B(e){return e.stopPropagation(),!1}function R(){}var _=function(){this.x=0,this.y=0,this.scale=1};var D=function(e,t){if(!(e instanceof SVGElement))throw new Error("svg element is required for svg.panzoom to work");var n=e.ownerSVGElement;if(!n)throw new Error("Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element");t.disableKeyboardInteraction||n.setAttribute("tabindex",0);return{getBBox:function(){var t=e.getBBox();return{left:t.x,top:t.y,width:t.width,height:t.height}},getScreenCTM:function(){var e=n.getCTM();if(!e)return n.getScreenCTM();return e},getOwner:function(){return n},applyTransform:function(t){e.setAttribute("transform","matrix("+t.scale+" 0 0 "+t.scale+" "+t.x+" "+t.y+")")},initTransform:function(t){var r=e.getCTM();t.x=r.e,t.y=r.f,t.scale=r.a,n.removeAttributeNS(null,"viewBox")}}};var O=function(e,t){if(!(e instanceof HTMLElement))throw new Error("svg element is required for svg.panzoom to work");var n=e.parentElement;if(!n)throw new Error("Do not apply panzoom to the detached DOM element. ");e.scrollTop=0,t.disableKeyboardInteraction||n.setAttribute("tabindex",0);return{getBBox:function(){return{left:0,top:0,width:e.clientWidth,height:e.clientHeight}},getOwner:function(){return n},applyTransform:function(t){e.style.transformOrigin="0 0 0",e.style.transform="matrix("+t.scale+", 0, 0, "+t.scale+", "+t.x+", "+t.y+")"}}};var N=P(),z=P(!0),k=U;function U(t,n){var r=(n=n||{}).controller;if(r||(t instanceof SVGElement&&(r=D(t,n)),t instanceof HTMLElement&&(r=O(t,n))),!r)throw new Error("Cannot create panzoom for the current type of dom element");var o=r.getOwner(),i={x:0,y:0},a=!1,s=new _;r.initTransform&&r.initTransform(s);var c,u="function"==typeof n.filterKey?n.filterKey:q,f="number"==typeof n.pinchSpeed?n.pinchSpeed:1,h=n.bounds,d="number"==typeof n.maxZoom?n.maxZoom:Number.POSITIVE_INFINITY,m="number"==typeof n.minZoom?n.minZoom:0,v="number"==typeof n.boundsPadding?n.boundsPadding:.05,p="number"==typeof n.zoomDoubleClickSpeed?n.zoomDoubleClickSpeed:1.75,g=n.beforeWheel||q,w=n.beforeMouseDown||q,y="number"==typeof n.zoomSpeed?n.zoomSpeed:1,b=V(n.transformOrigin),x=n.enableTextSelection?z:N;!function(e){var t=typeof e;if("undefined"===t||"boolean"===t)return;if(!(j(e.left)&&j(e.top)&&j(e.bottom)&&j(e.right)))throw new Error("Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}")}(h),n.autocenter&&function(){var e,t,n=0,i=0,a=G();if(a)n=a.left,i=a.top,e=a.right-a.left,t=a.bottom-a.top;else{var c=o.getBoundingClientRect();e=c.width,t=c.height}var u=r.getBBox();if(0===u.width||0===u.height)return;var l=t/u.height,f=e/u.width,h=Math.min(f,l);s.x=-(u.left+u.width/2)*h+e/2+n,s.y=-(u.top+u.height/2)*h+t/2+i,s.scale=h}();var C,A,S,T,M,L,P,B=0,R=!1,k=!1;T="smoothScroll"in n&&!n.smoothScroll?{start:q,stop:q,cancel:q}:F((function(){return{x:s.x,y:s.y}}),(function(e,t){be(),W(e,t)}),n.smoothScroll);var U=!1;ee();var I={dispose:function(){te()},moveBy:Q,moveTo:W,centerOn:function(e){var t=e.ownerSVGElement;if(!t)throw new Error("ui element is required to be within the scene");var n=e.getBoundingClientRect(),r=n.left+n.width/2,o=n.top+n.height/2,i=t.getBoundingClientRect(),a=i.width/2-r,s=i.height/2-o;Q(a,s,!0)},zoomTo:ye,zoomAbs:J,smoothZoom:ge,smoothZoomAbs:function(e,t,n){var r={scale:s.scale},o={scale:n};T.cancel(),be(),L=E(r,o,{step:function(n){J(e,t,n.scale)}})},showRectangle:function(e){var t=o.getBoundingClientRect(),n=Z(t.width,t.height),r=e.right-e.left,i=e.bottom-e.top;if(!Number.isFinite(r)||!Number.isFinite(i))throw new Error("Invalid rectangle");var a=n.x/r,c=n.y/i,u=Math.min(a,c);s.x=-(e.left+r/2)*u+n.x/2,s.y=-(e.top+i/2)*u+n.y/2,s.scale=u},pause:function(){te(),U=!0},resume:function(){U&&(ee(),U=!1)},isPaused:function(){return U},getTransform:function(){return s},getMinZoom:function(){return m},setMinZoom:function(e){m=e},getMaxZoom:function(){return d},setMaxZoom:function(e){d=e},getTransformOrigin:function(){return b},setTransformOrigin:function(e){b=V(e)},getZoomSpeed:function(){return y},setZoomSpeed:function(e){if(!Number.isFinite(e))throw new Error("Zoom speed should be a number");y=e}};return e(I),I;function Z(e,t){if(r.getScreenCTM){var n=r.getScreenCTM(),o=n.a,a=n.d,s=n.e,c=n.f;i.x=e*o-s,i.y=t*a-c}else i.x=e,i.y=t;return i}function W(e,t){s.x=e,s.y=t,X(),Se("pan"),K()}function H(e,t){W(s.x+e,s.y+t)}function X(){var e=G();if(e){var t,n,o,i,a=!1,c=(t=r.getBBox(),o=t.left,i=t.top,{left:(n={x:o*s.scale+s.x,y:i*s.scale+s.y}).x,top:n.y,right:t.width*s.scale+n.x,bottom:t.height*s.scale+n.y}),u=e.left-c.right;return u>0&&(s.x+=u,a=!0),(u=e.right-c.left)<0&&(s.x+=u,a=!0),(u=e.top-c.bottom)>0&&(s.y+=u,a=!0),(u=e.bottom-c.top)<0&&(s.y+=u,a=!0),a}}function G(){if(h){if("boolean"==typeof h){var e=o.getBoundingClientRect(),t=e.width,n=e.height;return{left:t*v,top:n*v,right:t*(1-v),bottom:n*(1-v)}}return h}}function K(){a=!0,c=window.requestAnimationFrame(ne)}function $(e,t,n){if(Y(e)||Y(t)||Y(n))throw new Error("zoom requires valid numbers");var r=s.scale*n;if(r<m){if(s.scale===m)return;n=m/s.scale}if(r>d){if(s.scale===d)return;n=d/s.scale}var o=Z(e,t);(s.x=o.x-n*(o.x-s.x),s.y=o.y-n*(o.y-s.y),h&&1===v&&1===m)?(s.scale*=n,X()):X()||(s.scale*=n);Se("zoom"),K()}function J(e,t,n){$(e,t,n/s.scale)}function Q(e,t,n){if(!n)return H(e,t);M&&M.cancel();var r=0,o=0;M=E({x:0,y:0},{x:e,y:t},{step:function(e){H(e.x-r,e.y-o),r=e.x,o=e.y}})}function ee(){o.addEventListener("mousedown",le,{passive:!1}),o.addEventListener("dblclick",ue,{passive:!1}),o.addEventListener("touchstart",oe,{passive:!1}),o.addEventListener("keydown",re,{passive:!1}),l.addWheelListener(o,ve,{passive:!1}),K()}function te(){l.removeWheelListener(o,ve),o.removeEventListener("mousedown",le),o.removeEventListener("keydown",re),o.removeEventListener("dblclick",ue),o.removeEventListener("touchstart",oe),c&&(window.cancelAnimationFrame(c),c=0),T.cancel(),de(),me(),x.release(),Ee()}function ne(){a&&(a=!1,r.applyTransform(s),Se("transform"),c=0)}function re(e){var t=0,n=0,r=0;if(38===e.keyCode?n=1:40===e.keyCode?n=-1:37===e.keyCode?t=1:39===e.keyCode?t=-1:189===e.keyCode||109===e.keyCode?r=1:187!==e.keyCode&&107!==e.keyCode||(r=-1),!u(e,t,n,r)){if(t||n){e.preventDefault(),e.stopPropagation();var i=o.getBoundingClientRect();Q(.05*(a=Math.min(i.width,i.height))*t,.05*a*n)}if(r){var a,s=xe(100*r);ye((a=b?we():{x:(c=o.getBoundingClientRect()).width/2,y:c.height/2}).x,a.y,s)}var c}}function oe(e){if(function(e){if(n.onTouch&&!n.onTouch(e))return;e.stopPropagation(),e.preventDefault()}(e),1===e.touches.length)return function(e){var t=pe(e.touches[0]);C=t.x,A=t.y,T.cancel(),ie()}(e,e.touches[0]);2===e.touches.length&&(S=ce(e.touches[0],e.touches[1]),P=!0,ie())}function ie(){R||(R=!0,document.addEventListener("touchmove",ae),document.addEventListener("touchend",se),document.addEventListener("touchcancel",se))}function ae(e){if(1===e.touches.length){e.stopPropagation();var t=Z((l=pe(e.touches[0])).x,l.y),n=t.x-C,r=t.y-A;0!==n&&0!==r&&Ce(),C=t.x,A=t.y,Q(n,r)}else if(2===e.touches.length){P=!0;var o=e.touches[0],i=e.touches[1],a=ce(o,i),s=1+(a/S-1)*f,c=pe(o),u=pe(i);if(C=(c.x+u.x)/2,A=(c.y+u.y)/2,b){var l=we();C=l.x,A=l.y}ye(C,A,s),S=a,e.stopPropagation(),e.preventDefault()}}function se(e){if(e.touches.length>0){var t=pe(e.touches[0]);C=t.x,A=t.y}else{var n=new Date;if(n-B<300)if(b)ge((t=we()).x,t.y,p);else ge(C,A,p);B=n,R=!1,Ee(),me()}}function ce(e,t){var n=e.clientX-t.clientX,r=e.clientY-t.clientY;return Math.sqrt(n*n+r*r)}function ue(e){!function(e){n.onDoubleClick&&!n.onDoubleClick(e)||(e.preventDefault(),e.stopPropagation())}(e);var t=pe(e);b&&(t=we()),ge(t.x,t.y,p)}function le(e){if(!w(e)){if(R)return e.stopPropagation(),!1;if(1===e.button&&null!==window.event||0===e.button){T.cancel();var t=pe(e),n=Z(t.x,t.y);return C=n.x,A=n.y,document.addEventListener("mousemove",fe),document.addEventListener("mouseup",he),x.capture(e.target||e.srcElement),!1}}}function fe(e){if(!R){Ce();var t=pe(e),n=Z(t.x,t.y),r=n.x-C,o=n.y-A;C=n.x,A=n.y,Q(r,o)}}function he(){x.release(),Ee(),de()}function de(){document.removeEventListener("mousemove",fe),document.removeEventListener("mouseup",he),k=!1}function me(){document.removeEventListener("touchmove",ae),document.removeEventListener("touchend",se),document.removeEventListener("touchcancel",se),k=!1,P=!1}function ve(e){if(!g(e)){T.cancel();var t=e.deltaY;e.deltaMode>0&&(t*=100);var n=xe(t);if(1!==n){var r=b?we():pe(e);ye(r.x,r.y,n),e.preventDefault()}}}function pe(e){var t=o.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function ge(e,t,n){var r=s.scale,o={scale:r},i={scale:n*r};T.cancel(),be(),L=E(o,i,{step:function(n){J(e,t,n.scale)},done:Ae})}function we(){var e=o.getBoundingClientRect();return{x:e.width*b.x,y:e.height*b.y}}function ye(e,t,n){return T.cancel(),be(),$(e,t,n)}function be(){L&&(L.cancel(),L=null)}function xe(e){return 1-Math.sign(e)*Math.min(.25,Math.abs(y*e/128))}function Ce(){k||(Se("panstart"),k=!0,T.start())}function Ee(){k&&(P||T.stop(),Se("panend"))}function Ae(){Se("zoomend")}function Se(e){I.fire(e,I)}}function V(e){if(e)return"object"==typeof e?(j(e.x)&&j(e.y)||I(e),e):void I()}function I(e){throw console.error(e),new Error(["Cannot parse transform origin.","Some good examples:",'  "center center" can be achieved with {x: 0.5, y: 0.5}','  "top center" can be achieved with {x: 0.5, y: 0}','  "bottom right" can be achieved with {x: 1, y: 1}'].join("\n"))}function q(){}function j(e){return Number.isFinite(e)}function Y(e){return Number.isNaN?Number.isNaN(e):e!=e}function Z(e,t){var n=function(e,t){var n=1,r=t.fov;return{applyTransform(o){n=1/o.scale;let i=2*Math.tan(r/2)*n;i=t.height/(i*e.getPixelRatio());let a=-o.x/i,s=o.y/i;t.origin[0]=a,t.origin[1]=s,t.origin[2]=n,t.center[0]=a,t.center[1]=s,t.center[2]=0,e.fire("transform",t),function(e,t,n,r){var o,i,a,s,c,u,l,f,h,d,m=t[0],v=t[1],p=t[2],g=r[0],w=r[1],y=r[2],b=n[0],x=n[1],C=n[2];Math.abs(m-b)<1e-6&&Math.abs(v-x)<1e-6&&Math.abs(p-C)<1e-6?function(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}(e):(l=m-b,f=v-x,h=p-C,o=w*(h*=d=1/Math.hypot(l,f,h))-y*(f*=d),i=y*(l*=d)-g*h,a=g*f-w*l,(d=Math.hypot(o,i,a))?(o*=d=1/d,i*=d,a*=d):(o=0,i=0,a=0),s=f*a-h*i,c=h*o-l*a,u=l*i-f*o,(d=Math.hypot(s,c,u))?(s*=d=1/d,c*=d,u*=d):(s=0,c=0,u=0),e[0]=o,e[1]=s,e[2]=l,e[3]=0,e[4]=i,e[5]=c,e[6]=f,e[7]=0,e[8]=a,e[9]=u,e[10]=h,e[11]=0,e[12]=-(o*m+i*v+a*p),e[13]=-(s*m+c*v+u*p),e[14]=-(l*m+f*v+h*p),e[15]=1)}(t.view,t.origin,t.center,[0,1,0]),e.renderFrame()},getOwner:()=>t.canvas,getScreenCTM(){const n=1/e.getPixelRatio();return{a:1,d:1,e:n*t.width/2,f:n*t.height/2}}}}(e,t);let r=t.canvas;r.style.outline="none",r.setAttribute("tabindex",0);const o={dispose:function(){i.dispose()},setViewBox:function(r){const o=(r.left+r.right)/2,a=(r.top+r.bottom)/2,s=e.getPixelRatio(),c=s*Math.max((r.top-r.bottom)/2,(r.right-r.left)/2);let u=t.height/(2*c*s),l=i.getTransform();l.scale=Math.tan(t.fov/2)/c,l.x=-o*u,l.y=a*u,n.applyTransform(l)},getPanzoom:()=>i,setSpeed(e){i.setZoomSpeed(e)}},i=k(r,{controller:n});return o}!function(){if("undefined"!=typeof document){var e=document.getElementsByTagName("script");if(e){for(var t,n=0;n<e.length;++n){var r=e[n];if(r.src&&r.src.match(/\bpanzoom(\.min)?\.js/)){t=r;break}}if(t){var o=t.getAttribute("query");if(o){var i=t.getAttribute("name")||"pz",a=Date.now();!function e(){var n=document.querySelector(o);if(!n){return Date.now()-a<2e3?void setTimeout(e,100):void console.error("Cannot find the panzoom element",i)}var r=function(e){for(var t=e.attributes,n={},r=0;r<t.length;++r){var o=s(t[r]);o&&(n[o.name]=o.value)}return n}(t);console.log(r),window[i]=U(n,r)}()}}}}function s(e){if(e.name&&("p"===e.name[0]&&"z"===e.name[1]&&"-"===e.name[2]))return{name:e.name.substr(3),value:JSON.parse(e.value)}}}();const W={compile:function(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(r));return r},link:function(e,t,n){var r=e.createProgram();if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(r));return r},getLocations:function(e,t){return{attributes:H(e,t),uniforms:X(e,t)}},getAttributes:H,getUniforms:X,initBuffer:function(e,t,n,r){var o=e.createBuffer();if(!o)throw new Error("Failed to create a buffer");e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.vertexAttribPointer(r,n,e.FLOAT,!1,0,0),e.enableVertexAttribArray(r)}};function H(e,t){for(var n=Object.create(null),r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),o=0;o<r;++o){var i=e.getActiveAttrib(t,o).name;n[i]=e.getAttribLocation(t,i)}return n}function X(e,t){for(var n=Object.create(null),r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),o=0;o<r;++o){var i=e.getActiveUniform(t,o).name;n[i]=e.getUniformLocation(t,i)}return n}var G={getVSCode:function(e){let t=[];return e.forEach(e=>{e.globals&&t.push(e.globals())}),t.push("void main() {"),e.forEach(e=>{e.mainBody&&t.push(e.mainBody())}),t.push("}"),t.join("\n")}};class K{constructor(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a=void 0===r?1:r}}var $={globals:()=>"\nattribute vec3 aPosition;\nuniform mat4 uCamera;\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform vec3 uOrigin;\n",mainBody:()=>"\n  // Translate screen coordinates to webgl space\n  mat4 modelView = uView * uModel;\n  vec4 mvPosition = modelView * vec4( aPosition, 1.0 );\n\n  vec4 glPos = uCamera * mvPosition;\n  gl_Position = glPos;\n"};G.getVSCode([$]);let J=function(){let e=new Map;return{get:function(t){if(!t)return;let n,r=e;for(let e=0;e<t.length;++e){let o=t[e];if(n=r.get(o),!n)return;r=n}return n},set:function(t,n){let r=e;for(let e=0;e<t.length-1;++e){let n=t[e],o=r.get(n);o||(o=new Map,r.set(n,o)),r=o}r.set(t[t.length-1],n)},remove:function(t){let n=e;for(let e=0;e<t.length-1;++e){let r=t[e],o=n.get(r);if(!o)return;n=o}n.delete(t[t.length-1])}}}();function Q(e,t){let n=!!t.allowColors,r=[n,e],o=J.get(r);if(!o){const{lineFSSrc:t,lineVSSrc:s}=function(e){return{lineVSSrc:G.getVSCode([{globals:()=>`\n  attribute vec3 aPosition;\n  varying vec4 vColor;\n  ${e?"attribute vec4 aColor;":""}\n  uniform vec4 uColor;\n  uniform mat4 uCamera;\n  uniform mat4 uModel;\n  uniform mat4 uView;\n`,mainBody:()=>`\n  gl_Position = uCamera * uView * uModel * vec4(aPosition, 1.0);\n  vColor = ${e?"aColor.abgr":"uColor"};\n`}]),lineFSSrc:"precision mediump float;\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = vColor;\n}\n"}}(n);var i=W.compile(e,e.VERTEX_SHADER,s),a=W.compile(e,e.FRAGMENT_SHADER,t);o=W.link(e,i,a),J.set(r,o)}let s=W.getLocations(e,o),c=e.createBuffer(),u=t.is3D?3:2,l=4*(u+1),f=4*u;return{draw:function(r){if(0===t.count)return;let i=t.buffer;e.useProgram(o),e.uniformMatrix4fv(s.uniforms.uModel,!1,t.worldModel),e.uniformMatrix4fv(s.uniforms.uCamera,!1,r.camera),e.uniformMatrix4fv(s.uniforms.uView,!1,r.view),e.uniform3fv(s.uniforms.uOrigin,r.origin);var a=t.color;e.uniform4f(s.uniforms.uColor,a.r,a.g,a.b,a.a),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(s.attributes.aPosition),n?(e.vertexAttribPointer(s.attributes.aPosition,u,e.FLOAT,!1,l,0),e.enableVertexAttribArray(s.attributes.aColor),e.vertexAttribPointer(s.attributes.aColor,4,e.UNSIGNED_BYTE,!0,l,f)):e.vertexAttribPointer(s.attributes.aPosition,u,e.FLOAT,!1,4*u,0);e.drawArrays(e.LINES,0,2*t.count)},dispose:function(){e.deleteBuffer(c),e.deleteProgram(o),J.remove(r)}}}class ee{constructor(e,t){this.offset=t,this._wire=e,this.update=e.is3D?this.update3D:this.update2D}update2D(e,t){var n=this._wire.positions,r=this.offset;n[r+0]=e.x,n[r+1]=e.y,r+=2;var o=this._wire.allowColors;o&&(void 0!==e.color&&(this._wire.colors[r]=e.color),r+=1),n[r+0]=t.x,n[r+1]=t.y,o&&t.color&&(this._wire.colors[r+2]=t.color)}update3D(e,t){var n=this._wire.positions,r=this.offset;n[r+0]=e.x,n[r+1]=e.y,n[r+2]=e.z||0,r+=3;var o=this._wire.allowColors;o&&(void 0!==e.color&&(this._wire.colors[r]=e.color),r+=1),n[r+0]=t.x,n[r+1]=t.y,n[r+2]=t.z||0,o&&t.color&&(this._wire.colors[r+3]=t.color)}}let te=function(t,i){var a,l;i||(i={});var f=i.devicePixelRatio||window.devicePixelRatio,h=i.wglContext,d=t.getContext("webgl",h)||t.getContext("experimental-webgl",h);d.enable(d.BLEND),d.blendFuncSeparate(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA,d.ONE,d.ONE_MINUS_SRC_ALPHA),d.clearColor(0,0,0,1),d.clear(d.COLOR_BUFFER_BIT);var m=0,v=new s,p=n(),g=n(),w=void 0===i.fov?Math.PI/6:i.fov,y=void 0===i.near?.01:i.near,b=void 0===i.far?1/0:i.far,x={width:window.innerWidth,height:window.innerHeight,canvas:t,camera:g,view:p,fov:w,center:[0,0,0],origin:new Float32Array(3)};T();var C=e({appendChild:function(e,t){v.appendChild(e,t)},getSceneCoordinate:F,getClientCoordinate:function(e,t,i=0){var s=r(n(),g,p);r(s,s,v.model);var c=o([],[e,t,i,1],s),u=C.getPixelRatio(),f=a*(c[0]/c[3]+1)*.5/u,h=l*(1-.5*(c[1]/c[3]+1))/u;return{x:f,y:h}},getTransform:function(){return v.model},getRoot:function(){return v},getGL:function(){return d},removeChild:function(e){v.removeChild(e)},setViewBox:function(e){E.setViewBox(e)},setClearColor:function(e,t,n,r){d.clearColor(e,t,n,r)},getClearColor:function(){return d.getParameter(d.COLOR_CLEAR_VALUE)},clear:function(){d.clear(d.COLOR_BUFFER_BIT)},dispose:function(){t.removeEventListener("mousemove",L),A&&A();window.removeEventListener("resize",S,!0),E.dispose(),v.dispose(),m&&(cancelAnimationFrame(m),m=0)},renderFrame:P,getPixelRatio:function(){return f},setPixelRatio:function(e){f=e,T()},getCamera:function(){return E},setCamera:function(e){E&&E.dispose();E=e(C,x)},getDrawContext:function(){return x}});v.bindScene(C);let E=(i.camera||Z)(C,x);var A;return function(){t.addEventListener("mousemove",L),A=function(e,t,n){var r,o=new Date;return e.addEventListener("click",s,{passive:!1}),e.addEventListener("touchend",a,{passive:!1}),e.addEventListener("touchstart",i,{passive:!1}),function(){e.removeEventListener("click",s),e.removeEventListener("touchend",a),e.removeEventListener("touchstart",i)};function i(e){1===e.touches.length&&(o=new Date,r={x:e.touches[0].pageX,y:e.touches[0].pageY})}function a(e){if(e.touches.length>1)return;if(new Date-o>c)return;let t=e.changedTouches[0];var n=t.pageX-r.x,i=t.pageY-r.y;n*n+i*i<u&&s(t)}function s(e){t.call(n,e)}}(t,M,this),window.addEventListener("resize",S,!0)}(),P(),C;function S(){T()}function T(){i.size?(a=t.width=i.size.width,l=t.height=i.size.height):(a=t.width=t.offsetWidth*f,l=t.height=t.offsetHeight*f),d.viewport(0,0,a,l),x.width=a,x.height=l,v.worldTransformNeedsUpdate=!0,function(e,t,n,r,o){var i,a=1/Math.tan(t/2);e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=o&&o!==1/0?(i=1/(r-o),e[10]=(o+r)*i,e[14]=2*o*r*i):(e[10]=-1,e[14]=-2*r)}(g,w,a/l,y,b),P()}function M(e){var t=F(e.clientX,e.clientY);t&&C.fire("click",{originalEvent:e,sceneX:t.x,sceneY:t.y})}function L(e){var t=F(e.clientX,e.clientY);t&&C.fire("mousemove",{originalEvent:e,x:t.x,y:t.y,z:t.z})}function F(e,t){var i=C.getPixelRatio();let s=i*e/a*2-1,c=2*(1-i*t/l)-1;var u=r(n(),g,p);r(u,u,v.model);var f=o([],[x.center[0],x.center[1],x.center[2],1],u),h=function(e,t){var n=t[0],r=t[1],o=t[2],i=t[3],a=t[4],s=t[5],c=t[6],u=t[7],l=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],p=t[14],g=t[15],w=n*s-r*a,y=n*c-o*a,b=n*u-i*a,x=r*c-o*s,C=r*u-i*s,E=o*u-i*c,A=l*v-f*m,S=l*p-h*m,T=l*g-d*m,M=f*p-h*v,L=f*g-d*v,F=h*g-d*p,P=w*F-y*L+b*M+x*T-C*S+E*A;return P?(P=1/P,e[0]=(s*F-c*L+u*M)*P,e[1]=(o*L-r*F-i*M)*P,e[2]=(v*E-p*C+g*x)*P,e[3]=(h*C-f*E-d*x)*P,e[4]=(c*T-a*F-u*S)*P,e[5]=(n*F-o*T+i*S)*P,e[6]=(p*b-m*E-g*y)*P,e[7]=(l*E-h*b+d*y)*P,e[8]=(a*L-s*T+u*A)*P,e[9]=(r*T-n*L-i*A)*P,e[10]=(m*C-v*b+g*w)*P,e[11]=(f*b-l*C-d*w)*P,e[12]=(s*S-a*M-c*A)*P,e[13]=(n*M-r*S+o*A)*P,e[14]=(v*y-m*x-p*w)*P,e[15]=(l*x-f*y+h*w)*P,e):null}(n(),u);if(!h)return;const d=o([],[f[3]*s,f[3]*c,f[2],f[3]],h);return{x:d[0]/d[3],y:d[1]/d[3],z:d[2]/d[3]}}function P(e){if(e)return B();m||(m=requestAnimationFrame(B))}function B(){d.clear(d.COLOR_BUFFER_BIT),x.wasDirty=v.updateWorldTransform(),v.draw(d,x),m=0}}(document.querySelector("canvas")),ne=new class extends s{constructor(e,t){super();this.is3D=t&&t.is3D,this.allowColors=t&&t.allowColors,this.itemsPerLine=4,this.is3D&&(this.itemsPerLine+=2),this.allowColors&&(this.itemsPerLine+=2),this.capacity=e,this.count=0,this.color=new K(1,1,1,1),this.type="WireCollection",this._program=null,this.buffer=new ArrayBuffer(e*this.itemsPerLine*4),this.positions=new Float32Array(this.buffer),this.allowColors&&(this.colors=new Uint32Array(this.buffer))}draw(e,t){this._program||(this._program=Q(e,this)),this._program.draw(t)}add(e){if(!e)throw new Error("Line is required");this.count>=this.capacity&&this._extendArray();var t=this.count*this.itemsPerLine;let n=new ee(this,t);return n.update(e.from,e.to),this.count+=1,n}forEachLine(e){const{positions:t,count:n,itemsPerLine:r,allowColors:o}=this;let i=n*r;if(this.is3D)for(let n=0;n<i;n+=r){let r={x:t[n],y:t[n+1],z:t[n+2]},i=n+3;o&&(r.color=this.colors[n+3],i+=1);let a={x:t[i],y:t[i+1],z:t[i+2]};o&&(a.color=this.colors[i+3]),e(r,a)}else for(let n=0;n<i;n+=r){let r={x:t[n],y:t[n+1],z:0},i=n+2;o&&(r.color=this.colors[n+2],i+=1);let a={x:t[i],y:t[i+1],z:0};o&&(a.color=this.colors[i+2]),e(r,a)}}dispose(){this._program&&(this._program.dispose(),this._program=null)}_extendArray(){var e=new ArrayBuffer(2*this.buffer.byteLength),t=new Float32Array(e);this.positions&&t.set(this.positions),this.buffer=e,this.positions=t,this.allowColors&&(this.colors=new Uint32Array(e)),this.capacity*=2}}(22);for(let e=0;e<=10;++e)ne.add({from:{x:0,y:e},to:{x:10,y:e}});for(let e=0;e<=10;++e)ne.add({from:{x:e,y:0},to:{x:e,y:10}});te.appendChild(ne),te.setViewBox({left:-2,top:12,right:12,bottom:2})}();
//# sourceMappingURL=bundle.js.map