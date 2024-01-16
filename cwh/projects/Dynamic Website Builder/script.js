document.addEventListener('DOMContentLoaded', function() {
    function addCard(thumbnail,title,channelName,views,duration,date)
{
    let card=`<div class="card">
    <div class="card-wrapper">
        <div>
            <img id="card-img" src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ" alt="">
            <span id="duration-layover-text"></span>
        </div>
        <div class="card-body">
            <div class="card-title">
                <h3 id="card-title-text"></h3>
            </div>
            <div class="card-info">
                <div class="channel-name">
                    <h4 id="channel-name-text" class="fw-normal"></h4>
                </div>
                <div class="views">
                    <h4 id="views-text" class="fw-normal "></h4>
                </div>
                <div class="time">
                    <h4 id="time-text" class="fw-normal"></h4>
                </div>
            </div>
        </div>
    </div>
</div>`;
let cardcontainer=document.querySelector('.body-wrapper');
let lengthtext=document.getElementById('duration-layover-text');
let titletext=document.getElementById('card-title-text');
let channelNametext=document.getElementById('channel-name-text');
let viewstext=document.getElementById('views-text');
let timetext=document.getElementById('time-text');
let image=document.getElementById('card-img');
cardcontainer.insertAdjacentHTML('afterbegin',card);
lengthtext.innerHTML=duration;
titletext.innerHTML=title;
channelNametext.innerHTML=channelName;
viewstext.innerHTML=views;
timetext.innerHTML=date;
image.src=thumbnail;
}
addCard(`https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ`,`Installing VS CODE & How Websites Work | Sigma Web Development Course - Tutorial #1`,`CodeWithHarry`,935000,'31:19',`3 months ago`);
addCard(`https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ`,`Installing VS CODE & How Websites Work | Sigma Web Development Course - Tutorial #1`,`CodeWithHarry`,935000,'31:19',`3 months ago`);
});
