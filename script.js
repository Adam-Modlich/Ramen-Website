function myFunction(){
    var x = document.getElementById("slider_drinks");
    var y = document.getElementById("drinks_back");
    var z = document.getElementById("myButton1");

    if (x.style.visibility == "visible"){
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
        z.innerText="Non Alcoholic Drinks";

    }
    else{
        x.style.visibility = "visible";
        y.style.visibility = "hidden";
        z.innerText="Drinks";

    }
}

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}