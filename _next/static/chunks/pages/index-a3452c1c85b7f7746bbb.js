(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,o,r){"use strict";r.r(o);var t=r(7294),n=r(9163),i=r(5893);function a(e,o){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,o){if(!e)return;if("string"===typeof e)return c(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,o)}(e))||o&&e&&"number"===typeof e.length){r&&(e=r);var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){d=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(d)throw i}}}}function c(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=e[r];return t}var d="img/minesweeper.png",p=n.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["height:800px;background-color:#549cfb;"]),l=n.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["position:absolute;top:50%;left:50%;width:430px;height:488px;margin:0;margin-right:-50%;background:yellow;background-color:#e3e3e3;transform:translate(-50%,-50%);border-top:solid 5px #ffffff;border-left:solid 5px #ffffff;border-right:solid 5px #3e3e3e;border-bottom:solid 5px #3e3e3e;"]),f=n.ZP.div.withConfig({displayName:"pages__AboveBlock",componentId:"sc-eccczk-2"})(["position:relative;top:10px;width:378px;height:77px;margin:auto;background-color:#b0b0b0;border-top:solid 5px #3e3e3e;border-left:solid 5px #3e3e3e;border-right:solid 5px #ffffff;border-bottom:solid 5px #ffffff;"]),s=n.ZP.div.withConfig({displayName:"pages__NumBombsBlock",componentId:"sc-eccczk-3"})(["position:absolute;top:8px;right:250px;width:100px;height:50px;margin:auto;background-color:#1b1b1b;color:red;font-size:43px;text-align:center;border-top:solid 2px #d4d4d4;border-left:solid 2px #d4d4d4;border-right:solid 2px #3e3e3e;border-bottom:solid 2px #3e3e3e;"]),u=n.ZP.div.withConfig({displayName:"pages__TimerBlock",componentId:"sc-eccczk-4"})(["position:absolute;top:8px;right:25px;width:100px;height:50px;margin:auto;background-color:#1b1b1b;color:red;font-size:43px;text-align:center;border-top:solid 2px #d4d4d4;border-left:solid 2px #d4d4d4;border-right:solid 2px #3e3e3e;border-bottom:solid 2px #3e3e3e;"]),x=n.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-5"})(["position:relative;top:8px;width:50px;height:50px;margin:auto;background-color:#b0b0b0;background-image:url(",");background-size:525px;background-position:",";border:solid 5px;border-color:#d4d4d4 #3e3e3e #3e3e3e #d4d4d4;"],d,(function(e){return 21===e.face?"39px 0px;":22===e.face?"76px 0px;":"113px 0px;"})),b=n.ZP.div.withConfig({displayName:"pages__AroundBlockArea",componentId:"sc-eccczk-6"})(["position:absolute;top:95px;right:20px;width:378px;height:378px;margin:auto;background-color:#b0b0b0;border-top:solid 5px #3e3e3e;border-left:solid 5px #3e3e3e;border-right:solid 5px #ffffff;border-bottom:solid 5px #ffffff;"]),g=n.ZP.div.withConfig({displayName:"pages__BlockArea",componentId:"sc-eccczk-7"})(["position:relative;top:0px;width:369px;height:369px;margin:auto;background-color:#b0b0b0;"]),h=n.ZP.div.withConfig({displayName:"pages__Block",componentId:"sc-eccczk-8"})(["float:left;width:41px;height:41px;line-height:30px;vertical-align:baseline;background-image:url(",");background-size:500px;background-position:","px 0px;background-repeat:no-repeat;border-top:",";border-left:",";border-right:",";border-bottom:",";"],d,(function(e){return-36*(e.num-1)}),(function(e){return e.isOpen?"solid 1px #272424":"solid 3px #d4d4d4"}),(function(e){return e.isOpen?"solid 1px #707070":"solid 3px #d4d4d4"}),(function(e){return e.isOpen?"solid 1px #707070":"solid 3px #3e3e3e"}),(function(e){return e.isOpen?"solid 1px #707070":"solid 3px #3e3e3e"})),m=n.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-9"})(["float:left;width:41px;height:41px;line-height:30px;vertical-align:baseline;background:#e5e5e5;background-image:url(",");background-size:515px;background-position:-366px 1px;background-color:#b0b0b0;border:solid 1px #707070;"],d);o.default=function(){var e=[],o=(0,t.useState)(e),r=o[0],n=o[1],c=(0,t.useState)(!1),d=c[0],v=c[1],y=(0,t.useState)(!1),k=y[0],w=y[1],_=(0,t.useState)(!1),N=_[0],C=_[1],z=(0,t.useState)(0),I=z[0],S=z[1],j=(0,t.useState)([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),P=j[0],O=j[1],A=(0,t.useState)(0),B=A[0],Z=A[1];(0,t.useEffect)((function(){if(!d&&N&&!k){var e=setInterval((function(){Z((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[N,d,k]);return(0,i.jsx)(p,{children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(f,{children:[(0,i.jsxs)(s,{children:["0",10]}),(0,i.jsx)(x,{face:d?21:k?22:23,onClick:function(){return O([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),n(e),C(!1),v(!1),w(!1),S(0),void Z(0)}}),(0,i.jsx)(u,{children:B})]}),(0,i.jsx)(b,{children:(0,i.jsx)(g,{children:P.map((function(e,o){return e.map((function(e,t){return 10===e?(0,i.jsx)(m,{},"".concat(t,"-").concat(o)):(0,i.jsx)(h,{isOpen:e<9,num:1<=e&&e<=8?e:20,onClick:function(){return function(e,o){var t=function(e,o,r){for(var t=0,n=0;n<r.length;n++)for(var i=0,a=[e+1,e,e-1];i<a.length;i++)for(var c=a[i],d=0,p=[o+1,o,o-1];d<p.length;d++){var l=p[d];c==e&&l==o||r[n].x===c&&r[n].y===l&&(t+=1)}return t},i=function(e,o){for(var r=[],t=0,n=[e+1,e,e-1];t<n.length;t++)for(var i=n[t],a=0,c=[o+1,o,o-1];a<c.length;a++){var d=c[a];0<=i&&i<9&&0<=d&&d<9&&{x:e,y:o}!=={x:i,y:d}&&r.push({x:i,y:d})}return r},c=JSON.parse(JSON.stringify(P));if(C(!0),!d&&!k&&9===c[o][e]){var p,l=r;if(0===l.length){var f,s=a(function(e){for(var o=[],r=0,t=function(){var e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());o.some((function(o){return o==={x:e,y:t}}))||o.some((function(o){return o.x===e&&o.y===t}))||(o.push({x:e,y:t}),r++)};r<e;)t();return o}(10));try{for(s.s();!(f=s.n()).done;){var u=f.value;l.push({x:u.x,y:u.y})}}catch(E){s.e(E)}finally{s.f()}n(l)}for(var x=!1,b=0;b<l.length;b++)l[b].x===e&&l[b].y===o&&(x=!0);if(x){v(!0);var g,h=a(l);try{for(h.s();!(g=h.n()).done;){var m=g.value;c[m.y][m.x]=10}}catch(E){h.e(E)}finally{h.f()}}if(!x)if(p=t(e,o,l),c[o][e]=p,S((function(e){return e+1})),0===p){var y,_=0,N=i(e,o),z=a(N);try{for(z.s();!(y=z.n()).done;){var j=y.value;if(_=t(j.x,j.y,l),9===c[j.y][j.x]&&(c[j.y][j.x]=_,console.log({y:j.y,x:j.x}),S((function(e){return e+1}))),0===_){var A,B=a(i(j.x,j.y));try{var Z=function(){var e=A.value;N.some((function(o){return o.x===e.x&&o.y===e.y}))||N.push({x:e.x,y:e.y})};for(B.s();!(A=B.n()).done;)Z()}catch(E){B.e(E)}finally{B.f()}}}}catch(E){z.e(E)}finally{z.f()}}console.log(I),70===I&&w(!0),O(c)}}(t,o)}},"".concat(t,"-").concat(o))}))}))})})]})})}},5301:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return o=5301,e(e.s=o);var o}));var o=e.O();_N_E=o}]);