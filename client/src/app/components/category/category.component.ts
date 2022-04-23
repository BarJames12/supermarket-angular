import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public isMenuCollapsed = true;
  public isCollapsed = false;

  constructor(public stateService: StateService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  onAllProductClick() {
    this.stateService.categoryId =  null
    this.stateService.searchText = ''

  }

  onCategoryClick(event: any) {
    this.stateService.categoryId = event.target.value;
    this.stateService.searchText = ''

  }


}

