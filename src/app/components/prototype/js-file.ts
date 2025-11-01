export const Person = function(name, age, city){
  this.name= name;
  this.age = age;
  this.city = city;
}

Person.prototype.showName = function(){
  return `Name: ${this.name} and from City: ${this.city}`;
}
