import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../services/validar-campos.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css'],
})
export class InputTextareaComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() widthValue: string = '100%';

  constructor(public validacao: ValidarCamposService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
