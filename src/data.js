var DOG_DATA = [
  {
    name: "StarFox",
    pronoun: "He",
    age: "7",
    breed: "Lab/Pyreneese Mix"
  },
  {
    name: "Lenny",
    pronoun: "He",
    age: "2",
    breed: "Lab/Cattle Dog Mix"
  },
  {
    name: "Luna",
    pronoun: "She",
    age: "1",
    breed: "German Shepherd"
  }
];

function randomDog() {
  return DOG_DATA[Math.floor(Math.random() * DOG_DATA.length)];
}

export { randomDog };