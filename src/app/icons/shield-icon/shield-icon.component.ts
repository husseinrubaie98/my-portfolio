import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shield-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './shield-icon.component.html',
  styleUrl: './shield-icon.component.css'
})
export class ShieldIconComponent {
  @Input() svgClass = '';
}
