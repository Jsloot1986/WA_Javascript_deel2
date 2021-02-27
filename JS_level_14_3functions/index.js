//function declaration
function multiplyDeclaration(num1, num2) {
    const sum1 = num1 * num1;
    const sum2 = num2 * num2;
    const totalsum = sum1 + sum2;
    const totalamount = totalsum * totalsum;
    return totalamount;
}

//function expression
const multiplyExpression = function (num1, num2) {
    const sum1 = num1 * num1;
    const sum2 = num2 * num2;
    const totalsum = sum1 + sum2;
    const totalamount2 = totalsum * totalsum;
    return totalamount2;
};

//Arrow function
const multiplyArrow = (num1, num2) => {
    const sum1 = num1 * num1;
    const sum2 = num2 * num2;
    const totalsum = sum1 + sum2;
    const totalamount3 = totalsum * totalsum;
    return totalamount3;
};

console.log(multiplyDeclaration(3, 2));//169
console.log(multiplyExpression(3, 2));//169
console.log(multiplyArrow(3, 2));//169