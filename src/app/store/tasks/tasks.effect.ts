import { Actions, createEffect, ofType,  } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadTasks, loadTasksFailure, loadTasksSuccess } from "./tasks.action";
import { TasksService } from "../../service/tasks.service";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class TasksEffect {
  constructor(private actions$: Actions = inject(Actions), private tasksService: TasksService = inject(TasksService)) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      exhaustMap(() =>
        this.tasksService.getalltasks().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(error => of(loadTasksFailure({ error })))
        )
      )
    )
  );
}