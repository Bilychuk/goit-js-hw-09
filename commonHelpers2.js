import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.querySelector('input[name="email"]'),s=t.querySelector('textarea[name="message"]'),m="feedback-form-state",n=localStorage.getItem(m);if(n){const{email:a,message:e}=JSON.parse(n);o.value=a||"",s.value=e||""}t.addEventListener("input",l);function l(a){const e=o.value.trim(),r=s.value.trim();localStorage.setItem(m,JSON.stringify({email:e,message:r}))}t.addEventListener("submit",c);function c(a){if(a.preventDefault(),!o.value||!s.value)return;localStorage.removeItem(m);const e={email:o.value,message:s.value};console.log(e),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map