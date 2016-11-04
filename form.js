//AUTHOR: Kyle Kruskamp
//a + b * b * a
function validate() {
  var winCounter = 0;
  var loseCounter = 0;
  var uInput = document.getElementById("input").value;

  if (uInput == 1190)
  {
    var message = "You might not be stupid after all...";
    winCounter++;
    setCookie("winRate", winCounter, 1);

    setTimeout(function() {
      window.location.href='test2.html'
    }, 2000);
  }

  else if (isNaN(uInput)) {
    var message = "Please enter a number.";
  }

  else {
    var message = "Incorrect";
    loseCounter++;
    setCookie("loseRate", loseCounter, 1);
  }

  document.getElementById("check").innerHTML = message;
}

// a + b / a - b
function validate2() {
  var winCounter = getCookie("winRate");
  var loseCounter = getCookie("loseRate");
  var uInput = document.getElementById("input").value;

  if (uInput == "-1.5")
  {
    var message = "You're smarter than I thought... moving on";
    winCounter++;
    setCookie("winRate", winCounter, 1);

    setTimeout(function() {
      window.location.href='test3.html'
    }, 2000);
  }

  else if (isNaN(uInput)) {
    var message = "Please enter a number.";
  }

  else {
    var message = "Incorrect, again";
    loseCounter++;
    setCookie("loseRate", loseCounter, 1);
  }

  document.getElementById("check").innerHTML = message;
}


function validate3() {
  var winCounter = getCookie("winRate");
  var loseCounter = getCookie("loseRate");
  var uInput = document.getElementById("input").value;

  if (uInput == "eno ytfif")
  {
    winCounter++;
    setCookie("winRate", winCounter, 1);
    var total = (winCounter / loseCounter) * 100;
    total = total.toFixed(2);
    var message = "You win! - " + "W:" + winCounter + "|" + "L:" + loseCounter + "|" + "Percentage: " + total + "%";
  }

  else if (isNaN(uInput)) {
    var message = "Please enter a number.";
  }

  else {
    var message = "Incorrect";
    loseCounter++;
    setCookie("loseRate", loseCounter, 1);
  }

  document.getElementById("check").innerHTML = message;
}








//courtesy of w3 schools
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3 schools
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
