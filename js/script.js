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
  console.log(firstNumber, secondNumber);
}

printNumbers(100, 1000);

//Question 3

const result = document.querySelector(".total");

function addNumbers(one, two, three) {
  const result = one + two + three;
  return result;
}

result.innerHTML = addNumbers(10, 100, 1000);

//Question 4

const welcomeMessage = document.querySelector("#name");

function createGreeting(greeting) {
  const welcomeMessage = "Hello, my name is " + greeting;
  return welcomeMessage;
}

welcomeMessage.innerHTML = createGreeting("Elvis");

//Question 5

//??

function printListItems(items) {
  for (let i = 0; i < items.length; i++);
}

printListItems(sports);

//Question 6

function createGames(parameter) {
  for (let i = 0; i < parameter.length; i++);
}
