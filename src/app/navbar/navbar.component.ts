import { Component, HostListener } from '@angular/core';
import { NavbarItemComponent } from "./navbar-item/navbar-item.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarItemComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled = false;
  scrollPixelsTriggerToChangeNavbar = 100;

  sections: string[] = [
    "experience",
    "skills",
    "projects",
    "services",
    "courses",
    "certificates",
    "activities",
    "hire me",
  ];

  activeSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > this.scrollPixelsTriggerToChangeNavbar;
    this.updateActiveSection();
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  updateActiveSection() {
    const scrollPosition = window.scrollY + 100; // 100px offset to trigger early
    for (const sectionId of this.sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is within the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
        }
      }
    }
  }
}
