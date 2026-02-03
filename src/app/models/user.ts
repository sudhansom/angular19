import { last } from "rxjs";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    gender: string;
    address: {
        country: string;
        city: string;
    }


    constructor(id: string, fristName: string, lastName: string, email: string, age: number, country: string, gender: string, city){
        this.id = id;
        this.firstName = fristName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.gender = gender;
        this.address = {
            country: country,
            city: city,
        }
        
    }
}