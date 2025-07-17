import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css'
})
export class NavbarItemComponent {

  @Input() itemName: string ='';
  @Input() isActive: boolean = false;
  @Input() sectionId: string = '';

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
