import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  @Input() screenWidth = 0;
  alert: any;

  constructor(private router: Router, private service: LoginService) {}

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username.trim() == null
    ) {
      this.alert.open('Enter the username please !!', 'ok', {
        duration: 3000,
      });
      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password.trim() == null
    ) {
      this.alert.open('Enter the password please!!', 'ok', {
        duration: 3000,
      });
      return;
    }
    this.service.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.service.loginUser(data.token);
        this.service.getCurrentUser().subscribe((user: any) => {
          this.service.setUser(user);
          console.log(user);
          if (this.service.getUserRole() == 'ADMIN') {
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.service.loginStatusSubjec.next(true);
          } else if (this.service.getUserRole() == 'NORMAL') {
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.service.loginStatusSubjec.next(true);
          } else {
            this.service.logout();
          }
        });
      },
      (error) => {
        console.log(error);
        this.alert.open('Invalid details , please try again !! !!', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
