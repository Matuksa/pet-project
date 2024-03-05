import { NgModule } from '@angular/core';
import { NavigationPanelComponent } from './navigation-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  MatFormField,
  MatOption,
  MatSelectModule,
} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    MatSelectModule,
    MatOption,
    MatFormField,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [NavigationPanelComponent, CommonModule],
  declarations: [NavigationPanelComponent],
  providers: [],
})
export class NavigationPanelModule {}
