import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bug-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './bug-icon.component.html',
  styleUrl: './bug-icon.component.css'
})
export class BugIconComponent {
  @Input() svgClass = '';
}
