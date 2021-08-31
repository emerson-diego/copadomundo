import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-estados',
  templateUrl: './select-estados.component.html',
  styleUrls: ['./select-estados.component.css']
})
export class SelectEstadosComponent implements OnInit {

  @Output() estadoSelecionado = new EventEmitter<string>();
  @Input() estado = "PB";
  estados: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  constructor() { }

  ngOnInit() {
  }

  onEstadoSelecionado($event){
    console.log("EVENTO: "+ $event.value);
    this.estadoSelecionado.emit($event.value);
  }

}
