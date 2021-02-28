const checkingAge = (age) => {
    console.log("the age is", age)
    if (age >= 18) {
        return true;
    }
    return false;
};

const sayHi = (age) => {
    console.log("the age is", age)
    const checkAge = checkingAge(age);
    if (checkAge == true) {
        return "Hello there!";
    }
    return "Hello kiddo!";
};

//console.log(sayHi(18));
//console.log(sayHi(16));
//console.log(sayHi(20));

//VAT 1
const priceLowVat = (price) => {
    console.log("price with low VAT");
    const brutoPrice = price * 1.09;
    return brutoPrice;
};

const priceHighVat = (price) => {
    console.log("price with high VAT");
    const brutoPrice = price * 1.21;
    return brutoPrice;
};

const calculatePrice = (price, product) => {
    if (product === "food") {
        const brutoPrice = priceLowVat(price);
        return brutoPrice;
    } else {
        const brutoPrice2 = priceHighVat(price);
        return brutoPrice2;
    };
    
};

//console.log(calculatePrice(5.50, "food"));
//console.log(calculatePrice(18, "nonfood"));



//VAT 2
const brutoPriceLow = (price) => {
    console.log("price without low VAT");
    const basePrice = price / 1.09;
    const totalVAT = price - (price / 1.09)
    return `the basePrice = ${Math.round(basePrice)} and the VAT = ${totalVAT}`;
};

const brutoPriceHigh = (price) => {
    console.log("price without high VAT");
    const basePrice = price / 1.21;
    const totalVAT = price - (price/ 1.21)
    return `the basePrice = ${Math.round(basePrice)} and the VAT = ${totalVAT}`;
};

const priceWithoutVat = (price, product) => {
    if (product === "food") {
        const nettoPrice = brutoPriceLow(price);
        return nettoPrice;
    } else {
        const nettoPrice2 = brutoPriceHigh(price);
        return nettoPrice2;
    };
    
};

console.log(priceWithoutVat(40, "nonfood"));
console.log(priceWithoutVat(2.50, "food"));
