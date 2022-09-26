import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 
    'This is simply a test', 
    'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg'),
    new Recipe('A test Recipe', 
    'This is simply a test', 
    'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
     this.recipeWasSelected.emit(recipe);

  }

}
