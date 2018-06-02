import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  result;

  constructor() {

  }

  // getEmployees() {
  //   return this._http.get('/employees').pipe(
  //     map(result => this.result = result.json().data)
  //   );
  // }
}
