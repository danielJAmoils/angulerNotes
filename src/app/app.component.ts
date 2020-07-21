import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable = 'intro2angular';
  myDisabledValue = false
  constructor(){
    
  }

  callMyFunction(){
    this.myDisabledValue = !this.myDisabledValue
    console.log("function called")
  }
}
