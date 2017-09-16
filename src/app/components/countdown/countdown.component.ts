import { Component, OnInit,Input} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
	@Input() date: any;
	countdown = '';
	private timer;

  constructor() { }

  ngOnInit() {
  	this.timer = setInterval(this.updateTimer.bind(this), 1000);
  }

  updateTimer(){
  	let myMoment: moment.Moment = moment(this.date);
  	let duration = moment.duration(myMoment.diff(moment()))
  	if(duration.asSeconds() < 0) {
  		clearInterval(this.timer)
  		this.countdown = "00:00:00:00";
  		return
  	}
  	this.countdown = this.padDigits(duration.days(),2) + ":" + this.padDigits(duration.hours(),2) + ":" + this.padDigits(duration.minutes(),2)+ ":" + this.padDigits(duration.seconds(),2)

  }

  padDigits(number, digits) {
	  return Array(Math.max(digits - String(number).length + 1, 0)).join("0") + number;
	}
}
