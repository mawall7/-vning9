
let para = document.createElement("P");
let mycount = 0;
let idcount = 0;

//document.body.style.background = url ('notes.png');

document.body.appendChild(para);
//lägger till ny sak på listan //UI flyttas till html?
document.getElementById("btn").addEventListener('click',function(){
    let inp = document.getElementById("input");
    
    if (input.value==""){alert("input text please")}
       else{ 
            Addthing(input.value)
           }
});  //var para = document.createElement('P');para.innerText="new";para.innerHTML=document.getElementById("input").value}

function Addthing(inputvalue){ //thing as item of to list
  
    let d = document.createElement("P"); d.innerText=inputvalue;document.body.appendChild(d);
    
    d.id = inputvalue + idcount.toString();
    d.name = inputvalue;
    idcount+= 1;
    
    v = AddRemoveButton(d);
    d.append(v);
   
    //event för att korsa över en sak;
      
    document.getElementById(d.id).addEventListener('click', function(){
     
    if (mycount ===2 ){ mycount = 0;}
    if(mycount==0){
    document.getElementById(d.id).innerHTML = d.name.strike();//d.id.strike();
    document.getElementById(d.id).style.backgroundColor = "lightblue";
      
    
    
}
    if(mycount==1){
    
        document.getElementById(d.id).innerHTML = d.name;
        document.getElementById(d.id).style.backgroundColor = "white";}
        mycount +=1;
        v = document.createElement("BUTTON");

        d.append(v);
        v.id = d.innerText.value +"x";
        v.addEventListener('click',function(){console.log("worked");d.remove()}); 
        //console.log(mycount);
    
    
    });
       
        //var span = document.createElement("SPAN");
        //var txt = document.createTextNode("\u00D7");
   
}
function AddRemoveButton(d=d){

    v = document.createElement("BUTTON");//v = document.createElement("BUTTON");
    var txt = document.createTextNode(" \u00D7"); // v = document.createElement("BUTTON"); 
    v.id = d.innerText.value +"x";//  v.id = d.innerText.value +"x";
    v.append(txt);    
    v.addEventListener('click',function(){d.remove()});
    //document.getElementById("d.innerText.value" + "x").style.width = "10px";
    return v;
}


