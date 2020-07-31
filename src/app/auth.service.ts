import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface response {
  success:boolean,
  message?: string,
  secret?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true')
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  getUserDetails(username:string, password:string){
    //post these details to API server return user info if correct
    return this.http.post<response>('/api/auth.php', {
      username,
      password
    })
  }
}
