function paletteBlack(){
    let palette = document.getElementById("black");
    palette.classList.remove("bg-primary");
    palette.classList.remove("bg-danger");
    palette.classList.add("bg-black");  
    
    let palette2 = document.getElementById("black2");
    palette2.classList.remove("bg-primary");
    palette2.classList.remove("bg-danger");
    palette2.classList.add("bg-black"); 
}

function paletteRed(){
    let palette = document.getElementById("black");
    palette.classList.remove("bg-black");
    palette.classList.remove("bg-primary");
    palette.classList.add("bg-danger");  

    let palette2 = document.getElementById("black2");
    palette2.classList.remove("bg-primary");
    palette2.classList.remove("bg-black");
    palette2.classList.add("bg-danger"); 
}

function paletteBlue(){
    let palette = document.getElementById("black");
    palette.classList.remove("bg-danger");
    palette.classList.remove("bg-black");
    palette.classList.add("bg-primary");  

    let palette2 = document.getElementById("black2");
    palette2.classList.remove("bg-black");
    palette2.classList.remove("bg-danger");
    palette2.classList.add("bg-primary"); 
}