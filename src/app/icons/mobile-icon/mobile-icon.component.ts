import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mobile-icon.component.html',
  styleUrl: './mobile-icon.component.css'
})
export class MobileIconComponent {
  @Input() svgClass = '';
}
