var button = document.getElementById('button');

var clicks = 0
function setClick() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.getElementById("click-count").innerHTML = clicks;
}

function countUp() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("click-count").innerHTML = clicks;
}

document.getElementById("button").onclick = countUp;
setClick();
