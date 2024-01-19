document.addEventListener('DOMContentLoaded',()=>{
    function addcard(thumbnail,title,views,date,duration,no)
    {
        let card=`
        <div class="card">
        <div class="no">${no}</div>
            <div class="card-wrapper">
                <div>
                    
                    <img class="card-img" src="${thumbnail}" alt="">
                    <div class="duration-layover">
                        <span class="duration-layover-text">${duration}<span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="card-title">
                    <h2>${title}</h2>
                </div>
                <div class="card-info">
                    <div class="channel-name">
                        <h4>CodeWithHarry</h4>
                    </div>
                    <div class="views">
                        <h4>${views} views</h4>
                    </div>
                    <div class="time">
                        <h4>${date}</h4>
                    </div>
                </div>
            </div>
        </div>`;
        let body=document.querySelector('.body-wrapper');
        body.innerHTML+=card;
    }
    
    addcard('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ','Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1',954000,'3 months ago','31:20',1)
    addcard('https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg','Your First HTML Website | Sigma Web Development Course  Tutorial - #2',467000,'3 months ago','28:31',2)
    addcard('https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAjPtvUdoA1O40DUFC8U1NdTYLk1g','Basic Structure of an HTML Website | Sigma Web Development Course  Tutorial - #3',290000,'3 months ago','11:12',3);
    addcard('https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEoDwrQoTELgI-X7BTCJYva_ekhg','Heading, Paragraphs and Links | Sigma Web Development Course  Tutorial - #4',250000,'3 months ago','19:34',4);
    addcard('https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWvC8YQRU7FJg3FqTenAIsD_zwGA','Image, Lists, and Tables in HTML | Sigma Web Development Course  Tutorial - #5',246000,'3 months ago','18:20',5);
})