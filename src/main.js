const prompt = require("prompt-sync")();

//fürt funktion aus uns speichert in variable
let randon = random();
//user wird gefragt
let userzahl = prompt("An welche Zahl denke ich");
//wird getestet ob richtig
if(randon===Number(userzahl)){
    console.log("richtig!");
}else{
    console.log("falsch sie war " + randon);
}

//e
function random(){ 
    return Math.floor(Math.random() * 2 + 1);
}
