import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindServiceComponent} from './find-service/find-service.component';
import {ForumComponent} from './forum/forum.component';
import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';

const appRoutes: Routes = [
  {path: '' , component: AppComponent},
  {path: 'findservice', component: FindServiceComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'signup', component: SignupComponent}
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
