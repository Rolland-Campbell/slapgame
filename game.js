//let health = 100;

//dictionary of items to pull damage modifiers from later
let items = {
  sword: { name: 'Sword of Crom', modifier: 15, description: 'AAAGGHH!' },
  spikedGauntlet: { name: 'Gauntlet of DOOM', modifier: 3, description: 'DOOOM' },
  bootSpike: { name: 'Barbarian Booties', modifier: 5, description: 'POKE POKE' },
  furyClaw: { name: 'Fury Claws', modifier: 3, description: 'Angry Claws' },
  block: { name: 'Block', modifier: -5, description: 'OOF' },
  parry: { name: 'Parry', modifier: -10, description: 'MISSED ME' },
}

//later use, only using health for now
let mirrorMonster = {
  name: "Mirror Monster",
  health: 100,
  inventory: []
}

let player = {
  name: "Conan",
  health: 100,
  inventory: []
}

//reset button set health to 100, clear out array of item
function reset() {
  //resets health to 100 on page
  mirrorMonster.health = 100;
  //resets inventory to 0
  player.inventory.length = 0;
  let showItem = document.getElementById("itemPick")
  //updates screen back to default text
  showItem.innerHTML = "<br><b>Unbridled FURY!!</b>"
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

//this function updates the monster health to the screen
function update() {
  let decreaseHealth = document.getElementById("healthEnemy")
  decreaseHealth.innerHTML = mirrorMonster.health.toString();
}

//combined attacks into a single function
function attackButton(inputAttack) {
  //setting default itemDamage to 0
  let itemDamage = 0;
  if (player.inventory.length) {
    //if there is an item in inventory, it uses the modifier damage instead
    itemDamage = player.inventory[0].modifier
  }
  if (inputAttack == 'slap') {
    mirrorMonster.health -= (1 + itemDamage);
    noNegative()
    update()
  } else if (inputAttack == 'punch') {
    mirrorMonster.health -= (5 + itemDamage);
    noNegative()
    update()
  } else if (inputAttack == 'kick') {
    mirrorMonster.health -= (10 + itemDamage);
    noNegative()
    update()
  }
}

//move item from obj list to inventory
function giveItem(input) {
  let item = items[input]
  let showItem = document.getElementById("itemPick")
  player.inventory[0] = item;
  //updating the item on page, using `stuff` for string interpolation
  showItem.innerHTML = `<br><b>${player.inventory[0].name}!!</b>`;
}

//function to keep health from going below 0
function noNegative() {
  if (mirrorMonster.health < 1) {
    mirrorMonster.health = 0;
  }
}
