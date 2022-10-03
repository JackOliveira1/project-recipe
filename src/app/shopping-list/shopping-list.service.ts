import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Piannaple', 20),
        new Ingredient('Apples', 7),
        new Ingredient('Orange', 6)
    ];

    getIngredients (){
        return this.ingredients.slice();
    }      
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        
    }

    addIngredients(ingredient: Ingredient[]){
        // for(let ingredient of this.ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...this.ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}