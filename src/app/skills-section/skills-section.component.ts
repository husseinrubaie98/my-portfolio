import { Component } from '@angular/core';
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { LevelNameComponent } from "./level-name/level-name.component";
import { SkillItemComponent } from "./skill-item/skill-item.component";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [ProgressBarComponent, LevelNameComponent, SkillItemComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
[x: string]: any;

}
