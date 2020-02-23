
//Defined arrays
var dogBreeds = ["labrador", "golden retriever", "german shepard", "doberman", "pyrenees", "chihuahua", "bishon frise", "shih tzu", "pomeranian", "cavalier king charles spaniel"];
    console.log(dogBreeds);

var userAnswer = [];

//word needs to be chosen at random at start of game
//use ... DogBreeds.length, (math.floor(math.random()), for loop
var chosenWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)]; 
    console.log(chosenWord);


//message
// var html = "<p>Dog Breed: " + chosenWord + "</p>";
// document.querySelector('#footer').innerHTML = html;


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
    chosenWord = dogBreeds[Math.floor(Math.random()*dogBreeds.length)]; 
        console.log(chosenWord);


    //for loop 
    remainingCharacters = chosenWord.length;
        for (var i=0; i< chosenWord.length; i++) {
            Answer[i] = "_ ";

        }
        document.getElementById("blanks").innerHTML = Answer.join(" ");
        document.getElementById("incorrectguess").innerHTML = incorrectguess;

        console.log(Answer);
        console.log(incorrectguess);
}

var k = 0;
continuum();
function reset() {
    remainingAttempts = remainingCharacters +3;
    Answer = [];
    incorrectguess = [];
    continuum();
}
var remainingAttempts = remainingCharacters +3;
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
                console.log("we got here don't know why");
                k++;
                remainingAttempts--;
                console.log("remaining attempt: " + remainingAttempts);
                document.getElementById("incorrectguess").innerHTML = incorrectguess.join(" ");
                //document.getElementById("attemptsleft").innerHTML = remainingAttempts;
                console.log(incorrectguess)
            }
            else {
                console.log("we are now out of if statement");
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
        else if (remainingAttempts <= 0) {
            // score.add("losses");
            losses++; 
            document.getElementById("losses").innerHTML = losses;
            console.log("wins: " + wins + "| losses: " + losses);
            reset();
        }
    }
//+extra choices for attempts left. try making levels
//code reset in JS once chosenWord completed
//tally mark on wins & losses



var remainingCharacters = chosenWord.length;


//for loop

    for (var i=0; i< chosenWord.length; i++) {
        userAnswer[i] = "_ ";

    }
    document.getElementById("blanks").innerHTML = userAnswer.join(" ");

    console.log(userAnswer);
    

//Game loop (contains actions for user choices)

while (remainingCharacters > 0) {


//user character choices
    document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        //make the incorrect user guesses into an array... was located under for loop if section, under "document.getElementById..."
        if (userGuess !==chosenWord[j]){
            console.log("we got here don't know why");
            document.getElementById("incorrectguess").innerHTML = userGuess;
        }
        console.log("we are now out of if statement");
        for (var j = 0; j< chosenWord.length; j++) {
            if (userGuess === chosenWord[j]) {
               userAnswer[j] = userGuess;
               remainingCharacters--;
               console.log(remainingCharacters);
            //    var test = document.getElementById(userGuess).value;
               document.getElementById("blanks").innerHTML = userAnswer.join(" ");
            }
           
        }
        // document.write(userAnswer);
    }

    break;
}
//look up new conditional for while
//use onkeypress rather than prompt
