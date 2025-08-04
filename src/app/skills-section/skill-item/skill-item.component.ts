import { Component, Input } from '@angular/core';
import { LevelNameComponent } from "../level-name/level-name.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [LevelNameComponent, ProgressBarComponent],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css'
})
export class SkillItemComponent {

  private skillLevelToNameMap: Record<number, string> = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
    4: "Expert"
  };

  @Input()
  public level : number = 1;

  @Input()
  public skillName : string | undefined;

  @Input()
  public description: string | undefined;

  getLevelNameFromSkillLevel(level : number) {
    return this.skillLevelToNameMap[level] || "Beginner";
  }

  
}
