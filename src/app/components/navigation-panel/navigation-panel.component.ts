import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelComponent {
  public select = 'en';

  constructor(public translate: TranslateService) {}

  changeLanguage(select: string): void {
    this.translate.use(select);
  }
}
