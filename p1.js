// prime code

// let count=0;
// let n=8;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count++;
//     }
// }

// if(count==2){
//     console.log("Prime")
// }else{
//     console.log("Non prime")
// }

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