import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from '../heroes/hero.model';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('Test message');
    return heroes;
  }
}
