import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JogoComponent } from './jogo.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [JogoComponent],
  exports: [JogoComponent],
})
export class JogoModule {}
