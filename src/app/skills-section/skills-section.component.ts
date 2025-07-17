import { Component, Injector } from '@angular/core';
import { SkillItemComponent } from "./skill-item/skill-item.component";
import { ExperienceCategory } from './models/ExperienceCategory';
import { WebDevelopmentIconComponent } from '../icons/web-development-icon/web-development-icon.component';
import { ProgrammingLanguagesIconComponent } from '../icons/programming-languages-icon/programming-languages-icon.component';
import { NgComponentOutlet } from '@angular/common';
import { DatabaseIconComponent } from '../icons/database-icon/database-icon.component';
import { MaintenanceIconComponent } from '../icons/maintenance-icon/maintenance-icon.component';
import { MobileIconComponent } from '../icons/mobile-icon/mobile-icon.component';
import { ShieldIconComponent } from '../icons/shield-icon/shield-icon.component';
import { CloudIconComponent } from '../icons/cloud-icon/cloud-icon.component';
import { GearIconComponent } from '../icons/gear-icon/gear-icon.component';
import { BugIconComponent } from '../icons/bug-icon/bug-icon.component';
import { SinglePersonelIconComponent } from '../icons/single-personel-icon/single-personel-icon.component';
import { DoublePersonelIconComponent } from '../icons/double-personel-icon/double-personel-icon.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillItemComponent, NgComponentOutlet],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {

  allSkills: ExperienceCategory[] = [
    {
      categoryName: 'Programming Languages',
      icon: 'programmingLanguages',
      skillSet: [
        { name: 'Python', level: 3, description: 'Python 2, Python 3, pip' },
        { name: 'JavaScript', level: 3, description: 'Vanilla, ES6, TypeScript' },
        { name: 'Java', level: 2, description: 'Java 8, Java 17, Java Swing, Maven' },
        { name: 'PHP', level: 2, description: 'PHP 7, Laravel' },
        { name: 'Other Languages', level: 1, description: 'C/C++, C#, Dart' },
      ] 
    },
    {
      categoryName: 'Web Development',
      icon: 'webDevelopment',
      skillSet: [
        { name: 'Basic Web', level: 4, description: 'HTML5, CSS3 and vanilla Javascript.' },
        { name: 'Modern Javascript', level: 3, description: 'Angular, TypeScript, jQuery' },
        { name: 'MVC Frameworks', level: 2, description: 'PHP Laravel, Python Django' },
        { name: 'Java Spring Boot', level: 1, description: 'Basic Hibernate, JPA and CRUD Operations' },
        { name: 'Other', level: 1, description: 'Node.js, AngularJS, Java EE' },
      ]
    },
    {
      categoryName: 'Database',
      icon: 'database',
      skillSet: [
        { name: 'PostgreSQL', level: 3, description: 'Setup, CRUD operations, complex joins, indexes, views, stored procedures, database management' },
        { name: 'MySQL', level: 2, description: 'CRUD operations, joins, views' },
        { name: 'SQLite', level: 1, description: 'Serup, basic knowledge and queries' },
        { name: 'MongoDB', level: 1, description: 'Serup, basic knowledge and queries' },
      ]
    },
    {
      categoryName: 'Software Tools',
      icon: 'softwareTools',
      skillSet: [
        { name: 'Sentry', level: 3, description: 'Configuration, Error reporting, monitoring' },
        { name: 'Jenkins', level: 3, description: 'Automated build jobs, pipeline scripting, infrastructure as code' },
        { name: 'Apache Superset', level: 3, description: 'Installation, configuration, creating reports, virtualization data' },
        { name: 'Version Control', level: 3, description: 'Git, GitHub, GitLab' },
        { name: 'Linux', level: 2, description: 'Bash scripting, services, linux administration' },
        { name: 'Jsoup', level: 2, description: 'Web and data frequent scraping' },
        { name: 'Serial Port Communication', level: 2, description: 'scanning, connecting and communicating with ports (using jSerialPort)' },
      ]
    },
    {
      categoryName: 'DevOps & Cloud',
      icon: 'devopsAndCloud',
      skillSet: [
        { name: 'CI/CD', level: 4, description: 'Principles and implementation, lead time, code coverage, automated tests' },
        { name: 'Jenkins', level: 3, description: 'Automated build jobs, pipeline scripting, infrastructure as code' },
        { name: 'Automated Testing', level: 3, description: 'Gauge Java, Selenium Java, Selenium Python' },
        { name: 'Virtualization / Docker', level: 3, description: 'Docker images, containers, networking, bridges and docker compose' },
      ]
    },
    {
      categoryName: 'Other Skills',
      icon: 'otherSkills',
      skillSet: [
        { name: 'Project Management', level: 3, description: 'Agile, Scrum, Kanban, Jira, Business Analysis' },
        { name: 'Design', level: 2, description: 'Figma, Adobe XD, Photoshop' },
        { name: 'Networking', level: 2, description: 'TCP/IP, UDP, HTTP/HTTPS' },
        { name: 'Other Skills', level: 1, description: 'Linux commands, bash scripting' },
      ]
    },
    {
      categoryName: 'Mobile Development',
      icon: 'mobileDevelopment',
      skillSet: [
        { name: 'Ionic', level: 2, description: 'Web View, ionic component, angular-based' },
        { name: 'Flutter', level: 1, description: 'Dart, Flutter SDK, widgets, state management' },
      ]
    },
    {
      categoryName: 'Security',
      icon: 'security',
      skillSet: [
        { name: 'Secure Code', level: 3, description: 'Defending against popular vulnerabilities and CWEs' },
        { name: 'Bug Bounty', level: 1, description: 'Using security tools like Brpsuite and Metasploit to exploit vulnerabilities' },
      ]
    },
    {
      categoryName: 'Software Testing',
      icon: 'softwareTesting',
      skillSet: [
        { name: 'Automated Testing', level: 4, description: 'Writing gauge specifications and test engine supporting' },
        { name: 'QA Engineering', level: 3, description: 'Writing test plan and test cases, smoke tests, SIT' },
      ]
    },
    {
      categoryName: 'Soft Skills / Management',
      icon: 'management',
      skillSet: [
        { name: 'Communication', level: 3, description: 'Effective communication with team members and stakeholders' },
        { name: 'Teamwork', level: 3, description: 'Collaboration in diverse teams to achieve common goals' },
        { name: 'Mentoring', level: 3, description: 'Guiding and supporting junior developers and QA members' },
        { name: 'Tutoring', level: 3, description: 'Teaching and sharing knowledge with peers and students' },
        { name: 'Well Organized', level: 3, description: 'Maintaining structure and order in work processes' },
        { name: 'Business Analysis', level: 2, description: 'Understanding business requirements and translating them into technical solutions' },
      ]
    },
    {
      categoryName: 'Soft Skills / Self Development',
      icon: 'selfDevelopment',
      skillSet: [
        { name: 'Problem Solving & Riddles', level: 3, description: 'Analytical thinking and troubleshooting skills' },
        { name: 'Self Motivation', level: 3, description: 'Proactive in learning and improving skills independently' },
        { name: 'Time Management', level: 3, description: 'Efficiently managing tasks and meeting deadlines' },
        { name: 'Ownership', level: 3, description: 'Taking responsibility for tasks and projects' },
        { name: 'Documentation', level: 2, description: 'Creating clear and concise documentation for projects and processes' },
        { name: 'Adaptability', level: 2, description: 'Flexibility in learning new technologies and adapting to changes' },
      ]
    }
  ];

  iconMap: { [key: string]: any } = {
    programmingLanguages: ProgrammingLanguagesIconComponent,
    webDevelopment: WebDevelopmentIconComponent,
    database: DatabaseIconComponent,
    softwareTools: MaintenanceIconComponent,
    mobileDevelopment: MobileIconComponent,
    security: ShieldIconComponent,
    devopsAndCloud: CloudIconComponent,
    otherSkills: GearIconComponent,
    softwareTesting: BugIconComponent,
    management: DoublePersonelIconComponent,
    selfDevelopment: SinglePersonelIconComponent
  }
}
