import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public admin: Admin;

  constructor(private _service: AuthService, private router: Router){
    this.admin = new Admin();
  }

  onLogin(){
    this._service.login(this.admin).subscribe((res)=>{
      this.router.navigateByUrl('/dashboard');
    },
    (error)=>{
      console.log(error.error.message);
    });
  }

}