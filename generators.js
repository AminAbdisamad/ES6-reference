/* Generators 
generators can run code return value and  go back to the funciton at the same place we left it 
Generators are function that could be entered and exited multiple times.
We use generators to iterate/generate  different data types 
!Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

*/
function* shopping() {
  // Going to the Store with cash
  const stafFromStore = yield "cash";
  //  Going to the loundary
  const cleanClothes = yield "loundary";

  //    going to the hairdresser
  const cutHair = yield "hair dresser";
  return [stafFromStore, cleanClothes, cutHair];
}

const gen = shopping();
console.log(gen.next()); // leavig our home
console.log(gen.next("groceries")); // leaving from the store
// leaving from the loundary with clean cloeths
console.log(gen.next("clean clothes"));

console.log(gen.next("Short Hair"));

// colors generator
function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

const rbg = [];
for (const color of colors()) {
  rbg.push(color);
}

rbg;

// Practical Example with generators
const testingTeam = {
  lead: "Alia",
  tester: "ubax",
  // improved
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "Engineering",
  lead: "Hassan",
  manager: "Ali",
  Engineer: "Hussein",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.Engineer;
    yield* testingTeam;
  }
};
const salesTeam = {
  lead: "Huse",
  teamMember: "Ahmed"
};
const businessTeam = {
  salesTeam,
  size: 6,
  department: "business",
  lead: "Geedi",
  manager: "Culus",
  director: "Ali"
};

// how to find only list of stuff in the engineeringTeam
function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.director;
  // yield *team.salesTeam //improved
  /*! Generator delegation */
  const testingTeam = testingIterator(team.salesTeam);
  yield* testingTeam;
}
// We use generator delegation when we've multiple generators that should be run together
function* testingIterator(team) {
  yield team.lead;
  yield team.teamMember;
}

const nameOfEngineeringTeam = [];
const nameOfBusinessTeam = [];
for (const name of teamIterator(businessTeam)) {
  nameOfBusinessTeam.push(name);
}
nameOfBusinessTeam;
for (const name of engineeringTeam) {
  nameOfEngineeringTeam.push(name);
}
nameOfEngineeringTeam;

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("Amazing", []),
  new Comment("superb", []),
  new Comment("The best of the best", [])
];

const obj = new Comment("Good Post!", children);

const values = [];
for (const child of obj) {
  values.push(child);
}

values;
