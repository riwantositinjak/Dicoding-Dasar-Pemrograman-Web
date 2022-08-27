const userChoices = document.getElementById("yours");
const compChoices = document.getElementById("comp");
const resultGame = document.getElementById("result");
const possibly = document.querySelectorAll("button");
let userClick;
let compChoosing;
let result;

possibly.forEach((possible) => {
  possible.addEventListener("click", (e) => {
    userClick = e.target.id;
    userChoices.innerHTML = userClick;
    generateComputer();
    getResult();
  });
});

const generateComputer = () => {
  const randomNumber = Math.floor(Math.random() * possibly.length);
  if (randomNumber === 0) {
    compChoosing = "Batu";
  } else if (randomNumber === 1) {
    compChoosing = "Gunting";
  } else if (randomNumber === 2) {
    compChoosing = "Kertas";
  }
  compChoices.innerHTML = compChoosing;
};

const getResult = () => {
  if (userClick === compChoosing) {
    result = "DRAW";
  }
  if (userClick === "Gunting" && compChoosing === "Kertas") {
    result = "YOU WON";
  }
  if (userClick === "Gunting" && compChoosing === "Batu") {
    result = "YOU LOSE";
  }
  if (userClick === "Batu" && compChoosing === "Kertas") {
    result = "YOU LOSE";
  }
  if (userClick === "Batu" && compChoosing === "Gunting") {
    result = "YOU WON";
  }
  if (userClick === "Kertas" && compChoosing === "Gunting") {
    result = "YOU LOSE";
  }
  if (userClick === "Kertas" && compChoosing === "Batu") {
    result = "YOU WON";
  }
  resultGame.innerHTML = result;
};
