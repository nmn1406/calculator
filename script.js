function playAudio(){
    var audio = new Audio('click.wav');
    audio.play();
}

         //function that clear the display

function clr(){
    document.getElementById('input').value = "0";
}

function dis(val)
         {
             var x = document.getElementById("input").value;
             if(x==="0"||x=="Error"){
                x='';
             }
             if(disableOperator(x,val)==true){
                x = x.slice(0,-1)
                document.getElementById("input").value = x + val;
             }
             else{
                document.getElementById("input").value = x + val;
             }
            //  if(x==0 && val=="/"){
            //     // console.log("error");
            //         x='0';
            //         val='';
            //  }
                
             
         }
//function to disable operations if a operator is present in the end of a expression;

function disableOperator(x,val){
    let y = x.slice(-1)
    if((y=="+" || y=="-" || y=="*" || y=="/" || y==".")&&(val=="+" || val=="-" || val=="*" || val=="/" || val==".")){
        return true;
    }
}
           
//function to evaluate the expression and return result
         
function solve()
{
    let x = document.getElementById("input").value
    x = trimOperator(x);
    try{
        // eval(x);
        let y = eval(x)
    if(y===Infinity || isNaN(y)){
        y = "Error";
    }
        document.getElementById("input").value = y;
    }
    catch(err){
        document.getElementById('input').value = "Error";
    }
    
        
}

//function to trim a  operator if present in the end of a expression;

function trimOperator(x){
    let y = x.slice(-1)
    if(y=="+" || y=="-" || y=="*" || y=="/" || y=="%"){
        x = x.slice(0,-1)
        
    }
    return x;
}

function backspace(){
    let x = document.getElementById("input").value;
    if(x.length==1 || x=="Error"){
        x = "0";
    }
    else{
        x = x.slice(0,-1);
    }
    document.getElementById("input").value = x;
}
