// WINS, LOSES, GUESSES //

var wins = 0;
var losses = 0;
var userGuesses = 10;
var seinfeldCharacters = seinfeldCharacters;
var usedArray = [];
var randomLetter = "abcdefghijklmnopqrstuvwxyz"


var seinfeldCharacters = [
    "George Costanza",
    "Elaine",
    "Cosmo",
    "Jerry",
    "Soup Nazi",
    "Frank Costanza",
    "Estelle Costanza",
    "The Drake",
    "J Petterman",
    "George Steinbrenner",
    "Bubble Boy",
    "Close Talker",
    "Lloyd Braun",
    "Kenny Bania",
    "Sue Ellen Mischke",
    "Manya",
    "Mr Pitt",
    "Morty Seinfeld",
    "Dr Tim Whatley",
    "David Putty",
    "Uncle Leo",
    "Newman"    
];




// RANDOM LETTER //
function guess() {
 seinfeldCharacters = randomLetter[Math.floor(Math.random() * letters.length)];

}
// FUNCION TO RUN WHENEVER USER PRESSES A KEY //

document.onkey = function (event) {
    var userGuesses = event.key;

    var seinfeldCharacters = usedArray[1];
}
// ANSWER //

document.onkeypress = function(event) {
    var guess = event.key;
        if(guess === randomLetter){
            wins++;
        }
        else{
            guesses--;
        }
        if(guesses = 0){
            losses++
        }
    document.getElementById('wins').innerHTML = "Wins:" + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left:" + guesses;
        


// ANSWER //

alert(answerArray.join(""));
alert("You Guessed The Correct Letter" + letter);

// DISPLAY USER GUESSES AND WINS/LOSSES //

guess.textcontent = "You Chose: " + userGuesses;
wins.textContent + "wins: " + wins;
lossesText.textContent = "losses: " + losses;
    }; 
    