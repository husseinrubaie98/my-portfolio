import { Component } from '@angular/core';
import { CertificateIconComponent } from "../icons/certificate-icon/certificate-icon.component";
import { CertificateItemComponent } from "./certificate-item/certificate-item.component";
import { Certificate } from './models/Certificate';

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CertificateIconComponent, CertificateItemComponent],
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.css'
})
export class CertificatesSectionComponent {
  public certificates: Certificate[] = [
    { title: 'BS in Computer Science (AUB)', imageUrl: 'assets/images/certificates/aubs.png' },
    { title: 'Ionic 3 Workshop (30h)', imageUrl: 'assets/images/certificates/aub.png' }
  ]
}
