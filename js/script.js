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

printSeason("summer");

//Question 2

function printNumbers(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
}

printNumbers(5, 5);

//Question 3

function addNumbers(add1, add2, add3) {
  let sum = add1 + add2 + add3;
  return sum;
}

const result = addNumbers(5, 5, 3);

console.log(result);

const displayResult = document.querySelector(".total");
displayResult.innerHTML = result;

//Question 4

function createGreeting(name) {
  let sayMyName = "Hello my name is " + name + ".";
  return sayMyName;
}

const sayMyName = createGreeting("Martin");

const displayName = document.querySelector("#name");
displayName.innerHTML = sayMyName;

//Question 5
function printListItems(favSports) {
  for (let i = 0; i < favSports.length; i++) {
    console.log(favSports[i]);
  }
}

printListItems(sports);

//Question 6

function createGames(gameList) {
  let html = "";
  for (let i = 0; i < gameList.length; i++) {
    let release = "Unkown year";
    if (gameList[i].released) {
      release = gameList[i].released;
    }
    html += `<div class="game">
                     <h5>${gameList[i].name}</h5>
                     <p>Released: ${release}</p>
                     </div>`;
  }

  return html;
}

const listMyGames = createGames(games);

const displayGames = document.querySelector(".game-container");
displayGames.innerHTML = listMyGames;
