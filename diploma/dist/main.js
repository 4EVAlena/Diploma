!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelectorAll("input");e.forEach(e=>{e.addEventListener("input",e=>{(e=>{const t=e.getAttribute("placeholder");"+7(___)___-__-__"===t?e.value=e.value.replace(/[^\+0-9]+$/,""):"Ваше имя"===t||"Введите свой вопрос"===t?e.value=e.value.replace(/[^А-Яа-я\s.,]/g,""):e.matches("#distance")&&(e.value=e.value.replace(/[^0-9\.,]+$/,""))})(e.target)})})};var o=()=>{const e=document.getElementById("accordion-two"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".collapse");t.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.nextElementSibling.classList.contains("collapse")&&(n.forEach(e=>{e.style.display="none"}),e.nextElementSibling.style.display="block")})})};var c=()=>{const e=document.querySelector(".constructor"),t=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".collapse"),l=e.querySelectorAll(".construct-btn"),o=e.querySelectorAll(".title-text")[1],c=e.querySelectorAll(".select-box")[2],r=e.querySelectorAll(".select-box")[3],s=document.getElementById("accordion"),a=document.getElementById("calc-result"),d=s.querySelectorAll("select"),u=s.querySelectorAll(".select-box"),i=s.querySelectorAll(".title-text");let y={oneVariant:1e4,twoVariant:15e3,firstSelectValue:1,secondSelectValue:1,thirdSelectValue:1,fourthSelectValue:1,dopValue:1e3},p=y.oneVariant,m=y.dopValue;o.style.display="none",c.style.display="none",r.style.display="none";const f=()=>{a.value=p*y.firstSelectValue*y.secondSelectValue*y.thirdSelectValue*y.fourthSelectValue+m};s.addEventListener("change",e=>{let t=e.target;"myonoffswitch"===t.id&&(t.checked?(p=y.oneVariant,m=1e3,u.forEach((e,t)=>{2!==t&&3!==t||(e.style.display="none")}),i.forEach((e,t)=>{1===t&&(e.style.display="none")}),f()):(p=y.twoVariant,m=2e3,u.forEach((e,t)=>{2!==t&&3!==t||(e.style.display="inline-block")}),i.forEach((e,t)=>{1===t&&(e.style.display="inline-block")}),f())),"myonoffswitch-two"===t.id&&(m=t.checked&&document.getElementById("myonoffswitch").checked?1e3:t.checked&&!document.getElementById("myonoffswitch").checked?2e3:0,f()),t===d[0]&&(y.firstSelectValue=+t.value,f()),t===d[1]&&(y.secondSelectValue=+t.value,f()),t===d[2]&&(y.thirdSelectValue=+t.value,f()),t===d[3]&&(y.fourthSelectValue=+t.value,f())}),f(),t.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.nextElementSibling.classList.contains("collapse")&&(n.forEach(e=>{e.style.display="none"}),e.nextElementSibling.style.display="block")})}),l.forEach(e=>{e.classList.contains("call-btn")||e.addEventListener("click",t=>{t.preventDefault();const l=document.querySelector(e.getAttribute("href"));n.forEach(e=>{e.style.display="none"}),l.style.display="block"})})};var r=()=>{const e=document.querySelector(".add-sentence-btn"),t=(document.querySelector(".sentence"),document.querySelectorAll(".row > div"));e.addEventListener("click",n=>{t.forEach(e=>{e.classList.remove("visible-sm-block"),e.classList.remove("hidden")}),e.style.display="none"})};var s=()=>{document.querySelectorAll("form, div").forEach(e=>{let t=null;document.addEventListener("mouseover",n=>{if(n.preventDefault(),t)return;let l=n.target.closest(".button");l&&e.contains(l)&&(t=l,t.style.background="#90c406",t.style.fontSize="1.7rem",t.style.fontWeight="bold",t.style.border="2px solid #7ec14d",t.style.padding="1.5rem 0rem",t.style.boxSizing="content-box")}),document.addEventListener("mouseout",e=>{if(e.preventDefault(),!t)return;let n=e.relatedTarget;for(;n;){if(n===t)return;n=n.parentNode}t.style.background="",t.style.fontSize="",t.style.fontWeight="",t.style.border="",t.style.padding="",t.style.boxSizing="",t=null})})};var a=()=>{const e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount");e.forEach(e=>{e.addEventListener("click",n=>{n.target===e?(event.preventDefault(),t.style.display="block"):t.style.display="none"})}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})};var d=()=>{const e=document.querySelector(".director-btn"),t=document.querySelector(".popup-consultation");e.addEventListener("click",n=>{n.target==e?(event.preventDefault(),t.style.display="block"):t.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})};var u=()=>{const e=document.querySelector(".check-btn"),t=document.querySelector(".popup-check");e.addEventListener("click",n=>{n.target===e?(event.preventDefault(),t.style.display="block"):t.style.display="none"}),t.addEventListener("click",e=>{let n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"),n||(t.style.display="none"))})};var i=()=>{const e=document.querySelectorAll("input"),t=document.createElement("div");t.style.cssText="font-size: 2rem; color: #19b5fe",document.addEventListener("submit",n=>{let l=n.target;n.preventDefault(),l.appendChild(t),t.textContent="Загрузка...";const o=new FormData(l),c={};o.forEach((e,t)=>{c[t]=e}),"calcFormBlock"===l.id&&(document.getElementById("myonoffswitch").checked?c["Однокамерный септик"]=document.getElementById("myonoffswitch").value:c["Двухкамерный септик"]=document.getElementById("myonoffswitch").value),"calcFormBlock"===l.id&&(document.getElementById("myonoffswitch").checked?(document.getElementById("select-one")&&(c["Диаметр первого септика"]=document.getElementById("select-one").querySelector("option").textContent),document.getElementById("select-two")&&(c["Количество колец первого септика"]=document.getElementById("select-two").querySelector("option").textContent)):(document.getElementById("select-one")&&(c["Диаметр первого септика"]=document.getElementById("select-one").querySelector("option").textContent),document.getElementById("select-two")&&(c["Количество колец первого септика"]=document.getElementById("select-two").querySelector("option").textContent),document.getElementById("select-three")&&(c["Диаметр второго септика"]=document.getElementById("select-three").querySelector("option").textContent),document.getElementById("select-four")&&(c["Количество колец второго септика"]=document.getElementById("select-four").querySelector("option").textContent))),"calcFormBlock"===l.id&&(document.getElementById("myonoffswitch-two".checked)?c["Днище колодца необходимо"]=document.getElementById("myonoffswitch-two").value:c["Днище колодца отсутствует"]=document.getElementById("myonoffswitch-two").value),"calcFormBlock"===l.id&&(c["расстояние до дома"]=document.getElementById("collapseFour").querySelector("input").value),"consultDirectorBlock"===l.id&&(c["Вопрос-консультация у директора"]=document.querySelector(".director-form").querySelector("input").value);(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(c).then(e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с Вами свяжемся!"}).catch(e=>{t.textContent="Что-то пошло не так...",console.error(e)}).finally(()=>{setTimeout(()=>{e.forEach(e=>e.value=""),t.innerText=""},5e3)})})};(()=>{const e=document.querySelector(".popup-call"),t=document.querySelectorAll(".call-btn"),n=document.querySelector(".popup-content");t.forEach(t=>{t.addEventListener("click",()=>{if(event.preventDefault(),e.style.display="block",screen.width>768){const e=Date.now(),t=()=>{const l=requestAnimationFrame(t),o=Date.now()-e;if(o>=800)return void cancelAnimationFrame(l);let c=+getComputedStyle(n).width.split("px")[0];c=-c/5.5+40+"px",n.style.left=o/15+"%",n.style.marginLeft=c};t()}})}),e.addEventListener("click",t=>{let n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".popup-content"),n||(e.style.display="none"))})})(),l(),o(),c(),r(),s(),a(),d(),u(),r(),i()}]);