import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()

    const target = event.target
    const username:string = target.querySelector('#username').value
    const password:string = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success){
        //redirect the person to /admin
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      }else{
        window.alert(data.message)
      }
    })

    console.log(username, password)
  }

}
