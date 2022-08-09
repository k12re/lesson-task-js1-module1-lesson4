const sports = ["golf", "football", "cricket"];

const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

//Question 1

function printSeason(season) {
  console.log(season);
}

printSeason("Summer");

//Question 2

function printNumbers(firstNumber, secondNumber) {
  console.log("First: " + firstNumber, "Second: " + secondNumber);
}

printNumbers(100, 1000);

//Question 3

function addNumbers(one, two, three) {
  const result = one + two + three;
  return result;
}

const total = addNumbers(10, 100, 1000);

const totalResult = document.querySelector(".total");
totalResult.innerHTML = total;

//Question 4

function createGreeting(name) {
  const greeting = "Hello, my name is " + name + ".";
  return greeting;
}

const greeting = createGreeting("Elvis");
const nameContainer = document.querySelector("#name");
nameContainer.innerHTML = greeting;

//Question 5

function printListItems(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

printListItems(sports);

//Question 6

function createGames(gamesList) {
  let html = "";

  for (let i = 0; i < gamesList.length; i++) {
    let releaseYear = "Unknown year";
    if (gamesList[i].released) {
      releaseYear = gamesList[i].released;
    }
    html += `<div class=game>
            <h5>${gamesList[i].name}</h5>
            <p>Released: ${releaseYear}<p>
            </div>`;
  }
  return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;
