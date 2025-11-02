// export const Person = function(name, age, city){
//   this.name= name;
//   this.age = age;
//   this.city = city;
// }

// Person.prototype.showName = function(){
//   return `Name: ${this.name} and from City: ${this.city}`;
// }

export class Person {
  constructor(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  calcAge(){
    return 'This function calculates the age.'
  }
}
