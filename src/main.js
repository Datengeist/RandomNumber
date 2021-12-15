const prompt = require("prompt-sync")();

let score = 1;
//user wird gefragt

//wird getestet ob richtig
while (true) {
    
    let randon = random(score);
    let userzahl = prompt("An welche Zahl denke ich?");
    
    if(randon===Number(userzahl)){
        console.log("richtig!");
        score++;

        let weiter = prompt("Sollen wir weiter machen? (true/false)")

        if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){
            console.log("Runde: " + score);
        }else{
            console.log("Dein score war "+score+" Danke fürs spielen");
            break;
        }
        
    }else{
        console.log("falsch sie war " + randon);

        let weiter = prompt("Sollen wir weiter machen? (true/false)")

         if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){

            if (score !== 0) score --;

            console.log("Runde: " + score);

        }else{
            console.log("Dein score war "+score+" Danke fürs spielen");
            break;
        }
        
    }
}
//e
function random(max){ 
    return Math.floor(Math.random() * max);
}