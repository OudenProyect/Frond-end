import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // clone the http request
        req = req.clone({
            url: `http://127.0.0.1:8000${req.url}`
        });
        // move to next HttpClient request life cycle
        return next.handle(req);
    }
}