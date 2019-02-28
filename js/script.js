const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const mySpells = document.getElementById('spells');
const pickedUp = document.getElementById('pickedUp');

let currentLocation = 0;

let locations = [];
//Prologue
locations[0] = "Begin Forest";
locations[1] = "Forest Cave";
locations[2] = "First Meeting"
locations[3] = "Beginners Town";
locations[4] = "Forest Cave Small Passage";
locations[5] = "First Fight";
locations[6] = "First Library";
locations[7] = "The First Spell Book";
locations[8] = "Prince Meeting";

//Begin Adventure
locations[9] = "Guild";
locations[10] = "HorseStable";
locations[11] = "StableMerchant";
locations[12] = "TakeOff";
locations[13] = "Road1";
locations[14] = "Road2";
locations[15] = "Road3";
locations[16] = "SecondTown";
locations[17] = "SecondLibrary";
locations[18] = "SecondSpellBook";
locations[19] = "ThirdSpellBook";
locations[20] = "WeaponShop";
locations[21] = "RustySword";
locations[22] = "SwordTransformation";



images = [];
images[0] = "";
images[1] = "";
images[2] = "";
images[3] = "";
images[4] = "";
images[5] = "";
images[6] = "";
images[7] = "";
images[8] = "";

directions = [];
directions[0] = ["north", "sourth"];
directions[1] = ["north", "east"];
directions[2] = ["north"];
directions[3] = ["north", "east"];
directions[4] = ["west"];
directions[5] = [""];
directions[6] = ["north"];
directions[7] = ["spell book", "south"];
directions[8] = [""];

descriptions = [];
descriptions[0] = "";
descriptions[1] = "";
descriptions[2] = "";
descriptions[3] = "";
descriptions[4] = "";
descriptions[5] = "";
descriptions[6] = "";
descriptions[7] = "";
descriptions[8] = "";

myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "go") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "north":
            currentLocation += 1;
            break;
          case "south":
            currentLocation -= 1;
            break;
          case "east":
            currentLocation += 3;
            break;
          case "west":
            currentLocation -= 3;
            break;
        }
      } else {
        feedback.innerHTML = "That's not possible!";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "grab") {
      pickedUp.innerHTML = "You've picked up: " + 
      console.log('Grab something');
      myInput.value = "";
    }

    if (inputArray[0] == "use"){
      console.log('Use something');
      myInput.value = "";
    }

    if (inputArray[0] != "go" && inputArray[0] != "grab" && inputArray[0] != "use" ){
      feedback.innerHTML = "usable comands are: go, grab, use and help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "Possible directions: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  mySpells.innerHTML = "You currently have no spells.";
}

function removeFeedback() {
  feedback.innerHTML = "";
}

giveLocation();
