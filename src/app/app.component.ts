import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  currentDate =  new Date().toLocaleDateString();
  newTask = '';
  tasks:any[] = [];

  addTask(){
    if(this.newTask){
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  removeAllTask(){
    this.tasks = [];
  }
}
