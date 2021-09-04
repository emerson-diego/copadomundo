import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { JogoComponent } from './jogo/jogo.component';
import { PalpiteRoutingModule } from './palpite/palpite-routing.module';
import { PalpiteComponent } from './palpite/palpite.component';

@NgModule({
  imports: [CommonModule, PalpiteRoutingModule, SharedModule],
  declarations: [PalpiteComponent, JogoComponent],
})
export class PalpiteModule {}
