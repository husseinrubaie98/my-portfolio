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
    { title: 'BS in Computer Science (AUB)', imageUrl: 'images/certificates/unavailable.jpg' },
    { title: 'Ionic 3 Workshop (30h)', imageUrl: 'images/certificates/unavailable.jpg' },
    { title: 'Bug Bounty for Beginners', imageUrl: 'images/certificates/bug-bounty.jpg' },
    { title: 'Windows Batch - Hands-On', imageUrl: 'images/certificates/windows-batch.jpg' },
  ]
}
