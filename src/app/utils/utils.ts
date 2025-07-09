import { Observable, throwError } from "rxjs";

export function createHttpObservable(url: string){
  return Observable.create(observer => {
    fetch(url).then(response => {
      if(response.ok){
        return response.json();
      }else {
        return throwError({"message":"Error with status code "+ response.status})
      }
    }).then(data => {
      setTimeout(() => {
        observer.next(data);
        observer.complete();
      }, 1000);
    }).catch(err => {
      observer.error(err);
    })
  })
}


export function createHttpsObservable(url: string){
  return new Observable(observer => {
    fetch(url)
      .then(response => {
        if(response.ok){
          return response.json();
        }else {
          return throwError(() => new Error("Error with status code "+ response.status))
        }
      })
      .then(data => {
        observer.next(data);
        observer.complete();
      }).catch(err => observer.error())
  })
}
