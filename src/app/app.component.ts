import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  angularCore = COURSES[0]
  rxjs = COURSES[1]
  ngrx = COURSES[2]

}
