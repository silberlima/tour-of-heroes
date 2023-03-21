import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [HeroSearchComponent];
const MODULES = [MaterialModule]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS]
})
export class SharedModule {}
