import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/user/usuario';
import { environment } from 'src/environments/environment';
import { Jogo } from './jogo.model';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  urlJogos = environment.api + 'jogos/';

  constructor(private http: HttpClient) {}

  getJogos(usuario: Usuario): Observable<Jogo[]> {
    let usuarioPalpites = usuario?.id;
    if (usuarioPalpites == null) {
      usuarioPalpites = '-1';
    }
    let urlJogosComPalpites = this.urlJogos + usuarioPalpites;
    return this.http.get<Jogo[]>(urlJogosComPalpites);

    // console.log("erro");
  }
}
