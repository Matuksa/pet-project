import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NavigationPanelModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
