//Defined arrays
var dogBreeds = ["labrador", "goldenretriever", "germanshepard", "doberman", "pyrenees", 
"chihuahua", "bishonfrise", "shihtzu", "pomeranian", "cavalierkingcharlesspaniel"];
    console.log(dogBreeds);

//variables set 1
var Answer = [];
var chosenWord =[];
var remainingCharacters = 0;
var incorrectguess = [];
var wins = 0;
var losses = 0;

//word needs to be chosen at random at start of game
//use ... DogBreeds.length, (math.floor(math.random()), for loop
function continuum() {
    //for loop 
        for (var i=0; i< chosenWord.length; i++) {
            Answer[i] = "_ ";

        }
        document.getElementById("blanks").innerHTML = Answer.join(" ");
        document.getElementById("incorrectguess").innerHTML = incorrectguess;

        console.log(Answer);
        console.log(incorrectguess);
}

var k = 0;
reset();
function reset() {
    chosenWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];
    remainingCharacters = chosenWord.length;
    remainingAttempts = remainingCharacters +4;
    Answer = [];
    incorrectguess = [];
    continuum();
}
var remainingAttempts = remainingCharacters +4;
    console.log("remainingattempt: " + remainingAttempts);
    document.getElementById("attemptsleft").innerHTML = remainingAttempts;
//Game loop (contains actions for user choices)
//user character choices
    document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        //ascii code for alphabet
        if (event.keyCode >= 65 && event.keyCode <= 90) {

                //account for spaces
                //make the incorrect user guesses into an array
                //if user repeats char guess, computer won't restate it
            if (chosenWord.includes(userGuess) == false){
                incorrectguess[k] = userGuess;
                console.log("we are in the false statement");
                k++;
                remainingAttempts--;
                console.log("remaining attempt: " + remainingAttempts);
                document.getElementById("incorrectguess").innerHTML = incorrectguess.join(" ");
                //document.getElementById("attemptsleft").innerHTML = remainingAttempts;
                console.log(incorrectguess)
            }
            else {
                console.log("we are now in the else");
                for (var j = 0; j< chosenWord.length; j++) {
                    if (userGuess === chosenWord[j]) {
                    Answer[j] = userGuess;
                    remainingCharacters--;
                    remainingAttempts--;
                    console.log("remaining characters: " + remainingCharacters);
                    document.getElementById("blanks").innerHTML = Answer.join(" ");
                    //document.getElementById("attemptsleft").innerHTML = remainingAttempts;
                    console.log("keep going")
                    }
                }
            }
            document.getElementById("attemptsleft").innerHTML = remainingAttempts;
        }
        else {
            alert("Please only enter letters from the American alphabet");
        }
    //complete the chosenWord. restart game. add point to win or loss
        //try to do "if the remaining char equal or less than zero, say that the game ends and writes wins/losses"
        if (remainingCharacters <= 0) {
            // score.add("wins");
            wins++;
            document.getElementById("wins").innerHTML = wins;
            console.log("wins: " + wins + " | losses: " + losses);
            reset();
        }
        //I think the reset remaining attempts issue lies within this statement & not the function reset...
        else if (remainingAttempts <= 0) {
            // score.add("losses");
            losses++; 
            document.getElementById("losses").innerHTML = losses;
            console.log("wins: " + wins + "| losses: " + losses);
            reset();
        }
    }
//+extra choices for attempts left. try making levels
//NEED TO FIX "REMAINING ATTEMPTS LEFT" SO IT FULLY RESETS
//ATTACH PHOTOS TO RANDOMIZED CHOSEN DOG BREEDS
