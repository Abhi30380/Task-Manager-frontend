import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../slider/slider.component';
import { Observable } from 'rxjs';
import { Tasks } from '../../../../../../models/tasks';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import { TasksService } from '../../../../../../service/tasks.service';
import { Store } from '@ngrx/store';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { CardsHistoryComponent } from '../../cards-history/cards-history.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [SliderComponent,CardsHistoryComponent,NgIf],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  history: any[] = [];
  constructor(private router: Router,private server: TasksService,private route: ActivatedRoute){}
  id:string = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id') ?? '';
        this.server.gettaskbyid(this.id).subscribe((task: any) => {
          this.history = task.history; 
        });
      }
    });
  }
  showSlider = false;

  ontoggle() {
    console.log('toggle');
    this.showSlider =!this.showSlider;
  }
}
