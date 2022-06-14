// about tabs

var tabsContainer=document.querySelector(".about-tabs");
var aboutSection=document.querySelector('.about-section')

tabsContainer.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active') ){
        tabsContainer.querySelector(".active").classList.remove("active")
        e.target.classList.add('active')

        var target=e.target.getAttribute("data-target")
        aboutSection.querySelector('.tab-content.active').classList.remove('active')    
        aboutSection.querySelector(target).classList.add('active')    
    }
})