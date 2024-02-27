import { NgModule } from '@angular/core';
import { NavigationPanelComponent } from './navigation-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [TranslateModule, CommonModule],
    exports: [NavigationPanelComponent, CommonModule],
    declarations: [NavigationPanelComponent],
    providers: [],
})
export class NavigationPanelModule { }
