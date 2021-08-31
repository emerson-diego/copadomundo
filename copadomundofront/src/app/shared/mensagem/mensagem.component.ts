import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()
  mensagem = "Mensagem de Erro"
  constructor() { }

  ngOnInit(): void {
  }

}
