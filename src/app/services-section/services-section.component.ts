import { Component } from '@angular/core';
import { ServiceCardComponent } from "./service-card/service-card.component";
import { WebDevelopmentIconComponent } from "../icons/web-development-icon/web-development-icon.component";
import { CloudIconComponent } from "../icons/cloud-icon/cloud-icon.component";
import { DatabaseIconComponent } from "../icons/database-icon/database-icon.component";
import { MobileIconComponent } from "../icons/mobile-icon/mobile-icon.component";
import { SecurityIconComponent } from "../icons/security-icon/security-icon.component";
import { MaintenanceIconComponent } from "../icons/maintenance-icon/maintenance-icon.component";

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, WebDevelopmentIconComponent, CloudIconComponent, DatabaseIconComponent, MobileIconComponent, SecurityIconComponent, MaintenanceIconComponent],
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
}
