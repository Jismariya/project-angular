import { Component } from '@angular/core';
import countries from './files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management';
  public countryList:{name:string, code:string}[] = countries;
  changeText: boolean;
  constructor() {
    this.changeText = false;
 }
}
