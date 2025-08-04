import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './demo-button.component.html',
  styleUrl: './demo-button.component.css'
})
export class DemoButtonComponent {

  @Input() svgClass = 'h-4 w-4';

}
