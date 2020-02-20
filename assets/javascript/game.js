var DogBreeds = ["Labrador", "Golden Retriever", "German Shepard", "Doberman", "Pyrenees", "Chihuahua", "Bishon Frise", "Shih Tzu", "Pomeranian", "Cavalier King Charles Spaniel"];
    console.log(DogBreeds);


//word needs to be chosen at random at start of game
//use ... DogBreeds.length, (math.floor(math.random())
var ChosenWord = DogBreeds[Math.floor(Math.random()*DogBreeds.length)]; 
    console.log(ChosenWord);


var html = "<p>Dog Breed: " + ChosenWord + "</p>";
document.querySelector('#footer').innerHTML = html;

