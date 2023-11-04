(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();let p=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];function s(){d.innerHTML=""}function l(t){d.innerHTML+=`
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
    </li>`}function m(){let t=document.querySelector("#ticketName"),i=document.querySelector("#ticketImgUrl"),c=document.querySelector("#ticketRegion"),a=document.querySelector("#ticketPrice"),e=document.querySelector("#ticketNum"),r=document.querySelector("#ticketRate"),o=document.querySelector("#ticketDescription"),f={id:0,name:t.value,imgUrl:i.value,area:c.value,description:o.value,group:e.value,price:a.value,rate:r.value};n.push(f),t.value="",i.value="",c.value="",a.value="",e.value="",r.value="",o.value="",alert("新增成功！")}function u(){n.forEach(t=>{l(t)})}let n=[...p],d=document.querySelector(".ticketCard-area"),g=document.querySelector("#searchResult-text");const v=document.querySelector(".regionSearch"),h=document.querySelector(".addTicket-btn");u();h.addEventListener("click",function(t){t.preventDefault(),m(),s(),u()});v.addEventListener("change",function(t){let i=t.target.value,c=n.filter(a=>a.area===i||i==="");s(),n.forEach(a=>{(a.area===i||i=="")&&l(a)}),g.textContent=`本次搜尋共 ${c.length} 筆資料`});
