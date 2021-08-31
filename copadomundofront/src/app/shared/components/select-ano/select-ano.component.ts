import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-ano',
  templateUrl: './select-ano.component.html',
  styleUrls: ['./select-ano.component.css'],
})
export class SelectAnoComponent implements OnInit {
  anos: string[];
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {}

  ngOnInit(): void {
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    this.anos = [year.toString()];
    let anoInicial = this.anos[0];
    this.formGroup.controls[this.controlName].setValue(anoInicial);
    for (let ano = year - 1; ano > 2011; ano--) {
      this.anos.push(ano.toString());
    }
  }
}
