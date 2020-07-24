import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){
    return [
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
}
