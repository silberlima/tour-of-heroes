import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);

  }
}
