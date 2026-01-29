import { last } from "rxjs";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    age: number;
    email: string;
    // gender: string;

    constructor(id: string, fristName: string, lastName: string, email: string, age: number, country: string){
        this.id = id;
        this.firstName = fristName;
        this.lastName = lastName;
        this.country = country;
        this.age = age;
        this.email = email;
        // this.gender = gender
    }
}