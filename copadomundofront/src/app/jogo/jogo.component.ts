import { Component, OnInit } from '@angular/core';
import { Jogo } from './jogo.model';
import { JogoService } from './jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
})
export class JogoComponent implements OnInit {
  jogos: Jogo[] | undefined;

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    console.log('teste');
    this.jogoService.getJogos().subscribe(
      (jogos) => {
        this.jogos = jogos;
        console.log(jogos);
      },
      (error) => console.log(error)
    );
  }
}
