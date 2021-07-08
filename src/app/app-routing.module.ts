import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {Page404Component} from "./page404/page404.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'todo', component: TodoListComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
