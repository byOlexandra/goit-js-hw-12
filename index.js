import{a as L,S as w,i}from"./assets/vendor-CNqCr-V-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const S=15;async function u(n,e){const r="https://pixabay.com",a="/api/",t=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:e}),o=`${r}${a}?${t}`;return(await L.get(o)).data}const h=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),b=new w(".gallery a",{captionsData:"alt",captionDelay:250});function p(n){const e=n.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" />
                <ul class="desc-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${r.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${r.views}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${r.comments}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${r.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");h.insertAdjacentHTML("beforeend",e),b.refresh()}function P(){h.innerHTML=""}function g(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}function $(){m.classList.remove("hidden")}function y(){m.classList.add("hidden")}const v=document.querySelector(".form"),q=document.querySelector(".load-more-btn");let s=1,d="";v.addEventListener("submit",n=>{n.preventDefault(),y();const e=n.target.elements["search-text"].value.trim();if(!e){i.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"});return}e!==d&&(s=1,d=e),P(),g(),u(e,s).then(r=>{if(l(),r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(r.hits),s+=1,s>1&&$()}).catch(r=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(r)})});q.addEventListener("click",n=>{g(),u(d,s).then(e=>{if(l(),e.hits.length===0){i.info({title:"Info",message:"No more images to load.",position:"topRight"}),y();return}p(e.hits),s=1}).catch(e=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(e)})});
//# sourceMappingURL=index.js.map
