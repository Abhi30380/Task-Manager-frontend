import { Routes } from '@angular/router';
import { TaskViewComponent } from './src/app/pages/task-view/task-view.component';
import { AlltasksComponent } from './src/app/pages/task-view/allpages/alltasks/alltasks.component';
import { CompletedComponent } from './src/app/pages/task-view/allpages/completed/completed.component';
import { InprogressComponent } from './src/app/pages/task-view/allpages/inprogress/inprogress.component';
import { ImportantComponent } from './src/app/pages/task-view/allpages/important/important.component';
import { InputdataComponent } from './src/app/pages/task-view/inputdata/inputdata.component';
import { LoginComponent } from './src/app/pages/login/login.component';
import { SignupComponent } from './src/app/pages/signup/signup.component';
import { authGuard } from './auth.guard';
import { HistoryComponent } from './src/app/pages/task-view/allpages/history/history.component';

export const routes: Routes = [
    {path: '',redirectTo:'alltasks',pathMatch:'full'},
    {path: 'alltasks',component: AlltasksComponent,canActivate:[authGuard]},
    {path: 'completed',component: CompletedComponent,canActivate:[authGuard]},
    {path: 'inprogess',component: InprogressComponent,canActivate:[authGuard]},
    {path: 'important',component: ImportantComponent,canActivate:[authGuard]},
    {path : 'input',component: InputdataComponent,canActivate:[authGuard]},
    {path: 'login',component: LoginComponent,},
    {path: 'signup',component: SignupComponent},
    {path: 'input/:id',component: InputdataComponent,canActivate:[authGuard]},
    {path: 'history/:id',component: HistoryComponent,canActivate:[authGuard]},
];
