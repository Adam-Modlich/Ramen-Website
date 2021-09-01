

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

// function myFunction() {
//   var element = document.getElementById("myDIV");
//   element.classList.toggle("mystyle");
// }
// let closeNav = document.getElementById("js-close-toggle");
// let navbar = document.getElementById("js-navbar");

function toggleFunction(){
  let closeNav = document.getElementById("js-close-toggle");
  let navbar = document.getElementById("js-navbar");
  navbar.classList.toggle("activeNavbar");
  // closeNav.classList.toggle("activeNavbar");
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

function openForm(parentName){

  document.getElementById("title").value = '';
  document.getElementById("ing").value = '';
  document.getElementById("price").value = '';

  var Form = document.getElementById("addForm");

  var closingButton = document.getElementById("submitButton");

  Form.style.display = "block";

  closingButton.addEventListener("click", function (){

    var title = document.getElementById("title").value;
    var ing = document.getElementById("ing").value;
    var price = document.getElementById("price").value;

    var elem = document.getElementById(parentName);

    var para = document.createElement("p");
  
    para.innerHTML = "<h3>" + title + "</h3>" + "<br>" + ing + "<br>" + price ;
  
    elem.appendChild(para);

  });
}

function closeFun(){

  var Form = document.getElementById("addForm");

  Form.style.display = "none";
  
}
