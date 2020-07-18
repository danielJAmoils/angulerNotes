import { Component } from '@angular/core';

export function log<T extends { new(...args: any[]): {} }>(className: T) {//function taken from stack overflow as one from tutorial was not working
  console.log(className)
  return class extends className {
    constructor(...args) {
      super(...args);
      console.log("Arguments passed to this class's constructor are ", args)//stackoverflow link: https://stackoverflow.com/questions/58188850/unable-to-resolve-signature-of-class-decorator-when-called-as-an-expression
    }
  }
} 


@log
class myExampleClass{
  constructor(arg1, arg2) {
    console.log("Contructor fired")
  }
}

const myClass = new myExampleClass(5, 10)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    console.log("this statement was made by the constructor",this.aSimpleMethod(5))
  }

  aSimpleMethod(a: number){
    return a*a
  }
}
