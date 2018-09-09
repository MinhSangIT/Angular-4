import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { wordsang_Component } from '../sang/new.component';
import { StructComponent } from './struct/struct.component';
import { PersionComponent } from './persion/persion.component';
import { ListPersionComponent } from './list-persion/list-persion.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [
    AppComponent,
    wordsang_Component,
    StructComponent,
    PersionComponent,
    ListPersionComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
