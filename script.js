function more() {
    var more = document.getElementById("more");
    var dots = document.getElementById("dots");
    var moreButton = document.getElementById("moreButton");

    if (moreButton.innerHTML==="Read Less"){
        more.style.display = "none";
        moreButton.innerHTML = "Read More";
        dots.style.display = "inline"
    }
    else{
        more.style.display = "inline";
        moreButton.innerHTML = "Read Less";
        dots.style.display = "none"
    }


}