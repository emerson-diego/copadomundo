import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JogoRoutingModule } from './jogo-routing.module';
import { JogoComponent } from './jogo.component';

@NgModule({
  imports: [CommonModule, JogoRoutingModule, SharedModule],
  declarations: [JogoComponent],
})
export class JogoModule {}
