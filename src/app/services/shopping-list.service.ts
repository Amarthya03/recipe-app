import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Apples', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addManyIngredients(ingredients: Ingredient[]) {
    // for (let ing of ingredients) {
    //   this.addIngredients(ing);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
