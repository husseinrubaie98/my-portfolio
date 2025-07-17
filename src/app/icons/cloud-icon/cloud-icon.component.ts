import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cloud-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cloud-icon.component.html',
  styleUrl: './cloud-icon.component.css'
})
export class CloudIconComponent {
  @Input() svgClass = '';
}
