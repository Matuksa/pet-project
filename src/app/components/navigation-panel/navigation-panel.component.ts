import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-panel',
  // standalone: true,
  // imports: [],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
})
export class NavigationPanelComponent implements OnInit {
  selected = 'en';

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
  }

  changeLanguage(): void {
    this.translate.use(this.selected);
  }
}
