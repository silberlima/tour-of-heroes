import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes,
      (err) => console.log(err),
      () => console.log('Ok')
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
