(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-toggle-btn"),c=document.querySelectorAll(".nav__link"),o=c=>{t.classList.contains("active")&&(e.classList.remove("menu-open"),t.classList.remove("active"))};c.forEach((e=>e.addEventListener("click",o))),t.addEventListener("click",(c=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("menu-open"),t.classList.toggle("active");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(c=>{c.matches&&(e.classList.remove("menu-open"),t.setAttribute("aria-expanded",!1),t.classList.remove("active"),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.87c22c6f.js.map