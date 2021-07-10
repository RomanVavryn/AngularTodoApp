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

  editMode: boolean = false;
  editedTitle: string | undefined
  editedDescription: string | undefined
  CanSave: boolean = false;
  constructor(private todoDataService: TodosDataService) {
  }

  ngOnInit(): void {
    this.editedTitle = this.todoItem?.title;
    this.editedDescription = this.todoItem?.description;
  }

  taskDone(): void {
    this.todoDataService.taskToDone(this.index)
  }

  deleteTask() {
    this.todoDataService.deleteTask(this.index);
  }

  canSaveChanges(): void {
    if (this.editedTitle && this.editedDescription) {
      this.CanSave = this.editedTitle.trim().length > 4 && this.editedDescription.trim().length > 4;
    }
  }

  saveChanges(): void {
    const updatedItem: TodosDataInterface = {
      id: this.todoItem?.id,
      title: this.editedTitle,
      description: this.editedDescription,
      done: this.todoItem?.done
    }
    this.todoDataService.updateItem(this.index, updatedItem);
  }
}
