

$('.alert').hide(3000); 

const rating = document.getElementById("rating"); 
if (rating.outerText >= 8 ){ 
    rating.style = "color: rgb(90, 238, 31)";
} else if (rating.outerText <= 5) { 
    rating.style = "rgb(235,49,49)";
} else { 
    rating.style.color = "rgb(255, 251, 11)";
} 


const openDetails = document.querySelector(".collapsable"); 
openDetails.addEventListener("click", showDetails)

function showDetails(){ 
    if (openDetails.style.display == "none") { 
        openDetails.style.display == "flex"
    }else{
        openDetails.style.display == "none"
    }
}