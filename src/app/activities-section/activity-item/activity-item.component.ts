import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  standalone: true,
  imports: [],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.css'
})
export class ActivityItemComponent {

  @Input()
  activityTitle: string = '';

  @Input()
  activityDate: string = '';

  @Input()
  activityType : string = '';

  @Input()
  activityOrganizer : string = '';  

  @Input()
  activitySummary : string = '';
}
