//VAR1
console.log("=======================TASK1");
class Animal {
  speak() {
    console.log("Sound");
  }
}

class Human extends Animal {
  speak() {
    console.log("Hello!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const human = new Human;
const dog = new Dog;

human.speak(); 
dog.speak();


console.log("=======================TASK2");
//Принцип открытости и закрытости, т.к. класс AreaCalculator не зависит от типа Rectangle и может вызывать метод area(),
//открыты для расширения, но закрыты для модификаций


console.log("=======================TASK3");
//Принцип единственной ответственности, класс User хранит данные и сохраняет их в бд


console.log("=======================TASK4");
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Я ${this.name}`);
  }
}

const user1 = new User("user1");
console.log(user1.greet());


console.log("=======================TASK5");
//Принцип единственной ответственности. Класс Order управляет товарами в заказе, считает стоимость заказа, печатает чек