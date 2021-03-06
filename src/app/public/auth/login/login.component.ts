import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import {AlertService} from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private authService: AuthService, private notif: AlertService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

signup(): void {
    this.router.navigateByUrl('public/auth/signup');
  }

forgotpassword(): void {
    this.router.navigateByUrl('public/auth/forgot-password');
  }

  onSubmit(f: FormGroupDirective): void {
    if(this.loginForm.valid) {
      this.authService.login(f.value.email, f.value.password);
      this.authService.isConnected().subscribe((status) => {
        if (status) {
          //redirection
          this.router.navigate(['/private/admin/weekdishes']);
          //notification utilisateur
          this.notif.onSuccess('Connexion réussi !');
        }
      });
    }else{
      this.submitted = true;
    }
  }

}
