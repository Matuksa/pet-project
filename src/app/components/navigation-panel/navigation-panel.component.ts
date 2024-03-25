import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPanelComponent {
  public select = 'en';

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
  ) {}

  changeLanguage(select: string): void {
    this.translate.use(select);
  }

  logOut() {
    this.authService.logOut();
  }
}
