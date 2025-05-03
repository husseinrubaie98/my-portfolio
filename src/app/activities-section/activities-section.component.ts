import { Component } from '@angular/core';
import { ActivityIconComponent } from "../icons/activity-icon/activity-icon.component";
import { ActivityItemComponent } from "./activity-item/activity-item.component";

@Component({
  selector: 'app-activities-section',
  standalone: true,
  imports: [ActivityIconComponent, ActivityItemComponent],
  templateUrl: './activities-section.component.html',
  styleUrl: './activities-section.component.css'
})
export class ActivitiesSectionComponent {

}
