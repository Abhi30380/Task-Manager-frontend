// import { Injectable, inject } from "@angular/core";
// import { TasksService } from "../../service/tasks.service";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import * as TasksActions from './tasks.action'
// import { catchError, exhaustAll, map, of, switchMap } from "rxjs";
// @Injectable()
// export class TasksEffect {
//   constructor(private actions$: Actions, private api: TasksService) {}

//   loadTasks$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TasksActions.loadTasks),
//       switchMap(() =>
//         this.api.getalltasks().pipe(
//           map((res) => {
//             const sortedTasks = res.sort((a, b) => {
//               if (a.status === 'Completed' && b.status!== 'Completed') return -1;
//               if (a.status!== 'Completed' && b.status === 'Completed') return 1;
//               return 0;
//             });
//             return TasksActions.loadTasksSuccess({ tasks: sortedTasks });
//           }),
//           catchError((error: any) =>
//             of(
//               TasksActions.loadTasksFailure({
//                 errorMessage: "Failed to load tasks",
//               })
//             )
//           )
//         )
//       )
//     )
//   );
// }
// tasks.effect.ts
import { Injectable } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TasksActions from './tasks.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Tasks } from '../../models/tasks';

@Injectable()
export class TasksEffect {
  constructor(private actions$: Actions, private api: TasksService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasks),
      switchMap(({ sortBy, sortOrder }) =>
        this.api.getalltasks().pipe(
          map((tasks: Tasks[]) => {
            const sortedTasks = tasks.sort((a, b) => {
              if (sortBy === 'dueDate') {
                const dateA = new Date(a.dueDate).getTime();
                const dateB = new Date(b.dueDate).getTime();
                return dateA - dateB
              } else if (sortBy === 'status') {
                if (a.status === 'Completed' && b.status !== 'Completed') return -1;
                if (a.status !== 'Completed' && b.status === 'Completed') return 1;
              } else {
                if (a.priority === 'high' && b.priority !== 'high') return -1;
                if (a.priority !== 'high' && b.priority === 'high') return 1;
                if (a.priority === 'medium' && b.priority === 'low') return -1;
                if (a.priority === 'low' && b.priority === 'medium') return 1;
              }
              // Ensure a number is always returned
              return 0;
            });
            return TasksActions.loadTasksSuccess({ tasks: sortedTasks });
          }),
          catchError((error: any) =>
            of(
              TasksActions.loadTasksFailure({
                errorMessage: 'Failed to load tasks',
              })
            )
          )
        )
      )
    )
  );
}

