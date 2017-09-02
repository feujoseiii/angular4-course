import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description', 'http://celine.co.nz/wp-content/uploads/2015/05/spaghetti-bolognaise.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
