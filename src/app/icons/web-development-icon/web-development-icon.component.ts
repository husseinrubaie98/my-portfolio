import { NgClass } from '@angular/common';
import { Component, Inject, Input, Optional } from '@angular/core';

@Component({
  selector: 'app-web-development-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './web-development-icon.component.html',
  styleUrl: './web-development-icon.component.css'
})
export class WebDevelopmentIconComponent {
  @Input() svgClass = 'h-8 w-8 text-indigo-600';
}
