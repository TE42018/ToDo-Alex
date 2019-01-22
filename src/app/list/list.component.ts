import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../interfaces';
import { TaskService } from '../services/task.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() list: Task[];
  @Output() select = new EventEmitter<Task>();
  // list: Task[];

  constructor(taskService: TaskService) {
    this.list = taskService.getTasks();
  }

  onAdd(task: Task) {

  }

  onRemove(task: Task) {

  }

  onSelect(task: Task) {
    this.select.emit(task);
  }

  ngOnInit() {
  }
}
