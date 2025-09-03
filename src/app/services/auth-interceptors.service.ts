import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorsService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Auth interceptor handled....');
      const customReq = req.clone({headers: req.headers.append("example", "example-only")});
      return next.handle(customReq);
  }
}
