import {Component, OnInit} from '@angular/core';

import {ToDo} from "../../ToDo"
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  localItem: string;
  todos:ToDo[];

  constructor() {
    this.localItem=localStorage.getItem("todos");

    if(this.localItem==null){
    this.todos=[];
    }
    else {
      this.todos= JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
  }

  deleteTodo(todo : ToDo){
    console.log(todo)
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo : ToDo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  toggleToDo(todo : ToDo){
    const index= this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
