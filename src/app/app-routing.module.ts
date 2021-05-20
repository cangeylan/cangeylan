import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: "", component: TopComponent },
  { path: "Home", component: TopComponent },
  { path: 'Players', component: PlayersComponent },
  { path: 'Top', component: TopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
