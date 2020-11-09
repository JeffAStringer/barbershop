window.onscroll = function() {myFunction()};

const header = document.getElementById("myheader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//function myFunction() {
  //document.getElementById("nav").style.color = "red";
//}
//function myFunction() {
  //document.getElementsByID("image").style.color = "red"
//}
// Example input and expected output

//checkSum(50, 12) // => true
//checkSum(10, 11) // => false
//checkSum(26, 24) // => true
//checkSum(49, 2) // => false

