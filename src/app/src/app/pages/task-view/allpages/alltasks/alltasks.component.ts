import { Component, OnInit, inject } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Observable, Subscription, defaultIfEmpty, filter, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Tasks } from '../../../../../../models/tasks';
import { TasksService } from '../../../../../../service/tasks.service';

@Component({
  selector: 'app-alltasks',
  standalone: true,
  imports: [TaskViewComponent, CommonModule, AsyncPipe, NgFor],
  templateUrl: './alltasks.component.html',
  styleUrl: './alltasks.component.css'
})
export class AlltasksComponent implements OnInit {

  
  // constructor(private store: Store<{tasksState: TasksState}>,private service: TasksService){
    //   console.log("hi i am on all tasks");
    //   this.store.dispatch(TasksActions.loadTasks({ sortBy: 'priority', sortOrder: 'asc' }));
    // this.tasks$ = this.store.select(TasksSelctor.selectAllTasks);   
    // }
    error!: Observable<String | null>;
    tasks$!: Observable<Tasks[]>;
    constructor(private store: Store<{ tasks: Tasks[] }>) {
      this.store.dispatch(TasksActions.loadTasks());
      this.tasks$ = this.store.select(TasksSelctor.selectAllTasks).pipe(
        filter(tasks => tasks !== null),
        map(tasks => tasks as Tasks[])
      );
      this.error = this.store.select(TasksSelctor.selectTasksError);
  }
  ngOnInit(): void {

  }
}
