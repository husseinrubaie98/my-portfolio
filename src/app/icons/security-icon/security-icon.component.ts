import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-security-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './security-icon.component.html',
  styleUrl: './security-icon.component.css'
})
export class SecurityIconComponent {
  @Input() svgClass = '';
}
