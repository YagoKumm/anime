import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/anime.service';
import { Ianime } from 'src/app/animes';

@Component({
  selector: 'app-detalhe-anime',
  templateUrl: './detalhe-anime.component.html',
  styleUrls: ['./detalhe-anime.component.css']
})
export class DetalheAnimeComponent implements OnInit{

  animes: Ianime | undefined;

  constructor(private animeService: AnimeService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const animeId = Number(routeParams.get("id"));
    this.animes = this.animeService.getOne(animeId);
  }
}
