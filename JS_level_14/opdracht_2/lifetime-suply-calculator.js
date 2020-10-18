const calculateSupply = function(age, amountDay){
    let maxAge = 90;
    let amountConsumed = (amountDay*365)*(maxAge-age);
    let message = "You will need" + amountConsumed + "to last you until the ripe old age of" + maxAge;
    console.log(message)
}
calculateSupply(25, 10);
calculateSupply(30, 15.5);
calculateSupply(37, 21.30);