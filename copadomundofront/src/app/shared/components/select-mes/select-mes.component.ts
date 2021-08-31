import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-mes',
  templateUrl: './select-mes.component.html',
  styleUrls: ['./select-mes.component.css'],
})
export class SelectMesComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  ngOnInit(): void {}
}
