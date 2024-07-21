import { createReducer, on } from "@ngrx/store";
import * as TasksActions from './tasks.action'
import { Tasks } from "../../models/tasks";

export interface TasksState{
    tasks: Tasks[];
    loading:boolean;
    error: string | null
}
export const initialState: TasksState ={
    tasks:[],
    loading:false,
    error: null
}
export const TasksReducer = createReducer(
    initialState,
    on(TasksActions.loadTasksSuccess, (state,{tasks}) => ({ 
        ...state,
        tasks:tasks,
        loading:false
    })),
    on(TasksActions.loadTasksFailure,(state,{error})=>({
        ...state,
        error: error,
        loading:false
    }))
)