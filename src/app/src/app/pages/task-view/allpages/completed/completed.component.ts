import { Component } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import { Observable, filter, map } from 'rxjs';
import { Tasks } from '../../../../../../models/tasks';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import { TasksService } from '../../../../../../service/tasks.service';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [TaskViewComponent],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {
  error!: Observable<String | null>;
  tasks$!: Observable<Tasks[]>;
  constructor(private store: Store<{ tasks: Tasks[] }>) {
    this.store.dispatch(TasksActions.loadTasks());
    this.tasks$ = this.store.select(TasksSelctor.selectDateSortedTasks).pipe(
      filter(tasks => tasks !== null),
      map(tasks => tasks as Tasks[])
    );
    this.error = this.store.select(TasksSelctor.selectTasksError);
  }
}
