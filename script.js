//Opdracht 12 Deel 1 Oude stijl: While loop
let colorsWhile=['yellow', 'blue', 'red', 'orange'];
let i=0
while (i<colorsWhile.length){
    console.log(colorsWhile[i]);
    i++;
}
//Opdracht 12 Deel 1 Oude stijl: For loop
let colorsFor=['yellow', 'blue', 'red', 'orange'];
for (i=0; i<colorsFor.length; i++){
    console.log(colorsFor[i]);
}
//Opdracht 12 Nieuwe stijl: Array methods
let colorsArray=['yellow', 'blue', 'red', 'orange'];
colorsArray.forEach(element => console.log(element));
/*Vragen:
1. For loop 4 regels en While loop 6 regels.
2. forEach method 2 regels.
3. Geen onnodig info weergeven zoals bijv. het aantal kleuren; makkelijker leesbaar wat het doet.
4. Nee, de array method is niet te gebruiken op een object. 
Proberen met een loop: Looping through the properties of an object. En voor een object met 5 properties; ben je nu aan het itereren?
*/