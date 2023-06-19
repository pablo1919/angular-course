import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input({required: true})
  curso: Course

  @Input()
  cardIndex: number

  @Output('courseSelected') /** este es el nombre del evento custom del componente que recibe los datos emitidos acá */
  courseEmitter = new EventEmitter<Course>()

  onClick(): void{
    console.log("course-card verCurso ")
  }

  onCourseViewed(){
    console.log("course-card onCourseViewed ")
    this.courseEmitter.emit(this.curso)
  }

}
