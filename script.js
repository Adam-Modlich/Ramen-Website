function myFunction(){
    var x = document.getElementById("slider_drinks");
    var y = document.getElementById("drinks_back");

    if (x.style.visibility == "visible"){
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
    }
    else{
        x.style.visibility = "visible";
        y.style.visibility = "hidden";

    }
}