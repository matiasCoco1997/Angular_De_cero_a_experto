import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {


  constructor(
    private _authService:AuthService,
    private router: Router,
     ){}


  onLogin():void{
    this._authService.login("matias@gmail.com", "1234")
    .subscribe( user => {
      this.router.navigateByUrl("/");
    });
  }

}
