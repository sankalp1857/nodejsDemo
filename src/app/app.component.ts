import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: Array<String> = [];

  constructor(private _appService: AppService) {
    // this._appService.getEmployees().subscribe(response => this.employees = response);
  }

  ngOnInit() {
    this.employees.push('Monil Ladha');
    this.employees.push('Aditya Singh');
    this.employees.push('Shivank Thapa');
  }
}
