import { Pipe, PipeTransform } from '@angular/core';
import { StateService } from '../services/state.service';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  constructor(  public stateService: StateService){}
  transform(value: any, args?: any): any {
      if(!value)return null;
      if(!args)return value;

      args = args.toLowerCase();
      return value.filter(function(data:any){
          return JSON.stringify(data.productName).toLowerCase().includes(args);
      });
  }

}