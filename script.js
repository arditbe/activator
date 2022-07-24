var x = document.getElementById('move');
x.style.position = "absolute"
x.style.left  = "90px"

function  vja(){
let s = 100;
var x = document.forms["cha"]["bkd"].value;
var  z = document.getElementById('ff')
z.style.color = "red"
if(x == "XP" | x == "Vista" | x == "7" | x == "8" | x == "8.1" | x == "10"){
    document.getElementById("ff").innerHTML = "Your Windows Is Supported"
    return false;
}
if(x == "" || x == null){
    document.getElementById("ff").innerHTML = "Please Fill the Text Field"
    return false;

}
if( x == "10"){
    document.getElementById("ff").innerHTML = "Your Windows Is Supported"
    return false;
}
else{
    
   

   document.getElementById("ff").innerHTML = "You typed wrong or you typed number above 10"
   return false;
}

}

