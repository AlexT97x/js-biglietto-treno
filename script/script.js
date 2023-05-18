
let nome = prompt('nome');
document.getElementById('nome').innerHTML = ' Il tuo nome ' + nome;

let eta = parseInt(prompt('eta'));
document.getElementById('eta').innerHTML = 'La tua età ' + eta;

let tratta_km = parseInt(prompt('tratta_km'));
document.getElementById('tratta_km').innerHTML = 'Lunghezza tratta in chilometri ' + tratta_km;

let prezzo;

if(eta<18){
    prezzo = (tratta_km * 0.21)*0.8;
    document.getElementById('prezzo').innerHTML = nome +' Il prezzo è ' + prezzo.toFixed(2);
} else if(eta>65){
    prezzo = (tratta_km * 0.21)*0.6;
    document.getElementById('prezzo').innerHTML = nome +' Il prezzo è ' + prezzo.toFixed(2);
}
else{
    prezzo = tratta_km * 0.21;
    document.getElementById('prezzo').innerHTML = nome +' Il prezzo è ' + prezzo.toFixed(2);
}



