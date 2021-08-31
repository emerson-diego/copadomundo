import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as moment from 'moment';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthenticationService
  ) {}

  canActivate() {
    const user = this.authService.getCurrentUser();

    if (user && user.expiration) {
      if (moment() < moment(user.expiration)) {
        return true;
      } else {
        this.notificationService.openSnackBar('Sua sessão tem expirada');
        this.router.navigate(['auth/login']);
        return false;
      }
    }

    this.router.navigate(['auth/login']);
    return false;
  }
}
