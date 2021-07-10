import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TodosDataService} from "../todos-data.service";

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent implements OnInit {
  @ViewChild('taskTitle', {static: true}) newTaskTitle: ElementRef | undefined;
  @ViewChild('taskDescription', {static: true}) newTaskDescription: ElementRef | undefined;

  constructor(private taskService: TodosDataService) {
  }

  ngOnInit(): void {
  }

  addNewTask(): void {
    if (this.newTaskTitle?.nativeElement.value.length > 4 || this.newTaskDescription?.nativeElement.value.length > 4) {
      const newTask = {
        id: this.taskService.getLastId() === 1 ? this.taskService.getLastId() : this.taskService.getLastId() + 1,
        title: this.newTaskTitle?.nativeElement.value,
        description: this.newTaskDescription?.nativeElement.value,
        done: false
      }
      this.taskService.newTask(newTask);
      console.log('add successful')
    } else {
      console.log('add failed')
    }
  }
}