import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = [
    {
      name: "Daniel", 
      online: true
    },
    {
      name:"abc",
      online: false
    },
    {
      name:'xyz',
      online:true
    },
    {
      name: "Daniel", 
      online: true
    },
    {
      name:"abc",
      online: false
    },{
      name: "Daniel", 
      online: true
    },
    {
      name:"abc",
      online: false
    },
  ]
}
