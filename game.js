let health = 100;

let items = {
  sword: { name: 'Sword of Crom', modifier: 15, description: 'AAAGGHH!' },
  spikedGauntlet: { name: 'Gauntlet of DOOM', modifier: 3, description: 'DOOOM' },
  bootSpike: { name: 'Barbarian Booties', modifier: 5, description: 'POKE POKE' },
  furyClaw: { name: 'Fury Claws', modifier: 3, description: 'Angry Claws' },
  block: { name: 'Block', modifier: -5, description: 'OOF' },
  parry: { name: 'Parry', modifier: -10, description: 'MISSED ME' },
}

let werewolf = {
  name: "Werewolf",
  health: 100,
  inventory: []
}

//later use
let player = {
  name: "Conan",
  health: 100,
  inventory: []
}

//reset button set helth to 100, clear out array of item
function reset() {
  health = 100;
  console.log(werewolf.inventory[]);
  // werewolf.inventory[];
  update()
}

//original attack buttons
// function slap() {
//   health--;
//   update()
// }

// function punch() {
//   health -= 5;
//   update()
// }

// function kick() {
//   health -= 10;
//   update()
// }

function update() {
  let decreaseHealth = document.getElementById("healthEnemy")
  decreaseHealth.innerHTML = health.toString();
}

function attackButton(inputAttack) {
  if (inputAttack == 'slap') {
    health--;
    update()
  } else if (inputAttack == 'punch') {
    health -= 5;
    update()
  } else if (inputAttack == 'kick') {
    health -= 10;
    update()
  }
}

//move item from obj list to inventory
function giveItem(input) {
  let item = items[input]
  // console.log(input)
  werewolf.inventory.push(item);
}