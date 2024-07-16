import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { NgFor } from '@angular/common';
import { InputdataComponent } from './inputdata/inputdata.component';
import { Observable } from 'rxjs';
import { Tasks } from '../../../../models/tasks';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [SliderComponent,CardsComponent,NgFor,InputdataComponent,FormsModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {
  @Input() tasks$!: Observable<Tasks[]>
}