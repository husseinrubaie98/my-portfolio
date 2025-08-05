import { Component } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Project } from './models/Project';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      technologies: ['Angular', 'TypeScript', 'Tailwindcss'],
      githubUrl: 'https://github.com/husseinrubaie98/my-portfolio',
      liveUrl: 'https://husseinrubaie98.github.io/portfolio-prod/'
    },
    {
      title: 'AUB Outlook',
      description: 'A modern digital newspaper with admin panel for Outlook, the AUB\'s student newspaper',
      technologies: ['PHP Laravel', 'HTML', 'Bootstrap'],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Gym Subscription Tracker',
      description: 'A basic mobile application to track gym subscriptions with profile photos.',
      technologies: ['Ionic', 'TypeScript'],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'My blog',
      description: 'A personal blog CMS and mobile app to create and share my thoughts and experiences.',
      technologies: ['Angular', 'PHP Laravel', 'Ionic'],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Competitor Monitor',
      description: 'A java application to scrapte and monitor competitors\' prices and products with frequent email notifications.',
      technologies: ['Java', 'Jsoup', 'Web Scraping'],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Whish Website (App Section)',
      description: 'The old marketing website for the Whish mobile application',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: null,
      liveUrl: 'https://whish.money/app'
    }
  ]
}
