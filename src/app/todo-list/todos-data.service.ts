import {Injectable} from '@angular/core';
import {TodosDataInterface} from "./todos-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  todos: TodosDataInterface[] = [
    {id: 1, title: 'todo title', description: 'do something', done: false},
    {id: 2, title: 'todo example 1', description: 'todo example 1', done: false},
    {id: 3, title: 'todo example 2', description: 'todo example 2', done: true},
    {id: 4, title: 'todo example 3', description: 'todo example 3', done: false},
    {id: 5, title: 'todo example 4', description: 'todo example 4', done: true},
  ]

  getTodos(): TodosDataInterface[] {
    return this.todos
  }

  getLastId(): number {
    if (!this.todos.length) {
      return 0;
    } else {
      return <number>this.todos[this.todos.length - 1].id;
    }
  }

  taskToDone(index: number | undefined): void {
    this.todos[index!].done = !this.todos[index!].done;
  }

  deleteTask(index: number | undefined): void {
    if (typeof index === "number") {
      this.todos.splice(index, 1);
    }
  }

  newTask(item: TodosDataInterface): void {
    this.todos.push(item);
  }

  updateItem(index: number | undefined, item: TodosDataInterface): void {
    if (typeof index === "number") {
      this.todos.splice(index, 1, item);
    }
  }

}
