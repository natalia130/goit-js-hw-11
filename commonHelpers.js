import{i as a,S as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader");d.addEventListener("submit",y);function y(t){t.preventDefault(),u.innerHTML="";const o=t.target.elements.query.value.trim();o===""?a.warning({title:"",message:"Please enter a search query",position:"topCenter"}):(c.classList.remove("visually-hidden"),p(o).then(s=>{c.classList.add("visually-hidden"),s.hits.length>0?h(s):a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(s=>{console.log(s)}),t.target.reset())}function p(t){const o="https://pixabay.com/api/",s="?key=42441384-ae09b834f94a4016fb8b80a97",n=`&q=${t}`,e="&image_type=photo",r="&orientation=horizontal",i="&safesearch=true",f=o+s+n+e+r+i;return fetch(f,{headers:{}}).then(l=>{if(l.ok)return l.json();throw new Error(l.status)})}function g(t){return`<li class="gallery-item">
        <a class="gallery-link"
            href="${t.largeImageURL}">
            <img class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}" />
        </a>
        <div class = "gallery-item-info">
                <ul>Likes<li>${t.likes}</li></ul>
                <ul>Views<li>${t.views}</li></ul>
                <ul>Comments<li>${t.comments}</li></ul>
                <ul>Downloads<li>${t.downloads}</li></ul>
        </div>
    </li>`}function h(t){const o=t.hits.map(g).join("");u.innerHTML=o,L.refresh()}const L=new m(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
