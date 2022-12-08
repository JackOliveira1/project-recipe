import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";


import { Ingredient } from "../shared/ingredient-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe(
            'Carne com batata', 
            'Deliciosa carne ao molho madeira', 
            'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg', 
        [
            new Ingredient('Meat', 10 ),
            new Ingredient('Batata Frita', 5)
        ]),
        new Recipe(
            'Another test Recipe', 
            'This is simply a test', 
            'https://img.taste.com.au/nyBI7B1_/taste/2017/08/steak-with-mushroom-sauce-129161-2.jpg', 
        [
            new Ingredient('Carne', 22),
            new Ingredient('Peixe', 35)
        ])
      ];


      constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    } 

    getRecipe(index: number){
        return this.recipes[index]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    } 


    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}