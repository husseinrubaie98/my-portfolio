import { Component, Input } from '@angular/core';
import { GithubButtonComponent } from "../buttons/github-button/github-button.component";
import { LinkedinButtonComponent } from "../buttons/linkedin-button/linkedin-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GithubButtonComponent, LinkedinButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/husseinal-rubaie', '_blank');
  }
  goToGithub() {
    window.open('https://github.com/husseinrubaie98/', '_blank');
  }

  public bio: string = `Experienced Senior Software Engineer with over 5 years in the field, and a very wide skillset.
  Delivering innovative and efficient solutions across various technologies.
  Passionate about solving complex problems and continuously evolving with the latest industry trends.`

  public position: string = `Senior Software Engineer`;
}
