import { Component } from '@angular/core';
import { ServiceCardComponent } from "./service-card/service-card.component";
import { WebDevelopmentIconComponent } from "../icons/web-development-icon/web-development-icon.component";
import { MaintenanceIconComponent } from "../icons/maintenance-icon/maintenance-icon.component";
import { Service } from './models/Service';
import { GearIconComponent } from '../icons/gear-icon/gear-icon.component';
import { BugIconComponent } from '../icons/bug-icon/bug-icon.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, WebDevelopmentIconComponent, MaintenanceIconComponent, NgComponentOutlet],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {

  public webDevelopmentIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-code h-8 w-8 text-indigo-600">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline></svg>`;

  public services: Service[] = [
    {
      name: 'Web Development',
      description: 'Building responsive and dynamic websites using Angular, Tailwindcss and Spring Boot or Django.',
      icon: 'webDevelopment'
    },
    {
      name: 'Automated Testing',
      description: 'Implementing automated testing solutions to ensure code quality and reliability.',
      icon: 'automatedTesting'
    },
    {
      name: 'QA Engineering',
      description: 'Providing quality assurance services to ensure software meets the highest standards.',
      icon: 'softwareTesting'
    }
  ];

  iconMap: { [key: string]: any } = {
      webDevelopment: WebDevelopmentIconComponent,
      automatedTesting: GearIconComponent,
      softwareTesting: BugIconComponent
    }
}
