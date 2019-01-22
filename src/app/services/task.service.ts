import { Injectable } from '@angular/core';
import { Task } from '../interfaces';

const placeholders = ["No title", "Todo", "No description"];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  currentId: number = 0;
  title: string = placeholders[0];
  state: string = placeholders[1];
  description: string = placeholders[2];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addTask({}); 
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    if(!task.title)
      task.title = this.title;
    if(!task.description)
      task.description = this.description;
    if(!task.state)
      task.state = this.state as Task["state"];

    if (!task.id || this.taskExists(task.id)) {
      task.id = ++this.currentId;
    }
    this.tasks.push(task);
  }

  private taskExists(id: number) {
    if (this.tasks.map(task => task.id == id).length != 0)
      return true;
    return false;
  }

  removeTaskById(id: number) {

  }
}
