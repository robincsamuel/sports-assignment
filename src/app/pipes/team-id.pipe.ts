import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamId'
})
export class TeamIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if(value) return value.match(/([^\/]*)\/*$/)[1];
  }

}
