import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(
    private router: Router,
    private titleService: Title,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    @Inject('LOCALSTORAGE') private localStorage: Storage
  ) {}

  ngOnInit() {
    this.titleService.setTitle('ContasPúblicas - Login');
    this.authenticationService.logout();
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  login() {
    const usuario = this.loginForm.get('usuario').value;
    const senha = this.loginForm.get('senha').value;

    this.loading = true;
    this.authenticationService.login(usuario.toLowerCase(), senha).subscribe(
      (data) => {
        const redirect = localStorage.getItem('redirectTo');
        if (redirect) {
          localStorage.removeItem('redirectTo');
          //this.router.navigate([`${redirect}`]);
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.notificationService.show('Usuário ou senha inválido', 'error');
        this.loading = false;
      }
    );
  }
}
