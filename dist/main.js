!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const r=new Date,o=document.querySelector(".date-today"),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var u=()=>{o.innerHTML=`${c[r.getDay()]}, ${r.getDate()} ${i[r.getMonth()]}`};const a=document.querySelector(".city-name"),l=document.querySelector(".city-info"),m=document.querySelector(".condition"),s=document.querySelectorAll(".temp-unit"),d=document.querySelector(".min-temp"),y=document.querySelector(".max-temp"),p=document.querySelector(".curr-temp"),f=document.querySelector(".text-condition"),g=document.querySelector(".humidity"),b=document.querySelector(".temp-feel");var S=(e,t)=>{a.innerHTML=`${e.name}, ${e.sys.country}`,m.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,p.innerHTML=Number(e.main.temp),d.innerHTML=Number(e.main.temp_min),y.innerHTML=Number(e.main.temp_max),f.innerHTML=e.weather[0].description,g.innerHTML=e.main.humidity,b.innerHTML=Number(e.main.feels_like),[l].forEach(e=>{e.classList.contains("unactive")?e.classList.toggle("unactive"):(e.classList.toggle("unactive"),window.setTimeout(()=>{e.classList.toggle("unactive")},500))}),(e=>{"metric"===e?s.forEach(e=>{e.innerHTML="°C"}):s.forEach(e=>{e.innerHTML="°F"})})(t),u()};const h=document.querySelector(".gif-image");var M=async e=>{const t=e.replace(/\s/gi,"+"),n=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=c9znHGogNj5Me5WjLdSCHgrxtXObyuOO&s=${t}`,{mode:"cors"}),r=await n.json();h.setAttribute("src",r.data.images.original.url)};const v=document.querySelector(".no-city");var q=async(e,t)=>{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=cbf4a4769da6bbf794164c449e463b35&units=${t}`),r=await n.json();"404"===r.cod?v.innerHTML="Oops, seems like the city does not exist.":(v.innerHTML="",S(r,t),M(r.weather[0].description))};const L=document.querySelector("form"),T=document.querySelector("#city-input"),w=document.querySelector("#metric");(()=>{let e,t;L.onsubmit=()=>(e=T.value,T.value="",t=w.checked?"metric":"imperial",q(e,t),!1)})()}]);