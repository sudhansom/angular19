import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";
import * as uuid from "uuid";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [
        new User(uuid.v4(), 'resham', 'Poudel', 'rkspoudel@gmail.com', 33, "Danmark"),
        new User(uuid.v4(), 'som', 'Poudel', 'skspoudel@gmail.com', 33, "Danmark"),
        new User(uuid.v4(), 'biren', 'Poudel', 'bikspoudel@gmail.com', 33, "Danmark"),
    ];

    getAllUsers(){
        return new Observable((observer) => {
            observer.next(this.users);
        })
    }

}