import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/service/auth.service';

@Component({
  selector: 'layout-header-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  constructor( private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  logout(){
    this._authService.logout();
    this._router.navigateByUrl('/auth/login');
  }

}
