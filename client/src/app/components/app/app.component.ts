import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public productService: ProductService ) { }

 

}


