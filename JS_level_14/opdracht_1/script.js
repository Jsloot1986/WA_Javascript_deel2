/*hollandSandwich
    Get one slice of bread.
    Add cheese.
    Put a slice of bread on top.
    */

/*function hollandSandwich(){
    console.log(['Get one slice of bread',
    'Add cheese',
    'Put a slice of bread on top']);
}
hollandSandwich()*/

/*
function makeSandwich(topping)//declaration
{
    'Get one slice of bread',
    'Add topping',
    'Put a slice of bread on top';
}
console.log("there you go, a sandwich with", ('chicken'));//call function
console.log("there you go, a sandwich with", ('hummus'))*/


//function calculateDiscountPrice(totalAmout, discount){
    //return Math.round(totalAmout-discount);}
    //console.log("De prijs wordt:" + calculateDiscountPrice(19.99, 5));//15 euro

function calculateDiscountPriceTwo(totalAmout, discount)
{
if (totalAmout <= 25)
{   
    return totalAmout;
}
else { return Math.round(totalAmout-discount)};}
console.log ("U betaald" + calculateDiscountPriceTwo(20-10));
