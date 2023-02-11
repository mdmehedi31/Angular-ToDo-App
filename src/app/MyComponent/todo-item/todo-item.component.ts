import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../../ToDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

   @Input() toDo : ToDo
   @Output() todoDelete: EventEmitter<ToDo>= new EventEmitter()
   @Output() todoCheckbox: EventEmitter<ToDo>= new EventEmitter()

  constructor() {
  }
  ngOnInit(): void {
    }
    onClick(toDo : ToDo){
     this.todoDelete.emit(toDo);
      console.log("On Click Triggerd...");
    }
  onCheckboxClick(toDo){
      this.todoCheckbox.emit(toDo);
  }
}
