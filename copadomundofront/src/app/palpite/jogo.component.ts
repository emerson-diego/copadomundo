import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Jogo } from './jogo.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
})
export class JogoComponent implements OnInit {
  jogos: Jogo[] | undefined;
  palpiteForm: FormGroup;
  @Input() jogo: Jogo;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('teste');
    this.inicializarForm();
    /* this.jogoService.getJogos().subscribe(
      (jogos) => {
        this.jogos = jogos;
        console.log(jogos);
      },
      (error) => console.log(error)
    );*/
  }

  inicializarForm(): void {
    this.palpiteForm = this.fb.group({
      palpite1: ['', Validators.required],
      palpite2: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.palpiteForm);
  }
}
