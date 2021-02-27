const checkNumber = function (number) {
    if (number > 100) {
        return true
    }
    return false
};

const result1 = checkNumber(10);
const result2 = checkNumber(101);
const result3 = checkNumber(200);

document.getElementById("result1").innerHTML = `Is 10 bigger than 100? ${result1}`
document.getElementById("result2").innerHTML = `Is 101 bigger than 100? ${result1}`
document.getElementById("result3").innerHTML = `Is 200 bigger than 100? ${result1}`

const enterCheck = function (numberCurrent, age) {
    const numberMax = 100;
    if (numberCurrent <= numberMax && age >= 18) {
        return "please come in"
    }
    else if (numberCurrent >= numberMax && age >= 18) {
        return "it's to busy now, please come back later!"
    }
    return "this is a club for adults"
    
};

const check1 = enterCheck(80, 17);
const check2 = enterCheck(90, 18);
const check3 = enterCheck(100, 20);
const check4 = enterCheck(102, 30);

document.getElementById("check1").innerHTML = `May I enter the bar if i'm 17 and current number is 80? answer:${check1}`
document.getElementById("check2").innerHTML = `May I enter the bar if i'm 18 and current number is 90? answer:${check2}`
document.getElementById("check3").innerHTML = `May I enter the bar if i'm 20 and current number is 100? answer:${check3}`
document.getElementById("check4").innerHTML = `May I enter the bar if i'm 30 and current number is 102? answer:${check4}`

const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n)/numbers.length;
    return average;
};
const numarray = [2, 3, 6, 7, 9.5];
const numarray1 = [15, 40, 50, 15.9];
const resultA = calculateAverage(numarray)
const resultB = calculateAverage(numarray1)

document.getElementById("resultA").innerHTML = `what is the avarage from array of ${numarray}....answer: ${resultA}`
document.getElementById("resultB").innerHTML = `what is the avarage from array of ${numarray1}....answer: ${resultB}`