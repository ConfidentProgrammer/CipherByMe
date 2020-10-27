let e_mess = document.getElementById("enc");
let d_mess = document.getElementById("dec");
let key = document.getElementById("key");
let alpha= "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

function encrypt(){
//let's check if key is not empty

if(key.value == ""){
  alert("Please enter the value of Key");
}else{


 //we need to take the first and last value off e_message
  let e = e_mess.value.toLowerCase();
  let message = "";
  //for the middle item
  //this part will go from e[1] to e[e.length-2]
  for(let i = 0; i<=e.length-1 ; ++i){
    if(e[i] == " "){
      message+="!";
    }
   for(let j = 0; j<26 ; ++j){
     if(e[i] == alpha[j] && j>=10){
       message+=(alpha[j+parseInt(key.value,10)]);
     }else if(e[i] == alpha[j] && j<10){
       message+=j;
     }
  }
  }

  d_mess.value = message;
}
}
function decrypt(){
  if(key.value == ""){
    alert("Please enter the value of Key");
  }else{
  let d = d_mess.value.toLowerCase();
   let d_message ="";
   //decrypting the process

for(let i = 0 ; i<d.length ; ++i){
//checking the spaces
if(d[i] == "!"){
  d_message+=" ";
}
//checking for the numbers
for(let k = 0 ; k<10 ; ++k){
  if(parseInt(d[i],10) === k){
    d_message+=alpha[k];
  }
}
  for(let j = 26 ; j<51 ; ++j){
    if(d[i] == alpha[j]){
      d_message+=alpha[j-key.value];
      // now running for numbers
    }
  }
}
e_mess.value = d_message;
}
}
