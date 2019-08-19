//let health = 100;

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

//reset button set helth to 100, clear out array of item
function reset() {
  mirrorMonster.health = 100;
  console.log(player.inventory[0])
  player.inventory.length = 0;
  console.log(player.inventory)
  let showItem = document.getElementById("itemPick")
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

function update() {
  let decreaseHealth = document.getElementById("healthEnemy")
  decreaseHealth.innerHTML = mirrorMonster.health.toString();
}

//combined attacks into a single function
function attackButton(inputAttack) {

  let itemDamage = 0;
  if (player.inventory.length) {
    itemDamage = player.inventory[0].modifier
  }
  if (inputAttack == 'slap') {
    mirrorMonster.health -= (1 + itemDamage);
    update()
  } else if (inputAttack == 'punch') {
    mirrorMonster.health -= (5 + itemDamage);
    update()
  } else if (inputAttack == 'kick') {
    mirrorMonster.health -= (10 + itemDamage);
    update()
  }
}

//move item from obj list to inventory
function giveItem(input) {
  let item = items[input]
  let showItem = document.getElementById("itemPick")
  player.inventory[0] = item;
  showItem.innerHTML = `<br><b>${player.inventory[0].name}!!</b>`;
}

// for (let i = 0, i < itemDamage; i++) {
//   werewolf.health -= itemDamage
//   update()
// }