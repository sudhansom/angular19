import { Observable } from "rxjs";

export function createHttpObservable(url){
  return new Observable(observer => {
    fetch(url).then(response => response.json()).then(data => {
      observer.next(data);
      observer.complete();
    }).catch(err => {
      observer.next(err);
    })
  })
};
