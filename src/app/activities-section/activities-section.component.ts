import { Component } from '@angular/core';
import { ActivityIconComponent } from "../icons/activity-icon/activity-icon.component";
import { ActivityItemComponent } from "./activity-item/activity-item.component";
import { Activity } from './models/Activity';

@Component({
  selector: 'app-activities-section',
  standalone: true,
  imports: [ActivityIconComponent, ActivityItemComponent],
  templateUrl: './activities-section.component.html',
  styleUrl: './activities-section.component.css'
})
export class ActivitiesSectionComponent {

  public activities : Activity[] = [
    {
      title: 'Ionic 3 Workshop',
      type: 'Workshop',
      organizer: 'Computer Science Club (AUB)',
      date: 'April 2017',
      summary: 'Participated in a 30-hour workshop to build an Ionic 3 application for building CVs'
    }
  ]
}
