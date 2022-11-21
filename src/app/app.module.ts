import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleListComponent } from './puzzle-list/puzzle-list.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleListComponent,
    AboutComponent,
    CartComponent,
    PuzzlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
