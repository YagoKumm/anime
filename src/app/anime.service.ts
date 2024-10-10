import { Injectable } from '@angular/core';
import { animes, Ianime } from './animes';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animes: Ianime[] = animes;

  constructor() { }

  getAll(){
    return this.animes
  }

  getOne(animeID: number){
    return this.animes.find(animes => animes.id = animeID)
  }
}
