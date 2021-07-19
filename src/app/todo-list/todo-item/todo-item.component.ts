import {Component, Input, OnInit} from '@angular/core';
import {TodosDataInterface} from "../todos-data.interface";
import {TodosDataService} from "../todos-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodosDataInterface | undefined;
  @Input() index: number | undefined;

  editMode: boolean = false;
  editingForm: FormGroup | undefined;

  constructor(private todoDataService: TodosDataService) {
  }

  ngOnInit(): void {
    this.editingForm = new FormGroup({
      'editedTitle': new FormControl(this.todoItem?.title, [Validators.required, Validators.minLength(5)]),
      'editedDescription': new FormControl(this.todoItem?.description, [Validators.required, Validators.minLength(5)])
    })
  }

  taskDone(): void {
    this.todoDataService.taskToDone(this.index)
  }

  deleteTask() {
    this.todoDataService.deleteTask(this.index);
  }

  saveChanges(): void {
    const updatedItem: TodosDataInterface = {
      id: this.todoItem?.id,
      title: this.editingForm?.get('editedTitle')?.value,
      description: this.editingForm?.get('editedDescription')?.value,
      done: this.todoItem?.done
    }
    this.todoDataService.updateItem(this.index, updatedItem);
  }

}
