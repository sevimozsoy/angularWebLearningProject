import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { 
  }
  private name= "Sevim";

  // items = [
  //   "item 1", "item 2", "item 3"
  // ];

  items=[
    {id:"1",description: "Kahvaltı", action: "Yes"},
    {id:"2",description: "Spor", action: "No"},
    {id:"3",description: "Alışveriş", action: "Yes"},
  ]

  getName(){
    return this.name;
  }
}
