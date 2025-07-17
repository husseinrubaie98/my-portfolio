import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";
import { Experience } from './models/Experience';
import { ExperienceIconComponent } from "../icons/experience-icon/experience-icon.component";

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [ExperienceItemComponent, ExperienceIconComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {
  allExperienceList: Experience[] = [
    {
      position: 'Senior Software Engineer [Full-Time]',
      company: 'WaveMark Solutions Inc.',
      duration: "Feb 2020 - Present",
      workSummary: `Owning and handling Hydra, an automated hardware test solution.
      My work on this project includes but not limited to: BA, design, development, unit testing, DevOps,
      and automated regression testing.`,
      isCurrent: true
    },
    {
      position: 'Full-Stack Web Developer [Internship]',
      company: 'FOO.mobi',
      duration: "Jun 2019 - Aug 2019",
      workSummary: `Learned PHP Laravel, Angular 8 and ionic framework, developed 2 scripts using Laravel,
      and created a project composed of a CMS (Laravel), website (Angular) and a mobile app (ionic)`,
      isCurrent: false
    },
    {
      position: 'Junior Software Developer [Part-Time]',
      company: 'TALACO SAL.',
      duration: "Jun 2018 - Sep 2018",
      workSummary: `Worked on a java SWING application based on drawing, drag-and-drop, mouse and keyboard events.
      Developed website for Whish App (whish.money/app - previous version).`,
      isCurrent: false
    }
  ];
}
