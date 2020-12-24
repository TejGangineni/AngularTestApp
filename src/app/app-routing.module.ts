import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuard } from './defender/route.guard';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: MatBoardComponent, canActivate : [RouteGuard]},    
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
