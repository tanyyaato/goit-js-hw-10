import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),c=s.elements.delay,l=document.querySelectorAll('input[name="state"]');s.addEventListener("submit",m);function m(i){i.preventDefault();const e=c.value,n=Array.from(l).find(o=>o.checked);new Promise((o,r)=>{setTimeout(()=>{n.value==="fulfilled"?o():r()},e)}).then(()=>{t.show({message:`Fulfilled promise in ${e}ms`,color:"green",position:"topRight"})}).catch(()=>{t.show({message:`Rejected promise in ${e}ms`,color:"red",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map