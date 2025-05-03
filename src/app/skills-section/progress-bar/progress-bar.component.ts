import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  

  @Input()
  public skillLevel: number = 1;

  // setSkillLevel(level: number) : void {
  //   this.skillLevel = Math.min(Math.max(level, 1), 4);
  // }

  getSkillLevel() : number {
    return this.skillLevel;
  }


}
