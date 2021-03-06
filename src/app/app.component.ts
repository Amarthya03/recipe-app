import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService],
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
