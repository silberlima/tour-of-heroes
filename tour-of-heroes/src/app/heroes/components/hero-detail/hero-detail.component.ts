import { Location } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId === `new`) {
      this.isEditing = false;
      this.hero = {name : ''} as Hero;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    }
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    this.heroService.create(this.hero).subscribe((hero) => console.log(hero));
  }

  update(): void {
    this.heroService.update(this.hero).subscribe((hero) => console.log(hero));
  }
}
