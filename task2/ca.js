const display =document.getElementById("disp");

const digs =document.querySelectorAll(".dig, .digl");



const addDisp =(btn)=>{
display.textContent += btn.textContent;

}

const Clear =()=>{
    display.textContent="";  

}


const Calc =()=>{
    try{
display.textContent =eval(display.textContent)
    }catch(error){
        display.textContent ="Error"
    }
}



digs.forEach(button => {

  button.addEventListener("click",function(){

    if(button.textContent==="C" ){
     Clear();

    }else if(display.textContent==="Error"){
     Clear();
     addDisp(button);
     

    }else if(button.textContent==="="){
     Calc();

    }else if(button.textContent==="x"){
       display.textContent += "*";

    } else{
        
      if(display.textContent.length <11 && display.textContent !="Error"){
        addDisp(button);

      }
    }
  })

});

const clear= ()=>{

    display.textContent="";

}


// function clickk(T){
// display.value+= input;

// }