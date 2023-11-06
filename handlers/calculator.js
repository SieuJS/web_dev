const calculateHandler  = (data) => {
    const xValue = parseFloat(data.X);
    const yValue = parseFloat(data.Y);
    const operatorValue = data.operator;
    if(! xValue || !yValue) return ;
    let result ;
    if(operatorValue === "+") result = xValue + yValue;
    else if(operatorValue === "-") result = xValue - yValue;
    else if(operatorValue === "x") result = xValue * yValue; 
    else if(operatorValue === ":") result = xValue / yValue;
    else return ;
    
    return result;
}

module.exports = calculateHandler;