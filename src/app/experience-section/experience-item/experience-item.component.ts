import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {

  @Input()
  public position: string = `Senior Software Engineer`;

  @Input()
  public company: string = `Cardinal Health Inc.`;

  @Input()
  public duration: string = `Feb 2020 - Present`;

  @Input()
  public workSummary: string = `As a Senior Software Engineer at Cardinal Health, I have been instrumental in developing and maintaining scalable software solutions that enhance operational efficiency and drive business growth. My role involves collaborating with cross-functional teams to design, implement, and optimize software applications, ensuring they meet the highest standards of quality and performance.`;

  @Input()
  public isCurrent: boolean = false;
}
