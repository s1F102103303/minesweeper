(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5722:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7294),i=e(9163);function a(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,t)}(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){l=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(l)throw i}}}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var l=["blue","green","red","purple","brown","orange","yellow","pink"],u=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["height:800px;background-color:#4796fd;"]),f=i.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["position:absolute;top:50%;left:50%;width:400px;height:400px;margin:0;margin-right:-50%;background:yellow;background-color:white;transform:translate(-50%,-50%);"]),p=i.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-2"})(["position:relative;top:15px;width:50px;height:50px;margin:auto;background-color:#ffcd8c;border:solid 2px;border-radius:50%;"]),s=i.ZP.div.withConfig({displayName:"pages__RightEye",componentId:"sc-eccczk-3"})(["position:relative;top:13px;left:9px;width:11px;height:11px;background-color:black;border-radius:50%;"]),d=i.ZP.div.withConfig({displayName:"pages__LeftEye",componentId:"sc-eccczk-4"})(["position:relative;top:2px;left:26px;width:11px;height:11px;background-color:black;border-radius:50%;"]),h=i.ZP.div.withConfig({displayName:"pages__FaceMouth",componentId:"sc-eccczk-5"})(["position:relative;top:8px;left:13px;width:20px;height:10px;border:solid 2px black;border-top:0;border-radius:0 0 100px 100px;"]),g=i.ZP.div.withConfig({displayName:"pages__BlockArea",componentId:"sc-eccczk-6"})(["position:relative;top:30px;width:306px;height:306px;margin:auto;background-color:gray;"]),x=i.ZP.div.withConfig({displayName:"pages__Block",componentId:"sc-eccczk-7"})(["float:left;width:34px;height:34px;font-size:30px;font-weight:bold;line-height:30px;color:",";text-align:center;vertical-align:baseline;background:",";border:solid 1px black;"],(function(n){return n.num>=1&&n.num<=8?l[n.num-1]:"black"}),(function(n){return n.isOpen?"white":"gray"})),v=i.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-8"})(["float:left;width:34px;height:34px;font-size:25px;line-height:30px;color:red;text-align:center;vertical-align:baseline;background:white;border:solid 1px black;"]);t.default=function(){var n=(0,o.useState)([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),t=n[0],e=n[1],i=(0,o.useState)(0),c=i[0],l=i[1];(0,o.useEffect)((function(){var n=setInterval((function(){l((function(n){return n+1}))}),1e3);return function(){return clearInterval(n)}}),[]);for(var y=[],m=0,b=function(){var n=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());y.some((function(e){return e==={x:n,y:t}}))||y.some((function(e){return e.x===n&&e.y===t}))||(y.push({x:n,y:t}),m++)};m<10;)b();console.log(y);var w=(0,o.useState)(y),k=w[0];w[1];return(0,r.jsx)(u,{children:(0,r.jsxs)(f,{children:[(0,r.jsxs)(p,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(d,{}),(0,r.jsx)(h,{})]}),(0,r.jsxs)("div",{children:["count=",c]}),(0,r.jsx)(g,{children:t.map((function(n,o){return n.map((function(n,i){return 10===n?(0,r.jsx)(v,{children:"\u25cf"},"".concat(i,"-").concat(o)):(0,r.jsx)(x,{isOpen:n<9,num:n,onClick:function(){return function(n,r){console.log(n,r);for(var o=function(n,t){for(var e=0,r=0;r<k.length;r++)for(var o=0,i=[n+1,n,n-1];o<i.length;o++)for(var a=i[o],c=0,l=[t+1,t,t-1];c<l.length;c++){var u=l[c];a==n&&u==t||k[r].x===a&&k[r].y===u&&(e+=1)}return e},i=function(n,t){for(var e=[],r=0,o=[n+1,n,n-1];r<o.length;r++)for(var i=o[r],a=0,c=[t+1,t,t-1];a<c.length;a++){var l=c[a];0<=i&&i<9&&0<=l&&l<9&&{x:n,y:t}!=={x:i,y:l}&&e.push({x:i,y:l})}return e},c=JSON.parse(JSON.stringify(t)),l=!1,u=0,f=0;f<k.length;f++)for(var p=0,s=[n+1,n,n-1];p<s.length;p++)for(var d=s[p],h=0,g=[r+1,r,r-1];h<g.length;h++){var x=g[h];d==n&&x==r||k[f].x===d&&k[f].y===x&&((l=!0)&&(u+=1),l=!1)}for(var v=0;v<k.length;v++)k[v].x===n&&k[v].y===r&&(l=!0);if(0===u){var y,m=0,b=i(n,r),w=a(b);try{for(w.s();!(y=w.n()).done;){var _=y.value;if(m=o(_.x,_.y),c[_.y][_.x]=m,0===m){var N,C=a(i(_.x,_.y));try{var I=function(){var n=N.value;b.some((function(t){return t.x===n.x&&t.y===n.y}))||b.push({x:n.x,y:n.y})};for(C.s();!(N=C.n()).done;)I()}catch(j){C.e(j)}finally{C.f()}}}}catch(j){w.e(j)}finally{w.f()}}c[r][n]=l?10:u,e(c)}(i,o)},children:n>0&&n<9&&n},"".concat(i,"-").concat(o))}))}))})]})})}},5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5722)}])}},function(n){n.O(0,[163,774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);