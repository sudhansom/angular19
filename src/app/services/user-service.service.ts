import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";
import * as uuid from "uuid";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [
        new User(uuid.v4(), 'sudhan', 'Poudel', 'Lalim'),
        new User(uuid.v4(), 'resham', 'Poudel', 'Lalim'),
        new User(uuid.v4(), 'som', 'Poudel', 'Lalim'),
        new User(uuid.v4(), 'biren', 'Poudel', 'Lalim'),
    ];

    getAllUsers(){
        return new Observable((observer) => {
            observer.next(this.users);
        })
    }

}