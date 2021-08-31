import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-periodo',
  templateUrl: './select-periodo.component.html',
  styleUrls: ['./select-periodo.component.css'],
})
export class SelectPeriodoComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  ngOnInit(): void {
    this.formGroup.controls[this.controlName].setValue('2');
  }
}
