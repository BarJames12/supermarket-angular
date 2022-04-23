import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../models/IProducts';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products:IProducts[] , categoryId:number): any {
    
    if (categoryId != null) {
      return products.filter(product=> product.categoryId == categoryId)
    } 
    return products;
  }
}
