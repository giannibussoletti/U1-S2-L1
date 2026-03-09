/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  number -> tutti i numeri dichiarati senza le virgolette fanno parte del datatype number. Questo DT può comprendere numeri di ogni tipo, interi come 1, 4, 100. decimali come 13.49, 100.05. Anche i numeri negativi fanno parte del gruppo e possono essere sia interi che decimali: -10 -200 -20.4 -35.004

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

// - null ->

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Gianni"
console.log("Salve il mio nome è", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20

let c = a + b
console.log(a, "+", b, "=", c)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log("la variabile x è uguale a:", x, "che è un tipo di variabile", typeof x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Bussoletti"
console.log("Mentre il mio cognome è", myName)

const varCostante = 25
// varCostante = 20 /* Provando a riassegnare un nuovo valore a questa variabile, nella console del broswer viene fuori un messaggio di errore che notifica che la variabile non può essere riassegnata "Uncaught TypeError: invalid assignment to const 'varCostante'" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "Abbiamo stabilito che la variabile di X è uguale a:",
  x,
  "Quindi se sottraiamo 4 il risultato è:",
  x - 4,
)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

let sameName = name1 === name2
console.log(sameName)
/*Il risualto nella console è false perché === vede che nonostante entrambe le variabili siano stringhe, la seconda è diversa per la lettera iniziale*/

/* Un altro modo per mettere a confronto le due stringhe è usando !== che va a dimostrare come queste due siano effettivamente diverse dando il risultato TRUE */
let diffName = name1 !== name2
console.log(diffName)
