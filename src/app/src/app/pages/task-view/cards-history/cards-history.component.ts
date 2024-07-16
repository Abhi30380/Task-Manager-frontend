import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../../../../../models/tasks';
import { AsyncPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cards-history',
  standalone: true,
  imports: [NgIf,NgClass,NgFor,AsyncPipe,DatePipe],
  templateUrl: './cards-history.component.html',
  styleUrl: './cards-history.component.css'
})
export class CardsHistoryComponent {
  @Input() history: any[] = [];
}
