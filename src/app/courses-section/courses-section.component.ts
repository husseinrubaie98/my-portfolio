import { Component } from '@angular/core';
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from './models/Course';

@Component({
  selector: 'app-courses-section',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {

  public courses : Course[] = [
    {
      title: 'Learn Bug Bounty Hunting & web Security Testing From Scratch',
      provider: 'Udemy / Zaid Sabih (z Security)',
      description: 'Bug bounty hunting and web security testing with practical examples (Port Swigger Labs)',
      endDate: 'April 2025',
      certificateUrl: 'https://www.udemy.com/certificate/UC-0d442897-61a1-47c1-8603-a180ac2f922b/',
      courseLink: 'https://www.udemy.com/course/learn-bug-bounty-hunting-web-security-testing-from-scratch/'
    },
    {
      title: 'Windows Command Line - Hands-On (CMD, Batch, MS-DOS)',
      provider: 'Udemy / Nerd Academy',
      description: 'Basic windows batch commands with practical examples',
      endDate: 'March 2025',
      certificateUrl: 'https://www.udemy.com/certificate/UC-16e9e600-fddd-48d9-8ff5-b664716c1aa4/',
      courseLink: 'https://www.udemy.com/course/the-complete-windows-command-line-course/'
    },
    {
      title: 'Angular - The Complete Guide',
      provider: 'Udemy / Maximilian Schwarzmüller',
      description: 'Learn Angular from scratch with this comprehensive course covering all aspects of Angular development.',
      endDate: 'March 2025',
      certificateUrl: null,
      courseLink: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/'
    },
  ]
}
