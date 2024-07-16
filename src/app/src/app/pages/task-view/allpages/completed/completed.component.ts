import { Component } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import { Observable, map } from 'rxjs';
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
  tasks$!:Observable<Tasks[]>;
  error!: Observable<String | null>;

  constructor(private store: Store<{tasksState: TasksState}>,private service: TasksService){
    // console.log("hi i am on complete tasks");
    // this.store.dispatch(TasksActions.loadTasks());
    // console.log("hi i am on complete tasks");
    // this.store.dispatch(TasksActions.loadTasks());
    // this.tasks$ = this.store.select(TasksSelctor.selectAllTasks).pipe(
    //   map(tasks => tasks.filter(task => task.priority === 'high'))
    // );
    // this.error = this.store.select(TasksSelctor.selectTasksError);
    this.store.dispatch(TasksActions.loadTasks({ sortBy: 'dueDate', sortOrder: 'asc' }));
    this.tasks$ = this.store.select(TasksSelctor.selectAllTasks); 
    this.error = this.store.select(TasksSelctor.selectTasksError);
  }
  ngOnInit(): void {
  }
}
