const X = document.querySelector('#X');
const Y = document.querySelector('#Y');
const operator = document.querySelector("#operator")
const form = document.querySelector('form');
const resultDisplay = document.querySelector('#resultHtml')

const calculateHandler  = () => {
    const xValue = parseFloat(X.value);
    const yValue = parseFloat(Y.value);
    const operatorValue = operator.value;
    if(! xValue || !yValue) return ;
    let result = 0;
    console.log(operatorValue)
    if(operatorValue === "+") result = xValue + yValue;
    else if(operatorValue === "-") result = xValue - yValue;
    else if(operatorValue === "x") result = xValue * yValue; 
    else if(operatorValue === ":") result = xValue / yValue;
    else return ;
    return result
}

form.addEventListener('submit', (event)=>{
    // event.preventDefault();
    resultDisplay.value = calculateHandler();
    

})

