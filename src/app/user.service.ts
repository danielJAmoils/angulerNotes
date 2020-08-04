import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  status: boolean,
  email: string,
  quote: string
}

interface isLoggedIn {
  status:boolean
}

interface logoutStatus {
  success: boolean
}

interface quoteStatus {
  success: boolean,
  message?: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<myData>('/api/data')
  }

  updateQuote(value){
    return this.http.post<quoteStatus>('/api/quote', {
      value
    })
  }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isLoggedIn')
  }

  logout(){
    return this.http.get<logoutStatus>('/api/logout')
  }

}
