import {Injectable} from '@angular/core';
import {TodosDataInterface} from "./todos-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  todos: TodosDataInterface[] = [
    {id: 1, title: 'todo title', description: 'do something', done: false},
    {id: 2, title: 'todo app', description: 'finish todo app', done: false},
    {id: 3, title: 'todo app 2', description: 'finish todo app', done: false},
    {id: 4, title: 'todo app 3', description: 'finish todo app', done: false},
    {id: 5, title: 'todo app 4', description: 'finish todo app', done: false},
  ]

  constructor() {
  }

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
    // @ts-ignore
    this.todos[index].done = !this.todos[index].done;
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
