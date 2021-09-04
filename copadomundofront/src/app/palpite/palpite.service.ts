import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jogo } from './jogo.model';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  urlJogos = environment.api + 'jogos/';

  constructor(private http: HttpClient) {}

  getJogos(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.urlJogos);

    // console.log("erro");
  }
}
