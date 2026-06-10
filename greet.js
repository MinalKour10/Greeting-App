function greetUser(){

let name=document.getElementById("name").value;

let output=document.getElementById("output");

if(name==""){

output.innerHTML="🌸 Please enter your name.";

return;

}

let hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="☀️ Good Morning";

}

else if(hour<17){

greeting="🌼 Good Afternoon";

}

else{

greeting="🌙 Good Evening";

}

output.innerHTML=`${greeting}, <br><span style="color:#7b5cff;">${name}!</span><br>Hope you have an amazing day 💜`;

}
