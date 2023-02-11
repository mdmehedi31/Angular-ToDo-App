import {Component, OnInit} from '@angular/core';

import {ToDo} from "../../ToDo"

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  todos:ToDo[];
  constructor() {

    this.todos=[
      {
        sno:1,
        title:"First Title",
        desc:"Hello this title only for you",
        active:true
      },
      {
        sno:2,
        title:"Second Title",
        desc:"Hello this title only for you secod",
        active:true
      },
      {
        sno:3,
        title:"Third Title",
        desc:"Hello this title only for you third",
        active:true
      },



    ]
  }
  ngOnInit(): void {
  }

}
