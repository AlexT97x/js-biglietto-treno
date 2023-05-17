PROBLEMA : Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

SOLUZIONE:

1- Prendo in input la lunghezza del viaggio in km;
2- Salviamo questa informazione in una variabile;
3- Prendiamo in input l'età del cliente;
4- Salviamo questa informazione in una variabile;
5- Con una strttura di controllo IF verifichiamo se il cliente ha meno di 18 anni o più di 65;
6- Se ha 18 anni o più, ma meno di 65, diamo in output il prezzo della corsa moltiplicando la tratta per 0.21 euro, utilizzando il meto ToFixed arrotondiamo a 2 cifre dopo la virgola;
7- Se il cliente ha meno di 18 anni, al risultato applichiamo uno sconto del 20%;
8- Se il cliente ha più di 65 anni applichiamo uno sconto del 40%;