import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dollar-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dollar-icon.component.html',
  styleUrl: './dollar-icon.component.css'
})
export class DollarIconComponent {

  @Input() svgClass: string = 'h-8 w-8 text-indigo-600';
}
