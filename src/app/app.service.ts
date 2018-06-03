import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  _url: String;
  result: any;

  constructor(private _http: HttpClient) {
    console.log(window.location.origin);
    this._url = window.location.origin;
  }

  addDataTestApi(value: Number) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = { 'value': value };
    return this._http.post(this._url + '/add', body, { headers: headers }).pipe(
      map((res: Response) => this.result = res)
    );
  }
}
