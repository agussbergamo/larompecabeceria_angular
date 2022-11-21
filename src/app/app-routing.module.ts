import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';

const routes: Routes = [
  {path: '', redirectTo:'puzzles', pathMatch:'full'},
  {path: 'puzzles', component: PuzzlesComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
