
 

 var buttonElement = document.getElementById('btn');
 var bish = document.getElementById("bish");
 var bosh = document.getElementById("bosh");
 var endvalue = document.getElementById('endval');
 var bi=0; var bo=0; var endval=0;
// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
buttonElement.addEventListener('click', function () {
  Myfunct(bish.value,bosh.value, endvalue.value)
  alert('choice confimred! enjoy!');
  

  
})


function Myfunct(bi,bo,endval){
var x =0;
var result=0;
while(x<endval){
  x+=1;
  console.log(x);
  result = x;
  if(x%bi == 0){result="Bish"}
  if(x%bo == 0){result="Bosh"}
  if(x%bi == 0 && x%bo ==0){result="Bish-Bosh"}

  console.log(result);
  document.getElementById("resfromjs").innerHTML += result + "<br>"
  
  
 }
}



