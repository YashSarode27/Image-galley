

let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

function openfullIMg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src =pic;
}
  
// x close
    function closefullIMg(){
    fullImgBox.style.display = "none";
    }


