import { Component, OnInit, inject } from '@angular/core';
import { TaskViewComponent } from '../../task-view.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { TasksState } from '../../../../../../store/tasks/tasks.reducer';
import * as TasksActions from '../../../../../../store/tasks/tasks.action';
import * as TasksSelctor from '../../../../../../store/tasks/tasks.selector'
import { Tasks } from '../../../../../../models/tasks';
import { TasksService } from '../../../../../../service/tasks.service';

@Component({
  selector: 'app-alltasks',
  standalone: true,
  imports: [TaskViewComponent,CommonModule,AsyncPipe,NgFor],
  templateUrl: './alltasks.component.html',
  styleUrl: './alltasks.component.css'
})
export class AlltasksComponent  implements OnInit{
  
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
  // tasks: Tasks[] = [];
  // error: String | null = null;
  // subscription: Subscription | null = null;

  // constructor(private store: Store<{ tasksState: TasksState }>, private service: TasksService) {}

  // ngOnInit(): void {
  //   this.store.dispatch(TasksActions.loadTasks());
  //   this.subscription = this.store.select(TasksSelctor.selectTasksFeature).subscribe((state: TasksState) => {
  //     this.tasks = state.tasks;
  //     this.error = state.error;
  //     this.sortTasksByStatus();
  //     console.log(this.tasks);
  //   });
  // }
  // sortTasksByStatus(): void {
  //   this.tasks.sort((a, b) => {
  //     const statusOrder = {
  //       Completed: 0,
  //       Incomplete: 1,
  //       // add other status values in the order you want them to appear
  //     };
  //     return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
  //   });
  // }
  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
