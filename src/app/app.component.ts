import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  angularCore = COURSES[0]
  rxjs = COURSES[1]
  ngrx = COURSES[2]

  onClick(){
    console.log("App component click")
  }

  /**
   * Imprime datos de cursos enviados desde course-card
   */
  onCourseSelected(curso?: Course){
    console.log("App component ", curso)
  }

}
