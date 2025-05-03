import { Component } from '@angular/core';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-courses-section',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {

}
