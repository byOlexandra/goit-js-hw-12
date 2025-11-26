import{a as S,S as b,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const h=15;async function f(n,r){const e="https://pixabay.com",i="/api/",t=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:r}),o=`${e}${i}?${t}`;return(await S.get(o)).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),v=new b(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const r=n.map(e=>`
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
        </li>`).join("");m.insertAdjacentHTML("beforeend",r),v.refresh()}function P(){m.innerHTML=""}function L(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}function w(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}const $=document.querySelector(".form"),q=document.querySelector(".load-more-btn"),R=document.querySelector(".gallery-item");let s=1,u="";$.addEventListener("submit",n=>{n.preventDefault(),d();const r=n.target.elements["search-text"].value.trim();if(!r){a.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"});return}r!==u&&(s=1,u=r),P(),L(),f(r,s).then(e=>{if(l(),e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(y(e.hits),R){const i=firstCard.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}if(s+=1,s>1&&w(),s*h>=e.totalHits){a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d();return}}).catch(e=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(e)})});q.addEventListener("click",n=>{L(),d(),f(u,s).then(r=>{l(),y(r.hits),s=1,w()}).catch(r=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(r)})});
//# sourceMappingURL=index.js.map
