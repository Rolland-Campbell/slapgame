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

function reset() {
  health = 100;
  update()
}

function slap() {
  health--;
  update()
}

function punch() {
  health -= 5;
  update()
}

function kick() {
  health -= 10;
  update()
}

function update() {
  let decreaseHealth = document.getElementById("healthEnemy")
  decreaseHealth.innerHTML = health.toString();
}

function giveItem(input) {
  let item = items[input]
  werewolf.inventory.push(item);
}

function addMods() {

}

