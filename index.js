import{a as S,S as v,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const P=15;async function p(s,t){const e="https://pixabay.com",c="/api/",r=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:t}),o=`${e}${c}?${r}`;return(await S.get(o)).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more-btn"),$=new v(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const t=s.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" />
                <ul class="desc-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${e.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${e.views}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${e.comments}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}function q(){m.innerHTML=""}function w(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}function b(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}const R=document.querySelector(".form"),B=document.querySelector(".load-more-btn"),f=document.querySelector(".gallery-item");let n=1,h="",i=0;R.addEventListener("submit",async s=>{s.preventDefault(),u();const t=s.target.elements["search-text"].value.trim();if(!t){a.info({message:"Please type something to start searching.",position:"topRight"});return}t!==h&&(n=1,h=t,i=0),q(),w();try{const e=await p(t,n);if(d(),n===1&&e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(L(e.hits),i+=e.hits.length,i>=e.totalHits){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u();return}n+=1,b()}catch{d(),a.error({title:"Error",message:"Something went wrong. Please try again."})}});B.addEventListener("click",async s=>{w(),u();try{const t=await p(h,n);if(d(),L(t.hits),f){const e=f.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}if(i+=t.hits.length,i>=t.totalHits){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u();return}n+=1,b()}catch{d(),a.error({title:"Error",message:"Something went wrong. Please try again."})}});
//# sourceMappingURL=index.js.map
