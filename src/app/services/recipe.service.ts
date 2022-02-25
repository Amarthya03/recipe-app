import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza recipe',
      'https://www.simplyrecipes.com/thmb/1KOEQ0SPZNXwU0pUXUDdAm6Z7xo=/2001x2001/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 2)]
    ),
    new Recipe(
      'Burger',
      'Burger recipe',
      'https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mediumSquareAt3X.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addManyIngredients(ingredients);
  }
}
