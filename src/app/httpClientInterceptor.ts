import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {isPlatformServer} from '@angular/common';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(isPlatformServer(this.platformId));
    console.log(req.url);
    if (!isPlatformServer(this.platformId) && req.url.includes('./')) {
      console.log(`http://localhost:4200/${req.url.replace('./', '')}`);
      return next.handle(req.clone({
        url: `http://localhost:4200/${req.url.replace('./', '')}`
      }));
    }

    return next.handle(req);
  }
}
