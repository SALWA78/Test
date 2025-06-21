import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";



@Component({
    selector: 'todo-test',
    standalone: true,
    templateUrl: './todoTest.html',
    styleUrls: ['./todoTest.css'],
    imports:[FormsModule,CommonModule,NgFor]
})
export class TodoTest {

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