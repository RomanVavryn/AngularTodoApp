import { Component, OnInit } from '@angular/core';
import {TodosDataInterface} from "./todos-data.interface";
import {TodosDataService} from "./todos-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodosDataInterface[] = [];

  constructor(private todosItems: TodosDataService) { }

  ngOnInit(): void {
    this.todos = this.todosItems.getTodos();
  }
}
