import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 
  constructor(public AfService: AfService) { }
 
  ngOnInit() {
  }
  login(){
    this.AfService.loginWithGoogle();
  }
 
}
 
open "login-page.component.html" file from "C:\project\angular5\src\app\login-page"
 
<h1>Login to your account using Google</h1>
<button (click)="login()">Login</button>
<div *ngIf="AfService.user | async as user"> 
 
        <h3>Heelo {{user.displayName}}</h3>
    <img [src]="user.photoURL">
    <button (click)="AfService.logout() ">Logout</button>   
</div>