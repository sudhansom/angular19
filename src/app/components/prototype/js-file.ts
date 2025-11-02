// export const Person = function(name, age, city){
//   this.name= name;
//   this.age = age;
//   this.city = city;
// }

// Person.prototype.showName = function(){
//   return `Name: ${this.name} and from City: ${this.city}`;
// }

export class Person {
  name: string;
  age: number;
  city: string;

  constructor(name: string, age: number, city: string){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  calcAge(){
    return 'This function calculates the age.'
  }
}

export class Employee extends Person {
  employeeId: string;
  salary: number;

  constructor(name: string, age: number, city: string, employeeId: string, salary:number){
    super(name, age, city);
    this.employeeId = employeeId;
    this.salary = salary;
  }

  employeeDetails(){
    return 'this function will show the details of the employee.'
  }
}
