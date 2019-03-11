
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');
var modal8 = document.getElementById('myModal8');

var profilePage = document.getElementById("profile-page");
var layout = document.getElementById("layout");
var form = document.getElementById("registration-form");
var styleGuide = document.getElementById("style-guide");
var game = document.getElementById("game");
var gallery = document.getElementById("gallery");
var webApp = document.getElementById("web-app");
var employee = document.getElementById("employee");


var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];
var span5 = document.getElementsByClassName("close")[5];
var span6 = document.getElementsByClassName("close")[6];
var span7 = document.getElementsByClassName("close")[7];


profilePage.onclick = function() {
  modal.style.display = "block";
}

layout.onclick = function() {
    modal2.style.display = "block";
}

form.onclick = function() {
    modal3.style.display = "block";
}

styleGuide.onclick = function() {
  modal4.style.display = "block";
}

game.onclick = function() {
    modal5.style.display = "block";
}

gallery.onclick = function() {
    modal6.style.display = "block";
}

webApp.onclick = function() {
    modal7.style.display = "block";
}

employee.onclick = function() {
    modal8.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  modal2.style.display = "none";
}

span2.onclick = function() {
  modal3.style.display = "none";
}

span3.onclick = function() {
  modal4.style.display = "none";
}

span4.onclick = function() {
  modal5.style.display = "none";
}

span5.onclick = function() {
  modal6.style.display = "none";
}

span6.onclick = function() {
  modal7.style.display = "none";
}

span7.onclick = function() {
  modal8.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  } else if (event.target == modal5) {
    modal5.style.display = "none";
  } else if (event.target == modal6) {
    modal6.style.display = "none";
  } else if (event.target == modal7) {
    modal7.style.display = "none";
  } else if (event.target == modal8) {
    modal8.style.display = "none";
  }
}