import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './email-icon.component.html',
  styleUrl: './email-icon.component.css'
})
export class EmailIconComponent {

  @Input() svgClass: string = 'h-6 w-6 text-indigo-600';
}
