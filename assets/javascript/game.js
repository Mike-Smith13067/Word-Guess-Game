// <!--Array of potential words-->
const words = ["mikesmith", "kevinbrown", "alexhampton", "alixgrillo", "baileemanzer", "bladetompkins",
"brittanyhuber", "brittniemmett", "chloestephens", "christianlevy", "jaysonjphillips",
"jeffreyfleer", "joditivis", "johngarrett", "katiconary", "kevinbrown", "lucasaho", "marktobin",
"nathaneal", "nathanielanderson", "nic", "nicholasherrick", "richardhamp", "sarahlcoffet", 
"stacyholtz", "stevenstott", "tuckerfiumara" ];

//<-- Pick a random word from array-->
let word = words[Math.floor(Math.random() * words.length)];
console.log (word);

//<-- answerArray to display correct number of letters in random word-->

let answerArray =[];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_";
}
console.log (answerArray);
console.log (word.length);

//<-- Prompt player for  guess-->

document.addEventListener('keypress', (event) => {
    let guess = String.fromCharCode(event.keyCode);
    console.log (guess);
    });

    //<-- if guess is correct-->
if(answerArray.indexOf(guess) > -1) {
    console.log(true);
    }

    let rightGuess = [];

    //<-- if guess is wrong-->

    let wrongGuess = [];

//<< -- variables for wins, losses -->
var wins = 0;
var losses = 0;
console.log (wins);
console.log (losses);

//<<-- variables for player tracking-->
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessedLetters = [];
console.log (guessedLetters);       





//<--Create var for remaining letters-->

var remainingLetters = word.length;
console.log (remainingLetters);

                       //<-- Main Loop-->

//<-- Letters left to guess loop-->
while (remainingLetters > 0) {

//<-- Show Playerprogress-->

alert(answerArray.join(" ")); //<-- displays with a "space" between underscores-->



//<-- if the guess is cancel-->
if (guess == null) {
alert("You have chosen to end the game. Good Bye!");
break; //<-- ends game-->

//<-- if the guess is not a letter or more than one letter-->
}else if (guess.length !== 1) {
alert(" Please enter a single letter");

//<-- if guess is a single letter--> 
}else {
for (j= 0; j< word.length; j++) {

}
}
// End of Main Game Loop
}

//<-- Display word-->
alert(answerArray.join(""));
//<-- Display congratulations-->
alert("Great Job! The answer was " + word);