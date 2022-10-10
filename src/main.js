const prompt = require("prompt-sync")();

let score = 1;
let highscore = 1;
//user wird gefragt

function randon(max){ 
    return Math.floor(Math.random() * max);
}

//wird getestet ob richtig
while (true) {
    
    let random = randon(score);
    let userzahl = prompt("An welche Zahl denke ich?");
    
    if(random===Number(userzahl)){
        console.log("richtig!");
        score++;

        if(score > highscore){
            highscore = score;
        }

        let weiter = prompt("Sollen wir weiter machen? (true/false)")

        if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){
            console.log("Runde: " + score);
        }else{
            console.log("Score: " + (score-1) + "\nHighscore: " + (highscore-1) + "\nDanke fürs spielen!");
            break;
        }
        
    }else{
        console.log("falsch sie war " + random + "\nHighscore: " + (highscore-1));

        let weiter = prompt("Sollen wir weiter machen? (true/false)")

         if (["true", "ja", "yes", "wahr"].includes(weiter.toLowerCase())){

            score = 0;

            console.log("Runde: " + (score-1) + "\nHighscore: " + (highscores-1));

        }else{
            console.log("Score: " + (score-1) + "\nHighscore: " + (highscore-1) + "\nDanke fürs spielen!");
            break;
        }
        
    }
}


