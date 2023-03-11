function calculate(num1, num2, operator) {
  }
  
  // ignore the function below
  function performOperations() {
    // Get the values of the two input fields and the operator.
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("result");
    var operator = document.getElementById("id").value;
    // Check if the input values are valid.

    if (operator === "") {
      result.textContent = "Please select an operator!";
    }

    if(operator === '+'){
        result = num1+num2
    } else if(operator === '-'){
        result = num1-num2
    }else if(operator === '*'){
        result = num1*num2
    }else(operator === '/'){
        result = num1/num2
    }

    const res = calculate(parseFloat(num1), parseFloat(num2), operator);
    result.textContent = "Result is : " + res;
  }