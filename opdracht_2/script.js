const age = 21;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Bram';
const totalAmount = 25;
if (age >= 18)
{console.log ("Welkom je bent boven de 18");
}
else
{console.log ("Helaas je bent nog geen 18 jaar");
}

if (isFemale)
{console.log ("Welkom je hebt toegang tot de ladiesnight");
}
else {console.log ("Helaas deze avond is alleen toegangelijk voor dames");}

if (driverStatus==='bob')
{console.log ("U mag nog rijden");
}
else {console.log ("Helaas, kunnen we een taxi voor uw bestellen of bent u met iemand anders die bob is?");}

if (age >= 18 && age <=25)
{console.log ("Je krijgt 50% korting!");
}
else {console.log ("Helaas de korting regel geld niet");}

if (name === 'Bram'||'Sarah')
{console.log ("Gefeliciteerd met je verjaardag, je krijgt een drankje van ons!");
}
else {console.log ("Helaas je naam is geen Bram of Sarah");}

if (totalAmount >= 25 && totalAmount <50)
{console.log ("Gefeliciteerd je krijgt een gratis portie (vega)bitterballen");}
else if (totalAmount >= 50 && totalAmount <100)
{console.log ("Gefeliciteerd je krijgt een gratis portie nachos");}
else if (totalAmount === 100 && totalAmount >100)
{console.log ("Gefeliciteerd je krijgt een flesje Champagne");}
