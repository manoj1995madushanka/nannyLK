import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindServiceComponent} from './find-service/find-service.component';

const appRoutes: Routes = [
  {path: '' , redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'findservice', component: FindServiceComponent}
  /*{path: 'recipes', component: RecipesComponent, children: [
      { path : '', component : RecipeStartComponent},
      {path : 'new', component: RecipeEditComponent},
      { path : ':id', component: RecipeDetailComponent},
      {path : ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}*/
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
