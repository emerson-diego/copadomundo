import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/app/auth/auth.service';
import { Usuario } from 'src/app/core/user/usuario';
import { Jogo } from '../jogo/jogo.model';
import { JogoService } from '../jogo/jogo.service';

@Component({
  selector: 'app-palpite',
  templateUrl: './palpite.component.html',
  styleUrls: ['./palpite.component.css'],
})
export class PalpiteComponent implements OnInit {
  jogos: Jogo[] | undefined;
  usuario: Usuario;
  usuarioSubscription: Subscription;

  constructor(
    private jogoService: JogoService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.usuarioSubscription = this.authService.currentUser.subscribe(
      (usuario) => (this.usuario = usuario)
    );

    this.jogoService.getJogos(this.usuario).subscribe(
      (jogos) => {
        this.jogos = jogos;
        console.log(jogos);
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }
}
