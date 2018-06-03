import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  result: any;

  constructor(private _http: HttpClient) {
  }

  addDataTestApi(value: Number) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = { 'value': value };
    return this._http.post('http://localhost:3000/add', body, { headers: headers }).pipe(
      map((res: Response) => this.result = res)
    );
  }
}
