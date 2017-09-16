import { Router } from '@angular/router'; 
import { Component, OnInit, Input } from '@angular/core';

import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	competitions = [];
	@Input() competitionId: number;

  constructor(private competitionService: CompetitionService, private router:Router) { }

  ngOnInit() {
  	this.competitionService.getCompetitions()
  		.then((competitions) => this.competitions = competitions);
  }

  selectCompetition() {
  	this.router.navigate(['league', this.competitionId]);

  }

}
