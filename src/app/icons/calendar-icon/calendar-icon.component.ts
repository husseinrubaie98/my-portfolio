import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './calendar-icon.component.html',
  styleUrl: './calendar-icon.component.css'
})
export class CalendarIconComponent {

  @Input() svgClass: string = 'h-6 w-6 text-indigo-600';
  
}
