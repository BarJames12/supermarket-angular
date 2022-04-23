import { Pipe, PipeTransform } from '@angular/core';
import { StateService } from '../services/state.service';

@Pipe({
  name: 'highlight',
  pure: false,
})
export class HighlightPipe implements PipeTransform {

  constructor(public stateService: StateService) { }

  transform(value: string): unknown {
    let re = new RegExp(this.stateService.checkoutSearchValue.value, 'gi');
    return value.replace(re, (s) => {
      return `<span class="highlight">${s}</span>`;
    });
  }
}
