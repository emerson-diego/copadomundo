import { MediaMatcher } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { SpinnerService } from '../../core/services/spinner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean;
  usuario: any;

  private autoLogoutSubscription: Subscription;

  usuarioSubscription: Subscription;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public spinnerService: SpinnerService,
    private authService: AuthenticationService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    const timer_var = timer(2000, 5000);
    // this.autoLogoutSubscription = timer_var.subscribe((t) => {
    // this.authGuard.canActivate();
    // });
    this.showSpinner = false;
  }

  ngOnInit(): void {
    this.authService.verificaAutenticacao();
    this.usuarioSubscription = this.authService.currentUser.subscribe(
      (usuario) => {
        this.usuario = usuario;
        if (this.usuario != null) {
          this.isAdmin = this.usuario.isAdmin;
          this.userName = this.usuario.nome;
        }
      }
    );

    // console.log('executou ' + this.user.nome);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.usuarioSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    this.authService.logout();
  }

  previousPage(page: string) {
    localStorage.setItem('redirectTo', page);
  }
}
