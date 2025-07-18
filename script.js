  //console.log("hi");
  //console.log('i like banana');   
  //document.getElementById("H1").textContent="HELLO";
  //document.getElementById("P").textContent="sai "
  //let s="sai";
 
 // console.log(s)
 //let age=25;
 //let price=12;
 //let gpa=70.8
 //let firstname="sai";
 //console.log(typeof firstname );
 //console.log(`your name is ${firstname}`);
 //console.log(`you are ${age} yeras old`);
//console.log(`the price is ${price}`);
 //console.log(`your gpa is:${gpa}`);
//let name="sai";
//let age="20";
//let age1=20;
//document.getElementById("P1").textContent=name;
//document.getElementById("P2").textContent=age; 
//document.getElementById("P2").textContent=age1;
//console.log(age1===age);
//let stu=30;
//stu=stu+1;
//stu -= 1;
//stu++;
//console.log(stu);
//let result=1+2*3+4**5;
//console.log(result);
/*
paranthesis ()
exponents
multiplication and division and module
add and sub
*/
/*
let username;
username=window.prompt("what is your username");
console.log(username);
*/
/*
document.getElementById("mysubmit").onclick=function(){
  username=document.getElementById("mytext").value;
  document.getElementById("s").textContent=`hello ${username}`;
}
 */ 
 // let age =window.prompt('what is your age?');
  //age =Number(age);
  //age+=1;
  //console.log(age, typeof age);
  /*let x = "pizza";
  let y  = "pizza";
  let z = "pizza";
  x =Number(x);
  y =Boolean(y);
  z= String(z);
  console.log(x,typeof x);
console.log(y,typeof y);
 console.log(z,typeof z);
*/

/*const s =3.143;
let radius;
let circumference;
 
 /*
radius = window.prompt("enter the radius");
radius = Number(radius);
circumference = 2 * s * radius;
console.log(circumference);
*/
/*const s =3.143;
let radius;
let circumference;
document.getElementById("mysubmit").onclick=function(){
    radius = document.getElementById("text").value;
    radius=Number(radius);
    circumference = 2 * s * radius;
    document.getElementById("H2").textContent=circumference +"cm "; 

}
*/

/*
// counter program
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const count1=document.getElementById("count1");
let count = 0;
increasebtn.onclick=function(){
  count++;
  count1.textContent=count;
}
decreasebtn.onclick=function(){
  count--;
  count1.textContent=count;
}
resetbtn.onclick=function(){
  count=0;
  count1.textContent=count;
}
  */
 /*
 let x =3.21;
 let y =2;
 let z;
  //z = Math.round(x); 3
  z = Math.floor(x);  3
  z = Math.ceil(x); 4 
  z = Math.trunc(x); 3
  z = Math.pow(x , y); 
  z = Math.sqrt(x);
  z = Math.log(x);
  z = Math.sin(x);
  z = Math.cos(x);
  z = Math.tan(x);
  z = Math.abs(x);
  z = Math.sign(x);
  let max = math.max(x, y, z);
  let min = math.min(x, y, z);
  
console.log(z);  */
//random generator
// const button= document.getElementById("button");
// const label1=document.getElementById("label1");
// const label2=document.getElementById("label2");
// const label3=document.getElementById("label3");
// const min=1; 
// const max=5;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// button.onclick=function(){
//   randomNum1= Math.floor(Math.random()*max) + min;
//   randomNum2= Math.floor(Math.random()*max) + min;
//   randomNum3= Math.floor(Math.random()*max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }
//  let age=20;
//  if(age>=18){
//   console.log("you are eligable")
//  }
//  else{
//   console.log("you are not eligable")
 
//  }
// let time = 9;
// if(time<12){
//   console.log("good morning")
//  }
// const mytext=document.getElementById("mytext");
// const btn=document.getElementById("btn");
// const result=document.getElementById("result");
// let age =0;
// btn.onclick=function(){
//   age=mytext.value;
//   age=Number(age);
//   if (age>=100){
//     result.textContent=`sai`;
//   }
//   else if(age==0){
//      result.textContent=`sathi`;
//   }
//   else if(age>=18){
//      result.textContent=`yash`;
//   }
//   else{
//      result.textContent=`durga`;
//   }
  
// }
// const checkbox=document.getElementById("checkbox");
// const visabtn=document.getElementById("visabtn");
// const PHONEPAY=document.getElementById("PHONEPAY");
// const PAYPAL=document.getElementById("PAYPAL");
// const mysubmit=document.getElementById("mysubmit");
// const result=document.getElementById("result");
// const paymentresult=document.getElementById("paymentresult");

// mysubmit.onclick=function(){
//   if (checkbox.checked){
//     result.textContent=`subcribed`
// }
//   else{
//      result.textContent=`not subcribed`
//     }

//   if(visabtn.checked){
//     paymentresult.textContent=`you are paying with visa`
//     }
//   else if(PHONEPAY.checked){
//     paymentresult.textContent=`you are paying with PHONEPAY`
//     }
//   else if(PAYPAL.checked){
//     paymentresult.textContent=`you are paying with PAYPAL`
//     }
// }
  
  // tenary operator

  // let age = 35
  // let message = age>=18 ? "you are adult": "you are a mionor";
  // console.log(message);
  // let time = 11;
  // let greeting = time < 12 ? "good morning" :"good evening";
  // console.log(greeting);
  // let student = true;
  // let message = student ? "you are not student":"you are student";
  // console.log(message);
  //  no method  chaining
  // let username="  brOcODe"
  // username=username.trim();
  // let letter = username.charAt(0);
  // letter=letter.toUpperCase();
  // let extrachars= username.slice(1);
  // extrachars=extrachars.toLowerCase();
  // username=letter+extrachars;
  // console.log(username);
//   METHOD CHAINING
// let username=window.prompt("name");
// username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);
// whileloop
let username="sai";
while(username==""){
  console.log("no name");}
console.log(`name ${username}`)

