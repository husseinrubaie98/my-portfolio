import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-single-personel-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './single-personel-icon.component.html',
  styleUrl: './single-personel-icon.component.css'
})
export class SinglePersonelIconComponent {
  @Input() svgClass = '';
}
