
// const element =document.getElementsByTagName ("h1");
// element.innerHtml = "Hello word"
// console.log (element);


// const element2 = document.getElementsByClassName ("dom");
//  element.innerHtml = "hello javascriep"
//  console.log (element2);




//  const element3 =  document.getElementById("mydiv");
//  element3.innerHTML = "this is from javascriep"

//  element3.style.backgroundColor =("green");
//  element3.style.fontSize= ("22px")

//  const text = document.querySelector ("p")
//  text.innerHTML = "this is from elememnt"

//  const button = document.querySelector ("button");
//  button.addEventListener( "click", () => {
//     text.style.color =("red")
//     text.style.fontSize = ("20px")

//  })


let intialvalue = 0;
let body = document.querySelector ("body")
let button = document.querySelector ("button")
let value = document.querySelector (".value");
const Increment = document.querySelector(".Increment");
const reset = document.querySelector(".reset")
const Decement = document.querySelector(".Decement");


 Increment.addEventListener("click", () => {
   intialvalue++;
   value.innerHTML = intialvalue;
  if (intialvalue ==2){
   body.style.backgroundColor ="blue"
  }
  

 if (intialvalue ==3){
   body.style.backgroundColor ="red"

  }
  
 if (intialvalue ==3){
   body.style.backgroundColor ="yellow"

  }

  
 if (intialvalue ==4){
   body.style.backgroundColor ="orange"

  }

  
 if (intialvalue ==5){
   body.style.backgroundColor ="gainsboro"

  }

  
 if (intialvalue ==6){
   button.style.backgroundColor =" gainsboro "

  }

  if (intialvalue ==7){
   button.style.backgroundColor =" blue "

  }
  if (intialvalue ==8){
   button.style.backgroundColor =" blue "

  }

  if (intialvalue ==9){
   button.style.backgroundColor =" blue "

  }
  if (intialvalue ==10){
   button.style.backgroundColor =" blue "

  }

  if (intialvalue ==11){
   button.style.backgroundColor =" gainsboro "

  }

 

 })



 reset.addEventListener("click", () => {
    intialvalue=0
 value.innerHTML = intialvalue;

   

 })

 Decement.addEventListener("click", () =>{
    if(intialvalue >0)
    intialvalue --;
    value.innerHTML = intialvalue;
    if (intialvalue ==0)
  value.style.color = ("red")

    })



    


 