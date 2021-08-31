import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from '../../auth/auth.service';

@Directive({
  selector: '[cpChecaPermissao]',
})
export class ChecaPermissaoDirective implements OnInit, OnDestroy {
  // @Input() perfil: string;

  // private onDestroy$ = new Subject<boolean>();
  usuarioSubscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  perfil: string;
  @Input()
  set cpChecaPermissao(role: string) {
    this.perfil = role;
  }

  ngOnInit() {
    // console.log(this.perfil);
    this.usuarioSubscription = this.authService.currentUser.subscribe(
      (user) => {
        if (!!user && this.authService.verificaAutorizacao(this.perfil)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  ngOnDestroy() {
    this.usuarioSubscription.unsubscribe();
    // this.onDestroy$.next(true);
    // this.onDestroy$.unsubscribe();
  }
}
