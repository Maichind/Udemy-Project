import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'graphs', component: GraphsComponent },
      { path: 'progress', component: ProgressComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
