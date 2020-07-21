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
    this.myVariable = ""
    this.myDisabledValue = false
    setInterval(() => {
      this.myVariable = Math.random().toString()
      this.myDisabledValue = Math.random() > 0.5
    }, 500)
  }

  callMyFunction(){
    
  }
}
