console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  // You don't have to announce functions when building them inside a class.
  // See below:
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  /*
    removeHobby(hobby) {
        let foundIndex = this.hobbies.indexOf(hobby);

        // Collect all values before foundIndex
        let valuesBefore = this.hobbies.slice(0, foundIndex);
        // Collect all values after foundIndex
        let valuesAfter = this.hobbies.slice(foundIndex + 1);
        // Update hobbies
        this.hobbies = valuesBefore.concat(valuesAfter);
    }

    
    rmvHobby(rmvH) {
        this.hobbies = this.hobbies.filter((hobby) => hobby != rmvH);
    }
    */

  spliceHobby(spcH) {
    // Find the indexof spcH
    let foundIndex = this.hobbies.indexOf(spcH);
    if (foundIndex !== -1) {
      // Use splice to remove the value at that index
      this.hobbies.splice(foundIndex, 1);
    }
  }

  greeting() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  info() {}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = `Full Stack Web Developer`;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name} and I'm a coder.`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let joe = new Person(`Joe`, 2, `Arizona`, [`Biking`, `Hiking`, `Aerobics`]);
let alice = new Coder(`Alice`, 1, `San Francisco`, [`Coding`, `Gaming`]);

joe.greeting();
alice.greeting();
console.log(joe);
console.log(alice);
console.log(`Joe removes Hiking from his hobbies list.`)
joe.spliceHobby(`Hiking`);
console.log(joe);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }

  reset() {
    this.result = 0;
    return this.result;
  }

  add(a, b) {
    let result;
    if (b == null) {
      result = this.result + a;
    } else {
      result = a + b;
    }
    this.result = result;
    return this.result;
  }

  subtract(a, b) {
    let result;
    if (b == null) {
      result = this.result - a;
    } else {
      result = a - b;
    }
    this.result = result;
    return this.result;
  }

  multiply(a, b) {
    let result;
    if (b == null) {
      result = this.result * a;
    } else {
      result = a * b;
    }
    this.result = result;
    return this.result;
  }

  divide(a, b) {
    let result;
    if (b == null) {
      result = this.result / a;
    } else {
      result = a / b;
    }
    this.result = result;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

let calc = new Calculator();

calc.add(10)
calc.subtract(2)
calc.multiply(4)
calc.divide(2)
calc.displayResult();
calc.reset()
console.log(`5 + 3 =`)
calc.add(5, 3);
calc.displayResult();
console.log(`5 - 3 =`)
calc.subtract(5, 3);
calc.displayResult();
console.log(`5 * 3 =`)
calc.multiply(5, 3);
calc.displayResult();
console.log(`5 / 3 =`)
calc.divide(5, 3);
calc.displayResult();
