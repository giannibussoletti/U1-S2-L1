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

// - string -> "stefano" "gianni" "latte&miele" "" sono tutti datatype di tipo stringa, la cosa fondamentale è che siano chiusi tra "", '' oppure ``. perché altrimenti verrebbero lette come il nome di una variabile. All'interno delle virgolette può andare qualsiasi tipo di carattere compresi i numeri, in questo caso vengono riconosciuti semplicemente come simboli di una stringa.
// - boolean -> può dare solo due tipi di risultato: TRUE o FALSE. Questi risultati sono la risposta ad un tipo di comparazione fra due o più variabili. Queste variabili vengono calcolate con i seguenti simboli chiamati OPERATORI DI COMPARAZIONE:
// < Controlla se una variabile è minore di un'altra
// > Controlla se una variabile è maggiore di un'altra
// <= Controlla se una variabile è minore o uguale ad un altra
// ! Il punto esclamativo inverte il risultato di una variabile facendolo passare da TRUE a FALSE e viceversa, viene messo prima del nome della variabile. Es: !variabile
// === I tre Uguali controllano che tue variabili abbiano lo stesso Valore e siano dello stesso TIPO, nel caso di una variabile number e una stringa il risultato sarà FALSE per esempio.
// !== Il punto esclamativo invece fa il contrario dei 3 uguali. Controlla se una variabile è differente dall'altra, come nell'esempio di prima una variabile number è diversa da una stringa e quindi il suo risultato sarà TRUE.

// - undefined -> è il valore di default di una variabile a cui non è stato assegnato alcun valore.
let varUn // Il valore della variabile non è stato dichiarato e quindi la variabile è considerata UNDEFINED.

// - null -> Dichiara invece che la variabile è vuota e non restituisce alcun risultato c'è una ASSENZA ESPLICITA di valore.
let varVuota = null

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

// Per dimostrare invece che le due stringhe sarebbero identiche se fossero entrambi lowercase ho trovato questa soluzione

sameName2 = name1 === name2.toLowerCase()
console.log(
  "sameName da come risultato",
  sameName,
  "perché le variabili da cui è composto differiscono di una lettera (jonh var1 e Jon var2). Ma  una nuova variabile dal nome sameName2 da come risultato",
  sameName2,
  "perché var2 viene messo tutto in lowercase grazie alla dichiarazione .toLowerCase()",
)

//In questo caso il comando .toLowerCase() rende temporaneamente John con la maiuscola, una parola tutta in minuscolo. Andando a confermare che le variabili sarebbero identiche se tutte e due fossero minuscole.
