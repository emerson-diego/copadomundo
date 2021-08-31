import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from 'src/app/shared/error.service';
import { environment } from '../../environments/environment';
import { Usuario } from '../core/user/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private path = 'auth';
  API = environment.api;
  private readonly handlerError: HandleError;
  usuario: Usuario = new Usuario();

  //usuarioAutenticado: any;
  currentUser: any;
  page: string;

  private usuarioAutenticadoSubject = new BehaviorSubject<Usuario>(null);

  constructor(
    private http: HttpClient,
    @Inject('LOCALSTORAGE') private localStorage: Storage,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.verificaAutenticacao();

    this.handlerError = httpErrorHandler.createHandleError('');
  }

  login(email: string, password: string): Observable<any> {
    let auth = environment.api + this.path;

    this.usuario = new Usuario();
    this.usuario.email = email;
    this.usuario.senha = password;

    return this.http
      .post<Usuario>(auth, { email: email, senha: password })
      .pipe(
        tap((usuario) => {
          this.usuario = usuario;
          console.log('autenticando');
          this.usuario.expiration = moment().add(1, 'days').toDate();
          //this.usuario.expiration = moment().add(2, 'seconds').toDate();

          this.localStorage.setItem(
            'currentUser',
            JSON.stringify(this.usuario)
          );
          this.usuarioAutenticadoSubject.next(this.usuario);
        })
      )
      .pipe(catchError(this.handlerError()));
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.localStorage.removeItem('currentUser');
    this.usuario = null;
    this.usuarioAutenticadoSubject.next(this.usuario);
  }

  getCurrentUser(): any {
    // TODO: Enable after implementation
    return JSON.parse(this.localStorage.getItem('currentUser'));
  }

  verificaAutenticacao() {
    this.usuario = this.getCurrentUser();
    if (
      this.usuario &&
      this.usuario.expiration &&
      moment() < moment(this.usuario.expiration)
    ) {
      this.usuarioAutenticadoSubject = new BehaviorSubject(this.usuario);
      this.currentUser = this.usuarioAutenticadoSubject.asObservable();
    } else {
      this.usuarioAutenticadoSubject = new BehaviorSubject(null);
      this.currentUser = this.usuarioAutenticadoSubject.asObservable();
    }
  }

  verificaAutorizacao(perfil: string): boolean {
    this.usuario = this.getCurrentUser();
    if (
      this.usuario &&
      this.usuario.expiration &&
      moment() < moment(this.usuario.expiration)
    ) {
      for (let prop in this.usuario.authorities) {
        if (
          this.usuario.authorities[prop].authority === 'ROLE_admin' ||
          this.usuario.authorities[prop].authority === perfil
        )
          return true;
      }
    }

    return false;
  }

  verificaEdicao(perfil: string, colunas: string[]): string[] {
    let resultColunas = colunas;

    if (this.verificaAutorizacao(perfil)) {
      if (!colunas.includes('editarRegistro'))
        resultColunas.push('editarRegistro');
      if (!colunas.includes('excluirRegistro'))
        resultColunas.push('excluirRegistro');
    } else {
      let index = colunas.indexOf('editarRegistro');
      if (index > -1) {
        resultColunas.splice(index, 1);
      }
      index = colunas.indexOf('excluirRegistro');
      if (index > -1) {
        resultColunas.splice(index, 1);
      }
    }
    return resultColunas;
  }

  get getUsuarioAutenticadoSubject$(): Observable<Usuario> {
    return this.usuarioAutenticadoSubject.asObservable();
  }

  set setUsuarioAutenticadoSubject(usuario: Usuario) {
    this.usuarioAutenticadoSubject.next(usuario);
  }
}
