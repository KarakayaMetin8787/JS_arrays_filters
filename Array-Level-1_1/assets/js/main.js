// ------------------ Array-Level-1_1 ----------------------

const person = ["171cm", "36 Jahre alt", "90 kilo"];
const friends = ["Bubu", "Ropka", "Rudi"];
const favoriteFood = ["Burger", "Döner", "Pizza"];

console.log(person);
console.log(friends);
console.log(favoriteFood);

//  ------------------ Codeflow_uebung_lvl_1_2: Arrays Index -------------

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

//  ---------------------- Array-Level-1_3 --------------------------

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// --------------------- Array-Level-1_4 -----------------------------

console.log(person);
console.log(friends);
console.log(favoriteFood);
const newPerson = [...person, "Glatze", "verheiratet"];
const newFriends = [...friends, "Waldi", "Alex"];
const newFood = [...favoriteFood, "Pasta", "Pommes"];
console.log(newPerson);
console.log(newFriends);
console.log(newFood);

// ------------------- Codeflow Übung: lev1_5: Arrays pop() -------------

const cutPerson = newPerson.pop();
const cutFirends = newFriends.pop();
const cutFood = newFood.pop();
console.log(cutPerson);
console.log(cutFirends);
console.log(cutFood);
console.log(newPerson);
console.log(newFriends);
console.log(newFood);

// --------------------- Codeflow_uebung_lvl_1_6: Arrays shift() -----------

const firstCutPerson = newPerson.shift();
const firstCutFirends = newFriends.shift();
const firstCutFood = newFood.shift();
console.log(firstCutPerson);
console.log(firstCutFirends);
console.log(firstCutFood);
console.log(newPerson);
console.log(newFriends);
console.log(newFood);

// ------------------- Codeflow_uebung_lvl_1_7: Arrays unshift() ----------

const FirstNewFriends = [...newFriends];
const FirstNewFood = [...newFood];
FirstNewFriends.unshift("Bubu");
FirstNewFood.unshift("Burger", "Sushi");
console.log(FirstNewFriends);
console.log(FirstNewFood);

// ------------ Codeflow Übung lev1_9: Push Pop Shift Unshift ---------------

