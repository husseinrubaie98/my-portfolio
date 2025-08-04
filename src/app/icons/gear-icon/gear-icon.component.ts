import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gear-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gear-icon.component.html',
  styleUrl: './gear-icon.component.css'
})
export class GearIconComponent {
  @Input() svgClass = '';
}
