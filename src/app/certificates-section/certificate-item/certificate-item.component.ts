import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css'
})
export class CertificateItemComponent {

  @Input()
  certificateTitle: string = '';

  @Input()
  certificateImageUrl: string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoding-certificate-education%2F37&psig=AOvVaw2wUYC_g-kyiG6zOQVd7G0u&ust=1745345576238000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLi12ond6YwDFQAAAAAdAAAAABAE';
}
