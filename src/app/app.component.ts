import { Component } from '@angular/core';
import { Task } from './interfaces';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taskboard';

  list: Task[];

  constructor(taskService: TaskService) {
    this.list = taskService.getTasks();
  }


  onAdd(task: Task) {
    console.log(task);
  }

  onRemove(task: Task) {

  }

  onSelect(task: Task) {
    console.log(task);
  }
}


