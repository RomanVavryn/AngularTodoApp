import {Component, OnInit} from '@angular/core';
import {TodosDataService} from "../todos-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent implements OnInit {
  newTaskForm: FormGroup | undefined;

  constructor(private taskService: TodosDataService) {
  }

  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      'taskTitle': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'taskDescription': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  addNewTask(): void {
    const newTask = {
      id: this.taskService.getLastId() === 1 ? this.taskService.getLastId() : this.taskService.getLastId() + 1,
      title: this.newTaskForm?.get('taskTitle')?.value,
      description: this.newTaskForm?.get('taskDescription')?.value,
      done: false
    }
    this.taskService.newTask(newTask);
    this.newTaskForm?.reset();
    // scroll to bottom page (to new item)
    // if remove setTimeout scroll will go to penultimate element
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0)
  }

}
