import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HandleError, HttpErrorHandler } from 'src/app/shared/error.service';
import { environment } from 'src/environments/environment';
import { Palpite } from './palpite.model';

@Injectable({
  providedIn: 'root',
})
export class PalpiteService {
  urlPalpite = environment.api + 'palpite/';

  private readonly handlerError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handlerError = httpErrorHandler.createHandleError();
  }

  cadastrarSuprimentoFundos(palpite: Palpite): Observable<Palpite> {
    return this.http
      .post<Palpite>(this.urlPalpite, palpite)
      .pipe(catchError(this.handlerError()));
  }

  /* editarSuprimento(suprimento: Suprimento): Observable<Suprimento> {
    return this.http
      .put<Suprimento>(this.urlSuprimentosFundos, suprimento)
      .pipe(catchError(this.handlerError()));
  }*/
}
