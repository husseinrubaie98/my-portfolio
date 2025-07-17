import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './code-button.component.html',
  styleUrl: './code-button.component.css'
})
export class CodeButtonComponent {

  @Input() svgClass = 'h-4 w-4';
}
