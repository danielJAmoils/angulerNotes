import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface response {
  success:boolean,
  message?: string,
  secret?: string
}

interface registerResponse {
  success:boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(email:string, password:string){
    //post these details to API server return user info if correct
    return this.http.post<response>('/api/login', {
      email,
      password
    })
  }

  registerUser(email:string, password:string){
    return this.http.post<registerResponse>('/api/register', {
      email,
      password
    })
  }
}
