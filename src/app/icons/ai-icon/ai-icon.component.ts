import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ai-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ai-icon.component.html',
  styleUrl: './ai-icon.component.css'
})
export class AiIconComponent {
  @Input() svgClass = '';
}
