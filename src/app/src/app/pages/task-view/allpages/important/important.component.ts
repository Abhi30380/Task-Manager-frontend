import { Component } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Observable, map } from 'rxjs';
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
  tasks$!:Observable<Tasks[]>;
  error!: Observable<String | null>;
  sortedTasks$!: Observable<Tasks[]>;

  constructor(private store: Store<{tasksState: TasksState}>,private service: TasksService){
    console.log("hi i am on important tasks");
    this.store.dispatch(TasksActions.loadTasks({ sortBy: 'status', sortOrder: 'asc' }));
    this.tasks$ = this.store.select(TasksSelctor.selectAllTasks);
    this.error = this.store.select(TasksSelctor.selectTasksError);
  }
  ngOnInit(): void {
  }
}
