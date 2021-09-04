import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PalpiteRoutingModule } from './palpite-routing.module';
import { PalpiteComponent } from './palpite.component';

@NgModule({
  imports: [CommonModule, PalpiteRoutingModule, SharedModule],
  declarations: [PalpiteComponent],
})
export class PalpiteModule {}
