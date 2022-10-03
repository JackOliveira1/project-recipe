import { Component, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // new Recipe('A test Recipe', 
    // 'This is simply a test', 
    // 'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg'),
    // new Recipe('Another test Recipe', 
    // 'This is simply a test', 
    // 'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg')
  ];


  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }

}
