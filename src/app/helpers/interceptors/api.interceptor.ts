import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { local, prod } from 'src/environments';
import { HTTP_OPTIONS } from 'src/app/shared';

export class ApiInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const api = !local.production ? local.baseUrl : prod.baseUrl;
        const request = req.clone({ 
            url: `${api}${req.url}`,
        });
        return next.handle(request);
    }
}