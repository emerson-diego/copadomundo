import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
})
export class InputFileComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() fileName: string;
  @Output() arquivoAdicionado = new EventEmitter<string>();
  file: File;

  constructor() {}

  ngOnInit(): void {}

  onFileSelectedPrograma(event) {
    // this.file = event.target.files[0];

    // if (this.fileName) {
    // this.fileName = this.file.name;
    // }

    this.arquivoAdicionado.emit(event);
  }
}
