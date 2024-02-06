
let num =8;


let fact=0;
for(let i=1; i<=num; i++){
    if(num%i==0){
        fact++
    }
}

if(fact==2){
  console.log("Num is Prime");
}
else {
    console.log("Num is Not Prime");
}