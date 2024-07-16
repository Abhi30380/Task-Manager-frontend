// import { createAction, props } from "@ngrx/store";
// import { Tasks } from "../../models/tasks";

// export const LOAD_TASKS = '[Tasks] loadTasks';
// export const LOAD_TASKS_SUCCESS = '[Tasks] loadTasksSuccess';
// export const LOAD_TASKS_FAILURE = '[Tasks] loadTasksFailure';

// export const loadTasks = createAction(LOAD_TASKS);
// export const loadTasksSuccess = createAction(
//     LOAD_TASKS_SUCCESS,
//     props<{tasks : Tasks[]}>()
// )
// export const loadTasksFailure = createAction(
//     LOAD_TASKS_FAILURE,
//     props<{errorMessage : String}>()
// )
import { createAction, props } from '@ngrx/store';
import { Tasks } from '../../models/tasks';

export const LOAD_TASKS = '[Tasks] loadTasks';
export const LOAD_TASKS_SUCCESS = '[Tasks] loadTasksSuccess';
export const LOAD_TASKS_FAILURE = '[Tasks] loadTasksFailure';

export const loadTasks = createAction(
  LOAD_TASKS,
  props<{ sortBy: string, sortOrder: string }>()
);
export const loadTasksSuccess = createAction(
  LOAD_TASKS_SUCCESS,
  props<{ tasks: Tasks[] }>()
);
export const loadTasksFailure = createAction(
  LOAD_TASKS_FAILURE,
  props<{ errorMessage: string }>()
);