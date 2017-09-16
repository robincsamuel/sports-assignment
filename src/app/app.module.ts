import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { TeamService} from './services/team.service';
import { CompetitionService} from './services/competition.service';

import { TeamIdPipe } from './pipes/team-id.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { LeagueComponent } from './components/league/league.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { KeysPipe } from './pipes/keys.pipe';

const routes: Routes = [
	{ path: '',				component: HomeComponent },
	{ path: 'league/:id',	component: LeagueComponent },
	{ path: 'team/:id',		component: TeamComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    TeamIdPipe,
    LeagueComponent,
    CountdownComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [CompetitionService,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
