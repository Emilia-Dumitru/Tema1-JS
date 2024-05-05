/*Veți crea o funcție care va returna un șir de caractere (string) 
care va reprezenta numele unei zile a săptămânii 
în raport cu numărul acesteia pe parcursul unei săptămâni.

*/
let day;
switch (new Date().getDay()){
    case 0:
        day = "Duminica";
        break;
    case 1:
        day = "Luni";
        break;
    case 2:
        day = "Marti";
        break;
    case 3:
        day ="Miercuri";
        break;
    case 4:
        day ="Joi";
        break;
    case 5 :
        day ="Vineri";
        break;
    case 6:
        day ="Sambata";
        break;        
}
console.log( "Astazi este " + day + "!");

//Acesta a fost exercitiul
//Multumesc pentru atentie!