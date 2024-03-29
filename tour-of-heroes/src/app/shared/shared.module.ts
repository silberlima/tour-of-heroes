import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MaterialModule } from '../material/material.module';

const SHARED_COMPONENTS = [HeroSearchComponent];
const MODULES = [MaterialModule]

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [SHARED_COMPONENTS]
})
export class SharedModule {}
