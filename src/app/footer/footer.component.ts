import { Component } from '@angular/core';
import { GithubButtonComponent } from "../buttons/github-button/github-button.component";
import { GithubOutlineComponent } from "../outline/github-outline/github-outline.component";
import { LinkedinOutlineComponent } from "../outline/linkedin-outline/linkedin-outline.component";
import { MailOutlineComponent } from "../outline/mail-outline/mail-outline.component";
import { LocationIconComponent } from "../icons/location-icon/location-icon.component";
import { EmailIconComponent } from "../icons/email-icon/email-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GithubButtonComponent, GithubOutlineComponent, LinkedinOutlineComponent, MailOutlineComponent, LocationIconComponent, EmailIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();
}
