import React from 'react';

function Try(){
    
    let equ = '8+9+6-';
    
    let equ1 = equ.split('');
    let sum = 0;
    for(let i = 0; i < equ1.length; i++){
        if(equ1[i] == '+' || equ1[i] == '-' || equ1[i] == '*' || equ1[i] == '/'){
            sum++;
            if(sum >= 2){
                console.log("The second operator is at: " + i + "Operator is: ");
                console.log(equ1[i])
            }
        }
        console.log(sum)
    }
    
    console.log(equ.indexOf('+', equ.indexOf('+')+1))
    console.log(equ.lastIndexOf('+' || "-" || '*' || '/'))
    
    return(
    
        <h1 />
        
    )
}

export default Try