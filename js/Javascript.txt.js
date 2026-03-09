// Javascript 1

// A cosa serve JS?
// Offre una maggiore interattività con gli oggetti del DOM(Broswer).
// JS si occupa dell'interattività alle pagine, far funzionare per esempio i bottoni.
// Javascript è l'unico linguaggio di programmazione che il broswer sa interpretare.
// è un linguaggio lato client, gira nel computer dell'utente finale.
// Negli ultimi anni è diventato un anche un linguaggio lato server, con tecnologie come Node.js
// JS è il terzo pilastro delle pagine web dopo HTML e CSS.
// i JS possono essere scritti in file esterni e collegati come i file CSS.
// Così come per i file CSS, anche per i file JS è conveniente fare una cartella a parte.
// i link dei fogli JS vanno inseriti alla fine della sezione Body.
// il tag che si usa è <script></script> si usa un attributo src="" quindi:
// <script src=""></script>
// i commenti su singola riga si lasciano con il doppio slash //
/* i commenti su più righe si commentano come in CSS cioè  questo è un commento */
// Con JS si scrivono Algoritmi per risolvere problemi.
// Un algoritmo è una serie finita di passaggi che va a risolvere un problema.
// un algoritmo è formato da variabili, le variabili si iniziano a scrivere con "let"
// ogni variabile deve avere un nome subito dopo let, il nome della var non può iniziare con un numeri. ma può stare dopo la parola iniziale.
// non usare simboli speciali. nel caso di una var con più nomi si mette il capitalize ad ogni parola dopo la prima (camel case).
// I trattini alti non vanno bene. I trattini bassi _ vanno bene, ma è sconsigliato come formattazione del nome.

// LET permette di creare una variabile RI-ASSEGNABILE
let bacinella /*Singolo nome*/

// nomenclatura camelCase per assegnare un nome alla variabile con più parole
let altraBacinella
let ancoraUnAltraBacinella
let scatolaBellissima

// Come si assegna un valore alla variabile?
// La prima cosa da vare è richiamare la variabile e per assegnargli un valore bisogna usare il simbolo dell'uguale =
// Es.

bacinella = 100

// le variabili con valore let sono riassegnabili
// quindi la richiamo e gli do un nuovo contenuto

bacinella = 110

// un tipo di dato sono le stringhe, ovvero testo puro
altraBacinella = "zucchero"
// la stessa variabile può essere riassegnata ad un altro valore
altraBacinella = "fornaciari"

// le stringhe si scrivono tra virgolette "" oppure tra apostrofi ''
// scrivere una parola senza tali simboli fa equivalere la parola al nome di una variabile
// le variabili possono anche essere riassegnati ad un altro tipo di dato

// per esempio:
altraBacinella = 5 /* adesso la variabile contiene un valore numerico ma è sconsigliato*/

// Le variabili dichiarate con LET possono avere subito un valore assegnato
let valoreAssegnato = 10

// Le variabili vanno dichiarate con let solo quando si creano ma per cambiarne il valore basta richiamare il suo nome
let dichiaraVar = 10 //
dichiaraVar = 20 // Questo va bene

let varDichiarata = 10
// let varDichiarata = 30 // Questo non va bene

// se invece voglio creare una variabile non RI-ASSEGNABILE devo usare const
const varCostante = 10 // Questa variabile non può essere riassegnata

// Le variabili create con const hanno bisogno di avere una valore dichiarata fin da subito, altrimenti non saranno utilizzabili
// const useless // Questa cosa non sia fa perché la variabile sarà non utilizzabile

// TIPI DI DATO SEMPLICI (CHIAMATI PRIMITIVI) IN JS
// - number -> 0, 1, -5 1000, 12.34 se c'è una virgola va sostituito con il punto quindi non 10,10 ma 10.10
let numeroVar = 10
/* - string -> "stefano" "gianni" "latte&miele" (stringa vuota)"" o anche con il numero al suo interno "doggo10"
 delimitati con '' - "" - `` <--  quest'ultimo anche è un delimitatore e lo si può richiamare con alt+96 */
let stringaVar = "dichiarazione di stringa"
// - boolean -> true, false
let varBooleana = 10 < 5 // il risultato sarà false
varBooleana = true // Sia true che false sono proprio dichiarazioni non stringhe
varBooleana = false

// - undefined -> valore non definito
let varUn // Il valore della variabile non è stato dichiarato
// diventa automaticamente undefined

// - null -> assenza esplicità di valore, variabile VUOTA
let varVuota = null

let x = 5
let y = 7
let z = x //<-- in questo caso la var z richiama lo stesso valore della var x, quindi z vale 5
console.log("valore di x iniziale", x)
console.log("valore di z iniziale", z)
x = 50
// anche se in questa riga poi richiamo la variabile z, questa continuerà sempre a valere 5
// perché z quando è stata dichiarata ha preso il valore della prima dichiarazione di x

let addXY = x + y // questa è un'addizione, quindi addXY vale 13

// Come facciamo a scoprire il lavore di una variabile? si usa console.log()
// dentro la parentesi si possono mettere più valori, vanno divisi da una virgola
console.log("valore di x dopo riassegnazione", x)
console.log("valore di z dopo riassegnazione di x", z)
console.log("Verifico il tipo di var dichiarata(z):", typeof z, z)
//typeof seguito dalla variabile fa capire che tipo di variabile è

// OPERAZIONI MATEMATICHE IN JS
let aa = 6 + 3 // 9
let bb = 10 - 6 // 4
let cc = 5 * 5 // 25
let dd = cc / 5 // 5
let ee = aa + bb // 13

let ff = ee % 10 // OPERATORE MODULO -> da come risultato il resto del numero
let gg = 10 % 3 // in questo caso il 3 nel 10 ci sta 3 volte
// quindi il risultato sarà 1 perché è il resto che manca per arrivare a 10

// numeri particolari - > 0, -0, +infinity -infinity, NaN (Not A Number)
console.log(50 / "Stefano") // Risultato Nan
