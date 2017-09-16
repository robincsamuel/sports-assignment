import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit,OnDestroy {
	id: number;
  private sub: any;
	standing = [];

  constructor(
  	private route:ActivatedRoute,
  	private competitionService:CompetitionService
  ) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
	  	this.competitionService.getLeagueTable(this.id)
	  		.then((standing) => this.standing = standing);
	  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
