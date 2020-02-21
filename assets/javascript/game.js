
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
