import { Component } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Observable, filter, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tasks } from '../../../../../../models/tasks';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import { TasksService } from '../../../../../../service/tasks.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-important',
  standalone: true,
  imports: [TaskViewComponent,AsyncPipe],
  templateUrl: './important.component.html',
  styleUrl: './important.component.css'
})
export class ImportantComponent {
  error!: Observable<String | null>;
  tasks$!: Observable<Tasks[]>;
  constructor(private store: Store<{ tasks: Tasks[] }>) {
    this.store.dispatch(TasksActions.loadTasks());
    this.tasks$ = this.store.select(TasksSelctor.selectStatusSortedTasks).pipe(
      filter(tasks => tasks !== null),
      map(tasks => tasks as Tasks[])
    );
    this.error = this.store.select(TasksSelctor.selectTasksError);
  }
}
