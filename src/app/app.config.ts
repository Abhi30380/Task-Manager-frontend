import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { customInterceptor } from './custom.interceptor';
import { httpInterceptor } from './interceptor/http.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TasksReducer } from './store/tasks/tasks.reducer';
import { TasksEffect } from './store/tasks/tasks.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withInterceptors([httpInterceptor])), provideHttpClient(withFetch()), provideStore(), provideEffects(), provideState({ name: 'tasks', reducer: TasksReducer }), provideEffects(TasksEffect), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
