// For loops 
for(let i = 1; i<=5; i++){
  console.log(i);
}
for(let j = 10; j<=5; j++){
  console.log(j);
}
for (let k =5; k>=1; k--){
  console.log(k);
}

// Print all odd numbers from 1 to 15
for (let l=1; l<=15; l+=2){
  console.log(l);
}
console.log("Backwards odd numbers from 15 to 1");
for(let m = 15; m>=1; m-=2){
  console.log(m);
}


// Print all even numbers from 1 to 20 
for (let n=2; n<=20; n+=2){
  console.log(n);
}
console.log("Backwards even numbers from 20 to 2");
for( let o = 20; o>=2; o-=2){
  console.log(o); 
}


// Infinite loop
for(let p =1; p>=0; p++){
  console.log(p);
}
for(let q = 1; q<=5; q--){
  console.log(q);
}
for(let r = 5; ; r++){
  console.log(r);
}


// Print multiplication of 5 from 1 to 10
let Number = prompt("Enter your Number:");
Number = parseInt(Number);
for(let i =Number; i<=Number * 10; i+=Number){
  console.log(i);
}
for(let s =5; s <=50; s+=5){ 
  console.log(s);
}


// // nested for loops
for(let a = 1; a <=3; a++){
  console.log("Outer loop iteration: " + a); 
  for(let b = 1; b <=3; b++){
    console.log(b);
  }
}