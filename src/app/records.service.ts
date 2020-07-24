import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface myData {
  obj:[
    {
      name:string,
      online:boolean
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<myData>('http://localhost:1234/file.php')//host server by cd test and php -S localhost:1234
  }
}
