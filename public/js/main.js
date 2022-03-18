$('.alert').hide(3000); 

const rating = document.getElementById("rating"); 
if (rating.outerText >= 8 ){ 
    rating.style = "color: rgb(90, 238, 31)";
} else if (rating.outerText <= 5) { 
    rating.style = "rgb(141, 29, 29)";
} else { 
    rating.style.color = "rgb(255, 251, 11)";
}  

