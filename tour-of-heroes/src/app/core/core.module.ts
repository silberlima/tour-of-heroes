import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';

const COMPONENTS = [MessagesComponent, ToolbarComponent,PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS ],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error('CoreModulo has already been loaded. Import this modulo in the AppModule')
    }
  }
}
