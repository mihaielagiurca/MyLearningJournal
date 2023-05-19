const showAdditionalMedia = document.getElementsByClassName("showAdditionalMedia");
const morePosts = document.getElementById('btn-view-more');
const lessPosts = document.getElementById('btn-view-less');


morePosts.addEventListener('click', function(){
    const elementsToShow = document.querySelectorAll(".showAdditionalMedia");
    elementsToShow.forEach(function(item){
        item.style.display = "block";
    })
    morePosts.style.display = "none";   
    lessPosts.style.display = "block";
})

lessPosts.addEventListener('click', function(){
    const elementsToHide = document.querySelectorAll(".showAdditionalMedia");
    elementsToHide.forEach(function(item){
        item.style.display = "none";
        lessPosts.style.display = "none";
        morePosts.style.display = "inline-block";  
    })
    })
