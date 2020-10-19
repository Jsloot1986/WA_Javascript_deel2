const colors = ['yellow','blue','red','orange'];
var text = "";
var i = 1;
while (i < colors.length){
    text += colors[i];
    i++;
}
console.log(colors);

for (var i=3; i < colors.length; i++){
    console.log(colors);
}
colors.forEach(element => console.log(element));

// for loop = 2 regels.
// while loop = 5 regels.
// foreach = 1 regel.
// voordeel van while loop is minder fouten omdat je alles stap voor stap doet.
// voordeel van for loop is leesbaarder maar wel moeilijker te begrijpen
// for loop is voor mij begrijpelijk nu, omdat je while loop ook kent.
// kan wel met een for...in loop zie voorbeeld onder

const object = {a: 1, b:2, c:3, d:4, e:5};
for(const property in object){
    console.log(`${property}: ${object[property]}`);
}
// ja we zkjn aan het itereren alleen niet via de index.
// je spreekt de parameter functie aan. een parameter is wat er in het object staat.