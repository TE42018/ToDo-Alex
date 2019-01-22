import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  visible: boolean = false;
  taskService: TaskService;  
  title: string;
  state: string;
  description: string;
  
  @Output() submit = new EventEmitter<any>();

  constructor(taskService: TaskService) {
    this.taskService = taskService;
   }

  ngOnInit() {
  }

  // private resetForm(){
  //   this.title = placeholders[0];
  //   this.state = placeholders[1];
  //   this.description = placeholders[2];
  // }

  toggleVisible(){
    this.visible = !this.visible;
  }

  onTitleChange(event){
    console.log("New title: " + event.target.value);
    this.title = event.target.value;
  }

  onStateChange(event){
    console.log("New state: " + event.target.value);
    this.state = event.target.value;
  }

  onDescriptionChange(event){
    console.log("New description: " + event.target.value);
    this.description = event.target.value;
  }

  onSubmit(event){
    console.log("New task: " + this.title);
    this.taskService.addTask({title: this.title, state: this.state as Task["state"], description: this.description})
    this.toggleVisible();
    //this.resetForm();
  }
}
