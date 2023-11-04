(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();let p=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];function s(){u.innerHTML=""}function l(t){u.innerHTML+=`
    <li class="ticketCard">
    <div class="ticketCard-img">
        <a href="#">
            <img src="${t.imgUrl}"
                alt="">
        </a>
        <div class="ticketCard-region">${t.area}</div>
        <div class="ticketCard-rank">${t.rate}</div>
    </div>
    <div class="ticketCard-content">
        <div>
            <h3>
                <a href="#" class="ticketCard-name">${t.name}</a>
            </h3>
            <p class="ticketCard-description">
            ${t.description}
            </p>
        </div>
        <div class="ticketCard-info">
            <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${t.group} </span> 組
            </p>
            <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${t.price}</span>
            </p>
        </div>
    </div>
    </li>`}function m(){let t=document.querySelector("#ticketName"),r=document.querySelector("#ticketImgUrl"),a=document.querySelector("#ticketRegion"),c=document.querySelector("#ticketPrice"),e=document.querySelector("#ticketNum"),i=document.querySelector("#ticketRate"),o=document.querySelector("#ticketDescription"),f={id:0,name:t.value,imgUrl:r.value,area:a.value,description:o.value,group:e.value,price:c.value,rate:i.value};n.push(f)}function d(){n.forEach(t=>{l(t)})}let n=[...p],u=document.querySelector(".ticketCard-area"),g=document.querySelector("#searchResult-text");const h=document.querySelector(".regionSearch"),k=document.querySelector(".addTicket-btn");d();k.addEventListener("click",function(t){t.preventDefault(),m(),s(),d()});h.addEventListener("change",function(t){let r=t.target.value,a=n.filter(c=>c.area===r||r==="");s(),n.forEach(c=>{(c.area===r||r=="")&&l(c)}),g.textContent=`本次搜尋共 ${a.length} 筆資料`});
