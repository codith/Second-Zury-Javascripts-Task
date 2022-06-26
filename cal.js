let first = parseInt(prompt("What is your first number"));
let second = parseInt(prompt("What is your second number"));
let operator = prompt("What is your operator");

if (operator === "+" ) {
    let add = first + second
    alert(add);   
}

else if (operator === "-" ) {
    let sub = first - second
    alert(sub);    
}

else if (operator === "*" ) {
    let mul = first * second
    alert(mul);    
}

else if (operator === "/" ) {
    let div = first / second
    alert(div);    
}


