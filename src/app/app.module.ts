import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InputSectionComponent } from "./input-section/input-section.component";
import { AnimationSectionComponent } from './animation-section/animation-section.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
    ])
  ],
  declarations: [AppComponent, InputSectionComponent, AnimationSectionComponent, CardStackComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
