import {Component, Input, OnInit} from '@angular/core';
import {TodosDataInterface} from "../todos-data.interface";
import {TodosDataService} from "../todos-data.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodosDataInterface | undefined;
  @Input() index: number | undefined;

  constructor(private todoDataService: TodosDataService) {
  }

  ngOnInit(): void {

  }

  taskDone(): void {
    this.todoDataService.taskToDone(this.index)
  }

  deleteTask() {
    this.todoDataService.deleteTask(this.index);
  }
}
