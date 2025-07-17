import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './document-icon.component.html',
  styleUrl: './document-icon.component.css'
})
export class DocumentIconComponent {
  @Input() svgClass = '';
}
