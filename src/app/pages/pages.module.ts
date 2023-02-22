import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent, 
    ProgressComponent, 
    GraphsComponent, 
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
  ]
})
export class PagesModule { }
