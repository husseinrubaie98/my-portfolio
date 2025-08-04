import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-database-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './database-icon.component.html',
  styleUrl: './database-icon.component.css'
})
export class DatabaseIconComponent {

  @Input() svgClass = '';
}
