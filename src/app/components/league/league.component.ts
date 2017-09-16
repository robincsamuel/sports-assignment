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
	error:any;

  constructor(
  	private route:ActivatedRoute,
  	private competitionService:CompetitionService
  ) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
	  	this.competitionService.getLeagueTable(this.id)
	  		.then((standing) => {
	  			console.log(standing)
	  			this.standing = standing
	  			this.error = false
	  		})
	  		.catch(error => {
	  			this.standing = [];
	  			this.error = "No league table available."
	  		})
	  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isObject(val) { return !(val instanceof Array); }


}
