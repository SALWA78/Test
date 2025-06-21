import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
 
})
export class App {
  tasks:string[]=[];
  task:string="";
  i=0
  addTask(){
    
      this.tasks.push(this.task);
      this.task="";
      console.log(this.tasks[this.i])
      this.i++;
  }
  deleteTask(i:number){
      this.tasks.splice(i,1);
  }
  
}
