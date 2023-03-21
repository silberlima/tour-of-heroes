import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeoresRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeoresRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class HeroesModule {}
