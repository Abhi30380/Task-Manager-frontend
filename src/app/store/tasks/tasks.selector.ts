import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./tasks.reducer";


export const selectTasksFeature = createFeatureSelector<TasksState>('tasks');

export const selectAllTasks = createSelector(
    selectTasksFeature,
    (state: TasksState) => state.tasks
)
export const selectTasksError = createSelector(
    selectTasksFeature,
    (state: TasksState) => state.error
)
// export const selectAllTasks = createSelector(
//     selectTasksFeature,
//     (state: TasksState) => state.tasks.sort((a, b) => {
//       if (a.status === 'Completed' && b.status !== 'Completed') return -1;
//       if (a.status !== 'Completed' && b.status === 'Completed') return 1;
//       return 0;
//     })
//   );