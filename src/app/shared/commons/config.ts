import { HttpHeaders } from '@angular/common/http';
import {
    environment
} from 'src/environments/environment';

export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
}
export const HTTP_CONFIG = {
    baseURL: environment.baseUrl,
    timeout: 25000,
    headers: HTTP_OPTIONS
};