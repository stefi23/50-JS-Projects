function openMenu(){
    document.getElementById("side-menu").style.marginLeft ="0";
    document.getElementById("main").style.marginLeft ="250px";
    document.getElementById("expand-arrow").style.marginLeft = "250px"

}

function closeMenu(){
    document.getElementById("side-menu").style.marginLeft ="-250px";
    document.getElementById("main").style.marginLeft ="0px";
     document.getElementById("expand-arrow").style.marginLeft = "0px"
   
}

const elements = document.querySelectorAll(".element") 


function highlight(id){
    elements.forEach((element, index) => {
        if(element.classList.contains("active")){
            element.classList.remove("active")
        }
        if(id === index){
            element.classList.add("active")
        }
    })   
}