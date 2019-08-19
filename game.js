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

let player = {
  name: "Conan",
  health: 100,
  inventory: []
}

//reset button set helth to 100, clear out array of item
function reset() {
  health = 100;
  console.log(player.inventory[0])
  player.inventory.length = 0;
  console.log(player.inventory[0])
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

//combined attacks into a single function
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
  player.inventory.push(item);
}

let i = 0
let itemDamage = player.inventory[0].modifier

// for (i = 0, i < itemDamage; i++) {
//   health -= itemDamage
//   update()
// }