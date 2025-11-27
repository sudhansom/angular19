import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";
import * as uuid from 'uuid';

const myId = uuid.v4();

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [
        new User(myId, 'sudhan', 'Poudel', 'Lalim'),
        new User(myId, 'resham', 'Poudel', 'Lalim'),
        new User(myId, 'som', 'Poudel', 'Lalim'),
        new User(myId, 'biren', 'Poudel', 'Lalim'),
    ];

    getAllUsers(){
        return new Observable((observer) => {
            observer.next(this.users);
        })
    }

}