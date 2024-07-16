import { createReducer, on } from "@ngrx/store";
import { Tasks } from "../../models/tasks";
import * as TasksActions from './tasks.action'
export interface TasksState{
    tasks: Tasks[];
    error: String | null;
}
// export interface TasksState{
//     tasks: Tasks[];
//     error: String | null
// }

export const initialTasksState: TasksState = {
    tasks: [],
    error: null
}
export const TasksReducer = createReducer(
    initialTasksState,
    on(TasksActions.loadTasksSuccess, (state,{tasks}) => ({
        ...state,
        tasks,
        error:null
    })),
    on(TasksActions.loadTasksFailure,(state,{errorMessage})=>({
        ...state,
        error: errorMessage,
    }))
)