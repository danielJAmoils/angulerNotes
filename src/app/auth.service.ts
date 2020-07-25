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

  constructor(private http: HttpClient) { }

  getUserDetails(username:string, password:string){
    //post these details to API server return user info if correct
    return this.http.post<response>('/api/auth.php', {
      username,
      password
    })
  }
}
