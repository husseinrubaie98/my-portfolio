import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level-name',
  standalone: true,
  imports: [],
  templateUrl: './level-name.component.html',
  styleUrl: './level-name.component.css'
})
export class LevelNameComponent {

  @Input()
  public levelName : string = "Beginner";
}
