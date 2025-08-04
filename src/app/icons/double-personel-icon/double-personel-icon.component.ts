import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-double-personel-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './double-personel-icon.component.html',
  styleUrl: './double-personel-icon.component.css'
})
export class DoublePersonelIconComponent {
  @Input() svgClass = '';
}