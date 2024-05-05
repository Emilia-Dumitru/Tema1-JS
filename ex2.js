/*Scrieți o funcție numită `tellFortune` care:
- primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
- afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."

*/
function tellFortune(număruldecopii, numelepartenerului, locațiageografică, loculdemuncă) {
    var future = "Vei fi un " +  loculdemuncă + " in " + locațiageografică
 +" casatorit cu " + numelepartenerului + " si vei avea " +număruldecopii +" copii.";
    console.log(future);
}
tellFortune( 3 ,"Emanuel" , "Italia" , "Programator");
