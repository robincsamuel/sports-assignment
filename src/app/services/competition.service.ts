import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompetitionService {
	private headers = new Headers({ "X-Auth-Token":'053bc0c0c74d46368c421e27aa6b9586'});
  private apiUrl = 'http://api.football-data.org/v1/competitions'; 
  
  constructor(private http: Http) { }

  getCompetitions(): Promise<any> {

    return this.http.get(this.apiUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  } 

  getLeagueTable(id): Promise<any> {
  	return this.http.get(`${this.apiUrl}/${id}/leagueTable`, {headers: this.headers})
               .toPromise()
               .then(response => response.json().standing)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
