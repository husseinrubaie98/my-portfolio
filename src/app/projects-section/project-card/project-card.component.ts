import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projectTitle : string = '';
  @Input() projectDescription : string = '';
  @Input() technologies : string[] = [];
  @Input() githubUrl : string | null = null;;
  @Input() liveUrl : string | null = null;

  demoButtonDisabled = this.liveUrl === null;
  codeButtonDisabled = this.githubUrl === null;

  ngOnInit() {
    this.demoButtonDisabled = this.liveUrl === null;
    this.codeButtonDisabled = this.githubUrl === null;
  }
}
