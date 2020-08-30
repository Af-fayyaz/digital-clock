function lightMode(){
  var activeButton = document.querySelector("body");
  activeButton.classList.toggle("light");

  var x = document.querySelector(".lmode");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  }
   else {
    x.innerHTML = "Light Mode";
  }
}



function showTime(){
  var date = new Date();
  var h = date.getHours();       //0-23
  var m = date.getMinutes();     //0-59
  var s = date.getSeconds();     //0-59
  session = "AM";

  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  h = (h < 10)? "0" +h : h;
  m = (m < 10)? "0" +m : m;
  s = (s < 10)? "0" +s : s;

  var time = h +":" +m +":" +s +" "  +session;

  document.getElementById("digitalclock").innerHTML = time;

  setTimeout(showTime, 1000);

}


// function hChange(){
//
//   var date = new Date();
//   var h = date.getHours();       //0-23
//   var m = date.getMinutes();     //0-59
//   var s = date.getSeconds();     //0-59
//
//   h = (h < 10)? "0" +h : h;
//   m = (m < 10)? "0" +m : m;
//   s = (s < 10)? "0" +s : s;
//
//   var timef = h +":" +m +":" +s +" ";
//
//   document.getElementById("digitalclock").innerHTML = timef;
//
//   setTimeout(hChange, 1000);
// }
