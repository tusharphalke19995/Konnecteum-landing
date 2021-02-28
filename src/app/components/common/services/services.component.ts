import { Component, OnInit } from '@angular/core';
import { CATEGORY_DETAILS_ONE, CATEGORY_DETAILS_TWO } from 'src/assets/data/category';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  categoriesOne = CATEGORY_DETAILS_ONE;
  categoriesTwo = CATEGORY_DETAILS_TWO;
  constructor() { }

  ngOnInit() {}

  onCategoryClick(category_id) {
    sessionStorage.setItem('category_id', category_id);
  }
}
