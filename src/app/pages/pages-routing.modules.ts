import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
    { path: 'dashboard', component: PagesComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'graphs', component: GraphsComponent },
        { path: 'progress', component: ProgressComponent },
      ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }