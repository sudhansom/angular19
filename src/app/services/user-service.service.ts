import { Injectable, inject } from "@angular/core";
import { User } from "../models/user";
import { Observable, Subject } from "rxjs";
import * as uuid from "uuid";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    http: HttpClient = inject(HttpClient);
    selectedUser = new Subject<User>();

    updateSelectedUser(user: User){
        this.selectedUser.next(user);
    }
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

    saveData(user: User){
        fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), ...user})
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>('http://localhost:3000/user', {id: uuid.v4(), ...user});
      }

    updateUser(id: string, user:User): Observable<User> {
        return this.http.put<User>('http://localhost:3000/user/'+id,user);
    }
    getUsers(): Observable<User[]>{
        return this.http.get<User[]>('http://localhost:3000/user/');
    }

}