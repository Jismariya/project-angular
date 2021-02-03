import { Component, OnInit } from '@angular/core';
import task from '../files/task.json';

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.scss']
})
export class TaskPoolComponent implements OnInit {
  public taskList:{id:string, title:string, input:string, description:string, type:string, progress:string, endingdate:string, endingtime:string, empid:string}[] = task;
  changeText: boolean;
  constructor() { 
    this.changeText = false;
  }

  ngOnInit(): void {
  }

}
