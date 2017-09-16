import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit,OnDestroy {
	id: number;
  private sub: any;
  players = [];
  fixtures = [];
  team: any;

  constructor(
  	private route:ActivatedRoute, 
  	private location: Location,
  	private teamService: TeamService
	) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.teamService.getInfo(this.id).then(team => this.team = team)
       this.teamService.getPlayers(this.id).then(players => this.players = players)
       this.teamService.getFixtures(this.id).then(fixtures => this.fixtures = fixtures)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(){
  	this.location.back();
  }

}
