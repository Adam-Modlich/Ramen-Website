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

function openForm(parentName){
  var Form = document.getElementById("addForm");

  var closingButton = document.getElementById("submitButton");

  Form.style.display = "block";

  closingButton.addEventListener("click", function (){

    var title = document.getElementById("title").value;
    var ing = document.getElementById("ing").value;
    var price = document.getElementById("price").value;

    var elem = document.getElementById(parentName);

    var para = document.createElement("p");
    
    // var titleh3 = document.createElement("h3");
    
    // titleh3.appendChild(title);
  
    // document.write(nodeTitle);
  
    para.innerHTML = "<h3>" + title + "</h3>" + "<br>" + ing + "<br>" + price ;
  
    elem.appendChild(para);

  });
}

function closeFun(){
  var Form = document.getElementById("addForm");

  Form.style.display = "none";
}

// function add(parentName){

//   var elem = document.getElementById(parentName);

//   var para = document.createElement("p");
  
//   var titleh3 = document.createElement("h3");

//   // var nodeTitle = document.createTextNode(title);

//   titleh3.appendChild(title);

//   document.write(nodeTitle);

//   para.innerHTML = titleh3 + "<br>" + ing + "<br>" + price ;

//   elem.appendChild(para);
// }