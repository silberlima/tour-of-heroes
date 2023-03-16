import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length}`)));
  }

  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.name} heroes`)));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService:${message}`);
  }
}
