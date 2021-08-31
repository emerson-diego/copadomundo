import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { JogoComponent } from './jogo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: JogoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoRoutingModule {}
