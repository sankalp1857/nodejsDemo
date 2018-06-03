import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: Array<String> = [];
  value: String;
  res: Number;

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.employees.push('Monil Ladha');
    this.employees.push('Sankalp Mehra');
    this.employees.push('Aditya Singh');
    this.employees.push('Shivank Thapa');
  }

  submit(){
    this.res = Number(this.value);
    this._appService.addDataTestApi(this.res).subscribe(res => {
      this.value = (res['value']);
    });
  }
}
