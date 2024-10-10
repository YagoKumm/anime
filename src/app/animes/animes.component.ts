import { Component, OnInit } from '@angular/core';
import { animes, Ianime } from '../animes';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit{

  animes: Ianime[] | undefined;

  constructor(private animeService: AnimeService){}

  ngOnInit(): void {
    this.animes = this.animeService.getAll()
  }
}
