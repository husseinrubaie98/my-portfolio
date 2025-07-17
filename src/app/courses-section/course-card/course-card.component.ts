import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  public courseTitle: string = 'Course Title';

  @Input()
  public courseEndDate: string = 'March 2024';

  @Input()
  public courseProvider: string = 'Course Provider';

  @Input()
  public courseDescription: string = 'Course Description';
  
  @Input()
  public certificateUrl: string | null = '#';
}
