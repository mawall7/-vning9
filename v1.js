alert("hello world")


  var end_x = 100;
  var x =0;
  var result;
  while(x<end_x){
    x+=1;
    result = x;
    if(x%3 == 0){result="Bish"}
    if(x%4 == 0){result="Bosh"}
    if(x%3 == 0 && x%4 ==0){result="Bish-Bosh"}
    console.log(result); 
  }
  console.log(result);
 