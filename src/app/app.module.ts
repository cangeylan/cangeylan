import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayersComponent } from './players/players.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayersComponent,
    TopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    ,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
