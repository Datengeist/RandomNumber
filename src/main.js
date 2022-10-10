const prompt = require("prompt-sync")();

let score = 1;
let highscore = 1;

//Generiert die zufällige Zahl
function generateRandom(max){ 
    return Math.floor(Math.random() * max);
}

while (true) {
    
    //Fragt den nutzer, was er denkt, was die Zahl ist
    let randomNumber = generateRandom(score);
    let userzahl = prompt("An welche Zahl denke ich?\t");
    
    //Vergleicht die vom Nutzer gegebene Zahl mit der zufällig generierten Zahl 
    if(randomNumber===Number(userzahl)){

        //Richtig Fall
        console.log("richtig!");
        score++;

        //aktualisiert den Highscore falls nötig
        if(score > highscore){
            highscore = score;
        }

        //Fragt nach weiterspiel
        const weiter = prompt("Sollen wir weiter machen? (true/false)\t");

        if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){
            console.log("Runde: " + score);
        }else{
            console.log("Score: " + (score - 1) + "\nHighscore: " + (highscore - 1) + "\nDanke fürs spielen!");
            break;
        }
        
    }else{
        //Falsch Fall
        console.log("falsch sie war " + randomNumber + "\nHighscore: " + (highscore-1));

        //Fragt nach weiterspiel
        const weiter = prompt("Sollen wir weiter machen? (true/false)\t");

         if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){

            score = 0;

            console.log("Runde: " + (score) + "\nHighscore: " + (highscore - 1));

        }else{
            console.log("Score: " + (score - 1) + "\nHighscore: " + (highscore - 1) + "\nDanke fürs spielen!");
            break;
        }
        
    }
}


