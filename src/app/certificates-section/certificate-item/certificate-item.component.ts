import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css'
})
export class CertificateItemComponent {

  isPreviewOpen = false;

  openPreview() {
    this.isPreviewOpen = true;
  }

  closePreview() {
    this.isPreviewOpen = false;
  }

  @Input()
  certificateTitle: string = '';

  @Input()
  certificateImageUrl: string = 'images/certificates/unavailable.jpg';
}
