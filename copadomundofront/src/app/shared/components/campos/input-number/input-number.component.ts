import { AfterContentInit, Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../services/validar-campos.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent implements AfterContentInit {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() mask: string;
  @Input() min: number;
  @Input() valorWidth: string;
  @Input() disabled = false;

  constructor(public validacao: ValidarCamposService) {}

  ngAfterContentInit(): void {
    if(this.disabled){
      this.formGroup.controls[this.controlName].disable();
    }

    console.log(this.disabled);
    console.log('teste');
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
