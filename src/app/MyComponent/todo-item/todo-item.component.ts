import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../ToDo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

   @Input() toDo : ToDo

  constructor() {

  }

  ngOnInit(): void {
    }

    onClick(){
      console.log("On Click Triggerd...")
    }
}
