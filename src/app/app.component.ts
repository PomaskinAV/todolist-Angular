import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>My To-Do List</h2>
      <input [(ngModel)]="newTask" placeholder="New task" />
      <button (click)="addTask()">Add</button>
      <ul>
        <li *ngFor="let task of tasks">{{ task }}</li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  newTask = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}