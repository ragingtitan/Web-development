document.addEventListener('DOMContentLoaded',()=>{
    let leftbtn=document.getElementById('btn-left');
    let rightbtn=document.getElementById('btn-right');
    let slider=document.querySelector('.slider');
    let image=document.getElementsByTagName('img');
    //image.style.transform=`translateX(0px)`;
    console.log(image)

    //  use scroll object instead of transform. Its easier and more managable

    rightbtn.addEventListener('click',()=>{
       slider.scrollLeft+=720;
    })
    leftbtn.addEventListener('click',()=>{
        slider.scrollLeft-=720;
    })
});