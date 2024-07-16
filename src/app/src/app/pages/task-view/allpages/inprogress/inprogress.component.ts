import { Component } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import { Observable } from 'rxjs';
import { Tasks } from '../../../../../../models/tasks';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import { TasksService } from '../../../../../../service/tasks.service';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-inprogress',
  standalone: true,
  imports: [TaskViewComponent],
  templateUrl: './inprogress.component.html',
  styleUrl: './inprogress.component.css'
})
export class InprogressComponent {
  tasks$!:Observable<Tasks[]>;
  error!: Observable<String | null>;

  constructor(private store: Store<{tasksState: TasksState}>,private service: TasksService){
    console.log("hi i am on all tasks");
    this.store.dispatch(TasksActions.loadTasks({ sortBy: 'priority', sortOrder: 'asc' }));
    this.tasks$ = this.store.select(TasksSelctor.selectAllTasks); 
    this.error = this.store.select(TasksSelctor.selectTasksError);
  }
  ngOnInit(): void {
  }
}
