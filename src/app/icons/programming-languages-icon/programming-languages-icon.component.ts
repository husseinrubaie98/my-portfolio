import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programming-languages-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './programming-languages-icon.component.html',
  styleUrl: './programming-languages-icon.component.css'
})
export class ProgrammingLanguagesIconComponent {

  @Input() svgClass = '';

}
