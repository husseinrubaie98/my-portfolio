import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input()
  public projectTitle : string = '';
  
  @Input()
  public projectDescription : string = '';

  @Input()
  public technologies : string[] = [];
}
