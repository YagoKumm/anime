import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { DetalheAnimeComponent } from './detalhe-anime/detalhe-anime.component';


@NgModule({
  declarations: [
    AnimesComponent,
    DetalheAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }
