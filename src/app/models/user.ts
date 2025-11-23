import { last } from "rxjs";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    address: string;

    constructor(id: string, fristName: string, lastName: string, address: string){
        this.id = id;
        this.firstName = fristName;
        this.lastName = lastName;
        this.address = address;
    }
}