import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoTest } from '../todoTest/todoTest';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
