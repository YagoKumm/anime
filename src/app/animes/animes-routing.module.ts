import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes.component';
import { DetalheAnimeComponent } from './detalhe-anime/detalhe-anime.component';

const routes: Routes = [
  { path: '', component: AnimesComponent },
  { path: ':id', component: DetalheAnimeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
