import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./tasks.reducer";

import { AppState } from "./app.state";
import { Tasks } from "../../models/tasks";


export const selectTasksFeature = createFeatureSelector<TasksState>('tasks');

export const selectAllTasks = createSelector(
    selectTasksFeature,
    (state: { tasks: Tasks[] }) => state.tasks
)
export const selectStatusSortedTasks = createSelector(
    selectTasksFeature,
    (state: { tasks: Tasks[] }) => {
        return [...state.tasks].sort((a, b) => {
            if (a.status == 'Completed' && b.status == 'Incomplete') return -1;
            if (a.status == 'Incomplete' && b.status == 'Completed') return 1;
            return 0;
        })
    }
)
export const selectPrioritySortedTasks = createSelector(
    selectTasksFeature,
    (state: { tasks: Tasks[] }) => {
        return [...state.tasks].sort((a, b) => {
            const priorityOrder = ['high', 'medium', 'low'];
            return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
        })
    }
)
export const selectDateSortedTasks = createSelector(
    selectTasksFeature,
    (state: { tasks: Tasks[] }) => {
        return [...state.tasks].sort((a, b) => {
            const dateA = new Date(a.dueDate).getTime();
            const dateB = new Date(b.dueDate).getTime();
            return dateA - dateB
        })
    }
)
export const selectTasksError = createSelector(
    selectTasksFeature,
    (state: TasksState) => state.error
)
