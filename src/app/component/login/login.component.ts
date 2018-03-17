import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService, private router: Router) { 
 
  }

  ngOnInit() {
  }
  public signIn() {
    if (!this.email) {
      console.log("enter email");
      return;
    }

    if (!this.password) {
      console.log("enter password!");
      return;
    }
    this.authService
      .signIn(this.email, this.password)
      .then(res => {
        //navigate to home
        console.log("login success!");
        
        this.router.navigate(['/home']);

      })

  }
}
