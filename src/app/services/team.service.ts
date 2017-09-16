import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {

  private headers = new Headers({ "X-Auth-Token":'053bc0c0c74d46368c421e27aa6b9586'});
  private apiUrl = 'http://api.football-data.org/v1/teams'; 
  
  constructor(private http: Http) { }

  getInfo(teamId): Promise<any> {
    return this.http.get(`${this.apiUrl}/${teamId}`, {headers: this.headers})
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  } 

  getPlayers(teamId): Promise<any> {
    return this.http.get(`${this.apiUrl}/${teamId}/players`, {headers: this.headers})
               .toPromise()
               .then(response => response.json().players)
               .catch(this.handleError);
  } 

  getFixtures(teamId): Promise<any> {
    return this.http.get(`${this.apiUrl}/${teamId}/fixtures?timeFrame=n15`, {headers: this.headers})
               .toPromise()
               .then(response => response.json().fixtures)
               .catch(this.handleError);
  } 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
