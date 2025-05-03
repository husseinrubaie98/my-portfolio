import { Component } from '@angular/core';
import { CertificateIconComponent } from "../icons/certificate-icon/certificate-icon.component";
import { CertificateItemComponent } from "./certificate-item/certificate-item.component";

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CertificateIconComponent, CertificateItemComponent],
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.css'
})
export class CertificatesSectionComponent {

}
