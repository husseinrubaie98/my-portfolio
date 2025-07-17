import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './clock-icon.component.html',
  styleUrl: './clock-icon.component.css'
})
export class ClockIconComponent {

  @Input() svgClass: string = 'h-6 w-6 text-indigo-600';
}
