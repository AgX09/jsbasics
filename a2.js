var oneLinerJoke = require("one-liner-joke");
var cowsay = require("cowsay");

var getRandomJoke = oneLinerJoke.getRandomJoke();
const joke = getRandomJoke.body;

console.log(
  cowsay.say({
    text: joke,
    e: "oO",
    T: "U ",
  })
);
