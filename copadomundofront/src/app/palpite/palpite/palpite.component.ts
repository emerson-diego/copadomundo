import { Component, OnInit } from '@angular/core';
import { Jogo } from '../jogo/jogo.model';
import { JogoService } from '../jogo/jogo.service';

@Component({
  selector: 'app-palpite',
  templateUrl: './palpite.component.html',
  styleUrls: ['./palpite.component.css'],
})
export class PalpiteComponent implements OnInit {
  jogos: Jogo[] | undefined;

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    this.jogoService.getJogos().subscribe(
      (jogos) => {
        this.jogos = jogos;
        console.log(jogos);
      },
      (error) => console.log(error)
    );
  }

  
}
