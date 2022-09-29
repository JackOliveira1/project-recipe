import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Piannaple', 20),
    new Ingredient('Apples', 7),
    new Ingredient('Orange', 6)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ingredienteAdicionado(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
