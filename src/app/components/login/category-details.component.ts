import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY_DETAILS } from 'src/assets/data/category';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  categories;
  constructor(private router: Router) { }

  ngOnInit() {
    var categoryId = sessionStorage.getItem('category_id');
    if(!categoryId) {
      this.router.navigate(['/']);
    } else {
      const categories = CATEGORY_DETAILS.filter(category => parseInt(categoryId) === category.id);
      this.categories = categories[0]
    }
  }

}
