import { NgModule } from '@angular/core';
import { NavigationPanelComponent } from './navigation-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  MatSelectModule,
} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [NavigationPanelComponent, CommonModule],
  declarations: [NavigationPanelComponent],
  providers: [],
})
export class NavigationPanelModule {}
