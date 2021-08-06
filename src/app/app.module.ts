import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {Page404Component} from './page404/page404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TodoItemComponent} from './todo-list/todo-item/todo-item.component';
import {TodoNewItemComponent} from './todo-list/todo-new-item/todo-new-item.component';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoListComponent,
    Page404Component,
    TodoItemComponent,
    TodoNewItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
