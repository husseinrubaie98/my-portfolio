import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maintenance-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './maintenance-icon.component.html',
  styleUrl: './maintenance-icon.component.css'
})
export class MaintenanceIconComponent {
  @Input() svgClass = '';
}
