import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-panel',
  // standalone: true,
  // imports: [],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss'
})
export class NavigationPanelComponent implements OnInit {
  title = 'navigation-panel';
  isCollapsed: boolean = true;

  constructor ( public translate: TranslateService ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
    const selectElement = document.getElementById('mySelect') as HTMLSelectElement;
    selectElement.addEventListener('change', (event) => {
      this.translate.use(selectElement.value);
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}