import { Component } from '@angular/core';

export function log(target:object, name:string, descriptor:PropertyDescriptor){
  //console.log(target, name, descriptor)
  //store the original function in a variable
  const original = descriptor.value
  //do some manipulations with descriptor.value function

  descriptor.value = function(...args){
    console.log("Arguments ", args, "were passed in this function")
    const result:number = original.apply(this, args)
    console.log("the result of the function is", result)
    return result
  }

  //return descriptor
  return descriptor
}

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

  @log//member decorator
  aSimpleMethod(a: number){
    return a*a
  }
}
