import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component'
import { GroupsComponent } from './groups/groups.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, GroupsComponent, AnalyticsComponent]
})
export class DashboardModule { }
