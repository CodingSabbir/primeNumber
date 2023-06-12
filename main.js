const input_number=document.querySelector("#input-number");
const btn=document.querySelector("#btn");
const text=document.querySelector("#text");
btn.addEventListener("click",function(){
var count=0;
for(var i=2; i<input_number.value; i++){
if(input_number.value % i == 0){
    count++;
    break;
 }
};

if(count==0){
    text.innerHTML='the number is prime' 
}else{
    text.innerHTML='the number is not prime' 
}
});