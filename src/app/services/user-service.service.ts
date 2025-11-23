import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [
        new User('1', 'sudhan', 'Poudel', 'Lalim'),
        new User('2', 'resham', 'Poudel', 'Lalim'),
        new User('3', 'som', 'Poudel', 'Lalim'),
        new User('4', 'biren', 'Poudel', 'Lalim'),
    ];

    getAllUsers(){
        return new Observable((observer) => {
            observer.next(this.users);
        })
    }

}