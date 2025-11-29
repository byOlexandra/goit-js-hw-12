import{a as b,S,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const v=15;async function f(s,t){const e="https://pixabay.com",a="/api/",r=new URLSearchParams({key:"53346532-56e1a2cf6c50fcc4672e719cf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:t}),o=`${e}${a}?${r}`;return(await b.get(o)).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(e=>`
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
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){p.innerHTML=""}function L(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function w(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}const q=document.querySelector(".form"),R=document.querySelector(".load-more-btn");let i=0,h="",c=0;q.addEventListener("submit",async s=>{s.preventDefault(),u();const t=s.target.elements["search-text"].value.trim();if(!t){n.info({message:"Please type something to start searching.",position:"topRight"});return}t!==h&&(i=0,h=t,c=0,$()),i+=1,L();try{const e=await f(t,i);if(d(),i===1&&e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(y(e.hits),c+=e.hits.length,c>=e.totalHits){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u();return}w()}catch{d(),n.error({title:"Error",message:"Something went wrong. Please try again."})}});R.addEventListener("click",async s=>{L(),u(),i+=1;try{const t=await f(h,i);d(),y(t.hits);const e=document.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}if(c+=t.hits.length,c>=t.totalHits){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u();return}w()}catch{d(),n.error({title:"Error",message:"Something went wrong. Please try again."})}});
//# sourceMappingURL=index.js.map
