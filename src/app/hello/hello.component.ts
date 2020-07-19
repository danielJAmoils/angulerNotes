import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myVariable = "Daniel"
  bitwiseOR = 2 | 5 //010 | 101 => 0 | 1 is 1 then 1 or 0 is 1 then 0 | 1 is 1 = 111 or 7
  i = 0
  someVariable = Math.random()

  constructor() { }

  doSomeHeavyTask(){
    console.log(`called ${this.i++} times`)
  }

  ngOnInit(): void {
    setInterval(() => {
      this.someVariable = Math.random()//every time number is updated heavy task is called
    }, 50)
  }

}
