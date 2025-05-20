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
